import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// Masonry carousel images
import masonry1 from "@/assets/masonry-1.jpg";
import masonry2 from "@/assets/masonry-2.jpg";
import masonry3 from "@/assets/masonry-3.jpg";
import masonry4 from "@/assets/masonry-4.jpg";
import masonry5 from "@/assets/masonry-5.jpg";

// Timber carousel images
import timber1 from "@/assets/timber-1.jpg";
import timber2 from "@/assets/timber-2.jpg";
import timber3 from "@/assets/timber-3.jpg";
import timber4 from "@/assets/timber-4.jpg";
import timber5 from "@/assets/timber-5.jpg";

// Decking carousel images
import decking1 from "@/assets/decking-1.jpg";
import decking2 from "@/assets/decking-2.jpg";
import decking3 from "@/assets/decking-3.jpg";
import decking4 from "@/assets/decking-4.jpg";
import decking5 from "@/assets/decking-5.jpg";

// Roofing carousel images
import roofing1 from "@/assets/roofing-1.jpg";
import roofing2 from "@/assets/roofing-2.jpg";
import roofing3 from "@/assets/roofing-3.jpg";
import roofing4 from "@/assets/roofing-4.jpg";
import roofing5 from "@/assets/roofing-5.jpg";

// Painting carousel images
import painting1 from "@/assets/painting-1.jpg";
import painting2 from "@/assets/painting-2.jpg";
import painting3 from "@/assets/painting-3.jpg";
import painting4 from "@/assets/painting-4.jpg";
import painting5 from "@/assets/painting-5.jpg";

// Waterproofing carousel images
import waterproofing1 from "@/assets/waterproofing-1.jpg";
import waterproofing2 from "@/assets/waterproofing-2.jpg";
import waterproofing3 from "@/assets/waterproofing-3.jpg";
import waterproofing4 from "@/assets/waterproofing-4.jpg";
import waterproofing5 from "@/assets/waterproofing-5.jpg";

const masonryImages = [masonry1, masonry2, masonry3, masonry4, masonry5];
const timberImages = [timber1, timber2, timber3, timber4, timber5];
const deckingImages = [decking1, decking2, decking3, decking4, decking5];
const roofingImages = [roofing1, roofing2, roofing3, roofing4, roofing5];
const paintingImages = [painting1, painting2, painting3, painting4, painting5];
const waterproofingImages = [waterproofing1, waterproofing2, waterproofing3, waterproofing4, waterproofing5];

const services = [
  {
    title: "Masonry Building",
    description:
      "Expert brick and block work for residential and commercial structures. Quality craftsmanship that stands the test of time.",
    carouselImages: masonryImages,
  },
  {
    title: "Timber Homes",
    description:
      "Beautiful, sustainable timber frame construction. Create your dream wooden home with our skilled craftsmen.",
    carouselImages: timberImages,
  },
  {
    title: "Decking",
    description:
      "Transform your outdoor space with stunning wooden decks. Perfect for entertaining and relaxation.",
    carouselImages: deckingImages,
  },
  {
    title: "Roofing",
    description:
      "Complete roofing solutions from installation to repairs. Protecting your home from the elements.",
    carouselImages: roofingImages,
  },
  {
    title: "Painting",
    description:
      "Professional interior and exterior painting services. Refresh your property with a perfect finish.",
    carouselImages: paintingImages,
  },
  {
    title: "Waterproofing",
    description:
      "Comprehensive waterproofing solutions for roofs, walls, and foundations. Keep your property dry and protected.",
    carouselImages: waterproofingImages,
  },
];

// Service Carousel Component
const ServiceCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative h-56 overflow-hidden group/carousel">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} project ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
            idx === currentIndex 
              ? "opacity-100 scale-100" 
              : "opacity-0 scale-105"
          }`}
        />
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary/70 hover:bg-primary text-primary-foreground p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary/70 hover:bg-primary text-primary-foreground p-1.5 rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex 
                ? "bg-accent w-4" 
                : "bg-primary-foreground/60 hover:bg-primary-foreground"
            }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fadeUp">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4 uppercase tracking-wide">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Our <span className="text-secondary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From foundation to finish, we deliver excellence in every project.
            Discover our comprehensive range of construction and waterproofing
            services.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={index} 
              animation="scaleUp" 
              delay={index * 100}
              duration={800}
            >
              <Card
                className="group overflow-hidden border-0 shadow-card hover:shadow-lg transition-all duration-500 bg-card h-full"
              >
                {/* Carousel */}
                <ServiceCarousel images={service.carouselImages} title={service.title} />

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection className="text-center mt-12" animation="bounce" delay={600}>
          <p className="text-muted-foreground mb-4">
            Looking for something specific?
          </p>
          <Button variant="cta" size="xl" onClick={scrollToContact} className="animate-pulse hover:animate-none">
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;
