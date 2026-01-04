import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import serviceMasonry from "@/assets/service-masonry.jpg";
import serviceTimber from "@/assets/service-timber.jpg";
import serviceDecking from "@/assets/service-decking.jpg";
import serviceRoofing from "@/assets/service-roofing.jpg";
import servicePainting from "@/assets/service-painting.jpg";
import serviceWaterproofing from "@/assets/service-waterproofing.jpg";

const projects = [
  {
    id: 1,
    title: "Modern Family Home",
    category: "Masonry Building",
    image: serviceMasonry,
    description: "Complete masonry construction for a 4-bedroom family home in Sandton.",
  },
  {
    id: 2,
    title: "Timber Lodge Retreat",
    category: "Timber Homes",
    image: serviceTimber,
    description: "Custom timber frame construction for a luxury mountain retreat.",
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
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    emblaApi.on("select", onSelect);
    emblaApi.on("pointerDown", () => clearInterval(autoplay));
    onSelect();

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our completed projects showcasing quality craftsmanship and attention to detail.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative group"
          onMouseEnter={() => setShowSwipeHint(true)}
          onMouseLeave={() => setShowSwipeHint(false)}
          onTouchStart={() => setShowSwipeHint(true)}
        >
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-primary/70 hover:bg-primary text-primary-foreground p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 ${
              showSwipeHint ? "opacity-100" : "opacity-30"
            } hover:opacity-100 hover:scale-110`}
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Swipe Hint - Left */}
          <div
            className={`absolute left-16 md:left-20 top-1/2 -translate-y-1/2 z-10 text-primary-foreground bg-primary/60 px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 pointer-events-none ${
              showSwipeHint ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            ← Swipe
          </div>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden rounded-xl">
            <div className="flex gap-4 md:gap-6">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 min-w-0"
                >
                  <div
                    className="group/card relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-full animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                        <span className="text-accent text-sm font-medium uppercase tracking-wide">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-heading font-bold mt-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    {/* Always visible badge */}
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium shadow-md">
                      {project.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-primary/70 hover:bg-primary text-primary-foreground p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 ${
              showSwipeHint ? "opacity-100" : "opacity-30"
            } hover:opacity-100 hover:scale-110`}
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Swipe Hint - Right */}
          <div
            className={`absolute right-16 md:right-20 top-1/2 -translate-y-1/2 z-10 text-primary-foreground bg-primary/60 px-3 py-1 rounded-full text-sm font-medium transition-all duration-500 pointer-events-none ${
              showSwipeHint ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            Swipe →
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-2.5 h-2.5 rounded-full bg-primary/30 hover:bg-accent transition-colors duration-300"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-card rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-primary/80 text-primary-foreground p-2 rounded-full hover:bg-primary transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="p-6">
              <span className="text-accent text-sm font-semibold uppercase tracking-wide">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl font-heading font-bold text-foreground mt-1 mb-3">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground">
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
