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

        <section className="thank-you-hero" aria-labelledby="thank-you-heading">
          <div className="thank-you-card">
            <h1 id="thank-you-heading">Thank You!</h1>
            <div className="thank-you-card-accent" aria-hidden="true" />
            <p>
              Thanks for contacting us! We will get in touch with you shortly.
            </p>
          </div>
        </section>

        <section className="thank-you-showcase" aria-label="About Helix ORM">
          <div className="thank-you-showcase-media" aria-hidden="true">
            <div className="thank-you-showcase-badges">
              <span>95%</span>
              <span>3%</span>
            </div>
          </div>

          <div className="thank-you-showcase-copy">
            <div className="thank-you-mini-brand">
              <span className="thank-you-mini-mark">h</span>
              <span className="thank-you-mini-text">HelixORM</span>
            </div>

            <p className="thank-you-showcase-subhead">EXPERT REPUTATION MANAGEMENT</p>
            <h2>
              MEET THE TEAM
              <span>BEHIND AMERICA&apos;S</span>
              <strong>LARGEST ONLINE</strong>
              <span>REPUTATION</span>
              <strong>MANAGEMENT</strong>
              <span>COMPANY</span>
            </h2>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
