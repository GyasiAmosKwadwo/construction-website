import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState<InsertContactSubmission>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
      });
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message! We'll contact you within 24 hours.",
      });
      console.log("Contact form submitted successfully:", data);
    },
    onError: (error) => {
      let errorMessage = "Something went wrong. Please try again.";
      
      // Try to parse error message for better user feedback
      try {
        const errorText = error.message;
        if (errorText.includes("Please check your form data")) {
          errorMessage = "Please check your form data and try again.";
        } else if (errorText.includes("email")) {
          errorMessage = "Please enter a valid email address.";
        } else if (errorText.includes("name")) {
          errorMessage = "Please enter a valid name (at least 2 characters).";
        } else if (errorText.includes("message")) {
          errorMessage = "Please provide more details about your project (at least 10 characters).";
        }
      } catch {
        // Use default error message
      }
      
      toast({
        title: "Error sending message",
        description: errorMessage,
        variant: "destructive",
      });
      console.error("Contact form submission error:", error);
    },
  });

  const handleInputChange = (field: keyof InsertContactSubmission, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.projectType || !formData.message.trim()) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(+233) 024 641 9847",
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      content: "fgyasi807@gmail.com",
      description: "We respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Kumasi-Krunom, Ghana",
      description: "Visit our office or job sites"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 7:00 AM - 6:00 PM",
      description: "Saturday: 8:00 AM - 4:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-contact-subtitle">
            Ready to start your construction project? Contact us today for a free consultation 
            and detailed quote. We're here to help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <Card key={info.title} className="hover-elevate" data-testid={`card-contact-${info.title.toLowerCase()}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1" data-testid={`text-contact-${info.title.toLowerCase()}-title`}>
                          {info.title}
                        </h3>
                        <p className="text-foreground font-medium mb-1" data-testid={`text-contact-${info.title.toLowerCase()}-content`}>
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground" data-testid={`text-contact-${info.title.toLowerCase()}-description`}>
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="mt-6 border-destructive/20 bg-destructive/5" data-testid="card-emergency-contact">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <MessageSquare className="h-5 w-5 text-destructive" />
                  <h3 className="font-semibold text-destructive" data-testid="text-emergency-title">Emergency Services</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3" data-testid="text-emergency-description">
                  For urgent construction emergencies and repairs
                </p>
                <Button variant="destructive" size="sm" className="w-full" data-testid="button-emergency-call">
                  Call (+233) 0241775954
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card data-testid="card-contact-form">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2" data-testid="text-form-title">
                  <Send className="h-5 w-5" />
                  <span>Request a Quote</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select 
                        value={formData.projectType} 
                        onValueChange={(value) => handleInputChange("projectType", value)} 
                        required
                      >
                        <SelectTrigger data-testid="select-project-type">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential">Residential Construction</SelectItem>
                          <SelectItem value="commercial">Commercial Construction</SelectItem>
                          <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                          <SelectItem value="design-build">Design & Build</SelectItem>
                          <SelectItem value="emergency">Emergency Services</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="budget">Project Budget</Label>
                    <Select 
                      value={formData.budget} 
                      onValueChange={(value) => handleInputChange("budget", value)}
                    >
                      <SelectTrigger data-testid="select-budget">
                        <SelectValue placeholder="Select your budget range (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50k">Under $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                        <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                        <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project, timeline, specific requirements, or any questions you have..."
                      rows={4}
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={contactMutation.isPending}
                    data-testid="button-submit-quote"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Request Free Quote
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}