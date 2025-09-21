import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock, Shield, Star } from "lucide-react";
import teamImage from "@assets/generated_images/Construction_team_photo_716a9849.png";

export default function About() {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "We never compromise on quality. Every project meets our high standards."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We respect your timeline and deliver projects when promised."
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage."
    },
    {
      icon: Star,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our priority. We work until you're happy."
    }
  ];

  const certifications = [
    "Licensed General Contractor",
    "OSHA Safety Certified",
    "Better Business Bureau A+",
    "Green Building Certified",
    "Lead-Safe Certified",
    "Bonded & Insured"
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4" data-testid="text-about-title">
            About Gyasi's Construction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Building trust through quality craftsmanship since 2008. We're a family-owned construction 
            company dedicated to bringing your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Side */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-story-title">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p data-testid="text-story-paragraph-1">
                Founded by Gyasi Thompson in 2008, our construction company started with a simple mission: 
                to provide honest, quality construction services to our community. What began as a small 
                residential contractor has grown into a full-service construction company.
              </p>
              <p data-testid="text-story-paragraph-2">
                Over the years, we've built hundreds of homes, completed countless renovations, and 
                constructed commercial buildings throughout the region. Our reputation is built on 
                quality workmanship, fair pricing, and treating every client like family.
              </p>
              <p data-testid="text-story-paragraph-3">
                Today, our team of skilled professionals continues to uphold the values that started 
                this company: integrity, craftsmanship, and customer satisfaction.
              </p>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4" data-testid="text-certifications-title">
                Certifications & Credentials
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground" data-testid={`text-cert-${cert.toLowerCase().replace(' ', '-')}`}>
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="mt-8" size="lg" data-testid="button-meet-team">
              Meet Our Team
            </Button>
          </div>

          {/* Image Side */}
          <div className="relative">
            <img
              src={teamImage}
              alt="Gyasi's Construction team"
              className="w-full rounded-lg shadow-lg"
              data-testid="img-team-photo"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold" data-testid="text-years-experience">15+</div>
                <div className="text-sm" data-testid="text-years-label">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12" data-testid="text-values-title">
            Why Choose Gyasi's Construction
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover-elevate" data-testid={`card-value-${value.title.toLowerCase().replace(' ', '-')}`}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-value-title-${value.title.toLowerCase().replace(' ', '-')}`}>
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground" data-testid={`text-value-description-${value.title.toLowerCase().replace(' ', '-')}`}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}