import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Rocket,
  Radio,
  Satellite,
  Cpu,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Akshyom Club — Exploring the Cosmos | IcfaiTech Hyderabad" },
      {
        name: "description",
        content:
          "The official space and rocketry club of IcfaiTech, IFHE Hyderabad. CanSat, telemetry, propulsion and student-led space exploration.",
      },
      { property: "og:title", content: "Akshyom Club — Exploring the Cosmos" },
      {
        property: "og:description",
        content:
          "Student-led space and rocketry club at IcfaiTech, IFHE Hyderabad.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Events", href: "#events" },
  { label: "Timeline", href: "#timeline" },
  { label: "Gallery", href: "#gallery" },
  { label: "Sponsors", href: "#sponsors" },
];

const initiatives = [
  {
    icon: Rocket,
    title: "CanSat Mission",
    desc: "Soda-can satellite with autonomous descent and live telemetry.",
  },
  {
    icon: Radio,
    title: "Telemetry Systems",
    desc: "Long-range ground station design and real-time data pipelines.",
  },
  {
    icon: Satellite,
    title: "Payload R&D",
    desc: "Atmospheric sensing payloads for sub-orbital experiments.",
  },
  {
    icon: Cpu,
    title: "Avionics",
    desc: "Custom flight computers, IMU fusion and recovery logic.",
  },
];

const projects = [
  {
    title: "CanSat 2026",
    desc: "Autonomous descent vehicle with gimbaled camera payload.",
    status: "ACTIVE",
  },
  {
    title: "Ground Station Alpha",
    desc: "915 MHz long-range telemetry and live mission dashboard.",
    status: "ACTIVE",
  },
  {
    title: "Model Rocket — Vyom I",
    desc: "Class-1 solid motor rocket targeting 300 m apogee.",
    status: "COMPLETED",
  },
  {
    title: "Atmospheric Probe",
    desc: "High-altitude balloon payload logging pressure and ozone data.",
    status: "COMPLETED",
  },
  {
    title: "Recovery Systems",
    desc: "Dual-deploy parachute electronics with redundant triggers.",
    status: "ACTIVE",
  },
  {
    title: "Sim & Trajectory",
    desc: "OpenRocket and Python tooling for mission simulation.",
    status: "ACTIVE",
  },
];

const timeline = [
  { year: "2022", text: "Club founded at IcfaiTech, Hyderabad" },
  { year: "2023", text: "First model rocket launch — Vyom I" },
  { year: "2024", text: "Ground station prototype goes live" },
  { year: "2025", text: "Selected for national CanSat competition" },
  { year: "2026", text: "Targeting sub-orbital payload integration" },
];

const gallery = [
  "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1457364887197-9150188c107b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&w=900&q=80",
];

const sponsors = ["IFHE", "IcfaiTech", "ISRO eCell", "AeroLabs", "SkyTech", "OrbitOne"];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
        <Rocket className="h-4 w-4" />
      </span>
      <span className="font-display text-base font-semibold tracking-tight">
        Akshyom<span className="text-muted-foreground"> / Club</span>
      </span>
    </a>
  );
}

