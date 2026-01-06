import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in masonry building, timber homes, decking, roofing, painting, and waterproofing. From new construction to renovations and repairs, we deliver comprehensive solutions for residential and commercial properties across Gauteng, South Africa.",
  },
  {
    question: "How do I get a free quote for my project?",
    answer:
      "Simply fill out the contact form on our website or call us directly. We'll schedule a convenient time to visit your property, assess your requirements, and provide a detailed, no-obligation quote within 48 hours.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, Maseko Master Builders & Waterproofing is fully licensed and carries comprehensive insurance coverage. This protects both our team and your property throughout every project we undertake.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We primarily serve the Gauteng region, including Johannesburg, Pretoria, and surrounding areas. For larger projects, we can discuss arrangements for locations outside our primary service area.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A basic waterproofing job might take 1-2 days, while a full timber home construction could take several months. We provide accurate timelines with every quote and pride ourselves on on-time delivery.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Absolutely. All our projects come with a quality guarantee. Specific warranty periods vary by service type—for example, waterproofing comes with a 5-year warranty, and structural work is backed by extended coverage. We stand behind our craftsmanship.",
  },
  {
    question: "Can you handle both residential and commercial projects?",
    answer:
      "Yes, our experienced team handles projects of all sizes. From home renovations and garden decking to commercial building construction and industrial waterproofing, we have the expertise and resources to deliver excellence.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12" animation="fadeUp">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4 uppercase tracking-wide">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services, process, and commitment to quality.
          </p>
        </AnimatedSection>

        {/* Accordion */}
        <AnimatedSection className="max-w-3xl mx-auto" animation="fadeUp" delay={200}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group/faq bg-card border border-border/30 rounded-2xl px-6 shadow-lg hover:shadow-xl hover:scale-[1.01] hover:border-secondary/40 transition-all duration-300 ease-out data-[state=open]:shadow-xl data-[state=open]:border-secondary/50 data-[state=open]:bg-card/80"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-secondary transition-colors py-6 hover:no-underline text-lg group-hover/faq:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>

        {/* Bottom Note */}
        <AnimatedSection className="text-center mt-10" animation="fadeUp" delay={400}>
          <p className="text-muted-foreground">
            Still have questions?{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-secondary font-semibold hover:underline"
            >
              Get in touch with us
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQSection;
