import Link from "next/link";
import ServicesNavMenu from "./services-nav-menu";
import { categories, featuredServices, getServiceHref } from "../lib/services";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Helix ORM home"><span className="wordmark-symbol" aria-hidden="true">h</span><span>helix<span>orm</span></span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <ServicesNavMenu />
        <Link href="/about/">About</Link>
        <Link href="/case-studies/">Case Studies</Link>
        <Link href="/blog/">Blog</Link>
        <Link href="/contact/">Contact</Link>
      </nav>
      <details className="mobile-nav">
        <summary>Menu</summary>
        <div className="mobile-nav-panel">
          <Link href="/reputation-management/">All Services</Link>
          <p>Featured services</p>
          {featuredServices.map((service) => <Link href={getServiceHref(service.slug)} key={service.slug}>{service.title}</Link>)}
          <p>Service categories</p>
          {categories.map((service) => <Link href={getServiceHref(service.slug)} key={service.slug}>{service.title}</Link>)}
          <Link href="/about/">About</Link><Link href="/case-studies/">Case Studies</Link><Link href="/blog/">Blog</Link><Link href="/contact/">Contact</Link>
        </div>
      </details>
      <Link className="header-cta" href="/reputation-audit/">Request an audit <span aria-hidden="true">↗</span></Link>
    </header>
  );
}