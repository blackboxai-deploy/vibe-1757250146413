"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


interface OrderItem {
  id: string
  name: string
  price: number
  category: string
  description: string
  image: string
  quantity: number
  customizations?: string
}

interface CustomerInfo {
  name: string
  phone: string
  email: string
  pickupTime: string
  specialRequests: string
}

const menuCategories = {
  coffee: {
    name: "Coffee & Espresso",
    items: [
      {
        id: "house-blend",
        name: "House Blend",
        price: 3.50,
        category: "coffee",
        description: "Our signature medium roast",
        image: "https://placehold.co/200x150?text=House+Blend+Coffee",
        quantity: 0
      },
      {
        id: "cappuccino",
        name: "Cappuccino",
        price: 4.50,
        category: "coffee",
        description: "Rich espresso with steamed milk",
        image: "https://placehold.co/200x150?text=Cappuccino+with+Latte+Art",
        quantity: 0
      },
      {
        id: "cold-brew",
        name: "Cold Brew",
        price: 3.75,
        category: "coffee",
        description: "Smooth, less acidic coffee",
        image: "https://placehold.co/200x150?text=Cold+Brew+Coffee",
        quantity: 0
      }
    ]
  },
  pastries: {
    name: "Fresh Pastries",
    items: [
      {
        id: "croissant",
        name: "Butter Croissant",
        price: 3.25,
        category: "pastries",
        description: "Flaky, buttery layers",
        image: "https://placehold.co/200x150?text=Fresh+Butter+Croissant",
        quantity: 0
      },
      {
        id: "blueberry-muffin",
        name: "Blueberry Muffin",
        price: 3.50,
        category: "pastries",
        description: "Fresh Maine blueberries",
        image: "https://placehold.co/200x150?text=Blueberry+Muffin",
        quantity: 0
      },
      {
        id: "cinnamon-roll",
        name: "Cinnamon Roll",
        price: 4.50,
        category: "pastries",
        description: "Warm with cream cheese icing",
        image: "https://placehold.co/200x150?text=Cinnamon+Roll+with+Icing",
        quantity: 0
      }
    ]
  },
  breakfast: {
    name: "Breakfast Items",
    items: [
      {
        id: "avocado-toast",
        name: "Avocado Toast",
        price: 8.95,
        category: "breakfast",
        description: "On sourdough with seasoning",
        image: "https://placehold.co/200x150?text=Avocado+Toast+on+Sourdough",
        quantity: 0
      },
      {
        id: "breakfast-sandwich",
        name: "Breakfast Sandwich",
        price: 9.50,
        category: "breakfast",
        description: "Eggs, cheese, bacon on brioche",
        image: "https://placehold.co/200x150?text=Breakfast+Sandwich",
        quantity: 0
      }
    ]
  }
}

const pickupTimes = [
  "ASAP (15-20 mins)",
  "30 minutes",
  "45 minutes",
  "1 hour",
  "1.5 hours",
  "2 hours"
]

