"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Order Online", href: "/order" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-beige-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-brown-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">CC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair text-xl font-bold text-brown-800">
                Cozy Corner Café
              </h1>
              <p className="text-xs text-sage-600 -mt-1">Artisan Coffee & Pastries</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.slice(0, -1).map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brown-700 hover:text-sage-600 transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Button 
              asChild
              className="bg-sage-600 hover:bg-sage-700 text-white rounded-full px-6 py-2 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/order">Order Online</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-brown-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream border-beige-200">
              <div className="flex flex-col space-y-6 mt-6">
                <Link href="/" className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-brown-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">CC</span>
                  </div>
                  <div>
                    <h2 className="font-playfair text-lg font-bold text-brown-800">Cozy Corner</h2>
                    <p className="text-xs text-sage-600 -mt-1">Café</p>
                  </div>
                </Link>
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-brown-700 hover:text-sage-600 transition-colors duration-200 font-medium py-2 ${
                      item.name === "Order Online" ? "bg-sage-600 text-white hover:bg-sage-700 px-4 rounded-lg text-center" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}