"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductPurchaseBox() {
    const [quantity, setQuantity] = useState(1);

    const increaseQty = () => setQuantity((q) => q + 1);
    const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

    return (
        <div className="border rounded-lg shadow-md p-4 w-full max-w-md sticky top-20  bg-white mx-auto">
            {/* Product Image */}
            <div className="flex justify-center">
                <Image
                    src="/images/trophy/shoe1.png"
                    alt="Product"
                    width={400}   // pick a good intrinsic width
                    height={400}  // pick a matching height
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
                />
            </div>

            {/* Brand & Title */}
            <div className="flex items-center gap-2 mt-4 mb-2">
                <Image
                    src="/images/logo/nike.png"
                    alt="Nike"
                    width={24}    // matches w-6
                    height={24}   // matches h-6
                    className="w-6 h-6 rounded-full"
                />
                <h2 className="font-semibold text-base sm:text-lg">
                    Nike Air Zoom Pegasus 40
                </h2>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-2 text-yellow-500 text-sm sm:text-base">
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <span key={i}>★</span>
                    ))}
            </div>

            {/* Price */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
                <p className="text-xl sm:text-2xl font-bold">₹6,999</p>
                <p className="line-through text-gray-400">₹8000</p>
                <p className="text-green-600 font-medium">20% off</p>
            </div>

            {/* Colors */}
            <div className="mb-3">
                <p className="text-sm font-semibold">
                    Colors: <span className="text-gray-500">Grey</span>
                </p>
                <div className="flex gap-2 mt-2 flex-wrap">
                    <Image
                        src="/images/trophy/shoe1.png"
                        alt="Product thumbnail"
                        width={48}     // w-12 = 48px
                        height={48}    // h-12 = 48px
                        className="w-12 h-12 border rounded p-1 cursor-pointer"
                    />

                    <Image
                        src="/images/trophy/shoe2.png"
                        alt="Product thumbnail-2"
                        width={48}     // w-12 = 48px
                        height={48}
                        className="w-12 h-12 border rounded p-1 cursor-pointer"
                    />
                    <Image
                        src="/images/trophy/shoe3.png"
                        alt="Product thumbnail3"
                        width={48}     // w-12 = 48px
                        height={48}
                        className="w-12 h-12 border rounded p-1 cursor-pointer"
                    />
                </div>
            </div>

            {/* Sizes */}
            <div className="mb-3">
                <p className="text-sm font-semibold">
                    Size: <span className="text-[#9A0417]">24</span>
                </p>
                <div className="flex gap-2 flex-wrap mt-2">
                    {[22, 23, 23.5, 24, 24.5].map((size) => (
                        <button
                            key={size}
                            className={`px-3 py-1 border rounded text-sm sm:text-base ${size === 24
                                ? "bg-[#9A0417] text-white border-red-500"
                                : "hover:border-red-400"
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity */}
            <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Quantity:</p>
                <div className="flex items-center gap-2">
                    <button
                        onClick={decreaseQty}
                        className="border px-2 py-1 rounded hover:bg-gray-100"
                    >
                        <Minus size={16} />
                    </button>
                    <span className="px-4 py-1 border rounded">{quantity}</span>
                    <button
                        onClick={increaseQty}
                        className="border px-2 py-1 rounded hover:bg-gray-100"
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            {/* Buttons */}
            {/* <div className="space-y-2 mt-4">
                <button className="w-full bg-pink-100 text-[#9A0417] font-medium py-2 rounded-lg hover:bg-pink-200">
                    Add to cart
                </button>
                <button className="w-full bg-[#9A0417] text-white font-medium py-2 rounded-lg hover:bg-red-700">
                    Buy Now
                </button>
            </div> */}
            <div className="flex gap-4 mt-6">
                <Link
                    href="/cart"
                    className="flex-1 py-3 bg-pink-100 text-[#9A0417] font-medium rounded-lg hover:bg-pink-200 text-center"
                >
                    Add to cart
                </Link>

                {/* <button className="flex-1 py-3 bg-[#9A0417] text-white rounded-lg">
                    Buy Now
                </button> */}
                <Link
                    href="/checkout/4554" // 👈 replace 4554 with your product/order id dynamically
                    className="flex-1 py-3 bg-[#9A0417] text-white rounded-lg text-center block"
                >
                    Buy Now
                </Link>
            </div>

        </div>
    );
}
