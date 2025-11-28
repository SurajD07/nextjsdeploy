import Image from "next/image";
import React from "react";

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

interface CartItemsProps {
    cart: CartItem[];
}

export default function CartItems({ cart }: CartItemsProps) {
    return (
        <div className="w-full lg:w-[100%]">
            {/* <h2 className="text-xl font-bold mb-4">Items In Your Order</h2> */}
            <div className="flex flex-col gap-4">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col md:grid md:grid-cols-3 border p-4 rounded-lg gap-4"
                    >
                        {/* Left: Checkbox + Image */}
                        <div className="flex items-center gap-3 justify-center md:justify-start">
                            <input type="checkbox" className="w-5 h-5" />
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={208}   // max size (md:w-52 = 208px)
                                height={208}
                                className="w-34 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-md object-contain"
                            />
                        </div>

                        {/* Middle: Product Details */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <div className="w-7 h-7 rounded-full border flex items-center justify-center bg-[#333333] p-1">
                                    <Image
                                        src={item.logo}
                                        alt={item.brand}
                                        width={200}     // choose a good intrinsic size
                                        height={200}
                                        className="max-w-full max-h-full object-contain invert brightness-0"
                                    />
                                </div>
                                <span className="font-semibold text-gray-800">{item.brand}</span>
                            </div>

                            <h3 className="font-semibold mt-2">{item.name}</h3>

                            <div className="flex items-center gap-1 justify-center md:justify-start mt-1">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <span
                                        key={index}
                                        className={index < item.rating ? "text-orange-500" : "text-gray-300"}
                                    >
                                        ★
                                    </span>
                                ))}
                                <span className="text-gray-500 text-sm ml-2">({item.rating})</span>
                            </div>

                            <p className="text-gray-500 mt-1">Colors: {item.color}</p>
                            <p className="text-gray-500 mt-1">Size: {item.size}</p>

                            <div className="flex items-center gap-2 mt-2 justify-center md:justify-start">
                                <button className="px-2 py-1 border rounded">-</button>
                                <span>01</span>
                                <button className="px-2 py-1 border rounded">+</button>
                            </div>
                        </div>

                        {/* Right: Price + Actions */}
                        <div className="flex flex-col items-center md:items-end gap-2 mt-4 md:mt-0">
                            <div className="flex flex-col items-center md:items-end text-right">
                                <span className="font-bold">₹{item.price}</span>
                                <span className="line-through text-gray-400">
                                    ₹{item.originalPrice}
                                </span>
                                <span className="text-green-600">{item.discount}</span>
                            </div>

                            <div className="flex text-sm mt-4 text-[#9A0417]">
                                <button className="underline border-r border-[#9A0417] pr-3">
                                    Delete
                                </button>
                                <button className="underline border-r border-[#9A0417] px-3">
                                    Save for later
                                </button>
                                <button className="underline pl-3">Share</button>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
