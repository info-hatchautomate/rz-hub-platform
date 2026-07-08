import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/hub")({
  head: () => ({
    meta: [
      { title: "Hub — RZ Hub" },
      { name: "description", content: "Tu punto de encuentro con la comunidad RZ." },
      { property: "og:title", content: "Hub — RZ Hub" },
      { property: "og:description", content: "Tu punto de encuentro con la comunidad RZ." },
    ],
  }),
  component: HubPage,
});

function HubPage() {
  return <h1 className="p-8 text-2xl font-semibold text-rz-ink">Hub</h1>;
}
