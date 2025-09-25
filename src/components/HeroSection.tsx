import { useState } from "react";
import { Search, MapPin, DollarSign, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroImage from "@/assets/hero-property.jpg";

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
  });

  const handleSearch = () => {
    // Navigate to properties page with filters
    console.log("Searching with:", searchData);
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury Real Estate"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="text-center lg:text-left text-white mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Dream
              <span className="block gradient-secondary bg-clip-text text-transparent">
                Property Today
              </span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              Discover premium properties in the world's most desirable locations. 
              Your perfect home awaits with our curated selection of luxury real estate.
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-background/95 backdrop-blur-md rounded-xl p-6 shadow-premium border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </label>
                <Input
                  placeholder="Enter city or area"
                  value={searchData.location}
                  onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                  className="search-focus border-border"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Property Type
                </label>
                <Select 
                  value={searchData.propertyType} 
                  onValueChange={(value) => setSearchData({ ...searchData, propertyType: value })}
                >
                  <SelectTrigger className="search-focus border-border">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Price Range
                </label>
                <Select 
                  value={searchData.priceRange} 
                  onValueChange={(value) => setSearchData({ ...searchData, priceRange: value })}
                >
                  <SelectTrigger className="search-focus border-border">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-100000">Under $100,000</SelectItem>
                    <SelectItem value="100000-500000">$100,000 - $500,000</SelectItem>
                    <SelectItem value="500000-1000000">$500,000 - $1,000,000</SelectItem>
                    <SelectItem value="1000000+">$1,000,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground opacity-0 pointer-events-none">
                  Search
                </label>
                <Button 
                  onClick={handleSearch}
                  className="w-full gradient-primary text-white border-0 h-10 transition-spring hover:scale-[1.02]"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search Properties
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {[
              { label: "Properties Listed", value: "10,000+" },
              { label: "Happy Clients", value: "5,000+" },
              { label: "Cities Covered", value: "50+" },
              { label: "Years Experience", value: "15+" },
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;