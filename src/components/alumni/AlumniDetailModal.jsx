import { useEffect } from "react";
import Badge from "../common/Badge.jsx";

/**
 * AlumniDetailModal — modal grande de perfil.
 * Se cierra con backdrop click, botón X o Escape.
 * Si `alumnus` es null, no renderiza nada.
 */
export default function AlumniDetailModal({ alumnus, onClose }) {
  useEffect(() => {
    if (!alumnus) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [alumnus, onClose]);

  if (!alumnus) return null;

  const {
    fullName,
    startupName,
    tagline,
    industry,
    generationYear,
    badge,
    country,
    markets,
    fundingRaised,
    jobsCreated,
    photoUrl,
  } = alumnus;

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
          className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-all"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Panel Izquierdo */}
        <div className="w-full md:w-[40%] bg-slate-50 p-8 flex flex-col items-center border-r border-slate-100">
          <div className="relative w-48 h-48 rounded-3xl overflow-hidden shadow-xl mb-6">
            <img src={photoUrl} alt={fullName} className="w-full h-full object-cover" />
            {badge ? (
              <div className="absolute top-4 right-4">
                <Badge variant={badge}>{badge}</Badge>
              </div>
            ) : null}
          </div>
          <h2 className="text-2xl font-black text-slate-800 text-center mb-1">{fullName}</h2>
          <p className="text-primary font-bold mb-4">{startupName}</p>

          <div className="flex gap-4 mb-8">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-slate-100"
              aria-label="Compartir"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-primary transition-all border border-slate-100"
              aria-label="Enviar correo"
            >
              <span className="material-symbols-outlined text-xl">mail</span>
            </button>
          </div>

          <div className="w-full space-y-3">
            <div className="flex items-center gap-3 text-slate-500 text-sm">
              <span className="material-symbols-outlined text-primary">verified</span>
              <span>Reto Zapopan {generationYear}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 text-sm">
              <span className="material-symbols-outlined text-primary">category</span>
              <span>{industry}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500 text-sm">
              <span className="material-symbols-outlined text-primary">public</span>
              <span>{country}</span>
            </div>
          </div>
        </div>

        {/* Panel Derecho */}
        <div className="flex-1 p-8 md:p-12">
          <div className="flex justify-between items-start mb-8 gap-4">
            <div>
              <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
                Sobre el Founder
              </h4>
              <p className="text-slate-600 leading-relaxed italic">
                {tagline ? `“${tagline}”` : "Sin descripción disponible."}
              </p>
            </div>
            <button
              type="button"
              className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-primary/20 shrink-0"
            >
              <span className="material-symbols-outlined text-lg">chat</span>
              Conectar por Chat
            </button>
          </div>

          <hr className="border-slate-100 mb-8" />

          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">
            Métricas de Impacto
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <MetricTile icon="payments" iconClass="text-primary" value={fundingRaised} label="Funding Levantado" />
            <MetricTile icon="groups" iconClass="text-blue-500" value={jobsCreated} label="Empleos Generados" />
            <MetricTile icon="public" iconClass="text-teal-500" value={markets} label="Mercados Activos" />
            <MetricTile icon="military_tech" iconClass="text-purple-500" value={generationYear} label="Año Generación" />
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricTile({ icon, iconClass, value, label }) {
  return (
    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
      <span className={`material-symbols-outlined mb-2 ${iconClass}`}>{icon}</span>
      <div className="text-xl font-black text-slate-800">{value ?? "—"}</div>
      <div className="text-[10px] font-bold text-slate-400 uppercase">{label}</div>
    </div>
  );
}
