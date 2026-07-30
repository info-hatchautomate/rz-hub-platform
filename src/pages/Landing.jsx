import { mockAlumni } from "@/data/mockAlumni";
import { mockMentors } from "@/data/mockMentors";
import { mockPerks } from "@/data/mockPerks";
import { mockResources } from "@/data/mockResources";
import { mockEvents } from "@/data/mockEvents";
import AlumniCard from "@/components/alumni/AlumniCard";
import MentorCard from "@/components/mentores/MentorCard";
import PerkCard from "@/components/perks/PerkCard";
import ResourceCard from "@/components/recursos/ResourceCard";
import EventTimelineItem from "@/components/calendario/EventTimelineItem";
import { useLoginModal } from "@/components/common/LoginModal";
import { stockVideoUrl } from "@/lib/assetFallbacks";

function SectionEyebrow({ children, tone = "primary" }) {
  const tones = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    green: "bg-green-100 text-green-700",
    white: "bg-white/10 text-white border border-white/20",
  };
  return (
    <span
      className={`inline-block ${tones[tone]} text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5`}
    >
      {children}
    </span>
  );
}

export default function Landing() {
  const { open } = useLoginModal();
  const unlock = () => open?.();

  const alumniTeasers = mockAlumni.slice(0, 3);
  const mentorTeasers = mockMentors.slice(0, 3);
  const perkTeasers = mockPerks.slice(0, 5);
  const resourceTeasers = mockResources.slice(0, 4);
  const eventTeasers = mockEvents.filter((e) => !e.isFeatured).slice(0, 3);

  return (
    <div className="pb-20">
      {/* HERO */}
      <section className="pt-32 px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionEyebrow>Ecosistema Reto Zapopan</SectionEyebrow>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 leading-[0.95] mb-8">
              La plataforma para emprender <span className="text-primary">en Zapopan</span>.
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl mb-10">
              RZ Hub conecta a alumni, mentores, aliados y recursos del ecosistema. Únete para
              acceder a la red completa.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={unlock}
                className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-primary-dim transition-all"
              >
                Ingresar al Hub
              </button>
              <a
                href="#alumni"
                className="bg-white text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-all"
              >
                Explorar la comunidad
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-2xl">
            <video
              src={stockVideoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <div className="text-6xl font-black">+120</div>
              <div className="uppercase text-sm tracking-widest font-bold opacity-80">
                Startups en la red
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALUMNI TEASER */}
      <Section id="alumni" eyebrow="Red Alumni" title="Nuestros egresados" tone="primary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {alumniTeasers.map((a) => (
            <AlumniCard key={a.id} alumnus={a}  onUnlock={unlock} />
          ))}
        </div>
      </Section>

      {/* MENTORES TEASER */}
      <Section eyebrow="Mentores & Aliados" title="Aprende de los mejores" tone="secondary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mentorTeasers.map((m) => (
            <MentorCard key={m.id} mentor={m}  onUnlock={unlock} />
          ))}
        </div>
      </Section>

      {/* PERKS TEASER — sobre fondo oscuro */}
      <section className="bg-slate-900 text-white py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionEyebrow tone="white">Perks & Alianzas</SectionEyebrow>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3">
            Beneficios exclusivos para tu startup
          </h2>
          <p className="text-slate-400 mb-12 max-w-2xl">
            Créditos cloud, software premium y asesoría legal — desbloquéalos al ingresar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {perkTeasers.map((p) => (
              <PerkCard key={p.id} perk={p}  onUnlock={unlock} />
            ))}
          </div>
        </div>
      </section>

      {/* RECURSOS TEASER */}
      <Section eyebrow="Biblioteca" title="Recursos para emprender" tone="green">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resourceTeasers.map((r) => (
            <ResourceCard key={r.id} resource={r}  onUnlock={unlock} />
          ))}
        </div>
      </Section>

      {/* EVENTOS TEASER */}
      <Section eyebrow="Calendario" title="Próximos eventos" tone="secondary">
        <div className="space-y-4">
          {eventTeasers.map((e) => (
            <EventTimelineItem key={e.id} event={e}  onUnlock={unlock} />
          ))}
        </div>
      </Section>

      {/* CTA FINAL */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 mt-16">
        <div className="bg-gradient-to-br from-primary to-primary-dim rounded-[2.5rem] p-12 md:p-16 text-white text-center shadow-xl">
          <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
            ¿Ya eres parte del Reto Zapopan?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Ingresa al Hub y accede al directorio completo de alumni, mentores, perks y recursos.
          </p>
          <button
            onClick={unlock}
            className="bg-white text-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Ingresar al Hub
          </button>
        </div>
      </section>
    </div>
  );
}

function Section({ id, eyebrow, title, tone, children }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
      <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-10">
        {title}
      </h2>
      {children}
    </section>
  );
}
