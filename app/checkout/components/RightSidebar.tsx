import { OrderItem } from "../types"

interface RightSidebarProps {
    items: OrderItem[]
    subtotal: number
    discount: number
    shipping: number
    total: number
    currentStep: number
    showItems: boolean
}

export default function RightSidebar({
    items,
    subtotal,
    discount,
    shipping,
    total,
    currentStep,
    showItems
}: RightSidebarProps) {
    return (
        <div className="bg-gray-50 rounded-lg shadow-sm p-5 sticky top-20">
            {/* Total Amount Display */}
            <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-gray-600">Total Amount</span>
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                    ₹{total}
                </div>
                <div className="flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-sm text-gray-400 font-medium">Secure Payment</span>
                </div>
            </div>

            {/* Order Summary */}
            <div className="border p-4 rounded-lg bg-white pt-6">
                <h3 className="font-semibold text-gray-800 mb-2  ">Order Summary</h3>

                <div className="space-y-3 text-sm border-t ">
                    <div className="flex justify-between mt-2">
                        <span className="text-gray-600">Subtotal (4 Item)</span>
                        <span className="font-medium">₹{subtotal}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Discounts</span>
                        <span className="font-medium text-green-600">₹{discount}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Shipping Charges</span>
                        <span className="font-medium">₹{shipping}</span>
                    </div>

                    <div className="border-t pt-3 flex justify-between">
                        <span className="font-semibold text-gray-800">Estimated Total</span>
                        <span className="font-bold text-green-600">₹{total}</span>
                    </div>
                </div>
            </div>

            {/* Show detailed items only on step 3 (Order Summary) */}
            {showItems && (
                <div className="border-t pt-6 mt-6">
                    <h4 className="font-semibold text-gray-800 mb-4">Items in your order</h4>
                    <div className="space-y-4">
                        {items.map((item, index) => (
                            <div key={item.id ?? index} className="flex items-center space-x-3">
                                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <div className="w-12 h-10 bg-black rounded"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center mb-1">
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded mr-2">Nike</span>
                                    </div>
                                    <h5 className="text-sm font-medium text-gray-800 truncate">{item.name}</h5>
                                    <div className="flex items-center text-xs text-yellow-500 mb-1">
                                        {"★".repeat(5)}
                                    </div>
                                    <p className="text-xs text-gray-600">Colors: {item.color}</p>
                                    <p className="text-xs text-gray-600">Size: {item.size}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="flex items-center">
                                            <span className="text-xs text-gray-600 mr-2">Quantity:</span>
                                            <div className="flex items-center border rounded text-xs">
                                                <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">-</button>
                                                <span className="px-2 py-1">{item.quantity}</span>
                                                <button className="px-2 py-1 text-gray-600 hover:bg-gray-100">+</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right flex-shrink-0">
                                    <p className="text-lg font-bold text-gray-800">₹{item.price.toLocaleString()}</p>
                                    {item.originalPrice && (
                                        <p className="text-xs text-gray-500 line-through">₹{item.originalPrice.toLocaleString()}</p>
                                    )}
                                    {item.discount && (
                                        <p className="text-xs text-green-600">{item.discount}% Off</p>
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            )}

            {/* Place Order Button (only show on steps 1-3) */}
            {currentStep < 4 && (
                <div className="mt-6 pt-6 border-t">
                    <button className="w-full bg-[#9A0417] hover:bg-[#9A0417] text-white py-2 rounded-lg font-medium text-lg">
                        Place Your Order
                    </button>
                </div>
            )}
        </div>
    )
}