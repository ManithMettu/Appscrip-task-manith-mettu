import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

function getBadge(id: number): "new" | "out-of-stock" | null {
  if (id === 1 || id === 6 || id === 11) return "new";
  if (id === 2 || id === 9) return "out-of-stock";
  return null;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, image, category } = product;
  const badge = getBadge(id);

  const slugifiedTitle = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <article
      className="product-card"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* ── Image ── */}
      <div className="product-image-link">
        <div className="product-image-wrapper">
          <Image
            src={image}
            alt={`${title} — ${category}`}
            width={600}
            height={600}
            className="product-image"
            title={`${slugifiedTitle}-product-image`}
            itemProp="image"
          />

          {badge === "new" && (
            <span className="badge-new" aria-label="New product">
              New Product
            </span>
          )}

          {badge === "out-of-stock" && (
            <div className="badge-out-of-stock" aria-label="Out of stock">
              Out Of Stock
            </div>
          )}
        </div>
      </div>

      {/* ── Info ── */}
      <div className="product-info">
        {/* Title */}
        <div className="product-title-link">
          <h3 className="product-title" itemProp="name">
            {title}
          </h3>
        </div>

        {/* Pricing row: sign-in link + heart icon */}
        <div
          className="product-pricing-row"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <meta itemProp="priceCurrency" content="USD" />
          <p className="sign-in-pricing">
            <a href="/sign-in" className="sign-in-link" itemProp="url">
              Sign in
            </a>
            {" or Create an account to see pricing"}
          </p>

          <button
            className="card-wishlist-btn"
            aria-label={`Add ${title} to wishlist`}
            onClick={(e) => e.stopPropagation()}
          >
            <HeartIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

function HeartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
