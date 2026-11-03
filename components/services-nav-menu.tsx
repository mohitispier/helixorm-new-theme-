"use client";

import { useState } from "react";
import Link from "next/link";
import { categories, featuredServices, getServiceHref } from "../lib/services";

export default function ServicesNavMenu() {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const isOpen = isHovered || isFocused || isPinned;

  return (
    <div
      className="nav-services"
      data-open={isOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsFocused(false);
        }
      }}
    >
      <Link href="/reputation-management/">Services</Link>
      <button
        type="button"
        aria-label="Browse services"
        aria-expanded={isOpen}
        onClick={() => setIsPinned((pinned) => !pinned)}
      >
        ⌄
      </button>
      {isOpen && (
        <div className="services-dropdown" id="services-dropdown">
          <div className="services-dropdown-featured">
            <div className="services-dropdown-heading">
              <span>Featured services</span>
            </div>
            <div className="services-dropdown-featured-list">
              {featuredServices.map((service, index) => (
                <Link
                  className="services-dropdown-featured-card"
                  href={getServiceHref(service.slug)}
                  key={service.slug}
                >
                  <span className="services-dropdown-icon" aria-hidden="true">
                    {["☆", "✓", "◌", "⌕"][index]}
                  </span>
                  <span>
                    <strong>{service.title}</strong>
                    <small>{service.description}</small>
                  </span>
                  <span className="services-dropdown-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="services-dropdown-categories">
            <div className="services-dropdown-heading">
              <span>Services</span>
              <Link href="/reputation-management/">
                Reputation Management overview <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="services-dropdown-category-grid">
              {categories.map((service, index) => (
                <Link
                  className="services-dropdown-category"
                  href={getServiceHref(service.slug)}
                  key={service.slug}
                >
                  <span className="services-dropdown-icon" aria-hidden="true">
                    {["▤", "⌕", "✳", "◉", "▧", "◎", "◇", "♧", "▣", "↗", "⌁"][index]}
                  </span>
                  <span>{service.title}</span>
                  <span className="services-dropdown-arrow" aria-hidden="true">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <Link className="services-dropdown-audit" href="/reputation-audit/">
            <span>
              <strong>Not sure where to start?</strong>
              <small>An audit shows which channels matter most.</small>
            </span>
            <span>
              Click Here for a Quick  Audit<span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
