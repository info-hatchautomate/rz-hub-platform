import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/calendario")({
  head: () => ({
    meta: [
      { title: "Calendario — RZ Hub" },
      { name: "description", content: "Eventos y calendario de la comunidad RZ." },
      { property: "og:title", content: "Calendario — RZ Hub" },
      { property: "og:description", content: "Eventos y calendario de la comunidad RZ." },
    ],
  }),
  component: CalendarioPage,
});

function CalendarioPage() {
  return <h1 className="p-8 text-2xl font-semibold text-rz-ink">Calendario</h1>;
}
