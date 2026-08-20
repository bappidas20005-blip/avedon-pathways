import logo from "@/assets/avedon-logo.png.asset.json";

const columns = [
  {
    title: "Our Brands",
    links: ["EXSchool", "Scordemy", "Scordemy IAS", "Medical & JEE", "Avedon AI"],
  },
  {
    title: "Programs",
    links: ["School", "NEET", "JEE", "APSC", "UPSC", "Government Exams"],
  },
  {
    title: "Company",
    links: ["About", "Leadership", "Careers", "News", "Events"],
  },
  {
    title: "Support",
    links: ["Contact", "FAQs", "Student Login", "Parent Support"],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-brand-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-2xl bg-background p-3">
              <img src={logo.url} alt="Avedon Education" className="h-10 w-auto" />
            </div>
            <p className="mt-5 font-display text-lg">
              Education • Technology • Opportunity
            </p>
            <p className="mt-3 max-w-sm text-sm text-primary-foreground/70">
              A complete learning ecosystem for students across Assam and beyond.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground/60">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Avedon Education. All rights reserved.</p>
          <p>Guwahati, Assam, India</p>
        </div>
      </div>
    </footer>
  );
}
