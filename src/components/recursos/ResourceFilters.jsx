const FILTERS = [
  { value: "Todos", label: "Todos" },
  { value: "Validación", label: "Validación" },
  { value: "Crecimiento", label: "Crecimiento" },
  { value: "Escalamiento", label: "Escalamiento" },
];

export default function ResourceFilters({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-4 border-b border-slate-200 pb-4">
      {FILTERS.map((f) => {
        const isActive = active === f.value;
        return (
          <button
            key={f.value}
            onClick={() => onChange(f.value)}
            className={
              isActive
                ? "bg-primary text-white px-6 py-2 rounded-full font-bold text-sm shadow-md shadow-primary/20 transition-transform active:scale-95"
                : "bg-white text-slate-500 hover:text-slate-800 hover:bg-slate-50 border border-slate-200 px-6 py-2 rounded-full font-bold text-sm transition-all"
            }
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
}
