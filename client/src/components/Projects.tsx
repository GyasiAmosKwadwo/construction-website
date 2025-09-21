import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, DollarSign } from "lucide-react";
import residentialImage from "@assets/generated_images/Completed_residential_project_f82c0d5a.png";
import commercialImage from "@assets/generated_images/Commercial_construction_project_2e7a12c5.png";
import renovationImage from "@assets/generated_images/Kitchen_renovation_project_624fa6d2.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Residential", "Commercial", "Renovation"];

  const projects = [
    {
      id: 1,
      title: "Modern Family Home",
      category: "Residential",
      image: residentialImage,
      location: "Suburban Heights",
      duration: "8 months",
      budget: "$450,000",
      description: "A beautiful 3,500 sq ft modern family home with contemporary design and energy-efficient features.",
      status: "Completed"
    },
    {
      id: 2,
      title: "Corporate Office Building",
      category: "Commercial",
      image: commercialImage,
      location: "Downtown District",
      duration: "14 months",
      budget: "$1.2M",
      description: "State-of-the-art 50,000 sq ft office building with modern amenities and sustainable design.",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Kitchen & Bath Renovation",
      category: "Renovation",
      image: renovationImage,
      location: "Riverside Community",
      duration: "3 months",
      budget: "$75,000",
      description: "Complete kitchen and master bathroom renovation with luxury finishes and modern appliances.",
      status: "Completed"
    },
    // todo: remove mock functionality - add more projects when real data is available
    {
      id: 4,
      title: "Luxury Townhomes",
      category: "Residential",
      image: residentialImage,
      location: "Garden District",
      duration: "12 months",
      budget: "$850,000",
      description: "High-end townhome development with premium materials and custom architectural details.",
      status: "Completed"
    },
    {
      id: 5,
      title: "Retail Shopping Center",
      category: "Commercial",
      image: commercialImage,
      location: "Commerce Boulevard",
      duration: "18 months",
      budget: "$2.1M",
      description: "Mixed-use retail development with restaurants, shops, and community spaces.",
      status: "Planning"
    },
    {
      id: 6,
      title: "Historic Home Restoration",
      category: "Renovation",
      image: renovationImage,
      location: "Historic Quarter",
      duration: "6 months",
      budget: "$180,000",
      description: "Careful restoration of a Victorian-era home preserving original character while adding modern conveniences.",
      status: "In Progress"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-blue-100 text-blue-800";
      case "Planning": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4" data-testid="text-projects-title">
            Our Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-projects-subtitle">
            Explore our portfolio of successful construction projects showcasing quality craftsmanship 
            and attention to detail across residential, commercial, and renovation work.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              data-testid={`button-filter-${filter.toLowerCase()}`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-elevate" data-testid={`card-project-${project.id}`}>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)} data-testid={`badge-status-${project.id}`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="outline" className="mb-2" data-testid={`badge-category-${project.id}`}>
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm" data-testid={`text-project-description-${project.id}`}>
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span data-testid={`text-project-location-${project.id}`}>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span data-testid={`text-project-duration-${project.id}`}>{project.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2" />
                    <span data-testid={`text-project-budget-${project.id}`}>{project.budget}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full" data-testid={`button-view-details-${project.id}`}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6" data-testid="text-projects-cta">
            Ready to start your own construction project?
          </p>
          <Button size="lg" data-testid="button-start-project">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
}