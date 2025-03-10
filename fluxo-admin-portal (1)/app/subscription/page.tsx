"use client"

import { useState } from "react"
import { CreditCard, CheckCircle, Users, Calendar, Download, ExternalLink } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

// Sample billing history data
const billingHistory = [
  {
    id: "INV-001",
    date: "2023-03-01",
    amount: 5240.0,
    status: "Paid",
  },
  {
    id: "INV-002",
    date: "2023-02-01",
    amount: 5240.0,
    status: "Paid",
  },
  {
    id: "INV-003",
    date: "2023-01-01",
    amount: 4800.0,
    status: "Paid",
  },
  {
    id: "INV-004",
    date: "2022-12-01",
    amount: 4800.0,
    status: "Paid",
  },
  {
    id: "INV-005",
    date: "2022-11-01",
    amount: 4800.0,
    status: "Paid",
  },
]

// Sample plan data
const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small teams just getting started",
    price: 2400,
    features: ["Up to 10 team members", "$200 monthly allowance per member", "Basic reporting", "Email support"],
    current: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Ideal for growing teams with advanced needs",
    price: 5240,
    features: [
      "Up to 50 team members",
      "$250 monthly allowance per member",
      "Advanced reporting & analytics",
      "Priority support",
      "Custom integrations",
    ],
    current: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with custom requirements",
    price: null,
    features: [
      "Unlimited team members",
      "Custom monthly allowances",
      "Dedicated account manager",
      "24/7 phone & email support",
      "Custom reporting",
      "SSO & advanced security",
    ],
    current: false,
  },
]

export default function SubscriptionPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <PageHeader
          title="Subscription & Billing"
          description="Manage your subscription plan and payment methods"
          actions={
            <Button variant="outline">
              <ExternalLink className="mr-2 h-4 w-4" />
              Stripe Customer Portal
            </Button>
          }
        />

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="plans">Plans</TabsTrigger>
            <TabsTrigger value="billing">Billing History</TabsTrigger>
            <TabsTrigger value="payment">Payment Methods</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Current Plan</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Pro</div>
                  <p className="text-xs text-muted-foreground">$5,240 per month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">24</div>
                  <p className="text-xs text-muted-foreground">of 50 included in plan</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Billing Date</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">April 15, 2023</div>
                  <p className="text-xs text-muted-foreground">Auto-renews on this date</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Payment Status</CardTitle>
                  <CheckCircle className="h-4 w-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">Active</div>
                  <p className="text-xs text-muted-foreground">Last payment on March 15, 2023</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Subscription Details</CardTitle>
                <CardDescription>Your current subscription plan and usage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Team Members</span>
                      <span className="text-sm text-muted-foreground">24 of 50 used</span>
                    </div>
                    <Progress value={48} className="h-2" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Total Monthly Allowance</span>
                      <span className="text-sm text-muted-foreground">$6,000 of $12,500 used</span>
                    </div>
                    <Progress value={48} className="h-2" />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h4 className="text-sm font-medium">Plan Features</h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {plans
                        .find((plan) => plan.current)
                        ?.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setActiveTab("plans")}>
                  Change Plan
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Invoice
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="plans" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              {plans.map((plan) => (
                <Card key={plan.id} className={plan.current ? "border-primary" : ""}>
                  {plan.current && (
                    <div className="absolute right-4 top-4">
                      <Badge>Current Plan</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      {plan.price ? (
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold">${plan.price / 100}</span>
                          <span className="text-sm text-muted-foreground">/month</span>
                        </div>
                      ) : (
                        <div className="text-3xl font-bold">Custom</div>
                      )}
                    </div>

                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-1" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    {plan.current ? (
                      <Button className="w-full" disabled>
                        Current Plan
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full">
                        {plan.price ? "Upgrade" : "Contact Sales"}
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View and download your past invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {billingHistory.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
                        <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          >
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                            <span className="sr-only">Download</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods and billing details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-muted p-2">
                        <CreditCard className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 04/2025</p>
                      </div>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button variant="outline">Add Payment Method</Button>
                  <Button variant="outline">Update Billing Address</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

