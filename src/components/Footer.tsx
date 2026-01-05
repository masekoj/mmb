import { Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-new.jpeg";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Portfolio" },
    { href: "#about", label: "About Us" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    "Masonry Building",
    "Timber Homes",
    "Decking",
    "Roofing",
    "Painting",
    "Waterproofing",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 animate-fade-in">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 mb-6 group"
            >
              <img
                src={logo}
                alt="Maseko Master Builders Logo"
                className="h-16 w-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              <strong className="text-accent">Maseko Master Builders & Waterproofing:</strong> Your trusted partner since 2013. 
              Delivering quality construction and waterproofing solutions across South Africa.
            </p>

            {/* Social Links */}
            <SocialIcons size="lg" variant="footer" />
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in animation-delay-100">
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    → {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fade-in animation-delay-200">
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("#services");
                    }}
                    className="text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300 text-sm inline-block"
                  >
                    → {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in animation-delay-300">
            <h4 className="font-heading font-bold text-lg mb-6 text-accent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-sm">
                  <a
                    href="tel:+27732718226"
                    className="text-primary-foreground/80 hover:text-accent transition-colors block"
                  >
                    +27 73 271 8226
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <a
                  href="mailto:Ishmaelmaseko022@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm break-all"
                >
                  Ishmaelmaseko022@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-primary-foreground/80 text-sm">
                  Gauteng, South Africa
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-primary-foreground/80 text-sm">
                  <p>Mon - Fri: 7:00 AM - 5:00 PM</p>
                  <p>Sat: 8:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider with glow effect */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Bottom Bar */}
      <div className="bg-primary/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p className="animate-fade-in">
              © {currentYear} Maseko Master Builders. All rights reserved.
            </p>
            <div className="flex gap-6 animate-fade-in animation-delay-100">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
