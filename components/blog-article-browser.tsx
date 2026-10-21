"use client";

import { useState } from "react";
import Link from "next/link";
import { blogArticles } from "../lib/blog-content";

const topicFilters = [
  { slug: "reputation", title: "Reputation" },
  { slug: "reviews", title: "Reviews" },
  { slug: "brand-trust", title: "Brand trust" },
  { slug: "crisis-response", title: "Crisis response" },
] as const;

type TopicFilter = (typeof topicFilters)[number]["slug"];

function getReadingTime(article: (typeof blogArticles)[number]) {
  const content = [
    article.title,
    article.excerpt,
    ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
  ].join(" ");
  const wordCount = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
}

export default function BlogArticleBrowser() {
  const [query, setQuery] = useState("");
  const [activeTopic, setActiveTopic] = useState<TopicFilter | "all">("all");
  const featuredArticle = blogArticles.find((article) => article.slug === "reputation-audit");
  const isFiltering = query.trim().length > 0 || activeTopic !== "all";
  const normalizedQuery = query.trim().toLowerCase();
  const matchingArticles = blogArticles.filter((article) => {
    const matchesTopic = activeTopic === "all" || article.topics.includes(activeTopic);
    const searchableContent = [
      article.title,
      article.category,
      article.excerpt,
      ...article.topics,
      ...article.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ].join(" ").toLowerCase();
    return matchesTopic && (!normalizedQuery || searchableContent.includes(normalizedQuery));
  });
  const visibleArticles = isFiltering
    ? matchingArticles
    : matchingArticles.filter((article) => article !== featuredArticle);

  return (
    <section className="blog-library" id="insights" aria-labelledby="insights-title">
      <div className="blog-section-heading">
        <div>
          <p className="eyebrow">01 / Fresh perspectives</p>
          <h2 id="insights-title">Explore the insights</h2>
        </div>
        <p>
          Find clear, useful guidance on reviews, reputation, brand trust, and
          the moments that put them to the test.
        </p>
      </div>

      <div className="blog-discovery" role="search">
        <label className="blog-search">
          <span aria-hidden="true" className="blog-search-icon">⌕</span>
          <span className="visually-hidden">Search articles</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search topics, questions, or keywords"
          />
          {query && (
            <button className="blog-search-clear" type="button" onClick={() => setQuery("")}>
              Clear
            </button>
          )}
        </label>
        <div className="blog-topic-filters" role="group" aria-label="Filter articles by topic">
          <button
            type="button"
            aria-pressed={activeTopic === "all"}
            onClick={() => setActiveTopic("all")}
          >
            All topics
          </button>
          {topicFilters.map((topic) => (
            <button
              key={topic.slug}
              type="button"
              aria-pressed={activeTopic === topic.slug}
              onClick={() => setActiveTopic(topic.slug)}
            >
              {topic.title}
            </button>
          ))}
        </div>
      </div>

      {!isFiltering && featuredArticle && (
        <article className="blog-featured">
          <div
            className={`blog-featured-art blog-card-${featuredArticle.number}`}
            role="img"
            aria-label={featuredArticle.imageAlt}
          />
          <div className="blog-featured-copy">
            <p className="eyebrow">Featured guide</p>
            <div className="blog-featured-meta">
              <Link className="blog-card-topic" href={`/blog/${featuredArticle.categorySlug}/`}>
                {featuredArticle.category}
              </Link>
              <span>{getReadingTime(featuredArticle)}</span>
            </div>
            <h3><Link href={`/blog/${featuredArticle.slug}/`}>{featuredArticle.title}</Link></h3>
            <p>{featuredArticle.excerpt}</p>
            <Link className="blog-featured-link" href={`/blog/${featuredArticle.slug}/`}>
              Read the featured guide <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </article>
      )}

      <div className="blog-results-heading">
        <h3>{isFiltering ? "Matching articles" : "Latest articles"}</h3>
        <p aria-live="polite">
          {visibleArticles.length} {visibleArticles.length === 1 ? "article" : "articles"}
          {isFiltering ? " found" : " to explore"}
        </p>
      </div>
      {visibleArticles.length > 0 ? (
        <div className="blog-card-grid">
          {visibleArticles.map((article) => (
            <article className={`blog-card blog-card-${article.number}`} key={article.slug}>
              <div className="blog-card-art" role="img" aria-label={article.imageAlt}>
                <span className="blog-card-image-index">{article.number}</span>
              </div>
              <div className="blog-card-copy">
                <div className="blog-card-meta">
                  <Link className="blog-card-topic" href={`/blog/${article.categorySlug}/`}>
                    {article.category}
                  </Link>
                  <span>{getReadingTime(article)}</span>
                </div>
                <h4><Link href={`/blog/${article.slug}/`}>{article.title}</Link></h4>
                <p>{article.excerpt}</p>
                <Link className="blog-card-link" href={`/blog/${article.slug}/`}>
                  Read the article <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="blog-no-results">
          No articles match that search yet. Try a different phrase or choose another topic.
        </p>
      )}
    </section>
  );
}
