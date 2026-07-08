import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/perfil")({
  head: () => ({
    meta: [
      { title: "Perfil — RZ Hub" },
      { name: "description", content: "Tu perfil en la comunidad RZ." },
      { property: "og:title", content: "Perfil — RZ Hub" },
      { property: "og:description", content: "Tu perfil en la comunidad RZ." },
    ],
  }),
  component: PerfilPage,
});

function PerfilPage() {
  return <h1 className="p-8 text-2xl font-semibold text-rz-ink">Perfil</h1>;
}
