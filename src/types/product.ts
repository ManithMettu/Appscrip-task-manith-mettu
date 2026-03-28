export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

export type SortOption =
  | "default"
  | "price-asc"
  | "price-desc"
  | "rating-desc"
  | "popularity";

export interface FilterState {
  customizable: boolean;
  idealFor: string;
  occasion: string;
  work: string;
  fabric: string;
  segment: string;
  suitableFor: string;
  rawMaterials: string;
  pattern: string;
}
