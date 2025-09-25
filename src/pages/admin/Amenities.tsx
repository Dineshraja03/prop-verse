import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Trash2, Plus, Search, Wifi, Car, Dumbbell, Waves, Shield, Trees } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";

const iconMap = {
  wifi: Wifi,
  car: Car,
  gym: Dumbbell,
  pool: Waves,
  security: Shield,
  garden: Trees,
};

const mockAmenities = [
  {
    id: 1,
    name: "Swimming Pool",
    description: "Large outdoor swimming pool with deck area",
    icon: "pool",
    createdAt: "2024-01-10"
  },
  {
    id: 2,
    name: "Gym/Fitness Center",
    description: "Fully equipped fitness center with modern equipment",
    icon: "gym",
    createdAt: "2024-01-10"
  },
  {
    id: 3,
    name: "Parking Space",
    description: "Covered parking spaces for residents",
    icon: "car",
    createdAt: "2024-01-10"
  },
  {
    id: 4,
    name: "24/7 Security",
    description: "Round-the-clock security with CCTV surveillance",
    icon: "security",
    createdAt: "2024-01-10"
  },
  {
    id: 5,
    name: "High-Speed WiFi",
    description: "Complimentary high-speed internet connectivity",
    icon: "wifi",
    createdAt: "2024-01-10"
  },
  {
    id: 6,
    name: "Garden/Landscaping",
    description: "Beautiful landscaped gardens and green spaces",
    icon: "garden",
    createdAt: "2024-01-10"
  }
];

export default function Amenities() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingAmenity, setEditingAmenity] = useState<any>(null);
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      icon: "wifi"
    }
  });

  const filteredAmenities = mockAmenities.filter(amenity =>
    amenity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    amenity.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (amenity: any) => {
    setEditingAmenity(amenity);
    form.reset({
      name: amenity.name,
      description: amenity.description,
      icon: amenity.icon
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    toast({
      title: "Delete Amenity",
      description: `Amenity ID: ${id} would be deleted`,
      variant: "destructive",
    });
  };

  const handleAdd = () => {
    setEditingAmenity(null);
    form.reset({
      name: "",
      description: "",
      icon: "wifi"
    });
    setIsDialogOpen(true);
  };

  const onSubmit = (data: any) => {
    toast({
      title: editingAmenity ? "Amenity Updated" : "Amenity Added",
      description: `Amenity "${data.name}" ${editingAmenity ? 'updated' : 'added'} successfully`,
    });
    setIsDialogOpen(false);
    form.reset();
  };

  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Wifi;
    return <IconComponent className="h-5 w-5 text-primary" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Amenities Management</h1>
          <p className="text-muted-foreground">Manage property amenities and features</p>
        </div>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={handleAdd}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Amenity
        </Button>
      </div>

      {/* Search */}
      <Card className="p-6 bg-background border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search amenities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </Card>

      {/* Amenities Table */}
      <Card className="bg-background border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Icon</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAmenities.map((amenity) => (
              <TableRow key={amenity.id}>
                <TableCell>{renderIcon(amenity.icon)}</TableCell>
                <TableCell className="font-medium">{amenity.name}</TableCell>
                <TableCell className="max-w-xs truncate">{amenity.description}</TableCell>
                <TableCell>{amenity.createdAt}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleEdit(amenity)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleDelete(amenity.id)}
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

      {/* Add/Edit Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editingAmenity ? 'Edit' : 'Add'} Amenity</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter amenity name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter amenity description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end space-x-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  {editingAmenity ? 'Update' : 'Add'} Amenity
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}