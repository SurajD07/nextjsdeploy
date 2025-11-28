"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ProductGrid from './components/ProductGrid';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
    // Show button when scrolled down
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
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // smooth scroll
        });
    };
    return (
        <main>
            <Breadcrumb className="custom-padding mt-5">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="" className="text-red-600">Wishlist</BreadcrumbLink>
                    </BreadcrumbItem>

                </BreadcrumbList>
            </Breadcrumb>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 custom-padding">
                {/* Heading */}
                <h2 className="font-bold text-2xl mt-2">
                    All Wishlist (12 Items)
                </h2>

                {/* Search & Sort */}
                <div className="flex items-center mt-2 sm:mt-0 space-x-2">

                    <Input
                        type="text"
                        placeholder="Search..."
                        className="w-48 sm:w-64 rounded-full"
                    />

                    {/* Sort Dropdown */}
                    <select className="border rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="latest">Sort by Latest</option>
                        <option value="priceLow">Price: Low to High</option>
                        <option value="priceHigh">Price: High to Low</option>
                        <option value="name">Sort by Name</option>
                    </select>
                </div>
            </div>
            <ProductGrid />
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

        </main>
    );
}
