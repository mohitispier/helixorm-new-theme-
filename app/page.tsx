import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";

const services = [
  { number: "01", title: "Reddit intelligence", tag: "Community visibility", description: "Earn a place in the conversations that shape buying decisions, with thoughtful outreach built around your audience." },
  { number: "02", title: "AI search visibility", tag: "Search everywhere", description: "See where your brand appears in ChatGPT, Perplexity, Gemini, and Claude, then close the gaps that matter." },
  { number: "03", title: "Review management", tag: "Trust, earned daily", description: "Build a consistent review presence and respond to customer feedback with a voice that sounds like you." },
  { number: "04", title: "Reputation protection", tag: "Always on your side", description: "Catch emerging issues early and give your team a clear, measured plan for protecting brand trust." },
];

const plans = [
  { name: "Foundation", description: "A clear starting point for building a stronger online presence.", price: "$99", cadence: "per month", features: ["Brand mention monitoring", "Review platform support", "Monthly insight report"] },
  { name: "Reputation Builder", description: "A steady growth program for teams ready to build authority.", price: "$300", cadence: "per month", features: ["Everything in Foundation", "Reddit and AI search visibility", "Priority strategy sessions"], featured: true },
  { name: "Brand Authority", description: "A tailored reputation partner for ambitious businesses.", price: "Custom", cadence: "built around you", features: ["Dedicated reputation strategy", "Advanced reporting and insights", "Direct access to your team"] },
];

