import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AnimatedSection from "./AnimatedSection";

// Import all project images
import serviceMasonry from "@/assets/service-masonry.jpeg";
import serviceTimber from "@/assets/service-timber.jpeg";
import serviceDecking from "@/assets/service-decking.jpeg";
import serviceRoofing from "@/assets/service-roofing.jpeg";
import servicePainting from "@/assets/service-painting.jpeg";
import serviceWaterproofing from "@/assets/service-waterproofing.jpg";
import tgFlooring1 from "@/assets/tg-flooring-1.jpeg";
import daybed1 from "@/assets/daybed-1.jpeg";
import tiling1 from "@/assets/tiling-1.jpeg";
import plastering1 from "@/assets/plastering-1.jpeg";
import paving1 from "@/assets/paving-1.jpeg";
import vinyl1 from "@/assets/vinyl-1.jpeg";
import staircase1 from "@/assets/staircase-1.jpeg";
import shower1 from "@/assets/shower-1.jpg";
import stonework1 from "@/assets/stonework-1.jpeg";
import skimming1 from "@/assets/skimming-1.jpeg";
import alterations1 from "@/assets/alterations-1.jpeg";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Family Home",
    category: "Masonry Building",
    image: serviceMasonry,
    description: "Complete masonry construction for a 4-bedroom family home in Sandton.",
    featured: true,
  },
  {
    id: 2,
    title: "Timber Lodge Retreat",
    category: "Timber Homes",
    image: serviceTimber,
    description: "Custom timber frame construction for a luxury mountain retreat.",
    featured: true,
  },
  {
    id: 3,
    title: "Entertainment Deck",
    category: "Decking",
    image: serviceDecking,
    description: "Large outdoor entertainment deck with built-in seating and planters.",
  },
  {
    id: 4,
    title: "Commercial Roofing",
    category: "Roofing",
    image: serviceRoofing,
    description: "Complete roof replacement for a commercial building in Johannesburg.",
    featured: true,
  },
  {
    id: 5,
    title: "Heritage Restoration",
    category: "Painting",
    image: servicePainting,
    description: "Full exterior and interior painting restoration of a heritage property.",
  },
  {
    id: 6,
    title: "Basement Waterproofing",
    category: "Waterproofing",
    image: serviceWaterproofing,
    description: "Complete basement waterproofing solution for a residential complex.",
  },
  {
    id: 7,
    title: "Hardwood T&G Flooring",
    category: "T&G Flooring",
    image: tgFlooring1,
    description: "Premium tongue and groove hardwood flooring installation throughout a luxury home.",
    featured: true,
  },
  {
    id: 8,
    title: "Custom Day Bed Build",
    category: "Day Bed",
    image: daybed1,
    description: "Bespoke outdoor day bed construction with integrated storage and cushioning.",
  },
  {
    id: 9,
    title: "Bathroom Tiling",
    category: "Tiling",
    image: tiling1,
    description: "Complete bathroom renovation with modern mosaic and large format tiles.",
    featured: true,
  },
  {
    id: 10,
    title: "Interior Plastering",
    category: "Plastering",
    image: plastering1,
    description: "Smooth finish plastering throughout a new residential build.",
  },
  {
    id: 11,
    title: "Driveway Paving",
    category: "Paving",
    image: paving1,
    description: "Decorative interlocking paving for a large residential driveway.",
    featured: true,
  },
  {
    id: 12,
    title: "Vinyl Floor Installation",
    category: "Vinyl Flooring",
    image: vinyl1,
    description: "Modern luxury vinyl plank installation for commercial office spaces.",
  },
  {
    id: 13,
    title: "Staircase Build",
    category: "Staircase",
    image: staircase1,
    description: "Custom timber staircase with wrought iron balustrade design.",
  },
  {
    id: 14,
    title: "Modern Shower Room",
    category: "Shower",
    image: shower1,
    description: "Complete shower room installation with frameless glass enclosure.",
    featured: true,
  },
  {
    id: 15,
    title: "Natural Stonework",
    category: "Stonework",
    image: stonework1,
    description: "Decorative natural stone cladding for exterior feature walls.",
  },
  {
    id: 16,
    title: "Wall Skimming",
    category: "Skimming",
    image: skimming1,
    description: "Professional wall skimming for a flawless paint-ready finish.",
  },
  {
    id: 17,
    title: "Home Alterations",
    category: "Alterations",
    image: alterations1,
    description: "Complete home renovation including layout changes and extensions.",
    featured: true,
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [currentDot, setCurrentDot] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentDot(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", () => clearInterval(autoplay));
    onSelect();

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16" animation="fadeUp">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our completed projects showcasing quality craftsmanship and attention to detail
            across {projects.length} diverse construction categories.
          </p>
        </AnimatedSection>

        {/* Carousel Container */}
        <AnimatedSection animation="scaleUp" delay={200}>
          <div
            className="relative group"
            onMouseEnter={() => setShowSwipeHint(true)}
            onMouseLeave={() => setShowSwipeHint(false)}
            onTouchStart={() => setShowSwipeHint(true)}
          >
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollPrev}
              className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 ${
                showSwipeHint ? "opacity-100" : "opacity-50"
              } hover:opacity-100`}
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Swipe Hint - Left */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: showSwipeHint ? 1 : 0, x: showSwipeHint ? 0 : -20 }}
              className="absolute left-16 md:left-24 top-1/2 -translate-y-1/2 z-10 text-primary-foreground bg-primary/70 px-4 py-2 rounded-full text-sm font-semibold pointer-events-none hidden md:block"
            >
              ← Swipe
            </motion.div>

            {/* Carousel */}
            <div ref={emblaRef} className="overflow-hidden rounded-2xl">
              <div className="flex gap-4 md:gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={cardVariants}
                    className="flex-shrink-0 w-[85%] sm:w-1/2 lg:w-1/3 xl:w-1/4 min-w-0"
                  >
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="group/card relative overflow-hidden rounded-2xl shadow-lg cursor-pointer h-full bg-card border border-border/50"
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4 z-20">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex items-center gap-1 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                          >
                            <Sparkles className="w-3 h-3" />
                            Featured
                          </motion.div>
                        </div>
                      )}

                      {/* Image Container */}
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.15 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                        {/* View Icon */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                        >
                          <div className="bg-primary-foreground/20 backdrop-blur-sm p-4 rounded-full">
                            <Eye className="w-8 h-8 text-primary-foreground" />
                          </div>
                        </motion.div>
                      </div>

                      {/* Card Content */}
                      <div className="p-5">
                        <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wide mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-lg font-heading font-bold text-foreground mt-1 line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollNext}
              className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/90 hover:bg-primary text-primary-foreground p-3 md:p-4 rounded-full shadow-xl transition-all duration-300 ${
                showSwipeHint ? "opacity-100" : "opacity-50"
              } hover:opacity-100`}
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Swipe Hint - Right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: showSwipeHint ? 1 : 0, x: showSwipeHint ? 0 : 20 }}
              className="absolute right-16 md:right-24 top-1/2 -translate-y-1/2 z-10 text-primary-foreground bg-primary/70 px-4 py-2 rounded-full text-sm font-semibold pointer-events-none hidden md:block"
            >
              Swipe →
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`rounded-full transition-all duration-300 ${
                currentDot === index
                  ? "w-8 h-3 bg-accent"
                  : "w-3 h-3 bg-primary/30 hover:bg-accent/50"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "17+", label: "Project Categories" },
            { value: "500+", label: "Completed Projects" },
            { value: "20+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-card rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-primary/90 text-primary-foreground p-3 rounded-full hover:bg-primary transition-colors shadow-lg"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </motion.button>

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                {selectedProject.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Featured Project
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold uppercase tracking-wide">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mt-3 mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
