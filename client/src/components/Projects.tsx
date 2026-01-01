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
      "Full-stack vacation rental aggregator with multi-platform search, real-time availability synchronization, and subscription-based features",
    image: inndirectlyImg,
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://inndirectly.com",
    details:
      "Built a cross-platform data aggregation architecture that consolidates vacation rental listings from multiple sources. Implemented iCal integration for real-time property availability synchronization, developed a subscription billing system with Stripe payment processing, and created a real-time notification system for saved search alerts. Designed and implemented comprehensive admin and user dashboards with subscription management, property listing controls, and analytics tracking.",
    isProduction: true,
  },
  {
    id: 2,
    title: "OurTopClinic",
    description:
      "Full-stack telehealth platform with real-time video consultations, HIPAA-compliant EMR system, and integrated appointment management",
    image: ourtopclinicImg,
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://www.ourtopclinic.com/",
    details:
      "Developed a real-time video consultation system using Socket.io for secure patient-provider communication. Built a complete HIPAA-compliant EMR system with encrypted patient records, appointment scheduling with calendar integration, and automated billing workflows. Integrated third-party APIs for pharmacy and lab test booking systems, and implemented a multi-state deployment architecture with role-based access control for patients and healthcare providers.",
  },
  {
    id: 3,
    title: "Cactus Jack Design Ethos",
    description:
      "Custom LMS platform with course management, student progress tracking, and admin dashboard for educational content delivery",
    image: cactusjackdesignethosImg,
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com",
    live: "https://cactusjackdesignethos.com/",
    details:
      "Architected a complete Learning Management System with a course catalog system for content organization, student dashboard with real-time progress tracking and completion analytics, and a comprehensive admin panel for managing courses, students, and assignments. Implemented video content delivery system with streaming capabilities, assignment submission and grading workflow, and a scholarship competition management system with automated winner selection and notification features.",
  },
  {
    id: 4,
    title: "Suppliers Catalogs",
    description:
      "E-commerce supplier catalog platform with multi-tier subscriptions, third-party marketplace integrations, and automated product synchronization",
    image: supplierscatalogsImg,
    tech: ["React", "TailwindCSS", "Framer Motion", "Three.js"],
    github: "https://github.com",
    live: "https://inventory-app-production.azurewebsites.net/",
    details:
      "Built a subscription tier management system with role-based access control for multiple supplier tiers. Developed Shopify and eBay API integrations for automated product uploads and inventory synchronization. Implemented product catalog management system with bulk operations, automated drop shipping workflow with order processing, and inventory management with real-time stock updates. Created an interactive 3D product visualization using Three.js for enhanced user experience.",
  },
  {
    id: 5,
    title: "Fav",
    description:
      "Full-stack marketplace platform with real-time messaging, price negotiation system, and multi-category product management",
    image: favImg,
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    github: "https://github.com",
    live: "https://fav-v1.netlify.app",
    details:
      "Architected a scalable marketplace platform with user-to-user transaction system and secure payment processing. Implemented a real-time messaging system using Redis for high-performance message queuing and delivery. Built a price negotiation and offer management system with automated notifications, advanced search and filtering across multiple product categories, and comprehensive product listing management with image uploads and inventory tracking. Designed RESTful APIs with Express.js for efficient data handling and caching strategies.",
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
        className="min-h-screen py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 bg-card/30 flex items-center"
        data-testid="section-projects"
      >
        <div className="max-w-6xl mx-auto w-full">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 scroll-fade-in ${
              isVisible ? "visible" : ""
            }`}
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p
            className={`text-center text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto scroll-fade-in stagger-1 px-4 ${
              isVisible ? "visible" : ""
            }`}
          >
            A showcase of my recent work demonstrating MERN stack expertise
          </p>

          <div className="space-y-8 sm:space-y-12">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                      <div className="aspect-video overflow-hidden rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
                        <img
                          src={productionProject.image}
                          alt={productionProject.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-6 sm:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <Badge className="bg-primary text-primary-foreground animate-pulse text-xs sm:text-sm">
                            LIVE IN PRODUCTION
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl sm:text-3xl mb-3 sm:mb-4">
                          {productionProject.title}
                        </CardTitle>
                        <CardDescription className="text-base sm:text-lg mb-4 sm:mb-6">
                          {productionProject.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                          {productionProject.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs sm:text-sm"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <Button
                            size="lg"
                            className="flex-1 lg:flex-none text-sm sm:text-base"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(productionProject.live, "_blank");
                            }}
                          >
                            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                            Visit Site
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </TiltCard>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
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
                      <CardHeader className="p-3 sm:p-4">
                        <CardTitle className="text-base sm:text-lg">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-3 sm:p-4 pt-0 flex-1 flex flex-col justify-end">
                        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
                          {project.tech.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge
                              variant="secondary"
                              className="text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0"
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
