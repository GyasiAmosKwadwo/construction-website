import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Award } from "lucide-react";
import heroImage from "@assets/generated_images/Construction_site_hero_image_348013f4.png";

export default function Hero() {
  const stats = [
    { icon: Users, label: "Projects Completed", value: "150+" },
    { icon: Calendar, label: "Years Experience", value: "15+" },
    { icon: Award, label: "Happy Clients", value: "200+" },
  ];

  return (
    <section id="home" className="relative bg-background overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction site with modern home"
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 bg-primary/10 border-primary text-white" data-testid="badge-licensed">
            Licensed & Insured
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-display font-bold text-white mb-6" data-testid="text-hero-title">
            Building Dreams,{" "}
            <span className="text-primary">Creating Homes</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-200 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
            Professional construction services for residential, commercial, and renovation projects. 
            Quality craftsmanship with over 15 years of trusted experience.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap gap-4 mb-8">
            {["Free Estimates", "Licensed Contractors", "Quality Materials", "On-Time Delivery"].map((feature) => (
              <div key={feature} className="flex items-center space-x-2 text-white">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium" data-testid={`text-feature-${feature.toLowerCase().replace(' ', '-')}`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              data-testid="button-get-free-quote"
            >
              Get Free Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 backdrop-blur-sm px-8"
              data-testid="button-view-projects"
            >
              View Our Projects
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-white" data-testid={`text-stat-${stat.label.toLowerCase().replace(' ', '-')}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300" data-testid={`text-stat-label-${stat.label.toLowerCase().replace(' ', '-')}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}