import { ThemeToggle } from "../ThemeToggle";
import { ThemeProvider } from "../ThemeProvider";

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Theme Toggle</h2>
            <p className="text-muted-foreground mb-6">Click the button to switch between light and dark mode</p>
            <ThemeToggle />
          </div>
          <div className="max-w-md mx-auto p-6 rounded-lg bg-card border">
            <p className="text-foreground">This card adapts to the current theme</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
