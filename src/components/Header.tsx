import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-new.jpeg";
import MarqueeBar from "./MarqueeBar";
import SocialIcons from "./SocialIcons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Auto-close mobile menu on scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "/gallery", label: "Gallery", isRoute: true },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(href);
      setIsMenuOpen(false);
      return;
    }
    
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation then scroll
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
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-primary shadow-lg py-2"
            : "bg-primary/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 group"
            >
              <img
                src={logo}
                alt="Maseko Master Builders Logo"
                className="h-12 md:h-16 w-auto rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="nav"
                  onClick={() => scrollToSection(link.href, link.isRoute)}
                >
                  {link.label}
                </Button>
              ))}
            </nav>

            {/* Desktop CTA & Social */}
            <div className="hidden lg:flex items-center gap-4">
              <SocialIcons size="sm" variant="header" />
              <a
                href="tel:+27732718226"
                className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Call Us</span>
              </a>
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="nav"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="flex flex-col gap-1 pb-4 border-t border-primary-foreground/20 pt-4">
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  variant="navMobile"
                  onClick={() => scrollToSection(link.href, link.isRoute)}
                >
                  {link.label}
                </Button>
              ))}
              <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-primary-foreground/20">
                <SocialIcons size="md" variant="header" />
              </div>
              <Button
                variant="hero"
                size="lg"
                className="mt-4"
                onClick={() => scrollToSection("#contact")}
              >
                Get Free Quote
              </Button>
            </nav>
          </div>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <MarqueeBar />
    </header>
  );
};

export default Header;
