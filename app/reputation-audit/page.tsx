import type { Metadata } from "next";
import Link from "next/link";
import AuditRequestForm from "../../components/audit-request-form";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Request a Reputation Audit | Helix ORM",
  description:
    "Get a clearer picture of how your brand appears across reviews, search, and relevant online conversations. Request a no-pressure reputation audit.",
};

const auditAreas = [
  "Review profile health across Google and Trustpilot",
  "Page-one review of branded or personal-name search",
  "Relevant Reddit discussions and public sentiment",
  "Prioritized, realistic recommendations",
  "A short call to walk through the findings",
];

export default function ReputationAuditPage() {
  return (
    <>
      <SiteHeader />
      <main className="audit-page">
        <section className="audit-hero" aria-labelledby="audit-title">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Reputation audit</span>
          </nav>
          <div className="audit-hero-grid">
            <div className="audit-hero-copy">
              <p className="eyebrow"><span className="status-dot" /> A clear place to begin</p>
              <h1 id="audit-title">See your reputation <em>more clearly.</em></h1>
              <p className="audit-hero-description">
                Find out how your business or name appears online today—and
                what may deserve attention next. No obligation, no pressure,
                and no promises beyond what the evidence supports.
              </p>
              <a className="button button-dark" href="#audit-request">
                Request your audit <span aria-hidden="true">↓</span>
              </a>
              <div className="audit-proof-points" aria-label="About the audit">
                <span><i aria-hidden="true">✓</i> Practical, prioritized findings</span>
                <span><i aria-hidden="true">✓</i> Clear about what can and cannot change</span>
              </div>
            </div>

            <aside className="audit-visual" aria-label="A sample reputation overview">
              <div className="audit-visual-top">
                <span>YOUR ONLINE PRESENCE</span>
                <span><i aria-hidden="true" /> SAMPLE OVERVIEW</span>
              </div>
              <div className="audit-visual-title">
                <span>Reputation signals</span>
                <strong>A clearer starting point.</strong>
              </div>
              <div className="audit-signal-list">
                <div className="audit-signal">
                  <span className="audit-signal-icon audit-signal-reviews" aria-hidden="true">★</span>
                  <span><strong>Reviews</strong><small>Profiles &amp; feedback themes</small></span>
                  <span className="audit-signal-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="audit-signal">
                  <span className="audit-signal-icon audit-signal-search" aria-hidden="true">⌕</span>
                  <span><strong>Search</strong><small>What people find first</small></span>
                  <span className="audit-signal-arrow" aria-hidden="true">↗</span>
                </div>
                <div className="audit-signal">
                  <span className="audit-signal-icon audit-signal-community" aria-hidden="true">◎</span>
                  <span><strong>Conversations</strong><small>Relevant public discussions</small></span>
                  <span className="audit-signal-arrow" aria-hidden="true">↗</span>
                </div>
              </div>
              <p className="audit-visual-note">Understand the signals. Decide what matters.</p>
              <span className="audit-orbit audit-orbit-one" aria-hidden="true" />
              <span className="audit-orbit audit-orbit-two" aria-hidden="true" />
            </aside>
          </div>
        </section>

        <section className="audit-request-section" id="audit-request" aria-labelledby="audit-form-title">
          <div className="audit-request-layout">
            <AuditRequestForm />

            <aside className="audit-includes">
              <p className="eyebrow">What to expect</p>
              <h2 id="audit-includes-title">A useful picture, not a sales pitch.</h2>
              <p className="audit-includes-intro">
                We review the public signals that are relevant to your request
                and organize the findings into practical next steps.
              </p>
              <ul aria-labelledby="audit-includes-title">
                {auditAreas.map((area) => (
                  <li key={area}>
                    <span aria-hidden="true">✓</span>
                    {area}
                  </li>
                ))}
              </ul>
              <div className="audit-honesty-note">
                <span aria-hidden="true">“</span>
                <p>
                  If your reputation is already in good shape—or an issue is
                  outside what any provider can legitimately change—we will
                  tell you.
                </p>
              </div>
              <p className="audit-contact-note">
                Prefer email? Write to <a href="mailto:info@helixorm.com">info@helixorm.com</a>.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
