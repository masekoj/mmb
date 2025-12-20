import { useState } from "react";
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
} from "lucide-react";

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
    details: ["Western cape, South Africa"],
    action: null,
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 7AM - 5PM", "Sat: 8AM - 1PM"],
    action: null,
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description:
        "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4 uppercase tracking-wide">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Ready to <span className="text-secondary">Start</span> Your Project?
          </h2>
          <p className="text-lg text-muted-foreground">
            Contact us today for a free consultation and quote. Our team is
            ready to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl bg-card shadow-card"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">
                    {item.title}
                  </h4>
                  {item.details.map((detail, i) =>
                    item.action ? (
                      <a
                        key={i}
                        href={item.action}
                        className="block text-muted-foreground hover:text-secondary transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-muted-foreground">
                        {detail}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Trust Badge */}
            <div className="p-6 rounded-xl bg-gradient-hero text-primary-foreground">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-accent" />
                <h4 className="font-bold text-lg">Free Quote Guarantee</h4>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Get a detailed, no-obligation quote within 24 hours. We believe
                in transparent pricing with no hidden costs.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-card shadow-lg"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Request a Free Quote
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="enter name"
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="**@gmail.com"
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+_ _ _"
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select a service</option>
                    <option value="masonry">Masonry Building</option>
                    <option value="timber">Timber Homes</option>
                    <option value="decking">Decking</option>
                    <option value="roofing">Roofing</option>
                    <option value="painting">Painting</option>
                    <option value="waterproofing">Waterproofing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Project Details
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, budget, and timeline..."
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
