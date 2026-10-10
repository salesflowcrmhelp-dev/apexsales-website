import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — ApexSales" },
      {
        name: "description",
        content:
          "Practical notes on pipeline hygiene, forecasting discipline, and running a modern revenue team — from the ApexSales team.",
      },
      { property: "og:title", content: "Blog — ApexSales" },
      {
        property: "og:description",
        content:
          "Practical notes on pipeline hygiene, forecasting discipline, and running a modern revenue team.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const POSTS = [
  {
    tag: "Forecasting",
    date: "12 Sep 2026",
    title: "Why your forecast misses every quarter (and how to fix it)",
    excerpt:
      "Most forecast misses are not pipeline problems — they are inspection problems. Here is the 20-minute weekly ritual that keeps commit numbers honest.",
  },
  {
    tag: "Pipeline",
    date: "28 Aug 2026",
    title: "The 6-stage pipeline: enough structure to act, enough freedom to sell",
    excerpt:
      "Too many stages and reps game them; too few and you lose signal. A field-tested stage design for B2B sales teams in India.",
  },
  {
    tag: "AI",
    date: "9 Aug 2026",
    title: "What 'AI insights' should actually tell a sales manager",
    excerpt:
      "Not dashboards — decisions. The three signals worth surfacing every morning, and the three that just add noise.",
  },
  {
    tag: "Activity",
    date: "22 Jul 2026",
    title: "Auto-capture killed our CRM discipline problem",
    excerpt:
      "How Fieldstone Logistics removed manual logging for 40 reps and clawed back a day a week of selling time.",
  },
];

function BlogPage() {
  return (
    <PageShell>
      <Reveal>
        <section className="py-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-moss ring-1 ring-black/5 backdrop-blur">
            Blog
          </span>
          <h1 className="mx-auto mt-5 max-w-[22ch] font-display text-3xl leading-[1.1] text-pretty sm:text-5xl">
            Notes from the revenue floor.
          </h1>
          <p className="mx-auto mt-5 max-w-[48ch] text-base text-moss sm:text-lg">
            Short, practical writing on pipeline, forecasting, and the daily habits of teams that
            hit their number.
          </p>
        </section>
      </Reveal>

      <section className="grid gap-4 sm:grid-cols-2">
        {POSTS.map((post, i) => (
          <Reveal key={post.title} delay={i * 90} className="hover-lift">
            <article className="h-full rounded-[min(1.2vw,18px)] bg-white/55 p-6 ring-1 ring-black/5 backdrop-blur-lg transition-colors hover:bg-white/75">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-mist px-3 py-0.5 text-xs font-semibold text-forest">
                  {post.tag}
                </span>
                <span className="text-xs text-moss">{post.date}</span>
              </div>
              <h2 className="mt-4 font-display text-xl text-pretty">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-moss">{post.excerpt}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="py-12 text-center">
          <p className="text-sm text-moss">Want these in your inbox once a month?</p>
          <Link
            to="/"
            className="mt-4 inline-flex items-center rounded-full bg-vivid px-6 py-3 text-sm font-semibold text-forest ring-1 ring-vivid transition-transform hover:scale-[1.02]"
          >
            Book a demo
          </Link>
        </section>
      </Reveal>
    </PageShell>
  );
}
