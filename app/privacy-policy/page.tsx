import type { Metadata } from "next";
import LegalDocument from "../../components/legal-document";
import { canonicalUrl } from "../../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Helix ORM",
  description: "Learn how Helix ORM handles information submitted through this website.",
  alternates: { canonical: canonicalUrl("/privacy-policy/") },
};

const sections = [
  {
    title: "Information you provide",
    paragraphs: [
      "If you use the contact or reputation-audit form, we receive the details you choose to provide, such as your name, email address, company, website, area of interest, and message. Please do not submit sensitive personal information that is not needed to respond.",
      "You can also contact us directly by email. Information in those messages is used to respond to you and manage the conversation.",
    ],
  },
  {
    title: "How information is used",
    paragraphs: [
      "We use inquiry information to respond to your request, discuss services, and maintain appropriate business records. We do not sell personal information submitted through these forms.",
      "Form submissions are forwarded to the configured inquiry-processing service for delivery to Helix ORM. This website application does not intentionally store form submissions. The receiving service and email provider may process or retain the information under their own terms and configured retention settings.",
    ],
  },
  {
    title: "Cookies and technical information",
    paragraphs: [
      "This website does not currently use advertising or analytics cookies. Hosting and security providers may collect standard technical request information, such as IP address, browser details, and access times, to operate and protect the service.",
    ],
  },
  {
    title: "Sharing and international transfers",
    paragraphs: [
      "We use service providers to host this website, forward form submissions, and deliver email. These providers process information as needed to provide those services and may operate in countries other than yours, subject to their terms and applicable law.",
    ],
  },
  {
    title: "Retention and your choices",
    paragraphs: [
      "We retain correspondence only as long as reasonably needed to respond, manage the relationship, meet legitimate business needs, and comply with applicable obligations. You may contact us to ask about access, correction, deletion, or other rights available under the law that applies to you.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this notice when website practices change. The date above indicates when this page was last revised.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      description="A plain-language overview of the information associated with a visit or inquiry to this website."
      updated="October 17, 2026"
      sections={sections}
    />
  );
}
