import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../../components/site-footer";
import SiteHeader from "../../components/site-header";

export const metadata: Metadata = {
  title: "Request received | Helix ORM",
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />
      <main className="standard-page thank-you-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Request received</span>
        </nav>
        <section className="standard-page-hero">
          <p className="eyebrow">Thank you</p>
          <h1>Your request is on its way.</h1>
          <p className="standard-page-description">
            We’ve received your message and will follow up using the contact
            details you provided. If you need to add context, email
            {" "}<a href="mailto:info@helixorm.com">info@helixorm.com</a>.
          </p>
          <div className="service-page-actions">
            <Link className="button button-dark" href="/">Back to the homepage</Link>
            <Link className="text-link" href="/reputation-management/">Explore services</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
