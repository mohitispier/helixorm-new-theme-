"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const interestOptions = [
  "Google Reviews Management",
  "Trustpilot Reviews Management",
  "Reddit Reputation Management",
  "Google Search Reputation Management",
  "Not sure yet",
];

export default function ContactInquiryForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = new FormData(event.currentTarget);
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiries/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          name: String(form.get("name") ?? "").trim(),
          email: String(form.get("email") ?? "").trim(),
          company: String(form.get("company") ?? "").trim(),
          website: String(form.get("website") ?? "").trim(),
          interest: String(form.get("interest") ?? "Not sure yet"),
          message: String(form.get("message") ?? "").trim(),
        }),
      });

      let result: { success?: boolean; error?: string };
      try {
        result = await response.json();
      } catch {
        setErrorMessage("We couldn’t confirm delivery. Please email info@helixorm.com.");
        return;
      }

      if (!response.ok || !result.success) {
        setErrorMessage(result.error ?? "Your message could not be sent. Please email info@helixorm.com.");
        return;
      }

      router.push("/thank-you/");
    } catch {
      setErrorMessage("We couldn’t connect to send your message. Please email info@helixorm.com.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="audit-form contact-form" onSubmit={handleSubmit}>
      <div className="audit-form-heading">
        <p className="eyebrow">We’re listening</p>
        <h2 id="contact-form-title">How can we help?</h2>
        <p>Send us a few details and we’ll take it from there.</p>
      </div>

      <div className="audit-form-fields">
        <label className="audit-field">
          <span>Full name <i aria-hidden="true">*</i></span>
          <input autoComplete="name" name="name" required />
        </label>
        <label className="audit-field">
          <span>Work email <i aria-hidden="true">*</i></span>
          <input autoComplete="email" name="email" type="email" required />
        </label>
        <label className="audit-field">
          <span>Company <small>Optional</small></span>
          <input autoComplete="organization" name="company" />
        </label>
        <label className="audit-field">
          <span>Website <small>Optional</small></span>
          <input autoComplete="url" inputMode="url" name="website" placeholder="example.com" />
        </label>
        <label className="audit-field audit-field-full">
          <span>I’m interested in</span>
          <select defaultValue="Not sure yet" name="interest">
            {interestOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="audit-field audit-field-full audit-concern">
          <span>How can we help? <i aria-hidden="true">*</i></span>
          <textarea name="message" rows={5} placeholder="Tell us a little about what your brand is navigating." required />
        </label>
      </div>

      <div className="audit-form-submit">
        <p>
          We use your details to respond to your request. Read our{" "}
          <Link href="/privacy-policy/">Privacy Policy</Link>.
        </p>
        <button className="button button-dark" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending your message…" : "Send message"} <span aria-hidden="true">↗</span>
        </button>
        {errorMessage && (
          <p className="audit-email-notice" role="alert">
            {errorMessage}{" "}
            <a href="mailto:info@helixorm.com">Email us directly</a>.
          </p>
        )}
      </div>
    </form>
  );
}
