import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos — RZ Hub" },
      { name: "description", content: "Biblioteca de recursos de la comunidad RZ." },
      { property: "og:title", content: "Recursos — RZ Hub" },
      { property: "og:description", content: "Biblioteca de recursos de la comunidad RZ." },
    ],
  }),
  component: RecursosPage,
});

function RecursosPage() {
  return <h1 className="p-8 text-2xl font-semibold text-rz-ink">Recursos</h1>;
}
