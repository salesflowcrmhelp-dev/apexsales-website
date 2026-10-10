import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Growth Plan ₹3,499/seat — Packages & Features — ApexSales" },
      {
        name: "description",
        content:
          "Full details of the ApexSales Growth plan at ₹3,499 per seat: team packages, every feature included, and book a demo in one click.",
      },
      { property: "og:title", content: "Growth Plan ₹3,499/seat — Packages & Features — ApexSales" },
      {
        property: "og:description",
        content:
          "Full details of the ApexSales Growth plan at ₹3,499 per seat: team packages, every feature included, and book a demo in one click.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/packages" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: PackagesPage,
});

const SEAT_RATE = 3499;

const PACKAGES = [
  {
    name: "Chhota team",
    seats: 5,
    tagline: "First CRM, small team",
    highlight: false,
  },
  {
    name: "Growing team",
    seats: 10,
    tagline: "Most teams start here",
    highlight: true,
  },
  {
    name: "Scaling team",
    seats: 20,
    tagline: "Bigger pipeline, full visibility",
    highlight: false,
  },
];

const INCLUDED = [
  {
    title: "Pipeline kanban",
    desc: "Every deal as a card — stages clear at a glance, drag between stages, manager sees the whole team's pipeline in real time.",
  },
  {
    title: "AI next-best-action",
    desc: "For each deal, AI suggests the smartest next step — follow-up call, send a proposal, or nurture — based on stage, idle days and last activity.",
  },
  {
    title: "Forecasting",
    desc: "Stage-wise probabilities plus deal health turn the pipeline into a rupee forecast. By mid-month you know exactly where the quarter is heading.",
  },
  {
    title: "Activity tracking",
    desc: "Every call, meeting, follow-up and note logged against the deal. Nothing slips through the cracks.",
  },
  {
    title: "Field updates in 30 seconds",
    desc: "Reps update stages and notes from their phone — mobile-first, built for people on the road. WhatsApp updates fit right in.",
  },
  {
    title: "Manager dashboard",
    desc: "Rupee value of open pipeline, win rate, average deal cycle — and deals stuck too long get highlighted automatically.",
  },
  {
    title: "Automation & reminders",
    desc: "Follow-up reminders on WhatsApp and email, stage triggers that create tasks on their own, and stale-deal alerts before anything rots.",
  },
  {
    title: "Sales targets & leaderboard",
    desc: "Monthly quotas per rep with live progress from real deals, plus a team leaderboard that keeps everyone honest — no Friday data entry.",
  },
  {
    title: "Easy switch from spreadsheets",
    desc: "Import your spreadsheet and you're live. Same-day setup, no consultants needed.",
  },
  {
    title: "Priority support",
    desc: "Growth teams get priority answers on WhatsApp and email, plus guided onboarding for the whole team.",
  },
];

function inr(n: number) {
  return n.toLocaleString("en-IN");
}

function PackagesPage() {
  return (
    <PageShell>
      <Reveal>
        <section className="py-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-moss ring-1 ring-black/5 backdrop-blur">
            Growth plan
          </span>
          <h1 className="mx-auto mt-5 max-w-[22ch] font-display text-3xl leading-[1.1] text-pretty sm:text-5xl">
            ₹3,499 per seat. Everything unlocked.
          </h1>
          <p className="mx-auto mt-5 max-w-[50ch] text-base text-moss sm:text-lg">
            One plan, every feature — no locked modules, no surprise add-ons. Pick the package that
            matches your team size. GST extra; annual billing saves 20%.
          </p>
        </section>
      </Reveal>

      <section className="grid gap-4 sm:grid-cols-3">
        {PACKAGES.map((p, i) => {
          const total = p.seats * SEAT_RATE;
          return (
            <Reveal key={p.name} delay={i * 100} className="hover-lift">
              <div

              className={`rounded-[min(1.2vw,18px)] p-6 backdrop-blur-xl ${
                p.highlight
                ? "relative bg-white/70 ring-1 ring-vivid/40"
                : "bg-white/55 ring-1 ring-black/5"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-6 rounded-full bg-vivid px-3 py-0.5 text-xs font-semibold text-forest">
                  Most popular
                </span>
              )}
              <p className="font-display text-lg">{p.name}</p>
              <p className="mt-1 text-xs text-moss">{p.tagline}</p>
              <p className="mt-4 font-display text-3xl leading-none">
                ₹{inr(total)}
                <span className="text-base text-moss">/mo</span>
              </p>
              <p className="mt-1 text-sm text-moss">
                {p.seats} seats × ₹3,499 · GST extra
              </p>
              <ul className="mt-4 space-y-2 text-sm text-moss">
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-vivid" />
                  Every Growth feature, full team access
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-vivid" />
                  Unlimited deals & pipeline history
                </li>
                <li className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-vivid" />
                  Free 14-day trial, no card needed
                </li>
              </ul>
              <a
                href="/#demo"
                className={`mt-5 inline-flex w-full justify-center rounded-full px-4 py-2 text-sm ring-1 ${
                  p.highlight
                  ? "bg-vivid font-semibold text-forest ring-vivid"
                  : "bg-white/80 font-medium text-forest ring-black/5"
                }`}
              >
              Request a demo
              </a>
              </div>
            </Reveal>
          );
        })}
      </section>

      <Reveal>
        <section className="rounded-[min(1.2vw,18px)] bg-white/55 p-8 ring-1 ring-black/5 backdrop-blur-lg sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-moss">
            What's included
          </p>
          <h2 className="mt-2 font-display text-2xl text-pretty sm:text-3xl">
            Every feature of the ₹3,499 plan
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {INCLUDED.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <div className="h-full rounded-[min(1.2vw,18px)] bg-white/70 p-5 ring-1 ring-black/5 transition-colors hover:bg-white">
                  <h3 className="font-display text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm text-moss">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-moss">
            Bigger org with SSO, audit logs or custom AI? That's the{" "}
            <Link to="/pricing" className="font-semibold text-forest underline decoration-vivid underline-offset-2">
              Scale plan
            </Link>
            — custom pricing, talk to us.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-[min(1.2vw,18px)] bg-forest p-10 text-center text-white shadow-2xl">
          <h2 className="font-display text-2xl text-pretty sm:text-3xl">
            See it before you decide — 15 minute demo
          </h2>
          <p className="mx-auto mt-3 max-w-[48ch] text-sm text-white/80 sm:text-base">
            A live walkthrough tailored to your team size and pipeline. Free to start, no credit card
            required.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/#demo"
              className="inline-flex items-center rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-forest transition hover:brightness-105"
            >
              Request a demo
            </a>
            <Link
              to="/pricing"
              className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/15"
            >
              Compare all plans
            </Link>
          </div>
        </section>
      </Reveal>
    </PageShell>
  );
}