const questions = [
  { question: "What does online reputation management include?", answer: "It brings together monitoring, review management, search visibility, and thoughtful content strategy to strengthen how your brand is understood online." },
  { question: "How soon will we see progress?", answer: "Early visibility and response improvements can appear within the first few weeks. Lasting reputation gains build over time, so we share clear progress along the way." },
  { question: "Can you remove negative content?", answer: "When content violates a platform's policies, we can help pursue removal. Otherwise, we focus on a responsible response and building a broader, more accurate picture of your brand." },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero" id="top">
          <div className="hero-photo" aria-hidden="true" />
          <div className="hero-wrap">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> Reputation, with a point of view</p>
              <h1>Make your<br />brand <em>the one</em><br />people trust.</h1>
              <p className="hero-description">The internet has an opinion about your brand. We help you shape it with real conversations, smarter visibility, and a reputation built to last.</p>
              <div className="hero-actions"><a className="button button-dark" href="#contact">Build your reputation <span aria-hidden="true">↗</span></a><a className="text-link" href="#services">Explore what we do <span aria-hidden="true">↓</span></a></div>
              <div className="hero-proof"><div className="proof-avatars" aria-hidden="true"><span>J</span><span>M</span><span>A</span></div><p><strong>550+ brands</strong><br />moving forward with Helix ORM</p></div>
            </div>
            <div className="signal-panel" aria-label="Brand visibility snapshot">
              <div className="signal-topline"><span className="signal-indicator" /> LIVE BRAND SIGNALS <span>LAST 30 DAYS</span></div>
              <div className="signal-heading"><div><span className="micro-label">YOUR BRAND VISIBILITY</span><h2>Looking up.</h2></div><span className="signal-growth">+28.4%</span></div>
              <div className="signal-chart" aria-hidden="true"><div className="chart-grid"><i /><i /><i /><i /></div><svg viewBox="0 0 500 160" preserveAspectRatio="none"><defs><linearGradient id="chart-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c5f078" stopOpacity=".43" /><stop offset="100%" stopColor="#c5f078" stopOpacity="0" /></linearGradient></defs><path d="M0 130 C28 128 28 106 58 112 S95 126 118 96 S157 104 185 82 S220 95 250 70 S293 81 322 53 S354 72 380 43 S422 58 444 24 S480 34 500 10 V160 H0Z" fill="url(#chart-fill)" /><path d="M0 130 C28 128 28 106 58 112 S95 126 118 96 S157 104 185 82 S220 95 250 70 S293 81 322 53 S354 72 380 43 S422 58 444 24 S480 34 500 10" fill="none" stroke="#c5f078" strokeWidth="3" /></svg></div>
              <div className="signal-footer"><span>01 JUN</span><span>15 JUN</span><span>30 JUN</span></div>
              <div className="mention-card"><span className="mention-icon">r/</span><p><strong>Your brand is part of the conversation.</strong><br /><span>Reddit sentiment is trending positive</span></p><span className="mention-arrow">↗</span></div>
            </div>
            <div className="hero-stamp" aria-hidden="true"><span>GOOD<br />REPUTATION<br />IS EARNED</span><span className="stamp-star">✳</span></div>
          </div>
          <a className="scroll-note" href="#approach"><span /> Scroll to see the difference</a>
        </section>

        <section className="trust-strip" aria-label="What Helix ORM helps with"><p>YOUR BRAND, IN ALL THE RIGHT PLACES</p><div><span>Reddit</span><span>AI search</span><span>Reviews</span><span>Reputation</span><span>Real people</span></div></section>

        <section className="section services-section" id="services">
          <div className="section-heading"><div><p className="eyebrow">A better kind of ORM</p><h2>Good reputation.<br /><em>Good business.</em></h2></div><p className="section-intro">The way people find and talk about your business keeps changing. Your strategy should keep up, without ever losing the human touch.</p></div>
          <div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><div className="service-title"><h3>{service.title}</h3><span>{service.tag}</span></div><p>{service.description}</p><a href="#contact" aria-label={`Ask about ${service.title}`}>↗</a></article>)}</div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-image" role="img" aria-label="A team working together around a table" />
          <div className="approach-copy"><p className="eyebrow">Built around your brand</p><h2>Not a dashboard.<br /><em>A real partner.</em></h2><p>Tools can tell you what is happening. The right people help you decide what to do next. We pair always-on listening with a team that knows your brand, your audience, and what trust looks like in your category.</p><ul className="approach-points"><li>Clear, human-first strategy</li><li>Thoughtful action, never shortcuts</li><li>Progress you can actually measure</li></ul><a className="text-link" href="#contact">Meet your reputation team <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="numbers-band" aria-label="Helix ORM results"><div><strong>550<span>+</span></strong><p>brands supported</p></div><div><strong>97<span>%</span></strong><p>client satisfaction</p></div><div><strong>24<span>/7</span></strong><p>brand monitoring</p></div><div><strong>52<span>%</span></strong><p>average rating lift</p></div></section>

        <section className="section pricing-section" id="pricing">
          <div className="section-heading pricing-heading"><div><p className="eyebrow">Straightforward by design</p><h2>Room to grow.<br /><em>Nothing to hide.</em></h2></div><p className="section-intro">A starting point for every stage. We will help you find the right level of support for where your brand is going.</p></div>
          <div className="plans-grid">{plans.map((plan) => <article className={`plan ${plan.featured ? "plan-featured" : ""}`} key={plan.name}>{plan.featured && <p className="plan-label">A GOOD PLACE TO GROW</p>}<h3>{plan.name}</h3><p className="plan-description">{plan.description}</p><p className="plan-price"><strong>{plan.price}</strong>{plan.price.startsWith("$") && <span> / month</span>}</p>{!plan.price.startsWith("$") && <p className="plan-cadence">{plan.cadence}</p>}<ul>{plan.features.map((feature) => <li key={feature}><span>+</span>{feature}</li>)}</ul><a className={plan.featured ? "button button-lime" : "button button-outline"} href="#contact">Let’s talk <span aria-hidden="true">↗</span></a></article>)}</div>
          <p className="pricing-footnote">Every brand is different. We will confirm scope and pricing together before work begins.</p>
        </section>

        <section className="faq-section" id="faq"><div className="faq-heading"><p className="eyebrow">A few good questions</p><h2>Good to know.</h2><p>Still curious? We are happy to talk it through.</p><a className="text-link" href="mailto:info@helixorm.com">Ask us anything <span aria-hidden="true">↗</span></a></div><div className="faq-list">{questions.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></section>

        <section className="contact-section" id="contact"><div className="contact-shape" aria-hidden="true">✳</div><p className="eyebrow">Your next chapter starts here</p><h2>Let’s make your<br /><em>good name</em> go further.</h2><p>Tell us where you want to go. We will bring a few thoughtful ideas to the table.</p><a className="button button-lime" href="mailto:info@helixorm.com?subject=Let%27s%20talk%20reputation">Start a conversation <span aria-hidden="true">↗</span></a></section>
      </main>
      <SiteFooter />
    </>
  );
}