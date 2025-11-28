"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Heart, Truck } from "lucide-react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { authProductApi } from "@/apiConfig/authApi";
import { useParams } from "next/navigation";

const ProductDetails: React.FC = () => {
    const sizes = [20.5, 21, 22, 23, 23.5, 24, 24.5, 25, 26, 27];
    const colors = [
        "/images/trophy/shoe1.png",
        "/images/trophy/shoe2.png",
        "/images/trophy/shoe3.png",
    ];

    const [selectedSize, setSelectedSize] = useState<number | null>(24);
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [quantity, setQuantity] = useState(1);

    const params = useParams();
    const id = params.slug as string;
    console.log(params);
    
    const getProductSingleView = useQuery({
    queryKey: ["authProductApiGet", id],
    queryFn: () => authProductApi(`/${id}`),
    });

    const productData = getProductSingleView?.data?.data?.result || [];

    console.log(productData)


    return (
        <div className="p-4">
            {/* Title */}
            <div className="flex items-center justify-between mb-3">
                {/* Left side - Logo + Name */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Image
                            src="/images/logo/nike.png"
                            alt="Nike Logo"
                            width={24}   // w-6 = 24px
                            height={24}
                            className="w-6 h-6 object-contain"
                        />
                    </div>
                    <h2 className="text-xl font-semibold">Nike</h2>
                </div>

                {/* Right side - Wishlist */}
                <button className="p-2 border rounded-lg hover:bg-gray-100 group">
                    <Heart className="w-6 h-6 text-gray-600 group-hover:text-[#9A0417] group-hover:fill-[#9A0417]" />
                </button>

            </div>



            <h2 className="text-2xl font-bold mb-2">Nike Air Zoom Pegasus 40</h2>
            <p className="text-gray-500 text-sm mb-4">⭐⭐⭐⭐⭐4.5 (47 Reviews)</p>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
                <p className="text-2xl font-bold text-black">₹6,999</p>
                <p className="line-through text-gray-400">₹8,000</p>
                <p className="text-green-600">20% off</p>

            </div>

            {/* Colors */}
            <div className="mb-4">
                <p className="font-medium">Colors :</p>
                <div className="flex gap-2 mt-1">
                    {colors.map((color, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedColor(color)}
                            className={`border rounded-md p-1 ${selectedColor === color ? "border-red-500" : "border-gray-300"
                                }`}
                        >
                            <Image src={color} alt="color" width={50} height={50} />
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity */}
            <div className="mb-4">
                <p className="font-medium">Quantity :</p>
                <div className="flex items-center gap-2 mt-1">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 border rounded"
                    >
                        -
                    </button>
                    <span>{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 border rounded"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Size */}
            <div className="mb-4">
                <p className="font-medium">Size :</p>
                <div className="grid grid-cols-5 gap-2 mt-1">
                    {sizes.map((size, i) => (
                        <button
                            key={i}
                            onClick={() => setSelectedSize(size)}
                            className={`border rounded-md px-3 py-2 ${selectedSize === size ? "bg-[#9A0417] text-white" : "bg-white"
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <a href="#" className="text-[#9A0417] underline cursor-pointer">
                    Size Guide
                </a>

            </div>
            <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
                <div className="w-8 h-8 rounded-full  flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                </div>
                <p className="text-gray-700 font-medium">
                    Free Delivery on orders over <span className="font-semibold">₹12,000</span>
                </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
                <Link
                    href="/cart"
                    className="flex-1 py-3 bg-pink-100 text-[#9A0417] font-medium rounded-lg hover:bg-pink-200 text-center"
                >
                    Add to cart
                </Link>
                {/* 
                <button className="flex-1 py-3 bg-[#9A0417] text-white rounded-lg">
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
};

export default ProductDetails;
