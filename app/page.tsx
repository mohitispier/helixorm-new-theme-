import SiteFooter from "../components/site-footer";
import SiteHeader from "../components/site-header";
import Link from "next/link";
import { categories, featuredServices, getServiceHref } from "../lib/services";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="home-page">
        <section className="hero" id="top">
          <div className="hero-photo" aria-hidden="true" />
          <div className="hero-wrap">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot" /> A thoughtful approach to online reputation</p>
              <h1>Build a stronger<br /><em>online reputation.</em></h1>
              <p className="hero-description">Earn genuine reviews from real customers, strengthen useful brand visibility, and respond to online conversations with care. A good reputation is built over time—with no shortcuts or guaranteed outcomes.</p>
              <div className="hero-actions"><Link className="button button-dark" href="/reputation-audit/">Request a reputation audit <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/reputation-management/">Explore our services <span aria-hidden="true">↓</span></Link></div>
              <div className="hero-proof"><span className="hero-proof-mark" aria-hidden="true">✳</span><p><strong>Human-first reputation support</strong><br />Built around your brand and audience</p></div>
            </div>
            <div className="signal-panel">
              <div className="signal-topline"><span className="signal-indicator" /> BRAND SIGNALS <span>ILLUSTRATIVE VIEW</span></div>
              <div className="signal-heading"><div><span className="micro-label">YOUR REPUTATION HAS MANY SIGNALS</span><h2>See the full picture.</h2></div><span className="signal-mark" aria-hidden="true">✳</span></div>
              <div className="signal-metrics" aria-label="Helix ORM service directory">
                <div><strong>04</strong><span>Featured services</span></div>
                <div><strong>11</strong><span>Service categories</span></div>
                <div><strong>15</strong><span>Service areas</span></div>
              </div>
              <div className="signal-chart" role="img" aria-label="Illustrative, non-quantitative graph representing reviews, search visibility, and online conversations">
                <div className="chart-grid" aria-hidden="true"><i /><i /><i /><i /></div>
                <svg viewBox="0 0 500 160" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="signal-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#c5ad79" stopOpacity=".34" />
                      <stop offset="100%" stopColor="#c5ad79" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 115 C38 109 45 92 82 98 S128 125 164 94 S211 80 247 89 S295 107 333 68 S386 73 416 48 S465 57 500 22 V160 H0Z" fill="url(#signal-fill)" />
                  <path d="M0 115 C38 109 45 92 82 98 S128 125 164 94 S211 80 247 89 S295 107 333 68 S386 73 416 48 S465 57 500 22" fill="none" stroke="#64806a" strokeWidth="3" />
                  <path d="M0 137 C42 127 52 132 87 118 S135 102 170 115 S215 123 250 101 S299 91 334 99 S383 74 418 81 S467 66 500 56" fill="none" stroke="#8b9a8e" strokeWidth="2" strokeDasharray="5 6" />
                  <path d="M0 80 C38 92 51 71 88 77 S132 88 168 69 S212 88 250 66 S295 73 334 54 S381 61 418 40 S466 46 500 31" fill="none" stroke="#b18d59" strokeWidth="2" strokeDasharray="2 6" />
                </svg>
              </div>
              <div className="signal-legend"><span><i /> Reviews</span><span><i /> Search</span><span><i /> Conversations</span></div>
              <div className="signal-steps">
                <div><span>01</span><strong>Listen</strong></div>
                <div><span>02</span><strong>Respond</strong></div>
                <div><span>03</span><strong>Strengthen</strong></div>
              </div>
              <p className="signal-note">Illustrative only—not client data or a performance forecast.</p>
            </div>
          </div>
          <a className="scroll-note" href="#problem"><span /> Discover our approach</a>
        </section>

        <section className="problem-section home-section" id="problem" aria-labelledby="problem-title">
          <div className="problem-image" role="img" aria-label="A business owner welcoming a customer into a local shop"><span>Trust is built in every interaction.</span></div>
          <div className="problem-copy">
            <p className="eyebrow">01 / Why online reputation matters</p>
            <h2 id="problem-title">People look you up<br />before they reach out.</h2>
            <p>Reviews, search results, and online conversations shape a first impression—often before you get a chance to tell your side of the story.</p>
            <p>When those signals are scattered or out of date, it can be harder for people to understand what makes your business worth trusting.</p>
            <Link className="text-link" href="/reputation-audit/">Get a clearer picture <span aria-hidden="true">↗</span></Link>
          </div>
        </section>

        <section className="what-section home-section" id="what-we-do" aria-labelledby="what-title">
          <div className="what-intro">
            <p className="eyebrow">02 / What Helix ORM does</p>
            <h2 id="what-title">A clearer view.<br /><em>A considered plan.</em></h2>
            <p>We help you understand how your brand shows up, prioritize what matters, and take practical steps to strengthen your online reputation.</p>
            <Link className="button button-light" href="/about/">Meet Helix ORM <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="what-capabilities">
            <article><span>01</span><div><h3>Listen across channels</h3><p>Bring reviews, search results, and relevant conversations into view.</p></div></article>
            <article><span>02</span><div><h3>Find the right priorities</h3><p>Turn what you learn into a focused plan shaped around your brand.</p></div></article>
            <article><span>03</span><div><h3>Respond with care</h3><p>Build trust through genuine feedback, accurate information, and thoughtful engagement.</p></div></article>
          </div>
        </section>

        <section className="section services-section home-services-section" id="services" aria-labelledby="featured-title">
          <div className="section-heading"><div><p className="eyebrow">03 / Featured services</p><h2 id="featured-title">Focused support.<br /><em>Where you need it.</em></h2></div><p className="section-intro">Explore our most-requested services across customer reviews, search, and online communities.</p></div>
          <div className="featured-service-grid">{featuredServices.map((service, index) => <Link className="featured-service-card" href={getServiceHref(service.slug)} key={service.slug}><span className="card-number">{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.description}</p><span className="card-link">Explore service <span aria-hidden="true">↗</span></span></Link>)}</div>
          <div className="services-more"><p>Looking for support beyond these featured services?</p><Link className="text-link" href="/reputation-management/">Explore all reputation management services <span aria-hidden="true">↗</span></Link></div>
        </section>

        <section className="categories-section home-section" id="categories" aria-labelledby="categories-title">
          <div className="home-section-heading">
            <div><p className="eyebrow">04 / All service categories</p><h2 id="categories-title">Support for the signals<br />that shape your story.</h2></div>
            <Link className="text-link" href="/reputation-management/">View all services <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-categories-grid">{categories.map((category, index) => <Link href={getServiceHref(category.slug)} key={category.slug} className="home-category-card"><span>{String(index + 1).padStart(2, "0")}</span><h3>{category.title}</h3><p>{category.description}</p><span className="home-category-arrow" aria-hidden="true">↗</span></Link>)}</div>
        </section>

        <section className="how-section home-section" id="how-we-work" aria-labelledby="how-title">
          <div className="how-visual" role="img" aria-label="Colleagues reviewing information together at a meeting"><span>Thoughtful work, built around your brand.</span></div>
          <div className="how-copy">
            <p className="eyebrow">05 / How Helix ORM works</p>
            <h2 id="how-title">A steady process.<br /><em>No shortcuts.</em></h2>
            <p className="how-intro">We start by understanding your situation, then build a practical plan with clear priorities and open communication.</p>
            <ol className="how-steps">
              <li><span>01</span><div><h3>Understand</h3><p>Review your current reputation and the channels that matter.</p></div></li>
              <li><span>02</span><div><h3>Plan</h3><p>Agree on the right next steps for your brand and audience.</p></div></li>
              <li><span>03</span><div><h3>Improve thoughtfully</h3><p>Act transparently, learn as you go, and report on the work.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="who-section home-section" id="who-we-help" aria-labelledby="who-title">
          <p className="eyebrow">06 / Who we help</p>
          <div className="home-section-heading"><h2 id="who-title">Different businesses.<br />Different reputation needs.</h2><p>Our support adapts to your audience, your platforms, and the questions people ask about your brand.</p></div>
          <div className="who-grid">
            <article><span>01</span><h3>Growing businesses</h3><p>Build good habits as your customer base and online presence expand.</p></article>
            <article><span>02</span><h3>Established brands</h3><p>Bring consistency to feedback and conversations across your channels.</p></article>
            <article><span>03</span><h3>Multi-location teams</h3><p>Support local reputations while keeping an eye on the wider brand.</p></article>
            <article><span>04</span><h3>Founders &amp; professionals</h3><p>Understand how personal and business profiles appear online.</p></article>
          </div>
        </section>

        <section className="why-section home-section" id="why-helix" aria-labelledby="why-title">
          <div className="why-photo" role="img" aria-label="A quiet, welcoming workspace with natural light" />
          <div className="why-copy">
            <p className="eyebrow">07 / Why Helix ORM</p>
            <h2 id="why-title">Trust is earned.<br /><em>Our work should be, too.</em></h2>
            <p>Reputation work touches real people and real conversations. We believe the way it is done matters as much as the outcome.</p>
            <ul className="why-principles">
              <li><strong>Human-first</strong><span>Listen before recommending action.</span></li>
              <li><strong>Transparent</strong><span>Clear priorities, honest progress, no inflated claims.</span></li>
              <li><strong>Policy-led</strong><span>Respect platform rules and pursue eligible corrections only.</span></li>
              <li><strong>Built for the long term</strong><span>No manufactured reviews or overnight promises.</span></li>
            </ul>
          </div>
        </section>

        <section className="proof-section home-section" id="case-studies" aria-labelledby="proof-title">
          <div className="proof-copy"><p className="eyebrow">08 / Case studies &amp; proof</p><h2 id="proof-title">Real work deserves<br />real evidence.</h2><p>We don’t publish invented testimonials, unsupported numbers, or client outcomes without approval. Case studies are being prepared for publication.</p><Link className="button button-light" href="/case-studies/">Explore case studies <span aria-hidden="true">↗</span></Link></div>
          <div className="proof-promise"><span aria-hidden="true">“</span><p>Clear about what we do.<br />Honest about what we can’t promise.</p><small>Helix ORM working principle</small></div>
        </section>

        <section className="resources-section home-section" id="resources" aria-labelledby="resources-title">
          <div className="home-section-heading"><div><p className="eyebrow">09 / Resources &amp; blog</p><h2 id="resources-title">Explore the topics<br />shaping online trust.</h2></div><p>Our resource library is being prepared. In the meantime, explore the service areas we work across.</p></div>
          <div className="resource-grid">
            {[
              { label: "Customer feedback", title: "Reviews & your reputation", href: getServiceHref("review-management") },
              { label: "Search visibility", title: "Your brand in search", href: getServiceHref("search-reputation") },
              { label: "A changing landscape", title: "AI reputation & visibility", href: getServiceHref("ai-reputation") },
            ].map((resource) => <Link className="resource-card" href={resource.href} key={resource.label}><span>{resource.label}</span><h3>{resource.title}</h3><span className="resource-arrow" aria-hidden="true">↗</span></Link>)}
          </div>
          <Link className="text-link" href="/blog/">Visit insights &amp; resources <span aria-hidden="true">↗</span></Link>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-shape" aria-hidden="true">✳</div><p className="eyebrow">10 / Take a thoughtful next step</p><h2 id="contact-title">Let’s make your<br /><em>good name</em> go further.</h2><p>Start with a clearer picture of how your brand appears across reviews, search, and online conversations.</p><div className="hero-actions"><Link className="button button-lime" href="/reputation-audit/">Request a reputation audit <span aria-hidden="true">↗</span></Link><Link className="contact-secondary" href="/contact/">Contact us directly</Link></div></section>
      </main>
      <SiteFooter />
    </>
  );
}