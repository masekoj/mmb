import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

import masonryImg from "@/assets/service-masonry.jpg";
import timberImg from "@/assets/service-timber.jpg";
import deckingImg from "@/assets/service-decking.jpg";
import roofingImg from "@/assets/service-roofing.jpg";
import paintingImg from "@/assets/service-painting.jpg";
import waterproofingImg from "@/assets/service-waterproofing.jpg";

// Roofing carousel images
import roofing1 from "@/assets/roofing-1.jpg";
import roofing2 from "@/assets/roofing-2.jpg";
import roofing3 from "@/assets/roofing-3.jpg";
import roofing4 from "@/assets/roofing-4.jpg";
import roofing5 from "@/assets/roofing-5.jpg";

const roofingImages = [roofing1, roofing2, roofing3, roofing4, roofing5];

const services = [
  {
    title: "Masonry Building",
    description:
      "Expert brick and block work for residential and commercial structures. Quality craftsmanship that stands the test of time.",
    image: masonryImg,
    hasCarousel: false,
  },
  {
    title: "Timber Homes",
    description:
      "Beautiful, sustainable timber frame construction. Create your dream wooden home with our skilled craftsmen.",
    image: timberImg,
    hasCarousel: false,
  },
  {
    title: "Decking",
    description:
      "Transform your outdoor space with stunning wooden decks. Perfect for entertaining and relaxation.",
    image: deckingImg,
    hasCarousel: false,
  },
  {
    title: "Roofing",
    description:
      "Complete roofing solutions from installation to repairs. Protecting your home from the elements.",
    image: roofingImg,
    hasCarousel: true,
    carouselImages: roofingImages,
  },
  {
    title: "Painting",
    description:
      "Professional interior and exterior painting services. Refresh your property with a perfect finish.",
    image: paintingImg,
    hasCarousel: false,
  },
  {
    title: "Waterproofing",
    description:
      "Comprehensive waterproofing solutions for roofs, walls, and foundations. Keep your property dry and protected.",
    image: waterproofingImg,
    hasCarousel: false,
  },
];

// Roofing Carousel Component
const RoofingCarousel = ({ images }: { images: string[] }) => {
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
          alt={`Roofing project ${idx + 1}`}
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
                {/* Image Container */}
                {service.hasCarousel && service.carouselImages ? (
                  <RoofingCarousel images={service.carouselImages} />
                ) : (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="hero"
                        size="lg"
                        onClick={scrollToContact}
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

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
