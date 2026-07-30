import { Link } from "@tanstack/react-router";
import { mockAlumni } from "@/data/mockAlumni";
import { mockMentors } from "@/data/mockMentors";
import { mockPerks } from "@/data/mockPerks";
import { mockResources } from "@/data/mockResources";
import { mockEvents } from "@/data/mockEvents";
import { mockCurrentUser } from "@/data/mockProfile";
import AlumniCard from "@/components/alumni/AlumniCard";
import MentorCard from "@/components/mentores/MentorCard";
import PerkCard from "@/components/perks/PerkCard";
import ResourceCard from "@/components/recursos/ResourceCard";
import EventTimelineItem from "@/components/calendario/EventTimelineItem";

function SectionHeader({ title, description, to, ctaLabel = "Ver todo" }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h2>
        {description && <p className="text-slate-500 mt-2">{description}</p>}
      </div>
      {to && (
        <Link
          to={to}
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
        >
          {ctaLabel}
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      )}
    </div>
  );
}

export default function Hub() {
  const user = mockCurrentUser;

  const alumniItems = mockAlumni.slice(0, 4);
  const mentorItems = mockMentors.slice(0, 3);
  const perkItems = mockPerks.slice(0, 3);
  const resourceItems = mockResources.slice(0, 3);
  const eventItems = mockEvents
    .filter((e) => !e.isFeatured)
    .slice(0, 3)
    .sort((a, b) => new Date(a.startDatetime) - new Date(b.startDatetime));

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-20">
      {/* Welcome hero */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-dim to-secondary p-12 md:p-16 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <div className="text-sm uppercase tracking-widest font-bold opacity-80 mb-3">
            Bienvenido de nuevo
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.05]">
            Hola, {user.fullName.split(" ")[0]}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mb-8">
            Este es tu Hub. Explora la red, activa beneficios y encuentra los recursos que necesitas
            para tu siguiente etapa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/perfil"
              className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Mi Perfil
            </Link>
            <Link
              to="/calendario"
              className="bg-white/10 border border-white/30 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors"
            >
              Ver calendario
            </Link>
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section>
        <SectionHeader
          title="Alumni recientes"
          description="Conoce a startups egresadas del programa."
          to="/alumni"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumniItems.map((a) => (
            <AlumniCard key={a.id} alumnus={a} />
          ))}
        </div>
      </section>

      {/* Mentores */}
      <section>
        <SectionHeader
          title="Mentores destacados"
          description="Agenda una sesión con quien te puede impulsar."
          to="/mentores"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentorItems.map((m) => (
            <MentorCard key={m.id} mentor={m} />
          ))}
        </div>
      </section>

      {/* Perks + Recursos side-by-side on large */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <SectionHeader title="Perks activos" to="/perks" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {perkItems.map((p) => (
              <PerkCard key={p.id} perk={p} onOpen={() => {}} />
            ))}
          </div>
        </div>
        <div>
          <SectionHeader title="Recursos nuevos" to="/recursos" />
          <div className="space-y-4">
            {resourceItems.map((r) => (
              <ResourceCard key={r.id} resource={r} onPreview={() => {}} />
            ))}
          </div>
        </div>
      </section>

      {/* Próximos eventos */}
      <section>
        <SectionHeader
          title="Próximos eventos"
          description="No te pierdas lo que viene esta semana."
          to="/calendario"
        />
        <div className="space-y-4 relative">
          <div className="hidden md:block absolute left-[104px] top-0 bottom-0 w-px bg-slate-200" />
          {eventItems.map((e) => (
            <EventTimelineItem key={e.id} event={e} />
          ))}
        </div>
      </section>
    </div>
  );
}
