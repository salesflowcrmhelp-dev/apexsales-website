import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers — ApexSales" },
      {
        name: "description",
        content:
          "Sales teams across India and beyond trust ApexSales to forecast accurately and close more deals. Read their stories.",
      },
      { property: "og:title", content: "Customers — ApexSales" },
      {
        property: "og:description",
        content:
          "Sales teams across India and beyond trust ApexSales to forecast accurately and close more deals. Read their stories.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/customers" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/customers" }],
  }),
  component: CustomersPage,
});

const STORIES = [
  {
    company: "Meridian Systems",
    industry: "B2B SaaS · Bengaluru",
    quote:
      "Our forecast accuracy went from guesswork to within 4% of actuals. Board meetings are a lot calmer now.",
    person: "Priya Nair, VP Sales",
    stat: "96% forecast accuracy",
  },
  {
    company: "Fieldstone Logistics",
    industry: "Logistics · Mumbai",
    quote:
      "Reps stopped logging activities manually. That alone gave each rep back nearly a day a week to actually sell.",
    person: "Rohit Malhotra, Sales Director",
    stat: "7 hrs saved per rep / week",
  },
  {
    company: "Brightline Health",
    industry: "HealthTech · Delhi NCR",
    quote:
      "The AI flags at-risk deals two to three weeks before we'd have caught them ourselves. We rescued ₹2.1 Cr last quarter.",
    person: "Ananya Iyer, Head of Revenue",
    stat: "₹2.1 Cr pipeline rescued",
  },
];

const METRICS = [
  { value: "94%", label: "of reps hit forecast" },
  { value: "2.3x", label: "faster deal review" },
  { value: "₹150 Cr", label: "revenue under management" },
  { value: "4.9", label: "average customer rating" },
];

function CustomersPage() {
  return (
    <PageShell>
      <Reveal>
        <section className="py-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-moss ring-1 ring-black/5 backdrop-blur">
            Customers
          </span>
          <h1 className="mt-5 max-w-[20ch] font-display text-3xl leading-[1.1] text-pretty sm:text-5xl">
            Teams that stopped guessing their quarter.
          </h1>
          <p className="mt-5 max-w-[52ch] text-base text-moss sm:text-lg">
            From early-stage startups to public companies, revenue teams use ApexSales to see their
            pipeline clearly and act before deals slip.
          </p>
        </section>
      </Reveal>

      <section className="rounded-[min(1.4vw,20px)] bg-forest/95 p-8 ring-1 ring-forest sm:p-10">
        <div className="grid gap-8 sm:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 110}>
              <div>
                <p className="font-display text-4xl text-vivid">{m.value}</p>
                <p className="mt-1 text-sm text-paper/70">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid gap-4 py-12 lg:grid-cols-3">
        {STORIES.map((s, i) => (
          <Reveal key={s.company} delay={i * 100} className="hover-lift">
            <div className="h-full rounded-[min(1.2vw,18px)] bg-white/55 p-6 ring-1 ring-black/5 backdrop-blur-lg transition-colors hover:bg-white/75">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-moss">{s.industry}</p>
              <h2 className="mt-1 font-display text-xl">{s.company}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-forest/90">“{s.quote}”</p>
              <p className="mt-4 text-xs text-moss">{s.person}</p>
              <p className="mt-4 inline-flex w-fit rounded-full bg-vivid/20 px-3 py-1 text-xs font-semibold text-forest">
                {s.stat}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="pb-12">
          <div className="rounded-[min(1.4vw,20px)] bg-white/60 p-8 text-center ring-1 ring-black/5 backdrop-blur-xl sm:p-10">
            <h2 className="font-display text-2xl text-pretty sm:text-3xl">Join 400+ revenue teams</h2>
            <p className="mx-auto mt-3 max-w-[44ch] text-sm text-moss">
              Start free with your team today, or book a demo to see ApexSales on your own data.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/pricing"
                className="inline-flex items-center rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-forest ring-1 ring-vivid transition-transform hover:scale-[1.02]"
              >
                Start free
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center rounded-full bg-white/70 px-6 py-3 text-sm font-medium text-forest ring-1 ring-black/5 backdrop-blur transition-colors hover:bg-white/90"
              >
                Explore the product
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </PageShell>
  );
}
