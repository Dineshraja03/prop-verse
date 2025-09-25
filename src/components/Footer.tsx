import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-secondary rounded-lg p-2">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">EstateHub</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in finding the perfect property. We connect buyers, sellers, and renters with premium real estate opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Properties", href: "/properties" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="flex flex-col space-y-2">
              {[
                "Property Sales",
                "Property Rentals", 
                "Property Management",
                "Investment Advisory",
                "Market Analysis",
              ].map((service) => (
                <span
                  key={service}
                  className="text-primary-foreground/80 hover:text-secondary transition-smooth cursor-pointer"
                >
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Real Estate Ave, Suite 100<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">hello@estatehub.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-primary-foreground/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-primary-foreground/60 text-sm">
            © {currentYear} EstateHub. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-primary-foreground/60 hover:text-secondary transition-smooth">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;