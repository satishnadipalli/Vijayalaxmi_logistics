"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, Calendar, TrendingUp, Users, FileText, Clock } from "lucide-react"

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  createdAt: string
  status: "new" | "contacted" | "completed"
}

interface QuoteRequest {
  id: string
  type: "quote" | "crane" | "emergency"
  contactInfo: {
    name?: string
    phone?: string
    email?: string
  }
  createdAt: string
  status: "new" | "processing" | "sent"
}

interface Stats {
  totalContacts: number
  totalQuotes: number
  newContacts: number
  newQuotes: number
}

export default function AdminPanel() {
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [stats, setStats] = useState<Stats>({ totalContacts: 0, totalQuotes: 0, newContacts: 0, newQuotes: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [contactsRes, quotesRes, statsRes] = await Promise.all([
        fetch("/api/admin/contacts"),
        fetch("/api/admin/quotes"),
        fetch("/api/admin/stats"),
      ])

      const contactsData = await contactsRes.json()
      const quotesData = await quotesRes.json()
      const statsData = await statsRes.json()

      setContacts(contactsData.contacts || [])
      setQuotes(quotesData.quotes || [])
      setStats(statsData.stats || { totalContacts: 0, totalQuotes: 0, newContacts: 0, newQuotes: 0 })
    } catch (error) {
      console.error("Failed to fetch data:", error)
    } finally {
      setLoading(false)
    }
  }

  const updateContactStatus = async (id: string, status: string) => {
    try {
      await fetch("/api/admin/contacts", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })
      fetchData() // Refresh data
    } catch (error) {
      console.error("Failed to update contact:", error)
    }
  }

  const updateQuoteStatus = async (id: string, status: string) => {
    try {
      await fetch("/api/admin/quotes", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      })
      fetchData() // Refresh data
    } catch (error) {
      console.error("Failed to update quote:", error)
    }
  }

  const getStatusBadge = (status: string) => {
    const colors = {
      new: "bg-red-500",
      contacted: "bg-yellow-500",
      completed: "bg-green-500",
      processing: "bg-blue-500",
      sent: "bg-green-500",
    }
    return <Badge className={`${colors[status as keyof typeof colors]} text-white`}>{status}</Badge>
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading admin panel...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Admin Panel</h1>
          <p className="text-slate-600">Vijaya Laxmi Logistics - Manage inquiries and quotes</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Contacts</p>
                  <p className="text-3xl font-bold text-slate-800">{stats.totalContacts}</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Quotes</p>
                  <p className="text-3xl font-bold text-slate-800">{stats.totalQuotes}</p>
                </div>
                <FileText className="h-8 w-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">New Contacts</p>
                  <p className="text-3xl font-bold text-red-600">{stats.newContacts}</p>
                </div>
                <TrendingUp className="h-8 w-8 text-red-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-600">New Quotes</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.newQuotes}</p>
                </div>
                <Clock className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="contacts">Contact Submissions ({contacts.length})</TabsTrigger>
            <TabsTrigger value="quotes">Quote Requests ({quotes.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.length === 0 ? (
                    <p className="text-center text-slate-500 py-8">No contact submissions yet.</p>
                  ) : (
                    contacts.map((contact) => (
                      <Card key={contact.id} className="border-l-4 border-l-blue-500">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-slate-800">{contact.name}</h3>
                              <p className="text-slate-600">Service: {contact.service}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getStatusBadge(contact.status)}
                              <Select
                                value={contact.status}
                                onValueChange={(value) => updateContactStatus(contact.id, value)}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="new">New</SelectItem>
                                  <SelectItem value="contacted">Contacted</SelectItem>
                                  <SelectItem value="completed">Completed</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-green-500" />
                              <span className="text-slate-700">{contact.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-blue-500" />
                              <span className="text-slate-700">{contact.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-slate-500" />
                              <span className="text-slate-700">{new Date(contact.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>

                          {contact.message && (
                            <div className="bg-slate-50 p-4 rounded-lg">
                              <p className="text-slate-700">{contact.message}</p>
                            </div>
                          )}

                          <div className="flex space-x-2 mt-4">
                            <Button
                              size="sm"
                              onClick={() => window.open(`tel:${contact.phone}`)}
                              className="bg-green-500 hover:bg-green-600"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              Call
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => window.open(`mailto:${contact.email}`)}>
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quotes">
            <Card>
              <CardHeader>
                <CardTitle>Quote Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quotes.length === 0 ? (
                    <p className="text-center text-slate-500 py-8">No quote requests yet.</p>
                  ) : (
                    quotes.map((quote) => (
                      <Card key={quote.id} className="border-l-4 border-l-yellow-500">
                        <CardContent className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-slate-800">
                                {quote.type.charAt(0).toUpperCase() + quote.type.slice(1)} Request
                              </h3>
                              <p className="text-slate-600">{quote.contactInfo.name || "Quick Request"}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              {getStatusBadge(quote.status)}
                              <Select
                                value={quote.status}
                                onValueChange={(value) => updateQuoteStatus(quote.id, value)}
                              >
                                <SelectTrigger className="w-32">
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="new">New</SelectItem>
                                  <SelectItem value="processing">Processing</SelectItem>
                                  <SelectItem value="sent">Sent</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            {quote.contactInfo.phone && (
                              <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-green-500" />
                                <span className="text-slate-700">{quote.contactInfo.phone}</span>
                              </div>
                            )}
                            {quote.contactInfo.email && (
                              <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-blue-500" />
                                <span className="text-slate-700">{quote.contactInfo.email}</span>
                              </div>
                            )}
                            <div className="flex items-center space-x-2">
                              <Calendar className="h-4 w-4 text-slate-500" />
                              <span className="text-slate-700">{new Date(quote.createdAt).toLocaleDateString()}</span>
                            </div>
                          </div>

                          <div className="flex space-x-2 mt-4">
                            {quote.contactInfo.phone && (
                              <Button
                                size="sm"
                                onClick={() => window.open(`tel:${quote.contactInfo.phone}`)}
                                className="bg-green-500 hover:bg-green-600"
                              >
                                <Phone className="h-4 w-4 mr-1" />
                                Call
                              </Button>
                            )}
                            {quote.contactInfo.email && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open(`mailto:${quote.contactInfo.email}`)}
                              >
                                <Mail className="h-4 w-4 mr-1" />
                                Email
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
