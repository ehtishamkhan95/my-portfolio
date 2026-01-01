import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "./TiltCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import ecommerceImg from "@assets/generated_images/E-commerce_project_screenshot_339f69f9.png";
import chatImg from "@assets/generated_images/Chat_app_project_screenshot_092eefc8.png";
import taskImg from "@assets/generated_images/Task_manager_project_screenshot_e4941a57.png";
import inndirectlyImg from "@images/inndirectly.png";
import ourtopclinicImg from "@images/ourtopclinic.png";
import cactusjackdesignethosImg from "@images/cactusjackdesignethos.png";
import supplierscatalogsImg from "@images/supplierscatalogs.png";
import favImg from "@images/fav.png";

const projects = [
  {
    id: 1,
    title: "Inndirectly",
    description:
      "Full-stack online vacation rental platform subscriptions, user and admin dashboards",
    image: inndirectlyImg,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://inndirectly.com",
    details:
      "A vacation rental platform with a subscription model, user and admin dashboards. Integrated with iCal for providing availability to guests, and sending instant notifications to guests when a desired property becomes available.",
    isProduction: true,
  },
  {
    id: 2,
    title: "OurTopClinic",
    description:
      "A medical clinic website with a booking system and online consultations.",
    image: ourtopclinicImg,
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://www.ourtopclinic.com/",
    details:
      "A medical clinic website with a booking system and online consultations. Implemented full EMR system with appointment scheduling, patient management, and billing. Integrated with pharmacy and lab systems.",
  },
  {
    id: 3,
    title: "Cactus Jack Design Ethos",
    description: "An LMS for the Cactus Jack brand for design students.",
    image: cactusjackdesignethosImg,
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com",
    live: "https://cactusjackdesignethos.com/",
    details:
      "LMS for the Cactus Jack brand for design students. Features a course catalog, a dashboard for students to view their courses and progress, and a admin dashboard to manage courses and students.",
  },
  {
    id: 4,
    title: "Suppliers Catalogs",
    description:
      "A supplier catalog website for drop shippers to find products to sell and upload to their own store.",
    image: supplierscatalogsImg,
    tech: ["React", "TailwindCSS", "Framer Motion", "Three.js"],
    github: "https://github.com",
    live: "https://inventory-app-production.azurewebsites.net/",
    details:
      "A supplier catalog website for drop shippers to find products to sell and upload to their own store. Users can pick from a list of suppliers, and then add to their own stores on Shopify and Ebay. Implements a subscription model for users giveng access to multple tiers of suppliers.",
  },
  {
    id: 5,
    title: "Fav",
    description: "Ecommerce marketplace for buying and selling products.",
    image: favImg,
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://fav-v1.netlify.app",
    details:
      "An ecommecrce marketplace for buying and selling products. Similar to Vinted, with options to negotiate prices for both buyers and sellers.",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const productionProject = projects.find((p) => p.isProduction);
  const otherProjects = projects.filter((p) => !p.isProduction);

  return (
    <>
      <section
        id="projects"
        ref={sectionRef as any}
        className="min-h-screen py-20 md:py-32 px-4 bg-card/30 flex items-center"
        data-testid="section-projects"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-4 scroll-fade-in ${
              isVisible ? "visible" : ""
            }`}
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p
            className={`text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto scroll-fade-in stagger-1 ${
              isVisible ? "visible" : ""
            }`}
          >
            A showcase of my recent work demonstrating MERN stack expertise
          </p>

          <div className="space-y-12">
            {productionProject && (
              <div
                className={`scroll-fade-in stagger-2 ${
                  isVisible ? "visible" : ""
                }`}
              >
                <TiltCard
                  className="w-full"
                  max={3}
                  scale={1.01}
                  glare={true}
                  maxGlare={0.1}
                >
                  <Card
                    className="overflow-visible border-primary/20 bg-primary/5 hover-elevate active-elevate-2 transition-all cursor-pointer"
                    onClick={() => setSelectedProject(productionProject)}
                    data-testid={`card-project-featured`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="aspect-video overflow-hidden rounded-l-lg lg:rounded-l-lg lg:rounded-tr-none">
                        <img
                          src={productionProject.image}
                          alt={productionProject.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className="bg-primary text-primary-foreground animate-pulse">
                            LIVE IN PRODUCTION
                          </Badge>
                        </div>
                        <CardTitle className="text-3xl mb-4">
                          {productionProject.title}
                        </CardTitle>
                        <CardDescription className="text-lg mb-6">
                          {productionProject.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mb-8">
                          {productionProject.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <Button
                            size="lg"
                            className="flex-1 lg:flex-none"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(productionProject.live, "_blank");
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Visit Site
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TiltCard>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`scroll-fade-in stagger-${index + 3} ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <TiltCard
                    className="h-full"
                    max={5}
                    scale={1.01}
                    glare={true}
                    maxGlare={0.1}
                  >
                    <Card
                      className="overflow-visible hover-elevate active-elevate-2 transition-all cursor-pointer h-full flex flex-col"
                      onClick={() => setSelectedProject(project)}
                      data-testid={`card-project-${project.id}`}
                    >
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-lg">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-1 flex flex-col justify-end">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-[10px] px-1.5 py-0"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="text-[10px] px-1.5 py-0"
                            >
                              +{project.tech.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            className="flex-1 h-8 text-xs"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.live, "_blank");
                            }}
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Visit Site
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TiltCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
