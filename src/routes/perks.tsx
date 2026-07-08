import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/perks")({
  head: () => ({
    meta: [
      { title: "Perks — RZ Hub" },
      { name: "description", content: "Beneficios exclusivos para la comunidad RZ." },
      { property: "og:title", content: "Perks — RZ Hub" },
      { property: "og:description", content: "Beneficios exclusivos para la comunidad RZ." },
    ],
  }),
  component: PerksPage,
});

function PerksPage() {
  return <h1 className="p-8 text-2xl font-semibold text-rz-ink">Perks</h1>;
}
