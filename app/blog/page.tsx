import type { Metadata } from "next";
import Link from "next/link";
import BlogArticleBrowser from "../../components/blog-article-browser";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";
import { blogCategories } from "../../lib/blog-content";

export const metadata: Metadata = {
  title: "Insights & Resources | Helix ORM",
  description:
    "Practical perspectives on online reviews, search visibility, brand reputation, and authentic community engagement.",
};

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="blog-page">
        <section className="blog-hero" aria-labelledby="blog-title">
          <div className="blog-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Insights &amp; Resources</span>
            </nav>
            <p className="eyebrow"><span className="status-dot" /> Insights &amp; resources</p>
            <h1 id="blog-title">Clear thinking for a changing <em>online world.</em></h1>
            <p className="blog-hero-description">
              Practical perspectives to help you make sense of reviews, search,
              and the conversations shaping how people see your brand.
            </p>
            <div className="service-page-actions">
              <Link className="button button-dark" href="#insights">
                Explore the insights <span aria-hidden="true">↓</span>
              </Link>
              <Link className="text-link" href="/reputation-audit/">
                Request an audit <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <aside className="blog-cover" aria-label="The Helix ORM journal">
            <div className="blog-cover-topline"><span>THE HELIX ORM JOURNAL</span><span>FIELD NOTES / 01</span></div>
            <div className="blog-cover-orbit" aria-hidden="true">
              <span className="blog-orbit-ring blog-orbit-ring-one" />
              <span className="blog-orbit-ring blog-orbit-ring-two" />
              <span className="blog-orbit-core">h</span>
              <span className="blog-orbit-label blog-orbit-label-one">LISTEN</span>
              <span className="blog-orbit-label blog-orbit-label-two">UNDERSTAND</span>
              <span className="blog-orbit-label blog-orbit-label-three">RESPOND</span>
            </div>
            <div className="blog-cover-bottom">
              <span>REPUTATION, BUILT ON WHAT’S REAL.</span>
              <strong>Notes on trust<br />in a digital world.</strong>
            </div>
          </aside>
          <nav className="blog-topic-strip" aria-label="Browse blog categories">
            <span>Explore perspectives on</span>
            {blogCategories.map((category) => (
              <Link href={`/blog/${category.slug}/`} key={category.slug}>
                {category.title}
              </Link>
            ))}
          </nav>
        </section>

        <BlogArticleBrowser />

        <section className="blog-category-section" aria-labelledby="blog-category-title">
          <div className="blog-section-heading">
            <div>
              <p className="eyebrow">02 / Browse by category</p>
              <h2 id="blog-category-title">Find your <em>focus.</em></h2>
            </div>
            <p>Explore a topic to find all of its practical guides and perspectives.</p>
          </div>
          <div className="blog-category-grid">
            {blogCategories.map((category) => (
              <Link className="blog-category-card" href={`/blog/${category.slug}/`} key={category.slug}>
                <span>{category.number}</span>
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <span className="blog-category-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="blog-resource-cta" aria-labelledby="blog-resource-title">
          <div>
            <p className="eyebrow">A practical place to begin</p>
            <h2 id="blog-resource-title">Get a clearer view of your online reputation.</h2>
            <p>
              Our reputation audit guide explains what to review, which signals
              matter, and how to turn what you find into sensible next steps.
            </p>
          </div>
          <Link className="blog-resource-link" href="/blog/reputation-audit/">
            Read the reputation audit guide <span aria-hidden="true">↗</span>
          </Link>
        </section>

        <section className="blog-cta" aria-labelledby="blog-cta-title">
          <p className="eyebrow">Turn insight into action</p>
          <h2 id="blog-cta-title">Ready to work on your brand’s reputation?</h2>
          <p>
            Talk with HelixORM about the signals that matter to your business
            and a practical plan for what to do next.
          </p>
          <div className="service-page-actions">
            <Link className="button button-lime" href="/reputation-audit/">
              Request a reputation audit <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" href="/contact/">
              Talk with our team <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
