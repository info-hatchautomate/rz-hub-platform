import PerkCard from "./PerkCard";

export default function PerkCategorySection({ category, perks, onOpenPerk }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8 pb-3 border-b border-slate-100">
        <span className="material-symbols-outlined text-primary text-2xl">{category.icon}</span>
        <h3 className="text-2xl font-black text-slate-800">{category.name}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {perks.map((perk) => (
          <PerkCard key={perk.id} perk={perk} onOpen={onOpenPerk} />
        ))}
      </div>
      {perks.length === 0 && (
        <p className="text-sm text-slate-400 italic">No hay beneficios en esta categoría todavía.</p>
      )}
    </div>
  );
}
