export default function ActivePerksCard({ perks = [] }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-sm font-black text-slate-800 mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-[20px]">loyalty</span>
        Perks Activos
      </h3>
      <div className="space-y-3">
        {perks.length === 0 && (
          <p className="text-xs text-slate-400 italic">Aún no has activado ningún perk.</p>
        )}
        {perks.map((perk) => (
          <div
            key={perk.perkId}
            className="flex items-center gap-3 p-3 rounded-xl bg-success-container/40 border border-green-200"
          >
            <span className="material-symbols-outlined text-success text-[20px]">check_circle</span>
            <div>
              <div className="text-sm font-bold text-slate-800 leading-tight">{perk.label}</div>
              <div className="text-[10px] text-slate-500">{perk.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
