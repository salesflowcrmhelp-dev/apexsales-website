import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/guides")({
  head: () => ({
    meta: [
      { title: "Sales Guides & Resources — ApexSales" },
      {
        name: "description",
        content:
          "Practical guides for Indian sales teams: moving off spreadsheets, weekly pipeline reviews, honest forecasting, and field follow-ups that never slip.",
      },
      { property: "og:title", content: "Sales Guides & Resources — ApexSales" },
      {
        property: "og:description",
        content: "Free playbooks for sales managers — pipeline hygiene, forecasting and follow-up discipline.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/guides" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/guides" }],
  }),
  component: Guides,
});

const GUIDES = [
  {
    id: "leave-spreadsheets",
    tag: "Getting started",
    title: "Moving your sales pipeline out of spreadsheets",
    mins: "6 min read",
    intro:
      "Most sales teams in India start in Excel or Google Sheets. It works — until it doesn't. Here's a practical, low-pain path to move your pipeline into a real CRM without losing a week of selling time.",
    sections: [
      {
        h: "Why spreadsheets break first",
        p: [
          "Spreadsheets are great for a founder selling alone. The moment you have 3+ reps, three problems appear: nobody knows which version is current, deals go stale because updating feels like extra work, and forecasting turns into a guessing game every month-end.",
          "The hidden cost isn't the sheet itself — it's the follow-ups that slip because nothing reminds a rep when a deal has been quiet for 10 days.",
        ],
      },
      {
        h: "The 7-day migration plan",
        bullets: [
          "Day 1–2: Export your current sheet. Keep only active deals — archive closed or dead ones, don't carry clutter.",
          "Day 3: Define your stages in plain language your reps already use (e.g. New lead → Contacted → Demo → Negotiation → Won/Lost).",
          "Day 4: Import deals, assign owners, set deal values in ₹. Sanity-check the total against your sheet.",
          "Day 5–6: Reps update their own deals. Run your first pipeline review from the CRM, not the sheet.",
          "Day 7: Freeze the spreadsheet — read-only. If it's still being edited, something in the CRM isn't working; fix that instead of maintaining both.",
        ],
      },
      {
        h: "What to do in the first month",
        p: [
          "Resist importing every field from your old sheet. A CRM works when it's lighter than the spreadsheet, not heavier. Keep: company, contact, value, stage, next step, next step date. Everything else can wait.",
          "Set one rule from day one: every deal must have a next step and a date. That single habit is what turns a CRM from a record-keeping tool into a selling tool.",
        ],
      },
    ],
  },
  {
    id: "weekly-review",
    tag: "Management",
    title: "A sales manager's weekly pipeline review that actually takes 30 minutes",
    mins: "5 min read",
    intro:
      "Pipeline reviews die of two causes: they take too long, and reps spend the meeting preparing a story instead of selling. Here's the ritual we've seen work for small Indian sales teams.",
    sections: [
      {
        h: "The 5 questions, per rep",
        bullets: [
          "Which deals moved forward this week — and what evidence do we have (a meeting, a signed PO request, not just a feeling)?",
          "Which deals went quiet for 10+ days? Every one of these needs a next action today.",
          "What's closing this month vs what's slipping? Be honest about slippage — it's data, not failure.",
          "Where is the top of the funnel thin? If no new leads entered this week, next month's close rate suffers.",
          "What's the one blocker I (the manager) should unblock for you this week?",
        ],
      },
      {
        h: "Why this beats a full-day review",
        p: [
          "A good CRM shows this on one screen: stage-wise value, deals with no activity, and forecast vs target. If your review requires reps to prepare anything, it's already failing — the data should already be there.",
          "Keep it to 30 minutes per team, same day every week. The rhythm matters more than the format.",
        ],
      },
    ],
  },
  {
    id: "forecasting",
    tag: "Forecasting",
    title: "Forecasting basics: from gut feel to numbers you can defend",
    mins: "7 min read",
    intro:
      "Ask most founders for this month's forecast and you'll get a number that's either wishful or padded. Here's how to build a forecast your investors — and you — can actually trust.",
    sections: [
      {
        h: "Weight your pipeline by stage, not by mood",
        p: [
          "Every stage has a rough close probability based on your own history. A deal in negotiation is not the same as a deal where the demo went well. Start simple: New lead 10%, Contacted 20%, Demo done 40%, Negotiation 70%, verbal yes 90%.",
          "Multiply each open deal value by its stage probability. That weighted number is your baseline forecast. It will be wrong at first — that's fine. Track how wrong, and adjust the percentages over time.",
        ],
      },
      {
        h: "Watch the gap, not just the total",
        p: [
          "Compare weighted forecast against your target. If there's a ₹40L gap mid-month, you need to know now — not on the 28th. The question becomes concrete: which deals could realistically pull that gap forward?",
          "Also watch velocity: how long deals spend in each stage. If negotiation suddenly takes twice as long as it used to, something changed in your market or your pricing — before your numbers show it.",
        ],
      },
      {
        h: "One number to rule them all",
        p: [
          "If you report one number upward, report committed forecast: deals that have a dated next step, an identified decision-maker, and no red flags. Everything else is upside, not plan.",
        ],
      },
    ],
  },
  {
    id: "field-followups",
    tag: "Field sales",
    title: "Field sales follow-ups that never slip",
    mins: "5 min read",
    intro:
      "In India, a lot of selling happens on WhatsApp and in person. The deal knowledge ends up in the rep's phone, not the CRM. Here's how to close that gap without forcing reps to do double data entry.",
    sections: [
      {
        h: "The two-minute rule after every meeting",
        bullets: [
          "Immediately after leaving the meeting, the rep logs one line: who, what was discussed, next step, date.",
          "Voice notes are fine — the point is capture within 5 minutes, before the next meeting wipes the context.",
          "Managers: never ask 'why didn't you update the CRM?' — ask 'what's the next step on this deal?' If the next step isn't in the system, the update is the missing piece, and it will fix itself.",
        ],
      },
      {
        h: "Make WhatsApp an input, not a dead end",
        p: [
          "Deals genuinely move on WhatsApp in India. Fighting it loses you the data; embracing it means every important WhatsApp commitment — 'sending the proposal by Friday' — should end up as a dated next step in the CRM.",
          "When the CRM reminds you before that Friday, and the rep closes the loop, you've turned chat conversations into pipeline discipline.",
        ],
      },
      {
        h: "Measure follow-up latency, not activity count",
        p: [
          "Don't count calls made. Measure the time between a lead arriving and the first contact, and between a meeting and the follow-up. Those two numbers predict revenue better than any activity dashboard.",
        ],
      },
    ],
  },
];

