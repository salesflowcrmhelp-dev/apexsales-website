import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";

export const Route = createFileRoute("/assistant")({
  head: () => ({
    meta: [
      { title: "Next Best Actions — ApexSales" },
      {
        name: "description",
        content: "Share deal notes and pipeline updates; ApexSales AI ranks your next best actions by priority.",
      },
      { property: "og:title", content: "Next Best Actions — ApexSales" },
      {
        property: "og:description",
        content: "AI-prioritised next steps for sales managers, from your own deal notes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/assistant" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/assistant" }],
  }),
  component: Assistant,
});

type Action = { priority: string; title: string; lines: string[] };

function parse(text: string): Action[] {
  const out: Action[] = [];
  for (const raw of text.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const m = line.match(/^\[(HIGH|MEDIUM|LOW)\]\s*(.*)$/i);
    if (m) out.push({ priority: (m[1] ?? "LOW").toUpperCase(), title: m[2] ?? "", lines: [] });
    else out[out.length - 1]?.lines.push(line);
  }
  return out;
}

const BADGE: Record<string, string> = {
  HIGH: "bg-vivid text-forest",
  MEDIUM: "bg-mist text-forest",
  LOW: "bg-white/80 text-moss ring-1 ring-black/5",
};

function Assistant() {
  const [notes, setNotes] = useState("");
  const [pipeline, setPipeline] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const abortRef = useRef<AbortController | null>(null);

  async function run() {
    setError("");
    setText("");
    setLoading(true);
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    try {
      const res = await fetch("/api/next-actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes, pipeline }),
        signal: ctrl.signal,
      });
      if (!res.ok || !res.body) {
        const j = await res.json().catch(() => ({}));
        throw new Error(
          res.status === 429
            ? "Too many requests — please wait a moment."
            : res.status === 402
              ? "AI credits are used up. Add credits in workspace settings."
              : j.error || "Something went wrong.",
        );
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setText((t) => t + dec.decode(value, { stream: true }));
      }
    } catch (e) {
      if ((e as Error).name !== "AbortError") setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  const actions = parse(text);

  return (
    <div className="min-h-screen bg-paper font-body text-forest">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-8 place-items-center rounded-lg bg-forest font-display text-lg text-paper">A</span>
          <span className="font-display text-xl">ApexSales</span>
        </Link>
        <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-moss ring-1 ring-black/5">
          Next best actions
        </span>
      </header>
      <main className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 lg:grid-cols-2">
        <section className="rounded-[18px] bg-white/55 p-6 ring-1 ring-black/5 backdrop-blur-xl">
          <h1 className="font-display text-3xl">What's happening in your deals?</h1>
          <p className="mt-2 text-sm text-moss">Paste notes and updates — AI ranks what to do next.</p>
          <label className="mt-5 block text-sm font-semibold">Deal notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={7}
            placeholder="Meridian: CFO asked for revised pricing, legal review pending..."
            className="mt-2 w-full rounded-xl bg-paper/80 p-3 text-sm ring-1 ring-black/5 outline-none focus:ring-vivid"
          />
          <label className="mt-4 block text-sm font-semibold">Pipeline updates</label>
          <textarea
            value={pipeline}
            onChange={(e) => setPipeline(e.target.value)}
            rows={5}
            placeholder="Northwind moved to Negotiation ($120k). Q3 gap: $300k..."
            className="mt-2 w-full rounded-xl bg-paper/80 p-3 text-sm ring-1 ring-black/5 outline-none focus:ring-vivid"
          />
          <div className="mt-5 flex gap-3">
            <button
              onClick={run}
              disabled={loading || !notes.trim()}
              className="rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-forest disabled:opacity-50"
            >
              {loading ? "Thinking..." : "Suggest next actions"}
            </button>
            {loading && (
              <button
                onClick={() => abortRef.current?.abort()}
                className="rounded-full bg-white/80 px-5 py-3 text-sm ring-1 ring-black/5"
              >
                Stop
              </button>
            )}
          </div>
          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
        </section>

        <section className="space-y-3">
          {!text && !loading && (
            <div className="rounded-[18px] bg-white/40 p-8 text-center text-sm text-moss ring-1 ring-black/5">
              Your prioritised actions will appear here.
            </div>
          )}
          {loading && !actions.length && (
            <div className="animate-pulse rounded-[18px] bg-white/55 p-6 text-sm text-moss ring-1 ring-black/5">
              Reviewing your deals...
            </div>
          )}
          {actions.map((a, i) => (
            <div key={i} className="rounded-[18px] bg-white/65 p-5 ring-1 ring-black/5 backdrop-blur-lg">
              <div className="flex items-start gap-3">
                <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${BADGE[a.priority]}`}>
                  {a.priority}
                </span>
                <p className="font-display text-lg leading-snug">{a.title}</p>
              </div>
              <div className="mt-2 space-y-1 text-sm text-moss">
                {a.lines.map((l, j) => (
                  <p key={j}>{l}</p>
                ))}
              </div>
            </div>
          ))}
          {!loading && text && !actions.length && (
            <pre className="whitespace-pre-wrap rounded-[18px] bg-white/65 p-5 text-sm ring-1 ring-black/5">{text}</pre>
          )}
        </section>
      </main>
    </div>
  );
}
