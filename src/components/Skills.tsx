import { Code, Database, BarChart3, Cpu, Globe, Brain } from "lucide-react";

const skills = [
  {
    category: "Linguagens",
    icon: Code,
    items: ["Python", "JavaScript (React)", "C# (.NET)"],
    color: "from-primary to-secondary",
  },
  {
    category: "Análise de Dados",
    icon: BarChart3,
    items: ["Power BI", "Excel Avançado", "Data Mining"],
    color: "from-secondary to-accent",
  },
  {
    category: "Banco de Dados",
    icon: Database,
    items: ["SQL"],
    color: "from-accent to-primary",
  },
  {
    category: "Hardware & Embedded",
    icon: Cpu,
    items: ["FPGA", "VHDL"],
    color: "from-primary to-accent",
  },
  {
    category: "Inteligência Artificial",
    icon: Brain,
    items: ["Fuzzy Logic", "Algoritmos Genéticos", "Redes Neurais"],
    color: "from-secondary to-primary",
  },
  {
    category: "Idiomas",
    icon: Globe,
    items: ["Inglês - Intermediário", "Espanhol - Intermediário"],
    color: "from-accent to-secondary",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Competências</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-500 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <skill.icon className="w-7 h-7 text-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-display font-semibold mb-3">{skill.category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm bg-muted rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
