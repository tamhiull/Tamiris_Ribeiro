import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow opacity-60 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-secondary opacity-10 blur-3xl rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-primary p-1 shadow-glow animate-float">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-7xl lg:text-8xl font-display font-bold text-gradient">TR</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-accent/20 blur-2xl" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <p className="text-primary font-medium mb-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Olá, eu sou
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Tamiris <span className="text-gradient">Ribeiro</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Engenheira de Computação & Analista de Dados
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Experiência em análise de dados (Power BI, Excel), suporte técnico e projetos de inclusão digital. 
              Perfil adaptável, com capacidade de transitar entre áreas técnicas e estratégicas.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Cuiabá-MT, Brasil
              </span>
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                (69) 99363-5803
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
                asChild
              >
                <a href="mailto:tamirisribeiro955@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Entre em Contato
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://linkedin.com/in/tamicomp" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary/50 hover:bg-secondary/10"
                asChild
              >
                <a href="https://github.com/tamicomp" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
