import { Hero } from "../Hero";
import { ThemeProvider } from "../ThemeProvider";

export default function HeroExample() {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden">
        <div id="home">
          <Hero />
        </div>
        <div id="skills" className="h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Next section (for scroll testing)</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
