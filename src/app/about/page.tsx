import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Sarah Martinez",
    role: "Founder & Head Barista",
    bio: "With 15 years in the coffee industry, Sarah opened Cozy Corner to bring artisan coffee culture to our community.",
    image: "https://placehold.co/300x300?text=Sarah+Martinez+professional+headshot+smiling+barista"
  },
  {
    name: "Marcus Johnson",
    role: "Head Baker",
    bio: "Marcus trained in France and brings European pastry traditions to our daily fresh-baked selection.",
    image: "https://placehold.co/300x300?text=Marcus+Johnson+head+baker+in+chef+coat"
  },
  {
    name: "Emma Chen",
    role: "Coffee Roaster",
    bio: "Emma sources our beans directly from farmers and roasts in small batches to ensure perfect flavor profiles.",
    image: "https://placehold.co/300x300?text=Emma+Chen+coffee+roaster+with+roasting+equipment"
  },
  {
    name: "David Thompson",
    role: "Manager",
    bio: "David ensures every customer feels welcomed and every detail of your visit is perfect.",
    image: "https://placehold.co/300x300?text=David+Thompson+café+manager+friendly+smile"
  }
]

const values = [
  {
    title: "Quality First",
    description: "We source only the finest beans and freshest ingredients, never compromising on quality for our community.",
    icon: "☕"
  },
  {
    title: "Community Focus",
    description: "More than just a café, we're a gathering place where neighbors become friends and ideas come to life.",
    icon: "🤝"
  },
  {
    title: "Sustainability",
    description: "We partner with fair-trade suppliers and use eco-friendly practices to protect our planet's future.",
    icon: "🌱"
  },
  {
    title: "Craftsmanship",
    description: "Every cup, every pastry is crafted with care and attention to detail by our skilled artisans.",
    icon: "✨"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sage-50 to-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brown-800 mb-6">
                Our Story
              </h1>
              <p className="text-lg text-brown-600 leading-relaxed mb-6">
                Born from a simple dream in 2018, Cozy Corner Café began when Sarah Martinez, 
                a passionate coffee enthusiast, decided to transform her love for exceptional 
                coffee into a welcoming community space.
              </p>
              <p className="text-lg text-brown-600 leading-relaxed">
                What started as a small neighborhood café has grown into the heart of our 
                community, where every cup tells a story and every visitor becomes part 
                of our extended family.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Vintage+photo+of+original+café+opening+day+celebration" 
                alt="Vintage photo of original café opening day celebration"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sage-200 rounded-full opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-amber-200 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-800 mb-8">
            Our Mission
          </h2>
          <div className="bg-gradient-to-r from-sage-50 to-amber-50 rounded-2xl p-8 lg:p-12">
            <blockquote className="text-xl sm:text-2xl text-brown-700 leading-relaxed italic font-medium">
              "To create more than just great coffee – we're building a community hub where 
              exceptional quality meets warm hospitality, fostering connections one cup at a time."
            </blockquote>
            <cite className="block mt-6 text-sage-600 font-semibold">
              — Sarah Martinez, Founder
            </cite>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-br from-beige-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-800 mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              Our values guide everything we do, from sourcing our beans to serving our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-beige-200 hover:shadow-lg transition-shadow duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="font-playfair text-xl font-semibold text-brown-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brown-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-brown-600 max-w-2xl mx-auto">
              The passionate people behind every perfect cup and warm smile you experience at Cozy Corner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-beige-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-playfair text-xl font-semibold text-brown-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sage-600 font-medium mb-3">{member.role}</p>
                  <p className="text-brown-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-gradient-to-r from-brown-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://placehold.co/600x400?text=Modern+café+interior+showing+evolution+and+growth" 
                alt="Modern café interior showing evolution and growth"
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg"></div>
            </div>
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-800 mb-6">
                From Dream to Reality
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-1">2018 - The Beginning</h4>
                    <p className="text-brown-600">Opened our doors with just 6 tables and a dream to serve the perfect cup.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-1">2020 - Community Support</h4>
                    <p className="text-brown-600">Our neighbors rallied around us during challenging times, proving we're truly family.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-sage-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-1">2022 - Expansion</h4>
                    <p className="text-brown-600">Added our in-house bakery and expanded seating to welcome even more friends.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-1">2024 - Today</h4>
                    <p className="text-brown-600">Proudly serving over 500 customers daily while maintaining our personal touch.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl sm:text-4xl font-bold mb-6">
            Join Our Story
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Every visit adds a new chapter to our community's story. 
            Come be part of what makes Cozy Corner special.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="inline-flex items-center justify-center bg-white text-sage-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg"
            >
              Explore Our Menu
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-sage-700 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}