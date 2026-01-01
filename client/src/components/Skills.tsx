import { Card } from "@/components/ui/card";
import { TiltCard } from "./TiltCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiTypescript, SiGit, SiDocker } from "react-icons/si";

const mernSkills = [
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-foreground" },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
];

const additionalSkills = [
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500" },
];

export function Skills() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="skills" 
      ref={sectionRef as any}
      className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 flex items-center" 
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 scroll-fade-in ${isVisible ? 'visible' : ''}`}
          data-testid="text-skills-heading"
        >
          Technical Skills
        </h2>
        <p className={`text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto scroll-fade-in stagger-1 px-4 ${isVisible ? 'visible' : ''}`}>
          Specialized in the MERN stack with expertise in modern web development technologies
        </p>

        <div className="mb-12 sm:mb-16">
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center scroll-fade-in stagger-2 ${isVisible ? 'visible' : ''}`}>
            MERN Stack Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {mernSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`scroll-scale-in stagger-${index + 3} ${isVisible ? 'visible' : ''}`}
                >
                  <TiltCard
                    className="h-full"
                    max={20}
                    scale={1.08}
                    glare={true}
                    maxGlare={0.5}
                  >
                    <Card
                      className="p-6 sm:p-8 h-full hover-elevate active-elevate-2 transition-all cursor-pointer overflow-visible"
                      style={{ 
                        transformStyle: "preserve-3d",
                      }}
                      data-testid={`card-skill-${skill.name.toLowerCase().replace(/\./g, '')}`}
                    >
                      <div 
                        className="flex flex-col items-center text-center gap-3 sm:gap-4"
                        style={{ transform: "translateZ(30px)" }}
                      >
                        <Icon className={`h-12 w-12 sm:h-16 sm:w-16 ${skill.color} transition-transform hover:scale-110 hover:rotate-12`} />
                        <h4 className="text-lg sm:text-xl font-semibold">{skill.name}</h4>
                      </div>
                    </Card>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 text-center scroll-fade-in stagger-7 ${isVisible ? 'visible' : ''}`}>
            Additional Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {additionalSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className={`scroll-scale-in stagger-${index + 8} ${isVisible ? 'visible' : ''}`}
                >
                  <TiltCard
                    className="h-full"
                    max={15}
                    scale={1.05}
                    glare={true}
                    maxGlare={0.3}
                  >
                    <Card
                      className="p-4 sm:p-6 h-full hover-elevate active-elevate-2 transition-all cursor-pointer overflow-visible"
                      style={{ 
                        transformStyle: "preserve-3d",
                      }}
                      data-testid={`card-skill-${skill.name.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      <div 
                        className="flex flex-col items-center text-center gap-2 sm:gap-3"
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <Icon className={`h-10 w-10 sm:h-12 sm:w-12 ${skill.color} transition-transform hover:scale-110 hover:rotate-12`} />
                        <h4 className="text-sm sm:text-base font-semibold">{skill.name}</h4>
                      </div>
                    </Card>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
