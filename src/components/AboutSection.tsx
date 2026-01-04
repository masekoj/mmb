import { CheckCircle, Users, Building, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Building, value: "750+", label: "Projects Completed" },
  { icon: Trophy, value: "20+", label: "Years Experience" },
];

const features = [
  "Licensed and insured professionals",
  "Quality materials and workmanship",
  "Competitive pricing guaranteed",
  "On-time project completion",
  "Free consultations and quotes",
  "After-service support",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection animation="fadeUp">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-semibold text-sm mb-4 uppercase tracking-wide">
                About Us
              </span>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={100}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
                Building <span className="text-secondary">Excellence</span> Since
                2013
              </h2>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={200}>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Maseko Master Builders and Waterproofing (PTY) LTD is a trusted
                name in the South African construction industry. With over two
                decades of experience, we have built our reputation on quality
                workmanship, reliability, and customer satisfaction.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fadeUp" delay={300}>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our team of skilled craftsmen specializes in masonry building,
                timber homes, decking, roofing, painting, and comprehensive
                waterproofing solutions. We take pride in transforming our
                clients&apos; visions into reality, one project at a time.
              </p>
            </AnimatedSection>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="slideLeft"
                  delay={400 + index * 50}
                >
                  <div className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="relative">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-6">
              {stats.map((stat, index) => (
                <AnimatedSection
                  key={index}
                  animation="scaleUp"
                  delay={index * 150}
                >
                  <div className="flex items-center gap-6 p-6 rounded-xl bg-gradient-hero text-primary-foreground shadow-lg">
                    <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <stat.icon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                      <div className="text-4xl font-extrabold mb-1">
                        {stat.value}
                      </div>
                      <div className="text-primary-foreground/80 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sky-light/30 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
