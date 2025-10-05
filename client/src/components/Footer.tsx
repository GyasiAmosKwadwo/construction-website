import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, MessageCircle, Video } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        "Residential Construction",
        "Commercial Construction", 
        "Renovation & Remodeling",
        "Design & Build",
        "Emergency Services"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Safety",
        "Insurance"
      ]
    },
    {
      title: "Resources",
      links: [
        "Project Gallery",
        "Testimonials",
        "FAQ",
        "Blog",
        "Free Estimates"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100078641064058", label: "Facebook" },
    { icon: MessageCircle, href: "https://chat.whatsapp.com/JjNKXjp4hxC9bJyKe6yLqj", label: "WhatsApp" },
    { icon: Video, href: "https://www.tiktok.com/@frank.gyasi2?_t=ZM-900FlwVlF1Q&_r=1", label: "TikTok" }
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-display font-bold text-primary mb-4" data-testid="text-footer-logo">
              Gyasi's Construction
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md" data-testid="text-footer-description">
              Building dreams and creating homes for over 15 years. Quality craftsmanship, 
              Reliable service, and customer satisfaction are at the heart of everything we do.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span data-testid="text-footer-phone">(+233) 024 641 9847</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span data-testid="text-footer-email">fgyasi807@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span data-testid="text-footer-address">Kumasi-Krunom, Ghana</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  data-testid={`button-social-${social.label.toLowerCase()}`}
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4" data-testid={`text-footer-section-${section.title.toLowerCase()}`}>
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                      data-testid={`link-footer-${link.toLowerCase().replace(' ', '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Gyasi's Construction. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="link-terms">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200" data-testid="link-licensing">
              Licensing
            </a>
          </div>

          <div className="text-sm text-muted-foreground" data-testid="text-license-info">
            License #12345 • Bonded & Insured
          </div>
        </div>
      </div>
    </footer>
  );
}
