"use client";

import MyOrdersPanel from "@/components/MyOrdersPanel";
import DeliveryAddressCard from "../components/DeliveryAddressCard";
import OrderDetailsCard from "../components/OrderDetailsCard";
import { useEffect, useState } from "react";
import PriceDetails from "../components/PriceDetails";


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
    orders: string;
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
        orders: "In Progress"
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
        orders: "cancelled"
    },

];

export default function OrdersPage() {
    const [cart] = useState<CartItem[]>(initialCart);
    const [isVisible, setIsVisible] = useState(false);
    const sampleOrder = {
        brand: "Nike",
        productName: "Nike Air Zoom Pegasus 40",
        price: 6999,
        quantity: 12,
        orderPlaced: "29th Sep, 2024",
        status: "In Progress",
        image: "/images/trophy/shoe5.png",
    };

    const sampleAddress = {
        name: "Deepthi",
        fullAddress: "Guestin PG 755, EWS Colony, BTM Layout Stage 2, Bengaluru - 560076, Karnataka.",
        phone: "7708517447",
        alternatePhone: "9360861759",
    };
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
    const priceData = {
        listingPrice: 15000,
        sellingPrice: 14000,
        extraDiscount: 500,
        specialPrice: 200,
    };


    return (
        <div>
            <div className="grid grid-cols-1   lg:grid-cols-[70%_30%] md:grid-cols-1  gap-5 custom-padding mt-5">
                <OrderDetailsCard {...sampleOrder} />
                <DeliveryAddressCard initialAddress={sampleAddress} />
                <h2 className="font-bold text-2xl">Others Items In this Order</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] md:grid-cols-1 gap-5 custom-padding mt-5">
                <MyOrdersPanel cart={cart} />
                <PriceDetails
                    listingPrice={priceData.listingPrice}
                    sellingPrice={priceData.sellingPrice}
                    extraDiscount={priceData.extraDiscount}
                    specialPrice={priceData.specialPrice}
                />
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
