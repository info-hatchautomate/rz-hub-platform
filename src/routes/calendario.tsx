import { createFileRoute } from "@tanstack/react-router";
import Calendario from "@/pages/Calendario";

export const Route = createFileRoute("/calendario")({
  head: () => ({
    meta: [
      { title: "Calendario — RZ Hub" },
      { name: "description", content: "Eventos y calendario de la comunidad RZ." },
      { property: "og:title", content: "Calendario — RZ Hub" },
      { property: "og:description", content: "Eventos y calendario de la comunidad RZ." },
    ],
  }),
  component: Calendario,
});
