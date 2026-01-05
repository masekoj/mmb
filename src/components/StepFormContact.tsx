import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  User,
  MessageSquare,
  Wrench,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+27 73 271 8226"],
    action: "tel:+27732718226",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["Ishmaelmaseko022@gmail.com"],
    action: "mailto:Ishmaelmaseko022@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Western Cape, South Africa"],
    action: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 7AM - 5PM", "Sat: 8AM - 1PM"],
    action: null,
    showStatus: true,
  },
];

// Check if currently open
const isCurrentlyOpen = () => {
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();
  
  if (day === 0) return false; // Sunday closed
  if (day === 6) return hour >= 8 && hour < 13; // Saturday 8AM-1PM
  return hour >= 7 && hour < 17; // Mon-Fri 7AM-5PM
};

const StepFormContact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(isCurrentlyOpen());
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const interval = setInterval(() => setIsOpen(isCurrentlyOpen()), 60000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    { id: "intro", title: "Your Details", icon: User },
    { id: "service", title: "Your Project", icon: Wrench },
    { id: "message", title: "Your Vision", icon: MessageSquare },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSent(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setCurrentStep(0);
      setIsSent(false);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-muted relative overflow-hidden">
      {/* Subtle paper texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIxIi8+PC9zdmc+')]" />
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16" animation="fadeUp">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4 uppercase tracking-wide">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4 font-heading">
            Ready to <span className="text-secondary">Start</span> Your Project?
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact us today for a free consultation. Our team is ready to bring your vision to life.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Cards - Artisanal Style */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => (
              <AnimatedSection key={index} animation="slideLeft" delay={index * 100}>
                <div className="group relative p-5 rounded-2xl bg-card/80 backdrop-blur-sm shadow-lg border border-border/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:border-secondary/30">
                  {/* Paper texture effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-[0.02] bg-gradient-to-br from-secondary/20 to-transparent pointer-events-none" />
                  
                  <div className="flex gap-4 relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center flex-shrink-0 border border-secondary/20 group-hover:scale-105 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-foreground">{item.title}</h4>
                        {/* Live status indicator */}
                        {item.showStatus && (
                          <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium ${
                            isOpen 
                              ? "bg-green-500/10 text-green-600 border border-green-500/20" 
                              : "bg-red-500/10 text-red-500 border border-red-500/20"
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                            {isOpen ? "Open Now" : "Closed"}
                          </span>
                        )}
                      </div>
                      {item.details.map((detail, i) =>
                        item.action ? (
                          <a
                            key={i}
                            href={item.action}
                            className="block text-muted-foreground hover:text-secondary transition-colors text-sm"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Trust Badge */}
            <AnimatedSection animation="scaleUp" delay={500}>
              <div className="p-6 rounded-2xl bg-gradient-hero text-primary-foreground shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent to-transparent" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-bold text-lg">Free Quote Guarantee</h4>
                  </div>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    Get a detailed, no-obligation quote within 24 hours. Transparent pricing with no hidden costs.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Step-by-Step Form */}
          <AnimatedSection className="lg:col-span-3" animation="fadeUp" delay={200}>
            <form
              onSubmit={handleSubmit}
              className="relative p-6 md:p-8 rounded-3xl bg-card shadow-2xl border border-border/50 overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 bg-gradient-to-br from-secondary to-transparent rounded-bl-full" />
              
              <h3 className="text-2xl font-bold text-foreground mb-2 font-heading">
                Tell us about your vision
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Let's start a conversation about your project
              </p>

              {/* Progress Bar */}
              <div className="flex items-center gap-2 mb-8">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center flex-1">
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                        index <= currentStep
                          ? "bg-secondary border-secondary text-secondary-foreground"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      <step.icon className="w-4 h-4" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-2 rounded transition-all duration-300 ${
                        index < currentStep ? "bg-secondary" : "bg-border"
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Step Content */}
              <div className="min-h-[280px] relative">
                {/* Step 1: Your Details */}
                <div className={`transition-all duration-300 ${currentStep === 0 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
                  <div className="space-y-4">
                    <div className="group">
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        What's your name? *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="h-12 transition-all duration-200 focus:scale-[1.01] focus:ring-2 focus:ring-secondary/30 border-border/60"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Best email to reach you? *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="h-12 transition-all duration-200 focus:scale-[1.01] focus:ring-2 focus:ring-secondary/30 border-border/60"
                      />
                      <p className="text-xs text-muted-foreground mt-1.5">We'll send your quote here</p>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Phone number *
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+27 XX XXX XXXX"
                        className="h-12 transition-all duration-200 focus:scale-[1.01] focus:ring-2 focus:ring-secondary/30 border-border/60"
                      />
                      <p className="text-xs text-muted-foreground mt-1.5">We'll only call to discuss your project details</p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Your Project */}
                <div className={`transition-all duration-300 ${currentStep === 1 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        What service are you interested in? *
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { value: "masonry", label: "Masonry Building" },
                          { value: "timber", label: "Timber Homes" },
                          { value: "decking", label: "Decking" },
                          { value: "roofing", label: "Roofing" },
                          { value: "painting", label: "Painting" },
                          { value: "waterproofing", label: "Waterproofing" },
                        ].map((service) => (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, service: service.value })}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-200 hover:scale-[1.02] ${
                              formData.service === service.value
                                ? "border-secondary bg-secondary/10 text-foreground"
                                : "border-border/60 hover:border-secondary/50 text-muted-foreground"
                            }`}
                          >
                            <span className="font-medium text-sm">{service.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Your Vision */}
                <div className={`transition-all duration-300 ${currentStep === 2 ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"}`}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Tell us about your dream project *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your vision, budget range, timeline, and any specific requirements..."
                        rows={6}
                        className="resize-none transition-all duration-200 focus:scale-[1.005] focus:ring-2 focus:ring-secondary/30 border-border/60"
                      />
                      <p className="text-xs text-muted-foreground mt-1.5">The more details, the better we can help</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                {currentStep > 0 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="h-12 px-6"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back
                  </Button>
                )}
                
                {currentStep < steps.length - 1 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 h-12 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    disabled={
                      (currentStep === 0 && (!formData.name || !formData.email || !formData.phone)) ||
                      (currentStep === 1 && !formData.service)
                    }
                  >
                    Continue
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className={`flex-1 h-12 relative overflow-hidden group ${
                      isSent 
                        ? "bg-green-500 hover:bg-green-500" 
                        : "bg-secondary hover:bg-secondary/90"
                    } text-secondary-foreground transition-all duration-300`}
                    disabled={isSubmitting || !formData.message}
                  >
                    {/* Liquid fill effect */}
                    <span className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : isSent ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Sent Successfully!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </Button>
                )}
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default StepFormContact;
