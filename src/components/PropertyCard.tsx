import { Link } from "react-router-dom";
import { Heart, Bed, Bath, Square, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Property {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: {
    city: string;
    area?: string;
  };
  type: string;
  status: 'sale' | 'rent';
  bedrooms: number;
  bathrooms: number;
  area: number;
  image: string;
  featured?: boolean;
  slug: string;
}

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'featured';
}

const PropertyCard = ({ property, variant = 'default' }: PropertyCardProps) => {
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const cardClass = variant === 'featured' 
    ? "property-card-hover shadow-premium" 
    : "property-card-hover shadow-card";

  return (
    <Card className={`group overflow-hidden border-0 ${cardClass}`}>
      <div className="relative">
        <Link to={`/property/${property.slug}`}>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="h-full w-full object-cover transition-smooth group-hover:scale-105"
            />
          </div>
        </Link>
        
        {/* Overlay badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge 
            variant={property.status === 'sale' ? 'default' : 'secondary'}
            className="bg-background/90 text-foreground border-0 shadow-sm"
          >
            For {property.status === 'sale' ? 'Sale' : 'Rent'}
          </Badge>
          {property.featured && (
            <Badge className="gradient-secondary text-white border-0 shadow-sm">
              Featured
            </Badge>
          )}
        </div>

        {/* Favorite button */}
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-3 right-3 h-8 w-8 p-0 bg-background/90 hover:bg-background border-0 shadow-sm"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">
              {formatPrice(property.price, property.currency)}
              {property.status === 'rent' && (
                <span className="text-sm font-normal text-muted-foreground">/month</span>
              )}
            </div>
          </div>

          {/* Title */}
          <Link to={`/property/${property.slug}`}>
            <h3 className="font-semibold text-foreground transition-smooth hover:text-primary line-clamp-2">
              {property.title}
            </h3>
          </Link>

          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {property.location.area && `${property.location.area}, `}
              {property.location.city}
            </span>
          </div>

          {/* Property details */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Square className="h-4 w-4" />
              <span>{property.area} sq ft</span>
            </div>
          </div>

          {/* Property type */}
          <div className="pt-2">
            <Badge variant="outline" className="text-xs">
              {property.type}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;