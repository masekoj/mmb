import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import masonryImg from "@/assets/service-masonry.jpg";
import timberImg from "@/assets/service-timber.jpg";
import deckingImg from "@/assets/service-decking.jpg";
import roofingImg from "@/assets/service-roofing.jpg";
import paintingImg from "@/assets/service-painting.jpg";
import waterproofingImg from "@/assets/service-waterproofing.jpg";

const services = [
  {
    title: "Masonry Building",
    description:
      "Expert brick and block work for residential and commercial structures. Quality craftsmanship that stands the test of time.",
    image: masonryImg,
  },
  {
    title: "Timber Homes",
    description:
      "Beautiful, sustainable timber frame construction. Create your dream wooden home with our skilled craftsmen.",
    image: timberImg,
  },
  {
    title: "Decking",
    description:
      "Transform your outdoor space with stunning wooden decks. Perfect for entertaining and relaxation.",
    image: deckingImg,
  },
  {
    title: "Roofing",
    description:
      "Complete roofing solutions from installation to repairs. Protecting your home from the elements.",
    image: roofingImg,
  },
  {
    title: "Painting",
    description:
      "Professional interior and exterior painting services. Refresh your property with a perfect finish.",
    image: paintingImg,
  },
  {
    title: "Waterproofing",
    description:
      "Comprehensive waterproofing solutions for roofs, walls, and foundations. Keep your property dry and protected.",
    image: waterproofingImg,
  },
];

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
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-card hover:shadow-lg transition-all duration-500 bg-card"
            >
              {/* Image Container */}
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

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for something specific?
          </p>
          <Button variant="cta" size="xl" onClick={scrollToContact}>
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
