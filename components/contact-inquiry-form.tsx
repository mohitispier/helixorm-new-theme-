"use client";

import { useState, type FormEvent } from "react";

const interestOptions = [
  "Google Reviews Management",
  "Trustpilot Reviews Management",
  "Reddit Reputation Management",
  "Google Search Reputation Management",
  "Not sure yet",
];

export default function ContactInquiryForm() {
  const [emailNotice, setEmailNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const company = String(form.get("company") ?? "").trim();
    const website = String(form.get("website") ?? "").trim();
    const interest = String(form.get("interest") ?? "Not sure yet");
    const message = String(form.get("message") ?? "").trim();
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company || "Not provided"}`,
      `Website: ${website || "Not provided"}`,
      `Interested in: ${interest}`,
      "",
      "How we can help:",
      message,
    ].join("\n");

    setEmailNotice("Your email app should open with your message ready. If it doesn't, email info@helixorm.com.");
    window.location.href = `mailto:info@helixorm.com?subject=${encodeURIComponent("Contact request — Helix ORM")}&body=${encodeURIComponent(body)}`;
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
          Your details are used only to respond to your request. Submitting
          opens an email draft in your email app; this site does not store your
          information.
        </p>
        <button className="button button-dark" type="submit">
          Open email to send message <span aria-hidden="true">↗</span>
        </button>
        <p className="audit-email-notice" aria-live="polite">{emailNotice}</p>
      </div>
    </form>
  );
}
