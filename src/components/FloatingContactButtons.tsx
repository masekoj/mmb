import { useState } from "react";
import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10a10 10 0 0 1-5.5-1.65L2 22l1.65-4.5A10 10 0 0 1 2 12 10 10 0 0 1 12 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const FloatingContactButtons = () => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  const phoneNumber = "+27732718226";
  const whatsappMessage = "Hello! I'm interested in your construction services.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, "")}?text=${encodeURIComponent(whatsappMessage)}`;
  const phoneUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHoveredButton('whatsapp')}
        onMouseLeave={() => setHoveredButton(null)}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366]/80 backdrop-blur-xl border border-white/20 text-white shadow-lg transition-all duration-300"
        style={{
          boxShadow: hoveredButton === 'whatsapp' 
            ? '0 8px 32px rgba(37, 211, 102, 0.5)' 
            : '0 4px 20px rgba(37, 211, 102, 0.3)'
        }}
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppIcon />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={phoneUrl}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHoveredButton('phone')}
        onMouseLeave={() => setHoveredButton(null)}
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-secondary/80 backdrop-blur-xl border border-white/20 text-secondary-foreground shadow-lg transition-all duration-300"
        style={{
          boxShadow: hoveredButton === 'phone' 
            ? '0 8px 32px hsl(var(--secondary) / 0.5)' 
            : '0 4px 20px hsl(var(--secondary) / 0.3)'
        }}
        aria-label="Call us"
      >
        <PhoneIcon />
      </motion.a>
    </div>
  );
};

export default FloatingContactButtons;