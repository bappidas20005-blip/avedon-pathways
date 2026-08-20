import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Path = {
  id: string;
  label: string;
  emoji: string;
  brand: string;
  programs: string[];
};

const paths: Path[] = [
  {
    id: "school",
    label: "School Student",
    emoji: "🧑‍🎓",
    brand: "EXSchool",
    programs: [
      "Class IX Foundation",
      "Class X Board + Foundation",
      "Class XI Science",
      "Class XII Board Intensive",
    ],
  },
  {
    id: "neet",
    label: "NEET Aspirant",
    emoji: "🩺",
    brand: "Mind Power Academy",
    programs: [
      "NEET Two-Year Integrated",
      "NEET Dropper Batch",
      "NEET Test Series",
      "Medical Mentorship",
    ],
  },
  {
    id: "jee",
    label: "JEE Aspirant",
    emoji: "⚙️",
    brand: "Mind Power Academy",
    programs: [
      "JEE Foundation",
      "JEE Main + Advanced",
      "JEE Crash Course",
      "Engineering Mentorship",
    ],
  },
  {
    id: "upsc",
    label: "UPSC Aspirant",
    emoji: "🏛️",
    brand: "Scordemy IAS",
    programs: [
      "UPSC Foundation",
      "UPSC Prelims",
      "UPSC Mains",
      "Interview Guidance",
      "Test Series",
      "1:1 Mentorship",
    ],
  },
  {
    id: "apsc",
    label: "APSC Aspirant",
    emoji: "🏛️",
    brand: "Scordemy Competition Care",
    programs: [
      "APSC Foundation",
      "APSC Prelims",
      "APSC Mains",
      "Assam Specific Module",
      "Answer Writing",
    ],
  },
  {
    id: "govt",
    label: "Government Exam Aspirant",
    emoji: "📚",
    brand: "Scordemy",
    programs: ["ADRE", "SSC", "Banking", "Railways", "TET"],
  },
  {
    id: "educator",
    label: "Educator",
    emoji: "👨‍🏫",
    brand: "Avedon AI",
    programs: ["Teacher Assistant", "AI Question Generator", "Performance Analytics"],
  },
  {
    id: "institution",
    label: "Institution",
    emoji: "🏫",
    brand: "Avedon AI",
    programs: ["Institution Management", "Smart Classrooms", "Assessment Platform"],
  },
];

export function FindYourPath() {
  const [active, setActive] = useState<Path>(paths[3] as Path);

  return (
    <section id="find-your-path" className="bg-brand-soft py-24">
      <div className="mx-auto max-w-7xl px-5">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Find your path
        </p>
        <h2 className="mt-3 max-w-2xl text-4xl font-semibold sm:text-5xl">
          What are you preparing for?
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-wrap gap-3">
            {paths.map((p) => {
              const isActive = p.id === active.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p)}
                  className={`rounded-full border px-5 py-3 font-display text-sm font-medium transition-all ${
                    isActive
                      ? "border-brand bg-brand text-primary-foreground shadow-elegant"
                      : "border-border bg-card text-foreground hover:border-brand/50"
                  }`}
                >
                  <span className="mr-2">{p.emoji}</span>
                  {p.label}
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-elegant">
            <p className="text-sm text-muted-foreground">Recommended for you</p>
            <h3 className="mt-1 text-2xl font-semibold text-brand-deep">
              {active.brand}
            </h3>
            <ul className="mt-6 space-y-3">
              {active.programs.map((prog) => (
                <li
                  key={prog}
                  className="flex items-center justify-between border-b border-border/70 pb-3 text-sm"
                >
                  <span>{prog}</span>
                  <ArrowRight className="size-4 text-brand" />
                </li>
              ))}
            </ul>
            <Button asChild className="mt-7 w-full rounded-full font-display">
              <a href="#contact">View Programs</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
