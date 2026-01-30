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
      {/* Glassmorphism background with subtle top border */}
      <div className="bg-primary/60 backdrop-blur-xl border-t border-primary-foreground/10" style={{ borderTopWidth: '0.5px' }}>
        <div className="flex items-center justify-around px-2 py-1.5 max-w-lg mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item);

            return (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.isRoute)}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center justify-center gap-0.5 px-2 py-1 transition-all duration-300 min-w-[50px] ${
                  active
                    ? "text-accent"
                    : "text-primary-foreground/60 hover:text-primary-foreground"
                }`}
              >
                <div className="relative">
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    />
                  )}
                </div>
                <span className="text-[10px] uppercase tracking-[1px] font-medium">
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Safe area padding for iOS */}
      <div className="bg-primary/60 backdrop-blur-xl h-[env(safe-area-inset-bottom)]" />
    </motion.nav>
  );
};

export default BottomNavBar;