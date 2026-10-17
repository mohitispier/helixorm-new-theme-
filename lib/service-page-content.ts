import type { Service } from "./services";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceChallenge = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServicePageContent = {
  audience: string;
  problem: string;
  activities: string[];
  outcomes: string[];
  faqs: ServiceFaq[];
  heroHeadline?: string;
  heroDescription?: string;
  challenges?: ServiceChallenge[];
  process?: ServiceProcessStep[];
};

const contentBySlug: Record<string, ServicePageContent> = {
  "google-reviews": {
    audience: "Local businesses, multi-location teams, and brands that rely on customer reviews.",
    problem: "Review activity can become hard to track across locations. Slow responses, inconsistent requests, and unresolved feedback can leave customers unsure whether anyone is listening.",
    activities: ["Monitor Google review activity and recurring themes", "Build a consistent process for requesting genuine customer feedback", "Draft thoughtful responses and identify reviews that may qualify for policy review"],
    outcomes: ["A clearer view of review themes and response gaps", "A repeatable, policy-conscious review workflow", "More consistent communication with customers"],
    faqs: [
      { question: "Can you remove a negative Google review?", answer: "No removal can be guaranteed. We can assess a review against Google's current policies and help prepare an eligible report; genuine critical feedback should be addressed professionally." },
      { question: "Can you write responses to reviews?", answer: "We can help develop response guidance or drafts that reflect your facts, tone, and customer-care standards. Your team remains in control of what gets published." },
      { question: "How do you help generate reviews?", answer: "We help make it easier to invite real customers to share honest feedback. We do not buy reviews, gate feedback, or offer incentives in exchange for positive ratings." },
    ],
  },
  "trustpilot-reviews": {
    audience: "Businesses that use Trustpilot as a meaningful part of their customer decision journey.",
    problem: "Trustpilot feedback can influence consideration long before a prospect speaks to your team. Gaps in monitoring or unclear responses can allow questions and recurring issues to go unanswered.",
    activities: ["Review Trustpilot feedback and identify recurring topics", "Create practical response guidance for positive and critical reviews", "Document reviews that may merit a platform-policy assessment"],
    outcomes: ["More consistent and timely review handling", "Better visibility into customer concerns", "A documented path for appropriate policy reports"],
    faqs: [
      { question: "Can you guarantee Trustpilot will remove a review?", answer: "No. Trustpilot makes its own decisions under its policies. We can help assess whether a review appears to qualify for a report and support a clear, evidence-based submission." },
      { question: "Do you respond to reviews on our behalf?", answer: "We can prepare recommendations or response drafts. Any response should be checked for accuracy and approved by your team before it is posted." },
      { question: "Do you help improve a Trustpilot rating?", answer: "We focus on sound review practices, customer feedback, and consistent responses—not rating guarantees or attempts to manipulate reviews." },
    ],
  },
  "reddit-reputation": {
    audience: "Brands, founders, and communications teams whose customers discuss them on Reddit.",
    problem: "Reddit conversations are public, searchable, and community-led. Promotional or defensive replies can erode trust, while unanswered factual confusion can continue to shape how people understand a brand.",
    activities: [
      "Monitor relevant brand mentions, subreddits, and public discussion threads",
      "Analyze recurring questions, sentiment, and issues that need attention",
      "Plan transparent participation that respects subreddit rules and moderator expectations",
      "Develop genuinely useful, expert-led answers and resources",
      "Prepare calm responses to critical discussions and customer concerns",
      "Review historical threads and how they appear in branded search",
      "Identify opportunities to clarify accurate information without forcing promotion",
      "Track relevant competitor conversations for category context",
    ],
    outcomes: ["A grounded view of relevant Reddit conversations", "Clear guidance on when to respond, monitor, or step back", "Consistent, factual communication aligned with community norms"],
    heroHeadline: "Reddit Reputation Management",
    heroDescription:
      "Reddit threads are increasingly where buyers ask for honest opinions, and they can appear prominently in search results. We help you understand what is being said, respond transparently where it helps, and contribute genuinely useful information that communities value.",
    challenges: [
      {
        title: "A single thread ranks for your brand name",
        description:
          "An old or critical discussion may appear prominently when people search for your brand.",
      },
      {
        title: "You learn about discussions too late",
        description:
          "Without a clear monitoring process, a conversation can develop before your team notices it.",
      },
      {
        title: "Engagement backfires",
        description:
          "Promotional or defensive replies can undermine trust in communities that value candid participation.",
      },
      {
        title: "Useful recommendations overlook your brand",
        description:
          "When people compare options in your category, accurate information about your offering may be missing.",
      },
    ],
    process: [
      {
        title: "Discussion audit",
        description:
          "Review relevant public threads, brand mentions, and how discussions appear in search.",
      },
      {
        title: "Community research",
        description:
          "Understand subreddit rules, community norms, and expectations before recommending participation.",
      },
      {
        title: "Engagement plan",
        description:
          "Set practical guidance for transparent responses, useful contributions, and escalation.",
      },
      {
        title: "Monitoring and response",
        description:
          "Track relevant conversations and help your team respond factually when a response is appropriate.",
      },
      {
        title: "Reporting and learning",
        description:
          "Summarize recurring themes and adjust priorities as conversations and business needs change.",
      },
    ],
    faqs: [
      { question: "Can you remove Reddit posts or comments?", answer: "Removal is controlled by Reddit and individual moderators. We can help assess whether content may violate a specific rule and prepare an appropriate report, but removal is never guaranteed." },
      { question: "Will you post or promote content in Reddit communities?", answer: "We prioritize transparent, community-aware guidance. We do not use fake accounts, astroturfing, vote manipulation, or undisclosed promotion." },
      { question: "How do you decide whether a brand should respond?", answer: "We consider the conversation's context, audience, accuracy, and likely impact. Sometimes a concise factual response is useful; in other cases, listening without intervening is the better choice." },
    ],
  },
  "google-search": {
    audience: "Individuals and organizations concerned about what people find when they search their name or brand.",
    problem: "Search results can be incomplete, outdated, or shaped by third-party content. Without a clear picture of queries, pages, and sources, it is difficult to prioritize useful action.",
    activities: ["Review branded search results and the queries that surface them", "Assess owned pages, third-party sources, and factual inconsistencies", "Prioritize accurate content and practical visibility improvements"],
    outcomes: ["A clearer map of important search results and sources", "A practical plan for accurate, useful owned content", "A measured way to track changes over time"],
    faqs: [
      { question: "Can you guarantee a specific Google ranking?", answer: "No. Search rankings are controlled by Google and can change. We focus on accurate information, useful content, and sustainable improvements rather than guaranteed positions." },
      { question: "Can negative search results be removed?", answer: "Only the publisher or platform can remove content, and eligibility depends on its policies and applicable law. We can help review options and identify appropriate requests." },
      { question: "How long does search reputation work take?", answer: "Timing depends on the content, publishers, competition, and search-engine recrawling. We set priorities and review progress without promising a fixed ranking or timeline." },
    ],
  },
  "review-management": {
    audience: "Teams receiving customer feedback across local, software, marketplace, and app-store review platforms.",
    problem: "Feedback spread across multiple platforms is easy to miss. Different response habits and unclear ownership make it harder to spot shared customer concerns or maintain a consistent voice.",
    activities: ["Map relevant review platforms and assign monitoring priorities", "Group feedback into recurring themes and response workflows", "Develop guidance for authentic review requests and careful replies"],
    outcomes: ["A more organized view of customer feedback", "Clearer ownership and response practices", "Useful themes to share with customer-facing teams"],
    faqs: [
      { question: "Which review platforms can you support?", answer: "The right platforms depend on your business and audience. We can help prioritize relevant sources such as Google, Trustpilot, Yelp, Facebook, G2, Capterra, Product Hunt, and app stores." },
      { question: "Can you remove reviews from these platforms?", answer: "Platforms make their own moderation decisions. We can help assess content against applicable rules and prepare eligible reports, without promising removal." },
      { question: "Do you create or buy customer reviews?", answer: "No. Review programs should invite genuine customers to share honest feedback and should not use fabricated reviews, incentives for positive ratings, or review gating." },
    ],
  },
  "search-reputation": {
    audience: "Organizations and individuals looking to strengthen the accuracy and usefulness of their search presence.",
    problem: "Search visibility is shaped by many sources, not just a website. Unclear brand information, weak supporting content, or outdated pages can make it difficult for people to find a reliable picture.",
    activities: ["Review branded search results, key queries, and source pages", "Identify gaps in owned information and supporting content", "Prioritize useful content and relevant digital PR opportunities"],
    outcomes: ["A better understanding of how a brand appears in search", "A prioritized content and visibility plan", "More consistent, accurate information across owned channels"],
    faqs: [
      { question: "Do you guarantee first-page or top search rankings?", answer: "No. Search engines control rankings and may change them. We focus on accurate, helpful content and sustainable visibility practices." },
      { question: "What does digital PR include?", answer: "Digital PR can include identifying relevant publications, developing useful stories or expertise, and supporting credible coverage. It does not guarantee publication or links." },
      { question: "Can you remove third-party search results?", answer: "Removal is decided by the publisher, platform, or search engine under its own policies and applicable law. We can help assess appropriate options." },
    ],
  },
  "ai-reputation": {
    audience: "Organizations and experts who want to understand how AI-powered answers describe or cite them.",
    problem: "AI-generated answers can summarize information from multiple sources, sometimes omitting context or repeating outdated details. Their outputs vary and are not fully controlled by a brand.",
    activities: ["Review representative prompts and AI-generated brand descriptions", "Trace cited or recurring information to its available sources", "Identify factual gaps and improve clarity across authoritative owned information"],
    outcomes: ["A snapshot of how selected AI tools represent the brand", "A source-aware list of inaccuracies or content gaps", "Practical steps to make core information clearer and easier to verify"],
    faqs: [
      { question: "Can you guarantee that an AI tool will mention our brand?", answer: "No. AI responses vary by prompt, model, and available sources. We can review patterns and improve source clarity, but cannot guarantee mentions, citations, or placement." },
      { question: "Which AI platforms do you review?", answer: "The review can include tools relevant to your audience, such as ChatGPT, Google AI Overviews, Perplexity, and Gemini. Coverage depends on access and the engagement scope." },
      { question: "Can incorrect AI answers be removed?", answer: "There is no universal removal process, and each provider has its own controls. We can help document the issue and identify available feedback or correction channels." },
    ],
  },
  "personal-executive": {
    audience: "Executives, founders, professionals, and public-facing individuals.",
    problem: "People searching an individual's name may encounter outdated biographies, mixed identities, or information that lacks context. The results can affect trust before a direct introduction happens.",
    activities: ["Review name-search results and identity-related information", "Clarify professional biographies and owned profile content", "Flag privacy, impersonation, or factual issues for appropriate review"],
    outcomes: ["A clearer picture of the individual's public search presence", "More consistent and accurate professional information", "A prioritized plan for responsible profile and content updates"],
    faqs: [
      { question: "Can you guarantee personal search results will change?", answer: "No. Search engines and publishers control their content and rankings. We focus on accurate information and appropriate, sustainable steps." },
      { question: "Can you remove personal information from websites?", answer: "Options depend on the publisher's policies, the information involved, and applicable law. We can help identify relevant privacy or correction processes." },
      { question: "How do you protect confidentiality?", answer: "We scope work with the client, limit information to what is needed, and agree on appropriate handling before beginning." },
    ],
  },
  "business-corporate": {
    audience: "Businesses, corporate communications teams, franchises, and multi-location organizations.",
    problem: "Customers may see different information and experiences across locations and channels. Without a shared view, local issues can be missed and responses can become inconsistent.",
    activities: ["Map major review, search, and social touchpoints", "Identify repeated themes across locations and customer journeys", "Create practical ownership, escalation, and response guidance"],
    outcomes: ["A more consistent view of brand feedback across locations", "Clearer responsibilities for monitoring and response", "Priorities that connect reputation signals to customer experience"],
    faqs: [
      { question: "Can you support multiple business locations?", answer: "Yes. Scope can be organized around location count, platforms, and internal responsibilities, with clear priorities for local and central teams." },
      { question: "Can you guarantee ratings or new customers?", answer: "No. Customer decisions and platform ratings are not controllable. We focus on genuine feedback, accurate information, and reliable response practices." },
      { question: "How do you coordinate with our teams?", answer: "We agree on owners, approval paths, escalation needs, and reporting cadence at the start so recommendations fit your organization." },
    ],
  },
  "social-media-reputation": {
    audience: "Organizations managing public conversations, brand mentions, and customer feedback on social platforms.",
    problem: "Fast-moving social conversations can mix genuine concerns with misinformation or impersonation. Delayed or overly broad responses can amplify issues rather than clarify them.",
    activities: ["Monitor relevant public mentions and recurring themes", "Triage complaints, misinformation, and potential escalation signals", "Develop response and impersonation-reporting guidance"],
    outcomes: ["A more structured view of relevant public conversations", "Clearer criteria for response and escalation", "Consistent guidance for factual, respectful engagement"],
    faqs: [
      { question: "Do you reply to every social mention?", answer: "Not necessarily. We help prioritize conversations based on relevance, accuracy, risk, and audience, and recommend when to reply or simply monitor." },
      { question: "Can you remove impersonation accounts?", answer: "The platform decides whether an account violates its rules. We can help document impersonation and submit an appropriate report, but cannot guarantee removal." },
      { question: "Do you use fake accounts to defend a brand?", answer: "No. We do not use fake identities, coordinated manipulation, or undisclosed participation. Recommendations prioritize transparent communication." },
    ],
  },
  "brand-protection": {
    audience: "Brands and individuals facing impersonation, misleading content, privacy concerns, or misuse of identity.",
    problem: "Impersonation and misleading material can confuse audiences and create real concerns. The right response depends on where the content appears and which rules may apply.",
    activities: ["Document relevant pages, profiles, and evidence", "Assess available platform, publisher, or privacy reporting routes", "Coordinate factual escalation guidance with the client's team"],
    outcomes: ["A documented view of the issue and its sources", "A clearer understanding of available reporting options", "A prioritized response plan grounded in evidence"],
    faqs: [
      { question: "Can you guarantee content takedowns?", answer: "No. Publishers and platforms make their own decisions, and legal outcomes depend on the facts and jurisdiction. We can help identify and document appropriate options." },
      { question: "What information should we preserve?", answer: "Keep URLs, dates, screenshots where lawful, account details, and relevant correspondence. Avoid engaging in ways that could alter evidence before it is documented." },
      { question: "Do you provide legal advice?", answer: "No. We can help organize reputation and platform-policy options. Legal questions should be reviewed with a qualified attorney." },
    ],
  },
  "employer-reputation": {
    audience: "Employers, HR leaders, and talent teams who want to understand public workplace feedback.",
    problem: "Prospective candidates may read employee feedback before applying. Repeated themes can be difficult to see when comments are spread across platforms and internal teams.",
    activities: ["Review employer feedback on relevant public platforms", "Identify recurring themes while protecting individual privacy", "Develop measured response and internal-learning recommendations"],
    outcomes: ["A clearer view of candidate-facing feedback", "Themes to discuss with the appropriate internal teams", "Consistent, respectful response guidance"],
    faqs: [
      { question: "Can you remove negative employee reviews?", answer: "Only the platform can decide whether a review violates its policies. Critical but policy-compliant feedback should not be misrepresented as removable." },
      { question: "Can you identify anonymous reviewers?", answer: "No. We do not attempt to identify anonymous reviewers or expose private information. We focus on public feedback themes and constructive responses." },
      { question: "How should employers respond to criticism?", answer: "Responses should respect privacy, avoid discussing individual employment matters, acknowledge concerns where appropriate, and direct people to suitable channels." },
    ],
  },
  "marketplace-app-reputation": {
    audience: "E-commerce brands, app publishers, SaaS providers, and businesses using third-party marketplaces.",
    problem: "Ratings and customer feedback can vary across storefronts, marketplaces, and app stores. A scattered response process can obscure product issues and leave customers without useful answers.",
    activities: ["Identify priority marketplace and app-store feedback sources", "Group reviews into recurring product or service themes", "Improve feedback-response workflows and eligible policy reports"],
    outcomes: ["A more useful picture of customer feedback by channel", "Clearer signals to share with product and support teams", "A consistent approach to public responses"],
    faqs: [
      { question: "Which marketplaces and app stores can be included?", answer: "Scope can include relevant channels such as Amazon, SaaS review platforms, Apple App Store, and Google Play, depending on your audience and access." },
      { question: "Can you remove low app ratings or marketplace reviews?", answer: "Platforms control moderation and ratings. We can help assess specific content against the applicable rules, but cannot guarantee removal or rating changes." },
      { question: "Can feedback themes be shared with product teams?", answer: "Yes. Aggregated themes can help teams spot recurring questions or friction, while keeping responses factual and respecting customer privacy." },
    ],
  },
  "crisis-management": {
    audience: "Organizations preparing for or responding to a sudden spike in public criticism or negative attention.",
    problem: "During a fast-moving issue, incomplete facts and unclear approval paths can lead to slow or inconsistent communication. Teams need a calm process before messages spread further.",
    activities: ["Assess public signals, sources, and likely escalation paths", "Establish response owners, approval steps, and monitoring priorities", "Prepare factual holding statements and recovery checkpoints"],
    outcomes: ["A clearer view of the issue and what is verified", "A coordinated response process for relevant stakeholders", "Practical follow-up measures after the immediate response"],
    faqs: [
      { question: "Can you make a crisis disappear?", answer: "No. Public attention and third-party content cannot be controlled. We support clear assessment, responsible communication, and follow-through." },
      { question: "How quickly can crisis support begin?", answer: "Timing depends on scope and availability. The first step is to establish what is known, what needs verification, and who is authorized to respond." },
      { question: "Should we respond to every post about an issue?", answer: "No. Responses should be coordinated, factual, and appropriate to the audience and channel. Repeating unverified claims can increase confusion." },
    ],
  },
  "reputation-audit-consulting": {
    audience: "Teams seeking an independent assessment of reputation signals, risks, and practical next steps.",
    problem: "When feedback, search results, and brand conversations are reviewed separately, teams can struggle to see the most important patterns or decide what to address first.",
    activities: ["Review agreed search, review, social, and competitor signals", "Identify strengths, gaps, and issues requiring closer attention", "Prioritize recommendations by relevance, effort, and ownership"],
    outcomes: ["A concise view of current reputation signals", "A practical, prioritized action plan", "Clear next steps for internal owners and measurement"],
    faqs: [
      { question: "What is included in a reputation audit?", answer: "The scope is agreed in advance and may include selected search results, review platforms, public conversations, competitors, and business locations." },
      { question: "Does an audit guarantee a reputation improvement?", answer: "No. An audit provides findings and recommendations, not guaranteed outcomes. Progress depends on many factors, including implementation and third-party decisions." },
      { question: "Do we need to continue with ongoing services after an audit?", answer: "No. The audit can stand alone as an assessment and action plan. Any ongoing support is a separate choice." },
    ],
  },
};

