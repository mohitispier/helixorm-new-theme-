const navigation = [
  { label: "What we do", href: "#services" },
  { label: "Our approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQs", href: "#faq" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Helix ORM home"><span className="wordmark-symbol" aria-hidden="true">h</span><span>helix<span>orm</span></span></a>
      <nav aria-label="Main navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <a className="header-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>
  );
}