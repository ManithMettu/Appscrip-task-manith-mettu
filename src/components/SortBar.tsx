"use client";

import { useState, useRef, useEffect } from "react";
import type { SortOption } from "@/types/product";

interface SortBarProps {
  total: number;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  filterVisible: boolean;
  onToggleFilter: () => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default",      label: "Recommended"       },
  { value: "popularity",   label: "Newest First"       },
  { value: "rating-desc",  label: "Popular"            },
  { value: "price-desc",   label: "Price : High To Low" },
  { value: "price-asc",    label: "Price : Low To High" },
];

export default function SortBar({
  total,
  sort,
  onSortChange,
  filterVisible,
  onToggleFilter,
}: SortBarProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = SORT_OPTIONS.find((o) => o.value === sort) ?? SORT_OPTIONS[0];

  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, []);

  return (
    <div className="sort-bar">
      {/* Left */}
      <div className="sort-bar-left">
        <span className="result-count">{total.toLocaleString()} Items</span>
        <button
          className="toggle-filter-btn"
          onClick={onToggleFilter}
          aria-label={filterVisible ? "Hide filters" : "Show filters"}
        >
          <ChevronSide left={filterVisible} />
          <span className="filter-label-desktop">{filterVisible ? "Hide Filter" : "Show Filter"}</span>
          <span className="filter-label-mobile">Filter</span>
        </button>
      </div>

      {/* Right — custom dropdown */}
      <div className="sort-dropdown-wrapper" ref={ref}>
        <button
          className="sort-dropdown-trigger"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {current.label}
          <ChevronDown open={open} />
        </button>

        {open && (
          <ul className="sort-dropdown-list" role="listbox">
            {SORT_OPTIONS.map(({ value, label }) => {
              const active = sort === value;
              return (
                <li
                  key={value}
                  role="option"
                  aria-selected={active}
                  className={`sort-dropdown-item${active ? " active" : ""}`}
                  onClick={() => { onSortChange(value); setOpen(false); }}
                >
                  {label}
                  <span className="sort-check-icon">
                    {active ? <CheckIcon /> : null}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

function ChevronSide({ left }: { left: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <polyline points={left ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      aria-hidden="true"
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
