import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, type CSSProperties } from "react";
import { PageShell } from "@/components/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ApexSales" },
      {
        name: "description",
        content:
          "Simple, transparent pricing in Indian rupees. Start free, grow at ₹3,499 per seat, or talk to us about Scale.",
      },
      { property: "og:title", content: "Pricing — ApexSales" },
      {
        property: "og:description",
        content:
          "Simple, transparent pricing in Indian rupees. Start free, grow at ₹3,499 per seat, or talk to us about Scale.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

const PLANS = [
  {
    name: "Starter",
    price: "₹0",
    period: "/mo",
    tagline: "For small teams getting organised",
    features: ["5 seats", "Core pipeline", "30-day history", "Email support"],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹3,499",
    period: "/seat/mo",
    tagline: "For teams that live in their pipeline",
    features: [
      "Unlimited seats",
      "AI insights & deal health",
      "Advanced forecasting",
      "Activity auto-capture",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    tagline: "For enterprises with complex motions",
    features: [
      "SSO & audit logs",
      "Dedicated support",
      "Custom AI models",
      "Security review & SLA",
      "Onboarding assistance",
    ],
    cta: "Book demo",
    highlighted: false,
  },
];

const FAQS = [
  {
    q: "Is there a free trial for Growth?",
    a: "Yes — 14 days, no card required. You keep your data if you decide not to continue.",
  },
  {
    q: "Do you offer discounts for startups?",
    a: "Early-stage startups (under 2 years, under ₹5 Cr raised) get 50% off Growth for the first year.",
  },
  {
    q: "Can I pay annually?",
    a: "Annual billing saves you 20% on Growth. Scale contracts are annual by default.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You can export everything — deals, notes, activities — anytime. After cancellation we keep data for 30 days, then delete it permanently.",
  },
  {
    q: "Is GST included?",
    a: "Prices shown are exclusive of GST. Applicable GST is added at checkout for Indian customers.",
  },
];

const delayStyle = (s: number) => ({ "--anim-delay": `${s}s` }) as CSSProperties;

function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageShell>
      <section className="py-12 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-moss ring-1 ring-black/5 backdrop-blur">
            Pricing
          </span>
          <h1 className="mx-auto mt-5 max-w-[22ch] font-display text-3xl leading-[1.1] text-pretty sm:text-5xl">
            Simple pricing, in rupees, no surprises.
          </h1>
          <span
            className="anim-bar mx-auto mt-5 block h-1.5 w-16 rounded-full bg-vivid"
            style={{ "--bar-w": "4rem", ...delayStyle(0.25) } as CSSProperties}
          />
          <p className="anim-fade mx-auto mt-5 max-w-[48ch] text-base text-moss sm:text-lg" style={delayStyle(0.35)}>
            Start free and upgrade when your team grows. Every plan includes unlimited deals and
            pipeline history exports.
          </p>
        </Reveal>
      </section>

      <section className="grid gap-5 pt-2 sm:grid-cols-3 sm:items-stretch">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 110} className="hover-lift h-full">
            <div
              className={`relative flex h-full flex-col rounded-3xl p-6 sm:p-7 ${
                plan.highlighted
                  ? "plan-glow bg-forest text-paper ring-4 ring-vivid/15 sm:-my-2"
                  : "bg-white/60 ring-1 ring-black/5 backdrop-blur-xl"
              }`}
            >
              {plan.highlighted && (
                <span className="pill-pop absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-vivid px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-forest shadow-lg shadow-vivid/40">
                  Most popular
                </span>
              )}
              <div className="anim-fade flex items-start justify-between gap-4" style={delayStyle(0.2 + i * 0.06)}>
                <div>
                  <p className={`font-display text-lg font-bold ${plan.highlighted ? "text-paper" : "text-forest"}`}>
                    {plan.name}
                  </p>
                  <p className={`mt-1 text-xs ${plan.highlighted ? "text-paper/60" : "text-moss"}`}>{plan.tagline}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-display text-2xl leading-none font-extrabold ${
                      plan.highlighted ? "text-paper" : "text-forest"
                    }`}
                  >
                    {plan.price}
                  </p>
                  <span
                    className={`mt-1 block text-[10px] font-semibold ${
                      plan.highlighted ? "text-vivid" : "text-moss"
                    }`}
                  >
                    {plan.period || "\u00A0"}
                  </span>
                </div>
              </div>
              <ul className="mt-5 flex-1 space-y-3 text-sm">
                {plan.features.map((item, j) => (
                  <li
                    key={item}
                    className={`anim-fade flex items-center gap-3 ${plan.highlighted ? "text-paper/85" : "text-moss"}`}
                    style={delayStyle(0.3 + i * 0.06 + j * 0.07)}
                  >
                    <span
                      className={`size-1.5 shrink-0 rounded-full bg-vivid ${
                        plan.highlighted ? "shadow-[0_0_8px_rgba(43,217,110,0.9)]" : ""
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#faq"
                className={`anim-pop mt-6 inline-flex w-full justify-center rounded-2xl px-4 py-3.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.highlighted
                    ? "bg-vivid text-forest shadow-[0_10px_22px_-6px_rgba(43,217,110,0.5)] hover:shadow-[0_14px_28px_-6px_rgba(43,217,110,0.65)] hover:brightness-105"
                    : "bg-white/85 text-forest ring-1 ring-black/8 hover:bg-white hover:ring-vivid/40"
                }`}
                style={delayStyle(0.55 + i * 0.06)}
              >
                {plan.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mt-8 rounded-[min(1.2vw,18px)] bg-white/55 p-6 text-center ring-1 ring-black/5 backdrop-blur-lg">
        <Reveal>
          <p className="text-sm text-moss">
            Want the full Growth plan breakdown?{" "}
            <Link
              to="/packages"
              className="font-semibold text-forest underline decoration-vivid underline-offset-2 transition-colors hover:text-vivid"
            >
              See packages & features →
            </Link>
          </p>
        </Reveal>
      </section>

      <section id="faq" className="py-12">
        <Reveal>
          <h2 className="font-display text-2xl text-pretty sm:text-3xl">Frequently asked questions</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {FAQS.map((f, i) => {
            const open = openFaq === i;
            return (
              <Reveal key={f.q} delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl bg-white/55 ring-1 ring-black/5 backdrop-blur-lg transition-colors hover:bg-white/75">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span className="font-display text-base font-semibold text-forest sm:text-lg">{f.q}</span>
                    <svg
                      className={`size-4 shrink-0 text-vivid transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-moss sm:px-6 sm:pb-6">{f.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
