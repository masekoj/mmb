import { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

// Masonry carousel images
import masonry1 from "@/assets/masonry-1.jpeg";
import masonry2 from "@/assets/masonry-2.jpeg";
import masonry3 from "@/assets/masonry-3.jpeg";
import masonry4 from "@/assets/masonry-4.jpeg";
import masonry5 from "@/assets/masonry-5.jpeg";

// Timber carousel images
import timber1 from "@/assets/timber-1.jpeg";
import timber2 from "@/assets/timber-2.jpeg";
import timber3 from "@/assets/timber-3.jpeg";
import timber4 from "@/assets/timber-4.jpeg";
import timber5 from "@/assets/timber-5.jpeg";

// Decking carousel images
import decking1 from "@/assets/decking-1.jpeg";
import decking2 from "@/assets/decking-2.jpeg";
import decking3 from "@/assets/decking-3.jpeg";
import decking4 from "@/assets/decking-4.jpeg";
import decking5 from "@/assets/decking-5.jpeg";

// Roofing carousel images
import roofing1 from "@/assets/roofing-1.jpeg";
import roofing2 from "@/assets/roofing-2.jpeg";
import roofing3 from "@/assets/roofing-3.jpeg";
import roofing4 from "@/assets/roofing-4.jpeg";
import roofing5 from "@/assets/roofing-5.jpeg";

// Painting carousel images
import painting1 from "@/assets/painting-1.jpeg";
import painting2 from "@/assets/painting-2.jpeg";
import painting3 from "@/assets/painting-3.jpeg";
import painting4 from "@/assets/painting-4.jpeg";
import painting5 from "@/assets/painting-5.jpeg";

// Waterproofing carousel images
import waterproofing1 from "@/assets/waterproofing-1.jpeg";
import waterproofing2 from "@/assets/waterproofing-2.jpeg";
import waterproofing3 from "@/assets/waterproofing-3.jpeg";
import waterproofing4 from "@/assets/waterproofing-4.jpeg";
import waterproofing5 from "@/assets/waterproofing-5.jpeg";

// Alterations carousel images
import alterations1 from "@/assets/alterations-1.jpg";
import alterations2 from "@/assets/alterations-2.jpg";
import alterations3 from "@/assets/alterations-3.jpg";
import alterations4 from "@/assets/alterations-4.jpg";
import alterations5 from "@/assets/alterations-5.jpg";

// Skimming carousel images
import skimming1 from "@/assets/skimming-1.jpg";
import skimming2 from "@/assets/skimming-2.jpg";
import skimming3 from "@/assets/skimming-3.jpg";
import skimming4 from "@/assets/skimming-4.jpg";
import skimming5 from "@/assets/skimming-5.jpg";

// Stonework carousel images
import stonework1 from "@/assets/stonework-1.jpeg";
import stonework2 from "@/assets/stonework-2.jpeg";
import stonework3 from "@/assets/stonework-3.jpeg";
import stonework4 from "@/assets/stonework-4.jpeg";
import stonework5 from "@/assets/stonework-5.jpeg";

// Vinyl flooring carousel images
import vinyl1 from "@/assets/vinyl-1.jpeg";
import vinyl2 from "@/assets/vinyl-2.jpeg";
import vinyl3 from "@/assets/vinyl-3.jpeg";
import vinyl4 from "@/assets/vinyl-4.jpeg";
import vinyl5 from "@/assets/vinyl-5.jpeg";

// Staircase carousel images
import staircase1 from "@/assets/staircase-1.jpeg";
import staircase2 from "@/assets/staircase-2.jpeg";
import staircase3 from "@/assets/staircase-3.jpeg";
import staircase4 from "@/assets/staircase-4.jpeg";
import staircase5 from "@/assets/staircase-5.jpeg";

// Shower installation carousel images
import shower1 from "@/assets/shower-1.jpg";
import shower2 from "@/assets/shower-2.jpg";
import shower3 from "@/assets/shower-3.jpg";
import shower4 from "@/assets/shower-4.jpg";
import shower5 from "@/assets/shower-5.jpg";

// Paving carousel images
import paving1 from "@/assets/paving-1.jpeg";
import paving2 from "@/assets/paving-2.jpeg";
import paving3 from "@/assets/paving-3.jpeg";
import paving4 from "@/assets/paving-4.jpeg";
import paving5 from "@/assets/paving-5.jpeg";

// Plastering carousel images
import plastering1 from "@/assets/plastering-1.jpeg";
import plastering2 from "@/assets/plastering-2.jpeg";
import plastering3 from "@/assets/plastering-3.jpeg";
import plastering4 from "@/assets/plastering-4.jpeg";
import plastering5 from "@/assets/plastering-5.jpeg";

// Tiling carousel images
import tiling1 from "@/assets/tiling-1.jpeg";
import tiling2 from "@/assets/tiling-2.jpeg";
import tiling3 from "@/assets/tiling-3.jpeg";
import tiling4 from "@/assets/tiling-4.jpeg";
import tiling5 from "@/assets/tiling-5.jpeg";

// T&G Flooring carousel images
import tgFlooring1 from "@/assets/tg-flooring-1.jpeg";
import tgFlooring2 from "@/assets/tg-flooring-2.jpeg";
import tgFlooring3 from "@/assets/tg-flooring-3.jpeg";
import tgFlooring4 from "@/assets/tg-flooring-4.jpeg";
import tgFlooring5 from "@/assets/tg-flooring-5.jpeg";

// Day bed carousel images
import daybed1 from "@/assets/daybed-1.jpeg";
import daybed2 from "@/assets/daybed-2.jpeg";
import daybed3 from "@/assets/daybed-3.jpeg";
import daybed4 from "@/assets/daybed-4.jpeg";
import daybed5 from "@/assets/daybed-5.jpeg";

// Before & After images
import paintingBefore from "@/assets/painting-before.jpeg";
import paintingAfter from "@/assets/painting-after.jpeg";
import tilingBefore from "@/assets/tiling-before.jpeg";
import tilingAfter from "@/assets/tiling-after.jpeg";
import pavingBefore from "@/assets/paving-before.jpg";
import pavingAfter from "@/assets/paving-after.jpg";
import plasteringBefore from "@/assets/plastering-before.jpg";
import plasteringAfter from "@/assets/plastering-after.jpg";
import showerBefore from "@/assets/shower-before.jpg";
import showerAfter from "@/assets/shower-after.jpg";
import tgFlooringBefore from "@/assets/tg-flooring-before.jpg";
import tgFlooringAfter from "@/assets/tg-flooring-after.jpeg";
import daybedBefore from "@/assets/daybed-before.jpeg";
import daybedAfter from "@/assets/daybed-after.jpeg";

const masonryImages = [masonry1, masonry2, masonry3, masonry4, masonry5];
const timberImages = [timber1, timber2, timber3, timber4, timber5];
const deckingImages = [decking1, decking2, decking3, decking4, decking5];
const roofingImages = [roofing1, roofing2, roofing3, roofing4, roofing5];
const paintingImages = [painting1, painting2, painting3, painting4, painting5];
const waterproofingImages = [waterproofing1, waterproofing2, waterproofing3, waterproofing4, waterproofing5];
const alterationsImages = [alterations1, alterations2, alterations3, alterations4, alterations5];
const skimmingImages = [skimming1, skimming2, skimming3, skimming4, skimming5];
const stoneworkImages = [stonework1, stonework2, stonework3, stonework4, stonework5];
const vinylImages = [vinyl1, vinyl2, vinyl3, vinyl4, vinyl5];
const staircaseImages = [staircase1, staircase2, staircase3, staircase4, staircase5];
const showerImages = [shower1, shower2, shower3, shower4, shower5];
const pavingImages = [paving1, paving2, paving3, paving4, paving5];
const plasteringImages = [plastering1, plastering2, plastering3, plastering4, plastering5];
const tilingImages = [tiling1, tiling2, tiling3, tiling4, tiling5];
const tgFlooringImages = [tgFlooring1, tgFlooring2, tgFlooring3, tgFlooring4, tgFlooring5];
const daybedImages = [daybed1, daybed2, daybed3, daybed4, daybed5];

interface ServiceType {
  title: string;
  description: string;
  carouselImages: string[];
  beforeAfter?: {
    before: string;
    after: string;
  };
}

const services: ServiceType[] = [
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
    beforeAfter: {
      before: paintingBefore,
      after: paintingAfter,
    },
  },
  {
    title: "Waterproofing",
    description:
      "Comprehensive waterproofing solutions for roofs, walls, and foundations. Keep your property dry and protected.",
    carouselImages: waterproofingImages,
  },
  {
    title: "Alterations",
    description:
      "Expert home alterations and extensions. Transform your existing space with quality renovations and structural modifications.",
    carouselImages: alterationsImages,
  },
  {
    title: "Skimming",
    description:
      "Professional wall and ceiling skimming for a smooth, flawless finish. Prepare surfaces perfectly for painting.",
    carouselImages: skimmingImages,
  },
  {
    title: "Stonework",
    description:
      "Beautiful natural stone installations for walls, fireplaces, and outdoor features. Timeless elegance and durability.",
    carouselImages: stoneworkImages,
  },
  {
    title: "Vinyl Flooring",
    description:
      "Modern luxury vinyl flooring installation. Durable, waterproof, and stylish flooring solutions for any room.",
    carouselImages: vinylImages,
  },
  {
    title: "Staircase Installation",
    description:
      "Custom staircase design and installation. From modern floating stairs to traditional wooden staircases.",
    carouselImages: staircaseImages,
  },
  {
    title: "Shower Installation",
    description:
      "Complete shower installation and bathroom renovations. Modern glass enclosures and quality fixtures.",
    carouselImages: showerImages,
    beforeAfter: {
      before: showerBefore,
      after: showerAfter,
    },
  },
  {
    title: "Paving",
    description:
      "Professional brick paving for driveways, patios, and walkways. Beautiful, durable outdoor surfaces.",
    carouselImages: pavingImages,
    beforeAfter: {
      before: pavingBefore,
      after: pavingAfter,
    },
  },
  {
    title: "Plastering",
    description:
      "Expert plastering and rendering services for interior and exterior walls. Quality finishes every time.",
    carouselImages: plasteringImages,
    beforeAfter: {
      before: plasteringBefore,
      after: plasteringAfter,
    },
  },
  {
    title: "Tiling",
    description:
      "Professional tile installation for floors, walls, and backsplashes. Precision work with stunning results.",
    carouselImages: tilingImages,
    beforeAfter: {
      before: tilingBefore,
      after: tilingAfter,
    },
  },
  {
    title: "T&G Flooring",
    description:
      "Premium tongue and groove wooden flooring installation. Beautiful, durable hardwood floors for a warm, elegant finish.",
    carouselImages: tgFlooringImages,
    beforeAfter: {
      before: tgFlooringBefore,
      after: tgFlooringAfter,
    },
  },
  {
    title: "Day Bed",
    description:
      "Custom-built day beds for outdoor living spaces. Beautiful wooden construction with comfortable cushioning for relaxation.",
    carouselImages: daybedImages,
    beforeAfter: {
      before: daybedBefore,
      after: daybedAfter,
    },
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

// Before & After Comparison Component
const BeforeAfterComparison = ({ before, after, title }: { before: string; after: string; title: string }) => {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className="mt-4 p-4 bg-muted/50 rounded-xl">
      <h4 className="text-center font-bold text-foreground mb-3 text-sm uppercase tracking-wider">
        See the Transformation
      </h4>
      
      {/* Desktop: Side by side */}
      <div className="hidden md:flex gap-2 relative">
        <div className="flex-1 relative group/before">
          <img 
            src={before} 
            alt={`${title} before`}
            className="w-full h-40 object-cover rounded-lg transition-transform duration-300 group-hover/before:scale-[1.02]"
          />
          <span className="absolute top-2 left-2 px-2 py-1 bg-destructive/90 text-destructive-foreground text-xs font-bold rounded uppercase">
            Before
          </span>
        </div>
        
        {/* Divider */}
        <div className="w-px bg-border self-stretch" />
        
        <div className="flex-1 relative group/after">
          <img 
            src={after} 
            alt={`${title} after`}
            className="w-full h-40 object-cover rounded-lg transition-transform duration-300 group-hover/after:scale-[1.02]"
          />
          <span className="absolute top-2 left-2 px-2 py-1 bg-green-600/90 text-white text-xs font-bold rounded uppercase">
            After
          </span>
        </div>
      </div>

      {/* Mobile: Tap to toggle */}
      <div 
        className="md:hidden relative cursor-pointer"
        onClick={() => setShowAfter(!showAfter)}
      >
        <div className="relative overflow-hidden rounded-lg">
          <img 
            src={showAfter ? after : before}
            alt={`${title} ${showAfter ? 'after' : 'before'}`}
            className="w-full h-48 object-cover transition-all duration-500"
          />
          <span className={`absolute top-2 left-2 px-2 py-1 text-white text-xs font-bold rounded uppercase transition-colors ${
            showAfter ? 'bg-green-600/90' : 'bg-destructive/90'
          }`}>
            {showAfter ? 'After' : 'Before'}
          </span>
          <span className="absolute bottom-2 right-2 px-2 py-1 bg-foreground/80 text-background text-xs rounded">
            Tap to toggle
          </span>
        </div>
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
                className="group overflow-hidden border border-border/30 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:border-secondary/40 transition-all duration-500 ease-out bg-card h-full"
              >
                {/* Carousel */}
                <ServiceCarousel images={service.carouselImages} title={service.title} />

                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Before & After Section */}
                  {service.beforeAfter && (
                    <BeforeAfterComparison 
                      before={service.beforeAfter.before}
                      after={service.beforeAfter.after}
                      title={service.title}
                    />
                  )}
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
