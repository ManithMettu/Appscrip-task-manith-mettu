import type { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchCategories(): Promise<string[]> {
  const res = await fetch(`${BASE_URL}/products/categories`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}

export async function fetchProductsByCategory(
  category: string
): Promise<Product[]> {
  const res = await fetch(
    `${BASE_URL}/products/category/${encodeURIComponent(category)}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) throw new Error("Failed to fetch products by category");
  return res.json();
}
