import HeroSection from "../components/HeroSection";
import FeaturedProperties from "../components/FeaturedProperties";
import PopularCities from "../components/PopularCities";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Users, Award, TrendingUp } from "lucide-react";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProperties />
      <PopularCities />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose EstateHub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional service and helping you find the perfect property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Trusted Platform",
                description: "Secure transactions and verified listings for your peace of mind."
              },
              {
                icon: Users,
                title: "Expert Agents",
                description: "Professional real estate agents with local market expertise."
              },
              {
                icon: Award,
                title: "Award Winning",
                description: "Recognized for excellence in real estate service and innovation."
              },
              {
                icon: TrendingUp,
                title: "Market Insights",
                description: "Data-driven insights to help you make informed decisions."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto gradient-primary rounded-full flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect home through EstateHub.
            Start your property journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              variant="secondary" 
              size="lg" 
              className="transition-spring hover:scale-[1.02] bg-white text-primary hover:bg-white/90"
            >
              <Link to="/properties" className="inline-flex items-center">
                Browse Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary transition-spring hover:scale-[1.02]"
            >
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
