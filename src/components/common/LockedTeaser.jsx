/**
 * Locked teaser placeholder for landing (public) mode.
 * Rendered by content cards when their `locked` prop is true — shows a
 * blurred skeleton with a "Solo para miembros" lock badge overlay.
 */
const variants = {
  alumni: {
    height: "h-[340px]",
    label: "Solo para miembros",
    icon: "lock",
  },
  mentor: {
    height: "h-[340px]",
    label: "Solo para miembros",
    icon: "lock",
  },
  perk: {
    height: "h-[220px]",
    label: "Desbloquear Perk",
    icon: "lock",
  },
  resource: {
    height: "h-[320px]",
    label: "Miembros",
    icon: "lock",
  },
  event: {
    height: "h-[130px]",
    label: "Miembros",
    icon: "lock",
  },
};

export default function LockedTeaser({ variant = "alumni", onUnlock }) {
  const v = variants[variant] || variants.alumni;

  return (
    <div
      className={`relative bg-white rounded-3xl border border-slate-200 p-6 overflow-hidden ${v.height}`}
    >
      {/* Blurred skeleton content */}
      <div className="[filter:blur(5px)] select-none pointer-events-none space-y-3">
        <div className="w-16 h-16 rounded-full bg-slate-200" />
        <div className="h-3 w-3/4 bg-slate-200 rounded" />
        <div className="h-3 w-1/2 bg-slate-200 rounded" />
        <div className="h-2 w-full bg-slate-200 rounded mt-6" />
        <div className="h-2 w-5/6 bg-slate-200 rounded" />
        <div className="h-2 w-4/6 bg-slate-200 rounded" />
        <div className="flex gap-2 mt-4">
          <div className="h-6 w-16 bg-slate-200 rounded-full" />
          <div className="h-6 w-20 bg-slate-200 rounded-full" />
        </div>
      </div>

      {/* Lock overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-slate-50/40 backdrop-blur-[1px]">
        <button
          onClick={onUnlock}
          className="flex items-center gap-2 bg-slate-900/90 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-primary transition-colors"
        >
          <span className="material-symbols-outlined text-sm">{v.icon}</span>
          {v.label}
        </button>
      </div>
    </div>
  );
}
