import { HelpCircle } from "lucide-react";

const FloatingFAQButton = () => {
  const scrollToFAQ = () => {
    document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToFAQ}
      className="
        fixed bottom-6 right-6 z-50 
        group flex items-center justify-center gap-2 
        w-12 h-12 rounded-full
        backdrop-blur-xl bg-white/10 border border-white/20
        text-secondary
        transition-all duration-300 ease-out
        hover:scale-110 hover:bg-white/20 hover:w-auto hover:px-4
      "
      style={{
        boxShadow: '0 0 20px hsl(var(--secondary) / 0.3), inset 0 0 15px hsl(var(--secondary) / 0.05)'
      }}
      aria-label="Go to FAQ section"
    >
      <HelpCircle className="w-5 h-5 drop-shadow-[0_0_8px_hsl(var(--secondary)/0.6)]" strokeWidth={1.5} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[60px] transition-all duration-300 text-sm font-medium whitespace-nowrap text-foreground">
        FAQ
      </span>
    </button>
  );
};

export default FloatingFAQButton;
