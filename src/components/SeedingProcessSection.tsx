import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Smartphone, Building, MessageSquare, CheckCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

const SeedingProcessSection = () => {
  const [selectedBank, setSelectedBank] = useState("");

  const seedingMethods = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Netbanking",
      description: "Login to your bank's website and link Aadhaar online",
      steps: ["Login to netbanking", "Find 'Aadhaar Linking' section", "Enter Aadhaar number", "Verify OTP"]
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App",
      description: "Use your bank's mobile app for quick linking",
      steps: ["Open bank app", "Go to 'Services'", "Select 'Link Aadhaar'", "Complete verification"]
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Bank Branch",
      description: "Visit your nearest branch with required documents",
      steps: ["Visit branch", "Fill linking form", "Submit Aadhaar copy", "Get acknowledgment"]
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "SMS Service",
      description: "Send SMS to your bank's designated number",
      steps: ["Type: UIDAI<space>Last 4 digits of A/c<space>Aadhaar number", "Send to bank number", "Wait for confirmation", "Follow up if needed"]
    }
  ];

  const popularBanks = [
    "State Bank of India", "HDFC Bank", "ICICI Bank", "Axis Bank", 
    "Bank of Baroda", "Punjab National Bank", "Canara Bank", "Union Bank of India"
  ];

  const processSteps = [
    { 
      step: "1", 
      title: "Gather Documents", 
      desc: "Aadhaar card and bank account details",
      icon: <FileText className="h-5 w-5" />
    },
    { 
      step: "2", 
      title: "Choose Method", 
      desc: "Select from netbanking, app, branch, or SMS",
      icon: <Smartphone className="h-5 w-5" />
    },
    { 
      step: "3", 
      title: "Complete Linking", 
      desc: "Follow the process and verify OTP",
      icon: <CheckCircle className="h-5 w-5" />
    },
    { 
      step: "4", 
      title: "Get Confirmation", 
      desc: "Receive SMS confirmation from bank",
      icon: <MessageSquare className="h-5 w-5" />
    }
  ];

  return (
    <section id="seeding-process" className="py-20 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-success text-white">
            Seeding Process
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Simple Steps to <span className="text-success">Enable DBT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple ways to link your Aadhaar with your bank account and activate DBT benefits
          </p>
        </div>

        {/* Process Overview */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">4-Step Process</CardTitle>
              <CardDescription>Complete Aadhaar seeding in just 4 simple steps</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                {processSteps.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <div className="mb-3 flex justify-center text-success">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bank Selection */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Select Your Bank</CardTitle>
              <CardDescription>Get customized instructions for your bank</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Select value={selectedBank} onValueChange={setSelectedBank}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose your bank for specific instructions" />
                </SelectTrigger>
                <SelectContent>
                  {popularBanks.map((bank) => (
                    <SelectItem key={bank} value={bank}>{bank}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedBank && (
                <div className="mt-4 p-4 bg-success/10 rounded-lg">
                  <p className="text-success font-medium text-center">
                    ✓ Instructions for {selectedBank} will be shown below
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Seeding Methods */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {seedingMethods.map((method, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg text-success">
                    {method.icon}
                  </div>
                  {method.title}
                </CardTitle>
                <CardDescription>{method.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {method.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center text-success text-sm font-medium">
                        {stepIndex + 1}
                      </div>
                      <span className="text-sm text-foreground">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://myaadhaar.uidai.gov.in/bank-seeding-status', '_blank')}
            >
              Check Seeding Status
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://www.npci.org.in/', '_blank')}
            >
              Apply for Aadhaar Seeding
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Verify if your Aadhaar is already linked to your bank account or start the seeding process
          </p>
          
          {/* Instructions for NPCI */}
          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-sm text-foreground mb-3">Steps to Apply for Aadhaar Seeding on NPCI:</h4>
            <ol className="text-sm text-muted-foreground space-y-1 text-left max-w-md mx-auto">
              <li>1. Click "Apply for Aadhaar Seeding" button above</li>
              <li>2. Select "Consumer" from the menu</li>
              <li>3. Click on "BASE" option</li>
              <li>4. Select "Aadhaar Seeding" service</li>
              <li>5. Follow the on-screen instructions</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedingProcessSection;