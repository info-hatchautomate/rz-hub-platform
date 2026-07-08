import { useMemo, useState } from "react";
import { mockPerks, mockPerkCategories } from "@/data/mockPerks";
import PerkCategorySection from "@/components/perks/PerkCategorySection";
import PerkBentoCard from "@/components/perks/PerkBentoCard";
import PerkDetailModal from "@/components/perks/PerkDetailModal";

export default function Perks() {
  const [selectedPerk, setSelectedPerk] = useState(null);

  const grouped = useMemo(() => {
    const map = new Map(mockPerkCategories.map((c) => [c.id, []]));
    mockPerks.forEach((p) => {
      if (map.has(p.categoryId)) map.get(p.categoryId).push(p);
    });
    return map;
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="relative mb-24 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-dim p-12 md:p-20 text-on-primary">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-[#26C6DA] rounded-full opacity-20 blur-3xl" />
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-extrabold tracking-widest mb-6">
            RZ HUB
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
            Perks y Alianzas
          </h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 leading-relaxed">
            Accede a herramientas, descuentos y alianzas exclusivas disponibles para ti como
            egresado de Reto Zapopan.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="mb-24">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight">Beneficios por Categoría</h2>
          <p className="text-on-surface-variant mt-2">
            Explora y activa los convenios vigentes organizados por área.
          </p>
        </div>
        <div className="space-y-16">
          {mockPerkCategories.map((cat) => (
            <PerkCategorySection
              key={cat.id}
              category={cat}
              perks={grouped.get(cat.id) || []}
              onOpenPerk={setSelectedPerk}
            />
          ))}
        </div>
      </section>

      {/* Bento */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight">Explora tus Ventajas</h2>
            <p className="text-on-surface-variant mt-2">
              Acceso directo a herramientas y servicios de élite.
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <span className="w-12 h-1 bg-primary rounded-full" />
            <span className="w-4 h-1 bg-slate-200 rounded-full" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <PerkBentoCard
            variant="wide"
            icon="terminal"
            title="Software Premium"
            description="Notion, Figma, Miro. Descuento o acceso gratuito para alumni verificados durante 12 meses."
            ctaLabel="Activar beneficio"
          />
          <PerkBentoCard
            variant="tall"
            icon="gavel"
            title="Legal y Fiscal"
            description="Despachos aliados de alto nivel. 1 sesión de asesoría gratuita por mes. El Hub valida la elegibilidad."
            activated
            activatedDate="12 de Mayo, 2026"
          />
          <PerkBentoCard
            variant="turquoise"
            icon="rocket_launch"
            title="Aceleradoras"
            description="Jalisco Hub, Wayra. Fast-track en convocatorias. Proceso diferenciado para alumni del Hub."
            ctaLabel="Solicitar acceso"
          />
          <PerkBentoCard
            variant="rose"
            icon="school"
            title="Formación Contínua"
            description="Tec, otras IES. Descuento en diplomados y programas de educación continua para potenciar tu carrera."
            ctaLabel="Ver convenios"
          />
        </div>
      </section>

      {/* CTA final */}
      <section className="mt-32 mb-16 max-w-5xl mx-auto px-6">
        <div className="bg-slate-50 rounded-3xl p-12 md:p-16 text-center border border-slate-100 shadow-sm">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
            ¿Quieres ser aliado del RZ Hub?
          </h2>
          <p className="text-lg text-slate-500 font-medium mb-10 max-w-2xl mx-auto leading-relaxed italic">
            Si tu empresa u organización quiere conectar con egresados de Reto Zapopan, escríbenos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-slate-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-900 transition-all w-full sm:w-auto shadow-lg shadow-slate-200">
              Ser Aliado
            </button>
            <button className="bg-white text-slate-800 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all w-full sm:w-auto">
              Ver todos los beneficios
            </button>
          </div>
        </div>
      </section>

      <PerkDetailModal perk={selectedPerk} onClose={() => setSelectedPerk(null)} />
    </div>
  );
}
