import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Wrench, Paintbrush, Hammer, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, additions, and new construction projects built to your exact specifications.",
      features: ["Custom Home Building", "Home Additions", "Foundation Work", "Structural Repairs"]
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Professional commercial building services for offices, retail spaces, and industrial facilities.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Facilities"]
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our comprehensive renovation and remodeling services.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Basement Finishing", "Room Additions"]
    },
    {
      icon: Paintbrush,
      title: "Design & Build",
      description: "Complete design-build solutions from concept to completion with our integrated team.",
      features: ["Architectural Design", "Project Planning", "3D Visualization", "Interior Design"]
    },
    {
      icon: Hammer,
      title: "General Contracting",
      description: "Full-service general contracting with project management and quality assurance.",
      features: ["Project Management", "Subcontractor Coordination", "Permit Handling", "Quality Control"]
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "24/7 emergency construction services for urgent repairs and disaster recovery.",
      features: ["Storm Damage Repair", "Water Damage Restoration", "Emergency Boarding", "Structural Repairs"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4" data-testid="text-services-title">
            Our Construction Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-subtitle">
            From residential homes to commercial buildings, we provide comprehensive construction 
            services with quality craftsmanship and professional expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.title} className="hover-elevate" data-testid={`card-service-${service.title.toLowerCase().replace(' ', '-')}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold" data-testid={`text-service-title-${service.title.toLowerCase().replace(' ', '-')}`}>
                  {service.title}
                </CardTitle>
                <CardDescription data-testid={`text-service-description-${service.title.toLowerCase().replace(' ', '-')}`}>
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground" data-testid={`text-feature-${feature.toLowerCase().replace(' ', '-')}`}>
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full" data-testid={`button-learn-more-${service.title.toLowerCase().replace(' ', '-')}`}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-services-cta">
            Need a custom solution? We work with you to create the perfect plan for your project.
          </p>
          <Button size="lg" data-testid="button-custom-quote">
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}