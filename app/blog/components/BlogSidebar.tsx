"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSidebar() {
    const products = [
        {
            id: 1,
            name: "Nike Air Zoom Pegasus 40",
            image: "/images/trophy/shoe1.png",
            price: "₹6,999",
            brand: "Nike",
            brandLogo: "/images/logo/nike.png",
            color: "Black",
            size: "UK 9",
            quantity: 1,
            discount: 1000,
        },
        {
            id: 2,
            name: "Nike Air Zoom Pegasus 41",
            image: "/images/trophy/shoe3.png",
            price: "₹7,499",
            brand: "Nike",
            brandLogo: "/images/logo/nike.png",
            color: "White",
            size: "24",
            quantity: 2,
            discount: 8000,
        },
    ];
    const relatedBlogs = [
        {
            id: 1,
            title: "Jersey Trends: Play with Style in 2025",
            image: "/images/about/girl.png",
        },
        {
            id: 2,
            title: "How to Choose the Right Cricket Bat",
            image: "/images/about/girl2.png",
        },
    ];
    const blogs = [
        {
            id: 1,
            image: "/images/about/bb6.png",
            title: "Top 5 Shoes Every Athlete Needs",
            desc: "Discover the best running, training, and cricket shoes that combine comfort and performance for every sport.",
            author: "Deepthi Reddy",
            date: "June 13, 2024",
        },
        {
            id: 2,
            image: "/images/about/bb5.png",
            title: "How to Choose the Right Running Gear",
            desc: "Learn how to select shoes and accessories that enhance your performance.",
            author: "Rahul Verma",
            date: "July 2, 2024",
        },
        {
            id: 3,
            image: "/images/about/bb4.png",
            title: "Best Cricket Kits in 2025",
            desc: "From bats to pads, check out our top picks for cricket lovers.",
            author: "Sneha Gupta",
            date: "August 10, 2024",
        },
    ]

    return (

        <aside
            className="
    w-full lg:w-full
    space-y-6
    lg:sticky lg:top-10 lg:self-start
    border p-4 lg:p-5
    rounded-lg
    mt-6 lg:mt-0
  "
        >
            <div className="flex items-center justify-between">
                <h4 className="font-semibold text-xl lg:text-2xl">
                    Featured Blog (01 Item)
                </h4>
                <Link
                    href="/blog"
                    className="text-red-700 text-sm font-medium hover:underline"
                >
                    View All
                </Link>
            </div>

            {/* Featured Blog */}

            <Carousel className="w-full max-w-8xl ">
                <CarouselContent>
                    {blogs.map((blog) => (
                        <CarouselItem
                            key={blog.id}
                            className="md:basis-full "
                        >
                            <div className="bg-[#FCFCFC] border border-[#E4E8EA]  rounded-md shadow-md overflow-hidden p-4 min-h-[410px]">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={400}
                                    height={200}
                                    className="w-full h-40 lg:h-48 object-cover rounded-md mt-2"
                                />

                                {/* Meta Info */}
                                <div className="mt-3 text-sm text-gray-500 flex justify-between items-center">
                                    <div className="flex items-center gap-1">
                                        <Image
                                            src="/images/about/clock.png"
                                            alt="Clock Icon"
                                            width={16}
                                            height={16}
                                        />
                                        <span>15-20 Mins read</span>
                                    </div>

                                </div>

                                {/* Title + Desc */}
                                <h3 className="text-base lg:text-lg font-semibold mt-2">
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">{blog.desc}</p>

                                {/* Author */}
                                <div className="flex items-center gap-2 mt-5">
                                    <Image
                                        src="/images/about/bb2.png"
                                        alt="Author"
                                        width={30}
                                        height={30}
                                        className="rounded-full"
                                    />
                                    <div className="text-sm">
                                        <p className="font-medium">{blog.author}</p>
                                        <p className="text-gray-500">{blog.date}</p>
                                    </div>

                                    {/* Read Now at the end */}
                                    <span className="ml-auto text-red-700 font-semibold cursor-pointer">
                                        Read Now →
                                    </span>
                                </div>


                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>


                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-300 flex items-center justify-center hover:bg-gray-100" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md border border-gray-300 flex items-center justify-center hover:bg-gray-100" />
            </Carousel>



            <div className="space-y-4 bg-[#FCFCFC] border border-[#E4E8EA] shadow-md rounded-lg overflow-hidden p-4">

                <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-xl lg:text-2xl">
                        Popular Products
                    </h4>
                    <Link
                        href="/products/5"
                        className="text-red-700 text-sm font-medium hover:underline"
                    >
                        View All
                    </Link>
                </div>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="grid grid-cols-[70px_1fr_auto] lg:grid-cols-[80px_1fr_auto] items-center gap-3 border-b pb-3 last:border-0"
                    >

                        <Image
                            src={product.image}
                            alt={product.name}
                            width={80}
                            height={60}
                            className="rounded-md"
                        />


                        <div className="text-xs lg:text-sm">
                            <div className="flex items-center gap-2 mb-1">
                                <Image
                                    src={product.brandLogo}
                                    alt={product.brand}
                                    width={18}
                                    height={18}
                                    className="rounded-full"
                                />
                                <span className="font-medium">{product.brand}</span>
                            </div>
                            <p className="font-medium">{product.name}</p>
                            <div className="text-xs text-gray-600 mt-1 space-x-3">
                                <span>
                                    Color: <span className="text-red-700">{product.color}</span>
                                </span>
                            </div>
                            <div className="text-xs text-gray-600 mt-1 space-x-3">
                                <span>
                                    Size: <span className="text-red-700">{product.size}</span>
                                </span>
                            </div>
                        </div>


                        <div className="text-right text-xs lg:text-sm min-w-[70px] lg:min-w-[90px]">
                            <p className="font-semibold text-gray-900">{product.price}</p>
                            {product.discount && (
                                <p className="text-xs text-muted-foreground font-medium line-through">
                                    {product.discount}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Subscribe */}
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row gap-3 items-center">
                    <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700 cursor-pointer" />
                    <h1 className="text-lg lg:text-2xl font-bold">Stay Ahead in the Game!</h1>
                </div>
                <p className="text-sm lg:text-base">
                    Get the latest sports tips, product updates, and
                    exclusive discounts delivered straight to your inbox
                </p>
                <div className="flex items-center gap-2 w-full">
                    <Input
                        type="tel"
                        placeholder="Enter your mobile number"
                        className="flex-1"
                        maxLength={10}
                        pattern="[0-9]{10}"
                    />
                    <Button className="bg-red-700 hover:bg-red-800 text-white text-sm px-4 py-2">
                        Subscribe
                    </Button>
                </div>
            </div>

            {/* Related Blogs */}
            <div className="bg-white shadow rounded-lg p-4">

                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg mb-3">Related Blogs</h3>
                    <Link
                        href="/blog"
                        className="text-red-700 text-sm font-medium hover:underline"
                    >
                        View All
                    </Link>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                    {relatedBlogs.map((blog) => (
                        <li key={blog.id} className="flex items-center gap-3">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={50}
                                height={50}
                                className="rounded-md"
                            />
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 text-xs lg:text-sm text-gray-600">
                                    <Image
                                        src="/images/about/clock.png"
                                        alt="Clock Icon"
                                        width={16}
                                        height={16}
                                    />
                                    <span>15-20 Mins read</span>
                                </div>
                                <p className="mt-1 font-medium">{blog.title}</p>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>

    );
}
