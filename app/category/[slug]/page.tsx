"use client";

import DealItem from "@/components/DealItem";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CategoryPage() {
    const [isVisible, setIsVisible] = useState(false);

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
        {
            id: 11,
            brand: "KOOKABURRA",
            name: "Elite Cricket Kit Bag – Large Capa...",
            currentPrice: "2,899",
            originalPrice: "3,499",
            discount: "22%",
            image: "/images/attire3.png"
        },
        {
            id: 12,
            brand: "ADIDAS",
            name: "Sprintstar Running Shoes – Unisex",
            currentPrice: "3,499",
            originalPrice: "4,499",
            discount: "22%",
            image: "/images/attire4.png"
        },
        {
            id: 13,
            brand: "SS TON",
            name: "Blaster Pro Batting Gloves",
            currentPrice: "799",
            originalPrice: "1,699",
            discount: "27%",
            image: "/images/attire5.png"
        },
        {
            id: 14,
            brand: "SS TON",
            name: "Blaster Pro Batting Gloves",
            currentPrice: "799",
            originalPrice: "1,699",
            discount: "27%",
            image: "/images/attire5.png"
        },
        {
            id: 15,
            brand: "ADIDAS",
            name: "Sprintstar Running Shoes – Unisex",
            currentPrice: "3,499",
            originalPrice: "4,499",
            discount: "22%",
            image: "/images/attire9.png"
        },
        {
            id: 16,
            brand: "ADIDAS",
            name: "Sprintstar Running Shoes – Unisex",
            currentPrice: "3,499",
            originalPrice: "4,499",
            discount: "22%",
            image: "/images/attire4.png"
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
            <div className="grid grid-cols-1 md:grid-cols-[10%_90%] gap-4 custom-padding">
                <div className="mt-6">Categories</div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
                    {dealsData.map((deal) => (
                        <Link key={deal.id} href={`/products/${deal.id}`}>
                            <DealItem
                                brand={deal.brand}
                                name={deal.name}
                                currentPrice={deal.currentPrice}
                                originalPrice={deal.originalPrice}
                                discount={deal.discount}
                                image={deal.image}
                            />
                        </Link>
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
