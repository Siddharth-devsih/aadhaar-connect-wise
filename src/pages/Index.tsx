import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComparisonSection from "@/components/ComparisonSection";
import FAQSection from "@/components/FAQSection";
import StudentCorner from "@/components/StudentCorner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ComparisonSection />
      <StudentCorner />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;