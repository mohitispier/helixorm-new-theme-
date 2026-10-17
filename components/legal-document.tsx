import Link from "next/link";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalDocumentProps = {
  title: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export default function LegalDocument({
  title,
  description,
  updated,
  sections,
}: LegalDocumentProps) {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{title}</span>
        </nav>
        <header className="legal-header">
          <div className="legal-header-copy">
            <p className="eyebrow"><span className="status-dot" /> Helix ORM / Legal</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>Last updated: {updated}</span>
          </div>
          <aside className="legal-hero-note">
            <span className="legal-hero-note-icon" aria-hidden="true">
              {title === "Privacy Policy" ? "◎" : "✳"}
            </span>
            <p>{title === "Privacy Policy" ? "Your information" : "Our relationship"}</p>
            <strong>
              {title === "Privacy Policy"
                ? "Handled with care."
                : "Clear from the start."}
            </strong>
            <span className="legal-hero-note-caption">
              {title === "Privacy Policy"
                ? "A straightforward guide to the details you share with us."
                : "The principles that guide your use of this website."}
            </span>
            <span className="legal-hero-note-mark" aria-hidden="true">h</span>
          </aside>
        </header>
        <div className="legal-content-layout">
          <nav className="legal-toc" aria-label={`${title} sections`}>
            <span>ON THIS PAGE</span>
            {sections.map((section, index) => (
              <a href={`#legal-section-${index + 1}`} key={section.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            ))}
          </nav>
          <div className="legal-sections">
            {sections.map((section, index) => (
              <section id={`legal-section-${index + 1}`} key={section.title}>
                <span className="legal-section-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
            <div className="legal-contact">
              <span>Need more information?</span>
              <p>
                Questions about this page?{" "}
                <a href="mailto:info@helixorm.com">Contact Helix ORM</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
