import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StepFormContact from "@/components/StepFormContact";
import Footer from "@/components/Footer";
import FloatingFAQButton from "@/components/FloatingFAQButton";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingContactButtons from "@/components/FloatingContactButtons";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Maseko Master Builders & Waterproofing | Quality Construction in South Africa</title>
        <meta
          name="description"
          content="Maseko Master Builders specializes in masonry building, timber homes, decking, roofing, painting, and waterproofing. 20+ years of quality construction in Gauteng, South Africa."
        />
        <meta
          name="keywords"
          content="masonry, timber homes, decking, roofing, painting, waterproofing, construction, builders, South Africa, Gauteng"
        />
        <link rel="canonical" href="https://masekobuilders.co.za" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <AboutSection />
          <FAQSection />
          <TestimonialsSection />
          <StepFormContact />
        </main>
        <Footer />
        <FloatingFAQButton />
        <ScrollToTop />
        <FloatingContactButtons />
      </div>
    </>
  );
};

export default Index;
