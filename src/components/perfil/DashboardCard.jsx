const STAGES = ["Idea", "Validación", "Pre-Seed", "Serie A"];

export default function DashboardCard({ startup, memberSince }) {
  const { stage, stageProgressPercent = 0, name, generationYear } = startup || {};
  const sector = startup?.sectorTags?.[0]?.replace(/^\S+\s/, "") || "—";

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
      <h2 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">dashboard</span> Dashboard
      </h2>

      {/* Stage progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-black text-slate-500 uppercase tracking-widest">
            Etapa del Proyecto
          </span>
          <span className="text-xs font-bold text-primary bg-primary-container px-2 py-0.5 rounded-full">
            {stage}
          </span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
            style={{ width: `${stageProgressPercent}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-semibold">
          {STAGES.map((s) => (
            <span
              key={s}
              className={s === stage ? "font-black text-primary" : ""}
            >
              {s}
              {s === stage ? " ●" : ""}
            </span>
          ))}
        </div>
      </div>

      {/* Grid of facts */}
      <div className="grid grid-cols-2 gap-4">
        <Fact label="Startup" value={name} />
        <Fact label="Generación" value={`Reto Zapopan ${generationYear}`} />
        <Fact label="Sector" value={sector} />
        <Fact label="Miembro desde" value={memberSince} />
      </div>
    </div>
  );
}

function Fact({ label, value }) {
  return (
    <div className="bg-slate-50 rounded-2xl p-4">
      <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
        {label}
      </div>
      <div className="font-bold text-slate-800">{value || "—"}</div>
    </div>
  );
}
