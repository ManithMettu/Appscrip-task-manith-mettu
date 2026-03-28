"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Shop", href: "/products" },
  { label: "Skills", href: "#" },
  { label: "Stories", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact Us", href: "#" },
];

const ANNOUNCEMENT_ITEMS = [
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
  "Lorem ipsum dolor",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("ENG");

  return (
    <header className="site-header">
      {/* ── Announcement Bar ── */}
      <div className="announcement-bar" role="banner">
        {ANNOUNCEMENT_ITEMS.map((text, i) => (
          <div key={i} className="announcement-item">
            <Image
              src="/Logo.png"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
              className="announcement-icon"
            />
            <span>{text}</span>
          </div>
        ))}
      </div>

      {/* ── Main Header Row ── */}
      <div className="header-main">
        {/* Left: hamburger (mobile) + logo mark */}
        <div className="header-left">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <Link href="/" aria-label="Go to homepage" className="header-logo-mark">
            <Image
              src="/Logo.png"
              alt="Site logo mark"
              width={36}
              height={36}
              priority
              className="header-logo-img"
            />
          </Link>
        </div>

        {/* Center: brand name */}
        <Link href="/" className="header-brand" aria-label="LOGO — homepage">
          LOGO
        </Link>

        {/* Right: actions */}
        <div className="header-actions">
          <button aria-label="Search" className="header-icon-btn">
            <SearchIcon />
          </button>
          <button aria-label="Wishlist" className="header-icon-btn">
            <HeartIcon />
          </button>
          <button aria-label="Shopping bag" className="header-icon-btn">
            <BagIcon />
          </button>
          <button aria-label="Account" className="header-icon-btn header-desktop-only">
            <UserIcon />
          </button>

          {/* Language selector */}
          <div className="lang-selector header-desktop-only">
            <label htmlFor="lang-select" className="sr-only">Select language</label>
            <select
              id="lang-select"
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="lang-select"
              aria-label="Language"
            >
              <option value="ENG">ENG</option>
              <option value="HIN">HIN</option>
              <option value="FRA">FRA</option>
            </select>
            <ChevronDownIcon />
          </div>
        </div>
      </div>

      {/* ── Desktop Nav Row ── */}
      <nav className="header-nav" aria-label="Main navigation">
        <ul role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile Nav Drawer ── */}
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <ul role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

/* ── Icons ─────────────────────────────── */
function SearchIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
