"use client"
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,

} from "@/components/ui/breadcrumb";

import DealItem from "@/components/DealItem";
import { useEffect, useState } from "react";
import ProductoryItem from "./components/ProductoryItem";
import CategoryProductone from "./components/CategoryProductone";
import Link from "next/link";
export default function CategoryPage() {
    const [isVisible, setIsVisible] = useState(false);
    const categories = [
        { id: 1, src: "/images/shoes.png", title: "Active Wear" },
        { id: 2, src: "/images/shoes.png", title: "Shoes" },
        { id: 3, src: "/images/accessories.png", title: "Sports Accessories" },
        { id: 4, src: "/images/tshirt.png", title: "Polo T-shirts" },
        { id: 5, src: "/images/bag.png", title: "Bags" },
        { id: 6, src: "/images/cricket.png", title: "Cricket Kit" },
        { id: 7, src: "/images/shorts.png", title: "Shorts" },
        { id: 8, src: "/images/polotshirts.png", title: "T-Shirts" },
        { id: 9, src: "/images/tshirt.png", title: "Polo T-shirts" },
        { id: 10, src: "/images/bag.png", title: "Bags" },
        { id: 11, src: "/images/polotshirts.png", title: "Active Wear" },
        { id: 12, src: "/images/shoes.png", title: "Shoes" },
        { id: 13, src: "/images/accessories.png", title: "Sports Accessories" },
        { id: 14, src: "/images/tshirt.png", title: "Polo T-shirts" },
        { id: 15, src: "/images/bag.png", title: "Bags" },

    ]
    const products = [
        { id: 1, src: "/images/logo/nike.png", title: "Active Wear" },
        { id: 2, src: "/images/logo/adidas.png", title: "Shoes" },
        { id: 3, src: "/images/logo/asics.png", title: "Sports Accessories" },
        { id: 4, src: "/images/logo/puma.png", title: "Polo T-shirts" },
        { id: 5, src: "/images/logo/reebok.png", title: "Bags" },
        { id: 6, src: "/images/logo/asics.png", title: "Cricket Kit" },
        { id: 7, src: "/images/logo/nike.png", title: "Active Wear" },
        { id: 8, src: "/images/logo/adidas.png", title: "Shoes" },
        { id: 9, src: "/images/logo/asics.png", title: "Sports Accessories" },
        { id: 10, src: "/images/logo/reebok.png", title: "Bags" },

    ]
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
        <div className="">
            <Breadcrumb className="custom-padding mt-1">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="">All Category</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-2xl font-bold custom-padding mt-3 mb-3">
                Shop by Category – Find What Fuels Your Game
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-5 gap-4">
                {/* {categories.map((category) => (
                    <CategoryProductone
                        key={category.id}
                        src={category.src}
                        title={category.title}
                    />
                ))} */}
                {categories.map((category) => (
                    <Link key={category.id} href={`/category/${category.id}`}>
                        <CategoryProductone
                            src={category.src}
                            title={category.title}
                        />
                    </Link>
                ))}
            </div>
            <div className="cutom-padding">
                <h2 className="text-2xl font-bold custom-padding mt-3 mb-3">
                    Brands you looking for
                </h2>
                <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-4 p-5">
                    {products.map((products) => (
                        <ProductoryItem
                            key={products.id}
                            src={products.src}
                            title={products.title}
                        />
                    ))}
                </div>

            </div>
            <div className="custom-padding">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Top Sportswear Deals You Can’t Miss</h2>

                {/* Grid layout for multiple items per row */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {dealsData.slice(0, 10).map((deal) => (
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
