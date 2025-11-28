interface OrderConfirmationProps {
  orderId: string
}

export default function OrderConfirmation({ orderId }: OrderConfirmationProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
      {/* Success Animation/Icon */}
      <div className="mb-6">
        <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4 relative">
          {/* Confetti elements */}
          <div className="absolute -top-2 -left-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute -top-3 right-0 w-2 h-2 bg-red-400 rounded-full animate-bounce delay-100"></div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200"></div>
          <div className="absolute -bottom-3 left-1 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-0 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-75"></div>
          
          {/* Check mark */}
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-green-600 mb-2">Order Confirmed!</h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Your Payment Has Been Received Successfully. We re Preparing Your Order For Shipment.
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-6 max-w-md mx-auto">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Order ID:</span>
            <span className="font-medium">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Method:</span>
            <span className="font-medium">Cash On Delivery</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Estimated Delivery:</span>
            <span className="font-medium">20/07/2025</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-red-100 hover:bg-red-200 text-[#9A0417] px-6 py-3 rounded font-medium">
          Track My Order
        </button>
        <button className="bg-[#9A0417] hover:bg-[#9A0417] text-white px-6 py-3 rounded font-medium">
          Continue Shopping
        </button>
      </div>
    </div>
  )
}