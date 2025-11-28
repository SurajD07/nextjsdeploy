"use client";

import { useEffect, useState } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import DealItem from "@/components/DealItem";
import CartItems from "@/components/CartItem";
import Link from "next/link";

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
        logo: "/images/logo/nike.png",   // 🔑 Add logo field
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
        name: "Nike Air Zoom Pegasus 40",
        logo: "/images/logo/nike.png",
        price: 6999,
        originalPrice: 8695,
        discount: "20% Off",
        color: "Grey",
        size: "24",
        image: "/images/trophy/shoe5.png",
        rating: 4,
    },
    {
        id: 3,
        brand: "Nike",
        name: "Nike Air Zoom Pegasus 40",
        logo: "/images/logo/nike.png",
        price: 6999,
        originalPrice: 8695,
        discount: "20% Off",
        color: "Grey",
        size: "24",
        image: "/images/trophy/shoe5.png",
        rating: 4,
    },
    {
        id: 4,
        brand: "Nike",
        name: "Nike Air Zoom Pegasus 40",
        logo: "/images/logo/nike.png",
        price: 6999,
        originalPrice: 8695,
        discount: "20% Off",
        color: "Grey",
        size: "24",
        image: "/images/trophy/shoe5.png",
        rating: 4,
    },
];

export default function ShoppingCart() {
    const [cart] = useState<CartItem[]>(initialCart);
    const [isVisible, setIsVisible] = useState(false);
    const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
    const discount = 100;
    const shipping = 50;
    const total = subtotal - discount + shipping;
    const dealsData = [
        {
            id: 1,
            brand: "SG",
            name: "CRICKET MAX Power Bat – Eng...",
            currentPrice: "4,499",
            originalPrice: "5,999",
            discount: "25%",
            image: "/images/attire1.png" // Add image path
        },
        {
            id: 2,
            brand: "NIKE",
            name: "PRO Training Jersey – Dri-FIT",
            currentPrice: "1,299",
            originalPrice: "1,499",
            discount: "24%",
            image: "/images/attire2.png"
        },
        {
            id: 3,
            brand: "KOOKABURRA",
            name: "Elite Cricket Kit Bag – Large Capa...",
            currentPrice: "2,899",
            originalPrice: "3,499",
            discount: "22%",
            image: "/images/attire3.png"
        },
        {
            id: 4,
            brand: "ADIDAS",
            name: "Sprintstar Running Shoes – Unisex",
            currentPrice: "3,499",
            originalPrice: "4,499",
            discount: "22%",
            image: "/images/attire4.png"
        },
        {
            id: 5,
            brand: "SS TON",
            name: "Blaster Pro Batting Gloves",
            currentPrice: "799",
            originalPrice: "1,699",
            discount: "27%",
            image: "/images/attire5.png"
        },
        {
            id: 6,
            brand: "ADIDAS",
            name: "Sprintstar Running Shoes – Unisex",
            currentPrice: "3,499",
            originalPrice: "4,499",
            discount: "22%",
            image: "/images/attire6.png"
        },
        {
            id: 7,
            brand: "SS TON",
            name: "Blaster Pro Batting Gloves",
            currentPrice: "799",
            originalPrice: "1,699",
            discount: "27%",
            image: "/images/attire7.png"
        },
        {
            id: 8,
            brand: "KOOKABURRA",
            name: "Elite Cricket Kit Bag – Large Capa...",
            currentPrice: "2,899",
            originalPrice: "3,499",
            discount: "22%",
            image: "/images/attire8.png"
        },
        {
            id: 9,
            brand: "ADIDAS",
            name: "Sprintstar Running Shoes – Unisex",
            currentPrice: "3,499",
            originalPrice: "4,499",
            discount: "22%",
            image: "/images/attire9.png"
        },
        {
            id: 10,
            brand: "SG",
            name: "CRICKET MAX Power Bat – Eng...",
            currentPrice: "4,499",
            originalPrice: "5,999",
            discount: "25%",
            image: "/images/attire10.png" // Add image path
        },
    ];
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // smooth scroll
        });
    };
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            <div className="custom-padding my-2">
                <Breadcrumb>
                    <BreadcrumbList>
                        {/* Home */}
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        {/* Cart */}
                        <BreadcrumbItem>
                            <BreadcrumbPage>Add to Cart</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>


            <div className="flex flex-col lg:flex-row custom-padding gap-5 ">

                {/* Left Side - Cart Items */}

                <div className="w-full lg:w-[70%]">
                    <h2 className="text-xl font-bold mb-4">Your Shopping Cart</h2>

                    <div className="flex flex-col lg:flex-row gap-5">
                        {/* Left Side - Cart Items */}
                        <CartItems cart={cart} />
                    </div>
                </div>

                {/* Right Side - Summary */}
                <div className="w-full lg:w-[30%] border p-6 rounded-lg h-fit custom-padding mt-6 lg:mt-10">
                    <h2 className="text-lg font-bold mb-4">Cart Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal ({cart.length} items)</span>
                        <span>₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Discounts</span>
                        <span>- ₹{discount}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping Charges</span>
                        <span>₹{shipping}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-green-600 mb-4">
                        <span>Estimated Total</span>
                        <span>₹{total}</span>
                    </div>
                    <Link
                        href="/checkout/24"
                        className="bg-[#9A0417] text-white w-full py-2 rounded-lg text-center block hover:bg-[#7f0312]"
                    >
                        Proceed to Checkout
                    </Link>

                </div>
            </div>
            <div className=" p-6 ">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Similar Like your Cart</h2>

                {/* Grid layout for multiple items per row */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {dealsData.slice(0, 10).map((deal) => (
                        <DealItem
                            key={deal.id}
                            brand={deal.brand}
                            name={deal.name}
                            currentPrice={deal.currentPrice}
                            originalPrice={deal.originalPrice}
                            discount={deal.discount}
                            image={deal.image}
                        />
                    ))}
                </div>

            </div>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="h-20 mt-2 flex items-center justify-center bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: "url('/images/background.png')" }}
                    
                >
                    <h1 className="text-white text-xl font-bold underline underline-offset-4">
                        Back To Top
                    </h1>
                </div>
            )}

        </div>


    );
}
