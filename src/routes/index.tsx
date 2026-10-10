import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type CSSProperties } from "react";
import { Bookmark, Medal, TrendingUp, Target, Clock, Gift, Pencil } from "lucide-react";
import { PageShell } from "@/components/site";
import { Reveal, CountUp } from "@/components/reveal";
import { ProductTour } from "@/components/product-tour";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ApexSales — Revenue Intelligence CRM",
      },
      {
        name: "description",
        content:
          "ApexSales turns scattered pipeline data into confident forecasts your whole team can act on. Pipeline, AI insights, forecasting and activity tracking in one calm green workspace.",
      },
      { property: "og:title", content: "ApexSales — Revenue Intelligence CRM" },
      {
        property: "og:description",
        content:
          "Close more deals with a clearer line of sight. ApexSales is the revenue intelligence CRM for modern sales teams.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Hero() {
  return (
    <section className="pb-6 pt-14 text-center sm:pt-20">
      <div className="card-float mx-auto max-w-3xl">
        <span className="eyebrow">
          <span className="size-1.5 rounded-full bg-vivid" />
          Revenue intelligence CRM
        </span>
        <h1 className="mt-6 font-display text-4xl leading-[1.08] text-pretty sm:text-5xl lg:text-6xl">
          Close more deals with a clearer line of sight.
        </h1>
        <p className="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-moss sm:text-lg">
          ApexSales turns scattered pipeline data into confident forecasts your whole team can act on. Built for Indian sales teams — pricing in rupees, support in your timezone.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://apex.salesflowhub.cloud"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-vivid px-7 py-3.5 text-sm font-semibold text-forest shadow-lg shadow-vivid/30 transition-transform hover:scale-[1.03]"
          >
            Launch CRM Workspace &rarr;
          </a>
          <Link
            to="/"
            hash="demo"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-forest shadow-sm ring-1 ring-black/10 transition-colors hover:bg-mist/60"
          >
            Book a demo
          </Link>
        </div>
        <p className="mt-5 text-xs font-medium text-moss">
          No card required · Set up in minutes · Cancel anytime
        </p>
      </div>
    </section>
  );
}


const FEATURES = [
  {
    letter: "P",
    title: "Pipeline",
    copy: "Every deal, stage, and owner in one living board.",
  },
  {
    letter: "A",
    title: "AI insights",
    copy: "Signals that flag at-risk and high-potential deals early.",
  },
  {
    letter: "F",
    title: "Forecasting",
    copy: "Probabilistic numbers your finance team will actually trust.",
  },
  {
    letter: "T",
    title: "Activity tracking",
    copy: "Emails, calls, and notes captured automatically.",
  },
];

function Features() {
  return (
    <section id="features" className="py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="eyebrow">Platform</span>
        <h2 className="mt-4 font-display text-3xl text-pretty sm:text-4xl">
          Everything you need to forecast with confidence
        </h2>
        <p className="mt-3 text-sm text-moss sm:text-base">
          Four modules that work together — no more juggling spreadsheets and gut feel.{" "}
          <Link to="/product" className="font-semibold text-forest underline-offset-4 hover:underline">
            Explore product →
          </Link>
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 90} className="h-full">
            <div className="hover-lift card-solid h-full p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-vivid/15 font-display text-lg text-forest">
                {feature.letter}
              </span>
              <h3 className="mt-4 font-display text-xl">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-moss">{feature.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FounderNote() {
  return (
    <section className="py-16">
      <Reveal>
        <div className="card-solid-lg p-6 sm:p-10">
          <div className="max-w-2xl">
            <span className="eyebrow">From the founder</span>
            <h2 className="mt-4 font-display text-3xl text-pretty sm:text-4xl">
              Why we built ApexSales
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-moss sm:text-base">
              <p>
                I spent years watching Indian sales teams run crore-rupee pipelines on spreadsheets
                and WhatsApp threads. The data was always there — scattered across inboxes, note
                apps and memory. Forecasts were guesswork, and follow-ups slipped through cracks.
              </p>
              <p>
                ApexSales is the tool I wished existed: a CRM that speaks rupees, understands how
                Indian teams actually sell, and tells you what to do next — not just what happened.
                We're early, we're small, and we're building in the open. If you try it, you'll
                talk directly to the people making it.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-forest font-display text-lg text-paper">
                H
              </span>
              <div>
                <p className="text-sm font-semibold text-forest">Harsh</p>
                <p className="text-xs text-moss">Founder, ApexSales</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ProgressRing({ pct, animate }: { pct: number; animate?: boolean }) {
  const r = 14;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct / 100);
  return (
    <span className="relative grid size-8 shrink-0 place-items-center">
      <svg viewBox="0 0 36 36" className="size-8 -rotate-90">
        <circle cx="18" cy="18" r={r} fill="none" strokeWidth="4" className="stroke-mist" />
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ "--ring-target": offset } as CSSProperties}
          className={`stroke-vivid ${animate ? "ring-draw" : ""}`}
        />
      </svg>
      <span className="absolute text-[9px] font-bold text-forest">{pct}%</span>
    </span>
  );
}

