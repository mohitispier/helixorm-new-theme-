import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Reputation Management Case Studies | Helix ORM",
  description:
    "Explore the kinds of reputation challenges Helix ORM helps businesses understand across reviews, online communities, and search.",
};

const caseStudyPreviews = [
  {
    topic: "Google Reviews",
    audience: "Multi-location business",
    title: "Building a consistent review program across locations",
    image: "case-study-reviews",
    imageAlt: "A welcoming local business with a customer and team member",
    challenge: "Feedback and response practices can vary from one location to another.",
    approach: "Create clearer review-request workflows and practical response guidance.",
  },
  {
    topic: "Trustpilot & Reddit",
    audience: "Software company",
    title: "Understanding how a software brand is discussed online",
    image: "case-study-community",
    imageAlt: "Colleagues collaborating around a table",
    challenge: "Product conversations can be spread across review sites and communities.",
    approach: "Listen for recurring themes and participate transparently where appropriate.",
  },
  {
    topic: "Search reputation",
    audience: "Founder and executive",
    title: "Strengthening an executive’s personal-name search",
    image: "case-study-search",
    imageAlt: "A person reviewing search and analytics information on a laptop",
    challenge: "Branded searches may surface scattered or outdated information.",
    approach: "Review key results and strengthen accurate, useful owned information.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main className="case-studies-page">
        <section className="case-studies-hero" aria-labelledby="case-studies-title">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Case studies</span>
          </nav>
          <p className="eyebrow"><span className="status-dot" /> Case studies</p>
          <h1 id="case-studies-title">Results we can <em>stand behind.</em></h1>
          <p>
            Reputation work is personal to each business and audience. We only
            publish client stories after they have been reviewed and approved,
            with results supported by evidence.
          </p>
          <div className="case-studies-trust-note">
            <span aria-hidden="true">✓</span>
            Published client stories are verified and shared with approval.
          </div>
        </section>

        <section className="case-studies-library" aria-labelledby="case-library-title">
          <div className="case-studies-section-heading">
            <div>
              <p className="eyebrow">A look at the work</p>
              <h2 id="case-library-title">Different challenges.<br /><em>Thoughtful approaches.</em></h2>
            </div>
            <p>
              Explore common reputation scenarios and the kind of thoughtful
              work each can call for.
            </p>
          </div>

          <div className="case-study-grid">
            {caseStudyPreviews.map((study, index) => (
              <article className="case-study-card" key={study.topic}>
                <div
                  className={`case-study-image ${study.image}`}
                  role="img"
                  aria-label={study.imageAlt}
                >
                  <span className="case-study-image-index">0{index + 1}</span>
                  <span className="case-study-placeholder">Illustrative scenario</span>
                </div>
                <div className="case-study-card-content">
                  <div className="case-study-card-meta">
                    <span>{study.topic}</span>
                    <span>Example scenario</span>
                  </div>
                  <p className="case-study-audience">{study.audience}</p>
                  <h3>{study.title}</h3>
                  <div className="case-study-details">
                    <div className="case-study-detail">
                      <span>Typical challenge</span>
                      <p>{study.challenge}</p>
                    </div>
                    <div className="case-study-detail">
                      <span>Area of focus</span>
                      <p>{study.approach}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="case-studies-disclosure">
            These are illustrative scenarios, not published client case studies.
            We share outcomes only when they are verified and approved.
          </p>
        </section>

        <section className="case-studies-cta" aria-labelledby="case-cta-title">
          <div>
            <p className="eyebrow">Your situation is unique</p>
            <h2 id="case-cta-title">See where your reputation stands today.</h2>
            <p>
              Start with a clear review of the signals people find across
              reviews, search, and relevant public conversations.
            </p>
          </div>
          <div className="case-studies-cta-actions">
            <Link className="button button-lime" href="/reputation-audit/">
              Request a reputation audit <span aria-hidden="true">↗</span>
            </Link>
            <Link className="case-studies-contact-link" href="/contact/">
              Book a consultation <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
