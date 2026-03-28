"use client";

import { useState, useMemo } from "react";
import type { Product, FilterState, SortOption } from "@/types/product";
import FilterSidebar from "./FilterSidebar";
import SortBar from "./SortBar";
import ProductGrid from "./ProductGrid";

interface ProductListingPageProps {
  initialProducts: Product[];
}

const DEFAULT_FILTERS: FilterState = {
  customizable: false,
  idealFor: "All",
  occasion: "All",
  work: "All",
  fabric: "All",
  segment: "All",
  suitableFor: "All",
  rawMaterials: "All",
  pattern: "All",
};

export default function ProductListingPage({
  initialProducts,
}: ProductListingPageProps) {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [sort, setSort] = useState<SortOption>("default");
  const [filterVisible, setFilterVisible] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let result = initialProducts;
    if (filters.idealFor !== "All") {
      const map: Record<string, string> = {
        Men: "men's clothing",
        Women: "women's clothing",
      };
      const cat = map[filters.idealFor];
      if (cat) result = result.filter((p) => p.category === cat);
    }
    return result;
  }, [initialProducts, filters]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sort) {
      case "price-asc":   return arr.sort((a, b) => a.price - b.price);
      case "price-desc":  return arr.sort((a, b) => b.price - a.price);
      case "rating-desc": return arr.sort((a, b) => b.rating.rate - a.rating.rate);
      case "popularity":  return arr.sort((a, b) => b.rating.count - a.rating.count);
      default:            return arr;
    }
  }, [filtered, sort]);

  return (
    <div className="plp-wrapper">
      {/* ── Sort bar spans full width above both columns ── */}
      <SortBar
        total={sorted.length}
        sort={sort}
        onSortChange={setSort}
        filterVisible={filterVisible}
        onToggleFilter={() => setFilterVisible((v) => !v)}
      />

      {/* ── Two-column: sidebar + grid ── */}
      <div className={`plp-layout${filterVisible ? "" : " filter-hidden"}`}>
        {/* Mobile overlay */}
        {mobileFiltersOpen && (
          <div
            className="mobile-filter-overlay"
            onClick={() => setMobileFiltersOpen(false)}
            aria-hidden="true"
          />
        )}

        {filterVisible && (
          <div className={`sidebar-wrapper${mobileFiltersOpen ? " sidebar-open" : ""}`}>
            <div className="mobile-filter-header">
              <span>Filters</span>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
                className="close-mobile-filters"
              >
                ✕
              </button>
            </div>
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </div>
        )}

        <div className="plp-main">
          <ProductGrid products={sorted} />
        </div>
      </div>
    </div>
  );
}
