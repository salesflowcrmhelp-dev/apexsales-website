import { Link, createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { PageShell } from "@/components/site";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "Why ApexSales — ApexSales" },
      {
        name: "description",
        content:
          "See how ApexSales compares to managing sales in spreadsheets or heavyweight traditional CRMs — simple for reps, powerful for managers.",
      },
      { property: "og:title", content: "Why ApexSales — ApexSales" },
      {
        property: "og:description",
        content:
          "ApexSales vs spreadsheets and traditional CRMs — simple for reps, powerful for managers, built for Indian sales teams.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/compare" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/compare" }],
  }),
  component: ComparePage,
});

const ROWS: {
  feature: string;
  sheets: string;
  legacy: string;
  apex: string;
}[] = [
  {
    feature: "Setup time",
    sheets: "Ready, but breaks as you grow",
    legacy: "Weeks of configuration, consultants needed",
    apex: "Live in under a day — pre-built for sales teams",
  },
  {
    feature: "Keeping data updated",
    sheets: "Everyone forgets, data goes stale in days",
    legacy: "Reps resist — too many fields to fill",
    apex: "Pipeline updates in seconds, AI writes the notes",
  },
  {
    feature: "Pipeline visibility for managers",
    sheets: "You filter, chase and pray before reviews",
    legacy: "Dashboards exist but need an admin to build",
    apex: "Live pipeline and forecast on day one",
  },
  {
    feature: "Forecast accuracy",
    sheets: "Best guess in a column called 'confidence'",
    legacy: "Weighted pipeline, but nobody trusts the weights",
    apex: "AI forecast that learns from your actual win rates",
  },
  {
    feature: "Next-best actions",
    sheets: "Your gut feeling at 9 PM",
    legacy: "Reports tell you what happened, not what to do",
    apex: "Ranked AI actions for every deal, every week",
  },
  {
    feature: "Mobile updates from the field",
    sheets: "Editing a shared sheet on a phone — risky",
    legacy: "App exists, but nobody enjoys using it",
    apex: "Two taps to log a call, note or stage change",
  },
  {
    feature: "Price for a 10-person team",
    sheets: "Free, until one mistake costs a deal",
    legacy: "Expensive seats plus annual commitments",
    apex: "Free to start, ₹3,499/seat as you grow",
  },
];

const SWITCH_REASONS = [
  {
    title: "Reps actually use it",
    copy: "Most CRMs fail because reps stop updating them. ApexSales asks for 30 seconds of input and does the heavy lifting — summaries, notes, next steps — with AI.",
  },
  {
    title: "Managers see everything",
    copy: "No more asking 'what's the status of that deal?' on WhatsApp. Every stage change, note and forecast is live for the whole team the moment it happens.",
  },
  {
    title: "Built for India",
    copy: "Rupee amounts, GST-ready invoicing thinking, WhatsApp-first communication patterns and IST-friendly support — not a translated Western tool.",
  },
];

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className="mt-1 size-4 shrink-0 text-forest"
    >
      <path d="M4 10.5l4 4 8-9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      className="mt-1 size-4 shrink-0 text-forest/35"
    >
      <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
    </svg>
  );
}

function ComparePage() {
  return (
    <PageShell>
      <section className="pt-14 pb-10 text-center">
        <Reveal>
          <span className="eyebrow">Why ApexSales</span>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
            The honest comparison for{" "}
            <span className="text-forest/55">growing sales teams</span>
          </h1>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-moss sm:text-lg">
            If your pipeline lives in spreadsheets or a heavyweight CRM nobody
            updates, here is exactly where ApexSales differs — no marketing
            fluff.
          </p>
        </Reveal>
      </section>

      <section className="pb-6">
        <Reveal>
          <div className="card-solid overflow-x-auto p-2 sm:p-4">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr>
                  <th className="w-[26%] px-4 py-4 font-display text-base font-extrabold">
                    What matters
                  </th>
                  <th className="w-[24%] px-4 py-4 text-moss">
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      Spreadsheets
                    </span>
                  </th>
                  <th className="w-[24%] px-4 py-4 text-moss">
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      Traditional CRMs
                    </span>
                  </th>
                  <th className="w-[26%] rounded-t-xl bg-forest/5 px-4 py-4">
                    <span className="text-xs font-semibold tracking-wide text-forest uppercase">
                      ApexSales
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.feature} className="border-t border-black/5">
                    <td className="px-4 py-4 font-semibold">{r.feature}</td>
                    <td className="px-4 py-4 text-moss">
                      <div className="flex gap-2">
                        <Cross />
                        <span>{r.sheets}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-moss">
                      <div className="flex gap-2">
                        <Cross />
                        <span>{r.legacy}</span>
                      </div>
                    </td>
                    <td className="rounded-b-xl bg-forest/5 px-4 py-4">
                      <div className="flex gap-2 font-medium">
                        <Check />
                        <span>{r.apex}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="py-16">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Why teams switch</span>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Three reasons teams move across
            </h2>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {SWITCH_REASONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="card-solid hover-lift h-full p-7">
                <span className="grid size-9 place-items-center rounded-lg bg-forest font-display text-sm font-extrabold text-paper">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-extrabold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-moss">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <Reveal>
          <div className="rounded-3xl bg-forest p-10 text-center shadow-2xl shadow-forest/30 sm:p-14">
            <h2 className="font-display text-3xl font-extrabold text-paper sm:text-4xl">
              See it next to your own pipeline
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-paper/80">
              Book a 20-minute demo and we'll map your current spreadsheet or
              CRM onto ApexSales live — you judge the difference.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/"
                hash="demo"
                className="btn-shine inline-flex items-center rounded-full bg-vivid px-7 py-3 text-sm font-semibold text-forest shadow-lg shadow-vivid/30 transition-transform hover:scale-[1.03]"
              >
                Book a demo
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center rounded-full bg-paper/10 px-7 py-3 text-sm font-semibold text-paper ring-1 ring-paper/25 transition-colors hover:bg-paper/15"
              >
                See pricing
              </Link>
            </div>
            <p className="mt-5 text-xs text-paper/60">
              Free to start · No credit card required
            </p>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
