import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = {
  address: {
    street: "123 Maple Street",
    city: "Downtown District",
    state: "Your City",
    zip: "12345"
  },
  phone: "(555) 123-BREW",
  email: "hello@cozycorner.cafe",
  hours: {
    weekdays: "Monday - Friday: 6:30 AM - 8:00 PM",
    saturday: "Saturday: 7:00 AM - 9:00 PM",
    sunday: "Sunday: 7:00 AM - 7:00 PM"
  }
}

const socialLinks = [
  {
    name: "Facebook",
    url: "#",
    description: "Follow us for daily specials and community events"
  },
  {
    name: "Instagram",
    url: "#",
    description: "See our latest creations and behind-the-scenes moments"
  },
  {
    name: "Twitter",
    url: "#",
    description: "Get quick updates and join our coffee conversations"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-brown-100 to-sage-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brown-800 mb-6">
            Visit & Connect
          </h1>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed">
            We'd love to see you! Whether you have questions, feedback, or just want to say hello, 
            we're here and always happy to connect with our community.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Location & Hours */}
            <Card className="border-beige-200">
              <CardContent className="p-6">
                <h2 className="font-playfair text-2xl font-bold text-brown-800 mb-6">
                  📍 Visit Our Café
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-brown-800 mb-2">Address</h3>
                    <p className="text-brown-600">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-brown-800 mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-brown-600">
                      <p>{contactInfo.hours.weekdays}</p>
                      <p>{contactInfo.hours.saturday}</p>
                      <p>{contactInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card className="border-beige-200">
              <CardContent className="p-6">
                <h2 className="font-playfair text-2xl font-bold text-brown-800 mb-6">
                  📞 Get In Touch
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <span className="text-sage-600 text-sm">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brown-800">Phone</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-sage-600 hover:text-sage-700">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                      <span className="text-sage-600 text-sm">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-brown-800">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-sage-600 hover:text-sage-700">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-beige-200">
              <CardContent className="p-6">
                <h2 className="font-playfair text-2xl font-bold text-brown-800 mb-6">
                  🌟 Follow Us
                </h2>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-brown-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-brown-600 text-sm">
                          {social.name === 'Facebook' ? 'f' : 
                           social.name === 'Instagram' ? '@' : 't'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <a href={social.url} className="font-semibold text-brown-800 hover:text-sage-600 transition-colors">
                          {social.name}
                        </a>
                        <p className="text-brown-600 text-sm mt-1">{social.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-beige-200">
              <CardContent className="p-0 overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-sage-100 to-beige-100 flex items-center justify-center">
                  <img 
                    src="https://placehold.co/600x300?text=Interactive+map+showing+café+location+with+nearby+landmarks" 
                    alt="Interactive map showing café location with nearby landmarks"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="bg-white/90 rounded-lg p-4 text-center">
                      <p className="text-brown-800 font-semibold">📍 We're Here!</p>
                      <p className="text-brown-600 text-sm">123 Maple Street, Downtown</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-beige-200 sticky top-20">
              <CardContent className="p-6">
                <h2 className="font-playfair text-2xl font-bold text-brown-800 mb-6">
                  💬 Send Us a Message
                </h2>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Directions & Parking */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-brown-800 mb-4">
              Easy to Find, Easy to Enjoy
            </h2>
            <p className="text-brown-600 text-lg">
              Located in the heart of downtown with convenient access and parking options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-brown-800 mb-2">Parking</h3>
              <p className="text-brown-600 text-sm">Free street parking and nearby parking garage with validation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚇</span>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-brown-800 mb-2">Public Transit</h3>
              <p className="text-brown-600 text-sm">2 blocks from Metro Station, multiple bus lines nearby</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚲</span>
              </div>
              <h3 className="font-playfair text-lg font-semibold text-brown-800 mb-2">Bike Friendly</h3>
              <p className="text-brown-600 text-sm">Bike rack out front and city bike share station across the street</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}