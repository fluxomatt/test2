"use client"

import { useState } from "react"
import { Save, Building, Mail, Phone, MapPin, Globe, Bell, Shield, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const { toast } = useToast()

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully.",
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <PageHeader
          title="Settings & Account Management"
          description="Manage your company profile and account preferences"
        />

        <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Company Profile</TabsTrigger>
            <TabsTrigger value="billing">Billing Details</TabsTrigger>
            <TabsTrigger value="workspace">Workspace Preferences</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Company Profile</CardTitle>
                <CardDescription>Update your company information and contact details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company Name</Label>
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <Input id="company-name" defaultValue="Acme Inc." />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-email">Company Email</Label>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <Input id="company-email" type="email" defaultValue="admin@acmeinc.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-phone">Company Phone</Label>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <Input id="company-phone" type="tel" defaultValue="+1 (555) 123-4567" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="company-address">Company Address</Label>
                      <div className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-2.5" />
                        <Textarea
                          id="company-address"
                          defaultValue="123 Business Street, Suite 100, San Francisco, CA 94107, USA"
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-website">Company Website</Label>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <Input id="company-website" type="url" defaultValue="https://acmeinc.com" />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Company Logo</h3>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Company Logo" />
                      <AvatarFallback className="text-2xl">A</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button variant="outline">Upload New Logo</Button>
                      <p className="text-xs text-muted-foreground">Recommended size: 512x512px. Max file size: 2MB.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing Details</CardTitle>
                <CardDescription>Update your billing information and tax details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Tax Information</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="tax-id">Tax ID / VAT Number</Label>
                      <Input id="tax-id" defaultValue="US123456789" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tax-country">Tax Country</Label>
                      <Select defaultValue="us">
                        <SelectTrigger id="tax-country">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="eu">European Union</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Invoice Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="invoice-email">Invoice Email</Label>
                        <p className="text-sm text-muted-foreground">Where should we send your invoices?</p>
                      </div>
                      <Input id="invoice-email" defaultValue="billing@acmeinc.com" className="max-w-sm" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>PDF Invoices</Label>
                        <p className="text-sm text-muted-foreground">Receive PDF invoices by email</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Payment Reminders</Label>
                        <p className="text-sm text-muted-foreground">Receive payment reminders before due date</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Billing Address</h3>
                  <div className="space-y-2">
                    <Label htmlFor="billing-address">Address</Label>
                    <Textarea
                      id="billing-address"
                      defaultValue="123 Business Street, Suite 100, San Francisco, CA 94107, USA"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="same-as-company" className="rounded border-gray-300" defaultChecked />
                    <Label htmlFor="same-as-company" className="text-sm">
                      Same as company address
                    </Label>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="workspace" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Workspace Preferences</CardTitle>
                <CardDescription>Configure default settings for your team's workspace</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Default Allowances</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="default-allowance">Default Monthly Allowance</Label>
                      <div className="flex items-center">
                        <span className="mr-2">$</span>
                        <Input id="default-allowance" type="number" defaultValue="250" />
                        <span className="ml-2">per employee</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        This amount will be applied to new employees by default
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="allowance-reset">Allowance Reset Day</Label>
                      <Select defaultValue="1">
                        <SelectTrigger id="allowance-reset">
                          <SelectValue placeholder="Select day" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st of month</SelectItem>
                          <SelectItem value="15">15th of month</SelectItem>
                          <SelectItem value="last">Last day of month</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">When unused allowances should reset</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Access Rules</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Rollover Unused Allowance</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow unused allowance to roll over to the next month
                        </p>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Allow Exceeding Allowance</Label>
                        <p className="text-sm text-muted-foreground">Let employees exceed their monthly allowance</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Require Booking Approval</Label>
                        <p className="text-sm text-muted-foreground">Require admin approval for workspace bookings</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Department Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Track Spending by Department</Label>
                        <p className="text-sm text-muted-foreground">Enable department-level reporting and tracking</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="departments">Departments</Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="px-3 py-1">Marketing</Badge>
                        <Badge className="px-3 py-1">Sales</Badge>
                        <Badge className="px-3 py-1">Engineering</Badge>
                        <Badge className="px-3 py-1">Design</Badge>
                        <Badge className="px-3 py-1">Product</Badge>
                        <Button variant="outline" size="sm" className="h-7">
                          + Add Department
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                        <div className="space-y-0.5">
                          <Label>New Bookings</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications when team members make new bookings
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                        <div className="space-y-0.5">
                          <Label>Allowance Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified when team members approach their allowance limit
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                        <div className="space-y-0.5">
                          <Label>Billing Updates</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications about billing and subscription changes
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Bell className="h-4 w-4 text-muted-foreground" />
                        <div className="space-y-0.5">
                          <Label>Weekly Reports</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive weekly summary reports of team workspace usage
                          </p>
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Delivery</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Email Digest</Label>
                        <p className="text-sm text-muted-foreground">
                          Combine multiple notifications into a daily digest
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="digest-time">Digest Delivery Time</Label>
                      <Select defaultValue="9">
                        <SelectTrigger id="digest-time" className="w-[180px]">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9">9:00 AM</SelectItem>
                          <SelectItem value="12">12:00 PM</SelectItem>
                          <SelectItem value="17">5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security Controls</CardTitle>
                <CardDescription>Manage security settings and admin access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <Label>Enable Two-Factor Authentication</Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-muted-foreground" />
                      <div className="space-y-0.5">
                        <Label>Require 2FA for All Admins</Label>
                        <p className="text-sm text-muted-foreground">
                          Force all admin users to enable two-factor authentication
                        </p>
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Admin Access</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <div className="space-y-0.5">
                          <Label>Multi-Admin Access</Label>
                          <p className="text-sm text-muted-foreground">
                            Allow multiple administrators to manage the account
                          </p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="space-y-2">
                      <Label>Current Administrators</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between rounded-md border p-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">John Doe</p>
                              <p className="text-sm text-muted-foreground">john.doe@acmeinc.com</p>
                            </div>
                          </div>
                          <Badge>Primary Admin</Badge>
                        </div>

                        <div className="flex items-center justify-between rounded-md border p-3">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Jane Smith" />
                              <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">Jane Smith</p>
                              <p className="text-sm text-muted-foreground">jane.smith@acmeinc.com</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            Remove
                          </Button>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-2">
                        Invite Admin
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Session Management</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-Logout After Inactivity</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically log out after a period of inactivity
                        </p>
                      </div>
                      <Select defaultValue="30">
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 minutes</SelectItem>
                          <SelectItem value="30">30 minutes</SelectItem>
                          <SelectItem value="60">1 hour</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button variant="outline">Log Out All Sessions</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave}>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

