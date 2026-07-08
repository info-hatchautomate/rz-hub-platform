/**
 * Chip: pill-shaped label like "🔍 Validación".
 * Base style matches the HTML mock's white/slate feature chips.
 */
export default function Chip({ children, icon, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 text-xs font-semibold px-4 py-2 rounded-full ${className}`}
    >
      {icon ? <span aria-hidden>{icon}</span> : null}
      {children}
    </span>
  );
}
