import Button from "./Button";

export function MobileCtaBar() {
  return (
    <div
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="glass border-t border-border shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-4 py-3 flex gap-3">
        <Button href="#contact" variant="primary" size="sm" className="flex-1">
          Get Free Quote
        </Button>
        <Button href="tel:9022217139" variant="outline" size="sm" className="flex-1">
          Call / Text Irene
        </Button>
      </div>
    </div>
  );
}
