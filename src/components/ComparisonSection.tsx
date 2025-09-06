import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, ArrowRight } from "lucide-react";
import aadhaarLinkedIcon from "@/assets/aadhaar-linked-icon.jpg";
import dbtEnabledIcon from "@/assets/dbt-enabled-icon.jpg";

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-20 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Understanding the <span className="text-primary">Key Difference</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Both accounts are linked to Aadhaar, but only DBT enabled accounts can receive government subsidies directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Aadhaar Linked Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-aadhaar-linked">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-aadhaar-linked/10 flex items-center justify-center">
                <img 
                  src={aadhaarLinkedIcon} 
                  alt="Aadhaar Linked Account"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </div>
              <CardTitle className="text-2xl text-foreground">
                Aadhaar Linked Account
              </CardTitle>
              <Badge variant="outline" className="w-fit mx-auto text-aadhaar-linked border-aadhaar-linked">
                Basic Linkage
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-center text-lg mb-6">
                A bank account that has your Aadhaar number registered, but may not be configured for direct benefit transfers.
              </CardDescription>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-aadhaar-linked" />
                  <span className="text-sm">Aadhaar number linked to account</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-aadhaar-linked" />
                  <span className="text-sm">Basic KYC compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">May not receive DBT benefits</span>
                </div>
                <div className="flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Requires additional activation</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DBT Enabled Card */}
          <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-dbt-enabled">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-dbt-enabled/10 flex items-center justify-center">
                <img 
                  src={dbtEnabledIcon} 
                  alt="DBT Enabled Account"
                  className="w-12 h-12 rounded-lg object-cover"
                />
              </div>
              <CardTitle className="text-2xl text-foreground">
                DBT Enabled Account
              </CardTitle>
              <Badge className="w-fit mx-auto bg-dbt-enabled text-white">
                Benefits Ready
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription className="text-center text-lg mb-6">
                An Aadhaar seeded account that's actively configured to receive government subsidies and benefits directly.
              </CardDescription>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-dbt-enabled" />
                  <span className="text-sm">Aadhaar seeded and verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-dbt-enabled" />
                  <span className="text-sm">DBT portal activated</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-dbt-enabled" />
                  <span className="text-sm">Receives direct subsidies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-dbt-enabled" />
                  <span className="text-sm">Government scheme benefits</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Difference Highlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 via-background to-success/5 border-2 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Key Difference</h3>
                <p className="text-muted-foreground">Understanding what makes DBT enabled accounts special</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <div className="text-center">
                  <div className="bg-aadhaar-linked/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-aadhaar-linked font-bold text-lg">AL</span>
                  </div>
                  <p className="text-sm font-medium">Aadhaar Linked = Just linkage</p>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="h-8 w-8 text-primary" />
                </div>
                
                <div className="text-center">
                  <div className="bg-dbt-enabled/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <span className="text-dbt-enabled font-bold text-lg">DE</span>
                  </div>
                  <p className="text-sm font-medium">DBT Enabled = Active benefits transfer</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;