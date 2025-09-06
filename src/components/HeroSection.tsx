import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-comparison.jpg";

const HeroSection = () => {
  const scrollToComparison = () => {
    const element = document.querySelector("#comparison");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-primary/10 via-background to-neutral-bg flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Know the <span className="text-primary">Difference</span> – 
                <br />Secure Your <span className="text-success">Benefits!</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Understanding Aadhaar Linked vs DBT Enabled bank accounts is crucial for receiving government subsidies and benefits directly.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToComparison}
                size="lg"
                className="text-lg px-8 py-6"
              >
                Learn More
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.querySelector("#faqs")?.scrollIntoView({ behavior: "smooth" })}
                className="text-lg px-8 py-6"
              >
                Quick FAQ
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-aadhaar-linked">130+ Crore</div>
                <div className="text-sm text-muted-foreground">Aadhaar Cards Issued</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-dbt-enabled">₹2.2 Lakh Crore</div>
                <div className="text-sm text-muted-foreground">DBT Transfers (2023)</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl bg-card">
              <img 
                src={heroImage} 
                alt="Aadhaar Linked vs DBT Enabled comparison infographic"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-success/10 rounded-2xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;