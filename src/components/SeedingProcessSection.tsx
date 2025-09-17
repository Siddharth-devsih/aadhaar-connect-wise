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
          
          {/* Instructions for NPCI - Interactive Version */}
          <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-success/5 rounded-xl border border-primary/20">
            <div className="text-center mb-6">
              <h4 className="text-lg font-bold text-foreground mb-2">Interactive Guide: Apply for Aadhaar Seeding</h4>
              <p className="text-sm text-muted-foreground">Follow these steps on NPCI website</p>
            </div>
            
            <div className="grid gap-4 max-w-2xl mx-auto">
              {[
                { 
                  step: "1", 
                  title: "Visit NPCI Website", 
                  desc: "Click the 'Apply for Aadhaar Seeding' button above",
                  icon: "🌐"
                },
                { 
                  step: "2", 
                  title: "Select Consumer", 
                  desc: "Find and click on 'Consumer' option from the main menu",
                  icon: "👤"
                },
                { 
                  step: "3", 
                  title: "Choose BASE", 
                  desc: "Look for 'BASE' service and click on it",
                  icon: "🏦"
                },
                { 
                  step: "4", 
                  title: "Aadhaar Seeding", 
                  desc: "Select 'Aadhaar Seeding' from the available services",
                  icon: "🎯"
                },
                { 
                  step: "5", 
                  title: "Complete Process", 
                  desc: "Fill in your details and follow the instructions",
                  icon: "✅"
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <Card className="hover:shadow-md transition-all duration-300 hover:border-primary/30">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                            {item.step}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{item.icon}</span>
                            <h5 className="font-semibold text-foreground">{item.title}</h5>
                          </div>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span className="text-sm text-success font-medium">Ready to start your seeding process</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeedingProcessSection;