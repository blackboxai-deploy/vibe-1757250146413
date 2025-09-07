import { Card, CardContent } from "@/components/ui/card"

interface MenuItem {
  name: string
  description: string
  price: string
  image: string
}

interface MenuCardProps {
  item: MenuItem
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <Card className="border-beige-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-w-3 aspect-h-2 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-playfair text-xl font-semibold text-brown-800 leading-tight">
            {item.name}
          </h3>
          <span className="text-sage-600 font-bold text-lg ml-2 flex-shrink-0">
            {item.price}
          </span>
        </div>
        
        <p className="text-brown-600 leading-relaxed text-sm">
          {item.description}
        </p>
        
        {/* Decorative element */}
        <div className="mt-4 pt-4 border-t border-beige-200">
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-sage-300 rounded-full"></div>
              <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
              <div className="w-2 h-2 bg-sage-300 rounded-full"></div>
            </div>
            <button className="text-sage-600 hover:text-sage-700 text-sm font-medium transition-colors duration-200">
              Add to Order
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}