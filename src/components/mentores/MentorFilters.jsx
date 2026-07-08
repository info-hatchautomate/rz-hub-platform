import { useEffect, useRef, useState } from "react";
import { ROLE_ORDER } from "./roleStyles.js";

const TABS = ["Todos", ...ROLE_ORDER.map((r) => `${r}s`)]; // Todos | Mentors | Talleristas | Aliados
const SPECIALTY_OPTIONS = ["Todas las áreas", "AI", "SaaS", "Healthtech", "Fintech", "Agtech"];

const EMPTY = { tab: "Todos", specialty: "Todas las áreas", search: "" };

/**
 * MentorFilters — tabs por rol + dropdown de especialidad + búsqueda libre.
 * Estado local. Notifica al padre vía `onFilterChange(filters)`.
 * `filters.tab` es una de: "Todos" | "Mentors" | "Talleristas" | "Aliados".
 */
export default function MentorFilters({ onFilterChange }) {
  const [filters, setFilters] = useState(EMPTY);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const update = (patch) => {
    const next = { ...filters, ...patch };
    setFilters(next);
    onFilterChange?.(next);
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setDropdownOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div className="max-w-7xl mx-auto bg-surface-container-low p-4 rounded-3xl md:rounded-full shadow-sm flex flex-col lg:flex-row items-center gap-4">
      <div className="flex flex-wrap items-center bg-surface-container-high rounded-full p-1.5 w-full lg:w-auto">
        {TABS.map((tab) => {
          const active = filters.tab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => update({ tab })}
              className={
                active
                  ? "px-6 py-2 rounded-full bg-surface-container-lowest text-on-surface font-bold shadow-sm transition-all text-sm"
                  : "px-6 py-2 rounded-full text-on-surface-variant hover:text-on-surface transition-all text-sm font-medium"
              }
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 w-full lg:flex-1">
        <div className="relative w-full md:w-64" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setDropdownOpen((o) => !o)}
            className="w-full bg-surface-container-lowest border-none rounded-full px-6 py-3 text-on-surface flex items-center justify-between shadow-sm hover:shadow-md transition-all group"
          >
            <span>{filters.specialty}</span>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
              expand_more
            </span>
          </button>
          {dropdownOpen ? (
            <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl border border-surface-container-high z-[100] py-2">
              {SPECIALTY_OPTIONS.map((opt) => (
                <div
                  key={opt}
                  onClick={() => {
                    update({ specialty: opt });
                    setDropdownOpen(false);
                  }}
                  className="px-6 py-2 hover:bg-primary/5 hover:text-primary cursor-pointer font-medium transition-colors text-sm"
                >
                  {opt}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="relative flex-1 w-full">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">
            search
          </span>
          <input
            type="text"
            value={filters.search}
            onChange={(e) => update({ search: e.target.value })}
            placeholder="Buscar por nombre, especialidad o institución..."
            className="w-full bg-surface-container-lowest border-none rounded-full pl-12 pr-6 py-3 text-on-surface focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </div>
  );
}
