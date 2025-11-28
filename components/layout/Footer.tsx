// export default function Footer() {
//     return (
//         <div></div>
//     );
// }
"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white text-gray-700 border-t border-gray-200">
            <div className="max-w-8xl  px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">

                {/* Left Section - Logo & Info */}
                <div className="lg:col-span-2">
                    <h2 className="text-xl font-extrabold text-red-700">
                        XL<span className="text-black">1</span>{" "}
                        <span className="text-red-700">SUPERSPORTS</span>
                    </h2>
                    <p className="text-xs font-semibold text-gray-600 mt-1">
                        A PROMISE OF TRUTH
                    </p>
                    <p className="mt-4 text-sm leading-relaxed">
                        Your one-stop destination for premium sports gear, apparel, and
                        accessories. We bring quality, authenticity, and performance to
                        every athlete.
                    </p>

                    {/* Phone Numbers */}
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>044 48591898</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>9027901695</span>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="font-semibold mb-3">Company</h3>
                    <ul className="space-y-2 text-sm">
                        {/* <li>About Us</li> */}
                        <li>
                            <Link
                                href="/about"
                                className="cursor-pointer hover:text-red-700 hover:underline"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>Reviews</li>
                        <li>
                            <Link
                                href="/Return&RefundPolicy"
                                className="cursor-pointer hover:text-red-700 hover:underline"
                            >
                                Privacy Policy
                            </Link>
                        </li>
                        <li>Cookie Policy</li>
                        <li>
                            <Link
                                href="/terms&conditions"
                                className="cursor-pointer hover:text-red-700 hover:underline"
                            >
                                Terms&Conditions
                            </Link>
                        </li>
                        <li>Our Clients</li>
                        <li>All Products</li>
                        <li>Brands</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Customer Service</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link
                                href="/contact"
                                className="cursor-pointer hover:text-red-700 hover:underline"
                            >
                                Contact Us
                            </Link>
                        </li>
                        <li>Track Order</li>
                        <li>Returns & Exchanges</li>
                        <li>Shipping Information</li>
                        <li>
                            <Link
                                href="/terms&conditions"
                                className="cursor-pointer hover:text-red-700 hover:underline"
                            >
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/faq"
                                className="cursor-pointer hover:text-red-700 hover:underline"
                            >
                                FAQs
                            </Link>
                        </li>

                        <li>Help Center</li>
                        <li>Payment Options</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Size Guide</li>
                        <li>Product Care</li>
                        {/* <li>Blog & Articles</li> */}
                        <li>
                            <Link
                                href="/blog"
                                className="cursor-pointer hover:text-red-700 hover:underline"
                            >
                                Blog&Articles
                            </Link>
                        </li>
                        <li>Training Tips</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-3">My Account / Sign Up</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Login</li>
                        <li>Create New Account</li>
                        <li>My Account</li>
                        <li>
                            <Link
                                href="/orders"
                                className="cursor-pointer hover:text-red-700 hover:underline"
                            >
                                My Orders
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            {/* <div className="border-t border-gray-200 py-2 px-6 flex flex-col md:flex-row items-center justify-between max-w-8xl ">
                <p className="text-xs text-gray-600">
                    © 2025 Xcell1. All Rights Reserved
                </p>
                <div className="flex gap-3 mt-3 md:mt-0">
                    <Image src="/images/visa.png" alt="Visa" width={40} height={25} />
                    <Image src="/images/mastercard.png" alt="Mastercard" width={40} height={25} />
                    <Image src="/images/paypal.png" alt="PayPal" width={40} height={25} />
                    <Image src="/images/american.png" alt="American Express" width={40} height={25} />
                </div>
            </div> */}
            <div className="border-t border-gray-200 py-2 px-6 flex flex-col md:flex-row items-center justify-between max-w-8xl overflow-hidden">

                {/* Bouncing Text */}
                <div className="w-full md:flex-1 overflow-hidden">
                    <p className="text-xs text-gray-600 whitespace-nowrap">
                        © 2025 Xcell1. All Rights Reserved
                    </p>
                </div>

                {/* Fixed Icons */}
                <div className="flex gap-3 mt-3 md:mt-0">
                    <Image src="/images/visa.png" alt="Visa" width={40} height={25} />
                    <Image src="/images/mastercard.png" alt="Mastercard" width={40} height={25} />
                    <Image src="/images/paypal.png" alt="PayPal" width={40} height={25} />
                    <Image src="/images/american.png" alt="American Express" width={40} height={25} />
                </div>
            </div>

        </footer>
    );
}
