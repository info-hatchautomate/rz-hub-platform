import { useMemo, useState } from "react";
import { mockResources } from "@/data/mockResources";
import ResourceCard from "@/components/recursos/ResourceCard";
import ResourceFilters from "@/components/recursos/ResourceFilters";
import ResourcePreviewModal from "@/components/recursos/ResourcePreviewModal";

export default function Recursos() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [previewResource, setPreviewResource] = useState(null);

  const filtered = useMemo(() => {
    if (activeFilter === "Todos") return mockResources;
    return mockResources.filter((r) => r.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="relative mb-24 overflow-hidden rounded-xl bg-primary p-12 lg:p-20 shadow-2xl">
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-bold text-xs uppercase tracking-widest mb-6">
              Recursos RZ Hub
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1]">
              Recursos para tu Startup
            </h1>
            <p className="text-primary-container text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
              Plantillas, guías y casos para ayudarte a validar, crecer y escalar tu startup.
            </p>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dim opacity-50 blur-3xl -z-10" />
            {/* <div className="rounded-3xl shadow-2xl rotate-3 border-8 border-white/10 backdrop-blur-xl bg-white/10 aspect-[4/3] flex items-center justify-center"> */}
                <img alt="Collaboration" class="rounded-3xl shadow-2xl rotate-3 border-8 border-white/10 backdrop-blur-xl"
            data-alt="Modern co-working space with large glass windows, people collaborating on digital whiteboards with vibrant sticky notes"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ZmBR_kXneCkGR-L_HyOzuZLUtKOroMdxQHGgJJkavtY2K53IRrK5ATp0bzCXFko3ruviv4S62SVYQJu6VEQdRbgdI2_F85OLWK3_mriyhPhwrF9oYV7QMN4H_9e_1FqjZeFTyaQ5iiNVPEwo42Ch8hF14Vhks1Mq9Etueca5rtNY9-JFnOjr3kK0IH__9fbvj9TMSSRzEk60Y2kM7wNXhMw39pDU9YqDkPhHABqTJBmZpf23DYBxwm94PczS1yGtG7Hm2Hilk8py" />
              {/* <span className="material-symbols-outlined text-white/60 text-[8rem]">
                library_books
        
              </span> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mb-12">
        <ResourceFilters active={activeFilter} onChange={setActiveFilter} />
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {filtered.map((r) => (
          <ResourceCard key={r.id} resource={r} onPreview={setPreviewResource} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-500 italic">
            No hay recursos en esta categoría todavía.
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-slate-50 rounded-[2.5rem] p-12 md:p-20 text-center border-2 border-dashed border-slate-300 max-w-5xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
          ¿Tienes un recurso para la comunidad RZ?
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto mb-12 italic leading-relaxed">
          Comparte lo que aprendiste en tu proceso. Ayuda a las próximas generaciones de Reto
          Zapopan.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
            Compartir un recurso
          </button>
          <button className="bg-white text-primary border-2 border-primary px-10 py-4 rounded-2xl font-black text-lg hover:bg-primary/5 transition-all w-full sm:w-auto">
            Ver todos los recursos
          </button>
        </div>
      </section>

      <ResourcePreviewModal
        resource={previewResource}
        onClose={() => setPreviewResource(null)}
      />
    </div>
  );
}
