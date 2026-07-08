const variants = {
  wide: {
    span: "md:col-span-7",
    bg: "bg-tertiary-container",
    text: "text-on-tertiary-container",
  },
  tall: {
    span: "md:col-span-5",
    bg: "bg-secondary-container",
    text: "text-on-secondary-container",
  },
  turquoise: {
    span: "md:col-span-6",
    bg: "bg-[#E0F7FA]",
    text: "text-[#006064]",
    border: "border-l-8 border-[#26C6DA]",
    iconBg: "bg-[#26C6DA]",
  },
  rose: {
    span: "md:col-span-6",
    bg: "bg-primary-container/20",
    text: "text-on-primary-container",
    border: "border-l-8 border-primary",
    iconBg: "bg-primary",
  },
};

export default function PerkBentoCard({
  variant = "wide",
  icon,
  title,
  description,
  ctaLabel,
  onCta,
  activated = false,
  activatedDate,
}) {
  const v = variants[variant] || variants.wide;

  if (variant === "wide" || variant === "tall") {
    return (
      <div
        className={`${v.span} ${v.bg} rounded-xl p-8 flex flex-col justify-between relative overflow-hidden ${
          activated ? "opacity-80" : "group hover:scale-[1.01] transition-transform duration-500"
        }`}
      >
        {activated && <div className="absolute inset-0 bg-white/30 pointer-events-none z-10" />}
        <div className="relative z-0">
          <div className="bg-white/40 w-fit p-4 rounded-3xl backdrop-blur-sm mb-8">
            <span className={`material-symbols-outlined text-4xl ${v.text}`}>{icon}</span>
          </div>
          <h3 className={`text-3xl font-black ${v.text}`}>{title}</h3>
          <p className={`${v.text} opacity-80 text-lg mt-2 font-medium`}>{description}</p>
        </div>
        <div className="mt-8 relative z-0">
          {activated ? (
            <div className="flex items-center justify-center gap-3 bg-white/60 border border-green-300 text-green-700 py-4 rounded-full">
              <span className="material-symbols-outlined text-xl">check_circle</span>
              <div>
                <div className="font-black text-sm">Beneficio Activado</div>
                {activatedDate && (
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-70">
                    {activatedDate}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button
              onClick={onCta}
              className={`${v.text} bg-white/70 hover:bg-white px-8 py-3 rounded-full font-bold flex items-center gap-2 w-fit transition-all`}
            >
              <span className="material-symbols-outlined text-lg">bolt</span> {ctaLabel || "Activar beneficio"}
            </button>
          )}
        </div>
      </div>
    );
  }

  // horizontal (turquoise / rose)
  return (
    <div className={`${v.span} ${v.bg} ${v.border} rounded-xl p-8 flex flex-col md:flex-row gap-6 items-center`}>
      <div className={`${v.iconBg} text-white p-6 rounded-full shrink-0`}>
        <span className="material-symbols-outlined text-4xl">{icon}</span>
      </div>
      <div>
        <h3 className={`text-2xl font-black ${v.text}`}>{title}</h3>
        <p className={`${v.text} opacity-70 font-medium`}>{description}</p>
        <button onClick={onCta} className={`mt-4 ${v.text} font-extrabold flex items-center gap-2 group`}>
          {ctaLabel || "Solicitar acceso"}
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
