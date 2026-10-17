"use client";

import { useState, type FormEvent } from "react";

const auditOptions = [
  "Google Reviews",
  "Trustpilot Reviews",
  "Reddit Reputation",
  "Search Reputation",
];

export default function AuditRequestForm() {
  const [selectedAreas, setSelectedAreas] = useState<string[]>(auditOptions);
  const [emailNotice, setEmailNotice] = useState("");

  function toggleArea(area: string) {
    setSelectedAreas((current) =>
      current.includes(area)
        ? current.filter((selected) => selected !== area)
        : [...current, area],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const website = String(form.get("website") ?? "").trim();
    const brand = String(form.get("brand") ?? "").trim();
    const concern = String(form.get("concern") ?? "").trim();
    const message = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Website: ${website || "Not provided"}`,
      `Brand or name to audit: ${brand}`,
      `Areas to include: ${selectedAreas.length ? selectedAreas.join(", ") : "Not specified"}`,
      `Main concern: ${concern || "Not provided"}`,
    ].join("\n");
    const subject = `Reputation audit request — ${brand}`;

    setEmailNotice("Your email app should open with your request ready. If it doesn't, email info@helixorm.com.");
    window.location.href = `mailto:info@helixorm.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
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
          Your details are used only to respond to this request. Submitting
          opens an email draft in your email app; this site does not store your
          information.
        </p>
        <button className="button button-dark" type="submit">
          Open email to request my audit <span aria-hidden="true">↗</span>
        </button>
        <p className="audit-email-notice" aria-live="polite">{emailNotice}</p>
      </div>
    </form>
  );
}
