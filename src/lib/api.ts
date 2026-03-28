import axios from "axios";
import type { Product } from "@/types/product";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://fakestoreapi.com";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
    "User-Agent": "Mozilla/5.0 (compatible; NextJS/1.0)",
  },
});

export async function fetchProducts(): Promise<Product[]> {
  try {
    const { data } = await api.get<Product[]>("/products");
    console.log("[api] fetchProducts success, count:", data?.length);
    return data;
  } catch (err) {
    console.error("[api] fetchProducts failed:", err);
    return [];
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const { data } = await api.get<string[]>("/products/categories");
    console.log("[api] fetchCategories success:", data);
    return data;
  } catch (err) {
    console.error("[api] fetchCategories failed:", err);
    return [];
  }
}

export async function fetchProductsByCategory(
  category: string
): Promise<Product[]> {
  try {
    const { data } = await api.get<Product[]>(
      `/products/category/${encodeURIComponent(category)}`
    );
    return data;
  } catch {
    return [];
  }
}
