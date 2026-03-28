import type { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="no-results">
        <p>No products found matching your filters.</p>
        <p>Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <section aria-label="Product listing">
      <ul className="product-grid" role="list">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
