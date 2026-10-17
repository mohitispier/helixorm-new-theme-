"use client";

import Link from "next/link";
import { useRef } from "react";
import ServicesNavMenu from "./services-nav-menu";
import { categories, featuredServices, getServiceHref } from "../lib/services";

export default function SiteHeader() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  function closeMobileMenu() {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }

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
      <details className="mobile-nav" ref={mobileMenuRef}>
        <summary aria-label="Toggle navigation menu">
          <span className="mobile-menu-icon" aria-hidden="true"><i /><i /><i /></span>
        </summary>
        <button
          className="mobile-nav-backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
        />
        <div className="mobile-nav-panel">
          <nav aria-label="Mobile navigation">
            <Link href="/" onClick={closeMobileMenu}>Home</Link>
            <details className="mobile-services">
              <summary>Services <span aria-hidden="true">＋</span></summary>
              <div className="mobile-services-panel">
                <Link className="mobile-services-overview" href="/reputation-management/" onClick={closeMobileMenu}>
                  All services <span aria-hidden="true">↗</span>
                </Link>
                <p>Featured services</p>
                {featuredServices.map((service) => (
                  <Link href={getServiceHref(service.slug)} key={service.slug} onClick={closeMobileMenu}>
                    {service.title}
                  </Link>
                ))}
                <p>Service categories</p>
                {categories.map((service) => (
                  <Link href={getServiceHref(service.slug)} key={service.slug} onClick={closeMobileMenu}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/about/" onClick={closeMobileMenu}>About</Link>
            <Link href="/case-studies/" onClick={closeMobileMenu}>Case Studies</Link>
            <Link href="/blog/" onClick={closeMobileMenu}>Blog</Link>
            <Link href="/contact/" onClick={closeMobileMenu}>Contact</Link>
          </nav>
          <Link className="mobile-nav-cta" href="/reputation-audit/" onClick={closeMobileMenu}>
            Request an audit <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </details>
      <Link className="header-cta" href="/reputation-audit/">Request an audit <span aria-hidden="true">↗</span></Link>
    </header>
  );
}