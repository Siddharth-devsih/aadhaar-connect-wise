import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CheckCircle, ExternalLink, HelpCircle, BookOpen, Award } from "lucide-react";
import { useState } from "react";

const StudentCorner = () => {
  const [quizAnswers, setQuizAnswers] = useState<{[key: string]: string}>({});
  
  const quizQuestions = [
    {
      id: "q1",
      question: "Is your bank account DBT enabled?",
      options: ["Yes, I receive government benefits", "No, only Aadhaar linked", "I'm not sure"],
      correct: 0
    },
    {
      id: "q2", 
      question: "What do you need to enable DBT on your account?",
      options: ["Just Aadhaar number", "Aadhaar + Bank visit", "Only bank account"],
      correct: 1
    }
  ];

  const resources = [
    {
      title: "UIDAI Official Portal",
      description: "Official Aadhaar services and information",
      link: "https://uidai.gov.in",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      title: "DBT Bharat Portal", 
      description: "Check your DBT status and learn about schemes",
      link: "https://dbtbharat.gov.in",
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      title: "Bank Account DBT Check",
      description: "Verify if your account receives government benefits",
      link: "#",
      icon: <Award className="h-5 w-5" />
    }
  ];

  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  return (
    <section id="awareness" className="py-20 bg-gradient-to-br from-neutral-bg to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="h-5 w-5 text-success" />
            <span className="text-success font-medium">Student Corner</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Learn & Test Your <span className="text-success">Knowledge</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive learning tools and resources to master Aadhaar banking concepts
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Quiz Section */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-primary" />
                  Quick Knowledge Check
                </CardTitle>
                <CardDescription>Test your understanding with these simple questions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {quizQuestions.map((question) => (
                  <div key={question.id} className="space-y-3">
                    <h4 className="font-medium text-foreground">{question.question}</h4>
                    <div className="space-y-2">
                      {question.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuizAnswer(question.id, option)}
                          className={`w-full text-left p-3 rounded-lg border transition-all ${
                            quizAnswers[question.id] === option
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {quizAnswers[question.id] && (
                      <div className="text-sm text-success flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        Answer recorded! 
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Resources Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Helpful Resources</h3>
            {resources.map((resource, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {resource.icon}
                      </div>
                      <span className="text-lg">{resource.title}</span>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="mb-4">{resource.description}</CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:border-primary group-hover:text-primary transition-colors"
                    onClick={() => window.open(resource.link, '_blank')}
                  >
                    Visit Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">DBT Activation Process</CardTitle>
              <CardDescription>Simple steps to enable DBT on your account</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Aadhaar Ready", desc: "Ensure your Aadhaar is active" },
                  { step: "2", title: "Visit Bank", desc: "Go to your bank branch" },
                  { step: "3", title: "Request DBT", desc: "Ask for DBT activation" },
                  { step: "4", title: "Benefits Flow", desc: "Start receiving benefits" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                      {item.step}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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

export default StudentCorner;