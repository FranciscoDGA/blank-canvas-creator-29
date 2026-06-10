import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blank")({
  head: () => ({
    meta: [
      { title: "Blank Page" },
      { name: "description", content: "A blank page." },
    ],
  }),
  component: BlankPage,
});

function BlankPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <p className="text-muted-foreground">This page is intentionally blank.</p>
    </div>
  );
}
