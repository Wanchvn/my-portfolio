import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Ovasense from "@/assets/ovaSense.png";
import hackerone from "@/assets/hackerone.png";
import php from "@/assets/php.png";
import design from "@/assets/design.png";
import photography from "@/assets/photography.png";
import rahma from "@/assets/rahma.jpg";

type Category = "All" | "Tech" | "Design" | "Media";

const projects: {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  tags: string[];
  image?: string;
  link?: string;
  repo?: string;
}[] = [
  {
    title: "OvaSense",
    description:
      "Startup concept — a smart health-tech platform improving women's wellness in Ghana through accessible tracking and education.",
    category: "Tech",
    tags: ["Startup", "Health", "React"],
    image: Ovasense,
    link: "#",
  },
  {
    title: "HackerOne Bug Bounty Findings",
    description:
      "Disclosed vulnerabilities ranging from IDOR to XSS across various programs — improving security for thousands of users.",
    category: "Tech",
    tags: ["Security", "HackerOne", "Pentesting"],
    image: hackerone,
    link: "https://hackerone.com/",
  },
  {
    title: "PHP Web Application Suite",
    description:
      "Custom PHP + MySQL applications: dashboards, school management, and e-commerce systems built for local businesses.",
    category: "Tech",
    tags: ["PHP", "MySQL", "Backend"],
    image: php,
    link: "#",
  },
  {
    title: "Brand Identity Designs",
    description:
      "Logo systems, social media kits and marketing visuals crafted in Figma & Adobe Illustrator for emerging brands.",
    category: "Design",
    tags: ["Figma", "Branding", "Logo"],
    image: design,
    link: "#",
  },
  {
    title: "Photography Portfolio",
    description:
      "Event, portrait and editorial photography — capturing real moments with cinematic color grading.",
    category: "Media",
    tags: ["Photography", "Editorial"],
    image: photography,
    link: "#",
  },
  {
    title: "Rahma TV Productions",
    description:
      "Camera operation and post-production work for TV shows and live programs at Rahma TV Network.",
    category: "Media",
    tags: ["Videography", "Broadcast"],
    image: rahma,
    link: "#",
  },
];

const categories: Category[] = ["All", "Tech", "Design", "Media"];

const Projects = () => {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-10 animate-fade-in">
          <p className="font-mono text-sm text-primary mb-3">// 03 — projects</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
            Selected work across <span className="text-gradient">tech, design & media</span>
          </h2>
          <p className="text-muted-foreground">
            A mix of code, security research and creative output — filter to explore.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <Button
              key={c}
              variant={active === c ? "hero" : "outline"}
              size="sm"
              onClick={() => setActive(c)}
              className="rounded-full"
            >
              {c}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <Card
              key={p.title}
              className="group bg-gradient-card border-border overflow-hidden shadow-card hover:-translate-y-1 hover:border-primary/50 transition-smooth animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Image placeholder — drop your project images here */}
              <div className="relative aspect-[16/10] bg-secondary overflow-hidden border-b border-border">
                <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                   <img src={p.image} alt={p.title} className="object-cover w-full h-full" />
                  
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                    {p.category}
                  </Badge>
                  <div className="flex gap-2 text-muted-foreground">
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" className="hover:text-primary transition-smooth">
                        <Github size={16} />
                      </a>
                    )}
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer" className="hover:text-primary transition-smooth">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </Card>

            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
