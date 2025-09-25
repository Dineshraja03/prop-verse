import { MapPin, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PopularCities = () => {
  const cities = [
    {
      name: "New York",
      properties: 2847,
      avgPrice: "$1,200,000",
      growth: "+12%",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=500&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      name: "Los Angeles",
      properties: 1923,
      avgPrice: "$950,000",
      growth: "+8%",
      image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?w=500&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      name: "Miami",
      properties: 1456,
      avgPrice: "$750,000",
      growth: "+15%",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      name: "San Francisco",
      properties: 987,
      avgPrice: "$1,800,000",
      growth: "+5%",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      name: "Chicago",
      properties: 1632,
      avgPrice: "$650,000",
      growth: "+10%",
      image: "https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?w=500&h=300&fit=crop&crop=entropy&auto=format"
    },
    {
      name: "Seattle",
      properties: 891,
      avgPrice: "$850,000",
      growth: "+7%",
      image: "https://images.unsplash.com/photo-1541535650810-10d26f1e2f29?w=500&h=300&fit=crop&crop=entropy&auto=format"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Popular Cities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore properties in the most popular cities with the highest demand and growth potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <Card 
              key={city.name} 
              className="group overflow-hidden border-0 property-card-hover shadow-card cursor-pointer"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Growth badge */}
                <Badge className="absolute top-3 right-3 bg-success text-success-foreground border-0">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {city.growth}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      {city.name}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Properties</div>
                      <div className="font-semibold text-foreground">{city.properties.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Avg. Price</div>
                      <div className="font-semibold text-primary">{city.avgPrice}</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="text-xs text-muted-foreground">
                      Click to explore properties in {city.name}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCities;