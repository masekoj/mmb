import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Thabo Mokoena",
    location: "Johannesburg, Gauteng",
    rating: 5,
    text: "Maseko Master Builders exceeded our expectations with our home renovation. Their attention to detail and professionalism was outstanding. Highly recommended!",
    project: "Home Renovation",
  },
  {
    name: "Sarah van der Berg",
    location: "Pretoria, Gauteng",
    rating: 5,
    text: "The waterproofing work they did on our roof was exceptional. No more leaks after 3 years! The team was punctual and cleaned up after themselves.",
    project: "Roof Waterproofing",
  },
  {
    name: "David Nkosi",
    location: "Sandton, Gauteng",
    rating: 5,
    text: "Built our dream timber deck perfectly. The craftsmanship is beautiful and the wood quality is premium. Fair pricing and excellent communication throughout.",
    project: "Timber Decking",
  },
  {
    name: "Linda Mthembu",
    location: "Centurion, Gauteng",
    rating: 4,
    text: "Professional masonry work on our boundary walls. The team was skilled and completed the project on time. Would definitely use them again.",
    project: "Masonry Building",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating
              ? "fill-accent text-accent"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4 uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            What Our <span className="text-secondary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about our work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-background rounded-2xl p-6 lg:p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="mb-4 pt-2">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between border-t border-border/50 pt-4">
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                  {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-hero text-primary-foreground">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-bold">4.9/5</span>
            <span className="text-primary-foreground/80">Average Rating from 500+ Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
