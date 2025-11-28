"use client";

import React from "react";
import { Download } from "lucide-react"; // using lucide-react for the icon

type PriceDetailsProps = {
    listingPrice: number;
    sellingPrice: number;
    extraDiscount: number;
    specialPrice: number;
};

export default function PriceDetails({
    listingPrice,
    sellingPrice,
    extraDiscount,
    specialPrice,
}: PriceDetailsProps) {
    const total = sellingPrice - extraDiscount + specialPrice;

    const formatPrice = (price: number) => `₹${price.toLocaleString()}`;



    return (
        <div className="border rounded-lg bg-white p-4 shadow-sm w-full md:w-full lg:w-[410px]">
            <h3 className="text-lg font-semibold mb-4">Price Details</h3>

            <div className="flex flex-col gap-2 text-sm">
                <div className="flex justify-between">
                    <span>Listing Price</span>
                    <span>{formatPrice(listingPrice)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Selling Price</span>
                    <span>{formatPrice(sellingPrice)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Extra Discount</span>
                    <span className="text-green-600">- {formatPrice(extraDiscount)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Special Price</span>
                    <span className="text-red-700">{formatPrice(specialPrice)}</span>
                </div>

                <hr className="my-2" />

                <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                </div>

                {/* Paid via UPI and Download Invoice */}
                <div className="flex flex-col justify-between items-center gap-5 mt-4">
                    <div className="flex flex-row items-center justify-between w-full mt-2 border border-gray-400 p-2 rounded-lg">
                        <p className="text-sm font-medium">Paid by</p>
                        <p className="text-sm text-green-600 font-semibold">UPI</p>
                    </div>


                </div>
                <div className="border border-gray-400 p-2 bg-white rounded-lg flex justify-center">
                    <button className="flex items-center gap-1 text-black px-3 py-1 rounded">
                        <Download size={16} />
                        Download Invoice
                    </button>
                </div>

            </div>
        </div>
    );
}
