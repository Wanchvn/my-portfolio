import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-hero"
    >
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-16">
        <div className="space-y-7 animate-fade-in-slow">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border glass text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
            Available for opportunities · Ghana 🇬🇭
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="text-gradient">Iddrisu Umar Farouk</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-medium">
            Tech Creative <span className="text-primary">|</span> Security Researcher{" "}
            <span className="text-primary">|</span> Developer
          </p>

          <p className="text-base text-muted-foreground max-w-xl leading-relaxed">
            Passionate about technology, cybersecurity and creative media. I build secure
            web applications, hunt bugs on HackerOne, design clean visuals, and capture
            stories through the lens — all with a mission to create real-world impact in Ghana.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#projects">
                View My Work <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/cv.pdf" download>
                <Download className="mr-1" size={18} /> Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="mailto:hello@example.com"
              className="p-2.5 rounded-lg border border-border glass hover:text-primary hover:border-primary transition-smooth"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-border glass hover:text-primary hover:border-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-border glass hover:text-primary hover:border-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Portrait placeholder — replace src with your photo */}
        <div className="relative flex justify-center lg:justify-end animate-scale-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-border shadow-card bg-card">
              <img
                src="/placeholder.svg"
                alt="Iddrisu Umar Farouk portrait — replace with your photo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground bg-card/80 backdrop-blur-sm">
                Add your photo → /public/profile.jpg
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass border border-border shadow-soft text-xs font-mono">
              <span className="text-primary">{`</>`}</span> Building in Ghana
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
