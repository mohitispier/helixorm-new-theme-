import Link from "next/link";
import { canonicalUrl } from "../lib/site";

export type BreadcrumbItem = {
  name: string;
  href: string;
  mobileName?: string;
};

type SiteBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export default function SiteBreadcrumbs({ items }: SiteBreadcrumbsProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@Link": "https://schema.org/Link",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.href),
    })),
  };


  return (
    <>
      <nav
        className={`breadcrumbs site-breadcrumbs${items.length > 2 ? " site-breadcrumbs-nested" : ""}`}
        aria-label="Breadcrumb"
      >
        {items.map((item, index) => (
          <span className="site-breadcrumb-item" key={item.href}>
            {index > 0 && <span aria-hidden="true">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page">
                <span
                  className={`site-breadcrumb-desktop-label${item.mobileName ? " has-mobile-label" : ""}`}
                >
                  {item.name}
                </span>
                {item.mobileName && (
                  <span className="site-breadcrumb-mobile-label" aria-hidden="true">
                    {item.mobileName}
                  </span>
                )}
              </span>
            ) : (
              <Link href={item.href}>{item.name}</Link>
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
