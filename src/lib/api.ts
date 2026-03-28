import type { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const res = await fetch(`${BASE_URL}/products/categories`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
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
