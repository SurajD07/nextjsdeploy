import { useState } from "react"
import { OrderItem, ShippingAddress, PaymentInfo } from "../types"
import CartItems from "@/components/CartItem"


interface OrderSummaryProps {
    items: OrderItem[]
    shippingAddress: ShippingAddress
    paymentInfo: PaymentInfo
    setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfo>>
    onNext: () => void
    onPrevious: () => void
}
type CartItem = {
    id: number;
    brand: string;
    name: string;
    price: number;
    originalPrice: number;
    logo: string;
    discount: string;
    color: string;
    size: string;
    image: string;
    rating: number;
};

const initialCart: CartItem[] = [
    {
        id: 1,
        brand: "Nike",
        logo: "/images/logo/nike.png",
        name: "Nike Air Zoom Pegasus 40",
        price: 6999,
        originalPrice: 8695,
        discount: "20% Off",
        color: "Grey",
        size: "24",
        image: "/images/trophy/shoe5.png",
        rating: 4,
    },
    {
        id: 2,
        brand: "Nike",
        logo: "/images/logo/nike.png",
        name: "Nike Air Zoom Pegasus 40",
        price: 6999,
        originalPrice: 8695,
        discount: "20% Off",
        color: "Grey",
        size: "24",
        image: "/images/trophy/shoe5.png",
        rating: 4,
    },
    // add more items if needed
];



export default function OrderSummary({
    
    
    paymentInfo,
    
    onNext,
}: OrderSummaryProps) {
    const [isEditingAddress, setIsEditingAddress] = useState(false)
    const [isEditingPayment, setIsEditingPayment] = useState(false)
    const [cart] = useState<CartItem[]>(initialCart);


    const [paymentInfoState, setPaymentInfoState] = useState<PaymentInfo>(paymentInfo)

    const [deliveryAddress, setDeliveryAddress] = useState<ShippingAddress>({
        id: "1",
        name: "Robin SD",
        company: "Aim Window Info Tech",
        address: "16th Main Road, Btm 2nd Stage",
        city: "Bengaluru, KARNATAKA 560076",
        isSelected: true,
    })

    const handleAddressChange = (field: keyof ShippingAddress, value: string) => {
        setDeliveryAddress((prev) => ({ ...prev, [field]: value }))
    }

    const orderTotal = 28150

    return (
        <div className="bg-white">
            {/* Delivery Address */}
            <div className="mb-6 border rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-3">Delivery Address</h3>
                <div className="bg-white rounded-lg">
                    {!isEditingAddress ? (
                        <div className="flex justify-between items-start border-t pt-2">
                            <div>
                                <p className="font-medium text-gray-800">{deliveryAddress.name}</p>
                                <p className="text-gray-600">{deliveryAddress.company}</p>
                                <p className="text-gray-600">{deliveryAddress.address}</p>
                                <p className="text-gray-600">{deliveryAddress.city}</p>
                            </div>
                            <button
                                onClick={() => setIsEditingAddress(true)}
                                className="text-[#9A0417] hover:text-[#9A0417] text-sm font-medium underline underline-offset-4"
                            >
                                Change
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <input
                                type="text"
                                placeholder="Name"
                                value={deliveryAddress.name}
                                onChange={(e) => handleAddressChange("name", e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                value={deliveryAddress.company || ""}
                                onChange={(e) => handleAddressChange("company", e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={deliveryAddress.address}
                                onChange={(e) => handleAddressChange("address", e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="City"
                                value={deliveryAddress.city || ""}
                                onChange={(e) => handleAddressChange("city", e.target.value)}
                                className="w-full px-3 py-2 border rounded-md"
                            />

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setIsEditingAddress(false)}
                                    className="bg-[#9A0417] hover:bg-[#9A0417] text-white px-4 py-2 rounded"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setIsEditingAddress(false)}
                                    className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Payment Method */}
            <div className="mb-4 p-4 border rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3 ">Payment Method</h3>
                <div className="bg-white  p-4 border-t">
                    {!isEditingPayment ? (
                        <div className="flex justify-between items-center">
                            <span className="text-gray-800">{paymentInfo.method}</span>
                            <button
                                onClick={() => setIsEditingPayment(true)}
                                className="text-[#9A0417] hover:text-[#9A0417] text-sm font-medium underline underline-offset-4"
                            >
                                Change
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={paymentInfoState.method === "cod"}
                                    onChange={(e) =>
                                        setPaymentInfoState((prev) => ({ ...prev, method: e.target.value as PaymentInfo["method"] }))
                                    }
                                />
                                Cash On Delivery
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="credit"
                                    checked={paymentInfoState.method === "credit"}
                                    onChange={(e) =>
                                        setPaymentInfoState((prev) => ({ ...prev, method: e.target.value as PaymentInfo["method"] }))
                                    }
                                />
                                Credit / Debit Card
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="upi"
                                    checked={paymentInfoState.method === "upi"}
                                    onChange={(e) =>
                                        setPaymentInfoState((prev) => ({ ...prev, method: e.target.value as PaymentInfo["method"] }))
                                    }
                                />
                                UPI
                            </label>

                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="netbanking"
                                    checked={paymentInfoState.method === "netbanking"}
                                    onChange={(e) =>
                                        setPaymentInfoState((prev) => ({ ...prev, method: e.target.value as PaymentInfo["method"] }))
                                    }
                                />
                                Netbanking
                            </label>


                            <div className="flex gap-3 mt-2">
                                <button
                                    onClick={() => setIsEditingPayment(false)}
                                    className="bg-[#9A0417] hover:bg-[#9A0417] text-white px-4 py-2 rounded"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={() => setIsEditingPayment(false)}
                                    className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Order Items */}

            {/* <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-3">Order Items</h3>
                <div className="space-y-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center space-x-4 p-4 border rounded-lg"
                        >
                            <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                                <div className="w-16 h-12 bg-black rounded"></div>
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium text-gray-800">{item.name}</h4>
                                <p className="text-sm text-gray-600">Colors: {item.color}</p>
                                <p className="text-sm text-gray-600">Size: {item.size}</p>
                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xl font-bold text-gray-800">
                                    ₹{item.price.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}


            {/* Left Side - Cart Items */}

            <div className="flex flex-col lg:flex-row gap-5">
                {/* Left Side - Cart Items */}
                <CartItems cart={cart} />
            </div>




            {/* Order Total + Place Order */}
            <div className="border-t pt-4">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold">
                        Order Total: ₹{orderTotal.toLocaleString()}
                    </span>
                    
                    <button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: "smooth" }) // 👈 scroll to top
                            onNext() // 👈 continue with order placement
                        }}
                        className="bg-[#9A0417] hover:bg-[#7e0312] text-white px-8 py-2 rounded font-medium"
                    >
                        Place Your Order
                    </button>
                </div>
            </div>
        </div>
    )
}
