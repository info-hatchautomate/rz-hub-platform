import { genericoMujer } from "@/lib/assetFallbacks";

export default function ProfileHeaderCard({ user }) {
  const { fullName, startup, memberSince } = user;
  return (
    <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-200 mb-8">
      {/* Cover */}
      <div className="h-40 bg-gradient-to-br from-primary via-primary-dim to-secondary relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="px-8 pb-8 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6">
          <div className="flex items-end gap-5">
            <div className="w-28 h-28 rounded-[1.5rem] border-4 border-white shadow-xl overflow-hidden shrink-0 -mt-14 relative z-10 bg-slate-100">
              <img src={user.avatarUrl || genericoMujer} alt={fullName} className="w-full h-full object-cover" />
            </div>
            <div className="pb-1">
              <h1 className="text-2xl font-black text-slate-800">{fullName}</h1>
              <p className="text-slate-500 font-medium text-sm">
                Fundador@ @ {startup?.name} · Generación {startup?.generationYear}
              </p>
              {startup?.location && (
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="material-symbols-outlined text-sm text-slate-500">
                    location_on
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{startup.location}</span>
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-3 pb-2">
            <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 text-slate-500 px-4 py-2 rounded-full text-sm font-bold hover:border-primary hover:text-primary transition-all">
              <span className="material-symbols-outlined text-[18px]">edit</span> Editar Perfil
            </button>
            <button className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/30 hover:bg-primary-dim transition-all">
              <span className="material-symbols-outlined text-[18px]">share</span> Compartir
            </button>
          </div>
        </div>

        {startup?.tagline && (
          <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-2xl">{startup.tagline}</p>
        )}

        {startup?.sectorTags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {startup.sectorTags.map((tag, i) => (
              <span
                key={i}
                className={
                  i === 0
                    ? "bg-primary-container text-on-primary-container text-xs font-bold px-3 py-1 rounded-full"
                    : i === 1
                    ? "bg-secondary-container text-on-secondary-container text-xs font-bold px-3 py-1 rounded-full"
                    : "bg-slate-100 text-slate-500 text-xs font-bold px-3 py-1 rounded-full"
                }
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {memberSince && (
          <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-4">
            Miembro desde {memberSince}
          </div>
        )}
      </div>
    </div>
  );
}
