"use client";

export default function NewsletterForm() {
  return (
    <form
      className="newsletter-form"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Enter your e-mail..."
        className="newsletter-input"
        required
        aria-required="true"
      />
      <button type="submit" className="newsletter-btn">
        Subscribe
      </button>
    </form>
  );
}
