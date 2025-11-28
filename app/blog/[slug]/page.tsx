"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import BlogContent from "../components/BlogContent";
import BlogSidebar from "../components/BlogSidebar";
import { useEffect, useState } from "react";


export default function BlogPage() {
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
    return (
        <div>
            <Breadcrumb className="custom-padding mt-3">
                <BreadcrumbList>
                    {/* Home */}
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    {/* Cart */}
                    <BreadcrumbItem>
                        <BreadcrumbPage>Blog</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    {/* Cart */}
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-red-700">How to choose the right cricket bat</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 custom-padding">

                {/* Left Content */}
                <div>
                    <BlogContent />
                </div>

                {/* Right Sidebar (fixed) */}
                <div>
                    <BlogSidebar />
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
