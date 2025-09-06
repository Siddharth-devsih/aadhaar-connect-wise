import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is an Aadhaar Linked Account?",
      answer: "An Aadhaar Linked Account is a bank account where your Aadhaar number has been registered with the bank. This provides basic linkage but doesn't automatically make it eligible for receiving government benefits through Direct Benefit Transfer (DBT)."
    },
    {
      question: "What is a DBT Enabled Account?",
      answer: "A DBT Enabled Account is an Aadhaar seeded bank account that has been specifically activated on the DBT platform. This means it can receive government subsidies, pensions, scholarships, and other benefits directly from various government schemes."
    },
    {
      question: "How do I check if my account is DBT enabled?",
      answer: "You can check your DBT status by: 1) Visiting the official DBT website (dbtbharat.gov.in), 2) Using the 'Know Your Payment' feature, 3) Entering your Aadhaar number, 4) Checking if your bank account appears in the DBT database, or 5) Contacting your bank's customer service."
    },
    {
      question: "Can I convert my Aadhaar Linked account to DBT Enabled?",
      answer: "Yes, if your account is already Aadhaar linked, you can request your bank to enable it for DBT. Visit your bank branch with your Aadhaar card and request DBT activation. The bank will update your account status on the DBT platform."
    },
    {
      question: "What benefits will I miss without DBT activation?",
      answer: "Without DBT activation, you may not receive: Government subsidies (LPG, fertilizer, etc.), Pension payments, Scholarship amounts, Employment guarantee payments (NREGA), and other direct cash transfers from government schemes."
    },
    {
      question: "Is there any charge for DBT activation?",
      answer: "No, DBT activation is completely free. Banks are mandated to provide this service without any charges. If anyone asks for money for DBT activation, it's likely a fraud."
    },
    {
      question: "How long does DBT activation take?",
      answer: "DBT activation typically takes 2-7 working days once you submit the request to your bank. The bank needs to update your account information on the central DBT database maintained by the government."
    },
    {
      question: "Can I have multiple DBT enabled accounts?",
      answer: "While you can have multiple bank accounts linked to your Aadhaar, it's recommended to have only one primary account enabled for DBT to avoid confusion in benefit disbursement. You can change your DBT account if needed."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Got Questions? We've Got <span className="text-primary">Answers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about Aadhaar banking and DBT benefits
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Interactive FAQ</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-4 data-[state=open]:bg-neutral-bg/50"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 pt-2 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;