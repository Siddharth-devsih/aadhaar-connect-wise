import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "UIDAI Portal", url: "https://uidai.gov.in" },
    { name: "DBT Bharat", url: "https://dbtbharat.gov.in" },
    { name: "PM-Kisan Portal", url: "https://pmkisan.gov.in" },
    { name: "Aadhaar Authentication", url: "https://resident.uidai.gov.in" }
  ];

  const importantLinks = [
    { name: "Check DBT Status", url: "#" },
    { name: "Link Aadhaar to Bank", url: "#" },
    { name: "Government Schemes", url: "#" },
    { name: "Banking Guidelines", url: "#" }
  ];

  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-primary rounded-lg">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AadhaarGuide</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Empowering students and citizens with knowledge about Aadhaar banking and Direct Benefit Transfer systems.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span className="text-sm">help@aadhaarguide.edu</span>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span className="text-sm">1800-XXX-XXXX (Toll Free)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Official Portals</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/80 hover:text-background transition-colors text-sm flex items-center gap-1 group"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Important Services</h3>
            <ul className="space-y-2">
              {importantLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    className="text-background/80 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-background">Contact & Support</h3>
            <div className="space-y-4">
              <Card className="bg-background/10 border-background/20 p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-background">Educational Initiative</p>
                    <p className="text-xs text-background/80">
                      Ministry of Electronics & IT<br />
                      Government of India
                    </p>
                  </div>
                </div>
              </Card>
              
              <Button 
                variant="outline" 
                className="w-full border-background/20 text-background hover:bg-background/10"
                onClick={() => document.querySelector("#faqs")?.scrollIntoView({ behavior: "smooth" })}
              >
                View FAQ Section
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/80 text-sm">
              © 2024 AadhaarGuide. Educational website for awareness purposes.
            </div>
            <div className="flex gap-6 text-sm text-background/80">
              <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-background transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-background transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;