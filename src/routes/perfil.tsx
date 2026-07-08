import { createFileRoute } from "@tanstack/react-router";
import Perfil from "@/pages/Perfil";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Perfil — RZ Hub" },
      { name: "description", content: "Tu perfil en la comunidad RZ." },
      { property: "og:title", content: "Perfil — RZ Hub" },
      { property: "og:description", content: "Tu perfil en la comunidad RZ." },
    ],
  }),
  component: Perfil,
});
