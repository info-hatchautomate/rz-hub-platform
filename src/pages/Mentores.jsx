import { useMemo, useState } from "react";
import { mockMentors } from "../data/mockMentors.js";
import MentorCard from "../components/mentores/MentorCard.jsx";
import MentorFilters from "../components/mentores/MentorFilters.jsx";
import MentorDetailModal from "../components/mentores/MentorDetailModal.jsx";
import RoleExplainerCard from "../components/mentores/RoleExplainerCard.jsx";

const EMPTY = { tab: "Todos", specialty: "Todas las áreas", search: "" };

const ROLE_EXPLAINERS = [
  {
    role: "Mentor",
    icon: "school",
    tagline: "Guía Estratégica 1-a-1",
    backTitle: "Acompañamiento 1-a-1",
    backDescription:
      "Expertos que ofrecen mentoría personalizada para validar tu modelo de negocio, levantar capital y escalar tu visión estratégica.",
  },
  {
    role: "Tallerista",
    icon: "architecture",
    tagline: "Aprendizaje Práctico",
    backTitle: "Workshops Técnicos",
    backDescription:
      "Especialistas que imparten sesiones grupales intensivas sobre herramientas específicas, metodologías ágiles y desarrollo técnico.",
  },
  {
    role: "Aliado",
    icon: "handshake",
    tagline: "Conexión y Mercado",
    backTitle: "Red Estratégica",
    backDescription:
      "Corporativos e instituciones que abren puertas comerciales, facilitan el networking y ofrecen beneficios exclusivos para tu startup.",
  },
];

// Mapea la etiqueta del tab al roleType real del dato.
const TAB_TO_ROLE = {
  Mentors: "Mentor",
  Talleristas: "Tallerista",
  Aliados: "Aliado",
};

export default function Mentores() {
  const [filters, setFilters] = useState(EMPTY);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    const roleFilter = TAB_TO_ROLE[filters.tab] ?? null;
    const specialtyFilter =
      filters.specialty && filters.specialty !== "Todas las áreas" ? filters.specialty : null;

    return mockMentors.filter((m) => {
      if (roleFilter && m.roleType !== roleFilter) return false;
      if (specialtyFilter && m.filterSpecialty !== specialtyFilter) return false;
      if (q) {
        const hay = `${m.fullName} ${m.specialtyArea} ${m.institution}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="px-8 mb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-container/20 text-primary font-bold text-sm uppercase tracking-widest">
              Ecosistema de Crecimiento
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter leading-tight font-headline">
              Mentores y <span className="text-primary italic">Aliados</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Expertos y organizaciones aliadas que acompañan a los emprendedores de Reto Zapopan
              en cada etapa.
            </p>
          </div>
          <div className="flex-1 relative hidden md:block">
            <div className="w-full aspect-square rounded-3xl bg-secondary-container/30 relative overflow-hidden rotate-3 scale-95">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                                  {/* <div
                        class="w-full aspect-square rounded-3xl bg-secondary-container/30 relative overflow-hidden rotate-3 scale-95"> */}
                        <img alt="Collaborative meeting" class="w-full h-full object-cover"
                            data-alt="Modern collaborative workspace with diverse group of professionals discussing strategy over coffee in bright sunlit architectural environment"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSxZiennag9Oll7OiOgltkq-2jgI9Zcij86GNa-_kb8y2vz2yXyBbDNbYhLHtAda0ojsXOz_spbIstLBvex8TYcVuCkJI5wVgYOW_8kHwK0IK0QAGHusfe74clFLWpw-lh_BKS9IB-pzto-RJESR4PXBoRkqSjmW3_X8i6nhOBsLQukX5Z6R1S8fMyNIM4oHslHsNAKD3jmGakVtECYJTPpyEkxo0VrH7OebJ5Zcta1AXGOv7l8pUlIS1qGya57C0Qph8xZFNnY8dB"
                            // style=""
                            />
                        <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                    {/* </div> */}
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl shadow-xl -rotate-6 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white">lightbulb</span>
                </div>
                <div>
                  <div className="text-sm font-bold">Asesoría Directa</div>
                  <div className="text-xs text-on-surface-variant">+250 Mentores activos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Flip cards */}
      <section className="max-w-7xl mx-auto px-8 mb-24">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-800 mb-12 font-headline">
          ¿Qué significa cada rol?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ROLE_EXPLAINERS.map((r) => (
            <RoleExplainerCard key={r.role} {...r} />
          ))}
        </div>
      </section>

      {/* Filtros */}
      <section className="px-8 mb-12">
        <MentorFilters onFilterChange={setFilters} />
      </section>

      {/* Grid */}
      <section className="px-8">
        <div className="max-w-7xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((m) => (
                <MentorCard key={m.id} mentor={m} onViewProfile={setSelected} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-on-surface-variant font-medium">
                No encontramos mentores con esos filtros. Ajusta la búsqueda para ver más resultados.
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="h-24" />

      <MentorDetailModal mentor={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