const KPI_CARDS: {
  icon: typeof Bookmark;
  iconBg: string;
  iconColor: string;
  label: string;
  value: string;
  sub: string;
  brief: string;
  editable?: boolean;
  ring?: number;
  pill?: string;
  cu: { value: number; prefix?: string; suffix?: string; decimals?: number };
}[] = [
  {
    icon: Bookmark,
    iconBg: "bg-amber/15",
    iconColor: "text-amber",
    label: "Total Pipeline Value",
    value: "₹1,16,000",
    sub: "Active Open Pipeline",
    brief: "Every open deal added into one number, so you always know how much business is still in play.",
    cu: { value: 116000, prefix: "₹" },
  },
  {
    icon: Medal,
    iconBg: "bg-sky/15",
    iconColor: "text-sky",
    label: "Closed Won Revenue",
    value: "₹1,19,000",
    sub: "₹1,19,000 Won",
    brief: "Revenue locked in from deals your team closed and won, updating the moment a deal is marked won.",
    cu: { value: 119000, prefix: "₹" },
  },
  {
    icon: TrendingUp,
    iconBg: "bg-vivid/15",
    iconColor: "text-forest",
    label: "Pipeline Win Rate",
    value: "26.7%",
    sub: "Won conversion rate",
    brief: "How efficiently your team converts deals into wins — a simple signal to spot where the process can improve.",
    cu: { value: 26.7, suffix: "%", decimals: 1 },
  },
  {
    icon: Target,
    iconBg: "bg-violet/15",
    iconColor: "text-violet",
    label: "Sales Target",
    value: "₹1,20,000",
    sub: "Goal Progress: 99%",
    brief: "Your monthly goal with a live progress ring that fills up as deals close — no weekly report needed.",
    editable: true,
    ring: 99,
    cu: { value: 120000, prefix: "₹" },
  },
  {
    icon: Clock,
    iconBg: "bg-sky/15",
    iconColor: "text-sky",
    label: "Daily Target",
    value: "₹4,000",
    sub: "For remaining 3 days",
    brief: "The remaining goal broken into a clear daily number, so every rep knows the pace for the days left.",
    ring: 99,
    cu: { value: 4000, prefix: "₹" },
  },
  {
    icon: Gift,
    iconBg: "bg-rose/15",
    iconColor: "text-rose",
    label: "My Incentive",
    value: "₹3,570",
    sub: "Goal: 100%",
    brief: "Your earned incentive and tier, updating alongside performance so motivation stays tied to results.",
    editable: true,
    pill: "3% Tier Earned",
    cu: { value: 3570, prefix: "₹" },
  },
];

function DashboardPreview() {
  return (
    <section className="pb-16 pt-4">
      <Reveal className="mx-auto mb-7 max-w-2xl text-center">
        <span className="eyebrow">Real product</span>
        <h2 className="mt-3 font-display text-2xl text-pretty sm:text-3xl">Your numbers, at a glance</h2>
        <p className="mt-2 text-xs text-moss sm:text-sm">
          A closer look at ApexSales — pipeline value, win rate, targets and your incentive.
        </p>
      </Reveal>

      <DashboardCards />

      <Reveal className="mx-auto mt-8 flex max-w-5xl items-center gap-4 text-[10px] font-bold uppercase text-moss">
        <span className="h-px flex-1 bg-forest/10" />
        CRM insights
        <span className="h-px flex-1 bg-forest/10" />
      </Reveal>
    </section>
  );
}

