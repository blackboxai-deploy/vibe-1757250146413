import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import GalleryGrid from "@/components/GalleryGrid"

const galleryCategories = [
  {
    id: "drinks",
    name: "Coffee & Beverages",
    description: "Our signature drinks and artisan creations",
    images: [
      {
        src: "https://placehold.co/400x600?text=Perfect+cappuccino+with+rosetta+latte+art",
        alt: "Perfect cappuccino with rosetta latte art",
        title: "Cappuccino Perfection"
      },
      {
        src: "https://placehold.co/600x400?text=Cold+brew+coffee+with+ice+and+cream+swirl",
        alt: "Cold brew coffee with ice and cream swirl",
        title: "Cold Brew Delight"
      },
      {
        src: "https://placehold.co/400x600?text=Colorful+layered+iced+tea+with+fruit+garnish",
        alt: "Colorful layered iced tea with fruit garnish",
        title: "Artisan Iced Tea"
      },
      {
        src: "https://placehold.co/600x400?text=Espresso+shot+being+pulled+from+machine",
        alt: "Espresso shot being pulled from machine",
        title: "Fresh Espresso"
      },
      {
        src: "https://placehold.co/400x600?text=Matcha+latte+with+beautiful+green+foam+art",
        alt: "Matcha latte with beautiful green foam art",
        title: "Matcha Mastery"
      },
      {
        src: "https://placehold.co/600x400?text=Pour+over+coffee+brewing+process+with+filter",
        alt: "Pour over coffee brewing process with filter",
        title: "Pour Over Process"
      }
    ]
  },
  {
    id: "food",
    name: "Food & Pastries",
    description: "Fresh baked goods and delicious meals",
    images: [
      {
        src: "https://placehold.co/400x600?text=Flaky+golden+croissants+fresh+from+oven",
        alt: "Flaky golden croissants fresh from oven",
        title: "Fresh Morning Croissants"
      },
      {
        src: "https://placehold.co/600x400?text=Avocado+toast+with+microgreens+and+seasoning",
        alt: "Avocado toast with microgreens and seasoning",
        title: "Signature Avocado Toast"
      },
      {
        src: "https://placehold.co/400x600?text=Colorful+macarons+displayed+in+elegant+case",
        alt: "Colorful macarons displayed in elegant case",
        title: "French Macarons"
      },
      {
        src: "https://placehold.co/600x400?text=Breakfast+sandwich+with+egg+and+bacon",
        alt: "Breakfast sandwich with egg and bacon",
        title: "Hearty Breakfast Sandwich"
      },
      {
        src: "https://placehold.co/400x600?text=Slice+of+cheesecake+with+berry+compote",
        alt: "Slice of cheesecake with berry compote",
        title: "Decadent Cheesecake"
      },
      {
        src: "https://placehold.co/600x400?text=Fresh+salad+bowl+with+seasonal+ingredients",
        alt: "Fresh salad bowl with seasonal ingredients",
        title: "Garden Fresh Salad"
      }
    ]
  },
  {
    id: "ambiance",
    name: "Café Atmosphere",
    description: "The cozy spaces where memories are made",
    images: [
      {
        src: "https://placehold.co/600x400?text=Cozy+seating+area+with+warm+lighting",
        alt: "Cozy seating area with warm lighting",
        title: "Comfortable Seating"
      },
      {
        src: "https://placehold.co/400x600?text=Barista+working+behind+espresso+machine",
        alt: "Barista working behind espresso machine",
        title: "Skilled Baristas at Work"
      },
      {
        src: "https://placehold.co/600x400?text=Reading+corner+with+books+and+armchairs",
        alt: "Reading corner with books and armchairs",
        title: "Quiet Reading Corner"
      },
      {
        src: "https://placehold.co/400x600?text=Window+seating+with+natural+sunlight",
        alt: "Window seating with natural sunlight",
        title: "Sunny Window Seats"
      },
      {
        src: "https://placehold.co/600x400?text=Coffee+roasting+equipment+in+display",
        alt: "Coffee roasting equipment in display",
        title: "Our Roasting Setup"
      },
      {
        src: "https://placehold.co/400x600?text=Customers+enjoying+conversation+at+table",
        alt: "Customers enjoying conversation at table",
        title: "Community Connections"
      }
    ]
  },
  {
    id: "events",
    name: "Special Events",
    description: "Celebrations and gatherings in our space",
    images: [
      {
        src: "https://placehold.co/600x400?text=Coffee+tasting+event+with+multiple+cups",
        alt: "Coffee tasting event with multiple cups",
        title: "Coffee Cupping Session"
      },
      {
        src: "https://placehold.co/400x600?text=Live+acoustic+music+performance+evening",
        alt: "Live acoustic music performance evening",
        title: "Live Music Nights"
      },
      {
        src: "https://placehold.co/600x400?text=Art+exhibition+opening+with+local+artists",
        alt: "Art exhibition opening with local artists",
        title: "Local Art Showcase"
      },
      {
        src: "https://placehold.co/400x600?text=Latte+art+competition+with+baristas",
        alt: "Latte art competition with baristas",
        title: "Latte Art Competition"
      },
      {
        src: "https://placehold.co/600x400?text=Book+club+meeting+around+table",
        alt: "Book club meeting around table",
        title: "Monthly Book Club"
      },
      {
        src: "https://placehold.co/400x600?text=Holiday+celebration+with+decorations",
        alt: "Holiday celebration with decorations",
        title: "Holiday Celebrations"
      }
    ]
  }
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-100 to-sage-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brown-800 mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-brown-600 max-w-2xl mx-auto leading-relaxed">
            Step into our world through images that capture the essence of Cozy Corner Café. 
            From artisan beverages to warm moments shared among friends.
          </p>
        </div>
      </section>

      {/* Gallery Navigation */}
      <section className="bg-white border-b border-beige-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {galleryCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="whitespace-nowrap font-medium text-brown-700 hover:text-sage-600 transition-colors duration-200 border-b-2 border-transparent hover:border-sage-600 pb-2"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {galleryCategories.map((category) => (
          <section key={category.id} id={category.id} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-800 mb-3">
                {category.name}
              </h2>
              <p className="text-brown-600 text-lg max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <GalleryGrid images={category.images} />
          </section>
        ))}
      </main>

      {/* Visit CTA */}
      <section className="bg-gradient-to-r from-sage-600 to-sage-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold mb-4">
            Experience It Yourself
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Pictures tell a story, but nothing compares to experiencing our café in person. 
            Come create your own memories with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-sage-700 hover:bg-gray-50 px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg"
            >
              Visit Our Café
            </a>
            <a
              href="/menu"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white hover:text-sage-700 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              See Our Menu
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}