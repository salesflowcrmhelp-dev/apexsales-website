import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import { Reveal, CountUp } from "@/components/reveal";
import {
  Trophy,
  TrendingUp,
  Mail,
  Target,
  Zap,
  Timer,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PRODUCT_FAQS = [
  {
    q: "How long does setup take?",
    a: "Most teams are live the same day. Import your deals from a spreadsheet, set your sales stages once, and the dashboard starts tracking from your very first entry.",
  },
  {
    q: "Will my team actually use it, or will it become another spreadsheet?",
    a: "ApexSales is built for reps first — a clean pipeline, quick deal updates, and reminders that do the chasing for you. If updating a deal takes more than a minute, that's our bug, not your team's habit.",
  },
  {
    q: "Can I migrate my deals from my current tool or Excel?",
    a: "Yes. Upload your spreadsheet or CSV and map the columns once — deals, contacts and notes come across. We also help with a guided import during the demo.",
  },
  {
    q: "How do the AI insights work?",
    a: "The assistant reads your pipeline and suggests next actions — which deal to follow up, what to prioritise today, and where revenue is slipping. It works on your data, not generic advice.",
  },
  {
    q: "Does it support sales targets and leaderboards?",
    a: "Yes. Set monthly targets per rep, track progress live on the dashboard, and the leaderboard ranks the team by closed revenue and quota attainment.",
  },
  {
    q: "What happens to my data if I leave?",
    a: "It's yours. Export your full pipeline, notes and activity history anytime, in a standard format. Nothing is locked in.",
  },
  {
    q: "Do I need a credit card to try it?",
    a: "No. The Starter plan is free with no card required, and it doesn't expire — upgrade only when your team needs more seats or controls.",
  },
];


export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — ApexSales" },
      {
        name: "description",
        content:
          "Pipeline, AI insights, forecasting, automation, targets and activity tracking — explore everything inside the ApexSales revenue intelligence CRM.",
      },
      { property: "og:title", content: "Product — ApexSales" },
      {
        property: "og:description",
        content:
          "Pipeline, AI insights, forecasting, automation, targets and activity tracking — explore everything inside the ApexSales revenue intelligence CRM.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/product" }],
  }),
  component: ProductPage,
});

const MODULES = [
  {
    letter: "P",
    title: "Pipeline",
    copy: "Every deal, stage, and owner in one living board. Drag deals between stages, set custom fields per team, and see stalled deals surface automatically before they go cold.",
    points: ["Unlimited custom pipelines", "Stale-deal alerts", "Bulk edit & merge"],
  },
  {
    letter: "A",
    title: "AI insights",
    copy: "Signals that flag at-risk and high-potential deals early. ApexSales reads deal notes, email tone, and activity gaps to tell you which deals need attention this week — and why.",
    points: ["Deal health scores", "Risk explanations in plain language", "Next-best-action suggestions"],
  },
  {
    letter: "F",
    title: "Forecasting",
    copy: "Probabilistic numbers your finance team will actually trust. Commit, best-case, and pipeline views per rep, team, or region — with a full audit trail of every change.",
    points: ["Commit / best-case / pipeline views", "Forecast history & audit trail", "Quarter-end gap analysis"],
  },
  {
    letter: "T",
    title: "Activity tracking",
    copy: "Emails, calls, and notes captured automatically. Reps stop logging; managers stop chasing. Every touchpoint lands on the deal timeline without manual entry.",
    points: ["Auto email & call capture", "Deal timelines", "Team activity reports"],
  },
];

const AUTOMATION_CARDS = [
  {
    title: "Follow-up reminders",
    copy: "Set a next step on any deal and ApexSales reminds the rep on time — in-app and on WhatsApp. No more \u201carre yaar, bhool gaya\u201d.",
    points: ["One-tap next steps", "WhatsApp & email nudges", "Escalate when overdue"],
  },
  {
    title: "Stage triggers",
    copy: "When a deal enters a stage, the right things happen on their own — task created, manager notified, proposal email queued.",
    points: ["Auto-create tasks", "Notify the owner", "Send templated emails"],
  },
  {
    title: "Stale-deal nudges",
    copy: "Deals sitting quiet for too long get flagged automatically — so nothing rots in the pipeline without anyone noticing.",
    points: ["Custom quiet thresholds", "Weekly at-risk digest", "Manager alerts"],
  },
  {
    title: "Auto-assign & routing",
    copy: "New leads land with the right rep instantly — by region, product line, or round-robin. No manual forwarding on WhatsApp.",
    points: ["Round-robin routing", "Region & team rules", "Duplicate protection"],
  },
];

