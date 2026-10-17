import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "About Helix ORM | Reputation, built on what’s real",
  description:
    "Meet Helix ORM and learn about our thoughtful, transparent approach to online reputation management.",
};

const principles = [
  {
    number: "01",
    title: "Start with what’s real",
    description:
      "We look at genuine customer feedback and public conversations to understand the full context before recommending action.",
  },
  {
    number: "02",
    title: "Choose the useful next step",
    description:
      "Every brand is different. We focus on practical priorities that fit your audience, goals, and situation.",
  },
  {
    number: "03",
    title: "Build trust with care",
    description:
      "Clear, accurate communication matters. We respect platform rules and never promise control over third-party decisions.",
  },
];

const approach = [
  {
    number: "01",
    title: "Listen",
    description:
      "Understand your goals and review the reputation signals that matter to your brand.",
  },
  {
    number: "02",
    title: "Prioritize",
    description:
      "Separate urgent concerns from longer-term opportunities and agree on a clear scope.",
  },
  {
    number: "03",
    title: "Move forward",
    description:
      "Take thoughtful action, learn from the response, and adjust as your needs evolve.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="about-page">
        <section className="about-hero" aria-labelledby="about-title">
          <div className="about-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">About Helix ORM</span>
            </nav>
            <p className="eyebrow"><span className="status-dot" /> About Helix ORM</p>
            <h1 id="about-title">Reputation is earned, <em>together.</em></h1>
            <p className="about-hero-description">
              Your reputation is shaped by real experiences and the conversations
              around them. We help you understand those signals and respond with
              clarity, care, and a plan grounded in what’s true.
            </p>
            <div className="service-page-actions">
              <Link className="button button-dark" href="/reputation-management/">
                Explore our services <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/contact/">
                Talk with our team <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="about-hero-visual" role="img" aria-label="Colleagues working together around a table">
            <div className="about-visual-note">
              <span className="about-visual-mark" aria-hidden="true">h</span>
              <div>
                <span className="about-visual-label">A thoughtful way forward</span>
                <strong>Listen closely.<br />Respond with care.</strong>
              </div>
              <span className="about-visual-arrow" aria-hidden="true">↗</span>
            </div>
            <p className="about-visual-caption">Clarity before action. Trust at every step.</p>
          </div>
          <a className="about-scroll-cue" href="#our-belief">
            <span aria-hidden="true">↓</span> Get to know us
          </a>
        </section>

        <section className="about-belief" id="our-belief" aria-labelledby="about-belief-title">
          <div className="about-belief-heading">
            <p className="eyebrow">Our point of view</p>
            <h2 id="about-belief-title">
              A good reputation isn’t manufactured. It’s <em>understood and earned.</em>
            </h2>
          </div>
          <div className="about-belief-copy">
            <p>
              Reviews, search results, and online conversations can influence how
              people see a business—often before they speak with your team. The
              right response starts with listening and understanding what people
              are actually saying.
            </p>
            <p>
              Helix ORM helps organizations make sense of those signals and choose
              responsible next steps, from strengthening genuine feedback to
              communicating clearly in the places that matter.
            </p>
            <Link className="text-link" href="/reputation-audit/">
              Start with a clearer picture <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="about-signal-band" aria-label="How we make sense of reputation">
            <article>
              <span className="about-signal-number">01</span>
              <div><strong>Real experiences</strong><p>Start with what customers actually say.</p></div>
            </article>
            <span className="about-signal-connector" aria-hidden="true">→</span>
            <article>
              <span className="about-signal-number">02</span>
              <div><strong>Public conversations</strong><p>Understand where and why it matters.</p></div>
            </article>
            <span className="about-signal-connector" aria-hidden="true">→</span>
            <article>
              <span className="about-signal-number">03</span>
              <div><strong>Clear next steps</strong><p>Choose a response grounded in context.</p></div>
            </article>
          </div>
        </section>

        <section className="about-principles" aria-labelledby="about-principles-title">
          <div className="about-section-heading">
            <div>
              <p className="eyebrow">What guides us</p>
              <h2 id="about-principles-title">A human approach.<br /><em>Grounded in reality.</em></h2>
            </div>
            <p>
              Good reputation work should help people make better-informed
              decisions—not obscure the truth or promise what no one can control.
            </p>
          </div>
          <div className="about-principle-grid">
            {principles.map((principle) => (
              <article className="about-principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <div className="about-principle-symbol" aria-hidden="true">
                  {principle.number === "01" ? "◎" : principle.number === "02" ? "↗" : "✳"}
                </div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-approach" aria-labelledby="about-approach-title">
          <div className="about-approach-intro">
            <p className="eyebrow">How we work</p>
            <h2 id="about-approach-title">Thoughtful by design.<br /><em>Practical by nature.</em></h2>
            <p>
              We bring structure to a complicated picture, then work with you on
              the steps that make sense for your business.
            </p>
          </div>
          <ol className="about-approach-list">
            {approach.map((step) => (
              <li key={step.number}>
                <span className="about-approach-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="about-approach-arrow" aria-hidden="true">↗</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="about-cta" aria-labelledby="about-cta-title">
          <p className="eyebrow">A good place to begin</p>
          <h2 id="about-cta-title">Let’s make sense of your reputation.</h2>
          <p>
            Tell us what you’re seeing. We’ll help you understand the picture and
            discuss a thoughtful next step.
          </p>
          <div className="service-page-actions">
            <Link className="button button-lime" href="/reputation-audit/">
              Request a reputation audit <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/contact/">
              Contact our team <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
