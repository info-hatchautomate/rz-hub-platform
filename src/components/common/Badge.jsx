/**
 * Badge: uppercase pill for status like GANADOR / FINALISTA / EN CURSO / PARTICIPANTE.
 * Color changes based on the value; falls back to slate for unknown variants.
 */
const VARIANTS = {
  GANADOR: "bg-primary text-white",
  FINALISTA: "bg-secondary-container text-on-secondary-container",
  EN_CURSO: "bg-amber-100 text-amber-800",
  "EN CURSO": "bg-amber-100 text-amber-800",
  PARTICIPANTE: "bg-slate-100 text-slate-600",
};

export default function Badge({ children, variant, className = "" }) {
  const key = variant ?? (typeof children === "string" ? children : "");
  const style = VARIANTS[key] ?? "bg-slate-100 text-slate-600";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${style} ${className}`}
    >
      {children}
    </span>
  );
}
