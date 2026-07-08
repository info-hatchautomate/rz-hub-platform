import { createFileRoute } from "@tanstack/react-router";
import Recursos from "@/pages/Recursos";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos — RZ Hub" },
      { name: "description", content: "Biblioteca de recursos de la comunidad RZ." },
      { property: "og:title", content: "Recursos — RZ Hub" },
      { property: "og:description", content: "Biblioteca de recursos de la comunidad RZ." },
    ],
  }),
  component: Recursos,
});
