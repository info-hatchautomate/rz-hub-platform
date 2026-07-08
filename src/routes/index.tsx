import { createFileRoute } from "@tanstack/react-router";
import Landing from "@/pages/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RZ Hub — Plataforma del Ecosistema Emprendedor de Zapopan" },
      {
        name: "description",
        content:
          "RZ Hub conecta a alumni, mentores, aliados y recursos del ecosistema Reto Zapopan.",
      },
      { property: "og:title", content: "RZ Hub — Ecosistema Emprendedor de Zapopan" },
      {
        property: "og:description",
        content: "Únete a la red exclusiva de startups del programa Reto Zapopan.",
      },
    ],
  }),
  component: Landing,
});
