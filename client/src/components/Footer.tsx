export function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-8 px-4 sm:px-6" data-testid="footer-main">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground text-sm sm:text-base">
          © {new Date().getFullYear()} Built with React, Node.js, and lots of coffee
        </p>
      </div>
    </footer>
  );
}