function DashboardCards() {
  return <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {KPI_CARDS.map((card, i) => (
          <Reveal key={card.label} delay={i * 70}>
            <article className="hover-lift kpi-shine group flex h-full flex-col rounded-2xl border border-forest/8 bg-card p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className={`kpi-icon grid size-9 shrink-0 place-items-center rounded-xl ${card.iconBg}`}>
                  <card.icon className={`size-4.5 ${card.iconColor}`} />
                </span>
                {card.ring ? (
                  <ProgressRing pct={card.ring} animate />
                ) : card.pill ? (
                  <span className="pill-pop rounded-full bg-vivid/20 px-2.5 py-1 text-[10px] font-semibold text-forest">
                    {card.pill}
                  </span>
                ) : null}
              </div>
              <p
                className="anim-fade mt-4 text-xs font-semibold text-moss sm:text-sm"
                style={{ "--anim-delay": `${0.15 + i * 0.06}s` } as CSSProperties}
              >
                {card.label}
              </p>
              <p
                className="anim-fade mt-1 font-display text-2xl font-semibold text-forest sm:text-3xl"
                style={{ "--anim-delay": `${0.25 + i * 0.06}s` } as CSSProperties}
              >
                <CountUp
                  value={card.cu.value}
                  prefix={card.cu.prefix}
                  suffix={card.cu.suffix}
                  decimals={card.cu.decimals}
                />
              </p>
              <p
                className="anim-fade mt-2.5 text-[11px] leading-relaxed text-moss/85 sm:text-xs"
                style={{ "--anim-delay": `${0.35 + i * 0.06}s` } as CSSProperties}
              >
                {card.brief}
              </p>
              <div
                className="anim-fade mt-auto flex items-center justify-between gap-2 pt-3"
                style={{ "--anim-delay": `${0.45 + i * 0.06}s` } as CSSProperties}
              >
                <p className="text-[11px] font-medium text-moss sm:text-xs">{card.sub}</p>
                {card.editable && (
                  <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-semibold text-amber">
                    <Pencil className="size-3" />{"\n"}
                  </span>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>;
}

const STEPS = [
  {
    n: "01",
    title: "Connect your data",
    copy: "Sync email, calendar, and your existing CRM in minutes. 90 days of history backfilled automatically.",
  },
  {
    n: "02",
    title: "AI learns your motion",
    copy: "The model learns your sales cycle — stage durations, win signals, and the patterns behind closed-won deals.",
  },
  {
    n: "03",
    title: "Act on priorities",
    copy: "Every morning, get a ranked list of what to do next — which deals to push, rescue, or let go.",
  },
];

function HowItWorks() {
  return (
    <section className="py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="eyebrow">How it works</span>
        <h2 className="mt-4 font-display text-3xl text-pretty sm:text-4xl">Live in a week, not a quarter</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 120} className="h-full">
            <div className="hover-lift card-solid h-full p-7">
              <p className="font-display text-4xl text-vivid">{s.n}</p>
              <h3 className="mt-4 font-display text-lg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-moss">{s.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const STATS: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}[] = [
  { value: 94, suffix: "%", label: "of reps hit forecast" },
  { value: 2.3, suffix: "x", decimals: 1, label: "faster deal review" },
  { value: 150, prefix: "₹", suffix: " Cr", label: "revenue under management" },
  { value: 4.9, decimals: 1, label: "average customer rating" },
];

function Stats() {
  return (
    <section id="stats" className="py-16">
      <div className="rounded-[min(1.6vw,24px)] bg-forest p-8 shadow-2xl shadow-forest/30 sm:p-12">
        <div className="grid gap-8 text-center sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <p className="font-display text-4xl text-vivid sm:text-5xl">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="mt-2 text-sm text-paper/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TRUST_ITEMS = [
  {
    title: "Encrypted everywhere",
    copy: "Data is encrypted in transit and at rest, end to end. Nothing travels or sits unencrypted.",
    icon: (
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    ),
  },
  {
    title: "Your data stays yours",
    copy: "Your pipeline never trains models for other customers. Export everything as CSV anytime.",
    icon: (
      <path d="M4 7c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 7v10c0 1.7 3.6 3 8 3s8-1.3 8-3V7M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    ),
  },
  {
    title: "Role-based access",
    copy: "Reps see their deals, managers see the whole pipeline. Granular roles keep data in the right hands.",
    icon: (
      <path d="M7 11V8a5 5 0 0110 0v3M5 11h14v9H5v-9z" />
    ),
  },
  {
    title: "Hosted in India",
    copy: "Infrastructure and data residency built for Indian compliance, aligned with DPDP principles.",
    icon: (
      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c-4 4.5-4 13.5 0 18M12 3c4 4.5 4 13.5 0 18" />
    ),
  },
  {
    title: "Always available",
    copy: "Automatic backups, multi-zone redundancy and 99.9% uptime — your forecast is never locked out.",
    icon: (
      <path d="M4 6h16v12H4V6zM2 6h20M8 21h8" />
    ),
  },
  {
    title: "Delete on demand",
    copy: "Leave anytime with a full export. Ask us and we permanently delete your workspace data.",
    icon: (
      <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6" />
    ),
  },
];

function SecurityTrust() {
  return (
    <section id="security" className="py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="eyebrow">
          <span className="size-1.5 rounded-full bg-vivid" />
          Security &amp; trust
        </span>
        <h2 className="mt-4 font-display text-3xl text-pretty sm:text-4xl">
          Your pipeline data, locked down
        </h2>
        <p className="mt-3 text-sm text-moss sm:text-base">
          Revenue data is the most sensitive data a team owns. We treat it that way — from the
          first line of code, not as an afterthought.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {TRUST_ITEMS.map((item, i) => (
          <Reveal key={item.title} delay={i * 80} className="h-full">
            <div className="hover-lift card-solid h-full p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-vivid/15">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-5 text-forest"
                  aria-hidden="true"
                >
                  {item.icon}
                </svg>
              </span>
              <h3 className="mt-4 font-display text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-moss">{item.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={160}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-moss">
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-vivid" /> 256-bit encryption
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-vivid" /> Daily backups
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-vivid" /> 99.9% uptime target
          </span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-vivid" /> No model training on your data
          </span>
        </div>
      </Reveal>
    </section>
  );
}

const FAQS = [
  {
    q: "How long does setup take?",
    a: "Most teams connect email, calendar, and existing CRM data in under an hour. The AI needs about a week of history to start surfacing useful signals.",
  },
  {
    q: "Do we have to change how reps work?",
    a: "No. ApexSales captures activity automatically and fits around your existing deal stages. Reps keep selling — the system fills in the records.",
  },
  {
    q: "How accurate are the AI forecasts?",
    a: "Teams on Growth typically forecast within 4–6% of actuals after their first full quarter, once the model has learned their cycle.",
  },
  {
    q: "Is our data secure?",
    a: "Yes. Data is encrypted in transit and at rest, stored in India-compliant infrastructure, and never used to train models for other customers.",
  },
  {
    q: "Can we import from spreadsheets or our old CRM?",
    a: "Yes — CSV import is built in, and one-click import covers Zoho and Salesforce fields. Historical deals come in with owners and stages intact.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="eyebrow">FAQ</span>
        <h2 className="mt-4 font-display text-3xl text-pretty sm:text-4xl">Questions, answered</h2>
      </div>
      <Reveal>
        <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="card-solid"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="font-display text-lg">{f.q}</span>
                <span
                  className={`grid size-7 shrink-0 place-items-center rounded-full bg-mist text-forest transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="anim-rise px-6 pb-5 text-sm leading-relaxed text-moss">{f.a}</p>
              )}
            </div>
          );
        })}
        </div>
      </Reveal>
    </section>
  );
}

type DemoFormState = "idle" | "sending" | "done" | "error";

function DemoForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<DemoFormState>("idle");
  const [error, setError] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    if (name.length < 2 || name.length > 120) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.message.length > 2000) {
      setError("Message is too long — please keep it under 2000 characters.");
      return;
    }
    setStatus("sending");
    setError("");
    const { error: insertError } = await supabase.from("demo_leads").insert({
      name,
      email,
      company: form.company.trim() || null,
      message: form.message.trim() || null,
    });
    if (insertError) {
      setStatus("error");
      setError("Something went wrong on our side. Please try again in a moment.");
      return;
    }
    setStatus("done");
  }

  const inputClass =
    "w-full rounded-xl bg-white/80 px-4 py-2.5 text-sm text-forest ring-1 ring-black/10 outline-none transition-shadow placeholder:text-moss/70 focus:ring-2 focus:ring-vivid";

  return (
    <section id="demo" className="scroll-mt-24 py-10">
      <Reveal>
      <div className="card-solid-lg grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2">
        <div>
          <h2 className="max-w-[20ch] font-display text-2xl text-pretty sm:text-4xl">
            See ApexSales on your own pipeline.
          </h2>
          <p className="mt-4 max-w-[44ch] text-sm leading-relaxed text-moss sm:text-base">
            Tell us a little about your team and we'll set up a 30-minute walkthrough — your
            deals, your stages, your numbers.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-moss">
            {["30 minutes, video call", "No card required", "Response within one business day"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-vivid" />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>
        {status === "done" ? (
          <div className="rounded-[min(1.2vw,18px)] bg-paper/80 p-8 text-center ring-1 ring-black/5">
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-vivid/25 font-display text-xl text-forest">
              ✓
            </span>
            <h3 className="mt-4 font-display text-xl">Thanks, we've got it!</h3>
            <p className="mx-auto mt-2 max-w-[36ch] text-sm text-moss">
              Our team will reach out within one business day to schedule your walkthrough.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="rounded-[min(1.2vw,18px)] bg-paper/70 p-6 ring-1 ring-black/5">
            <div className="grid gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-xs font-semibold text-forest/80">Name *</span>
                <input
                  className={inputClass}
                  value={form.name}
                  maxLength={120}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Priya Nair"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-xs font-semibold text-forest/80">Work email *</span>
                <input
                  type="email"
                  className={inputClass}
                  value={form.email}
                  maxLength={255}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="priya@company.in"
                  required
                />
              </label>
            </div>
            <label className="mt-3 block">
              <span className="mb-1 block text-xs font-semibold text-forest/80">Company</span>
              <input
                className={inputClass}
                value={form.company}
                maxLength={160}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="Meridian Systems"
              />
            </label>
            <label className="mt-3 block">
              <span className="mb-1 block text-xs font-semibold text-forest/80">
                What would you like to see?
              </span>
              <textarea
                className={`${inputClass} min-h-20 resize-y`}
                value={form.message}
                maxLength={2000}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Forecasting for a 20-rep team moving off spreadsheets…"
              />
            </label>
            {error && <p className="mt-3 text-xs font-semibold text-moss">{error}</p>}
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-shine mt-4 inline-flex w-full items-center justify-center rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-forest ring-1 ring-vivid transition-transform hover:scale-[1.02] disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Book my demo"}
            </button>
          </form>
        )}
      </div>
      </Reveal>
    </section>
  );
}

function Cta() {
  return (
    <section className="py-10">
      <Reveal>
      <div className="rounded-[min(1.6vw,24px)] bg-forest p-8 text-center shadow-2xl shadow-forest/30 sm:p-12">
        <h2 className="mx-auto max-w-[24ch] font-display text-2xl text-pretty text-paper sm:text-4xl">
          Stop guessing your quarter. Start knowing it.
        </h2>
        <p className="mx-auto mt-3 max-w-[46ch] text-sm text-paper/70">
          Free for teams up to 5 seats. Upgrade to Growth at ₹3,499 per seat when you're ready.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/pricing"
            className="btn-shine inline-flex items-center rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-forest ring-1 ring-vivid transition-transform hover:scale-[1.02]"
          >
            Start free
          </Link>
          <Link
            to="/"
            hash="demo"
            className="inline-flex items-center rounded-full bg-paper/10 px-6 py-3 text-sm font-semibold text-paper ring-1 ring-paper/25 transition-colors hover:bg-paper/20"
          >
            Book a demo
          </Link>
        </div>
      </div>
      </Reveal>
    </section>
  );
}

function Index() {
  return (
    <PageShell>
      <Hero />
      <DashboardPreview />
      <Features />
      <FounderNote />
      <ProductTour />
      <HowItWorks />
      <Stats />
      <SecurityTrust />
      <Faq />
      <DemoForm />
      <Cta />
    </PageShell>
  );
}
