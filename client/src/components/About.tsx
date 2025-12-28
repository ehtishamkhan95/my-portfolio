import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, Award, Code2 } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import developerImg from "@assets/generated_images/Professional_developer_headshot_5499bbc5.png";

const timeline = [
  {
    year: "2023 - Present",
    title: "MERN Stack Developer",
    company: "Tech Company",
    description: "Building scalable web applications and mentoring junior developers",
    icon: Code2,
  },
  {
    year: "2022 - 2023",
    title: "Full-Stack Developer",
    company: "Startup Inc",
    description: "Developed multiple client projects using modern web technologies",
    icon: Award,
  },
];

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      id="about" 
      ref={sectionRef as any}
      className="min-h-screen py-20 md:py-32 px-4 scroll-snap-section flex items-center" 
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-4 scroll-fade-in ${isVisible ? 'visible' : ''}`}
          data-testid="text-about-heading"
        >
          About Me
        </h2>
        <p className={`text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto scroll-fade-in stagger-1 ${isVisible ? 'visible' : ''}`}>
          Passionate developer with 2 years of experience in the MERN stack
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className={`flex justify-center lg:justify-start scroll-slide-left ${isVisible ? 'visible' : ''}`}>
            <Avatar className="h-64 w-64 md:h-80 md:w-80">
              <AvatarImage src={developerImg} alt="Developer" />
              <AvatarFallback>Dev</AvatarFallback>
            </Avatar>
          </div>

          <div className={`space-y-6 scroll-slide-right ${isVisible ? 'visible' : ''}`}>
            <h3 className="text-2xl md:text-3xl font-semibold">
              Building the web, one component at a time
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a dedicated MERN stack developer with a passion for creating elegant, 
              efficient solutions to complex problems. With 2 years of hands-on experience, 
              I specialize in building modern web applications that are both beautiful and functional.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              My expertise lies in the full development cycle - from designing responsive user 
              interfaces with React to architecting scalable backend systems with Node.js and MongoDB. 
              I'm constantly learning and staying up-to-date with the latest web technologies to 
              deliver cutting-edge solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Card className="p-4 flex items-center gap-3">
                <Code2 className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">2+ Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
              </Card>
              <Card className="p-4 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <div className="font-semibold">10+ Projects</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div>
          <h3 className={`text-2xl md:text-3xl font-semibold mb-8 text-center scroll-fade-in stagger-2 ${isVisible ? 'visible' : ''}`}>
            Experience Timeline
          </h3>
          <div className="space-y-6 max-w-3xl mx-auto">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className={`p-6 hover-elevate active-elevate-2 transition-all scroll-slide-${index % 2 === 0 ? 'left' : 'right'} stagger-${index + 3} ${isVisible ? 'visible' : ''}`}
                  data-testid={`card-timeline-${index}`}
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground font-mono">{item.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                      <p className="text-primary font-medium mb-2">{item.company}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
