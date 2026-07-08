import { createFileRoute } from "@tanstack/react-router";
import Hub from "@/pages/Hub";

export const Route = createFileRoute("/hub")({
  head: () => ({
    meta: [
      { title: "Hub — RZ Hub" },
      { name: "description", content: "Tu punto de encuentro con la comunidad RZ." },
      { property: "og:title", content: "Hub — RZ Hub" },
      { property: "og:description", content: "Tu punto de encuentro con la comunidad RZ." },
    ],
  }),
  component: Hub,
});