const defaultFaqs = (service: Service): ServiceFaq[] => [
  {
    question: `What does ${service.title} involve?`,
    answer: `${service.description} The exact scope is agreed with you before work begins.`,
  },
  {
    question: "Can you guarantee specific results?",
    answer:
      "No. Reputation outcomes depend on customers, publishers, platforms, and search systems that Helix ORM does not control. We focus on clear analysis, responsible recommendations, and work that can be measured.",
  },
  {
    question: "How do we get started?",
    answer:
      "We begin by understanding your goals, relevant platforms, current concerns, and approval process. From there, we can recommend a practical scope and priorities.",
  },
];

export function getServicePageContent(service: Service): ServicePageContent {
  return (
    contentBySlug[service.slug] ?? {
      audience:
        "Organizations and individuals looking for practical, responsible support with their online reputation.",
      problem: `${service.description} Without a clear view of relevant sources and priorities, it can be difficult to know what deserves attention first.`,
      activities: [
        `Review the platforms and public sources relevant to ${service.title.toLowerCase()}`,
        "Identify recurring themes, information gaps, and issues that may need follow-up",
        "Create practical recommendations that fit your goals and approval process",
      ],
      outcomes: [
        "A clearer view of relevant reputation signals",
        "Prioritized next steps aligned with your needs",
        "A practical basis for reviewing progress over time",
      ],
      faqs: defaultFaqs(service),
    }
  );
}
