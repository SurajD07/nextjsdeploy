import Image from "next/image";
import Link from "next/link";
import React from "react";

type MyOrdersPanel = {
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
    orders: string;
};

interface MyOrdersPanelProps {
    cart: MyOrdersPanel[];
}

export default function MyOrdersPanel({ cart }: MyOrdersPanelProps) {
    return (
        <div className="w-full lg:w-[100%]">
            {/* <h2 className="text-xl font-bold mb-4">Items In Your Order</h2> */}
            <div className="flex flex-col gap-4">
                {cart.map((item) => (
                    <Link
                        key={item.id}
                        href={`/orders/${item.id}`}
                        className="block" // makes whole card clickable
                    >
                        <div className="flex flex-col md:grid md:grid-cols-[auto_1fr_auto] border p-4 rounded-lg gap-7 cursor-pointer transition-transform duration-200 hover:scale-[1.01] hover:shadow-md">
                            {/* Left: Image */}
                            <div className="flex items-center justify-center md:justify-start">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={208}
                                    height={208}
                                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-md object-contain"
                                />
                            </div>

                            {/* Middle: Product Details */}
                            <div className="text-center md:text-left">
                                <div className="flex items-center gap-2 justify-center md:justify-start">
                                    <div className="w-7 h-7 rounded-full border flex items-center justify-center bg-[#333333] p-1">
                                        <Image
                                            src={item.logo}
                                            alt={item.brand}
                                            width={40}
                                            height={40}
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
                                <p className="text-gray-500 mt-1">Quantity: 1</p>
                            </div>

                            {/* Right: Price + Actions */}
                            <div className="flex flex-col items-center md:items-end gap-2 mt-4 md:mt-0">
                                <div className="flex items-center justify-between w-full md:w-auto gap-2 mb-2">
                                    {/* Order ID as badge */}
                                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md text-xs font-medium">
                                        Order ID: 1324
                                    </span>
                                </div>

                                <div className="inline-flex items-center justify-center rounded-full bg-red-50 text-red-700 text-xs font-medium px-2 py-1">
                                    <span className="w-2 h-2 bg-red-700 rounded-full mr-1"></span>
                                    {item.orders}
                                </div>

                                <div className="flex flex-col items-center md:items-end text-right mt-7">
                                    <span className="font-bold">₹{item.price}</span>
                                    <span className="line-through text-gray-400">₹{item.originalPrice}</span>
                                    <span className="text-green-600">{item.discount}</span>
                                </div>

                                <div className="flex text-sm text-[#418F49] mt-5">
                                    <p>Delivery expected by Oct 15, 2024</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}
