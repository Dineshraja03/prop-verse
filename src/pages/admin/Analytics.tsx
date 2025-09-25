import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import { TrendingUp, Eye, MessageSquare, Users, MapPin } from "lucide-react";

const propertyViewStats = [
  { property: "Luxury Villa Bandra", views: 1240, inquiries: 45 },
  { property: "2BHK Apartment Andheri", views: 980, inquiries: 32 },
  { property: "Commercial Space BKC", views: 756, inquiries: 28 },
  { property: "Penthouse Juhu", views: 654, inquiries: 22 },
  { property: "Villa Lonavala", views: 543, inquiries: 18 }
];

const inquiriesByType = [
  { name: "Viewing Requests", value: 45, color: "hsl(var(--primary))" },
  { name: "Information", value: 32, color: "hsl(var(--secondary))" },
  { name: "Price Negotiation", value: 28, color: "hsl(var(--accent))" },
  { name: "Callback Requests", value: 22, color: "hsl(var(--muted))" },
  { name: "General", value: 18, color: "hsl(var(--destructive))" }
];

const inquiriesBySource = [
  { name: "Website", value: 65, color: "hsl(var(--primary))" },
  { name: "Mobile App", value: 25, color: "hsl(var(--secondary))" },
  { name: "Social Media", value: 15, color: "hsl(var(--accent))" },
  { name: "Referral", value: 10, color: "hsl(var(--muted))" },
  { name: "Advertisement", value: 8, color: "hsl(var(--destructive))" }
];

const monthlyTrends = [
  { month: "Jan", views: 4000, inquiries: 240, conversions: 24 },
  { month: "Feb", views: 3000, inquiries: 180, conversions: 18 },
  { month: "Mar", views: 5000, inquiries: 300, conversions: 30 },
  { month: "Apr", views: 4500, inquiries: 270, conversions: 27 },
  { month: "May", views: 6000, inquiries: 360, conversions: 36 },
  { month: "Jun", views: 5500, inquiries: 330, conversions: 33 }
];

const agentPerformance = [
  { name: "John Smith", listings: 25, inquiries: 145, conversions: 12, revenue: "₹2,50,00,000" },
  { name: "Sarah Johnson", listings: 18, inquiries: 98, conversions: 8, revenue: "₹1,80,00,000" },
  { name: "Mike Wilson", listings: 22, inquiries: 132, conversions: 10, revenue: "₹2,20,00,000" },
  { name: "Emma Davis", listings: 15, inquiries: 87, conversions: 7, revenue: "₹1,50,00,000" }
];

const topCities = [
  { name: "Mumbai", properties: 245, avgPrice: "₹85,00,000" },
  { name: "Delhi", properties: 186, avgPrice: "₹75,00,000" },
  { name: "Bangalore", properties: 152, avgPrice: "₹65,00,000" },
  { name: "Pune", properties: 98, avgPrice: "₹55,00,000" },
  { name: "Hyderabad", properties: 87, avgPrice: "₹45,00,000" }
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Comprehensive insights and performance metrics</p>
        </div>
        <Select defaultValue="30days">
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
            <SelectItem value="1year">Last year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Monthly Trends */}
      <Card className="p-6 bg-background border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Monthly Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={monthlyTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--background))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }} 
            />
            <Area type="monotone" dataKey="views" stackId="1" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.6} />
            <Area type="monotone" dataKey="inquiries" stackId="2" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.6} />
            <Area type="monotone" dataKey="conversions" stackId="3" stroke="hsl(var(--accent))" fill="hsl(var(--accent))" fillOpacity={0.6} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Property Performance & Inquiry Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-background border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Top Performing Properties</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={propertyViewStats} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
              <YAxis dataKey="property" type="category" stroke="hsl(var(--muted-foreground))" width={120} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--background))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Bar dataKey="views" fill="hsl(var(--primary))" />
              <Bar dataKey="inquiries" fill="hsl(var(--secondary))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-background border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Inquiries by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={inquiriesByType}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {inquiriesByType.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Inquiry Sources & Agent Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-background border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Inquiry Sources</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={inquiriesBySource}>
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
              <Bar dataKey="value" fill="hsl(var(--accent))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 bg-background border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Agent Performance</h3>
          <div className="space-y-4">
            {agentPerformance.map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <div className="font-medium text-foreground">{agent.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {agent.listings} listings • {agent.inquiries} inquiries • {agent.conversions} conversions
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-foreground">{agent.revenue}</div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Top Cities */}
      <Card className="p-6 bg-background border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">Top Cities by Properties</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {topCities.map((city, index) => (
            <div key={index} className="p-4 border border-border rounded-lg">
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <div className="font-medium text-foreground">{city.name}</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-foreground">{city.properties}</div>
                <div className="text-sm text-muted-foreground">Properties</div>
                <div className="text-sm font-medium text-primary">{city.avgPrice}</div>
                <div className="text-xs text-muted-foreground">Avg. Price</div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}