function Guides() {
  return (
    <PageShell>
      <div className="space-y-14 py-12">
      {/* Header */}
      <Reveal>
        <section className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Free resources</span>
          <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
            Guides for Indian sales teams
          </h1>
          <p className="mt-4 text-base leading-relaxed text-moss">
            Short, practical playbooks — no fluff, no 50-page ebooks. Written for managers and reps
            who are moving off spreadsheets and want a pipeline they can actually trust.
          </p>
        </section>
      </Reveal>

      {/* Index cards */}
      <section className="grid gap-5 sm:grid-cols-2">
        {GUIDES.map((g, i) => (
          <Reveal key={g.id} delay={i * 90} className="hover-lift">
            <a
              href={`#${g.id}`}
              className="card-solid group block h-full rounded-[18px] p-6 transition-shadow hover:shadow-lg"
            >
              <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">
                {g.tag}
              </span>
              <h2 className="mt-3 font-display text-xl leading-snug group-hover:underline">{g.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-moss">{g.intro}</p>
              <p className="mt-3 text-xs font-semibold tracking-wide text-moss uppercase">
                {g.mins} ↓
              </p>
            </a>
          </Reveal>
        ))}
      </section>

      {/* Full articles */}
      {GUIDES.map((g, i) => (
        <Reveal key={g.id} delay={i * 60}>
          <article id={g.id} className="card-solid scroll-mt-24 rounded-[22px] p-7 sm:p-10">
            <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">
              {g.tag} · {g.mins}
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight">{g.title}</h2>
            <p className="mt-3 text-base leading-relaxed text-moss">{g.intro}</p>
            {g.sections.map((s) => (
              <div key={s.h} className="mt-8">
                <h3 className="font-display text-xl">{s.h}</h3>
                {"bullets" in s && s.bullets ? (
                  <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-forest/90">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-vivid" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-forest/90">
                    {s.p.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </article>
        </Reveal>
      ))}

      {/* CTA */}
      <Reveal>
        <section className="rounded-[22px] bg-forest p-10 text-center shadow-2xl">
          <h2 className="font-display text-3xl text-paper">Put the guides into practice</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-paper/80">
            ApexSales gives your team the pipeline visibility, follow-up reminders and honest
            forecasting these guides describe — free to start.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              hash="demo"
              className="btn-shine rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-forest"
            >
              Book a demo
            </Link>
            <Link
              to="/pricing"
              className="rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-paper ring-1 ring-white/20 transition-colors hover:bg-white/20"
            >
              See pricing
            </Link>
          </div>
          <p className="mt-4 text-xs text-paper/60">Free to start · No credit card required</p>
        </section>
      </Reveal>
      </div>
    </PageShell>
  );
}
