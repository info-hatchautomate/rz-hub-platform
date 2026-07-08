export default function RecognitionBadgeCard({ recognition }) {
  if (!recognition) return null;
  const { emoji, title, subtitle, description } = recognition;

  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-6 text-white shadow-lg">
      <div className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-3">
        Reconocimiento
      </div>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl">{emoji}</span>
        <div>
          <div className="font-black text-base leading-tight">{title}</div>
          <div className="text-white/70 text-xs">{subtitle}</div>
        </div>
      </div>
      {description && <p className="text-white/80 text-xs leading-relaxed">{description}</p>}
    </div>
  );
}
