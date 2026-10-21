export type Service = {
  title: string;
  slug: string;
  description: string;
  type: "featured" | "category";
  parentCategory?: string;
  related: string[];
};

export const categories: Service[] = [
  {
    title: "Review Management",
    slug: "review-management",
    description:
      "Review monitoring and response support across Google, Trustpilot, Yelp, Facebook, G2, Capterra, Product Hunt, App Store, and Google Play.",
    type: "category",
    related: ["google-reviews", "trustpilot-reviews", "marketplace-app-reputation"],
  },
  {
    title: "Search Reputation & Digital PR",
    slug: "search-reputation",
    description:
      "Strengthen search visibility through useful content, digital PR, authority building, and thoughtful knowledge-panel guidance.",
    type: "category",
    related: ["google-search", "brand-protection", "ai-reputation"],
  },
  {
    title: "AI Reputation & Visibility",
    slug: "ai-reputation",
    description:
      "Review how your brand is represented, sourced, and cited across ChatGPT, Google AI Overviews, Perplexity, and Gemini.",
    type: "category",
    related: ["search-reputation", "google-search"],
  },
  {
    title: "Personal & Executive Reputation",
    slug: "personal-executive",
    description:
      "Support for personal search results, executive profiles, personal branding, and reputation monitoring.",
    type: "category",
    related: ["google-search", "brand-protection"],
  },
  {
    title: "Business & Corporate Reputation",
    slug: "business-corporate",
    description:
      "Reputation strategy for brands, local businesses, franchises, and multi-location organizations.",
    type: "category",
    related: ["google-reviews", "google-search", "crisis-management"],
  },
  {
    title: "Social Media Reputation",
    slug: "social-media-reputation",
    description:
      "Monitor mentions and sentiment, respond to complaints, optimize profiles, and report impersonation.",
    type: "category",
    related: ["reddit-reputation", "brand-protection"],
  },
  {
    title: "Brand Protection & Content Removal",
    slug: "brand-protection",
    description:
      "Address fake accounts, impersonation, privacy concerns, and eligible policy-based content takedown requests.",
    type: "category",
    related: ["crisis-management", "google-search", "reddit-reputation"],
  },
  {
    title: "Employer Reputation",
    slug: "employer-reputation",
    description:
      "Monitor employee feedback and support employer-brand conversations across Glassdoor, Indeed, and other relevant channels.",
    type: "category",
    related: ["review-management", "business-corporate"],
  },
  {
    title: "Marketplace & App Reputation",
    slug: "marketplace-app-reputation",
    description:
      "Manage feedback and reputation across Amazon, e-commerce, SaaS review platforms, and app stores.",
    type: "category",
    related: ["review-management", "trustpilot-reviews"],
  },
  {
    title: "Reputation Crisis Management",
    slug: "crisis-management",
    description:
      "Plan for viral complaints, negative publicity, review attacks, and reputation recovery.",
    type: "category",
    related: ["google-search", "reddit-reputation", "google-reviews"],
  },
  {
    title: "Reputation Audits & Consulting",
    slug: "reputation-audit-consulting",
    description:
      "Assess reputation risks, competitors, search visibility, and customer feedback to shape a practical strategy.",
    type: "category",
    related: ["google-reviews", "google-search", "reddit-reputation"],
  },
];

export const featuredServices: Service[] = [
  {
    title: "Google Reviews Management",
    slug: "google-reviews",
    description:
      "Build a genuine review program, monitor feedback, respond thoughtfully, and pursue eligible removal assistance.",
    type: "featured",
    parentCategory: "review-management",
    related: ["business-corporate", "crisis-management"],
  },
  {
    title: "Trustpilot Reputation Management",
    slug: "trustpilot-reviews",
    description:
      "Monitor Trustpilot feedback, manage responses, and seek resolution through policy-based dispute assistance.",
    type: "featured",
    parentCategory: "review-management",
    related: ["marketplace-app-reputation", "business-corporate"],
  },
  {
    title: "Reddit Reputation Management",
    slug: "reddit-reputation",
    description:
      "Understand relevant brand discussions and sentiment, then plan transparent, community-aware responses.",
    type: "featured",
    parentCategory: "social-media-reputation",
    related: ["brand-protection", "crisis-management"],
  },
  {
    title: "Google Search Reputation Management",
    slug: "google-search",
    description:
      "Understand branded search results and strengthen accurate, positive content visibility over time.",
    type: "featured",
    parentCategory: "search-reputation",
    related: ["personal-executive", "business-corporate", "ai-reputation"],
  },
];

export const services = [...categories, ...featuredServices];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getServiceHref(slug: string) {
  return `/reputation-management/${slug}/`;
}
