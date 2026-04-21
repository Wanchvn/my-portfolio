import { GraduationCap, Shield, Camera, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const items = [
  {
    icon: GraduationCap,
    title: "Computer Science",
    text: "Student passionate about software engineering, systems and applied security.",
  },
  {
    icon: Shield,
    title: "Bug Bounty",
    text: "Active security researcher on HackerOne — finding and reporting real-world vulnerabilities.",
  },
  {
    icon: Camera,
    title: "Photography & Video",
    text: "Capturing stories through professional photography and cinematic videography.",
  },
  {
    icon: Lightbulb,
    title: "Made in Ghana",
    text: "Building real-world solutions for African problems — from web apps to startups.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-14 animate-fade-in">
          <p className="font-mono text-sm text-primary mb-3">// 01 — about me</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
            A multi-skilled creative at the <span className="text-gradient">intersection of code & art</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I'm a computer science student in Ghana with a deep curiosity for how
            things work — and how to break them responsibly. By day I write PHP, JavaScript
            and React; by night I hunt bugs on HackerOne, design in Figma, and shoot
            photo & video projects. My goal is simple: use technology and creativity to
            build solutions that matter.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <Card
              key={it.title}
              className="bg-gradient-card border-border p-6 shadow-card hover:-translate-y-1 hover:border-primary/50 transition-smooth animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <it.icon size={20} />
              </div>
              <h3 className="font-display font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
