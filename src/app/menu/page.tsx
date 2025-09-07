import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import MenuCard from "@/components/MenuCard"

const menuCategories = [
  {
    id: "coffee",
    name: "Coffee & Espresso",
    description: "Expertly roasted, freshly brewed",
    items: [
      {
        name: "House Blend",
        description: "Our signature medium roast with chocolate and caramel notes",
        price: "$3.50",
        image: "https://placehold.co/300x200?text=Fresh+brewed+house+blend+coffee+in+ceramic+mug"
      },
      {
        name: "Single Origin Ethiopia",
        description: "Bright, floral notes with hints of berry and citrus",
        price: "$4.25",
        image: "https://placehold.co/300x200?text=Ethiopian+single+origin+coffee+with+pour+over+setup"
      },
      {
        name: "Cappuccino",
        description: "Rich espresso topped with steamed milk and foam art",
        price: "$4.50",
        image: "https://placehold.co/300x200?text=Perfect+cappuccino+with+latte+art+heart+design"
      },
      {
        name: "Caramel Macchiato",
        description: "Vanilla syrup, steamed milk, espresso, and caramel drizzle",
        price: "$5.25",
        image: "https://placehold.co/300x200?text=Caramel+macchiato+with+whipped+cream+and+drizzle"
      },
      {
        name: "Cold Brew",
        description: "Smooth, less acidic coffee brewed cold for 12 hours",
        price: "$3.75",
        image: "https://placehold.co/300x200?text=Cold+brew+coffee+in+glass+with+ice+cubes"
      },
      {
        name: "Seasonal Pumpkin Spice",
        description: "Fall flavors with cinnamon, nutmeg, and whipped cream",
        price: "$5.50",
        image: "https://placehold.co/300x200?text=Pumpkin+spice+latte+with+cinnamon+and+whipped+cream"
      }
    ]
  },
  {
    id: "tea",
    name: "Tea Selection",
    description: "Premium loose leaf and herbal blends",
    items: [
      {
        name: "Earl Grey",
        description: "Classic black tea with bergamot and cornflower petals",
        price: "$3.25",
        image: "https://placehold.co/300x200?text=Earl+Grey+tea+in+elegant+teacup+with+saucer"
      },
      {
        name: "Chamomile Dreams",
        description: "Soothing herbal blend perfect for relaxation",
        price: "$3.50",
        image: "https://placehold.co/300x200?text=Chamomile+herbal+tea+with+dried+flowers"
      },
      {
        name: "Green Dragon Well",
        description: "Delicate Chinese green tea with subtle sweetness",
        price: "$3.75",
        image: "https://placehold.co/300x200?text=Green+tea+brewing+in+glass+teapot"
      },
      {
        name: "Chai Latte",
        description: "Spiced tea blend with steamed milk and honey",
        price: "$4.25",
        image: "https://placehold.co/300x200?text=Chai+latte+with+cinnamon+stick+and+foam"
      }
    ]
  },
  {
    id: "pastries",
    name: "Fresh Pastries",
    description: "Baked daily with love and finest ingredients",
    items: [
      {
        name: "Butter Croissant",
        description: "Flaky, buttery layers of pastry perfection",
        price: "$3.25",
        image: "https://placehold.co/300x200?text=Fresh+butter+croissants+golden+brown+in+basket"
      },
      {
        name: "Pain au Chocolat",
        description: "Croissant dough wrapped around rich dark chocolate",
        price: "$3.75",
        image: "https://placehold.co/300x200?text=Pain+au+chocolat+with+melted+chocolate+visible"
      },
      {
        name: "Blueberry Muffin",
        description: "Moist muffin bursting with fresh Maine blueberries",
        price: "$3.50",
        image: "https://placehold.co/300x200?text=Blueberry+muffin+with+fresh+berries+on+top"
      },
      {
        name: "Almond Danish",
        description: "Flaky pastry filled with sweet almond cream",
        price: "$4.25",
        image: "https://placehold.co/300x200?text=Almond+danish+with+sliced+almonds+and+glaze"
      },
      {
        name: "Cinnamon Roll",
        description: "Warm roll swirled with cinnamon and cream cheese icing",
        price: "$4.50",
        image: "https://placehold.co/300x200?text=Cinnamon+roll+with+cream+cheese+icing+drizzle"
      },
      {
        name: "Scone Variety",
        description: "Daily selection: cranberry orange, lemon, or chocolate chip",
        price: "$3.95",
        image: "https://placehold.co/300x200?text=Assorted+scones+with+jam+and+clotted+cream"
      }
    ]
  },
  {
    id: "breakfast",
    name: "Breakfast & Light Meals",
    description: "Hearty options to start your day right",
    items: [
      {
        name: "Avocado Toast",
        description: "Smashed avocado on sourdough with everything seasoning",
        price: "$8.95",
        image: "https://placehold.co/300x200?text=Avocado+toast+on+sourdough+with+seeds+and+herbs"
      },
      {
        name: "Breakfast Sandwich",
        description: "Scrambled eggs, cheese, and bacon on brioche bun",
        price: "$9.50",
        image: "https://placehold.co/300x200?text=Breakfast+sandwich+with+egg+cheese+bacon+on+brioche"
      },
      {
        name: "Greek Yogurt Bowl",
        description: "House-made granola, fresh berries, and honey drizzle",
        price: "$7.50",
        image: "https://placehold.co/300x200?text=Greek+yogurt+bowl+with+granola+berries+and+honey"
      },
      {
        name: "Quiche Lorraine",
        description: "Classic French quiche with bacon, cheese, and herbs",
        price: "$8.25",
        image: "https://placehold.co/300x200?text=Slice+of+quiche+lorraine+with+golden+crust"
      },
      {
        name: "Bagel & Lox",
        description: "Everything bagel with cream cheese, smoked salmon, capers",
        price: "$12.95",
        image: "https://placehold.co/300x200?text=Bagel+with+lox+cream+cheese+capers+and+red+onion"
      }
    ]
  },
  {
    id: "desserts",
    name: "Sweet Treats",
    description: "Indulgent desserts to satisfy your sweet tooth",
    items: [
      {
        name: "Chocolate Brownie",
        description: "Fudgy brownie with walnuts and chocolate chips",
        price: "$4.50",
        image: "https://placehold.co/300x200?text=Rich+chocolate+brownie+with+walnuts+and+chips"
      },
      {
        name: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers",
        price: "$6.50",
        image: "https://placehold.co/300x200?text=Tiramisu+slice+with+cocoa+powder+dusting"
      },
      {
        name: "Cheesecake",
        description: "New York style with graham cracker crust and berry compote",
        price: "$5.95",
        image: "https://placehold.co/300x200?text=New+York+cheesecake+with+berry+compote+topping"
      },
      {
        name: "Macarons",
        description: "Assorted flavors: vanilla, chocolate, raspberry, pistachio",
        price: "$2.25",
        image: "https://placehold.co/300x200?text=Colorful+French+macarons+in+gift+box"
      }
    ]
  }
]

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-sage-600 to-sage-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6">Our Menu</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffee, fresh pastries, and delicious meals. 
            Every item is made with love using the finest ingredients.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="bg-white border-b border-beige-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {menuCategories.map((category) => (
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

      {/* Menu Categories */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id} className="mb-16">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-brown-800 mb-3">
                {category.name}
              </h2>
              <p className="text-brown-600 text-lg">{category.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, itemIndex) => (
                <MenuCard key={itemIndex} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Order CTA */}
      <section className="bg-gradient-to-r from-amber-100 to-sage-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-brown-800 mb-4">
            Ready to Order?
          </h2>
          <p className="text-brown-600 text-lg mb-8">
            Skip the wait and order online for pickup, or visit us for the full café experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/order"
              className="inline-flex items-center justify-center bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Order Online
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center border border-brown-400 text-brown-700 hover:bg-brown-50 px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Visit Our Café
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}