import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Shield, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Spread Awareness",
      description: "Educate students about the critical difference between Aadhaar linked and DBT enabled accounts"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Reduce Confusion",
      description: "Clear, simple explanations to eliminate misconceptions about Aadhaar banking"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Benefits",
      description: "Ensure students receive government subsidies and scholarships directly"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Easy Process",
      description: "Step-by-step guidance for Aadhaar seeding and DBT activation"
    }
  ];

  const timelineSteps = [
    { step: "1", title: "Aadhaar", desc: "Get your Aadhaar card" },
    { step: "2", title: "Bank Account", desc: "Open bank account" },
    { step: "3", title: "DBT Activation", desc: "Enable DBT services" },
    { step: "4", title: "Benefits", desc: "Receive direct transfers" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About This Portal
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Empowering Students with <span className="text-primary">Financial Awareness</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our mission is to ensure every student understands the importance of DBT-enabled accounts
            and receives their rightful government benefits without any confusion.
          </p>
        </div>

        {/* Purpose Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Infographic */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Your Journey to Financial Benefits</CardTitle>
              <CardDescription>Simple timeline from Aadhaar to receiving benefits</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                {timelineSteps.map((item, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                    {index < timelineSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -translate-x-1/2"></div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;