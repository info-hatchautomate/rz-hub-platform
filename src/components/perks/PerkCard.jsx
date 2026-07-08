import LockedTeaser from "../common/LockedTeaser.jsx";

export default function PerkCard({ perk, onOpen, locked = false, onUnlock }) {
  if (locked) return <LockedTeaser variant="perk" onUnlock={onUnlock} />;
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: `${perk.iconColor}1A`, color: perk.iconColor }}
          >
            <span className="material-symbols-outlined text-2xl">{perk.icon}</span>
          </div>
          <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {perk.status}
          </span>
        </div>
        <div>
          <h4 className="text-xl font-bold text-slate-800">{perk.name}</h4>
          <p className="text-xs text-slate-500 mt-1 leading-relaxed">{perk.bannerDesc}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
        <span className="text-xs font-bold" style={{ color: perk.iconColor }}>
          {perk.shortOffer}
        </span>
        <button
          onClick={() => onOpen(perk)}
          className="text-xs font-bold text-primary hover:text-primary-dim flex items-center gap-1"
        >
          Activar <span className="material-symbols-outlined text-sm">bolt</span>
        </button>
      </div>
    </div>
  );
}
