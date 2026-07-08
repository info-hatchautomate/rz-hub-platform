import { useEffect } from "react";

const CHIP_COLORS = [
  "bg-primary/10 text-primary",
  "bg-blue-500/10 text-blue-600",
  "bg-purple-500/10 text-purple-600",
  "bg-teal-500/10 text-teal-600",
  "bg-orange-500/10 text-orange-600",
];

/**
 * MentorDetailModal — recibe `mentor` (o null) y `onClose`.
 * Cierra con backdrop, botón X o Escape.
 */
export default function MentorDetailModal({ mentor, onClose }) {
  useEffect(() => {
    if (!mentor) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mentor, onClose]);

  if (!mentor) return null;

  const {
    fullName,
    specialtyArea,
    institution,
    bio,
    expertiseTags = [],
    availabilityDays,
    availabilityHours,
    sessionsCount,
    photoUrl,
  } = mentor;

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose?.();
  };

  return (
    <div
      onClick={handleBackdrop}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
    >
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Panel Izquierdo */}
        <div className="w-full md:w-[38%] bg-slate-50 p-8 flex flex-col items-center border-r border-slate-100">
          <div className="relative w-44 h-44 rounded-3xl overflow-hidden shadow-xl mb-6">
            <img src={photoUrl} alt={fullName} className="w-full h-full object-cover" />
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-4 border-white rounded-full shadow-sm" />
          </div>
          <h2 className="text-2xl font-black text-slate-800 text-center mb-1">{fullName}</h2>
          <p className="text-primary font-bold mb-6 text-center text-sm uppercase tracking-wider">
            {specialtyArea}
          </p>

          <div className="flex gap-3 mb-8">
            <button
              type="button"
              aria-label="Enviar correo"
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-slate-100"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </button>
            <button
              type="button"
              aria-label="Compartir"
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-slate-100"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
          </div>

          <div className="w-full space-y-4 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
              <span className="material-symbols-outlined text-primary text-lg">work</span>
              <span>{institution}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
              <span className="material-symbols-outlined text-primary text-lg">location_on</span>
              <span>Guadalajara, México</span>
            </div>
          </div>
        </div>

        {/* Panel Derecho */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto max-h-[90vh]">
          <div className="flex justify-between items-start mb-8 gap-4">
            <div className="flex-1">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                Sobre el Mentor
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed italic">
                {bio ? `“${bio}”` : "Sin descripción disponible."}
              </p>
            </div>
            <button
              type="button"
              className="bg-slate-800 text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-slate-900 transition-all shadow-lg shrink-0"
            >
              <span className="material-symbols-outlined text-lg">calendar_month</span>
              Agendar Mentoría
            </button>
          </div>

          <div className="mb-10">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Áreas de Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {expertiseTags.map((tag, i) => (
                <span
                  key={tag}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold ${CHIP_COLORS[i % CHIP_COLORS.length]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
              Disponibilidad
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AvailabilityTile
                icon="event_available"
                iconClass="text-primary"
                value={availabilityDays}
                label="Días Disponibles"
              />
              <AvailabilityTile
                icon="schedule"
                iconClass="text-blue-500"
                value={availabilityHours}
                label="Horas por sesión"
              />
            </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-wrap gap-6">
            <Stat icon="chat" value={`${sessionsCount} sesiones`} />
            <Stat icon="check_circle" value="100% respuesta" />
            <Stat icon="bolt" value="< 2h tiempo rpta." />
          </div>
        </div>
      </div>
    </div>
  );
}

function AvailabilityTile({ icon, iconClass, value, label }) {
  return (
    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4">
      <div className={`w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm ${iconClass}`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <div className="text-sm font-black text-slate-800">{value ?? "—"}</div>
        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{label}</div>
      </div>
    </div>
  );
}

function Stat({ icon, value }) {
  return (
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-teal-500 text-sm">{icon}</span>
      <span className="text-xs font-bold text-slate-600">{value}</span>
    </div>
  );
}
