"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91-9876-543-210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@vijayalaxmilogistics.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-yellow-400 font-semibold">24/7 Emergency Service Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-slate-900 font-bold text-xl">VL</span>
              </div>
              <div>
                <div className="text-xl font-bold text-slate-800">Vijaya Laxmi Logistics</div>
                <div className="text-sm text-slate-600">Pvt. Ltd.</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-yellow-600 font-semibold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold">
                <Phone className="mr-2 h-4 w-4" />
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-lg font-semibold text-slate-700 hover:text-yellow-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-bold mt-6">
                    <Phone className="mr-2 h-4 w-4" />
                    Get Quote
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}
