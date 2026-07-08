import { resolveEventImage } from "@/lib/assetFallbacks";

function formatDate(iso) {
  const d = new Date(iso);
  const months = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];
  return { day: d.getDate(), month: months[d.getMonth()], year: d.getFullYear() };
}

function formatDateLong(iso) {
  const { day, month, year } = formatDate(iso);
  return `${month} ${day}, ${year}`;
}

export default function FeaturedEventHero({ event }) {
  if (!event) return null;
  const color = event.colorTheme || "#7C4DFF";

  return (
    <div className="relative group max-w-6xl">
      <div
        className="absolute -inset-1 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"
        style={{ background: `linear-gradient(to right, ${color}, #E61876)` }}
      />
      <div className="relative bg-white rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100">
        <div className="w-full md:w-[40%] aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
          <img src={resolveEventImage(event.imageUrl)} alt={event.title} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow space-y-6">
          <div className="flex items-center gap-4">
            <span className="bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              DESTACADO
            </span>
            <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">
              {formatDateLong(event.startDatetime)}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 leading-[1.1] tracking-tight">
            {event.title}
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed font-medium max-w-2xl">
            {event.description}
          </p>
          <div className="flex items-center gap-4 pt-4">
            <button
              className="text-white px-12 py-5 rounded-2xl font-black text-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
              style={{ backgroundColor: color, boxShadow: `0 10px 25px ${color}4D` }}
            >
              Registrarse Ahora
            </button>
            <button className="p-5 rounded-2xl border-2 border-slate-100 text-slate-400 hover:text-slate-600 hover:border-slate-200 transition-all">
              <span className="material-symbols-outlined text-2xl">share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
