import { createFileRoute } from "@tanstack/react-router";
import Alumni from "../pages/Alumni.jsx";

export const Route = createFileRoute("/alumni")({
  head: () => ({
    meta: [
      { title: "Alumni — RZ Hub" },
      { name: "description", content: "Directorio de alumni de la comunidad RZ." },
      { property: "og:title", content: "Alumni — RZ Hub" },
      { property: "og:description", content: "Directorio de alumni de la comunidad RZ." },
    ],
  }),
  component: Alumni,
});

