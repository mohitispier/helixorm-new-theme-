export type BlogArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  number: string;
  category: string;
  categorySlug: string;
  topics: string[];
  title: string;
  excerpt: string;
  imageAlt: string;
  sections: BlogArticleSection[];
  service: string;
  serviceLabel: string;
  contextualService?: string;
  contextualServiceLabel?: string;
  contextualServiceSection?: number;
  relatedArticles: string[];
};

export type BlogCategory = {
  slug: string;
  title: string;
  description: string;
  number: string;
  service: string;
  serviceLabel: string;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "customer-feedback",
    title: "Customer feedback",
    description:
      "Thoughtful ways to listen to reviews, respond to customer concerns, and learn from genuine feedback.",
    number: "01",
    service: "review-management",
    serviceLabel: "Explore review management",
  },
  {
    slug: "getting-started",
    title: "Getting started",
    description:
      "Understand the reputation signals around your brand and find a sensible place to begin.",
    number: "02",
    service: "reputation-audit-consulting",
    serviceLabel: "Explore reputation audits",
  },
  {
    slug: "search-visibility",
    title: "Search visibility",
    description:
      "Make sense of the sources and information people find when they search for your brand.",
    number: "03",
    service: "search-reputation",
    serviceLabel: "Explore search reputation",
  },
  {
    slug: "online-communities",
    title: "Online communities",
    description:
      "Explore transparent, community-aware ways to understand and participate in online conversations.",
    number: "04",
    service: "social-media-reputation",
    serviceLabel: "Explore social media reputation",
  },
  {
    slug: "crisis-response",
    title: "Crisis response",
    description:
      "Respond thoughtfully when a reputation issue moves quickly across reviews, search, and public conversations.",
    number: "05",
    service: "crisis-management",
    serviceLabel: "Explore crisis management",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "responding-to-reviews",
    number: "01",
    category: "Customer feedback",
    categorySlug: "customer-feedback",
    topics: ["reviews", "reputation"],
    title: "A better way to think about online reviews",
    excerpt:
      "Look beyond the star rating to understand what customers are telling you—and how a thoughtful response can help.",
    imageAlt: "A shop owner welcoming a customer into a local store",
    sections: [
      {
        heading: "Look for patterns, not just ratings",
        paragraphs: [
          "A rating gives you a quick signal, but the words around it tell you more. Read feedback for recurring questions, moments that delight customers, and friction points that may be appearing across locations or teams.",
          "Treat a review as one person’s experience, not a complete verdict on your business. Patterns across many experiences can help you decide what deserves attention first.",
        ],
      },
      {
        heading: "Write for the person who comes next",
        paragraphs: [
          "A useful response acknowledges the customer, addresses the specific concern, and offers a clear next step when one is appropriate. Keep the tone calm and personal; avoid arguing or sharing private details in public.",
          "Not every review needs the same response. A consistent set of principles helps your team sound like itself while responding to each situation with care.",
        ],
      },
      {
        heading: "Make feedback easy and honest",
        paragraphs: [
          "Invite customers to share an honest account of their experience at a natural point in their journey. Make the process straightforward and follow each platform’s policies.",
          "Never buy reviews, offer rewards for positive ratings, or filter out customers who may leave critical feedback. Genuine feedback is more useful to your business and more trustworthy to future customers.",
        ],
      },
    ],
    service: "review-management",
    serviceLabel: "Explore review management",
    contextualService: "google-reviews",
    contextualServiceLabel: "Google Reviews Management",
    contextualServiceSection: 0,
    relatedArticles: ["reputation-audit", "responding-to-reputation-crisis"],
  },
  {
    slug: "reputation-audit",
    number: "02",
    category: "Getting started",
    categorySlug: "getting-started",
    topics: ["reputation"],
    title: "What does a reputation audit actually look at?",
    excerpt:
      "A good first step is a clear picture of the signals people encounter and the sources shaping them.",
    imageAlt: "A team reviewing a visual analytics dashboard together",
    sections: [
      {
        heading: "Start with the questions people ask",
        paragraphs: [
          "An audit begins by understanding your goals and audience. What do customers search before choosing you? Which review platforms or public conversations matter in your category? The answers help focus the review on relevant signals instead of collecting information for its own sake.",
        ],
      },
      {
        heading: "Review the sources and context",
        paragraphs: [
          "Look at the public information people are likely to encounter: search results, review themes, brand profiles, and relevant online discussions. Note what appears accurate, what may be out of date, and where people seem to have unanswered questions.",
          "A single post or search result should not be treated as the whole story. Consider the source, context, visibility, and whether the issue is part of a broader pattern.",
        ],
      },
      {
        heading: "Turn observations into priorities",
        paragraphs: [
          "The outcome should be a practical set of next steps: what to address now, what to monitor, and what may need more context. Some actions may be within your control; decisions by platforms, publishers, customers, and search engines are not.",
          "A useful audit is honest about both. It helps your team act where it can and set realistic expectations where it cannot.",
        ],
      },
    ],
    service: "reputation-audit-consulting",
    serviceLabel: "Explore reputation audits",
    contextualService: "search-reputation",
    contextualServiceLabel: "search reputation and digital PR",
    contextualServiceSection: 1,
    relatedArticles: ["responding-to-reviews", "brand-in-search"],
  },
  {
    slug: "brand-in-search",
    number: "03",
    category: "Search visibility",
    categorySlug: "search-visibility",
    topics: ["brand-trust", "reputation"],
    title: "How to understand your brand’s search presence",
    excerpt:
      "Search results draw from many sources. Understanding the landscape is more useful than chasing a single position.",
    imageAlt: "A professional reviewing information on a laptop",
    sections: [
      {
        heading: "Search like the people you serve",
        paragraphs: [
          "Try the brand and product searches a customer might use, including common questions and comparisons. Results can differ by query and change over time, so make a note of what you searched and when.",
          "Pay attention to the types of sources that appear—your own pages, third-party coverage, reviews, forums, and other public information. This helps explain the picture people see.",
        ],
      },
      {
        heading: "Check accuracy and usefulness",
        paragraphs: [
          "Ask whether the information is current, consistent, and easy to verify. If important details are missing from your own channels, clear and useful content may help customers find reliable answers.",
          "For third-party content, consider whether a direct correction request or a relevant platform process is appropriate. A publisher or platform makes its own decisions, so no change can be guaranteed.",
        ],
      },
      {
        heading: "Measure what matters to your audience",
        paragraphs: [
          "Rather than focusing on one ranking, track the questions, sources, and information that are meaningful to your business. Use a consistent set of searches as a directional check—not a promise of future placement.",
          "Sustainable visibility starts with accurate information and a clear understanding of how people look for it.",
        ],
      },
    ],
    service: "search-reputation",
    serviceLabel: "Explore search reputation",
    contextualService: "google-search",
    contextualServiceLabel: "Google Search Reputation Management",
    contextualServiceSection: 1,
    relatedArticles: ["reputation-audit", "responding-to-reputation-crisis"],
  },
  {
    slug: "reddit-community-trust",
    number: "04",
    category: "Online communities",
    categorySlug: "online-communities",
    topics: ["brand-trust"],
    title: "On Reddit, trust comes before promotion",
    excerpt:
      "Community participation works best when it is transparent, useful, and guided by the norms of each space.",
    imageAlt: "Colleagues sharing ideas during a team discussion",
    sections: [
      {
        heading: "Learn the community before joining in",
        paragraphs: [
          "Subreddits have their own rules, moderators, and expectations. Read them carefully and spend time understanding the conversations before deciding whether a brand response would add value.",
          "A response that seems reasonable in one community may be unwelcome in another. Context is part of the work.",
        ],
      },
      {
        heading: "Be clear about who you are",
        paragraphs: [
          "If someone represents a company, say so. Use an appropriate account, disclose your affiliation, and avoid creating fake personas or disguising promotional messages as independent recommendations.",
          "Answer the question that was asked with accurate information. If you do not know the answer, acknowledge it and offer a suitable next step rather than overclaiming.",
        ],
      },
      {
        heading: "Know when not to respond",
        paragraphs: [
          "Not every critical thread needs a brand reply. Consider whether the information is correct, whether a response would help readers, and whether the community allows company participation.",
          "Sometimes listening, improving an underlying customer experience, or sharing a calm factual clarification elsewhere is more useful than entering a conversation.",
        ],
      },
    ],
    service: "reddit-reputation",
    serviceLabel: "Explore Reddit reputation management",
    contextualService: "social-media-reputation",
    contextualServiceLabel: "social media reputation management",
    contextualServiceSection: 0,
    relatedArticles: ["responding-to-reviews", "responding-to-reputation-crisis"],
  },
  {
    slug: "responding-to-reputation-crisis",
    number: "05",
    category: "Crisis response",
    categorySlug: "crisis-response",
    topics: ["crisis-response", "reputation"],
    title: "A calmer framework for reputation crisis response",
    excerpt:
      "When a public issue is moving quickly, clear ownership, verified facts, and a measured response help teams act with care.",
    imageAlt: "A team reviewing a response plan together",
    sections: [
      {
        heading: "Establish what is known",
        paragraphs: [
          "Begin by bringing the relevant facts into one place. Separate confirmed information from assumptions, note what is still being checked, and identify the public sources where the issue is appearing.",
          "A quick, accurate picture helps teams avoid amplifying unverified claims or giving conflicting accounts. Keep a record of what has changed and when.",
        ],
      },
      {
        heading: "Give people a clear point of contact",
        paragraphs: [
          "Agree who is responsible for decisions and who can speak for the organization. Coordinate customer support, communications, and subject-matter leads so people receive consistent, useful updates.",
          "If details are not yet confirmed, say what you are looking into and when people can expect another update. Do not speculate or promise an outcome you cannot control.",
        ],
      },
      {
        heading: "Respond, learn, and keep monitoring",
        paragraphs: [
          "Address the underlying concern where possible and use the channels that affected people are already using. Acknowledge the impact, share verified information, and provide a practical next step without arguing with individuals in public.",
          "Continue monitoring relevant conversations and correct your response when new facts emerge. After the immediate issue, review what worked and what should change in your process. A thoughtful response can help people understand your actions, but it cannot guarantee how a situation will resolve.",
        ],
      },
    ],
    service: "crisis-management",
    serviceLabel: "Explore reputation crisis management",
    contextualService: "reddit-reputation",
    contextualServiceLabel: "Reddit Reputation Management",
    contextualServiceSection: 2,
    relatedArticles: ["reputation-audit", "reddit-community-trust"],
  },
];

export function getBlogCategory(slug: string) {
  return blogCategories.find((category) => category.slug === slug);
}

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getArticlesForCategory(categorySlug: string) {
  return blogArticles.filter((article) => article.categorySlug === categorySlug);
}

export function getRelatedArticles(articleSlug: string, relatedSlugs: string[]) {
  return relatedSlugs
    .filter((slug) => slug !== articleSlug)
    .map((slug) => getBlogArticle(slug))
    .filter((article) => article !== undefined);
}
