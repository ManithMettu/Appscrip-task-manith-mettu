"use client";

import { useState } from "react";
import Link from "next/link";

const BRAND_LINKS = [
  { label: "About Us", href: "#" },
  { label: "Stories", href: "#" },
  { label: "Artisans", href: "#" },
  { label: "Boutiques", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "EU Compliances Docs", href: "#" },
];

const QUICK_LINKS = [
  { label: "Orders & Shipping", href: "#" },
  { label: "Join/Login as a Seller", href: "#" },
  { label: "Payment & Pricing", href: "#" },
  { label: "Return & Refunds", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
];

const SECTIONS = [
  { key: "brand",  heading: "mettā muse",  links: BRAND_LINKS  },
  { key: "quick",  heading: "QUICK LINKS", links: QUICK_LINKS  },
  { key: "follow", heading: "FOLLOW US",   links: []           },
];

export default function FooterAccordion() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (key: string) => setOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div className="footer-accordion">
      {SECTIONS.map(({ key, heading, links }) => (
        <div key={key} className="footer-accordion-item">
          <button
            className="footer-accordion-trigger"
            onClick={() => toggle(key)}
            aria-expanded={!!open[key]}
          >
            <span>{heading}</span>
            <ChevronIcon open={!!open[key]} />
          </button>

          {open[key] && (
            <div className="footer-accordion-body">
              {key === "follow" ? (
                <div className="footer-follow-icons">
                  <a href="#" aria-label="Instagram" className="follow-icon-link">
                    <InstagramIcon />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="follow-icon-link">
                    <LinkedInIcon />
                  </a>
                </div>
              ) : (
                <ul role="list" className="footer-col-list">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
      aria-hidden="true"
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
