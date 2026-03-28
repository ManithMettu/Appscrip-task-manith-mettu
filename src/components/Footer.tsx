import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import FooterAccordion from "./FooterAccordion";

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

const PAYMENT_ICONS = [
  { src: "/gpay.png",        alt: "Google Pay" },
  { src: "/master-card.png", alt: "Mastercard"  },
  { src: "/paypal.png",      alt: "PayPal"      },
  { src: "/amex.png",        alt: "Amex"        },
  { src: "/pay.png",         alt: "Apple Pay"   },
  { src: "/ipay.png",        alt: "Shop Pay"    },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* ── Top Section: Newsletter + Contact ── */}
      <div className="footer-top container">
        {/* Left: Newsletter */}
        <div className="footer-newsletter">
          <h2 className="footer-section-heading">BE THE FIRST TO KNOW</h2>
          <p className="footer-newsletter-desc">
            Sign up for updates from mettā muse.
          </p>
          <NewsletterForm />
        </div>

        {/* Right: Contact + Currency */}
        <div className="footer-contact">
          <div className="footer-contact-block">
            <h2 className="footer-section-heading">CONTACT US</h2>
            <p className="footer-contact-item">+44 221 133 5360</p>
            <p className="footer-contact-item">customercare@mettamuse.com</p>
          </div>

          <div className="footer-currency-block">
            <h3 className="footer-section-heading">CURRENCY</h3>
            <div className="footer-currency-row">
              <span className="currency-flag">🇺🇸</span>
              <span>• USD</span>
            </div>
            <p className="footer-currency-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-divider" />

      {/* ── Desktop bottom grid (3 columns) ── */}
      <div className="footer-bottom-grid container footer-desktop-only">
        <nav aria-label="mettā muse">
          <h3 className="footer-col-heading">mettā muse</h3>
          <ul role="list" className="footer-col-list">
            {BRAND_LINKS.map(({ label, href }) => (
              <li key={label}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick Links">
          <h3 className="footer-col-heading">QUICK LINKS</h3>
          <ul role="list" className="footer-col-list">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={label}><Link href={href}>{label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="footer-col-heading">FOLLOW US</h3>
          <div className="footer-follow-icons">
            <a href="#" aria-label="Instagram" className="follow-icon-link">
              <InstagramIcon />
            </a>
            <a href="#" aria-label="LinkedIn" className="follow-icon-link">
              <LinkedInIcon />
            </a>
          </div>
          <h3 className="footer-col-heading footer-accepts-heading">mettā muse ACCEPTS</h3>
          <div className="payment-icons">
            {PAYMENT_ICONS.map(({ src, alt }) => (
              <div key={alt} className="pay-badge">
                <Image src={src} alt={alt} width={60} height={36} style={{ objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile accordion (replaces desktop grid) ── */}
      <div className="footer-mobile-only container">
        {/* CALL US */}
        <div className="footer-mobile-section">
          <p className="footer-section-heading footer-mobile-heading">CALL US</p>
          <p className="footer-mobile-contact-line">
            +44 221 133 5360 &nbsp;•&nbsp; customercare@mettamuse.com
          </p>
        </div>
        <div className="footer-divider" />

        {/* CURRENCY */}
        <div className="footer-mobile-section">
          <p className="footer-section-heading footer-mobile-heading">CURRENCY</p>
          <div className="footer-currency-row">
            <span className="currency-flag">🇺🇸</span>
            <span>• USD</span>
          </div>
        </div>
        <div className="footer-divider" />

        {/* Accordion: mettā muse / QUICK LINKS / FOLLOW US */}
        <FooterAccordion />

        {/* mettā muse ACCEPTS */}
        <div className="footer-divider" />
        <div className="footer-mobile-section">
          <p className="footer-section-heading footer-mobile-heading">mettā muse ACCEPTS</p>
          <div className="payment-icons">
            {PAYMENT_ICONS.map(({ src, alt }) => (
              <div key={alt} className="pay-badge">
                <Image src={src} alt={alt} width={60} height={36} style={{ objectFit: "contain" }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="footer-copyright container">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
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
