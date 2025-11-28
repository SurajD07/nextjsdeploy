"use client";

import { Eye, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import OrderTrackingModal from "./OrderTrackingModal";
import Image from "next/image";
import ReturnModal from "./ReturnModal";
// import { Button } from "@/components/ui/button";


type Step = {
    label: string; date: string; isCompleted: boolean; // Change from string to boolean
};

// const steps: Step[] = [
//     { label: "Order Confirmed", date: "06th Oct, 2024" ,isCompleted: "true"},
//     { label: "Shipping", date: "09th Oct, 2024" },
//     { label: "Out for delivery", date: "09th Oct, 2024" },
//     { label: "Delivery", date: "15th Oct, 2024" },
// ];
const steps: Step[] = [
    { label: "Order Confirmed", date: "06th Oct, 2024", isCompleted: true },
    { label: "Shipping", date: "09th Oct, 2024", isCompleted: true },
    { label: "Out for delivery", date: "09th Oct, 2024", isCompleted: true },
    { label: "Delivery", date: "15th Oct, 2024", isCompleted: true },
];

type OrderDetailsProps = {
    brand: string;
    productName: string;
    price: number;
    quantity: number;
    orderPlaced: string;
    status: string;
    image: string;
};
type CancellationReason =
    | "change-of-mind"
    | "shipping-delay"
    | "found-cheaper"
    | "product-not-needed"
    | "other";

export default function OrderDetailsCard({
    brand,
    productName,
    price,
    quantity,
    orderPlaced,
    status,
    image,
}: OrderDetailsProps) {
    const [orderStatus, setOrderStatus] = useState(status);
    const [showCancelConfirm, setShowCancelConfirm] = useState(false);
    const [showCancelForm, setShowCancelForm] = useState(false);
    const [cancellationReason, setCancellationReason] = useState<CancellationReason | "">("");
    const [comments, setComments] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReturnModalOpen, setIsReturnModalOpen] = useState(false);


    const handleCancelClick = () => {
        setShowCancelConfirm(true);
    };

    const handleCancelOrder = () => {
        // Close first modal, open second modal
        setShowCancelConfirm(false);
        setShowCancelForm(true);
    };

    const handleCancelSubmit = () => {
        // Handle the cancellation submission here
        console.log("Cancellation reason:", cancellationReason);
        console.log("Comments:", comments);

        // Update order status to cancelled
        setOrderStatus("Cancelled");

        // Reset form and close modal
        setCancellationReason("");
        setComments("");
        setShowCancelForm(false);
    };


    return (
        <div className="border rounded-lg bg-white p-4 shadow-sm flex flex-col">
            {/* Top: Product Info */}
            <div className="flex justify-between">
                <div className="flex gap-4">
                    <Image
                        src={image}
                        alt={productName}
                        width={80}
                        height={80}
                        className=" object-cover rounded-lg"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black">
                                <Image
                                    src={`/images/logo/nike.png`}
                                    alt={brand}
                                    width={80}
                                    height={80}
                                    className=" object-contain"
                                />
                            </div>

                            <p className="text-sm text-gray-500">{brand}</p>
                        </div>

                        <h3 className="font-semibold">{productName}</h3>
                        <p className="text-sm text-gray-500">Quantity: {quantity}</p>
                        <p className="text-green-600 font-bold">₹{price}</p>

                    </div>
                </div>

                {/* Status pill */}

                <div className="flex flex-col items-end">
                    <div className="flex items-center justify-end w-full pl-2 py-2 rounded-md">
                        <span className="text-gray-600 px-2 py-0.5 rounded-md text-sm font-medium">
                            #12341324
                        </span>
                    </div>

                    <span
                        className={`px-3 py-1 text-xs rounded-full font-medium
              ${orderStatus === "In Progress"
                                ? "bg-orange-100 text-orange-600"
                                : orderStatus === "Cancelled"
                                    ? "bg-red-100 text-red-700"
                                    : "bg-green-100 text-green-600"
                            }
            `}
                    >
                        {orderStatus}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">
                        Order placed on : {orderPlaced}
                    </p>
                </div>
            </div>

            {/* Timeline */}

            <div className="flex justify-between items-start relative mt-6 px-2">
                {/* Line behind circles */}
                <div className="absolute top-[10px] left-0 right-0 h-[2px] bg-gray-300 z-0" />

                {steps.map((step, index) => {
                    // Use the isCompleted property from the step object
                    const isCompleted = step.isCompleted;

                    return (
                        <div
                            key={step.label}
                            className="flex flex-col items-center flex-1 text-center relative z-10"
                        >
                            {/* Circle */}
                            <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold
                        ${isCompleted ? "bg-green-500 text-white" : "bg-gray-300 text-gray-500"}
                    `}
                            >
                                {isCompleted ? "✓" : index + 1}
                            </div>

                            {/* Label */}
                            <p className="mt-2 text-xs font-medium text-gray-700">{step.label}</p>
                            <p className="text-[11px] text-gray-400">{step.date}</p>
                        </div>
                    );
                })}
            </div>
            {/* Cancel Order Button */}
            {/* Actions: Invoice + Cancel */}
            <div className="mt-4 flex flex-wrap justify-end gap-3">

                <Link href="/trophy/4" passHref>
                    <button
                        className="flex items-center cursor-pointer border border-red-700 text-red-700 px-3 py-2 rounded-md text-sm font-medium hover:bg-orange-50 transition"
                    >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                    </button>
                </Link>


                {/* Cancel button (only if In Progress) */}
                {orderStatus === "In Progress" && (
                    <button
                        onClick={handleCancelClick}
                        className="flex cursor-pointer items-center border border-red-700 text-red-700 px-3 py-1 rounded-md text-sm font-medium hover:bg-orange-50 transition"
                    >
                        <X className="w-4 h-4 mr-1 " /> {/* ❌ from lucide-react */}
                        Cancel Order
                    </button>
                )}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="px-4 border cursor-pointer border-red-700 text-red-700 rounded"
                >
                    See Order Updates
                </button>
                <button className=" border cursor-pointer border-red-700 px-4 rounded text-red-700" onClick={() => setIsReturnModalOpen(true)}>Return and Refund</button>

            </div>
            <ReturnModal
                open={isReturnModalOpen}
                onClose={() => setIsReturnModalOpen(false)}
                productName="Nike Air Zoom"
            />


            <OrderTrackingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />


            {showCancelConfirm && (
                <div className="fixed inset-0 backdrop-blur-[1px] flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full overflow-hidden">
                        {/* Heading at the Top */}

                        <div className="p-6 pb-4 flex justify-between items-center border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-800">Confirm Cancellation</h2>
                            <button
                                onClick={() => setShowCancelConfirm(false)}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row border-t p-5">
                            {/* Image Section */}
                            <div className="w-full md:w-2/5 p-6 pt-0">
                                <Image
                                    src="/images/Cancel.png"
                                    alt="Cancel Warning"
                                    width={500}   // pick an approximate intrinsic width
                                    height={500}
                                    className="w-full h-auto object-contain"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-3/5 p-6 pt-0 mt-10">
                                {/* Warning Message */}
                                <p className="text-gray-600 mb-1 ">Hey, Wait!!</p>
                                <p className="text-gray-600 mb-6">
                                    If you cancel now, you may not be able to avail this deal again. Do you still want to cancel?
                                </p>

                                {/* Action Buttons */}
                                <div className="flex space-x-3">
                                    <button
                                        onClick={handleCancelOrder}
                                        className="flex-1 py-2 bg-red-100 text-red-700 font-medium rounded-md hover:bg-red-200 transition-colors"
                                    >
                                        Cancel Order
                                    </button>
                                    <button
                                        onClick={() => setShowCancelConfirm(false)}
                                        className="flex-1 py-2 bg-red-700 text-white font-medium rounded-md hover:bg-red-700 transition-colors"
                                    >
                                        Dont Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {showCancelForm && (
                <div className="fixed inset-0  backdrop-blur-[1px] flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full overflow-hidden">
                        <div className="p-5">
                            {/* <h2 className="text-xl font-bold text-gray-800 mb-4">Confirm Cancellation</h2> */}
                            <div className="flex justify-between items-center border-b mb-2 border-gray-200">
                                <h2 className="text-xl font-bold text-gray-800 mt-2 mb-3">Confirm Cancellation</h2>
                                <button
                                    // onClick={() => setShowCancelConfirm(false)}
                                    onClick={() => {
                                        setShowCancelForm(false);


                                    }}

                                    className="text-gray-400 hover:text-gray-600 transition-colors"
                                    aria-label="Close"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1 mt-5">
                                    Reason for Cancellation<span className="text-red-700">*</span>
                                </label>
                                <select
                                    id="reason"
                                    value={cancellationReason}
                                    onChange={(e) => setCancellationReason(e.target.value as CancellationReason)}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    required
                                >
                                    <option value="">Select Reason</option>
                                    <option value="change-of-mind">Changed my mind</option>
                                    <option value="shipping-delay">Shipping is taking too long</option>
                                    <option value="found-cheaper">Found a better price elsewhere</option>
                                    <option value="product-not-needed">No longer need the product</option>
                                    <option value="other">Other reason</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                                    Comments<span className="text-red-700">*</span>
                                </label>
                                <textarea
                                    id="comments"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value)}
                                    rows={3}
                                    placeholder="Enter your comments"
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="flex space-x-3">
                                <button
                                    onClick={() => {
                                        setShowCancelForm(false);
                                        setCancellationReason("");
                                        setComments("");
                                    }}
                                    className="flex-1 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 transition-colors"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={handleCancelSubmit}
                                    // disabled={!cancellationReason || !comments}
                                    className="flex-1 py-2 bg-red-700 text-white font-medium rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}
