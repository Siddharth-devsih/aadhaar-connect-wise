import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ComparisonSection from "@/components/ComparisonSection";
import SeedingProcessSection from "@/components/SeedingProcessSection";
import FAQSection from "@/components/FAQSection";
import StudentCorner from "@/components/StudentCorner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ComparisonSection />
      <SeedingProcessSection />
      <StudentCorner />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;