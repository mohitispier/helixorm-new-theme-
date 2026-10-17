import type { Metadata } from "next";
import Link from "next/link";
import ContactInquiryForm from "../../components/contact-inquiry-form";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Contact Helix ORM",
  description:
    "Talk with Helix ORM about reviews, search results, and the conversations shaping your brand’s online reputation.",
};

const contactDetails = [
  {
    icon: "↗",
    title: "Email",
    content: <a href="mailto:info@helixorm.com">info@helixorm.com</a>,
  },
  {
    icon: "◷",
    title: "Response time",
    content: <span>We aim to reply within two business days.</span>,
  },
  {
    icon: "◎",
    title: "Markets",
    content: <span>United States, United Kingdom, Canada, and other Tier 1 markets.</span>,
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="contact-page">
        <section className="contact-hero" aria-labelledby="contact-title">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact</span>
          </nav>
          <p className="eyebrow"><span className="status-dot" /> Start a conversation</p>
          <h1 id="contact-title">Talk to a reputation <em>specialist.</em></h1>
          <p className="contact-hero-description">
            Tell us a little about your situation. A member of our team will
            respond personally, usually within two business days.
          </p>
          <div className="contact-hero-note">
            <span className="contact-hero-note-icon" aria-hidden="true">h</span>
            <span><strong>A thoughtful first conversation.</strong><small>No pressure. Just a clearer next step.</small></span>
          </div>
        </section>

        <section className="contact-inquiry-section" aria-labelledby="contact-form-title">
          <div className="contact-inquiry-layout">
            <ContactInquiryForm />

            <aside className="contact-details">
              <div className="contact-details-heading">
                <p className="eyebrow">Here to help</p>
                <h2>Let’s start with what’s on your mind.</h2>
                <p>Share as much or as little as you like. We’ll take it from there.</p>
              </div>
              <div className="contact-details-list">
                {contactDetails.map((detail) => (
                  <div className="contact-detail-card" key={detail.title}>
                    <span className="contact-detail-icon" aria-hidden="true">{detail.icon}</span>
                    <span>
                      <strong>{detail.title}</strong>
                      <span className="contact-detail-content">{detail.content}</span>
                    </span>
                  </div>
                ))}
              </div>
              <div className="contact-audit-prompt">
                <span className="contact-audit-index">01 / A CLEAR PLACE TO BEGIN</span>
                <h3>Not sure what needs attention?</h3>
                <p>A reputation audit can help you understand the signals people see and prioritize sensible next steps.</p>
                <Link href="/reputation-audit/">Explore a reputation audit <span aria-hidden="true">↗</span></Link>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