function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#join"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Join Us <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden text-sm text-muted-foreground"
              aria-label="Menu"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="border-t border-border/60 bg-background md:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* HERO */}
        <section id="about" className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-primary" />
              Akshyom · Est. 2022
            </p>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-[8.5rem]">
              Exploring
              <br />
              the Cosmos.
            </h1>
            <div className="mt-10 grid gap-10 md:grid-cols-12">
              <p className="md:col-span-6 md:col-start-7 text-base text-muted-foreground md:text-lg">
                The Official Space and Rocketry Club of IcfaiTech,
                ICFAI Foundation for Higher Education — Hyderabad. We build,
                fly and recover student-engineered rockets and satellites.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Explore Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#join"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-6 text-sm font-medium hover:bg-secondary"
              >
                Get Involved
              </a>
            </div>
          </div>

          {/* Initiatives */}
          <div className="border-t border-border/60">
            <div className="mx-auto max-w-7xl px-6 py-10">
              <div className="mb-8 flex items-end justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Current Initiatives
                </p>
                <p className="hidden text-xs text-muted-foreground md:block">
                  04 / Live
                </p>
              </div>
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
                {initiatives.map((it) => (
                  <div
                    key={it.title}
                    className="group bg-card p-6 transition-colors hover:bg-secondary"
                  >
                    <it.icon className="h-5 w-5 text-primary" />
                    <h3 className="mt-8 text-base font-semibold">{it.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {it.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Project Focus
                </p>
                <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
                  Our Work
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                A selection of active and completed missions. Each project is
                designed, built and flown by club members.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <article
                  key={p.title}
                  className="group bg-card p-6 transition-colors hover:bg-secondary"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-md bg-secondary">
                    <img
                      src={gallery[i % gallery.length]}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider ${
                        p.status === "ACTIVE"
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          p.status === "ACTIVE"
                            ? "bg-primary animate-pulse"
                            : "bg-muted-foreground/50"
                        }`}
                      />
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section id="timeline" className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="mb-14">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Trajectory
              </p>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
                Milestones
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-0 right-0 top-3 h-px bg-border" />
              <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                {timeline.map((t) => (
                  <div key={t.year} className="relative">
                    <span className="block h-1.5 w-1.5 rounded-full bg-primary ring-4 ring-background" />
                    <p className="mt-5 font-display text-2xl font-semibold">
                      {t.year}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EVENTS / GALLERY */}
        <section id="events" className="border-b border-border/60">
          <div id="gallery" className="mx-auto max-w-7xl px-6 py-24">
            <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Events & Gallery
                </p>
                <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
                  In the Field
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Workshops, launches and design sessions from the past year.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {gallery.map((src, i) => (
                <div
                  key={i}
                  className="aspect-square overflow-hidden rounded-md bg-secondary"
                >
                  <img
                    src={src}
                    alt={`Event ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JOIN */}
        <section id="join" className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="mb-14">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Get Involved
              </p>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
                Join the Mission
              </h2>
            </div>

            <div className="grid gap-16 lg:grid-cols-2">
              {/* Contact */}
              <div className="space-y-10">
                <p className="max-w-md text-base text-muted-foreground">
                  Engineers, designers, writers and dreamers — every role
                  matters in flight. Reach out and we'll find your seat.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="mt-1 h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Email
                      </p>
                      <p className="text-sm">akshyom@icfaitech.ifheindia.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-4 w-4 text-primary" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        Location
                      </p>
                      <p className="text-sm">
                        IcfaiTech, IFHE Campus, Dontanapally, Hyderabad
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  {[Instagram, Linkedin, Github].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                      aria-label="social"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks — we'll be in touch.");
                }}
                className="space-y-6"
              >
                <Field label="Name" name="name" placeholder="Ada Lovelace" />
                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="you@ifheindia.org"
                />
                <Field
                  label="Major / Area of Interest"
                  name="major"
                  placeholder="Avionics, mechanical, software…"
                />
                <div>
                  <label className="block text-xs uppercase tracking-wider text-muted-foreground">
                    How would you like to contribute?
                  </label>
                  <textarea
                    rows={4}
                    className="mt-2 w-full resize-none border-0 border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground"
                    placeholder="Tell us a little about yourself…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Submit <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* SPONSORS */}
        <section id="sponsors">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Supported by
            </p>
            <div className="grid grid-cols-2 items-center gap-x-12 gap-y-10 opacity-70 sm:grid-cols-3 md:grid-cols-6">
              {sponsors.map((s) => (
                <div
                  key={s}
                  className="text-center font-display text-lg font-semibold tracking-tight text-muted-foreground grayscale transition hover:text-foreground"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <Logo />
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Akshyom Club · IcfaiTech, IFHE Hyderabad
          </p>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full border-0 border-b border-border bg-transparent py-2 text-sm outline-none transition-colors focus:border-foreground"
      />
    </div>
  );
}
