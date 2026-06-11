import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "hesadora 💕" },
      { name: "description", content: "um cantinho feito com amor pra hesadora" },
      { property: "og:title", content: "hesadora 💕" },
      { property: "og:description", content: "um cantinho feito com amor pra hesadora" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/love.html"
      title="hesadora"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
