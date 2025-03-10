"use client"

import { useState } from "react"
import { Users, CreditCard, Calendar, BarChart3, ArrowUpRight, Download, Filter } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data for charts
const usageData = [
  { month: "Jan", usage: 40 },
  { month: "Feb", usage: 30 },
  { month: "Mar", usage: 45 },
  { month: "Apr", usage: 50 },
  { month: "May", usage: 60 },
  { month: "Jun", usage: 75 },
  { month: "Jul", usage: 82 },
]

const employeeUsageData = [
  { name: "Marketing", usage: 35 },
  { name: "Sales", usage: 28 },
  { name: "Engineering", usage: 42 },
  { name: "Design", usage: 18 },
  { name: "Product", usage: 25 },
]

// Sample data for recent transactions
const recentTransactions = [
  {
    id: "TX123",
    employee: "Sarah Johnson",
    venue: "WeWork Soho",
    date: "2023-03-08",
    amount: "$45.00",
    status: "Completed",
  },
  {
    id: "TX124",
    employee: "Michael Chen",
    venue: "Industrious Downtown",
    date: "2023-03-07",
    amount: "$65.00",
    status: "Completed",
  },
  {
    id: "TX125",
    employee: "Emily Rodriguez",
    venue: "Spaces Oxford Street",
    date: "2023-03-07",
    amount: "$35.00",
    status: "Pending",
  },
  {
    id: "TX126",
    employee: "David Kim",
    venue: "WeWork Shoreditch",
    date: "2023-03-06",
    amount: "$55.00",
    status: "Completed",
  },
  {
    id: "TX127",
    employee: "Jessica Lee",
    venue: "Regus Central",
    date: "2023-03-05",
    amount: "$40.00",
    status: "Completed",
  },
]

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState("month")

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <PageHeader
          title="Welcome Back, John – Your Team's Workspace Hub"
          actions={
            <div className="flex items-center gap-2">
              <Select defaultValue={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="quarter">This Quarter</SelectItem>
                  <SelectItem value="year">This Year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          }
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Employees"
            value="24"
            description="Total users on the account"
            icon={<Users className="h-4 w-4" />}
            trend={{ value: 12, label: "from last month" }}
          />
          <StatCard
            title="Monthly Allowance Used"
            value="68%"
            description="$3,400 of $5,000 used"
            icon={<BarChart3 className="h-4 w-4" />}
            trend={{ value: 8, label: "from last month" }}
          />
          <StatCard
            title="Upcoming Payment"
            value="$5,240"
            description="Due on April 15, 2023"
            icon={<CreditCard className="h-4 w-4" />}
          />
          <StatCard
            title="Recent Bookings"
            value="18"
            description="In the last 7 days"
            icon={<Calendar className="h-4 w-4" />}
            trend={{ value: -5, label: "from previous week" }}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Workspace Usage Trends</CardTitle>
              <CardDescription>Monthly workspace allowance consumption over time</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <ChartContainer
                config={{
                  usage: {
                    label: "Usage",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={usageData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="usage"
                      stroke="var(--color-usage)"
                      fill="var(--color-usage)"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Department Usage</CardTitle>
              <CardDescription>Workspace usage by department</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  usage: {
                    label: "Usage",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="h-[300px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={employeeUsageData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="usage" fill="var(--color-usage)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your team's latest workspace bookings</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="h-8">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee</TableHead>
                  <TableHead>Venue</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell className="font-medium">{transaction.employee}</TableCell>
                    <TableCell>{transaction.venue}</TableCell>
                    <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          transaction.status === "Completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="sr-only">View details</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-center mt-4">
              <Button variant="outline" className="w-full">
                View All Transactions
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2">
                  <Users className="h-6 w-6" />
                  <span>Add Employees</span>
                </Button>
                <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2" variant="outline">
                  <BarChart3 className="h-6 w-6" />
                  <span>Adjust Allowance</span>
                </Button>
                <Button className="h-auto py-4 flex flex-col items-center justify-center gap-2" variant="outline">
                  <Download className="h-6 w-6" />
                  <span>View Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Renewals</CardTitle>
              <CardDescription>Subscription renewal dates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Team Subscription</p>
                    <p className="text-sm text-muted-foreground">Pro Plan</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">April 15, 2023</p>
                    <p className="text-sm text-muted-foreground">$5,240</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Storage Add-on</p>
                    <p className="text-sm text-muted-foreground">Extra 500GB</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">April 22, 2023</p>
                    <p className="text-sm text-muted-foreground">$120</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-2">
                  Manage Subscription
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

