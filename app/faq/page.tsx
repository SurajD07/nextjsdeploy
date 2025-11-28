"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { useEffect, useState } from "react";

export default function AccordionDemo() {
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
    return (
        <div>
            <Breadcrumb className="custom-padding mt-5">
                <BreadcrumbList>
                    {/* Home */}
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    {/* Cart */}
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-red-700">Faq</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <h2 className="font-bold text-center text-2xl custom-padding mt-5">Frequently asked questions</h2>
            <div className="flex justify-center bg-white custom-padding">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full max-w-3xl border bg-[#FFF8F9] border-pink-200 mt-10 p-5 rounded-md shadow-md"
                >
                    <AccordionItem value="item-1" className="mb-5">
                        <AccordionTrigger>What is your return policy?</AccordionTrigger>
                        <AccordionContent>
                            You can return any item within 30 days of purchase.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="mb-5">
                        <AccordionTrigger>Do you offer international shipping?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we ship worldwide with standard and express options.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3" className="mb-5">
                        <AccordionTrigger>How can I track my order?</AccordionTrigger>
                        <AccordionContent>
                            Once shipped, you’ll receive a tracking link via email.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4" className="mb-5">
                        <AccordionTrigger>Do you offer discounts for bulk orders?</AccordionTrigger>
                        <AccordionContent>
                            Yes, we provide special pricing for bulk purchases. Contact our sales team.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5" className="mb-5">
                        <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                        <AccordionContent>
                            We accept credit cards, debit cards, PayPal, and bank transfers.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6" className="mb-5">
                        <AccordionTrigger>How do I contact customer support?</AccordionTrigger>
                        <AccordionContent>
                            You can reach our support team via live chat or email at support@example.com.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
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
