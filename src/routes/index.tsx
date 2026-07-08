import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return <h1 className="p-8 text-2xl font-semibold text-rz-ink">Landing</h1>;
}
