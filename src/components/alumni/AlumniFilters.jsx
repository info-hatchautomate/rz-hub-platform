import { useEffect, useRef, useState } from "react";

const DROPDOWNS = [
  {
    key: "programType",
    label: "Programa",
    placeholder: "Todos los programas",
    options: ["Aceleración", "Incubación"],
  },
  {
    key: "specialty",
    label: "Especialidad",
    placeholder: "Todas las áreas",
    options: ["AI", "SaaS", "Healthtech", "Fintech", "Agtech", "Sustentabilidad"],
  },
  {
    key: "industry",
    label: "Industria",
    placeholder: "Todos los sectores",
    options: ["Tecnología", "Agrotecnología", "Salud", "Educación", "Sustentabilidad & Reciclaje"],
  },
  {
    key: "stage",
    label: "Etapa",
    placeholder: "Todas las etapas",
    options: ["Idea", "Validación", "Pre-Seed", "Serie A"],
  },
];

const EMPTY_FILTERS = {
  search: "",
  programType: null,
  specialty: null,
  industry: null,
  stage: null,
};

/**
 * AlumniFilters — barra de búsqueda + 4 dropdowns.
 * Mantiene su estado local y notifica al padre vía `onFilterChange(filters)`.
 */
export default function AlumniFilters({ onFilterChange }) {
  const [filters, setFilters] = useState(EMPTY_FILTERS);
  const [openKey, setOpenKey] = useState(null);
  const containerRef = useRef(null);

  const update = (patch) => {
    const next = { ...filters, ...patch };
    setFilters(next);
    onFilterChange?.(next);
  };

  useEffect(() => {
    const onDocClick = (e) => {
      if (!containerRef.current?.contains(e.target)) setOpenKey(null);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-7xl mx-auto bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-none"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div className="relative">
          <label className="block text-xs font-bold text-outline mb-2 uppercase tracking-widest">
            Nombre o Empresa
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary text-lg">
              search
            </span>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => update({ search: e.target.value })}
              placeholder="Ej. Juan Pérez..."
              className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low rounded-full border-none focus:ring-2 focus:ring-primary text-sm"
            />
          </div>
        </div>

        {DROPDOWNS.map(({ key, label, placeholder, options }) => {
          const isOpen = openKey === key;
          const selected = filters[key];
          return (
            <div key={key} className="relative">
              <label className="block text-xs font-bold text-outline mb-2 uppercase tracking-widest">
                {label}
              </label>
              <button
                type="button"
                onClick={() => setOpenKey(isOpen ? null : key)}
                className="w-full px-4 py-2.5 bg-surface-container-low rounded-full border-none text-on-surface flex items-center justify-between group hover:bg-surface-container transition-all text-sm"
              >
                <span className="truncate mr-2">{selected ?? placeholder}</span>
                <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                  expand_more
                </span>
              </button>
              {isOpen ? (
                <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl border border-surface-container-high z-[100] py-2">
                  <div
                    onClick={() => {
                      update({ [key]: null });
                      setOpenKey(null);
                    }}
                    className="px-6 py-2 hover:bg-primary/5 hover:text-primary cursor-pointer font-medium transition-colors text-xs"
                  >
                    {placeholder}
                  </div>
                  {options.map((opt) => (
                    <div
                      key={opt}
                      onClick={() => {
                        update({ [key]: opt });
                        setOpenKey(null);
                      }}
                      className="px-6 py-2 hover:bg-primary/5 hover:text-primary cursor-pointer font-medium transition-colors text-xs"
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
