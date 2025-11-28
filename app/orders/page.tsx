"use client"
import MyOrdersPanel from "@/components/MyOrdersPanel";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";

// app/orders/page.tsx
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
    const [orderStatus, setOrderStatus] = useState("All");
    const [isVisible, setIsVisible] = useState(false);
    const [timeFilter, setTimeFilter] = useState("Last 30 days");
    const orderStatuses = ["All", "In Progress", "Delivered", "Cancelled", "Returned"];
    const timeFilters = ["Last 30 days", "3 Months", "6 Months", "1 year", "2024", "Older"];
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // smooth scroll
        });
    };
    // useEffect(() => {
    //     const toggleVisibility = () => {
    //         if (window.scrollY > 200) {
    //             setIsVisible(true);
    //         } else {
    //             setIsVisible(false);
    //         }
    //     };

    //     window.addEventListener("scroll", toggleVisibility);
    //     return () => window.removeEventListener("scroll", toggleVisibility);
    // }, []);
    useEffect(() => {
        const toggleVisibility = () => {
            const shouldBeVisible = window.scrollY > 200;
            setIsVisible(prev => (prev !== shouldBeVisible ? shouldBeVisible : prev));
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="">
            <div className="flex flex-wrap items-center ">
                <Breadcrumb className="custom-padding mt-5">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="" className="text-red-600">My Orders</BreadcrumbLink>
                        </BreadcrumbItem>

                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <h2 className="font-bold text-2xl tracking-wider text-black custom-padding mt-2">Track and Manage Your Orders</h2>
            <div className="grid grid-cols-1 md:grid-cols-[30%_70%] lg:grid-cols-[20%_80%] gap-5 custom-padding mt-5 relative">
                {/* Sidebar */}
                <div className="w-full border rounded-lg bg-white shadow-sm p-4 sticky">
                    <h3 className="text-lg font-semibold mb-4 border-b p-1">Filters</h3>

                    {/* Order Status */}
                    <div className="mb-6 p-1">
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">ORDER STATUS</h4>
                        <div className="flex flex-col gap-2">
                            {orderStatuses.map((status) => (
                                <label
                                    key={status}
                                    className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
                                >
                                    <input
                                        type="checkbox"
                                        checked={orderStatus === status}
                                        onChange={() => setOrderStatus(status)}
                                        className="form-checkbox text-indigo-500 rounded focus:ring-indigo-500"
                                    />
                                    {status}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Time Filter */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">ORDER STATUS</h4>
                        <div className="flex flex-col gap-2">
                            {timeFilters.map((time) => (
                                <label
                                    key={time}
                                    className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
                                >
                                    <input
                                        type="checkbox"
                                        checked={timeFilter === time}
                                        onChange={() => setTimeFilter(time)}
                                        className="form-checkbox text-indigo-500 rounded focus:ring-indigo-500"
                                    />
                                    {time}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Orders Panel */}
                <div className="flex flex-col lg:flex-row gap-5">
                    <MyOrdersPanel cart={cart} />
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
    )
}
