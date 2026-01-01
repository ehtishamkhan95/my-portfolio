import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "./FloatingParticles";
import heroBackground from "@assets/generated_images/Hero_background_gradient_mesh_0ca098ff.png";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = "Full-Stack MERN Developer";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
      style={{ perspective: "1000px" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
        style={{
          backgroundImage: `url(${heroBackground})`,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale(1.1)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      <FloatingParticles />

      <div
        className="relative z-10 text-center px-4 max-w-5xl mx-auto transition-transform duration-300"
        style={{
          transform: `translate3d(${mousePosition.x * -0.5}px, ${
            mousePosition.y * -0.5
          }px, 50px)`,
          transformStyle: "preserve-3d",
        }}
      >
        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in text-white"
          data-testid="text-hero-name"
          style={{
            transform: "translateZ(30px)",
            textShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          Hi, I'm <span className="text-primary">Ehtisham</span>
        </h1>

        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-white/80 min-h-[3rem] font-mono"
          data-testid="text-hero-title"
          style={{ transform: "translateZ(20px)" }}
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>

        <p
          className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          data-testid="text-hero-description"
          style={{ transform: "translateZ(10px)" }}
        >
          Building modern, scalable web applications with MongoDB, Express.js,
          React, and Node.js. 2 years of experience creating solutions that make
          a difference.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{ transform: "translateZ(40px)" }}
        >
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="text-base transform transition-all hover:scale-110 hover:rotate-1"
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="transform transition-all hover:scale-110 hover:-rotate-1 border-white text-white hover:bg-white/10 hover:text-white"
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      <button
        onClick={() =>
          document
            .querySelector("#skills")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10"
        data-testid="button-scroll-indicator"
        style={{ transform: "translateZ(20px)" }}
      >
        <ChevronDown className="h-8 w-8 text-white/70" />
      </button>
    </section>
  );
}
