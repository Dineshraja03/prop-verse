import { useState } from "react";
import { Filter, Grid, List, Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "@/components/PropertyCard";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

// Mock data - expanded for demonstration
const mockProperties = [
  {
    id: "1",
    title: "Modern Luxury Apartment with City Views",
    price: 850000,
    currency: "USD",
    location: { city: "New York", area: "Manhattan" },
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
    location: { city: "Miami", area: "Coral Gables" },
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
    location: { city: "San Francisco", area: "Pacific Heights" },
    type: "Townhouse",
    status: "rent" as const,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2800,
    image: property3,
    slug: "contemporary-townhouse-pacific-heights"
  },
  // Add more mock properties
  {
    id: "4",
    title: "Spacious Family Home with Garden",
    price: 750000,
    currency: "USD", 
    location: { city: "Austin", area: "Downtown" },
    type: "House",
    status: "sale" as const,
    bedrooms: 4,
    bathrooms: 3,
    area: 2900,
    image: property1,
    slug: "spacious-family-home-austin"
  },
  {
    id: "5",
    title: "Luxury Condo with Waterfront Views",
    price: 3200,
    currency: "USD",
    location: { city: "Seattle", area: "Belltown" },
    type: "Apartment",
    status: "rent" as const,
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    image: property2,
    slug: "luxury-condo-waterfront-seattle"
  },
  {
    id: "6",
    title: "Charming Suburban Villa",
    price: 650000,
    currency: "USD",
    location: { city: "Denver", area: "Highlands" },
    type: "Villa",
    status: "sale" as const,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 2400,
    image: property3,
    slug: "charming-suburban-villa-denver"
  }
];

const Properties = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);

  const handleSearch = () => {
    // Implement search logic
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Property Listings</h1>
          <p className="text-lg opacity-90 mb-6">
            Discover your perfect property from our extensive collection
          </p>
          
          {/* Search Bar */}
          <div className="flex gap-2 max-w-2xl">
            <div className="flex-1">
              <Input
                placeholder="Search by location, type, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-background border-0"
              />
            </div>
            <Button onClick={handleSearch} className="gradient-secondary text-white border-0">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Filter Sidebar */}
          <div className="lg:w-64 space-y-6">
            <div className="bg-background rounded-lg p-6 shadow-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>

              <div className={`space-y-4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Property Type
                  </label>
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Price Range
                  </label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Prices</SelectItem>
                      <SelectItem value="0-500000">Under $500K</SelectItem>
                      <SelectItem value="500000-1000000">$500K - $1M</SelectItem>
                      <SelectItem value="1000000+">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Sort By
                  </label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="area">Area</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {filteredProperties.length} Properties Found
                </h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="secondary">All Locations</Badge>
                  <Badge variant="secondary">All Types</Badge>
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Property Grid/List */}
            <div className={
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                : 'space-y-6'
            }>
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  variant="default"
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;