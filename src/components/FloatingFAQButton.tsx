import { HelpCircle } from "lucide-react";

const FloatingFAQButton = () => {
  const scrollToFAQ = () => {
    document.querySelector("#faq")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToFAQ}
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Go to FAQ section"
    >
      <HelpCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-[60px] transition-all duration-300 text-sm font-semibold whitespace-nowrap">
        FAQ
      </span>
    </button>
  );
};

export default FloatingFAQButton;
