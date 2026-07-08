import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni — RZ Hub" },
      { name: "description", content: "Directorio de alumni de la comunidad RZ." },
      { property: "og:title", content: "Alumni — RZ Hub" },
      { property: "og:description", content: "Directorio de alumni de la comunidad RZ." },
    ],
  }),
  component: AlumniPage,
});

function AlumniPage() {
  return <h1 className="p-8 text-2xl font-semibold text-rz-ink">Alumni</h1>;
}
