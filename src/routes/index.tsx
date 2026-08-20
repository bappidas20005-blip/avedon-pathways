import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  BookOpen,
  Building2,
  Compass,
  Cpu,
  GraduationCap,
  HeartPulse,
  MapPin,
  Phone,
  MessageCircle,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FindYourPath } from "@/components/find-your-path";
import heroImage from "@/assets/hero-students.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avedon Education — One Ecosystem. Multiple Pathways." },
      {
        name: "description",
        content:
          "Avedon Education unites EXSchool, Scordemy, Scordemy IAS, Mind Power Academy and Avedon AI — school education, APSC, UPSC, NEET, JEE and EdTech across Assam.",
      },
      {
        property: "og:title",
        content: "Avedon Education — One Ecosystem. Multiple Pathways.",
      },
      {
        property: "og:description",
        content:
          "From school education to competitive examinations, Avedon Education is building a complete learning ecosystem for students across Assam and beyond.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const brands = [
  {
    name: "EXSchool",
    tag: "School Education",
    icon: BookOpen,
    detail: "Classes IX–XII",
    body: "Foundation • Boards • Competitive preparation",
  },
  {
    name: "Scordemy",
    tag: "Competitive Exam Preparation",
    icon: Target,
    detail: "Government Exams",
    body: "APSC • UPSC • SSC • Banking • ADRE • TET",
  },
  {
    name: "Scordemy IAS",
    tag: "Civil Services Preparation",
    icon: Building2,
    detail: "Competition Care",
    body: "UPSC • APSC • IAS • Civil Services",
  },
  {
    name: "Mind Power Academy",
    tag: "NEET & JEE Preparation",
    icon: HeartPulse,
    detail: "Medical & Engineering",
    body: "Integrated coaching • Tests • Mentorship",
  },
  {
    name: "Avedon AI",
    tag: "AI-Powered Education",
    icon: Cpu,
    detail: "Technology Layer",
    body: "AI tools • Educator technology • Smart learning",
  },
];

const why = [
  {
    icon: Cpu,
    title: "Technology",
    body: "A digital learning layer built in-house, not bolted on.",
  },
  {
    icon: Users,
    title: "Mentorship",
    body: "Small cohorts guided by mentors who cleared the exam.",
  },
  {
    icon: Compass,
    title: "Regional Education",
    body: "Assamese, Hindi and English — learning in the language you think in.",
  },
  {
    icon: Sparkles,
    title: "Results",
    body: "Selections across APSC, UPSC, SSC, NEET and JEE.",
  },
  {
    icon: Brain,
    title: "Personal Attention",
    body: "Performance tracking, doubt support and parent communication.",
  },
];

const stats = [
  { value: "30K+", label: "Subscribed learners" },
  { value: "5", label: "Education brands" },
  { value: "3", label: "Languages of instruction" },
  { value: "10+", label: "Examinations covered" },
];

const results = [
  { rank: "APSC", note: "Assam Civil Services", year: "2025" },
  { rank: "UPSC", note: "Civil Services Examination", year: "2025" },
  { rank: "NEET", note: "Medical Entrance", year: "2025" },
  { rank: "ADRE", note: "Assam Direct Recruitment", year: "2025" },
];

const faculty = [
  { name: "Madhusmita Phukan", role: "Ex-ACS • APSC Mentor" },
  { name: "Faculty Name", role: "Polity & Governance" },
  { name: "Faculty Name", role: "Physics • NEET/JEE" },
  { name: "Faculty Name", role: "Quantitative Aptitude" },
];

const centres = [
  { city: "Guwahati", area: "Beltola" },
  { city: "Guwahati", area: "Silpukhuri" },
  { city: "Guwahati", area: "Six Mile" },
];

