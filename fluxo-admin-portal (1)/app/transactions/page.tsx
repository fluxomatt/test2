"use client"

import { useState } from "react"
import { Download, Search, Filter, Calendar, ArrowUpDown, FileText, MoreHorizontal } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample transaction data
const transactions = [
  {
    id: "TX123",
    employee: {
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "WeWork Soho",
    date: "2023-03-08",
    amount: 45.0,
    status: "Completed",
  },
  {
    id: "TX124",
    employee: {
      name: "Michael Chen",
      email: "michael.chen@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "Industrious Downtown",
    date: "2023-03-07",
    amount: 65.0,
    status: "Completed",
  },
  {
    id: "TX125",
    employee: {
      name: "Emily Rodriguez",
      email: "emily.rodriguez@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "Spaces Oxford Street",
    date: "2023-03-07",
    amount: 35.0,
    status: "Pending",
  },
  {
    id: "TX126",
    employee: {
      name: "David Kim",
      email: "david.kim@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "WeWork Shoreditch",
    date: "2023-03-06",
    amount: 55.0,
    status: "Completed",
  },
  {
    id: "TX127",
    employee: {
      name: "Jessica Lee",
      email: "jessica.lee@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "Regus Central",
    date: "2023-03-05",
    amount: 40.0,
    status: "Completed",
  },
  {
    id: "TX128",
    employee: {
      name: "Robert Taylor",
      email: "robert.taylor@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "WeWork Financial District",
    date: "2023-03-04",
    amount: 50.0,
    status: "Completed",
  },
  {
    id: "TX129",
    employee: {
      name: "Amanda Garcia",
      email: "amanda.garcia@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "Spaces Canary Wharf",
    date: "2023-03-03",
    amount: 60.0,
    status: "Refunded",
  },
  {
    id: "TX130",
    employee: {
      name: "James Wilson",
      email: "james.wilson@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "Industrious Midtown",
    date: "2023-03-02",
    amount: 45.0,
    status: "Completed",
  },
  {
    id: "TX131",
    employee: {
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "WeWork Chelsea",
    date: "2023-03-01",
    amount: 35.0,
    status: "Completed",
  },
  {
    id: "TX132",
    employee: {
      name: "William Brown",
      email: "william.brown@example.com",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    venue: "Regus West End",
    date: "2023-02-28",
    amount: 55.0,
    status: "Completed",
  },
]

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedDateRange, setSelectedDateRange] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  // Filter transactions based on search term, status, and date range
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = selectedStatus === "all" || transaction.status.toLowerCase() === selectedStatus.toLowerCase()

    // Simple date filtering logic
    let matchesDate = true
    const txDate = new Date(transaction.date)
    const today = new Date()

    if (selectedDateRange === "today") {
      matchesDate = txDate.toDateString() === today.toDateString()
    } else if (selectedDateRange === "week") {
      const weekAgo = new Date()
      weekAgo.setDate(today.getDate() - 7)
      matchesDate = txDate >= weekAgo
    } else if (selectedDateRange === "month") {
      const monthAgo = new Date()
      monthAgo.setMonth(today.getMonth() - 1)
      matchesDate = txDate >= monthAgo
    }

    return matchesSearch && matchesStatus && matchesDate
  })

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <PageHeader
          title="Transactions & Reporting"
          description="Track and manage your team's workspace expenses"
          actions={
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Export Report
              </Button>
            </div>
          }
        />

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Transactions</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="refunded">Refunded</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search transactions..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="refunded">Refunded</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select value={selectedDateRange} onValueChange={setSelectedDateRange}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Date Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Time</SelectItem>
                        <SelectItem value="today">Today</SelectItem>
                        <SelectItem value="week">Last 7 Days</SelectItem>
                        <SelectItem value="month">Last 30 Days</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline">
                      <Filter className="mr-2 h-4 w-4" />
                      More Filters
                    </Button>
                  </div>
                </div>

                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[250px]">
                          <div className="flex items-center space-x-1">
                            <span>Employee</span>
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>Venue</TableHead>
                        <TableHead>
                          <div className="flex items-center space-x-1">
                            <span>Date</span>
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>
                          <div className="flex items-center space-x-1">
                            <span>Amount</span>
                            <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredTransactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <Avatar>
                                <AvatarImage src={transaction.employee.avatar} alt={transaction.employee.name} />
                                <AvatarFallback>
                                  {transaction.employee.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-medium">{transaction.employee.name}</p>
                                <p className="text-sm text-muted-foreground">{transaction.employee.email}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>{transaction.venue}</TableCell>
                          <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                          <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                transaction.status === "Completed"
                                  ? "default"
                                  : transaction.status === "Pending"
                                    ? "outline"
                                    : "secondary"
                              }
                            >
                              {transaction.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>
                                  <FileText className="mr-2 h-4 w-4" />
                                  Download Receipt
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {transaction.status === "Pending" && (
                                  <DropdownMenuItem>Approve Transaction</DropdownMenuItem>
                                )}
                                {transaction.status !== "Refunded" && (
                                  <DropdownMenuItem className="text-destructive">Request Refund</DropdownMenuItem>
                                )}
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-muted-foreground">
                    Showing <strong>{filteredTransactions.length}</strong> of <strong>{transactions.length}</strong>{" "}
                    transactions
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {/* Similar content as "all" tab but filtered for completed transactions */}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {/* Similar content as "all" tab but filtered for pending transactions */}
          </TabsContent>

          <TabsContent value="refunded" className="space-y-4">
            {/* Similar content as "all" tab but filtered for refunded transactions */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

