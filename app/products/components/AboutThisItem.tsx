"use client";

import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function AboutThisItem() {
    const [showReviews, setShowReviews] = useState(false);

    return (
        <div className="space-y-6">
            {/* About the product */}
            <div className="space-y-4">
                {/* <h2 className="text-lg font-semibold">About This Product</h2> */}
                <h3 className="text-md font-semibold">Nike Air Zoom Pegasus 40</h3>
                <p className="text-gray-600">
                    The Nike Air Zoom Pegasus 40 is more than just a running shoe— it’s a
                    trusted training partner built for everyday athletes and professionals
                    alike...
                </p>

                <h3 className="text-md font-semibold text-gray-700">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Responsive Nike Air Zoom cushioning for soft landings</li>
                    <li>Breathable engineered mesh upper keeps feet cool and fresh</li>
                    <li>Durable rubber outsole with waffle-inspired traction</li>
                    <li>Padded collar and heel support for stability during long runs</li>
                    <li>Designed for neutral runners seeking everyday performance</li>
                </ul>

                <h3 className="text-md font-semibold text-gray-700">
                    What Makes It Special?
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>
                        Dual Air Zoom Units: One at the forefoot and one at the heel, giving
                        you energy return with every step.
                    </li>
                    <li>
                        React Foam Midsole: Soft and lightweight cushioning that keeps you
                        moving longer without fatigue.
                    </li>
                </ul>
            </div>

            {/* Ratings & summary */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 border-t pt-6">
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <div className="flex items-center">
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <span key={i} className="text-yellow-500 text-xl">
                                    ★
                                </span>
                            ))}
                    </div>
                    <p className="text-lg font-semibold">4.8 out of 5</p>
                </div>

                <div className="flex-1 space-y-1">
                    {[
                        { stars: 5, percent: 80 },
                        { stars: 4, percent: 10 },
                        { stars: 3, percent: 5 },
                        { stars: 2, percent: 3 },
                        { stars: 1, percent: 2 },
                    ].map((item) => (
                        <div key={item.stars} className="flex items-center gap-2">
                            <span className="w-6 text-sm">{item.stars}</span>
                            <div className="flex-1 bg-gray-200 rounded h-2">
                                <div
                                    className="bg-yellow-500 h-2 rounded"
                                    style={{ width: `${item.percent}%` }}
                                />
                            </div>
                            <span className="text-sm text-gray-600">{item.percent}%</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Reviews Section */}
            {showReviews && (
                <div className="space-y-6 border-t pt-6">
                    <div className="flex">
                        <button className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 text-red-600 transition">
                            <AlertCircle className="w-4 h-4" />
                            Report an issue with this product
                        </button>
                    </div>
                    <h2 className="text-lg font-semibold">Customer Reviews</h2>

                    {[1, 2].map((review) => (
                        <div key={review} className="space-y-2 border-b pb-4">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/images/logo/profile.png"
                                    alt="user"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <div className="flex items-center gap-1">
                                        <p className="font-semibold">Robin SD</p>
                                        <p className="text-gray-400">12/08/2025</p>
                                    </div>

                                    <p className="text-sm text-gray-400">
                                        Size:24 | Colour:Black | <span className="text-green-500">Verified Purchase</span>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <span key={i} className="text-yellow-500 text-lg">
                                            ★
                                        </span>
                                    ))}
                            </div>

                            <p className="text-gray-700">
                                Absolutely love these shoes! The cushioning feels super
                                responsive and I can run long distances without discomfort.
                                Breathable and lightweight, perfect for summer runs.
                            </p>

                            {/* Review images */}
                            <div className="flex gap-2">
                                {[
                                    "/images/trophy/shoe1.png",
                                    "/images/trophy/shoe2.png",
                                    "/images/trophy/shoe3.png",
                                ].map((img, i) => (
                                    <Image
                                        key={i}
                                        src={img}
                                        alt={`Product image ${i + 1}`}
                                        width={80}       // matches w-20
                                        height={80}      // matches h-20
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />

                                ))}
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <button className="hover:underline">Reply</button>
                                <span>👍 42</span>
                                <span>👎 2</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Toggle Button */}
            <div className="text-center">
                <button
                    onClick={() => setShowReviews(!showReviews)}
                    className="px-4 py-2 text-sm font-medium text-white bg-[#9A0417] rounded-lg hover:bg-red-600 transition"
                >
                    {showReviews ? "Show Less ↑" : "Show More Product Details ↓"}
                </button>
            </div>
        </div>
    );
}
