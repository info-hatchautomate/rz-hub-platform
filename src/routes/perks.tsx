import { createFileRoute } from "@tanstack/react-router";
import Perks from "@/pages/Perks";

export const Route = createFileRoute("/perks")({
  head: () => ({
    meta: [
      { title: "Perks — RZ Hub" },
      { name: "description", content: "Beneficios exclusivos para la comunidad RZ." },
      { property: "og:title", content: "Perks — RZ Hub" },
      { property: "og:description", content: "Beneficios exclusivos para la comunidad RZ." },
    ],
  }),
  component: Perks,
});
