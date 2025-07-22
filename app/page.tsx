"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConeIcon as Crane, Truck, Settings, Clock, Shield, MapPin, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import AnimatedLogo from "@/components/animated-logo"

export default function HomePage() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const handleGetQuote = async () => {
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "quote",
        }),
      })

      if (response.ok) {
        // Redirect to contact page for more details
        window.location.href = "/contact"
      }
    } catch (error) {
      // Fallback to contact page
      window.location.href = "/contact"
    }
  }

  const handleRequestCrane = async () => {
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "crane",
        }),
      })

      if (response.ok) {
        // Redirect to contact page for more details
        window.location.href = "/contact"
      }
    } catch (error) {
      // Fallback to contact page
      window.location.href = "/contact"
    }
  }

  const handleCallNow = () => {
    window.location.href = "tel:+919876543210"
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70 z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Industrial crane in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 z-5">
          <AnimatedLogo />
        </div>
        <div className="relative z-20 text-center text-white max-w-6xl mx-auto px-4">
          <Badge className="mb-6 bg-yellow-500 text-slate-900 text-lg px-6 py-2 font-bold animate-pulse">
            POWERING INDIA'S HEAVY MOVES
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cranes, Transport &<br />
            <span className="text-yellow-400">Industrial Hardware</span>
            <br />
            Under One Roof
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Over 20 years of heavy lifting expertise. 24/7 availability across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
              onClick={handleGetQuote}
            >
              <Phone className="mr-2 h-5 w-5" />
              Get a Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 font-bold text-lg px-8 py-4 bg-transparent transform hover:scale-105 transition-all duration-200"
              onClick={handleRequestCrane}
            >
              Request a Crane
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Service Tiles */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Core Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive heavy lifting and logistics solutions for India's industrial needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: 1,
                icon: Crane,
                title: "Crane Rentals",
                description: "Hydraulic, Crawler & Mobile Cranes for all lifting needs",
                color: "yellow",
                link: "/services#cranes",
              },
              {
                id: 2,
                icon: Truck,
                title: "Transport Services",
                description: "Multi-axle, Flatbeds & Container transport solutions",
                color: "slate",
                link: "/services#transport",
              },
              {
                id: 3,
                icon: Settings,
                title: "Hardware Parts",
                description: "Industrial gears, pumps, fittings & machinery parts",
                color: "blue",
                link: "/services#hardware",
              },
              {
                id: 4,
                icon: Clock,
                title: "Emergency Lifts",
                description: "24x7 dispatch for critical heavy lifting operations",
                color: "red",
                link: "/services#emergency",
              },
            ].map((service) => (
              <Card
                key={service.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 ${
                      service.color === "yellow"
                        ? "bg-yellow-500"
                        : service.color === "slate"
                          ? "bg-slate-700"
                          : service.color === "blue"
                            ? "bg-blue-900"
                            : "bg-red-600"
                    } rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <Link href={service.link}>
                    <Button
                      variant="outline"
                      className={`border-${
                        service.color === "yellow"
                          ? "yellow-500 text-yellow-600 hover:bg-yellow-500"
                          : service.color === "slate"
                            ? "slate-700 text-slate-700 hover:bg-slate-700"
                            : service.color === "blue"
                              ? "blue-900 text-blue-900 hover:bg-blue-900"
                              : "red-600 text-red-600 hover:bg-red-600"
                      } hover:text-white bg-transparent group-hover:shadow-lg transition-all duration-200`}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-yellow-500 text-slate-900 text-sm px-4 py-2 font-bold">WHY CHOOSE US</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">India's Most Trusted Heavy Lifting Partner</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: Shield,
                    title: "20+ Years Experience",
                    description:
                      "Two decades of proven expertise in heavy lifting and logistics operations across India.",
                  },
                  {
                    icon: Crane,
                    title: "500+ Fleet Size",
                    description: "Extensive fleet of modern cranes, transport vehicles, and specialized equipment.",
                  },
                  {
                    icon: Clock,
                    title: "24/7 Availability",
                    description: "Round-the-clock emergency services and support for critical operations.",
                  },
                  {
                    icon: MapPin,
                    title: "PAN India Coverage",
                    description: "Nationwide presence with local expertise in every major industrial hub.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="h-6 w-6 text-slate-900" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Industrial facility"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "Years Experience" },
              { number: "500+", label: "Fleet Vehicles" },
              { number: "10K+", label: "Projects Completed" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-6xl font-bold text-slate-900 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-slate-800 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for Your Next Heavy Lift?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with our experts for customized solutions that meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all duration-200"
              onClick={handleCallNow}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now: +91-9876-543-210
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 font-bold text-lg px-8 py-4 bg-transparent transform hover:scale-105 transition-all duration-200"
              >
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