const REMINDER_FEED = [
  { time: "09:30", text: "Reminder sent to Rohit — Fieldstone proposal follow-up" },
  { time: "10:15", text: "Deal moved to Negotiation — Brightline Health. Task created: send revised quote." },
  { time: "11:40", text: "Zentrail has been quiet for 6 days — flagged at risk" },
  { time: "14:05", text: "New web lead auto-assigned to Aditi — round-robin rule" },
];

function Automation() {
  return (
    <section className="py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="eyebrow">
          <span className="size-1.5 rounded-full bg-vivid" />
          Automation
        </span>
        <h2 className="mt-4 font-display text-2xl text-pretty sm:text-3xl">
          Follow-ups that never slip. Follow-through that runs itself.
        </h2>
        <p className="mt-3 text-sm text-moss sm:text-base">
          Reminders, stage triggers and routing work quietly in the background so reps spend their
          day selling — not remembering.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <Reveal className="h-full">
          <div className="card-solid-lg h-full p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-display text-lg">Today's automation</p>
              <span className="rounded-full bg-vivid/20 px-3 py-1 text-xs font-semibold text-forest">
                4 actions taken for you
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {REMINDER_FEED.map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 rounded-xl bg-paper/80 p-3 ring-1 ring-black/5"
                >
                  <span className="mt-0.5 shrink-0 rounded-full bg-mist px-2 py-0.5 text-[10px] font-semibold text-forest">
                    {item.time}
                  </span>
                  <p className="text-sm leading-snug text-forest/90">{item.text}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-moss">
              Every action is logged on the deal timeline — full audit trail, zero guesswork.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {AUTOMATION_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 90} className="h-full">
              <div className="hover-lift card-solid h-full p-6">
                <h3 className="font-display text-lg">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-moss">{card.copy}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-forest/80">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-vivid" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Forecasting & reports (coded from live ApexSales data) ---------- */

const DASH_KPI = [
  {
    label: "Total Realized Revenue",
    value: 443090,
    prefix: "₹",
    badge: "+14.2% MoM",
    sub: "Base: ₹3,75,500 • GST (18%): ₹67,590",
    badgeCls: "bg-vivid/20 text-forest",
    barCls: "bg-vivid",
  },
  {
    label: "Weighted Pipeline Forecast",
    value: 432234,
    prefix: "₹",
    badge: "Expected",
    sub: "Confidence Engine • 4 Active Deals",
    badgeCls: "bg-sky/15 text-sky",
    barCls: "bg-sky",
  },
  {
    label: "Team Win Rate",
    value: 57.9,
    suffix: "%",
    decimals: 1,
    badge: "+ Above Target",
    sub: "33 Won / 57 Total Leads",
    badgeCls: "bg-violet/15 text-violet",
    barCls: "bg-violet",
  },
  {
    label: "Avg Closing Velocity",
    value: 3.2,
    suffix: " Days",
    decimals: 1,
    badge: "-1.1 Days Fast",
    sub: "Industry Benchmark: 7.5 Days",
    badgeCls: "bg-amber/20 text-amber",
    barCls: "bg-amber",
  },
];

const MONTHS = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const ACTUAL_REVENUE = [88000, 105000, 118000, 132000, 165000, 295000];
const TARGET_PACE = [95000, 125000, 155000, 175000, 195000, 120000];
const GRID_LABELS = [85000, 170000, 254000, 339000];

function VelocityChart() {
  const W = 640;
  const H = 240;
  const padL = 58;
  const padR = 16;
  const padT = 14;
  const padB = 30;
  const maxV = 340000;
  const x = (i: number) => padL + (i * (W - padL - padR)) / (MONTHS.length - 1);
  const y = (v: number) => padT + (1 - v / maxV) * (H - padT - padB);

  const line = (data: number[]) => data.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const area = `M ${line(ACTUAL_REVENUE).replace(/ /g, " L ")} L ${x(
    ACTUAL_REVENUE.length - 1,
  )},${H - padB} L ${padL},${H - padB} Z`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="mt-4 w-full"
      role="img"
      aria-label="Month-on-month revenue velocity: actual revenue against target pace, April to September"
    >
      {GRID_LABELS.map((v) => (
        <g key={v}>
          <line
            x1={padL}
            x2={W - padR}
            y1={y(v)}
            y2={y(v)}
            stroke="currentColor"
            className="text-moss/15"
            strokeDasharray="3 4"
          />
          <text
            x={padL - 8}
            y={y(v) + 3}
            textAnchor="end"
            className="fill-moss/70 text-[10px]"
          >
            ₹{Math.round(v / 1000)}k
          </text>
        </g>
      ))}
      <path d={area} className="fill-vivid/10 anim-soft" style={{ "--anim-delay": "1s" } as CSSProperties} />
      <polyline
        points={line(TARGET_PACE)}
        fill="none"
        strokeWidth="2.5"
        strokeDasharray="6 6"
        strokeLinecap="round"
        className="anim-soft stroke-amber"
        style={{ "--anim-delay": "1.4s" } as CSSProperties}
      />
      <polyline
        points={line(ACTUAL_REVENUE)}
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        className="anim-path stroke-vivid"
        pathLength={1}
        style={{ "--path-len": 1 } as CSSProperties}
      />
      {ACTUAL_REVENUE.map((v, i) => (
        <circle
          key={i}
          cx={x(i)}
          cy={y(v)}
          r="3.5"
          className="anim-dot fill-vivid"
          style={{ "--anim-delay": `${0.55 + i * 0.16}s` } as CSSProperties}
        />
      ))}
      {MONTHS.map((m, i) => (
        <text
          key={m}
          x={x(i)}
          y={H - 8}
          textAnchor="middle"
          className="fill-moss/70 text-[10px]"
        >
          {m}
        </text>
      ))}
    </svg>
  );
}

const STAGE_SHARE = [
  { name: "Won", deals: 33, pct: 80, bg: "bg-vivid", stroke: "stroke-vivid" },
  { name: "Negotiation", deals: 4, pct: 11, bg: "bg-amber", stroke: "stroke-amber" },
  { name: "Demo Booked", deals: 2, pct: 5, bg: "bg-sky", stroke: "stroke-sky" },
  { name: "Proposal Sent", deals: 1, pct: 4, bg: "bg-violet", stroke: "stroke-violet" },
];

function StageDonut() {
  const r = 52;
  const c = 2 * Math.PI * r;
  let acc = 0;
  return (
    <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
      <div className="relative shrink-0">
        <svg viewBox="0 0 140 140" className="size-36 -rotate-90">
          {STAGE_SHARE.map((s, i) => {
            const len = (s.pct / 100) * c;
            const offset = acc;
            acc += len;
            return (
              <circle
                key={s.name}
                cx="70"
                cy="70"
                r={r}
                fill="none"
                strokeWidth="16"
                strokeDashoffset={-offset}
                className={`${s.stroke} anim-seg`}
                strokeLinecap="butt"
                style={{
                  "--seg-a": len,
                  "--seg-b": c - len,
                  "--anim-delay": `${0.4 + i * 0.22}s`,
                } as CSSProperties}
              />
            );
          })}
        </svg>
        <div
          className="anim-pop absolute inset-0 grid place-items-center text-center"
          style={{ "--anim-delay": "1.3s" } as CSSProperties}
        >
          <div>
            <p className="font-display text-lg text-forest">₹5.1L</p>
            <p className="text-[10px] text-moss">Pipeline</p>
          </div>
        </div>
      </div>
      <ul className="w-full space-y-2.5">
        {STAGE_SHARE.map((s) => (
          <li key={s.name} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 text-forest/90">
              <span className={`size-2.5 shrink-0 rounded-full ${s.bg}`} />
              {s.name}
            </span>
            <span className="shrink-0 text-moss">
              {s.deals} deals <span className="font-semibold text-forest">{s.pct}%</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const STAGE_AUDIT = [
  { stage: "New", leads: 2, revenue: "₹26,000", share: "3.1%", pill: "bg-sky/15 text-sky" },
  { stage: "Contacted", leads: 1, revenue: "₹10,000", share: "1.2%", pill: "bg-violet/15 text-violet" },
  { stage: "Qualified", leads: 1, revenue: "₹12,000", share: "1.4%", pill: "bg-amber/20 text-amber" },
  { stage: "Proposal Sent", leads: 1, revenue: "₹18,000", share: "2.2%", pill: "bg-rose/15 text-rose" },
  { stage: "Demo Done", leads: 2, revenue: "₹20,000", share: "2.4%", pill: "bg-vivid/20 text-forest" },
];

const SOURCE_AUDIT = [
  { source: "Google Ads", leads: 2, revenue: "₹10,000", win: "50.0%", dot: "bg-vivid" },
  { source: "Referral", leads: 1, revenue: "₹0", win: "0.0%", dot: "bg-amber" },
  { source: "Website", leads: 3, revenue: "₹0", win: "0.0%", dot: "bg-sky" },
];

function Forecasting() {
  return (
    <section className="py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="eyebrow">
          <span className="size-1.5 rounded-full bg-vivid" />
          Forecasting &amp; reports
        </span>
        <h2 className="mt-4 font-display text-2xl text-pretty sm:text-3xl">
          Numbers your finance team will actually trust.
        </h2>
        <p className="mt-3 text-sm text-moss sm:text-base">
          Revenue velocity vs target pace, a live stage-wise pipeline, and a weighted forecast that
          updates itself from real deals — all rendered fresh inside ApexSales.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {DASH_KPI.map((kpi, i) => (
          <Reveal key={kpi.label} delay={i * 90} className="h-full">
            <div className="hover-lift relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-black/5">
              <span className={`absolute inset-x-0 top-0 h-1 ${kpi.barCls}`} />
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-medium text-moss">{kpi.label}</p>
                <span
                  className={`anim-pop shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${kpi.badgeCls}`}
                  style={{ "--anim-delay": `${0.25 + i * 0.12}s` } as CSSProperties}
                >
                  {kpi.badge}
                </span>
              </div>
              <p className="mt-2 font-display text-2xl text-forest">
                <CountUp
                  value={kpi.value}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                  decimals={kpi.decimals}
                />
              </p>
              <p className="mt-1 text-[11px] text-moss/80">{kpi.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="card-solid-lg h-full p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-2 font-display text-lg">
                <TrendingUp className="size-4 text-vivid" />
                Month-on-Month Revenue Velocity
              </p>
              <span className="rounded-full bg-vivid/20 px-3 py-1 text-xs font-semibold text-forest">
                +14.2% MoM Pace
              </span>
            </div>
            <p className="mt-1 text-xs text-moss">
              Actual realized revenue vs target pace line (Apr – Sep 2026)
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl bg-mist/60 px-3 py-2 text-xs ring-1 ring-black/5">
              <span className="font-semibold text-forest">
                Sep: ₹2,95,000 <span className="font-normal text-moss">(22 deals)</span>
              </span>
              <span className="text-moss">
                Target: ₹1,20,000{" "}
                <span className="font-semibold text-forest">(246% pace · On Track)</span>
              </span>
            </div>
            <VelocityChart />
            <div className="mt-2 flex items-center gap-5 text-xs text-moss">
              <span className="flex items-center gap-2">
                <span className="h-0 w-5 border-t-2 border-dashed border-amber" />
                Target Pace
              </span>
              <span className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-vivid" />
                Actual Revenue
              </span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-solid-lg h-full p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-2 font-display text-lg">
                <Timer className="size-4 text-vivid" />
                Pipeline Stage Distribution
              </p>
              <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">
                40 Active Deals
              </span>
            </div>
            <p className="mt-1 text-xs text-moss">Active deal volume &amp; stage share %</p>
            <div className="mt-6">
              <StageDonut />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <Reveal>
          <div className="card-solid-lg h-full p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-display text-lg">Stage-Wise Revenue Audit</p>
              <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">
                57 Leads
              </span>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-black/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-mist/70 text-left text-xs uppercase tracking-wide text-moss">
                    <th className="px-4 py-2.5 font-semibold">Pipeline Stage</th>
                    <th className="px-4 py-2.5 text-right font-semibold">Leads</th>
                    <th className="px-4 py-2.5 text-right font-semibold">Revenue (₹)</th>
                    <th className="px-4 py-2.5 text-right font-semibold">Share</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 bg-white">
                  {STAGE_AUDIT.map((row, i) => (
                    <tr
                      key={row.stage}
                      className="anim-row transition-colors hover:bg-mist/40"
                      style={{ "--anim-delay": `${0.3 + i * 0.09}s` } as CSSProperties}
                    >
                      <td className="px-4 py-2.5">
                        <span
                          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${row.pill}`}
                        >
                          {row.stage}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right text-moss">{row.leads}</td>
                      <td className="px-4 py-2.5 text-right font-semibold text-forest">
                        {row.revenue}
                      </td>
                      <td className="px-4 py-2.5 text-right text-moss">{row.share}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="card-solid-lg h-full p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-display text-lg">Lead Source Revenue Contribution</p>
            </div>
            <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-black/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-mist/70 text-left text-xs uppercase tracking-wide text-moss">
                    <th className="px-4 py-2.5 font-semibold">Lead Source</th>
                    <th className="px-4 py-2.5 text-right font-semibold">Leads</th>
                    <th className="px-4 py-2.5 text-right font-semibold">Won / Renewal</th>
                    <th className="px-4 py-2.5 text-right font-semibold">Win Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 bg-white">
                  {SOURCE_AUDIT.map((row, i) => (
                    <tr
                      key={row.source}
                      className="anim-row transition-colors hover:bg-mist/40"
                      style={{ "--anim-delay": `${0.3 + i * 0.09}s` } as CSSProperties}
                    >
                      <td className="px-4 py-2.5 font-medium text-forest">
                        <span className="flex items-center gap-2">
                          <span className={`size-2.5 shrink-0 rounded-full ${row.dot}`} />
                          {row.source}
                        </span>
                      </td>
                      <td className="px-4 py-2.5 text-right text-moss">{row.leads}</td>
                      <td className="px-4 py-2.5 text-right font-semibold text-forest">
                        {row.revenue}
                      </td>
                      <td className="px-4 py-2.5 text-right font-semibold text-forest">
                        {row.win}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-moss">
              Renewal &amp; retention audit: 4 active renewal contracts totaling{" "}
              <span className="font-semibold text-forest">₹30,680</span> collected (avg ticket{" "}
              <span className="font-semibold text-forest">₹7,670</span>).
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Team performance (coded from live ApexSales data) ---------- */

const REPS = [
  { rank: 1, initials: "HG", name: "Harsh Goyal", you: true, deals: 23, revenue: "₹2,57,830", pct: 131, width: 100, avatar: "bg-amber/25 text-amber", bar: "bg-amber" },
  { rank: 2, initials: "KA", name: "Kashish", you: false, deals: 10, revenue: "₹1,54,580", pct: 99, width: 60, avatar: "bg-vivid/20 text-forest", bar: "bg-vivid" },
  { rank: 3, initials: "RS", name: "Rohan Sharma", you: false, deals: 0, revenue: "₹0", pct: 0, width: 0, avatar: "bg-sky/15 text-sky", bar: "bg-sky" },
  { rank: 4, initials: "VM", name: "Vikram Malhotra", you: false, deals: 0, revenue: "₹0", pct: 0, width: 0, avatar: "bg-violet/15 text-violet", bar: "bg-violet" },
];

const FORECAST_STAGES = [
  { stage: "Negotiation", prob: "80%", pipeline: "₹0k", weighted: "₹0", dot: "bg-amber" },
  { stage: "Proposal Sent", prob: "50%", pipeline: "₹21k", weighted: "₹10,620", dot: "bg-violet" },
  { stage: "Demo Booked", prob: "30%", pipeline: "₹24k", weighted: "₹7,080", dot: "bg-sky" },
  { stage: "Qualified", prob: "15%", pipeline: "₹14k", weighted: "₹2,124", dot: "bg-vivid" },
];

function Targets() {
  return (
    <section className="py-14">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="eyebrow">
          <span className="size-1.5 rounded-full bg-vivid" />
          Team performance
        </span>
        <h2 className="mt-4 font-display text-2xl text-pretty sm:text-3xl">
          Targets everyone can see. Progress nobody has to chase.
        </h2>
        <p className="mt-3 text-sm text-moss sm:text-base">
          Monthly quotas per rep, a live leaderboard ranked by closed revenue, and a weekly
          executive digest that goes out on its own — the exact views your team runs on.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr_0.9fr]">
        <Reveal className="h-full">
          <div className="card-solid-lg h-full p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-2 font-display text-lg">
                <Trophy className="size-4 text-amber" />
                Sales Rep Leaderboard
              </p>
              <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">
                M-T-D Quota
              </span>
            </div>
            <p className="mt-1 text-xs text-moss">Ranked by closed revenue &amp; quota</p>
            <ul className="mt-5 space-y-2.5">
              {REPS.map((rep, i) => (
                <li
                  key={rep.name}
                  className={`anim-fade rounded-xl p-3 ring-1 ${
                    rep.you
                      ? "bg-vivid/10 ring-vivid/40"
                      : "bg-paper/80 ring-black/5"
                  }`}
                  style={{ "--anim-delay": `${0.25 + i * 0.12}s` } as CSSProperties}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-4 shrink-0 text-xs font-semibold text-moss">
                      #{rep.rank}
                    </span>
                    <span
                      className={`grid size-9 shrink-0 place-items-center rounded-full text-xs font-bold ${rep.avatar}`}
                    >
                      {rep.initials}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-2 text-sm font-semibold text-forest">
                        {rep.name}
                        {rep.you && (
                          <span className="rounded-full bg-forest px-2 py-0.5 text-[10px] font-semibold text-paper">
                            TOP 
                          </span>
                        )}
                      </p>
                      <p className="text-xs text-moss">{rep.deals} deals won</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm font-semibold text-forest">{rep.revenue}</p>
                      <div className="mt-1 flex items-center justify-end gap-2">
                        <span className="h-1.5 w-16 overflow-hidden rounded-full bg-mist">
                          <span
                            className={`anim-bar block h-full rounded-full ${rep.pct > 0 ? rep.bar : ""}`}
                            style={{
                              "--bar-w": `${rep.width}%`,
                              "--anim-delay": `${0.45 + i * 0.16}s`,
                            } as CSSProperties}
                          />
                        </span>
                        <span
                          className={`text-xs font-bold ${rep.pct > 0 ? "text-forest" : "text-moss/60"}`}
                        >
                          {rep.pct}%
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120} className="h-full">
          <div className="card-solid-lg h-full p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-2 font-display text-lg">
                <Target className="size-4 text-sky" />
                Weighted Revenue Forecast
              </p>
              <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-forest">
                Expected
              </span>
            </div>
            <p className="mt-1 text-xs text-moss">Probability confidence cash flow</p>
            <div className="mt-4 rounded-xl bg-mist/60 p-3 ring-1 ring-black/5">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs font-medium text-moss">Expected Month-End</p>
                <span className="shrink-0 rounded-full bg-vivid/20 px-2 py-0.5 text-[10px] font-semibold text-forest">
                  +27.8% Upside
                </span>
              </div>
              <p className="mt-1 font-display text-2xl text-forest">₹4,32,234</p>
              <p className="mt-1 text-[11px] text-moss">
                Realized: ₹4.12L + Pipeline: ₹0.20L
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {FORECAST_STAGES.map((s, i) => (
                <li
                  key={s.stage}
                  className="anim-fade flex items-center justify-between gap-3"
                  style={{ "--anim-delay": `${0.3 + i * 0.1}s` } as CSSProperties}
                >
                  <span className="flex items-center gap-2 text-forest/90">
                    <span className={`size-1.5 rounded-full ${s.dot}`} />
                    {s.stage}{" "}
                    <span className="text-xs text-moss">({s.prob})</span>
                  </span>
                  <span className="shrink-0 text-right text-moss">
                    {s.pipeline}{" "}
                    <span className="font-semibold text-forest">{s.weighted}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={240} className="h-full">
          <div className="card-solid-lg flex h-full flex-col p-6 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-2 font-display text-lg">
                <Mail className="size-4 text-violet" />
                Weekly Digest
              </p>
              <span
                className="anim-pop flex items-center gap-1.5 rounded-full bg-vivid/20 px-3 py-1 text-xs font-semibold text-forest"
                style={{ "--anim-delay": "0.6s" } as CSSProperties}
              >
                <span className="size-1.5 rounded-full bg-vivid" />
                Scheduled
              </span>
            </div>
            <p className="mt-1 text-xs text-moss">Automated Executive Email</p>
            <div className="mt-4 rounded-xl bg-paper/80 p-3 ring-1 ring-black/5">
              <p className="text-xs font-semibold text-forest">
                Next Run: Monday at 09:00 AM IST
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-moss">
                Dispatches MoM velocity graphs, rep leaderboard quotas, forecasting cash flow &amp;
                renewal audit to leadership.
              </p>
              <p className="mt-2 text-[11px] text-moss/80">
                <span className="font-semibold text-forest">Audience:</span>{" "}
                leadership@company.com, founders@…
              </p>
            </div>
            <div className="mt-auto pt-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-forest ring-1 ring-black/10">
                <Mail className="size-3.5" />
                Preview &amp; Dispatch Digest
              </span>
              <p className="mt-3 flex items-center gap-1.5 text-[11px] text-moss">
                <Zap className="size-3 text-vivid" />
                Sends itself every Monday — managers never compile reports again.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Connect your data",
    copy: "Sync email, calendar, and your existing CRM in minutes. ApexSales backfills 90 days of history so insights start on day one.",
  },
  {
    n: "02",
    title: "AI learns your motion",
    copy: "Within a week, the model learns your sales cycle — typical stage durations, win signals, and the patterns behind your closed-won deals.",
  },
  {
    n: "03",
    title: "Act on priorities",
    copy: "Every morning, reps and managers get a ranked list of what to do next — which deals to push, which to rescue, and which to let go.",
  },
];

function ProductPage() {
  return (
    <PageShell>
      <section className="py-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-moss ring-1 ring-black/5 backdrop-blur">
          Product
        </span>
        <h1 className="mt-5 max-w-[20ch] font-display text-3xl leading-[1.1] text-pretty sm:text-5xl">
          One workspace for your entire revenue engine.
        </h1>
        <p className="mt-5 max-w-[52ch] text-base text-moss sm:text-lg">
          ApexSales replaces the spreadsheet-and-guesswork stack with a single calm workspace:
          pipeline, AI insights, forecasting, automation, targets and activity tracking that stay
          in sync on their own.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {MODULES.map((m) => (
          <div
            key={m.title}
            className="rounded-[min(1.2vw,18px)] bg-white/55 p-6 ring-1 ring-black/5 backdrop-blur-lg transition-colors hover:bg-white/75"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-mist font-display text-lg text-forest">
              {m.letter}
            </span>
            <h2 className="mt-4 font-display text-xl">{m.title}</h2>
            <p className="mt-2 text-sm text-moss">{m.copy}</p>
            <ul className="mt-4 space-y-1.5 text-sm text-forest/80">
              {m.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-vivid" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <Forecasting />

      <Automation />

      <Targets />

      <section className="py-12">
        <h2 className="font-display text-2xl text-pretty sm:text-3xl">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-[min(1.2vw,18px)] bg-white/55 p-6 ring-1 ring-black/5 backdrop-blur-lg">
              <p className="font-display text-3xl text-vivid">{s.n}</p>
              <h3 className="mt-3 font-display text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-moss">{s.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-display text-2xl text-pretty sm:text-3xl">
          Product questions, answered
        </h2>
        <p className="mt-3 max-w-[52ch] text-sm text-moss sm:text-base">
          The things sales teams ask us most before switching.
        </p>
        <Reveal className="mt-6">
          <Accordion type="single" collapsible className="space-y-3">
            {PRODUCT_FAQS.map((f) => (
              <AccordionItem
                key={f.q}
                value={f.q}
                className="rounded-[min(1.2vw,18px)] border-none bg-white/55 px-5 ring-1 ring-black/5 backdrop-blur-lg transition-colors hover:bg-white/75"
              >
                <AccordionTrigger className="py-4 text-left font-display text-base text-forest hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-moss">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <p className="mt-5 text-sm text-moss">
          Something else on your mind?{" "}
          <Link to="/packages" className="font-semibold text-forest underline underline-offset-4">
            Ask us in a demo
          </Link>
          {" "}— or use the chat, bottom-right.
        </p>
      </section>


      <section className="pb-12">
        <div className="rounded-[min(1.4vw,20px)] bg-forest/95 p-8 text-center ring-1 ring-forest sm:p-10">
          <h2 className="font-display text-2xl text-paper sm:text-3xl">See it on your own pipeline</h2>
          <p className="mx-auto mt-3 max-w-[44ch] text-sm text-paper/70">
            Book a 20-minute demo and we'll load a sample of your deals to show real insights.
          </p>
          <Link
            to="/pricing"
            className="mt-6 inline-flex items-center rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-forest ring-1 ring-vivid transition-transform hover:scale-[1.02]"
          >
            Book a demo
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
