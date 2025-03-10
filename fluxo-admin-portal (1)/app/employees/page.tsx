"use client"

import { useState } from "react"
import { Plus, MoreHorizontal, Download, Search, ArrowUpDown } from "lucide-react"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

// Sample employee data
const employees = [
  {
    id: "EMP001",
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    department: "Marketing",
    allowance: 250,
    status: "Active",
    spent: 180,
    joinedDate: "2022-06-15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP002",
    name: "Michael Chen",
    email: "michael.chen@example.com",
    department: "Sales",
    allowance: 300,
    status: "Active",
    spent: 210,
    joinedDate: "2022-04-10",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP003",
    name: "Emily Rodriguez",
    email: "emily.rodriguez@example.com",
    department: "Engineering",
    allowance: 350,
    status: "Active",
    spent: 290,
    joinedDate: "2022-01-05",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP004",
    name: "David Kim",
    email: "david.kim@example.com",
    department: "Design",
    allowance: 250,
    status: "Active",
    spent: 120,
    joinedDate: "2022-08-20",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP005",
    name: "Jessica Lee",
    email: "jessica.lee@example.com",
    department: "Product",
    allowance: 300,
    status: "Pending",
    spent: 0,
    joinedDate: "2023-03-01",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP006",
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    department: "Engineering",
    allowance: 350,
    status: "Active",
    spent: 220,
    joinedDate: "2022-05-12",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP007",
    name: "Amanda Garcia",
    email: "amanda.garcia@example.com",
    department: "Marketing",
    allowance: 250,
    status: "Active",
    spent: 190,
    joinedDate: "2022-07-08",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "EMP008",
    name: "James Wilson",
    email: "james.wilson@example.com",
    department: "Sales",
    allowance: 300,
    status: "Inactive",
    spent: 150,
    joinedDate: "2022-03-15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [isAddEmployeeOpen, setIsAddEmployeeOpen] = useState(false)

  // Filter employees based on search term, department, and status
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch =
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDepartment =
      selectedDepartment === "all" || employee.department.toLowerCase() === selectedDepartment.toLowerCase()

    const matchesStatus = selectedStatus === "all" || employee.status.toLowerCase() === selectedStatus.toLowerCase()

    return matchesSearch && matchesDepartment && matchesStatus
  })

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <PageHeader
          title="Employee Management"
          description="Manage your team's workspace access and allowances"
          actions={
            <Button onClick={() => setIsAddEmployeeOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Employee
            </Button>
          }
        />

        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search employees..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
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
                    <TableHead>Department</TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Monthly Allowance</span>
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>
                      <div className="flex items-center space-x-1">
                        <span>Spent This Month</span>
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Date Joined</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={employee.avatar} alt={employee.name} />
                            <AvatarFallback>
                              {employee.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{employee.name}</p>
                            <p className="text-sm text-muted-foreground">{employee.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>${employee.allowance}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            employee.status === "Active"
                              ? "default"
                              : employee.status === "Pending"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell>${employee.spent}</TableCell>
                      <TableCell>{new Date(employee.joinedDate).toLocaleDateString()}</TableCell>
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
                            <DropdownMenuItem>Edit Employee</DropdownMenuItem>
                            <DropdownMenuItem>Adjust Allowance</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Deactivate Employee</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isAddEmployeeOpen} onOpenChange={setIsAddEmployeeOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add New Employee</DialogTitle>
            <DialogDescription>Add a new employee to your team and set their workspace allowance.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" placeholder="Full name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input id="email" type="email" placeholder="Email address" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="department" className="text-right">
                Department
              </Label>
              <Select>
                <SelectTrigger id="department" className="col-span-3">
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="allowance" className="text-right">
                Allowance
              </Label>
              <div className="col-span-3 flex items-center">
                <span className="mr-2">$</span>
                <Input id="allowance" type="number" defaultValue="250" />
                <span className="ml-2">per month</span>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddEmployeeOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" onClick={() => setIsAddEmployeeOpen(false)}>
              Add Employee
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

