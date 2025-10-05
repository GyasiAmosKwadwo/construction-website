import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Home, Building2, Wrench, Paintbrush, Hammer, Shield } from "lucide-react";

type ServiceType = {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  details: string;
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, additions, and new construction projects built to your exact specifications.",
      features: ["Custom Home Building", "Home Additions", "Foundation Work", "Structural Repairs"],
      details: "We specialize in building custom homes that reflect your personal style and meet your family's needs. Our residential construction services include everything from initial design consultation to final walkthrough, ensuring your dream home becomes a reality. With over 15 years of experience, we handle all aspects of residential construction, from foundation to finishing touches, using only the highest quality materials and craftsmanship."
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Professional commercial building services for offices, retail spaces, and industrial facilities.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Industrial Facilities"],
      details: "Our commercial construction expertise covers everything from small office buildings to large industrial complexes. We understand the unique requirements of commercial projects, including compliance with building codes, energy efficiency standards, and accessibility regulations. Our team works closely with architects, engineers, and clients to deliver functional, cost-effective commercial spaces that support business growth."
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our comprehensive renovation and remodeling services.",
      features: ["Kitchen Remodeling", "Bathroom Renovation", "Basement Finishing", "Room Additions"],
      details: "Whether you're updating a single room or renovating an entire home, our renovation and remodeling services breathe new life into existing spaces. We handle everything from minor cosmetic updates to major structural changes, always prioritizing quality workmanship and attention to detail. Our design consultants work with you to create spaces that are both beautiful and functional."
    },
    {
      icon: Paintbrush,
      title: "Design & Build",
      description: "Complete design-build solutions from concept to completion with our integrated team.",
      features: ["Architectural Design", "Project Planning", "3D Visualization", "Interior Design"],
      details: "Our design-build approach streamlines the construction process by combining design and construction under one roof. This integrated method ensures better communication, faster project completion, and cost savings. From initial concept sketches to final construction, our team provides comprehensive project management and quality control throughout every phase."
    },
    {
      icon: Hammer,
      title: "General Contracting",
      description: "Full-service general contracting with project management and quality assurance.",
      features: ["Project Management", "Subcontractor Coordination", "Permit Handling", "Quality Control"],
      details: "As your general contractor, we serve as the single point of contact for your entire construction project. We coordinate all subcontractors, manage timelines and budgets, handle permits and inspections, and ensure that every aspect of your project meets our high standards of quality. Our experienced project managers keep you informed throughout the process."
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "24/7 emergency construction services for urgent repairs and disaster recovery.",
      features: ["Storm Damage Repair", "Water Damage Restoration", "Emergency Boarding", "Structural Repairs"],
      details: "When disaster strikes, time is critical. Our 24/7 emergency services team is ready to respond immediately to protect your property and begin repairs. We handle everything from emergency boarding and tarping to comprehensive restoration services. Our certified technicians use advanced techniques and equipment to restore your property quickly and effectively."
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
                <Button variant="outline" size="sm" className="w-full" onClick={() => { setSelectedService(service); setIsOpen(true); }} data-testid={`button-learn-more-${service.title.toLowerCase().replace(' ', '-')}`}>
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

      {/* Service Details Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3">
              {selectedService && <selectedService.icon className="h-6 w-6 text-primary" />}
              {selectedService?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>
          {selectedService && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {selectedService.details}
              </p>
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="space-y-2">
                {selectedService.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex gap-2 pt-4">
                <Button variant="outline" onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => { setIsOpen(false); window.location.hash = '#contact'; }}>Contact Us</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
