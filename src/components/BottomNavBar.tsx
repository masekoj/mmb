import { useNavigate, useLocation } from "react-router-dom";
import { Home, Wrench, Briefcase, Images, Phone } from "lucide-react";
import { motion } from "framer-motion";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "#home" },
    { id: "services", label: "Services", icon: Wrench, href: "#services" },
    { id: "projects", label: "Projects", icon: Briefcase, href: "#projects" },
    { id: "gallery", label: "Gallery", icon: Images, href: "/gallery", isRoute: true },
    { id: "contact", label: "Contact", icon: Phone, href: "#contact" },
  ];

  const handleNavClick = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(href);
      return;
    }

    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isActive = (item: typeof navItems[0]) => {
    if (item.isRoute) {
      return location.pathname === item.href;
    }
    return false;
  };

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      {/* Glassmorphism background */}
      <div className="bg-primary/95 backdrop-blur-xl border-t border-primary-foreground/10 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]">
        <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.isRoute)}
                whileTap={{ scale: 0.9 }}
                className={`flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 min-w-[60px] ${
                  active
                    ? "bg-accent text-accent-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/10"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <Icon className="w-5 h-5" />
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-foreground rounded-full"
                    />
                  )}
                </motion.div>
                <span className="text-[10px] font-medium tracking-wide">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Safe area padding for iOS */}
      <div className="bg-primary/95 h-[env(safe-area-inset-bottom)]" />
    </motion.nav>
  );
};

export default BottomNavBar;
