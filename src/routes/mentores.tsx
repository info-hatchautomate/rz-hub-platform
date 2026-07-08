import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mentores")({
  head: () => ({
    meta: [
      { title: "Mentores — RZ Hub" },
      { name: "description", content: "Encuentra mentores de la comunidad RZ." },
      { property: "og:title", content: "Mentores — RZ Hub" },
      { property: "og:description", content: "Encuentra mentores de la comunidad RZ." },
    ],
  }),
  component: MentoresPage,
});

function MentoresPage() {
  return <h1 className="p-8 text-2xl font-semibold text-rz-ink">Mentores</h1>;
}