export default function OrderForm() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([])
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: "",
    phone: "",
    email: "",
    pickupTime: "",
    specialRequests: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderSubmitted, setOrderSubmitted] = useState(false)

  const addToOrder = (item: any) => {
    const existingItem = orderItems.find(orderItem => orderItem.id === item.id)
    if (existingItem) {
      setOrderItems(orderItems.map(orderItem =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      ))
    } else {
      setOrderItems([...orderItems, { ...item, quantity: 1 }])
    }
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setOrderItems(orderItems.filter(item => item.id !== id))
    } else {
      setOrderItems(orderItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      ))
    }
  }

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate order submission
    setTimeout(() => {
      setIsSubmitting(false)
      setOrderSubmitted(true)
    }, 2000)
  }

  if (orderSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✓</span>
        </div>
        <h2 className="font-playfair text-3xl font-bold text-brown-800 mb-4">
          Order Confirmed!
        </h2>
        <p className="text-lg text-brown-600 mb-6">
          Thank you for your order! We'll have everything ready for pickup in 15-20 minutes.
        </p>
        <div className="bg-sage-50 rounded-lg p-6 mb-6">
          <p className="text-brown-800 font-semibold">Order Details:</p>
          <p className="text-brown-600">Total: ${calculateTotal().toFixed(2)}</p>
          <p className="text-brown-600">Pickup: {customerInfo.pickupTime}</p>
          <p className="text-brown-600">Customer: {customerInfo.name}</p>
        </div>
        <p className="text-brown-500 text-sm">
          You'll receive a confirmation call at {customerInfo.phone}
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Menu Selection */}
      <div className="lg:col-span-2">
        <Card className="border-beige-200">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-brown-800">
              Select Your Items
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="coffee" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="coffee">Coffee</TabsTrigger>
                <TabsTrigger value="pastries">Pastries</TabsTrigger>
                <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
              </TabsList>
              
              {Object.entries(menuCategories).map(([key, category]) => (
                <TabsContent key={key} value={key} className="space-y-4">
                  <h3 className="font-playfair text-xl font-semibold text-brown-800 mb-4">
                    {category.name}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item) => (
                      <Card key={item.id} className="border-beige-200 hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <h4 className="font-semibold text-brown-800">{item.name}</h4>
                                <span className="text-sage-600 font-bold">${item.price.toFixed(2)}</span>
                              </div>
                              <p className="text-brown-600 text-sm mb-3">{item.description}</p>
                              <Button 
                                onClick={() => addToOrder(item)}
                                size="sm"
                                className="bg-sage-600 hover:bg-sage-700 text-white"
                              >
                                Add to Order
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Order Summary & Customer Info */}
      <div className="space-y-6">
        
        {/* Order Summary */}
        <Card className="border-beige-200 sticky top-20">
          <CardHeader>
            <CardTitle className="font-playfair text-xl text-brown-800">
              Your Order
            </CardTitle>
          </CardHeader>
          <CardContent>
            {orderItems.length === 0 ? (
              <p className="text-brown-500 text-center py-4">
                No items selected yet
              </p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center">
                      <div className="flex-1">
                        <h4 className="font-medium text-brown-800">{item.name}</h4>
                        <p className="text-sm text-brown-600">${item.price.toFixed(2)} each</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 p-0"
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 p-0"
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-beige-200 pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold text-brown-800">
                    <span>Total:</span>
                    <span>${calculateTotal().toFixed(2)}</span>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>

        {/* Customer Information */}
        {orderItems.length > 0 && (
          <Card className="border-beige-200">
            <CardHeader>
              <CardTitle className="font-playfair text-xl text-brown-800">
                Pickup Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitOrder} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="customer-name" className="text-brown-800 font-medium">
                    Full Name *
                  </Label>
                  <Input
                    id="customer-name"
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    required
                    className="border-beige-300 focus:border-sage-500"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="customer-phone" className="text-brown-800 font-medium">
                    Phone Number *
                  </Label>
                  <Input
                    id="customer-phone"
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    required
                    className="border-beige-300 focus:border-sage-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="pickup-time" className="text-brown-800 font-medium">
                    Pickup Time *
                  </Label>
                  <select
                    id="pickup-time"
                    value={customerInfo.pickupTime}
                    onChange={(e) => setCustomerInfo({...customerInfo, pickupTime: e.target.value})}
                    required
                    className="w-full px-3 py-2 border border-beige-300 rounded-md focus:border-sage-500 focus:ring-sage-500"
                  >
                    <option value="">Select pickup time</option>
                    {pickupTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="special-requests" className="text-brown-800 font-medium">
                    Special Requests
                  </Label>
                  <Textarea
                    id="special-requests"
                    value={customerInfo.specialRequests}
                    onChange={(e) => setCustomerInfo({...customerInfo, specialRequests: e.target.value})}
                    rows={3}
                    className="border-beige-300 focus:border-sage-500 resize-none"
                    placeholder="Any special requests or customizations..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting || !customerInfo.name || !customerInfo.phone || !customerInfo.pickupTime}
                  className="w-full bg-sage-600 hover:bg-sage-700 text-white py-3 rounded-full font-medium disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Placing Order...
                    </span>
                  ) : (
                    `Place Order - $${calculateTotal().toFixed(2)}`
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}