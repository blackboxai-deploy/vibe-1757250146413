import Link from "next/link"

const footerSections = {
  hours: {
    title: "Opening Hours",
    items: [
      "Monday - Friday: 6:30 AM - 8:00 PM",
      "Saturday: 7:00 AM - 9:00 PM", 
      "Sunday: 7:00 AM - 7:00 PM"
    ]
  },
  contact: {
    title: "Contact Info",
    items: [
      "123 Maple Street, Downtown",
      "Phone: (555) 123-BREW",
      "Email: hello@cozycorner.cafe"
    ]
  },
  links: {
    title: "Quick Links",
    items: [
      { name: "Menu", href: "/menu" },
      { name: "About Us", href: "/about" },
      { name: "Gallery", href: "/gallery" },
      { name: "Order Online", href: "/order" }
    ]
  }
}

export default function Footer() {
  return (
    <footer className="bg-brown-800 text-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-sage-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-cream">Cozy Corner</h3>
                <p className="text-xs text-sage-200 -mt-1">Café</p>
              </div>
            </Link>
            <p className="text-cream/80 text-sm leading-relaxed">
              Your neighborhood destination for exceptional coffee, fresh pastries, and warm community since 2018.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="w-8 h-8 bg-cream/10 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <span className="text-cream text-sm">f</span>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-cream/10 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors duration-200"
                aria-label="Instagram"
              >
                <span className="text-cream text-sm">@</span>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-cream/10 rounded-full flex items-center justify-center hover:bg-sage-600 transition-colors duration-200"
                aria-label="Twitter"
              >
                <span className="text-cream text-sm">t</span>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-cream mb-4">
              {footerSections.hours.title}
            </h4>
            <ul className="space-y-2">
              {footerSections.hours.items.map((item, index) => (
                <li key={index} className="text-cream/80 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-cream mb-4">
              {footerSections.contact.title}
            </h4>
            <ul className="space-y-2">
              {footerSections.contact.items.map((item, index) => (
                <li key={index} className="text-cream/80 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-lg font-semibold text-cream mb-4">
              {footerSections.links.title}
            </h4>
            <ul className="space-y-2">
              {footerSections.links.items.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={item.href} 
                    className="text-cream/80 text-sm hover:text-sage-300 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            © 2024 Cozy Corner Café. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-cream/60 text-sm hover:text-sage-300 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-cream/60 text-sm hover:text-sage-300 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}