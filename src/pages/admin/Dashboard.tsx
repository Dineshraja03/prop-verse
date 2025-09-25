import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Home, MessageSquare, Users, Eye } from "lucide-react";

const mockKPIs = [
  { title: "Total Properties", value: "1,234", change: "+12%", icon: Home, trend: "up" },
  { title: "Active Inquiries", value: "89", change: "+23%", icon: MessageSquare, trend: "up" },
  { title: "Total Users", value: "456", change: "+8%", icon: Users, trend: "up" },
  { title: "Property Views", value: "12,345", change: "+34%", icon: Eye, trend: "up" }
];

const recentInquiries = [
  { id: 1, name: "John Smith", property: "Luxury Villa in Bandra", status: "new", date: "2024-01-15" },
  { id: 2, name: "Sarah Johnson", property: "2BHK Apartment in Andheri", status: "contacted", date: "2024-01-14" },
  { id: 3, name: "Mike Wilson", property: "Commercial Space in BKC", status: "qualified", date: "2024-01-13" },
  { id: 4, name: "Emma Davis", property: "Penthouse in Juhu", status: "new", date: "2024-01-12" },
  { id: 5, name: "David Brown", property: "Villa in Lonavala", status: "converted", date: "2024-01-11" }
];

const propertyViews = [
  { name: "Jan", views: 4000 },
  { name: "Feb", views: 3000 },
  { name: "Mar", views: 5000 },
  { name: "Apr", views: 4500 },
  { name: "May", views: 6000 },
  { name: "Jun", views: 5500 }
];

const topCities = [
  { name: "Mumbai", value: 45, color: "hsl(var(--primary))" },
  { name: "Delhi", value: 25, color: "hsl(var(--secondary))" },
  { name: "Bangalore", value: 20, color: "hsl(var(--accent))" },
  { name: "Others", value: 10, color: "hsl(var(--muted))" }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "new": return "bg-blue-100 text-blue-800";
    case "contacted": return "bg-yellow-100 text-yellow-800";
    case "qualified": return "bg-purple-100 text-purple-800";
    case "converted": return "bg-green-100 text-green-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your properties.</p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mockKPIs.map((kpi, index) => (
          <Card key={index} className="p-6 bg-background border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-foreground">{kpi.value}</h3>
                <p className="text-sm text-primary font-medium">{kpi.change}</p>
              </div>
              <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                <kpi.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-background border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Property Views</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={propertyViews}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Bar dataKey="views" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-background border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Top Cities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={topCities}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {topCities.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Inquiries */}
      <Card className="bg-background border-border">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Recent Inquiries</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Property</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentInquiries.map((inquiry) => (
              <TableRow key={inquiry.id}>
                <TableCell className="font-medium">{inquiry.name}</TableCell>
                <TableCell>{inquiry.property}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(inquiry.status)}>
                    {inquiry.status}
                  </Badge>
                </TableCell>
                <TableCell>{inquiry.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}