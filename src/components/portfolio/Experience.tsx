import { Briefcase, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const items = [
  {
    icon: ShieldCheck,
    role: "Security Researcher",
    company: "HackerOne",
    period: "2023 — Present",
    desc: "Active bug bounty hunter — discovering and responsibly disclosing security vulnerabilities across web platforms. Focused on OWASP Top 10, business-logic flaws and access control issues.",
  },
  {
    icon: Briefcase,
    role: "Cameraman",
    company: "Rahma TV Network",
    period: "2022 — Present",
    desc: "Operating professional camera equipment for live and recorded programs. Contributing to lighting, framing and post-production for TV broadcasts.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="max-w-2xl mb-12 animate-fade-in">
          <p className="font-mono text-sm text-primary mb-3">// 04 — experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
            Where I've worked & researched
          </h2>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border" aria-hidden />
          <div className="space-y-6">
            {items.map((it, i) => (
              <div key={it.role} className="relative pl-16 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="absolute left-0 top-1 w-11 h-11 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow">
                  <it.icon size={18} />
                </div>
                <Card className="bg-gradient-card border-border p-6 shadow-card hover:border-primary/50 transition-smooth">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h3 className="font-display text-lg font-semibold">
                      {it.role} <span className="text-primary">@ {it.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-muted-foreground">{it.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
