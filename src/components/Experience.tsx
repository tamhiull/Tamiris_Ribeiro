import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Suporte Técnico e Análise de Dados",
    company: "AmBev",
    location: "Cuiabá - MT",
    period: "Jan 2024 - Mai 2025",
    description: "Análise de cadastros utilizando Power BI e Excel Avançado para otimização de processos e suporte técnico à equipe de vendas, garantindo a qualidade e integridade dos dados.",
    highlight: "Implementei um fluxo de comunicação ao qual obtive aumento de 10% de compra dentro dos novos cadastros.",
  },
  {
    type: "work",
    title: "Iniciação Científica - Redes de Computadores",
    company: "UFMT",
    location: "Cuiabá - MT",
    period: "Out 2023 - Dez 2023",
    description: "Manutenção e suporte em redes de computadores do departamento.",
  },
  {
    type: "work",
    title: "Assistência Técnica em Eletrônicos",
    company: "KariokaNet",
    location: "Cerejeiras - RO",
    period: "Jun 2018 - Fev 2019",
    description: "Resolução de problemas em hardware e software.",
  },
  {
    type: "work",
    title: "Emissão de Documentos Agrícolas",
    company: "IDARON",
    location: "Cerejeiras - RO",
    period: "Out 2017 - Fev 2018",
    description: "Emissão e controle de documentos agrícolas.",
  },
];

const education = [
  {
    type: "education",
    title: "Engenharia de Computação",
    company: "Universidade Federal de Mato Grosso (UFMT)",
    period: "Jun 2020 - Mai 2025",
  },
  {
    type: "education",
    title: "Técnico Agrícola Integrado ao Ensino Médio",
    company: "Instituto Federal de Ciênc. e Tecn. (IFRO)",
    period: "Fev 2015 - Mar 2018",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Trajetória</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Experiência</h3>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-12 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="absolute left-3 top-2 w-4 h-4 rounded-full bg-primary shadow-glow" />
                    
                    <div className="glass rounded-xl p-5 hover:shadow-card transition-shadow">
                      <span className="text-xs text-primary font-medium">{exp.period}</span>
                      <h4 className="text-lg font-display font-semibold mt-1">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground">{exp.company} • {exp.location}</p>
                      {exp.description && (
                        <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                      )}
                      {exp.highlight && (
                        <p className="text-sm text-accent mt-2 font-medium">✨ {exp.highlight}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gradient-secondary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold">Formação</h3>
            </div>

            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-secondary via-accent to-transparent" />
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-12 animate-slide-in-left"
                    style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
                  >
                    <div className="absolute left-3 top-2 w-4 h-4 rounded-full bg-secondary shadow-glow" />
                    
                    <div className="glass rounded-xl p-5 hover:shadow-card transition-shadow">
                      <span className="text-xs text-secondary font-medium">{edu.period}</span>
                      <h4 className="text-lg font-display font-semibold mt-1">{edu.title}</h4>
                      <p className="text-sm text-muted-foreground">{edu.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
