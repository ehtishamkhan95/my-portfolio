import { useEffect, useRef, ReactNode } from "react";
import VanillaTilt from "vanilla-tilt";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glare?: boolean;
  maxGlare?: number;
  scale?: number;
  max?: number;
  speed?: number;
}

export function TiltCard({ 
  children, 
  className = "", 
  glare = true,
  maxGlare = 0.3,
  scale = 1.05,
  max = 15,
  speed = 400,
}: TiltCardProps) {
  const tiltRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = tiltRef.current;
    if (!element) return;

    VanillaTilt.init(element, {
      max,
      speed,
      glare,
      "max-glare": maxGlare,
      scale,
      perspective: 1000,
      transition: true,
    });

    return () => {
      if (element && (element as any).vanillaTilt) {
        (element as any).vanillaTilt.destroy();
      }
    };
  }, [glare, maxGlare, scale, max, speed]);

  return (
    <div ref={tiltRef} className={className} style={{ transformStyle: "preserve-3d" }}>
      {children}
    </div>
  );
}
