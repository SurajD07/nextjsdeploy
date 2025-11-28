"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useEffect, useState } from "react";

export default function TermsPage() {
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
                    <BreadcrumbPage className="text-red-700">Terms & Conditions</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
        <h2 className="text-2xl font-bold custom-padding mt-2">Terms & conditions : X11 Super Sports</h2>
        <p className="custom-padding text-[#808080] mt-2">Last Updated: 25/06/2025</p>
        <div className="custom-padding mt-5">
            <section className="space-y-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">1</span>
                    General Use
                </h2>

                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        By using this website, you confirm that you are at least 18 years old or accessing under the supervision of a guardian.
                    </li>
                    <li>
                        Offer more power but require good wrist strength.
                    </li>
                    <li>
                        We reserve the right to update or modify these terms at any time without prior notice.
                    </li>
                </ul>
            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">2</span>
                    Products & Orders
                </h2>
                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        All products displayed are subject to availability.
                    </li>
                    <li>
                        Prices, descriptions, and product images are updated regularly but may vary slightly from actual items.
                    </li>
                    <li>
                        Orders are confirmed only after successful payment or acceptance of Cash on Delivery (COD).
                    </li>
                    <li>
                        We reserve the right to cancel orders due to stock unavailability, incorrect pricing, or payment issues.
                    </li>
                </ul>

            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">3</span>
                    Payments
                </h2>
                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        Payments can be made via credit/debit cards, UPI, net banking, wallets, or COD (where available).
                    </li>
                    <li>
                        All transactions are processed securely through trusted gateways.
                    </li>
                    <li>
                        In case of payment failure, the order will not be processed.
                    </li>

                </ul>

            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">4</span>
                    Shipping & Delivery
                </h2>
                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        Orders are shipped within 1–3 business days and delivered within 3–7 business days, depending on location.
                    </li>
                    <li>
                        Shipping fees (if any) are shown at checkout.
                    </li>
                    <li>
                        We are not responsible for delays caused by courier services or unforeseen events.
                    </li>

                </ul>

            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">5</span>
                    Returns & Refunds
                </h2>
                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        Products can be returned within <span className="text-red-700">7 days</span> of delivery if unused and in original condition.
                    </li>
                    <li>
                        Refunds are processed within <span className="text-red-700">5–7 business</span> days after product inspection.
                    </li>
                    <li>
                        Certain items like innerwear, customized jerseys, or clearance products are non-returnable.
                    </li>

                </ul>

            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">6</span>
                    User Responsibilities
                </h2>
                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        You agree not to misuse the website for fraudulent activities.
                    </li>
                    <li>
                        You must provide accurate and truthful information when placing an order.
                    </li>
                    <li>
                        Any attempt to tamper with the website or payment systems will lead to account termination.
                    </li>

                </ul>

            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">7</span>
                    Intellectual Property
                </h2>
                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        All content, logos, product images, and designs on this website are the property of <span className="text-red-700">X11 Super Sports.</span>
                    </li>
                    <li>
                        You may not copy, reproduce, or distribute our content without prior written consent.
                    </li>
                </ul>

            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">8</span>
                    Limitation of Liability
                </h2>
                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        We are not liable for indirect, incidental, or consequential damages caused by the use of our website.
                    </li>
                    <li>
                        Product warranties, if applicable, are provided by the manufacturer/brand.
                    </li>
                </ul>

            </section>
            <section className="space-y-3 mt-3">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-red-700 text-white flex items-center justify-center text-sm font-bold">9</span>
                    Governing Law
                </h2>
                <ul className="list-disc list-inside pl-6 text-gray-700 space-y-1">
                    <li>
                        These terms are governed by Indian law.
                    </li>
                    <li>
                        Any disputes shall be resolved under the jurisdiction of [Your City/State] courts.
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




    </div>)
}