/**
 * CurrentCohortCard — variante para participantes "en curso"
 * (badge EN CURSO, acento en color secundario).
 */
export default function CurrentCohortCard({ alumnus }) {
  const {
    fullName,
    startupName,
    industry,
    industryIcon,
    programType,
    generationYear,
    photoUrl,
  } = alumnus;

  return (
    <div className="bg-surface-container-lowest rounded-lg overflow-hidden group hover:translate-y-[-8px] transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(230,24,118,0.12)]">
      <div className="relative h-48">
        <img alt={fullName} src={photoUrl} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container text-[10px] font-black px-3 py-1 rounded-full shadow-sm">
          EN CURSO
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <span className="text-[10px] font-extrabold text-secondary tracking-widest uppercase bg-secondary-container/20 px-2 py-1 rounded-md">
            Generación {generationYear}
          </span>
          <h3 className="text-xl font-bold text-on-surface mt-2">{fullName}</h3>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-semibold text-secondary">{startupName}</p>
          <p className="text-xs text-on-surface-variant flex items-center gap-1">
            {industryIcon ? (
              <span className="material-symbols-outlined text-sm">{industryIcon}</span>
            ) : null}
            {industry}
          </p>
        </div>
        <div className="pt-4 flex items-center justify-between border-t border-surface-container-high">
          <div className="flex gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-secondary hover:bg-secondary hover:text-on-secondary transition-colors"
              aria-label={`Contactar a ${fullName}`}
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </a>
          </div>
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest">
            {programType}
          </span>
        </div>
      </div>
    </div>
  );
}
