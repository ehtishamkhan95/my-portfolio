import { Contact } from "../Contact";
import { ThemeProvider } from "../ThemeProvider";

export default function ContactExample() {
  return (
    <ThemeProvider>
      <Contact />
    </ThemeProvider>
  );
}
