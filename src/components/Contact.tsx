import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "tamirisribeiro955@gmail.com",
    href: "mailto:tamirisribeiro955@gmail.com",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(69) 99363-5803",
    href: "tel:+5569993635803",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Cuiabá-MT, Brasil",
    href: "#",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/tamicomp",
    href: "https://linkedin.com/in/tamicomp",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@tamicomp",
    href: "https://github.com/tamicomp",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-card/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-glow opacity-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Contato</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estou sempre aberta a novas oportunidades e conexões profissionais. 
            Sinta-se à vontade para entrar em contato!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass rounded-xl p-5 flex items-center gap-4 group hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-primary p-0.5 shrink-0">
                  <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                    <contact.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{contact.label}</p>
                  <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
                
                {contact.href !== "#" && (
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow"
              asChild
            >
              <a href="mailto:tamirisribeiro955@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
