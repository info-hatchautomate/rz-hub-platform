export default function StatCard({ value, label, color = "text-primary" }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-sm">
      <div className={`text-4xl font-black mb-1 ${color}`}>{value}</div>
      <div className="text-[11px] text-slate-500 uppercase tracking-widest font-bold">{label}</div>
    </div>
  );
}
