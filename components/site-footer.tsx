import Link from "next/link";
import { blogCategories } from "../lib/blog-content";
import { featuredServices, getServiceHref } from "../lib/services";

export default function SiteFooter() {

  return (
    <footer className="site-footer">
      <section className="footer-callout" aria-labelledby="footer-callout-title">
        <div className="footer-callout-copy">
          <p className="footer-callout-label"><span aria-hidden="true" /> A good place to begin</p>
          <h2 id="footer-callout-title">Let’s build trust<br />that lasts.</h2>
          <p>Get a clearer view of what’s working, what needs attention, and where to go next.</p>
        </div>
        <Link href="/reputation-audit/" className="footer-callout-button">
          <span>Request a reputation audit</span><span aria-hidden="true">↗</span>
        </Link>
        <span className="footer-callout-mark" aria-hidden="true">h</span>
      </section>
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="wordmark footer-wordmark" href="/" aria-label="Helix ORM home"><span className="wordmark-symbol" aria-hidden="true">h</span><span>helix<span>orm</span></span></Link>
          <p className="footer-tagline">Thoughtful reputation management,<br />built around your brand.</p>
          <a className="footer-email" href="mailto:info@helixorm.com">info@helixorm.com <span aria-hidden="true">↗</span></a>
        </div>
        <nav className="footer-links" aria-label="Services">
          <strong>Services</strong>
          <Link href="/reputation-management/">All services</Link>
          {featuredServices.map((service) => <Link href={getServiceHref(service.slug)} key={service.slug}>{service.title}</Link>)}
        </nav>
        <nav className="footer-links" aria-label="Company">
          <strong>Company</strong>
          <Link href="/about/">About Helix ORM</Link>
          <Link href="/case-studies/">Case studies</Link>
          <Link href="/contact/">Contact us</Link>
        </nav>
        <nav className="footer-links" aria-label="Resources">
          <strong>Resources</strong>
          <Link href="/blog/">Insights & resources</Link>
          {blogCategories.map((category) => (
            <Link href={`/blog/${category.slug}/`} key={category.slug}>{category.title}</Link>
          ))}
          <Link href="/reputation-audit/">Reputation audit</Link>
        </nav>
        <nav className="footer-links" aria-label="Legal">
          <strong>Legal</strong>
          <Link href="/privacy-policy/">Privacy Policy</Link>
          <Link href="/terms-of-service/">Terms of Service</Link>
          <Link href="/sitemap.xml">XML Sitemap</Link>
        </nav>
      </div>
      <div className="footer-bottom"><span>© 2026 Helix ORM</span><span>Reputation, built on what’s real.</span><Link href="/contact/">Contact us <span aria-hidden="true">↗</span></Link></div>
    </footer>
  );
}