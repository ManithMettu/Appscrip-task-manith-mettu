import axios from "axios";
import type { Product } from "@/types/product";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

export async function fetchProducts(): Promise<Product[]> {
  try {
    const { data } = await api.get<Product[]>("/products");
    return data;
  } catch {
    return [];
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const { data } = await api.get<string[]>("/products/categories");
    return data;
  } catch {
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
