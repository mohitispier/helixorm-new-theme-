import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import { categories, featuredServices, getServiceHref } from "../../lib/services";
import { canonicalUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Reputation Management Services | Helix ORM",
  description:
    "Explore Helix ORM's featured reputation services and full range of review, search, social, and brand protection support.",
  alternates: { canonical: canonicalUrl("/reputation-management/") },
};

const categoryMarks = ["▤", "⌕", "✳", "◉", "▧", "◎", "◇", "♧", "▣", "↗", "⌁"];

export default function AllServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="directory-page">
        <section className="directory-hero">
          <div className="directory-hero-inner">
            <div className="directory-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <span>All Services</span>
            </div>
            <div className="directory-hero-layout">
              <div className="directory-hero-copy">
                <p className="eyebrow">Reputation management services</p>
                <h1>
                  A clearer view of
                  <br />
                  <em>your online reputation.</em>
                </h1>
                <p className="directory-hero-description">
                  From customer reviews to search results and social conversations, find
                  thoughtful support for the places people encounter your brand.
                </p>
                <div className="directory-hero-actions">
                  <Link className="button button-dark" href="/reputation-audit/">
                    Request a reputation audit <span aria-hidden="true">↗</span>
                  </Link>
                  <a className="text-link" href="#featured-services">
                    Explore our services <span aria-hidden="true">↓</span>
                  </a>
                </div>
                <div className="directory-proof">
                  <span>
                    <strong>{String(featuredServices.length).padStart(2, "0")}</strong>
                    featured services
                  </span>
                  <span aria-hidden="true" />
                  <span>
                    <strong>{String(categories.length).padStart(2, "0")}</strong>
                    service categories
                  </span>
                </div>
              </div>
              <div className="directory-signal-card" aria-label="Reputation signals overview">
                <div className="directory-signal-top">
                  <span className="directory-signal-dot" />
                  YOUR REPUTATION, IN CONTEXT
                  <span className="directory-signal-label">EXAMPLE SIGNAL VIEW</span>
                </div>
                <div className="directory-signal-title">
                  <div>
                    <span className="directory-signal-kicker">A connected picture</span>
                    <h2>See what people see.</h2>
                  </div>
                  <span className="directory-signal-star" aria-hidden="true">✳</span>
                </div>
                <div className="directory-chart" aria-hidden="true">
                  <div className="directory-chart-grid"><i /><i /><i /><i /></div>
                  <svg viewBox="0 0 520 135" preserveAspectRatio="none">
                    <path className="directory-chart-area" d="M0 112 C40 100 54 72 95 83 S151 109 188 74 S240 57 274 70 S319 85 351 47 S405 48 438 33 S487 42 520 8 V135 H0 Z" />
                    <path className="directory-chart-line" d="M0 112 C40 100 54 72 95 83 S151 109 188 74 S240 57 274 70 S319 85 351 47 S405 48 438 33 S487 42 520 8" />
                    <path className="directory-chart-secondary" d="M0 120 C48 104 58 109 97 96 S152 78 188 91 S239 103 274 81 S319 67 351 70 S402 53 438 57 S486 39 520 29" />
                  </svg>
                </div>
                <div className="directory-signal-legend">
                  <span><i />Reviews</span>
                  <span><i />Search</span>
                  <span><i />Conversations</span>
                </div>
                <div className="directory-signal-tags">
                  <span><b>01</b> Listen</span>
                  <span><b>02</b> Respond</span>
                  <span><b>03</b> Strengthen</span>
                </div>
                <p className="directory-signal-note">A thoughtful plan starts with the signals that matter to you.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="directory-section directory-featured" id="featured-services">
          <div className="directory-section-heading">
            <div>
              <p className="eyebrow">Featured services</p>
              <h2>Focused support.<br /><em>Where you need it.</em></h2>
            </div>
            <p>Start with the platforms and search experiences your customers use most.</p>
          </div>
          <div className="featured-service-grid">
            {featuredServices.map((service, index) => (
              <Link className="featured-service-card" href={getServiceHref(service.slug)} key={service.slug}>
                <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="directory-feature-icon" aria-hidden="true">
                  {["☆", "✓", "◌", "⌕"][index]}
                </span>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <span className="card-link">Explore service <span aria-hidden="true">↗</span></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="directory-section category-section" id="service-categories">
          <div className="directory-section-heading">
            <div>
              <p className="eyebrow">All service categories</p>
              <h2>Find the right place<br /><em>to begin.</em></h2>
            </div>
            <p>Explore our wider capabilities, organized around the reputation needs you have today.</p>
          </div>
          <div className="category-list">
            {categories.map((service, index) => (
              <Link className="category-row" href={getServiceHref(service.slug)} key={service.slug}>
                <span className="category-icon" aria-hidden="true">{categoryMarks[index]}</span>
                <span className="category-copy">
                  <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </span>
                <span className="category-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="directory-cta">
          <p className="eyebrow">Not sure where to start?</p>
          <h2>Let’s get a clearer picture.</h2>
          <p className="directory-cta-copy">We’ll help you understand what’s being said, where it matters, and what to do next.</p>
          <Link className="button button-lime" href="/reputation-audit/">
            Request a reputation audit <span aria-hidden="true">↗</span>
          </Link>
          <Link className="directory-contact-link" href="/contact/">Or contact our team directly</Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
