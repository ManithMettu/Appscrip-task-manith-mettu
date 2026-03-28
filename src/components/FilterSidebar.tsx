"use client";

import { useState } from "react";
import type { FilterState } from "@/types/product";

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const FILTER_SECTIONS: {
  key: keyof Omit<FilterState, "customizable">;
  label: string;
  options: string[];
}[] = [
  { key: "idealFor",     label: "Ideal For",     options: ["All", "Men", "Women", "Baby & Kids"] },
  { key: "occasion",     label: "Occasion",      options: ["All", "Casual", "Formal", "Sports", "Party", "Wedding"] },
  { key: "work",         label: "Work",          options: ["All", "Hand Embroidery", "Zardozi", "Chikankari", "Block Print"] },
  { key: "fabric",       label: "Fabric",        options: ["All", "Cotton", "Silk", "Linen", "Wool", "Polyester"] },
  { key: "segment",      label: "Segment",       options: ["All", "Indian Wear", "Western Wear", "Kids Wear", "Accessories"] },
  { key: "suitableFor",  label: "Suitable For",  options: ["All", "Winter", "Summer", "Monsoon", "All Season"] },
  { key: "rawMaterials", label: "Raw Materials", options: ["All", "Organic", "Recycled", "Natural Dyes", "Handwoven"] },
  { key: "pattern",      label: "Pattern",       options: ["All", "Solid", "Printed", "Embroidered", "Striped", "Checks"] },
];

export default function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const setField = (key: keyof Omit<FilterState, "customizable">, value: string) =>
    onFilterChange({ ...filters, [key]: value });

  return (
    <aside className="filter-sidebar" aria-label="Product filters">
      {/* Customizable */}
      <div className="filter-customizable">
        <label className="customizable-label">
          <span className={`custom-checkbox${filters.customizable ? " checked" : ""}`}>
            {filters.customizable && <CheckIcon />}
          </span>
          <input
            type="checkbox"
            checked={filters.customizable}
            onChange={(e) => onFilterChange({ ...filters, customizable: e.target.checked })}
            className="sr-only"
          />
          <span>Customizable</span>
        </label>
      </div>

      {/* Filter sections */}
      {FILTER_SECTIONS.map(({ key, label, options }) => {
        const isOpen = openSections[key] ?? false;
        const selected = filters[key] as string;
        const isFiltered = selected !== "All";

        return (
          <div key={key} className="filter-section">
            <button
              className="filter-section-toggle"
              onClick={() => toggle(key)}
              aria-expanded={isOpen}
              aria-controls={`filter-${key}`}
            >
              <div className="filter-section-info">
                <span className="filter-section-title">{label}</span>
                {!isOpen && (
                  <span className={`filter-section-value${isFiltered ? " filtered" : ""}`}>
                    {selected}
                  </span>
                )}
              </div>
              <ChevronIcon open={isOpen} />
            </button>

            {isOpen && (
              <ul id={`filter-${key}`} className="filter-options-list" role="list">
                {options.map((opt) => {
                  const isSelected = selected === opt;
                  return (
                    <li key={opt}>
                      <label className="filter-option">
                        <span className={`custom-checkbox${isSelected ? " checked" : ""}`}>
                          {isSelected && <CheckIcon />}
                        </span>
                        <input
                          type="radio"
                          name={key}
                          checked={isSelected}
                          onChange={() => setField(key, opt)}
                          className="sr-only"
                        />
                        <span className={opt === "All" && isFiltered ? "option-all-inactive" : ""}>
                          {opt}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </aside>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s", flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
