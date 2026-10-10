import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    label: "Pipeline kanban",
    title: "One board for every deal",
    copy: "Drag deals across stages, spot stalled ones instantly, and see the whole team's pipeline in real time — no more asking \"where is that deal stuck?\"",
  },
  {
    label: "AI next-best-action",
    title: "AI tells you what to do next",
    copy: "For every deal, ApexSales reads stage, idle days and last activity — then suggests the smartest next move: follow-up call, proposal, or nurture. Right where reps work.",
  },
  {
    label: "Forecasting",
    title: "Forecasts you can trust",
    copy: "Stage-wise probabilities and deal health turn your pipeline into a rupee forecast. By mid-month you know where the quarter is heading — not gut feel.",
  },
  {
    label: "Field updates",
    title: "Updates from the field, in seconds",
    copy: "Reps update stages and notes from their phone in under 30 seconds. Managers see it instantly — no more chasing updates on WhatsApp.",
  },
];

const KANBAN = [
  {
    stage: "Qualification",
    deals: [
      { name: "NorthArc Capital", value: "₹42 L", owner: "RM" },
      { name: "Zentrail", value: "₹28 L", owner: "AK" },
    ],
  },
  {
    stage: "Proposal",
    deals: [
      { name: "Meridian Systems", value: "₹58 L", owner: "RM", hot: true },
      { name: "Fieldstone", value: "₹65 L", owner: "SD" },
    ],
  },
  {
    stage: "Negotiation",
    deals: [{ name: "Brightline Health", value: "₹88 L", owner: "AK" }],
  },
];

const FORECAST_BARS = [
  { month: "Jul", pct: 46, value: "₹12.8 Cr" },
  { month: "Aug", pct: 68, value: "₹19.4 Cr" },
  { month: "Sep", pct: 88, value: "₹24.0 Cr" },
];

