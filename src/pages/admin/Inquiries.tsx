import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Eye, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const mockInquiries = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+91 98765 43210",
    property: "Luxury Villa in Bandra",
    type: "viewing",
    status: "new",
    source: "website",
    createdAt: "2024-01-15",
    message: "Interested in scheduling a viewing this weekend."
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    phone: "+91 87654 32109",
    property: "2BHK Apartment in Andheri",
    type: "information",
    status: "contacted",
    source: "mobile",
    createdAt: "2024-01-14",
    message: "Can you provide more details about the amenities?"
  },
  {
    id: 3,
    name: "Mike Wilson",
    email: "mike@example.com",
    phone: "+91 76543 21098",
    property: "Commercial Space in BKC",
    type: "price_negotiation",
    status: "qualified",
    source: "referral",
    createdAt: "2024-01-13",
    message: "Looking to negotiate the price for bulk purchase."
  },
  {
    id: 4,
    name: "Emma Davis",
    email: "emma@example.com",
    phone: "+91 65432 10987",
    property: "Penthouse in Juhu",
    type: "callback_request",
    status: "new",
    source: "social_media",
    createdAt: "2024-01-12",
    message: "Please call me after 6 PM regarding this property."
  },
  {
    id: 5,
    name: "David Brown",
    email: "david@example.com",
    phone: "+91 54321 09876",
    property: "Villa in Lonavala",
    type: "general",
    status: "converted",
    source: "advertisement",
    createdAt: "2024-01-11",
    message: "Ready to proceed with the purchase process."
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "new": return "bg-blue-100 text-blue-800";
    case "contacted": return "bg-yellow-100 text-yellow-800";
    case "qualified": return "bg-purple-100 text-purple-800";
    case "converted": return "bg-green-100 text-green-800";
    case "closed": return "bg-gray-100 text-gray-800";
    case "spam": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case "viewing": return "bg-blue-100 text-blue-800";
    case "information": return "bg-green-100 text-green-800";
    case "price_negotiation": return "bg-orange-100 text-orange-800";
    case "callback_request": return "bg-purple-100 text-purple-800";
    case "general": return "bg-gray-100 text-gray-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function Inquiries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const { toast } = useToast();

  const filteredInquiries = mockInquiries.filter(inquiry => {
    const matchesSearch = inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         inquiry.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || inquiry.status === statusFilter;
    const matchesType = typeFilter === "all" || inquiry.type === typeFilter;
    return matchesSearch && matchesStatus && matchesType;
  });

  const handleStatusChange = (id: number, newStatus: string) => {
    toast({
      title: "Status Updated",
      description: `Inquiry ID: ${id} status changed to ${newStatus}`,
    });
  };

  const handleViewDetails = (id: number) => {
    toast({
      title: "View Details",
      description: `Opening details for inquiry ID: ${id}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Inquiries Management</h1>
          <p className="text-muted-foreground">Manage customer inquiries and leads</p>
        </div>
      </div>

      {/* Filters */}
      <Card className="p-6 bg-background border-border">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search inquiries..."
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
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="qualified">Qualified</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="spam">Spam</SelectItem>
            </SelectContent>
          </Select>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="viewing">Viewing</SelectItem>
              <SelectItem value="information">Information</SelectItem>
              <SelectItem value="price_negotiation">Price Negotiation</SelectItem>
              <SelectItem value="callback_request">Callback Request</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* Inquiries Table */}
      <Card className="bg-background border-border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell className="font-medium">{inquiry.name}</TableCell>
                <TableCell>
                  <div className="text-sm">
                    <div>{inquiry.email}</div>
                    <div className="text-muted-foreground">{inquiry.phone}</div>
                  </div>
                </TableCell>
                <TableCell>{inquiry.property}</TableCell>
                <TableCell>
                  <Badge className={getTypeColor(inquiry.type)}>
                    {inquiry.type.replace('_', ' ')}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Select
                    value={inquiry.status}
                    onValueChange={(value) => handleStatusChange(inquiry.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue>
                        <Badge className={getStatusColor(inquiry.status)}>
                          {inquiry.status}
                        </Badge>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="contacted">Contacted</SelectItem>
                      <SelectItem value="qualified">Qualified</SelectItem>
                      <SelectItem value="converted">Converted</SelectItem>
                      <SelectItem value="closed">Closed</SelectItem>
                      <SelectItem value="spam">Spam</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell className="capitalize">{inquiry.source.replace('_', ' ')}</TableCell>
                <TableCell>{inquiry.createdAt}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewDetails(inquiry.id)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => handleViewDetails(inquiry.id)}
                    >
                      <MessageSquare className="h-4 w-4" />
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