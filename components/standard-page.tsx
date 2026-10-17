import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

type StandardPageProps = {
  title: string;
  eyebrow: string;
  headline: string;
  description: string;
  detail: string;
  action: string;
  actionHref: string;
  secondaryAction?: string;
  secondaryHref?: string;
};

export default function StandardPage({
  title,
  eyebrow,
  headline,
  description,
  detail,
  action,
  actionHref,
  secondaryAction,
  secondaryHref,
}: StandardPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="standard-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{title}</span>
        </nav>
        <section className="standard-page-hero">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{headline}</h1>
          <p className="standard-page-description">{description}</p>
          <div className="service-page-actions">
            {actionHref.startsWith("mailto:") ? <a className="button button-dark" href={actionHref}>{action}<span aria-hidden="true"> ↗</span></a> : <Link className="button button-dark" href={actionHref}>{action}<span aria-hidden="true"> ↗</span></Link>}
            {secondaryAction && secondaryHref && <Link className="text-link" href={secondaryHref}>{secondaryAction}<span aria-hidden="true"> ↗</span></Link>}
          </div>
        </section>
        <section className="standard-page-detail">
          <p className="eyebrow">{title}</p>
          <p>{detail}</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
