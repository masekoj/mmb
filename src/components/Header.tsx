import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Phone, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-new.jpeg";
import MarqueeBar from "./MarqueeBar";
import SocialIcons from "./SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
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

  // Close search on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "/gallery", label: "Gallery", isRoute: true },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQs" },
    { href: "#contact", label: "Contact" },
  ];

  const searchableItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Masonry Building", href: "#services" },
    { label: "Timber Homes", href: "#services" },
    { label: "Decking", href: "#services" },
    { label: "Roofing", href: "#services" },
    { label: "Painting", href: "#services" },
    { label: "Waterproofing", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Portfolio", href: "#projects" },
    { label: "Gallery", href: "/gallery", isRoute: true },
    { label: "About Us", href: "#about" },
    { label: "FAQs", href: "#faq" },
    { label: "Frequently Asked Questions", href: "#faq" },
    { label: "Contact", href: "#contact" },
    { label: "Get Quote", href: "#contact" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const filteredItems = searchQuery.trim()
    ? searchableItems.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const scrollToSection = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(href);
      setIsMenuOpen(false);
      setIsSearchOpen(false);
      setSearchQuery("");
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
    setIsSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Full-screen Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 pt-20">
              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/50" />
                    <Input
                      type="text"
                      placeholder="Search the website..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="w-full h-14 pl-12 pr-4 text-lg bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 rounded-xl focus:ring-accent"
                    />
                  </div>
                  <Button
                    variant="nav"
                    size="icon"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="h-14 w-14"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Search Results */}
                {filteredItems.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    {filteredItems.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(item.href, item.isRoute)}
                        className="w-full text-left px-4 py-3 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 text-primary-foreground transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </motion.div>
                )}

                {searchQuery.trim() && filteredItems.length === 0 && (
                  <p className="text-center text-primary-foreground/60 py-8">
                    No results found for "{searchQuery}"
                  </p>
                )}

                {!searchQuery.trim() && (
                  <p className="text-center text-primary-foreground/40 py-8">
                    Start typing to search...
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
              <Button
                variant="nav"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </Button>
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

            {/* Mobile: Search + Menu Buttons */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="nav"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </Button>
              <Button
                variant="nav"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
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