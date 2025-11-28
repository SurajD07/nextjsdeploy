"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ContactUs() {
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
        <>
            <div className="">
                <Breadcrumb className="custom-padding mt-3 mb-3">
                    <BreadcrumbList>
                        {/* Home */}
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        {/* Cart */}
                        <BreadcrumbItem>
                            <BreadcrumbPage className="text-red-700">Contact Us</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 custom-padding">
                    <div className="space-y-5">
                        <h2 className="text-2xl font-bold">Contact Us</h2>
                        <p className="text-[#808080]">Have a question about your order, product details, or returns? Our support team is always here to help you with quick and reliable assistance. Whether you reach out through the form, email, or phone, well make sure you get the answers you need without delay</p>
                        <form className="space-y-4">
                            {/* Name */}
                            {/* Name (letters only) */}

                            <div>
                                <Input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-5 bg-[#EDF1F3]"
                                    required
                                    onInput={(e) => {
                                        e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z ]/g, "");
                                    }}
                                />
                            </div>

                            {/* Mobile Number (10 digits only) */}
                            <div>
                                <Input
                                    type="tel"
                                    placeholder="Your Mobile Number"
                                    className="w-full p-5 bg-[#EDF1F3]"
                                    required
                                    maxLength={10}
                                    inputMode="numeric"
                                    onInput={(e) => {
                                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, "");
                                    }}
                                />
                            </div>


                            {/* Comment */}
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full min-h-[190px] rounded-md border border-gray-300 bg-[#EDF1F3] text-sm focus:outline-none focus:ring-2 focus:ring-red-700 p-5"
                                    rows={4}
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full bg-red-700 hover:bg-red-800 text-white font-medium"
                            >
                                Submit Message
                            </Button>
                        </form>
                    </div>
                    <div>
                        <h2 className="font-semibold text-2xl text-red-700">Need help ?? Feel free to contact us !</h2>
                        <p className="text-[#808080] mt-3">Have questions or concerns? Were here to provide quick, reliable support. Contact us anytime through the form, email, or phone, and well get back to you without delay.</p>
                        <div className="flex flex-col space-y-6 mt-10">
                            {/* Head Office */}
                            <div className="flex  gap-6">
                                <div className="w-14 h-14 flex items-center justify-center rounded-md bg-gray-400">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-base font-semibold text-gray-900">Head Office</h4>
                                    <p className="text-sm text-gray-600 mt-1">Coimbatore, Tamil Nadu</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex  gap-6">
                                <div className="w-14 h-14 flex items-center justify-center rounded-md bg-gray-400">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-base font-semibold text-gray-900">Email</h4>
                                    <p className="text-sm text-gray-600 mt-1">X11supersports@gmail.com</p>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex  gap-6">
                                <div className="w-14 h-14 flex items-center justify-center rounded-md bg-gray-400">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-base font-semibold text-gray-900">Phone Number</h4>
                                    <p className="text-sm text-gray-600 mt-1">98998475757, 98383838009</p>
                                </div>
                            </div>

                        </div>
                        <div className="mt-8">
                            {/* Heading */}
                            <h3 className="text-2xl font-semibold text-red-700 mb-4">
                                Follow us on social media...
                            </h3>

                            {/* Social Media Icons */}
                            <div className="flex items-center gap-5">
                                <div className="p-2 border rounded-md border-gray-400">
                                    <Image
                                        src="/images/about/whatsapp.png"
                                        alt="Facebook"
                                        width={40}
                                        height={40}
                                        className="rounded-md cursor-pointer hover:opacity-80 transition"
                                    />

                                </div>
                                <div className="p-2 border rounded-md border-gray-400">
                                    <Image
                                        src="/images/about/insta.png"
                                        alt="Twitter"
                                        width={40}
                                        height={40}
                                        className="rounded-md cursor-pointer hover:opacity-80 transition"
                                    />
                                </div>
                                <div className="p-2 border rounded-md border-gray-400">
                                    <Image
                                        src="/images/about/fb.png"
                                        alt="Instagram"
                                        width={40}
                                        height={40}
                                        className="rounded-md cursor-pointer hover:opacity-80 transition"
                                    />
                                </div>
                                <div className="p-2 border rounded-md border-gray-400">

                                    <Image
                                        src="/images/about/xl.png"
                                        alt="LinkedIn"
                                        width={40}
                                        height={40}
                                        className="rounded-md cursor-pointer hover:opacity-80 transition"
                                    />
                                </div>


                            </div>
                        </div>

                    </div>
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


        </>
    );
}
