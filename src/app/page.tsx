import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

const featuredItems = [
  {
    name: "Signature Blend Coffee",
    description: "Our house blend with rich chocolate notes and smooth finish",
    price: "$4.50",
    image: "https://placehold.co/300x200?text=Artisan+coffee+cup+with+latte+art+on+wooden+table"
  },
  {
    name: "Fresh Croissants",
    description: "Buttery, flaky croissants baked fresh every morning",
    price: "$3.25",
    image: "https://placehold.co/300x200?text=Golden+fresh+croissants+in+wicker+basket"
  },
  {
    name: "Avocado Toast",
    description: "Smashed avocado on artisan sourdough with everything seasoning",
    price: "$8.95",
    image: "https://placehold.co/300x200?text=Artisan+avocado+toast+with+herbs+and+seasoning"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The best coffee in the neighborhood! The atmosphere is so cozy and welcoming.",
    rating: 5
  },
  {
    name: "Mike Chen",
    text: "Amazing pastries and friendly staff. It's become my daily morning routine.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    text: "Perfect spot for meetings or just relaxing with a great cup of coffee.",
    rating: 5
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-cream to-beige-100 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://placehold.co/1920x1080?text=Cozy+café+interior+with+warm+lighting+and+coffee+bar" 
            alt="Cozy café interior with warm lighting and coffee bar"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-brown-800 mb-6">
            Welcome to
            <br />
            <span className="text-sage-600">Cozy Corner Café</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-brown-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Where every cup tells a story. Experience handcrafted coffee, fresh pastries, 
            and warm hospitality in the heart of our community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-brown-400 text-brown-700 hover:bg-brown-50 px-8 py-3 rounded-full font-medium"
            >
              <Link href="/order">Order Online</Link>
            </Button>
          </div>
        </div>
        
        {/* Decorative coffee beans */}
        <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10">
          <div className="w-4 h-6 bg-brown-600 rounded-full transform rotate-12"></div>
          <div className="w-4 h-6 bg-brown-600 rounded-full transform -rotate-12 -mt-2 ml-2"></div>
        </div>
        <div className="absolute top-20 right-10 w-12 h-12 opacity-10">
          <div className="w-3 h-5 bg-brown-600 rounded-full transform rotate-45"></div>
          <div className="w-3 h-5 bg-brown-600 rounded-full transform -rotate-45 -mt-2 ml-1"></div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-800 mb-4">
              Our Signature Favorites
            </h2>
            <p className="text-brown-600 text-lg max-w-2xl mx-auto">
              Discover our most beloved creations, crafted with passion and the finest ingredients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <Card key={index} className="border-beige-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-w-3 aspect-h-2">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-playfair text-xl font-semibold text-brown-800">{item.name}</h3>
                    <span className="text-sage-600 font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-brown-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gradient-to-r from-beige-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-800 mb-6">
                Our Story
              </h2>
              <p className="text-brown-600 text-lg leading-relaxed mb-6">
                Born from a passion for exceptional coffee and community connection, 
                Cozy Corner Café has been serving our neighborhood with love since 2018. 
                Every bean is carefully selected, every pastry lovingly crafted.
              </p>
              <Button 
                asChild 
                variant="outline" 
                className="border-sage-600 text-sage-700 hover:bg-sage-50"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Coffee+roasting+process+with+artisan+equipment" 
                alt="Coffee roasting process with artisan equipment"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-100 rounded-full opacity-50"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-amber-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-brown-600 text-lg">
              We're proud to be part of our community's daily routine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-beige-200 p-6">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-brown-600 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-brown-800">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Open daily from 6:30 AM to 8:00 PM. Your perfect cup of coffee is waiting!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-sage-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium"
            >
              <Link href="/contact">Find Us</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-sage-700 px-8 py-3 rounded-full font-medium"
            >
              <Link href="/order">Order for Pickup</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}