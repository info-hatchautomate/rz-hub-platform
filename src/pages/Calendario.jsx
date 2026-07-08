import { useMemo, useState } from "react";
import { mockEvents } from "@/data/mockEvents";
import FeaturedEventHero from "@/components/calendario/FeaturedEventHero";
import EventTimeline from "@/components/calendario/EventTimeline";

const FILTERS = ["Todos los eventos", "Talleres", "Networking", "Charlas"];

const filterMatch = {
  "Todos los eventos": () => true,
  Talleres: (e) => e.eventType?.toLowerCase().includes("taller"),
  Networking: (e) => e.eventType?.toLowerCase().includes("networking"),
  Charlas: (e) => /(charla|conferencia|panel)/i.test(e.eventType || ""),
};

export default function Calendario() {
  const [activeFilter, setActiveFilter] = useState("Todos los eventos");

  const featured = useMemo(() => mockEvents.find((e) => e.isFeatured), []);
  const timeline = useMemo(() => {
    return mockEvents
      .filter((e) => !e.isFeatured)
      .filter(filterMatch[activeFilter] || (() => true))
      .sort((a, b) => new Date(a.startDatetime) - new Date(b.startDatetime));
  }, [activeFilter]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="mb-16">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-dim p-12 md:p-20 text-on-primary">
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-2 leading-[1.1]">
              Calendario RZ Hub
            </h1>
            <p className="text-2xl md:text-4xl font-bold mb-6 opacity-90">Próximos Eventos</p>
            <p className="text-xl md:text-2xl font-medium opacity-90 leading-relaxed">
              Descubre y conéctate con las próximas actividades para fortalecer tu startup y generar
              nuevas oportunidades.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-tertiary/20 rounded-full -ml-32 -mb-20 blur-2xl" />
        </div>
      </section>

      {/* Filters + featured */}
      <section className="mb-20">
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((f) => {
            const active = f === activeFilter;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={
                  active
                    ? "bg-slate-800 text-white px-8 py-2.5 rounded-full font-bold text-sm transition-all hover:bg-slate-900 shadow-lg shadow-slate-200"
                    : "bg-slate-100 text-slate-600 px-8 py-2.5 rounded-full font-bold text-sm transition-all hover:bg-slate-200"
                }
              >
                {f}
              </button>
            );
          })}
        </div>

        <FeaturedEventHero event={featured} />
      </section>

      {/* Timeline */}
      <EventTimeline events={timeline} />

      {/* Closure */}
      <section className="mt-24 text-center">
        <div className="inline-block p-1 bg-gradient-to-r from-primary via-secondary to-tertiary rounded-full">
          <div className="bg-white px-10 py-4 rounded-full">
            <p className="text-xl font-bold text-slate-500 italic">
              "Ver que hay eventos próximos fortalece la sensación de que el ecosistema está vivo."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
