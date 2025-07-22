import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">VL</span>
              </div>
              <div>
                <div className="text-xl font-bold">Vijaya Laxmi Logistics</div>
                <div className="text-sm text-gray-400">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Lifting India's Progress Since 2000. Your trusted partner for heavy lifting, transport, and industrial
              solutions.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-yellow-500 hover:text-slate-900 bg-transparent"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-yellow-500 hover:text-slate-900 bg-transparent"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Services
              </Link>
              <Link href="/gallery" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <div className="space-y-3">
              <Link href="/services#cranes" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Crane Rentals
              </Link>
              <Link href="/services#transport" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Transport Services
              </Link>
              <Link href="/services#hardware" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Hardware Parts
              </Link>
              <Link href="/services#emergency" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                Emergency Lifts
              </Link>
              <Link href="/services#onsite" className="block text-gray-300 hover:text-yellow-400 transition-colors">
                On-site Support
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Industrial Area,</p>
                  <p>Sector 15, Gurgaon,</p>
                  <p>Haryana - 122001</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">+91-9876-543-210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">info@vijayalaxmilogistics.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
              <div className="bg-gray-800 px-4 py-2 rounded">
                <span className="text-sm text-gray-300">ISO 9001:2015</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded">
                <span className="text-sm text-gray-300">OHSAS 18001</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded">
                <span className="text-sm text-gray-300">CE Certified</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">© 2024 Vijaya Laxmi Logistics Pvt. Ltd. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
