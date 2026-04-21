import { Code2, ShieldCheck, Palette, Film } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["PHP", "JavaScript", "React", "TypeScript", "MySQL", "Tailwind CSS"],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    skills: ["Bug Bounty", "Penetration Testing", "OWASP Top 10", "Burp Suite", "Recon"],
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "Graphic Design", "UI / UX", "Branding", "Adobe Suite"],
  },
  {
    icon: Film,
    title: "Media",
    skills: ["Photography", "Videography", "Video Editing", "Lightroom", "Premiere Pro"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      <div className="container">
        <div className="max-w-2xl mb-14 animate-fade-in">
          <p className="font-mono text-sm text-primary mb-3">// 02 — skills</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
            Tools & technologies I work with
          </h2>
          <p className="text-muted-foreground">
            A blend of engineering, security and creative tools — sharpened through real projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <Card
              key={g.title}
              className="bg-gradient-card border-border p-7 shadow-card hover:border-primary/50 transition-smooth animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <g.icon size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <Badge
                    key={s}
                    variant="secondary"
                    className="bg-background/60 border border-border text-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
