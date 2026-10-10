import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — ApexSales" },
      {
        name: "description",
        content:
          "How ApexSales collects, uses, and protects your data. Plain-language privacy policy for the ApexSales revenue intelligence CRM.",
      },
      { property: "og:title", content: "Privacy Policy — ApexSales" },
      {
        property: "og:description",
        content:
          "How ApexSales collects, uses, and protects your data. Plain-language privacy policy for the ApexSales revenue intelligence CRM.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    title: "What we collect",
    copy: "Account details (name, work email), the CRM data you connect (deals, contacts, activities), and product usage data that helps us improve ApexSales. We never sell your data to anyone.",
  },
  {
    title: "How we use it",
    copy: "Your data powers the product: pipeline views, forecasts, and AI insights for your team only. AI models are trained per-customer — your deal data is never used to improve models for other customers.",
  },
  {
    title: "Where it's stored",
    copy: "Data is encrypted in transit (TLS 1.3) and at rest (AES-256). Primary storage is in Indian data centres, with encrypted backups in a second region.",
  },
  {
    title: "Who can access it",
    copy: "Only you and the teammates you invite. A small number of engineers can access systems under strict audit logging, and only to resolve issues you've reported.",
  },
  {
    title: "Your rights",
    copy: "Export or delete your data anytime from settings. On account deletion, all data is removed within 30 days, including from backups. For any request, write to privacy@apexsales.example.",
  },
  {
    title: "Cookies & analytics",
    copy: "We use essential cookies to keep you signed in, and privacy-respecting product analytics (no third-party ad trackers) to understand feature usage.",
  },
];

function PrivacyPage() {
  return (
    <PageShell>
      <section className="py-12">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-moss ring-1 ring-black/5 backdrop-blur">
          Privacy
        </span>
        <h1 className="mt-5 max-w-[20ch] font-display text-3xl leading-[1.1] text-pretty sm:text-5xl">
          Your pipeline data stays yours.
        </h1>
        <p className="mt-5 max-w-[52ch] text-base text-moss sm:text-lg">
          Last updated: September 2026. This policy explains, in plain language, what ApexSales
          collects and how we protect it.
        </p>
      </section>

      <section className="grid gap-4 pb-12 sm:grid-cols-2">
        {SECTIONS.map((s) => (
          <div key={s.title} className="rounded-[min(1.2vw,18px)] bg-white/55 p-6 ring-1 ring-black/5 backdrop-blur-lg">
            <h2 className="font-display text-xl">{s.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-moss">{s.copy}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
