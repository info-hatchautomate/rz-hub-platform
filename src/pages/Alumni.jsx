import { useMemo, useState } from "react";
import { mockAlumni } from "../data/mockAlumni.js";
import AlumniCard from "../components/alumni/AlumniCard.jsx";
import AlumniFilters from "../components/alumni/AlumniFilters.jsx";
import AlumniDetailModal from "../components/alumni/AlumniDetailModal.jsx";
import CurrentCohortCard from "../components/alumni/CurrentCohortCard.jsx";

const EMPTY = { search: "", programType: null, specialty: null, industry: null, stage: null };

export default function Alumni() {
  const [filters, setFilters] = useState(EMPTY);
  const [selected, setSelected] = useState(null);

  const currentCohort = useMemo(
    () => mockAlumni.filter((a) => a.generationStatus === "en_curso"),
    [],
  );

  const pastAlumni = useMemo(
    () => mockAlumni.filter((a) => a.generationStatus === "egresado"),
    [],
  );

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return pastAlumni.filter((a) => {
      if (q && !`${a.fullName} ${a.startupName}`.toLowerCase().includes(q)) return false;
      if (filters.programType && a.programType !== filters.programType) return false;
      if (filters.specialty && a.specialty !== filters.specialty) return false;
      if (filters.industry && a.industry !== filters.industry) return false;
      if (filters.stage && a.stage !== filters.stage) return false;
      return true;
    });
  }, [pastAlumni, filters]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-8 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary-dim to-secondary opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none text-primary font-headline">
                Directorio de <span className="text-secondary">Alumni</span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-medium max-w-2xl">
                Conoce a los egresados de Reto Zapopan: emprendedores que ya validaron su modelo de
                negocio y hoy forman parte de nuestra comunidad activa.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-tertiary-container text-on-tertiary-container rounded-full text-sm font-bold tracking-wide">
                  COMUNIDAD EMPRENDEDORA RZ
                </span>
                <span className="px-4 py-2 bg-primary-container text-on-primary-container rounded-full text-sm font-bold tracking-wide">
                  +1,200 Alumni de Reto Zapopan
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Generación Actual */}
      <section className="px-8 -mt-8 relative z-20 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-l-8 border-secondary mb-8">
            <h2 className="text-2xl font-extrabold text-on-surface mb-2 font-headline">
              Cursando el Reto Zapopan
            </h2>
            <p className="text-on-surface-variant font-medium">
              Conoce a los participantes de la generación actual
            </p>
          </div>
          {currentCohort.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {currentCohort.map((a) => (
                <CurrentCohortCard key={a.id} alumnus={a} />
              ))}
            </div>
          ) : (
            <p className="text-on-surface-variant text-sm">
              Aún no hay participantes cargados para la generación actual.
            </p>
          )}
        </div>
      </section>

      {/* Filtros */}
      <section className="px-8 relative z-20">
        <div className="max-w-7xl mx-auto mb-6">
          <h2 className="text-3xl font-extrabold text-on-surface font-headline">
            Directorio de Alumni Pasados
          </h2>
          <p className="text-on-surface-variant font-medium mt-2">
            Explora nuestras generaciones anteriores y utiliza los filtros para encontrar perfiles
            específicos.
          </p>
        </div>
        <AlumniFilters onFilterChange={setFilters} />
      </section>

      {/* Grid */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filtered.map((a) => (
              <AlumniCard key={a.id} alumnus={a} onViewProfile={setSelected} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-on-surface-variant font-medium">
              No encontramos alumni con esos filtros. Ajusta la búsqueda para ver más resultados.
            </p>
          </div>
        )}
      </section>

      <AlumniDetailModal alumnus={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
