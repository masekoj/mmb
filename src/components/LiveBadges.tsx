import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Clock, Award } from "lucide-react";

const LiveBadges = () => {
  const [yearsCount, setYearsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (isVisible && yearsCount < 10) {
      const timer = setTimeout(() => {
        setYearsCount((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, yearsCount]);

  const badges = [
    {
      id: "quality",
      icon: ShieldCheck,
      text: "Quality Guaranteed",
      hasShimmer: true,
      hasPulse: false,
      hasCounter: false,
    },
    {
      id: "ontime",
      icon: Clock,
      text: "On-Time Delivery",
      hasShimmer: false,
      hasPulse: true,
      hasCounter: false,
    },
    {
      id: "experience",
      icon: Award,
      text: "Years Experience",
      hasShimmer: false,
      hasPulse: false,
      hasCounter: true,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap justify-center gap-4"
    >
      {badges.map((badge, index) => (
        <div
          key={badge.id}
          className={`
            group relative flex items-center gap-3 px-5 py-3 rounded-2xl
            bg-primary-foreground/5 backdrop-blur-md
            border border-primary-foreground/20
            transition-all duration-300 ease-out
            hover:bg-primary-foreground/15 hover:scale-105 hover:shadow-lg hover:shadow-accent/20
            hover:border-accent/40
            cursor-default overflow-hidden
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
          style={{
            transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
          }}
        >
          {/* Shimmer effect for Quality Guaranteed */}
          {badge.hasShimmer && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent" />
            </div>
          )}

          {/* Icon with two-tone effect */}
          <div className="relative">
            <badge.icon className="w-5 h-5 text-accent drop-shadow-[0_0_8px_hsl(var(--accent)/0.5)]" />
            <div className="absolute inset-0 blur-sm opacity-50">
              <badge.icon className="w-5 h-5 text-accent" />
            </div>
          </div>

          {/* Badge content */}
          <div className="flex items-center gap-2">
            {/* Pulse dot for On-Time Delivery */}
            {badge.hasPulse && (
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
            )}

            {/* Counter for Years Experience */}
            {badge.hasCounter && (
              <span className="text-sm font-bold text-accent tabular-nums">
                {yearsCount}+
              </span>
            )}

            <span className="text-sm font-medium text-primary-foreground">
              {badge.text}
            </span>
          </div>

          {/* Glassmorphism hover glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-accent/5 to-transparent" />
        </div>
      ))}
    </div>
  );
};

export default LiveBadges;
