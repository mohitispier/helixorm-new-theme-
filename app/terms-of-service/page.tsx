import type { Metadata } from "next";
import LegalDocument from "../../components/legal-document";
import { canonicalUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Helix ORM",
  description: "Terms for use of the Helix ORM website and its general information.",
  alternates: { canonical: canonicalUrl("/terms-of-service/") },
};

const sections = [
  {
    title: "Using this website",
    paragraphs: [
      "You may use this website for lawful purposes and in a way that does not interfere with its operation, security, or other visitors. Do not attempt unauthorized access, disrupt the service, or misuse its forms.",
      "Website content is provided for general information. It is not legal, financial, or other professional advice and does not create a client relationship.",
    ],
  },
  {
    title: "Services and inquiries",
    paragraphs: [
      "Submitting a form or contacting Helix ORM is a request for information, not an acceptance of work or a guarantee that a particular service is available. Any services will be governed by a separate written agreement.",
      "Reputation outcomes depend on customers, publishers, platforms, search engines, and other third parties. No particular review, removal, ranking, visibility, or business result is promised by information on this site.",
    ],
  },
  {
    title: "Website content and third-party services",
    paragraphs: [
      "Unless otherwise stated, website text, design, and materials are provided by Helix ORM. Do not reproduce or commercially reuse them without permission, except where the law permits.",
      "Links to third-party websites are provided for convenience. Helix ORM does not control those sites and is not responsible for their content, availability, or practices.",
    ],
  },
  {
    title: "Availability and liability",
    paragraphs: [
      "We aim to keep the website accurate and available, but it may change, be interrupted, or contain errors. To the extent permitted by law, the website is provided without warranties, and Helix ORM is not liable for losses arising solely from reliance on general website information or temporary unavailability.",
      "Nothing in these terms limits rights or liabilities that cannot lawfully be limited.",
    ],
  },
  {
    title: "Changes and governing law",
    paragraphs: [
      "These terms may be updated by revising this page. Any separate written service agreement will identify the applicable contracting terms. Nothing here limits rights or protections that apply to you under mandatory local law.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalDocument
      title="Terms of Service"
      description="Basic terms for using this website and understanding the information it provides."
      updated="October 17, 2026"
      sections={sections}
    />
  );
}