function KanbanVisual() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-display text-sm text-forest">Pipeline · This week</p>
        <span className="rounded-full bg-vivid/20 px-2.5 py-0.5 text-[10px] font-semibold text-forest">
          6 deals
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {KANBAN.map((col) => (
          <div key={col.stage} className="rounded-xl bg-paper/80 p-2.5 ring-1 ring-black/5">
            <p className="text-[10px] font-semibold text-forest/90">{col.stage}</p>
            <div className="mt-2 space-y-2">
              {col.deals.map((deal, di) => (
                <div
                  key={deal.name}
                  className={`tour-in rounded-lg bg-white p-2 ring-1 ring-black/5 ${
                    deal.hot ? "tour-pulse ring-2 ring-vivid" : ""
                  }`}
                  style={{ animationDelay: `${di * 0.12 + 0.1}s` }}
                >
                  <p className="truncate text-[10px] font-semibold text-forest">{deal.name}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <p className="text-[10px] text-moss">{deal.value}</p>
                    <span className="grid size-4 place-items-center rounded-full bg-mist text-[8px] font-semibold text-forest">
                      {deal.owner}
                    </span>
                  </div>
                  {deal.hot && (
                    <span className="tour-in mt-1.5 inline-block rounded-full bg-vivid/25 px-1.5 py-0.5 text-[8px] font-bold text-forest">
                      6d idle
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-moss">
        Meridian has been idle 6 days — it surfaces on the board before it goes cold.
      </p>
    </div>
  );
}

function AiVisual() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-display text-sm text-forest">AI next-best-action</p>
        <span className="flex items-center gap-1.5 rounded-full bg-vivid/20 px-2.5 py-0.5 text-[10px] font-semibold text-forest">
          <span className="size-1.5 animate-pulse rounded-full bg-vivid" />
          Live
        </span>
      </div>
      <div className="tour-in mt-4 rounded-xl bg-paper/80 p-3 ring-1 ring-black/5" style={{ animationDelay: "0.08s" }}>
        <div className="flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-full bg-forest text-[10px] font-semibold text-paper">
            RM
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-forest">Meridian Systems</p>
            <p className="text-[10px] text-moss">₹58 L · Proposal · Idle 6 days</p>
          </div>
        </div>
      </div>
      <div
        className="tour-in mt-3 rounded-xl bg-forest/95 p-3.5 text-paper"
        style={{ animationDelay: "0.24s" }}
      >
        <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-vivid">
          ✦ Next-best action
        </p>
        <p className="mt-1.5 text-xs leading-relaxed">
          Send a follow-up with revised pricing today — the champion opened your proposal twice but
          hasn't replied.
        </p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-vivid px-3 py-1 text-[10px] font-semibold text-forest">
            Call
          </span>
          <span className="rounded-full bg-paper/15 px-3 py-1 text-[10px] font-semibold text-paper/80">
            Email
          </span>
          <span className="rounded-full bg-paper/15 px-3 py-1 text-[10px] font-semibold text-paper/80">
            Nurture
          </span>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-moss">
        Not magic — the thinking an experienced manager does on every deal, now automatic.
      </p>
    </div>
  );
}

function ForecastVisual() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-display text-sm text-forest">Forecast · Q3</p>
        <span className="rounded-full bg-vivid/20 px-2.5 py-0.5 text-[10px] font-semibold text-forest">
          On track
        </span>
      </div>
      <div className="mt-4 flex h-40 items-end gap-3 px-1">
        {FORECAST_BARS.map((bar, i) => (
          <div key={bar.month} className="flex flex-1 flex-col items-center gap-2">
            <p className="text-[10px] font-semibold text-forest">{bar.value}</p>
            <div className="flex h-28 w-full items-end overflow-hidden rounded-t-lg bg-mist/70">
              <div
                className="tour-bar w-full rounded-t-lg bg-vivid/85"
                style={{ height: `${bar.pct}%`, animationDelay: `${i * 0.18 + 0.1}s` }}
              />
            </div>
            <span className="text-[10px] text-moss">{bar.month}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-relaxed text-moss">
        Quarter closing at <span className="font-semibold text-forest">₹40.2 Cr</span> — 94% of
        target, visible by mid-month.
      </p>
    </div>
  );
}

function FieldVisual() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="font-display text-sm text-forest">Field update · Mobile</p>
        <span className="rounded-full bg-vivid/20 px-2.5 py-0.5 text-[10px] font-semibold text-forest">
          2 taps
        </span>
      </div>
      <div className="tour-float mx-auto mt-4 w-full max-w-[230px] rounded-[1.8rem] bg-forest/5 p-2 ring-1 ring-black/10">
        <div className="rounded-[1.4rem] bg-white p-3 ring-1 ring-black/5">
          <p className="text-center text-[9px] font-semibold uppercase tracking-wider text-moss">
            ApexSales
          </p>
          <div className="tour-in mt-3 rounded-xl bg-paper/80 p-2.5 ring-1 ring-black/5" style={{ animationDelay: "0.1s" }}>
            <p className="text-xs font-semibold text-forest">Vayu Aerospace</p>
            <p className="mt-0.5 text-[10px] text-moss">₹31 L · Proposal</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <span className="tour-in rounded-lg bg-vivid py-2 text-center text-[10px] font-bold text-forest" style={{ animationDelay: "0.22s" }}>
              Won 🎉
            </span>
            <span className="tour-in rounded-lg bg-mist py-2 text-center text-[10px] font-semibold text-forest" style={{ animationDelay: "0.3s" }}>
              Follow-up
            </span>
          </div>
          <div
            className="tour-in mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-vivid/15 py-2 text-[10px] font-semibold text-forest"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="size-3 rounded-full bg-vivid text-center text-[7px] leading-3 text-forest">✓</span>
            Updated in 12s
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-moss">
        Stage update, note, follow-up — done before the chai gets cold. Managers see it instantly.
      </p>
    </div>
  );
}

function TourVisual({ step }: { step: number }) {
  return (
    <div key={step} className="tour-in">
      {step === 0 && <KanbanVisual />}
      {step === 1 && <AiVisual />}
      {step === 2 && <ForecastVisual />}
      {step === 3 && <FieldVisual />}
    </div>
  );
}

export function ProductTour() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stepRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry?.isIntersecting) setActive(i);
        },
        { rootMargin: "-35% 0px -35% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="tour" className="py-16">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <span className="eyebrow">Product tour</span>
        <h2 className="mt-4 font-display text-3xl text-pretty sm:text-4xl">
          Watch ApexSales work — as you scroll
        </h2>
        <p className="mt-3 text-sm text-moss sm:text-base">
          No videos, no docs. Just keep scrolling and see exactly what your team gets.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Sticky visual — desktop */}
        <div className="hidden lg:block">
          <div className="card-solid-lg sticky top-24 p-6">
            <TourVisual step={active} />
            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex gap-1.5">
                {STEPS.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-vivid" : "w-1.5 bg-mist"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-moss">
                {STEPS[active]?.label ?? ""}
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div>
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className="flex min-h-[300px] items-center lg:min-h-[420px]"
            >
              <div>
                <div className="mb-5 lg:hidden">
                  <div className="card-solid p-4">
                    <TourVisual step={i} />
                  </div>
                </div>
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold transition-colors duration-300 ${
                    i === active ? "bg-vivid/20 text-forest" : "bg-mist/60 text-moss"
                  }`}
                >
                  Step {i + 1} · {s.label}
                </span>
                <h3
                  className={`mt-3 font-display text-2xl text-pretty transition-colors duration-300 sm:text-3xl ${
                    i === active ? "text-forest" : "text-forest/45"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-3 max-w-[48ch] text-sm leading-relaxed transition-colors duration-300 sm:text-base ${
                    i === active ? "text-moss" : "text-moss/50"
                  }`}
                >
                  {s.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
