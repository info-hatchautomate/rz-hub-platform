/**
 * SectionHeader: eyebrow pill + big title + description.
 * `tone` controls the eyebrow color: "primary" (default) or "secondary".
 */
const EYEBROW_TONES = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
};

export default function SectionHeader({ eyebrow, title, description, tone = "primary", className = "" }) {
  return (
    <div className={`max-w-2xl mb-14 ${className}`}>
      {eyebrow ? (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 ${
            EYEBROW_TONES[tone] ?? EYEBROW_TONES.primary
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      {title ? (
        <h2 className="text-4xl font-black text-slate-900 leading-tight mb-5">{title}</h2>
      ) : null}
      {description ? (
        <p className="text-slate-500 text-lg font-medium leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
