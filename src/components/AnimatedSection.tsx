import { ReactNode, forwardRef } from "react";
import { useScrollAnimation, animationVariants, visibleClass } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: keyof typeof animationVariants;
  delay?: number;
  duration?: number;
  as?: "div" | "section" | "article" | "span" | "h2" | "h3" | "p";
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className, animation = "fadeUp", delay = 0, duration = 800, as: Component = "div" }, forwardedRef) => {
    const { ref, isVisible } = useScrollAnimation();

    const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};
    const durationStyle = { transitionDuration: `${duration}ms` };

    return (
      <Component
        ref={(node) => {
          // Handle both refs
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={cn(
          "transition-all ease-out motion-reduce:transition-none motion-reduce:transform-none",
          animationVariants[animation],
          isVisible && visibleClass,
          className
        )}
        style={{ ...delayStyle, ...durationStyle }}
      >
        {children}
      </Component>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
