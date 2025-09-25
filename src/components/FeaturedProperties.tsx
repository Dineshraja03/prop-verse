import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

// Mock data - in a real app, this would come from your API
const featuredProperties = [
  {
    id: "1",
    title: "Modern Luxury Apartment with City Views",
    price: 850000,
    currency: "USD",
    location: {
      city: "New York",
      area: "Manhattan"
    },
    type: "Apartment",
    status: "sale" as const,
    bedrooms: 3,
    bathrooms: 2,
    area: 2100,
    image: property1,
    featured: true,
    slug: "modern-luxury-apartment-manhattan"
  },
  {
    id: "2",
    title: "Stunning Villa with Pool and Garden",
    price: 1250000,
    currency: "USD",
    location: {
      city: "Miami",
      area: "Coral Gables"
    },
    type: "Villa",
    status: "sale" as const,
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    image: property2,
    featured: true,
    slug: "stunning-villa-coral-gables"
  },
  {
    id: "3",
    title: "Contemporary Townhouse in Prime Location",
    price: 4500,
    currency: "USD",
    location: {
      city: "San Francisco",
      area: "Pacific Heights"
    },
    type: "Townhouse",
    status: "rent" as const,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2800,
    image: property3,
    featured: true,
    slug: "contemporary-townhouse-pacific-heights"
  }
];

const FeaturedProperties = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in the most sought-after locations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              variant="featured" 
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="gradient-primary text-white border-0 transition-spring hover:scale-[1.02]">
            <Link to="/properties" className="inline-flex items-center">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;