"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const auditOptions = [
  "Google Reviews",
  "Trustpilot Reviews",
  "Reddit Reputation",
  "Search Reputation",
];

export default function AuditRequestForm() {
  const router = useRouter();
  const [selectedAreas, setSelectedAreas] = useState<string[]>(auditOptions);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function toggleArea(area: string) {
    setSelectedAreas((current) =>
      current.includes(area)
        ? current.filter((selected) => selected !== area)
        : [...current, area],
    );
  }

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
          type: "audit",
          name: String(form.get("name") ?? "").trim(),
          email: String(form.get("email") ?? "").trim(),
          company: String(form.get("company") ?? "").trim(),
          website: String(form.get("website") ?? "").trim(),
          brand: String(form.get("brand") ?? "").trim(),
          areas: selectedAreas,
          concern: String(form.get("concern") ?? "").trim(),
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
        setErrorMessage(result.error ?? "Your request could not be sent. Please email info@helixorm.com.");
        return;
      }

      router.push("/thank-you/");
    } catch {
      setErrorMessage("We couldn’t connect to send your request. Please email info@helixorm.com.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="audit-form" onSubmit={handleSubmit}>
      <div className="audit-form-heading">
        <p className="eyebrow">Start with the essentials</p>
        <h2 id="audit-form-title">Request a reputation audit</h2>
        <p>Tell us a little about what you would like us to look at.</p>
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
          <span>Brand or name to audit <i aria-hidden="true">*</i></span>
          <input name="brand" placeholder="e.g. Acme Dental, or Jane Smith" required />
        </label>
      </div>

      <fieldset className="audit-options">
        <legend>Areas to include <small>Select all that apply</small></legend>
        <div className="audit-option-list">
          {auditOptions.map((area) => (
            <label className="audit-option" key={area}>
              <input
                checked={selectedAreas.includes(area)}
                onChange={() => toggleArea(area)}
                type="checkbox"
                value={area}
              />
              <span>{area}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="audit-field audit-field-full audit-concern">
        <span>What concerns you most? <small>Optional</small></span>
        <textarea name="concern" rows={4} placeholder="Share any context that would help us understand your request." />
      </label>

      <div className="audit-form-submit">
        <p>
          We use your details to respond to your request. Read our{" "}
          <Link href="/privacy-policy/">Privacy Policy</Link>.
        </p>
        <button className="button button-dark" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending your request…" : "Send audit request"} <span aria-hidden="true">↗</span>
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
