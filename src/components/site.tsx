import { Link } from "@tanstack/react-router";
import logoMark from "@/assets/logo-mark.png";
import { ChatWidget } from "@/components/chat-widget";

// TODO: replace with the real WhatsApp business number (country code + number, no + or spaces).
const WHATSAPP_NUMBER = "919000000000";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'd like to know more about ApexSales."
)}`;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            <img src={logoMark} alt="ApexSales logo" width={32} height={32} className="size-8" />
            <span className="font-display text-xl text-forest">ApexSales</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 text-sm font-medium text-moss md:flex">
          {[
            { to: "/", label: "Home" },
            { to: "/product", label: "Product" },
            { to: "/customers", label: "Customers" },
            { to: "/pricing", label: "Pricing" },
            { to: "/blog", label: "Blog" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-full px-3.5 py-1.5 transition-colors hover:text-forest"
              activeProps={{
                className: "bg-vivid/15 font-semibold text-forest ring-1 ring-vivid/40",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/"
            hash="demo"
            className="hidden sm:inline-flex items-center rounded-full bg-forest/5 px-4 py-2 text-sm font-semibold text-forest ring-1 ring-forest/15 transition-colors hover:bg-forest/10"
          >
            Book demo
          </Link>
          <a
            href="https://apex.salesflowhub.cloud"
            className="btn-shine inline-flex items-center rounded-full bg-forest px-4 py-2 text-sm font-semibold text-paper shadow-sm transition-colors hover:bg-forest/90"
          >
            Launch CRM &rarr;
          </a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const productLinks = [
    { label: "Product", to: "/product" },
    { label: "AI Actions", to: "/assistant" },
    { label: "Pricing", to: "/pricing" },
    { label: "Why ApexSales", to: "/compare" },
    { label: "Customers", to: "/customers" },
  ];
  const companyLinks = [
    { label: "Blog", to: "/blog" },
    { label: "Guides & resources", to: "/guides" },
    { label: "Privacy policy", to: "/privacy" },
  ];

  return (
    <footer className="relative z-10 mt-16 border-t border-black/5 bg-white/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-2">
                <img src={logoMark} alt="ApexSales logo" width={32} height={32} loading="lazy" className="size-8" />
                <p className="font-display text-lg">ApexSales</p>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-moss">
              Revenue intelligence CRM for Indian sales teams — pipeline, AI
              insights, forecasting and activity tracking in one place.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-forest/5 px-3 py-1.5 text-xs font-semibold text-forest ring-1 ring-forest/15 transition-colors hover:bg-forest/10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-3.5"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-forest uppercase">
              Product
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-sm text-moss">
              {productLinks.map((l) => (
                <Link key={l.to} to={l.to} className="transition-colors hover:text-forest">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-forest uppercase">
              Company
            </p>
            <nav className="mt-3 flex flex-col gap-2 text-sm text-moss">
              {companyLinks.map((l) => (
                <Link key={l.to} to={l.to} className="transition-colors hover:text-forest">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-moss">© 2026 ApexSales, Inc. All rights reserved.</p>
          <p className="text-xs text-moss">
            Made in India · Prices in INR, GST extra as applicable
          </p>
        </div>
      </div>
    </footer>
  );
}


export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-paper font-body text-forest">
      {/* Organic mist background — layered drifting glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* fine dot texture, fading out toward the content */}
        <div className="dot-grid absolute inset-0 opacity-70" />
        {/* soft orbs */}
        <div className="orb-a glow-a absolute -top-28 -left-24 h-[26rem] w-[26rem] rounded-full bg-vivid/20 blur-3xl" />
        <div className="orb-b absolute top-44 -right-32 h-[24rem] w-[24rem] rounded-full bg-mist blur-3xl" />
        <div className="orb-c absolute top-[60%] left-[8%] h-80 w-80 rounded-full bg-moss/15 blur-3xl" />
        <div className="orb-b absolute bottom-[-6rem] right-[18%] h-72 w-72 rounded-full bg-vivid/15 blur-3xl" />
        <div className="orb-a absolute top-[35%] left-[45%] h-64 w-64 rounded-full bg-mist/80 blur-3xl" />
      </div>
      <SiteHeader />
      <main className="relative z-10 mx-auto max-w-6xl px-6">{children}</main>
      <SiteFooter />
      <ChatWidget />
    </div>
  );
}
