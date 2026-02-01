import { Heart, Users, Code } from "lucide-react";

const projects = [
  {
    title: "Meninas Tecnológicas",
    type: "Projeto de Extensão",
    icon: Heart,
    description: "Ministrei aulas de Python para alunas do Ensino Médio, promovendo a inclusão de mulheres na TI.",
    skills: ["Didática", "Engajamento comunitário", "Planejamento de aulas"],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Análise de Cadastros AmBev",
    type: "Projeto Profissional",
    icon: Users,
    description: "Desenvolvimento de dashboards e análises em Power BI para otimização de processos comerciais.",
    skills: ["Power BI", "Excel Avançado", "Análise de Dados"],
    gradient: "from-secondary to-accent",
  },
  {
    title: "Redes de Computadores - UFMT",
    type: "Iniciação Científica",
    icon: Code,
    description: "Manutenção e suporte em infraestrutura de redes do departamento de computação.",
    skills: ["Redes", "Suporte Técnico", "Infraestrutura"],
    gradient: "from-accent to-primary",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Portfólio</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Projetos <span className="text-gradient">Relevantes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden group hover:shadow-glow transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-background/20" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-background/90 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <span className="text-xs text-foreground/80 font-medium">{project.type}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
