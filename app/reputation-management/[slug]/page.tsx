import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../../components/site-footer";
import SiteHeader from "../../../components/site-header";
import SiteBreadcrumbs from "../../../components/site-breadcrumbs";
import { blogArticles } from "../../../lib/blog-content";
import { getServicePageContent } from "../../../lib/service-page-content";
import {
  getServiceBySlug,
  getServiceHref,
  services,
} from "../../../lib/services";
import { canonicalUrl } from "../../../lib/site";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Helix ORM`,
    description: service.description,
    alternates: { canonical: canonicalUrl(getServiceHref(service.slug)) },
  };
}

const defaultApproachSteps = [
  {
    title: "Listen and establish context",
    description:
      "Understand your goals, review the relevant public signals, and agree on the scope before taking action.",
  },
  {
    title: "Prioritize a thoughtful response",
    description:
      "Separate urgent issues from longer-term opportunities, then align on owners, approvals, and next steps.",
  },
  {
    title: "Learn and strengthen over time",
    description:
      "Review progress, share useful patterns, and refine the plan as customer feedback and circumstances change.",
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const content = getServicePageContent(service);
  const isRedditService = service.slug === "reddit-reputation";
  const parent = service.parentCategory
    ? getServiceBySlug(service.parentCategory)
    : undefined;
  const relatedServices = service.related
    .map(getServiceBySlug)
    .filter((related) => related !== undefined);
  const relatedArticles = blogArticles.filter(
    (article) =>
      article.service === service.slug ||
      article.service === parent?.slug ||
      service.related.includes(article.service),
  );

  return (
    <>
      <SiteHeader />
      <main className={`service-detail-page${isRedditService ? " service-detail-page-reddit" : ""}`}>
        <section className="service-detail-hero">
          <div className="service-detail-hero-inner">
            <SiteBreadcrumbs
              items={[
                { name: "Home", href: "/" },
                {
                  name: "Reputation Management",
                  href: "/reputation-management/",
                },
                {
                  name: service.title,
                  href: getServiceHref(service.slug),
                  ...(service.slug === "google-reviews"
                    ? { mobileName: "Google Reviews" }
                    : {}),
                },
              ]}
            />
            <div className="service-detail-hero-grid">
              <div className="service-detail-hero-copy">
                <p className="eyebrow">
                  {isRedditService
                    ? service.title
                    : service.type === "featured"
                      ? "Featured service"
                      : "Service category"}
                </p>
                <h1>{content.heroHeadline ?? service.title}</h1>
                <p className="service-detail-intro">
                  {content.heroDescription ?? service.description}
                </p>
                <div className="service-page-actions">
                  <Link className="button button-dark" href="/reputation-audit/">
                    Request a reputation audit <span aria-hidden="true">↗</span>
                  </Link>
                  <a className="text-link" href="#service-problem">
                    Explore our approach <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
              {isRedditService ? (
                <figure className="service-community-preview">
                  <figcaption>
                    <span>Community discussion monitor — illustrative example</span>
                    <span>Sample data</span>
                  </figcaption>
                  <div className="service-community-post">
                    <p className="service-community-meta"><span aria-hidden="true">◉</span> r/SaaS <span>·</span> Sample discussion</p>
                    <p className="service-community-question">
                      Has anyone used [Your Brand] for team onboarding? Looking for honest opinions.
                    </p>
                    <blockquote>
                      Used it for about a year. Setup was easy, support was slow at first but improved.
                    </blockquote>
                    <blockquote className="service-community-reply">
                      <span>Disclosed brand team reply</span>
                      Hi, I work on the team. Thanks for the fair feedback on support. We added live chat recently. Happy to answer any questions here.
                    </blockquote>
                    <div className="service-community-sentiment">
                      <span>Example sentiment</span>
                      <strong><i /> Mostly neutral to positive</strong>
                    </div>
                  </div>
                  <div className="service-community-audience">
                    <span className="service-audience-icon" aria-hidden="true">◎</span>
                    <div>
                      <span>Who this helps</span>
                      <p>{content.audience}</p>
                    </div>
                  </div>
                </figure>
              ) : (
                <aside className="service-audience-card">
                  <span className="service-audience-icon" aria-hidden="true">◎</span>
                  <p className="eyebrow">What it is + who it is for</p>
                  <p>{service.description}</p>
                  <div className="service-audience-divider" />
                  <h2>Who it helps</h2>
                  <p>{content.audience}</p>
                </aside>
              )}
            </div>
            <a className="service-scroll-cue" href="#service-problem">
              <span aria-hidden="true">↓</span> Scroll to explore
            </a>
          </div>
        </section>

        <nav className="service-section-nav" aria-label="On this page">
          <span>ON THIS PAGE</span>
          <a href="#service-problem"><i>01</i> The problem</a>
          <a href="#what-we-manage"><i>02</i> What we manage</a>
          <a href="#our-approach"><i>03</i> Our approach</a>
          <a href="#what-to-expect"><i>04</i> What to expect</a>
          <a href="#why-helixorm"><i>05</i> Why HelixORM</a>
          <a href="#faqs"><i>06</i> FAQs</a>
        </nav>

        <section className="service-problem-section" id="service-problem">
          <div className="service-section-inner service-problem-grid">
            <div>
              <p className="eyebrow">01 / The problem</p>
              <h2>{content.challenges ? "Problems we help you solve." : "When the picture is unclear, it’s hard to know what to do next."}</h2>
            </div>
            {content.challenges ? (
              <div className="service-challenge-grid">
                {content.challenges.map((challenge) => (
                  <article key={challenge.title}>
                    <span aria-hidden="true">!</span>
                    <div>
                      <h3>{challenge.title}</h3>
                      <p>{challenge.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="service-problem-copy">
                <p>{content.problem}</p>
                <p>
                  The first step is understanding the context—not reacting to a single
                  post, score, or search result in isolation.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="service-manage-section" id="what-we-manage">
          <div className="service-section-inner">
            <div className="service-section-heading">
              <div>
                <p className="eyebrow">02 / What we manage</p>
                <h2>Focused work, shaped around your needs.</h2>
              </div>
              <p>
                Scope is agreed together, based on the platforms, concerns, and goals
                that matter to you.
              </p>
            </div>
            <div className="service-activity-grid">
              {content.activities.map((activity, index) => (
                <article className="service-activity-card" key={activity}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{activity}</p>
                  <span className="service-activity-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-approach-section" id="our-approach">
          <div className="service-section-inner service-approach-grid">
            <div className="service-approach-intro">
              <p className="eyebrow">03 / Our approach</p>
              <h2>Steady, considered, and grounded in what’s real.</h2>
              <p>
                A clear process helps your team make informed decisions without
                overpromising or adding unnecessary noise.
              </p>
            </div>
            <ol className="service-approach-steps">
              {(content.process ?? defaultApproachSteps).map((step, index) => (
                <li key={step.title}>
                  <span className="service-step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="service-outcomes-section" id="what-to-expect">
          <div className="service-section-inner">
            <div className="service-section-heading">
              <div>
                <p className="eyebrow">04 / What you can expect</p>
                <h2>Useful clarity, not unrealistic guarantees.</h2>
              </div>
              <p>
                Every engagement is different. We focus on practical progress and
                transparent communication—not outcomes outside our control.
              </p>
            </div>
            <div className="service-outcome-grid">
              {content.outcomes.map((outcome, index) => (
                <article className="service-outcome-card" key={outcome}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{outcome}</h3>
                </article>
              ))}
            </div>
            <p className="service-outcomes-note">
              Platform decisions, customer opinions, and search results remain outside
              Helix ORM’s control. No specific ranking, removal, rating, or timeline is
              promised.
            </p>
          </div>
        </section>

        <section className="service-why-section" id="why-helixorm">
          <div className="service-section-inner service-why-grid">
            <div>
              <p className="eyebrow">05 / Why HelixORM</p>
              <h2>Reputation work should earn trust, not manufacture it.</h2>
            </div>
            <div className="service-why-copy">
              <p>
                We take a human-first, policy-aware approach: understand the full
                context, communicate with care, and build recommendations around
                authentic feedback and accurate information.
              </p>
              <ul>
                <li>Clear scope, priorities, and communication</li>
                <li>Respect for platform rules and community context</li>
                <li>No fake reviews, undisclosed promotion, or promised removals</li>
              </ul>
            </div>
          </div>
        </section>

        {relatedServices.length > 0 && (
          <section className="related-services service-related-section" id="related-services">
            <div className="service-section-inner">
              <div className="service-section-heading">
                <div>
                  <p className="eyebrow">06 / Related services</p>
                  <h2>Connected support for the bigger picture.</h2>
                </div>
                <p>
                  These services may complement your {service.title.toLowerCase()} plan.
                </p>
              </div>
              <div className="related-service-links">
                {relatedServices.map((related) => (
                  <Link href={getServiceHref(related.slug)} key={related.slug}>
                    {related.title}<span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
              {parent && (
                <Link className="text-link service-parent-link" href={getServiceHref(parent.slug)}>
                  Explore {parent.title} <span aria-hidden="true">↗</span>
                </Link>
              )}
              {relatedArticles.length > 0 && (
                <nav className="service-related-reading" aria-label="Related insights">
                  <p className="eyebrow">Related insights</p>
                  {relatedArticles.map((article) => (
                    <Link href={`/blog/${article.slug}/`} key={article.slug}>
                      {article.title} <span aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          </section>
        )}

        <section className="service-faq-section" id="faqs">
          <div className="service-section-inner service-faq-grid">
            <div className="service-faq-intro">
              <p className="eyebrow">07 / FAQs</p>
              <h2>Questions, answered clearly.</h2>
              <p>Helpful context before deciding what makes sense for your team.</p>
            </div>
            <div className="service-faq-list">
              {content.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">＋</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="service-detail-cta" id="consultation">
          <p className="eyebrow">08 / A clear place to begin</p>
          <h2>{isRedditService ? "Get a clearer view of your Reddit reputation." : "Let’s understand what your reputation needs."}</h2>
          <p>
            Share what you’re seeing. We’ll help you assess the situation and discuss
            practical next steps.
          </p>
          <div className="service-page-actions">
            <Link className="button button-lime" href="/reputation-audit/">
              Request an assessment <span aria-hidden="true">↗</span>
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
