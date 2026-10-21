import type { MetadataRoute } from "next";
import { blogArticles, blogCategories } from "../lib/blog-content";
import { canonicalUrl } from "../lib/site";
import { services } from "../lib/services";

const staticPaths = [
  "/",
  "/reputation-management/",
  "/about/",
  "/case-studies/",
  "/blog/",
  "/contact/",
  "/reputation-audit/",
  "/privacy-policy/",
  "/terms-of-service/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...staticPaths,
    ...services.map((service) => `/reputation-management/${service.slug}/`),
    ...blogCategories.map((category) => `/blog/${category.slug}/`),
    ...blogArticles.map((article) => `/blog/${article.slug}/`),
  ];

  return paths.map((path) => ({
    url: canonicalUrl(path),
    changeFrequency: path.startsWith("/blog/") ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/reputation-management/" ? 0.9 : 0.7,
  }));
}
