import { NextResponse } from "next/server";

type ContactSubmission = {
  type: "contact";
  name: string;
  email: string;
  company: string;
  website: string;
  interest: string;
  message: string;
};

type AuditSubmission = {
  type: "audit";
  name: string;
  email: string;
  company: string;
  website: string;
  brand: string;
  areas: string[];
  concern: string;
};

type InquirySubmission = ContactSubmission | AuditSubmission;

function isString(value: unknown, maxLength: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= maxLength;
}

function validEmail(value: unknown): value is string {
  return isString(value, 254) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function jsonResponse(body: { error: string }, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isInquirySubmission(value: unknown): value is InquirySubmission {
  if (!value || typeof value !== "object") return false;
  const submission = value as Record<string, unknown>;
  if (
    !validEmail(submission.email) ||
    !isString(submission.name, 120) ||
    (submission.company !== "" && !isString(submission.company, 160)) ||
    (submission.website !== "" && !isString(submission.website, 300))
  ) {
    return false;
  }

  if (submission.type === "contact") {
    return (
      isString(submission.interest, 120) &&
      isString(submission.message, 5000)
    );
  }

  if (submission.type === "audit") {
    return (
      isString(submission.brand, 200) &&
      Array.isArray(submission.areas) &&
      submission.areas.length <= 20 &&
      submission.areas.every((area) => isString(area, 100)) &&
      (submission.concern === "" || isString(submission.concern, 5000))
    );
  }

  return false;
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) {
    return jsonResponse({ error: "This request could not be verified. Please try again." }, 403);
  }

  try {
    if (new URL(origin).host !== host) {
      return jsonResponse({ error: "This request could not be verified. Please try again." }, 403);
    }
  } catch {
    return jsonResponse({ error: "This request could not be verified. Please try again." }, 403);
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_000) {
    return jsonResponse({ error: "The request is too large. Please shorten your message." }, 413);
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: "The form data could not be read. Please try again." }, 400);
  }

  if (!isInquirySubmission(payload)) {
    return jsonResponse({ error: "Please check the form fields and try again." }, 400);
  }

  const webhookUrl = process.env.HELIXORM_INQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return jsonResponse(
      { error: "The inquiry form is not configured yet. Please email info@helixorm.com instead." },
      503,
    );
  }

  let destination: URL;
  try {
    destination = new URL(webhookUrl);
  } catch {
    console.error("Inquiry webhook configuration is not a valid URL.");
    return jsonResponse(
      { error: "The inquiry form is temporarily unavailable. Please email info@helixorm.com." },
      503,
    );
  }

  const isLocalDevelopment =
    process.env.NODE_ENV !== "production" &&
    (destination.hostname === "localhost" || destination.hostname === "127.0.0.1");
  if (destination.protocol !== "https:" && !isLocalDevelopment) {
    console.error("Inquiry webhook configuration must use HTTPS.");
    return jsonResponse(
      { error: "The inquiry form is temporarily unavailable. Please email info@helixorm.com." },
      503,
    );
  }

  try {
    const response = await fetch(destination, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.HELIXORM_INQUIRY_WEBHOOK_SECRET
          ? { Authorization: `Bearer ${process.env.HELIXORM_INQUIRY_WEBHOOK_SECRET}` }
          : {}),
      },
      body: JSON.stringify({
        ...payload,
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(8_000),
      cache: "no-store",
      redirect: "error",
    });

    if (!response.ok) {
      console.error(`Inquiry webhook returned HTTP ${response.status}.`);
      return jsonResponse(
        { error: "Your request could not be sent right now. Please email info@helixorm.com." },
        502,
      );
    }
  } catch (error) {
    const errorName = error instanceof Error ? error.name : "UnknownError";
    console.error(`Inquiry webhook request failed (${errorName}).`);
    return jsonResponse(
      { error: "Your request could not be sent right now. Please email info@helixorm.com." },
      502,
    );
  }

  return NextResponse.json({ success: true }, {
    headers: { "Cache-Control": "no-store" },
  });
}
