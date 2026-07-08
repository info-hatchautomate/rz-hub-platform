import { createFileRoute } from "@tanstack/react-router";
import Mentores from "../pages/Mentores.jsx";

export const Route = createFileRoute("/mentores")({
  head: () => ({
    meta: [
      { title: "Mentores — RZ Hub" },
      { name: "description", content: "Encuentra mentores de la comunidad RZ." },
      { property: "og:title", content: "Mentores — RZ Hub" },
      { property: "og:description", content: "Encuentra mentores de la comunidad RZ." },
    ],
  }),
  component: Mentores,
});

