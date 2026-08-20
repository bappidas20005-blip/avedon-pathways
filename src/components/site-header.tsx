import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import logo from "@/assets/avedon-logo.png.asset.json";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "About", href: "#about" },
  { label: "Our Brands", href: "#brands" },
  { label: "Programs", href: "#programs" },
  { label: "Results", href: "#results" },
  { label: "Faculty", href: "#faculty" },
  { label: "Centres", href: "#centres" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="Avedon Education" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display text-sm font-medium text-muted-foreground transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="font-display text-sm font-medium text-muted-foreground hover:text-brand"
          >
            Student Login
          </a>
          <Button asChild className="rounded-full font-display">
            <a href="#find-your-path">
              <GraduationCap /> Find Your Program
            </a>
          </Button>
        </div>

        <button
          className="rounded-full border border-border p-2 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-sm font-medium text-muted-foreground"
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2 rounded-full font-display">
              <a href="#find-your-path" onClick={() => setOpen(false)}>
                Find Your Program
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
