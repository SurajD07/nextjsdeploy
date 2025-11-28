"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import BlogCard from "./components/BlogCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Home() {
    const [isVisible, setIsVisible] = useState(false);
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
    // Blog data inside page.tsx
    const blogs = [
        {
            id: 1,
            title: "Top 5 Shoes Every Athlete Needs",
            description:
                "Discover the best running, training, and cricket shoes that combine comfort.",
            image: "/images/about/bb1.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 2,
            title: "How to Choose the Right Cricket Bat",
            description:
                "Discover the best running, training, and cricket shoes that combine comfort and performance.",
            image: "/images/about/bb3.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 3,
            title: "Jersey Trends: Play with Style in 2024",
            description:
                "Discover the best jersey styles that combine comfort and performance.",
            image: "/images/about/bb4.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 4,
            title: "How to Choose the Right Cricket Bat",
            description:
                "Discover the best running, training, and cricket shoes that combine comfort and performance.",
            image: "/images/about/bb3.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 5,
            title: "Top 5 Shoes Every Athlete Needs",
            description:
                "Discover the best running, training, and cricket shoes that combine comfort.",
            image: "/images/about/bb1.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 6,
            title: "How to Choose the Right Cricket Bat",
            description:
                "Discover the best running, training, and cricket shoes that combine comfort and performance.",
            image: "/images/about/bb3.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 7,
            title: "Jersey Trends: Play with Style in 2024",
            description:
                "Discover the best jersey styles that combine comfort and performance.",
            image: "/images/about/bb4.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 8,
            title: "How to Choose the Right Cricket Bat",
            description:
                "Discover the best running, training, and cricket shoes that combine comfort and performance.",
            image: "/images/about/bb3.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 9,
            title: "Top 5 Shoes Every Athlete Needs",
            description:
                "Discover the best running, training, and cricket shoes that combine comfort.",
            image: "/images/about/bb1.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 10,
            title: "How to Choose the Right Cricket Bat",
            description:
                "Discover the best running, training, and cricket shoes that combine comfort and performance.",
            image: "/images/about/bb3.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 11,
            title: "Jersey Trends: Play with Style in 2024",
            description:
                "Discover the best jersey styles that combine comfort and performance.",
            image: "/images/about/bb4.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },
        {
            id: 12,
            title: "How to Choose the Right Cricket Bat",
            description:
                "Discover the best running, training, and cricket shoes that combine comfort and performance.",
            image: "/images/about/bb3.png",
            author: "Sasi Kumar",
            date: "June 13, 2024",
            readTime: "15-20 Mins read",
        },

    ];

    return (
        <main className="">
            <Breadcrumb className="custom-padding mt-3">
                <BreadcrumbList>
                    {/* Home */}
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    {/* Cart */}
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-red-700">Blog</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            {/* <h1 className="text-3xl font-bold custom-padding mt-3 ">Blog (12 Items)</h1> */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between custom-padding mt-3 gap-4">
                {/* Left: Title */}
                <h1 className="lg:text-3xl font-bold md:text-xl text-3xl">Blog (12 Items)</h1>

                {/* Right: Search + Dropdowns */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                    {/* Search */}
                    <Input
                        type="text"
                        placeholder="Search blogs..."
                        className="w-full sm:w-56 rounded-full"
                    />

                    {/* Category Dropdown */}
                    <Select>
                        <SelectTrigger className="w-full sm:w-40 rounded-full">
                            <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="shoes">Shoes</SelectItem>
                            <SelectItem value="cricket">Cricket</SelectItem>
                            <SelectItem value="jersey">Jersey</SelectItem>
                        </SelectContent>
                    </Select>

                    {/* Sort By Dropdown */}
                    <Select>
                        <SelectTrigger className="w-full sm:w-40 rounded-full">
                            <SelectValue placeholder="Sort By" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="latest">Latest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                            <SelectItem value="popular">Most Popular</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Blog Grid */}
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                {blogs.map((blog) => (
                    <Link key={blog.id} href={`/blog/${blog.id}`} className="block">
                        <BlogCard blog={blog} />
                    </Link>
                ))}
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
        </main>
    );
}
