import { Navigation } from "../Navigation";
import { ThemeProvider } from "../ThemeProvider";

export default function NavigationExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <div className="pt-32 px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <section id="home">
              <h2 className="text-3xl font-bold mb-4">Home Section</h2>
              <p className="text-muted-foreground">Scroll down to see the navigation bar behavior</p>
            </section>
            <section id="skills" className="pt-20">
              <h2 className="text-3xl font-bold mb-4">Skills Section</h2>
              <p className="text-muted-foreground">Navigation adapts as you scroll</p>
            </section>
            <section id="projects" className="pt-20">
              <h2 className="text-3xl font-bold mb-4">Projects Section</h2>
              <p className="text-muted-foreground">Try the mobile menu on smaller screens</p>
            </section>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
