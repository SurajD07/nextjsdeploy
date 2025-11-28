"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";

export default function Refund() {
    const [isVisible, setIsVisible] = useState(false);
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
    return (<div>
        <Breadcrumb className="custom-padding mt-5">
            <BreadcrumbList>
                {/* Home */}
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {/* Cart */}
                <BreadcrumbItem>
                    <BreadcrumbPage className="text-red-700">Refund Policy</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <h2 className="text-2xl font-bold custom-padding mt-2">Return & Refund Policy : X11 Super Sports</h2>
        <p className="custom-padding text-[#808080] mt-2">Last Updated: 25/06/2025</p>
        <div className="custom-padding mt-5">
            <section className="space-y-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">1</span>
                    Eligibility for Returns
                </h2>

                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        Products can be returned within 7 days of delivery.
                    </li>
                    <li>
                        Items must be <span className="text-red-700">unused, unwashed, and in original packaging </span>with tags intact.
                    </li>
                    <li>
                        Receipt or proof of purchase is required.
                    </li>
                </ul>
            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">2</span>
                    Non-Returnable Items
                </h2>

                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        Innerwear, socks, or protective gear (for hygiene reasons).
                    </li>
                    <li>
                        Customized or personalized products (e.g., printed jerseys).
                    </li>
                    <li>
                        Clearance/sale items marked as Final Sale.
                    </li>
                </ul>
            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">3</span>
                    How to Initiate a Return
                </h2>

                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        Go to <span className="text-red-700">My Orders → </span>Select Product → Click Request Return.
                    </li>
                    <li>
                        Pack the item securely and hand it to the courier arranged by us.
                    </li>
                    <li>
                        You can also contact support via 📧 email or 📞 phone for assistance.
                    </li>
                </ul>
            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">4</span>
                    Refund Process
                </h2>

                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        Once the returned product is inspected, your refund will be initiated.
                    </li>
                    <li>
                        Refunds are processed within <span className="text-red-700">5–7 business days</span> via your original payment method.
                    </li>
                    <li>
                        For <span className="text-red-700">Cash on Delivery (COD) </span>orders, refund will be issued to your bank account/UPI.
                    </li>
                </ul>
            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">5</span>
                    Exchanges
                </h2>

                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        If you need a different size or product, place a new order after returning the original item.
                    </li>
                    <li>
                        Exchange availability depends on stock.
                    </li>

                </ul>
            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">6</span>
                    Damaged or Wrong Product
                </h2>

                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        If you receive a defective or incorrect product, contact us within 48 hours of delivery.
                    </li>
                    <li>
                        We will arrange a free return and replacement.
                    </li>

                </ul>
            </section>



        </div>
        {isVisible && (
            <div
                onClick={scrollToTop}
                className="h-20 mt-5 flex items-center justify-center bg-cover bg-center cursor-pointer"
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