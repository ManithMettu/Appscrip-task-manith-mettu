export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { fetchProducts, fetchCategories } from "@/lib/api";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductListingPage from "@/components/ProductListingPage";

export const metadata: Metadata = {
  title: "Shop All Products | LOGO — Fashion, Electronics & More",
  description:
    "Browse our curated collection of fashion, electronics, jewellery and more. Free shipping on orders over $50. Shop the latest trends at LOGO.",
  keywords: ["shop", "fashion", "electronics", "jewellery", "clothing", "online store"],
  openGraph: {
    title: "Shop All Products | LOGO",
    description:
      "Browse our curated collection of fashion, electronics, jewellery and more.",
    type: "website",
    url: "/products",
    siteName: "LOGO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop All Products | LOGO",
    description:
      "Browse our curated collection of fashion, electronics, jewellery and more.",
  },
  alternates: {
    canonical: "/products",
  },
};

function CollectionSchema({
  productCount,
  categories,
}: {
  productCount: number;
  categories: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Shop All Products",
    description:
      "Browse our curated collection of fashion, electronics, jewellery and more.",
    url: "/products",
    numberOfItems: productCount,
    about: categories.map((cat) => ({
      "@type": "Thing",
      name: cat,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  return (
    <>
      <CollectionSchema productCount={products.length} categories={categories} />
      <Header />

      <main id="main-content" className="main-content">
        <nav className="breadcrumb container" aria-label="Breadcrumb">
          <ol role="list">
            <li><a href="/">Home</a></li>
            <li aria-hidden="true">›</li>
            <li aria-current="page">Shop</li>
          </ol>
        </nav>

        <div className="plp-hero container">
          <h1>Discover Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </div>

        <div className="container">
          <ProductListingPage initialProducts={products} />
        </div>
      </main>

      <Footer />
    </>
  );
}
