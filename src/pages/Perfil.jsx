import { mockCurrentUser } from "@/data/mockProfile";
import ProfileHeaderCard from "@/components/perfil/ProfileHeaderCard";
import StatCard from "@/components/perfil/StatCard";
import DashboardCard from "@/components/perfil/DashboardCard";
import UploadedResourceRow from "@/components/perfil/UploadedResourceRow";
import EventRow from "@/components/perfil/EventRow";
import ContactCard from "@/components/perfil/ContactCard";
import ActivePerksCard from "@/components/perfil/ActivePerksCard";
import RecognitionBadgeCard from "@/components/perfil/RecognitionBadgeCard";

export default function Perfil() {
  const user = mockCurrentUser;
  const uploaded = user.uploadedResources || [];
  const upcoming = user.upcomingEvents || [];
  const history = user.pastEvents || [];

  return (
    <div className="pt-32 pb-24 px-6 md:px-10 max-w-7xl mx-auto">
      <ProfileHeaderCard user={user} />

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <StatCard value={user.stats.resourcesUploaded} label="Recursos Subidos" color="text-primary" />
        <StatCard
          value={user.stats.perksActivated}
          label="Perks Activados"
          color="text-[#7C4DFF]"
        />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="lg:col-span-2 space-y-8">
          <DashboardCard startup={user.startup} memberSince={user.memberSince} />

          {/* Uploaded resources */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-black text-slate-800 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">upload_file</span>
                Recursos Subidos
              </h2>
              <button className="flex items-center gap-2 bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined text-[16px]">add</span> Subir Recurso
              </button>
            </div>
            <div className="space-y-4">
              {uploaded.length === 0 && (
                <p className="text-sm text-slate-400 italic">
                  Aún no has subido recursos a la comunidad.
                </p>
              )}
              {uploaded.map((r) => (
                <UploadedResourceRow key={r.id} resource={r} />
              ))}
            </div>
          </div>

          {/* Events */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">event</span> Eventos
            </h2>

            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
              Próximos · Confirmados
            </div>
            <div className="space-y-3 mb-6">
              {upcoming.length === 0 && (
                <p className="text-sm text-slate-400 italic">
                  No tienes eventos próximos registrados.
                </p>
              )}
              {upcoming.map((ev) => (
                <EventRow key={ev.id} event={ev} variant="upcoming" />
              ))}
            </div>

            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">
              Historial
            </div>
            <div className="space-y-2">
              {history.length === 0 && (
                <p className="text-sm text-slate-400 italic">Sin historial aún.</p>
              )}
              {history.map((ev) => (
                <EventRow key={ev.id} event={ev} variant="history" />
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <ContactCard user={user} />
          <ActivePerksCard perks={user.activePerks} />
          <RecognitionBadgeCard recognition={user.recognition} />
        </div>
      </div>
    </div>
  );
}
