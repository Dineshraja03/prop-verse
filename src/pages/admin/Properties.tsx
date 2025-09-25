import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Edit, Trash2, Plus, Star, StarOff, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockProperties = [
  {
    id: 1,
    title: "Luxury Villa in Bandra",
    type: "villa",
    price: "₹2,50,00,000",
    status: "available",
    featured: true,
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "2BHK Apartment in Andheri",
    type: "apartment",
    price: "₹75,00,000",
    status: "under_offer",
    featured: false,
    createdAt: "2024-01-14"
  },
  {
    id: 3,
    title: "Commercial Space in BKC",
    type: "commercial",
    price: "₹5,00,00,000",
    status: "available",
    featured: true,
    createdAt: "2024-01-13"
  },
  {
    id: 4,
    title: "Penthouse in Juhu",
    type: "apartment",
    price: "₹8,75,00,000",
    status: "sold",
    featured: false,
    createdAt: "2024-01-12"
  },
  {
    id: 5,
    title: "Villa in Lonavala",
    type: "villa",
    price: "₹1,20,00,000",
    status: "available",
    featured: true,
    createdAt: "2024-01-11"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "available": return "bg-green-100 text-green-800";
    case "under_offer": return "bg-yellow-100 text-yellow-800";
    case "sold": return "bg-red-100 text-red-800";
    case "rented": return "bg-blue-100 text-blue-800";
    case "off_market": return "bg-gray-100 text-gray-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function Properties() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const { toast } = useToast();

  const filteredProperties = mockProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || property.status === statusFilter;
    const matchesType = typeFilter === "all" || property.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleEdit = (id: number) => {
    toast({
      title: "Edit Property",
      description: `Opening edit form for property ID: ${id}`,
    });
  };

  const handleDelete = (id: number) => {
    toast({
      title: "Delete Property",
      description: `Property ID: ${id} would be deleted`,
      variant: "destructive",
    });
  };

  const handleToggleFeatured = (id: number, currentStatus: boolean) => {
    toast({
      title: currentStatus ? "Removed from Featured" : "Added to Featured",
      description: `Property ID: ${id} feature status updated`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Properties Management</h1>
          <p className="text-muted-foreground">Manage your property listings</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Add Property
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-6 bg-background border-border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="under_offer">Under Offer</SelectItem>
              <SelectItem value="sold">Sold</SelectItem>
              <SelectItem value="rented">Rented</SelectItem>
              <SelectItem value="off_market">Off Market</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="land">Land</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Properties Table */}
      <Card className="bg-background border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Featured</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProperties.map((property) => (
              <TableRow key={property.id}>
                <TableCell className="font-medium">{property.title}</TableCell>
                <TableCell className="capitalize">{property.type}</TableCell>
                <TableCell className="font-semibold">{property.price}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(property.status)}>
                    {property.status.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleToggleFeatured(property.id, property.featured)}
                  >
                    {property.featured ? (
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    ) : (
                      <StarOff className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </TableCell>
                <TableCell>{property.createdAt}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEdit(property.id)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(property.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}