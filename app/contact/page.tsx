"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          })
        }, 5000)
      } else {
        setError(data.error || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hello, I need information about your services", "_blank")
  }

  const handleCall = () => {
    window.location.href = "tel:+919876543210"
  }

  const handleEmail = () => {
    window.location.href = "mailto:info@vijayalaxmilogistics.com"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/80" />
        <Image src="/placeholder.svg?height=800&width=1920" alt="Contact hero" fill className="object-cover" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-yellow-500 text-slate-900 text-lg px-6 py-2 font-bold">CONTACT US</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get in
            <br />
            <span className="text-yellow-400">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Ready to discuss your heavy lifting requirements? Our experts are here to provide customized solutions.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-8">Send Us a Message</h2>
              <Card className="border-2 border-slate-200">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent Successfully!</h3>
                      <p className="text-slate-600">
                        Thank you for contacting us. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-slate-700 font-semibold">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                            className="mt-2 border-slate-300 focus:border-yellow-500"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-slate-700 font-semibold">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                            className="mt-2 border-slate-300 focus:border-yellow-500"
                            placeholder="+91-XXXXX-XXXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-slate-700 font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-2 border-slate-300 focus:border-yellow-500"
                          placeholder="your.email@company.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="service" className="text-slate-700 font-semibold">
                          Service Required *
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger className="mt-2 border-slate-300 focus:border-yellow-500">
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="crane-rental">Crane Rental</SelectItem>
                            <SelectItem value="transport">Transport Services</SelectItem>
                            <SelectItem value="hardware">Hardware Parts</SelectItem>
                            <SelectItem value="emergency">Emergency Lifts</SelectItem>
                            <SelectItem value="onsite">On-site Support</SelectItem>
                            <SelectItem value="consultation">General Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-slate-700 font-semibold">
                          Project Details
                        </Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          rows={5}
                          className="mt-2 border-slate-300 focus:border-yellow-500"
                          placeholder="Please describe your project requirements, timeline, and any specific needs..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-lg py-4"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900 mr-2"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-8">Contact Information</h2>

              <div className="space-y-6 mb-8">
                <Card className="border-l-4 border-l-yellow-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-slate-900" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Head Office</h3>
                        <p className="text-slate-600">
                          123 Industrial Area, Sector 15
                          <br />
                          Gurgaon, Haryana - 122001
                          <br />
                          India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Phone Numbers</h3>
                        <p className="text-slate-600">
                          Main:{" "}
                          <button onClick={handleCall} className="text-green-600 hover:underline font-semibold">
                            +91-9876-543-210
                          </button>
                          <br />
                          Emergency:{" "}
                          <button onClick={handleCall} className="text-red-600 hover:underline font-semibold">
                            +91-9876-543-211
                          </button>
                          <br />
                          Sales: +91-9876-543-212
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Email Addresses</h3>
                        <p className="text-slate-600">
                          General:{" "}
                          <button onClick={handleEmail} className="text-blue-600 hover:underline">
                            info@vijayalaxmilogistics.com
                          </button>
                          <br />
                          Sales: sales@vijayalaxmilogistics.com
                          <br />
                          Support: support@vijayalaxmilogistics.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Working Hours</h3>
                        <p className="text-slate-600">
                          Office: Mon - Sat, 9:00 AM - 6:00 PM
                          <br />
                          Emergency: 24/7 Available
                          <br />
                          Sunday: Emergency Only
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </Button>
                <Button
                  onClick={handleCall}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Find Us</h2>
            <p className="text-xl text-slate-600">Located in the heart of India's industrial corridor</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-slate-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 text-lg">Interactive Map</p>
                <p className="text-slate-500">123 Industrial Area, Sector 15, Gurgaon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
