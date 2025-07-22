"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Hydraulic crane operation",
    category: "cranes",
    title: "500T Hydraulic Crane - Power Plant Installation",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Heavy transport",
    category: "transport",
    title: "Multi-Axle Transport - Turbine Delivery",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Hardware warehouse",
    category: "hardware",
    title: "Industrial Parts Warehouse",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Crawler crane",
    category: "cranes",
    title: "Crawler Crane - Bridge Construction",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "On-site operations",
    category: "onsite",
    title: "Certified Operators at Work",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Flatbed transport",
    category: "transport",
    title: "Flatbed Loading Operation",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Mobile crane",
    category: "cranes",
    title: "Mobile Crane - Urban Project",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Mechanical parts",
    category: "hardware",
    title: "Precision Gears & Components",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Emergency operation",
    category: "onsite",
    title: "24/7 Emergency Response",
  },
]

const categories = [
  { id: "all", label: "All Projects", count: galleryImages.length },
  { id: "cranes", label: "Cranes", count: galleryImages.filter((img) => img.category === "cranes").length },
  { id: "transport", label: "Transport", count: galleryImages.filter((img) => img.category === "transport").length },
  { id: "hardware", label: "Hardware", count: galleryImages.filter((img) => img.category === "hardware").length },
  { id: "onsite", label: "On Site", count: galleryImages.filter((img) => img.category === "onsite").length },
]

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredImages =
    activeFilter === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeFilter)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/80" />
        <Image src="/placeholder.svg?height=800&width=1920" alt="Gallery hero" fill className="object-cover" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-yellow-500 text-slate-900 text-lg px-6 py-2 font-bold">PROJECT GALLERY</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Work in
            <br />
            <span className="text-yellow-400">Action</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Explore our extensive portfolio of successful heavy lifting operations, transport projects, and industrial
            solutions across India.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                onClick={() => setActiveFilter(category.id)}
                className={`font-semibold transition-all duration-200 ${
                  activeFilter === category.id
                    ? "bg-yellow-500 hover:bg-yellow-600 text-slate-900 transform scale-105"
                    : "border-slate-300 text-slate-700 hover:bg-slate-100 hover:scale-105"
                }`}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid - Clean Masonry Style */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-lg bg-white">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-2">{image.title}</h3>
                    <Badge className="bg-yellow-500 text-slate-900 text-xs">
                      {categories.find((cat) => cat.id === image.category)?.label}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projects That Define Excellence</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Every project in our gallery represents our commitment to safety, precision, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Projects Completed" },
              { number: "500+", label: "Heavy Lifts" },
              { number: "50+", label: "Cities Served" },
              { number: "100%", label: "Safety Record" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl md:text-6xl font-bold text-yellow-500 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
