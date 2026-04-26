import { Mail, Linkedin, Github, Instagram, Twitter, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Mail, label: "Email", value: "mercy4805@gmail.com", href: "mailto:mercy4805@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/iddrisu-umar-farouk", href: "https://www.linkedin.com/in/iddrisu-umar-farouk-186384260/" },
  { icon: Github, label: "GitHub", value: "@wanchvn", href: "https://github.com/Wanchvn" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="max-w-2xl mb-12 animate-fade-in">
          <p className="font-mono text-sm text-primary mb-3">// 05 — contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">
            Let's <span className="text-gradient">build something</span> together
          </h2>
          <p className="text-muted-foreground">
            Open to collaborations, freelance projects, security research and full-time opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {socials.map((s, i) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="block animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Card className="bg-gradient-card border-border p-6 shadow-card hover:-translate-y-1 hover:border-primary/50 transition-smooth h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <s.icon size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-muted-foreground uppercase">{s.label}</p>
                    <p className="font-medium truncate">{s.value}</p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <Card className="bg-gradient-card border-border p-8 sm:p-12 mt-10 text-center shadow-card animate-fade-in">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
            Got a project in mind?
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Whether it's a website, a security audit, a brand or a shoot — I'd love to hear about it.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="lg">
              <a href="mailto:hello@example.com">
                <Send size={18} className="mr-1" /> Get in touch
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="../../public/cv.docx" download>Download CV</a>
            </Button>
          </div>
          <div className="flex justify-center gap-3 mt-8">
            {[Github, Linkedin, Twitter, Instagram, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2.5 rounded-lg border border-border glass hover:text-primary hover:border-primary transition-smooth"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
