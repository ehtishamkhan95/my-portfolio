import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "./TiltCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";
import { ProjectModal } from "./ProjectModal";
import ecommerceImg from "@assets/generated_images/E-commerce_project_screenshot_339f69f9.png";
import chatImg from "@assets/generated_images/Chat_app_project_screenshot_092eefc8.png";
import taskImg from "@assets/generated_images/Task_manager_project_screenshot_e4941a57.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack online shopping platform with cart, payments, and admin dashboard",
    image: ecommerceImg,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://demo.com",
    details: "A comprehensive e-commerce solution featuring user authentication, product catalog, shopping cart functionality, secure payment processing with Stripe, order management, and an admin dashboard for inventory control. Built with React for a responsive frontend, Express.js for RESTful APIs, and MongoDB for scalable data storage.",
    isProduction: true,
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    description: "Modern chat app with real-time messaging and user presence",
    image: chatImg,
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://demo.com",
    details: "Real-time messaging application enabling instant communication between users. Features include online/offline status indicators, typing indicators, message history, and group chat capabilities. Implemented using WebSocket connections via Socket.io for bi-directional communication and MongoDB for message persistence.",
  },
  {
    id: 3,
    title: "Task Management Dashboard",
    description: "Productivity tool for managing projects and tracking progress",
    image: taskImg,
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com",
    live: "https://demo.com",
    details: "Kanban-style task management system for organizing projects and tracking team productivity. Features drag-and-drop task organization, priority levels, due dates, progress tracking, and team collaboration. Built with a modern UI using Tailwind CSS and powered by a robust Node.js backend with MongoDB for data management.",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Animated professional portfolio with 3D effects and smooth scrolling",
    image: ecommerceImg,
    tech: ["React", "TailwindCSS", "Framer Motion", "Three.js"],
    github: "https://github.com",
    live: "https://demo.com",
    details: "A high-performance personal portfolio showcasing creative development skills. Features custom 3D particle systems, intersection observers for scroll animations, and a fully responsive glassmorphism design.",
  },
  {
    id: 5,
    title: "Social Media API",
    description: "Scalable backend for a social networking platform",
    image: chatImg,
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://demo.com",
    details: "A robust RESTful API built to handle high-traffic social interactions. Includes JWT authentication, image upload integration, and real-time notification support.",
  },
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const productionProject = projects.find(p => p.isProduction);
  const otherProjects = projects.filter(p => !p.isProduction);

  return (
    <>
      <section 
        id="projects" 
        ref={sectionRef as any}
        className="min-h-screen py-20 md:py-32 px-4 bg-card/30 scroll-snap-section flex items-center" 
        data-testid="section-projects"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2 
            className={`text-4xl md:text-5xl font-bold text-center mb-4 scroll-fade-in ${isVisible ? 'visible' : ''}`}
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p className={`text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto scroll-fade-in stagger-1 ${isVisible ? 'visible' : ''}`}>
            A showcase of my recent work demonstrating MERN stack expertise
          </p>

          <div className="space-y-12">
            {productionProject && (
              <div className={`scroll-fade-in stagger-2 ${isVisible ? 'visible' : ''}`}>
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
                          <Badge className="bg-primary text-primary-foreground animate-pulse">LIVE IN PRODUCTION</Badge>
                        </div>
                        <CardTitle className="text-3xl mb-4">{productionProject.title}</CardTitle>
                        <CardDescription className="text-lg mb-6">{productionProject.description}</CardDescription>
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
                            Visit Production Site
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
                  className={`scroll-fade-in stagger-${index + 3} ${isVisible ? 'visible' : ''}`}
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
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4 pt-0 flex-1 flex flex-col justify-end">
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-[10px] px-1.5 py-0">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && <Badge variant="secondary" className="text-[10px] px-1.5 py-0">+{project.tech.length - 3}</Badge>}
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
                            Demo
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
