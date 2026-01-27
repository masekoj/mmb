import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-20 right-6 z-50 
        w-12 h-12 rounded-full 
        backdrop-blur-xl bg-white/10 border border-white/20
        text-accent
        flex items-center justify-center
        transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        hover:scale-110 hover:bg-white/20
        ${isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
      style={{
        boxShadow: '0 0 20px hsl(var(--accent) / 0.3), inset 0 0 15px hsl(var(--accent) / 0.05)'
      }}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 drop-shadow-[0_0_8px_hsl(var(--accent)/0.6)]" strokeWidth={1.5} />
    </button>
  );
};

export default ScrollToTop;
