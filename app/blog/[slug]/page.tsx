import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "../../../components/site-footer";
import SiteHeader from "../../../components/site-header";
import {
  blogArticles,
  blogCategories,
  getArticlesForCategory,
  getBlogArticle,
  getBlogCategory,
} from "../../../lib/blog-content";
import { getServiceHref } from "../../../lib/services";

export function generateStaticParams() {
  return [
    ...blogCategories.map(({ slug }) => ({ slug })),
    ...blogArticles.map(({ slug }) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getBlogCategory(slug);

  if (category) {
    return {
      title: `${category.title} | Helix ORM Insights`,
      description: category.description,
    };
  }

  const article = getBlogArticle(slug);

  if (article) {
    return {
      title: `${article.title} | Helix ORM`,
      description: article.excerpt,
    };
  }

  return {};
}

export default async function BlogEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getBlogCategory(slug);
  const article = getBlogArticle(slug);

  if (!category && !article) {
    notFound();
  }

  if (category) {
    const categoryArticles = getArticlesForCategory(category.slug);

    return (
      <>
        <SiteHeader />
        <main className="blog-page">
          <section className="blog-taxonomy-hero">
            <div className="blog-taxonomy-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/blog/">Insights &amp; Resources</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">{category.title}</span>
              </nav>
              <p className="eyebrow">Category {category.number} / Insights</p>
              <h1>{category.title}<em> perspectives.</em></h1>
              <p>{category.description}</p>
              <Link className="text-link" href="/blog/">
                <span aria-hidden="true">←</span> Back to all insights
              </Link>
            </div>
            <div
              className={`blog-taxonomy-art blog-topic-${category.slug}`}
              role="img"
              aria-label={`${category.title} insights`}
            >
              <span className="blog-taxonomy-art-kicker">A HELIX ORM FIELD GUIDE</span>
              <span className="blog-taxonomy-art-number">{category.number}</span>
              <span className="blog-taxonomy-art-caption">{category.title}</span>
            </div>
          </section>
          <section className="blog-category-articles" aria-labelledby="category-articles-title">
            <div className="blog-section-heading">
              <div>
                <p className="eyebrow">Explore this topic</p>
                <h2 id="category-articles-title">Guides &amp; perspectives.</h2>
              </div>
              <p>Practical reading to help you find a clear next step.</p>
            </div>
            {categoryArticles.length > 0 ? (
              <div className="blog-category-article-list">
                {categoryArticles.map((categoryArticle) => (
                  <Link
                    className="blog-category-article"
                    href={`/blog/${categoryArticle.slug}/`}
                    key={categoryArticle.slug}
                  >
                    <span
                      className={`blog-category-thumb blog-card-${categoryArticle.number}`}
                      role="img"
                      aria-label={categoryArticle.imageAlt}
                    >
                      <span>{categoryArticle.number}</span>
                    </span>
                    <div>
                      <p>{categoryArticle.category}</p>
                      <h3>{categoryArticle.title}</h3>
                      <p>{categoryArticle.excerpt}</p>
                    </div>
                    <span aria-hidden="true">↗</span>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="blog-empty-state">
                New articles for this topic are in progress. Browse all insights
                for related reading in the meantime.
              </p>
            )}
          </section>
          <section className="blog-taxonomy-footer">
            <Link href="/blog/">Browse all insights <span aria-hidden="true">↗</span></Link>
          </section>
        </main>
        <SiteFooter />
      </>
    );
  }

  if (!article) {
    notFound();
  }

  const articleCategory = getBlogCategory(article.categorySlug);

  return (
    <>
      <SiteHeader />
      <main className="blog-page blog-article-page">
        <article>
          <header className="blog-article-hero">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/blog/">Insights &amp; Resources</Link>
              <span aria-hidden="true">/</span>
              {articleCategory && (
                <>
                  <Link href={`/blog/${article.categorySlug}/`}>{article.category}</Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
              <span aria-current="page">{article.title}</span>
            </nav>
            <div className="blog-article-hero-grid">
              <div className="blog-article-hero-copy">
                <Link className="blog-article-category" href={`/blog/${article.categorySlug}/`}>
                  {article.category}
                </Link>
                <p className="eyebrow">Field note {article.number}</p>
                <h1>{article.title}</h1>
                <p className="blog-article-excerpt">{article.excerpt}</p>
                <div className="blog-article-meta">
                  <span>Helix ORM Insights</span><i aria-hidden="true" />
                  <span>{Math.max(1, Math.ceil(article.sections.flatMap((section) => section.paragraphs).join(" ").split(/\s+/).length / 200))} min read</span>
                </div>
              </div>
              <div
                className={`blog-article-art blog-card-${article.number}`}
                role="img"
                aria-label={article.imageAlt}
              >
                <span>FIELD NOTE {article.number}</span>
              </div>
            </div>
          </header>
          <div className="blog-article-layout">
            <aside className="blog-article-aside">
              <span>IN THIS ARTICLE</span>
              <nav aria-label="Article contents">
                {article.sections.map((section, index) => (
                  <a href={`#article-section-${index + 1}`} key={section.heading}>
                    {section.heading}
                  </a>
                ))}
              </nav>
            </aside>
            <div className="blog-article-content">
              {article.sections.map((section, index) => (
                <section id={`article-section-${index + 1}`} key={section.heading}>
                  <p className="blog-article-section-number">0{index + 1} / A CLOSER LOOK</p>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ))}
              <div className="blog-article-service">
                <p className="eyebrow">Related service</p>
                <Link href={getServiceHref(article.service)}>
                  {article.serviceLabel} <span aria-hidden="true">↗</span>
                </Link>
              </div>
              <Link className="blog-article-back" href={`/blog/${article.categorySlug}/`}>
                <span aria-hidden="true">←</span> More in {article.category}
              </Link>
            </div>
          </div>
        </article>
        <section className="blog-article-cta">
          <p className="eyebrow">A thoughtful next step</p>
          <h2>Want a clearer picture of your reputation?</h2>
          <Link className="button button-lime" href="/reputation-audit/">
            Request a reputation audit <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