function Index() {
  return (
    <div className="min-h-screen bg-transparent">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand-soft px-4 py-1.5 font-display text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              The Avedon Education Ecosystem
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
              Building the <span className="text-brand">Leaders</span> of Tomorrow
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              From school education to competitive examinations, Avedon Education is
              building a complete learning ecosystem for students across Assam and
              beyond.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full font-display">
                <a href="#brands">
                  Explore Our Brands <ArrowRight />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full font-display"
              >
                <a href="#find-your-path">
                  <GraduationCap /> Find Your Program
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] gradient-brand opacity-10 blur-2xl" />
            <img
              src={heroImage}
              alt="Students learning at an Avedon Education classroom in Guwahati"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="border-y border-border bg-card/60 backdrop-blur-xl py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Our brands
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold sm:text-5xl">
            One Education Ecosystem. Multiple Pathways.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((brand) => (
              <article
                key={brand.name}
                className="group flex flex-col rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-elegant"
              >
                <brand.icon className="size-8 text-brand" />
                <h3 className="mt-6 text-2xl font-semibold">{brand.name}</h3>
                <p className="mt-1 font-display text-sm font-medium text-brand">
                  {brand.tag}
                </p>
                <p className="mt-5 text-sm font-medium">{brand.detail}</p>
                <p className="mt-1 text-sm text-muted-foreground">{brand.body}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-brand-deep"
                >
                  Explore {brand.name}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FindYourPath />

      {/* Why Avedon */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                Why Avedon
              </p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                Our mission is not just to teach students. It's to build capable
                individuals who can shape the future.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {why.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-card p-6"
                >
                  <item.icon className="size-6 text-brand" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-8 py-10">
                <p className="font-display text-4xl font-semibold text-brand">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="bg-brand-deep py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
            Results
          </p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Our Students. Our Success.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r) => (
              <div
                key={r.note}
                className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7"
              >
                <p className="font-display text-3xl font-semibold">{r.rank}</p>
                <p className="mt-3 text-sm text-primary-foreground/80">{r.note}</p>
                <p className="mt-1 text-xs text-primary-foreground/55">{r.year}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-primary-foreground/60">
            Selection details are published after verification with each brand.
          </p>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Faculty
          </p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Learn From People Who've Done It
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {faculty.map((f, i) => (
              <div
                key={i}
                className="rounded-3xl border border-border bg-card p-7 transition-shadow hover:shadow-elegant"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-soft font-display text-xl font-semibold text-brand">
                  {f.name.charAt(0)}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs + Centres */}
      <section id="programs" className="border-y border-border bg-card/60 backdrop-blur-xl py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Programs
            </p>
            <h2 className="mt-3 text-4xl font-semibold">Browse by goal</h2>
            <div className="mt-8 space-y-4">
              {[
                { group: "School", items: "Class IX • X • XI • XII" },
                { group: "Medical", items: "NEET • Foundation" },
                { group: "Engineering", items: "JEE • Foundation" },
                { group: "Civil Services", items: "UPSC • APSC" },
                { group: "Government Jobs", items: "ADRE • SSC • Banking • Railways • TET" },
              ].map((g) => (
                <div
                  key={g.group}
                  className="flex items-center justify-between rounded-2xl border border-border bg-background px-6 py-5"
                >
                  <div>
                    <p className="font-display font-semibold">{g.group}</p>
                    <p className="text-sm text-muted-foreground">{g.items}</p>
                  </div>
                  <ArrowRight className="size-4 text-brand" />
                </div>
              ))}
            </div>
          </div>

          <div id="centres">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Centres
            </p>
            <h2 className="mt-3 text-4xl font-semibold">Find a Centre Near You</h2>
            <div className="mt-8 space-y-4">
              {centres.map((c) => (
                <div
                  key={c.area}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-background px-6 py-5"
                >
                  <MapPin className="size-5 text-brand" />
                  <div>
                    <p className="font-display font-semibold">{c.city}</p>
                    <p className="text-sm text-muted-foreground">{c.area}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-3xl gradient-brand p-8 text-primary-foreground">
              <Sparkles className="size-6" />
              <h3 className="mt-4 text-2xl font-semibold">
                The Future of Education is Intelligent
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Avedon AI powers tutoring, test generation, study planning and
                performance analytics across every brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="contact" className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Admissions
            </p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Your Journey Starts Here.
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Tell us what you're preparing for and an academic counsellor from the
              right brand will get in touch.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="outline" className="rounded-full font-display">
                <a href="tel:+910000000000">
                  <Phone /> Call
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full font-display">
                <a href="https://wa.me/910000000000">
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <form
            className="rounded-3xl border border-border bg-card p-8 shadow-elegant"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-4">
              <input
                required
                placeholder="Full name"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
              />
              <input
                required
                type="tel"
                placeholder="Phone number"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
              />
              <select className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand">
                <option>I'm interested in…</option>
                <option>School</option>
                <option>NEET / JEE</option>
                <option>APSC</option>
                <option>UPSC</option>
                <option>Government Exams</option>
                <option>Avedon AI</option>
                <option>Careers</option>
              </select>
              <textarea
                rows={3}
                placeholder="Message (optional)"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand"
              />
              <Button type="submit" size="lg" className="rounded-full font-display">
                Get Free Counselling
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <div className="sticky bottom-0 z-40 grid grid-cols-3 border-t border-border bg-card lg:hidden">
        <a href="tel:+910000000000" className="flex flex-col items-center gap-1 py-3 text-xs">
          <Phone className="size-4 text-brand" /> Call
        </a>
        <a
          href="https://wa.me/910000000000"
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs"
        >
          <MessageCircle className="size-4 text-brand" /> WhatsApp
        </a>
        <a href="#contact" className="flex flex-col items-center gap-1 py-3 text-xs">
          <GraduationCap className="size-4 text-brand" /> Enquire
        </a>
      </div>

      <SiteFooter />
    </div>
  );
}
