import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import OrderForm from "@/components/OrderForm"

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-r from-sage-600 to-sage-700 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-4">
            Order Online
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Skip the wait and order your favorites for pickup. 
            Fresh coffee and pastries will be ready when you arrive!
          </p>
        </div>
      </section>

      {/* Order Information */}
      <section className="py-8 bg-white border-b border-beige-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                <span className="text-sage-600 text-lg">⏱️</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-brown-800">Ready in 15-20 mins</p>
                <p className="text-brown-600 text-sm">Average preparation time</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                <span className="text-sage-600 text-lg">🏪</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-brown-800">Pickup Only</p>
                <p className="text-brown-600 text-sm">123 Maple Street</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center">
                <span className="text-sage-600 text-lg">💳</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-brown-800">Pay at Pickup</p>
                <p className="text-brown-600 text-sm">Cash or card accepted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <OrderForm />
      </main>

      <Footer />
    </div>
  )
}