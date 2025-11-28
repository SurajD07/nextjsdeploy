// // "use client";

// // import { useState } from "react";
// // import {
// //     Dialog,
// //     DialogContent,
// //     DialogHeader,
// //     DialogTitle,
// //     DialogFooter,
// // } from "@/components/ui/dialog";
// // import { Button } from "@/components/ui/button";
// // import {
// //     Select,
// //     SelectContent,
// //     SelectItem,
// //     SelectTrigger,
// //     SelectValue,
// // } from "@/components/ui/select";

// // interface ReturnModalProps {
// //     open: boolean;
// //     onClose: () => void;
// //     productName: string;
// // }

// // export default function ReturnModal({
// //     open,
// //     onClose,
// //     productName,
// // }: ReturnModalProps) {
// //     const [step, setStep] = useState<"form" | "confirmation">("form");
// //     const [action, setAction] = useState("refund");
// //     const [reason, setReason] = useState("");

// //     const handleConfirm = () => {
// //         // ✅ Instead of redirect, move to confirmation step
// //         setStep("confirmation");
// //     };

// //     const handleClose = () => {
// //         setStep("form"); // reset state for next open
// //         onClose();
// //     };

// //     return (
// //         <Dialog open={open} onOpenChange={handleClose}>
// //             <DialogContent className="max-w-md">
// //                 <DialogHeader>
// //                     <DialogTitle>Return Product</DialogTitle>
// //                 </DialogHeader>

// //                 {step === "form" ? (
// //                     <div className="space-y-4">
// //                         <p className="text-gray-700">
// //                             You are returning:{" "}
// //                             <span className="font-semibold">{productName}</span>
// //                         </p>

// //                         {/* Action type */}
// //                         <div className="space-y-2">
// //                             <label className="block text-sm font-medium text-gray-600">
// //                                 Action
// //                             </label>
// //                             <Select value={action} onValueChange={setAction}>
// //                                 <SelectTrigger className="w-full">
// //                                     <SelectValue placeholder="Choose action" />
// //                                 </SelectTrigger>
// //                                 <SelectContent>
// //                                     <SelectItem value="refund">Refund</SelectItem>
// //                                     <SelectItem value="exchange">Exchange</SelectItem>
// //                                 </SelectContent>
// //                             </Select>
// //                         </div>

// //                         {/* Reason */}
// //                         <div className="space-y-2">
// //                             <label className="block text-sm font-medium text-gray-600">
// //                                 Reason for return
// //                             </label>
// //                             <textarea
// //                                 className="w-full border rounded-md p-2 text-sm"
// //                                 placeholder="Enter your reason..."
// //                                 value={reason}
// //                                 onChange={(e) => setReason(e.target.value)}
// //                             />
// //                         </div>

// //                         <DialogFooter>
// //                             <Button variant="outline" onClick={handleClose}>
// //                                 Cancel
// //                             </Button>
// //                             <Button
// //                                 className="bg-red-700 hover:bg-red-700"
// //                                 onClick={handleConfirm}
// //                             >
// //                                 Confirm Return
// //                             </Button>
// //                         </DialogFooter>
// //                     </div>
// //                 ) : (
// //                     <div className="space-y-6">
// //                         <div className="p-4 rounded-md bg-green-100 text-green-700">
// //                             ✅ Your {action} request has been submitted.
// //                         </div>

// //                         {action === "refund" ? (
// //                             <div className="p-4 rounded-md bg-blue-100 text-blue-700">
// //                                 💰 Refund will be processed in <b>5–7 working days</b>.
// //                             </div>
// //                         ) : (
// //                             <div className="p-4 rounded-md bg-purple-100 text-purple-700">
// //                                 🔄 Exchange request created.
// //                                 Tracking info will be shared once shipped.
// //                             </div>
// //                         )}

// //                         <div className="p-4 rounded-md bg-yellow-100 text-yellow-800">
// //                             🚚 Courier will pick up your product by <b>Sep 10, 2025</b>.
// //                         </div>

// //                         <DialogFooter>
// //                             <Button onClick={handleClose} className="w-full bg-red-700">
// //                                 Close
// //                             </Button>
// //                         </DialogFooter>
// //                     </div>
// //                 )}
// //             </DialogContent>
// //         </Dialog>
// //     );
// // }
// "use client";

// import { useState } from "react";
// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
//     DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";

// interface ReturnModalProps {
//     open: boolean;
//     onClose: () => void;
//     productName: string;
// }

// export default function ReturnModal({
//     open,
//     onClose,
//     productName,
// }: ReturnModalProps) {
//     const [step, setStep] = useState<"form" | "confirmation">("form");
//     const [action, setAction] = useState("refund");
//     const [reason, setReason] = useState("");
//     const [image, setImage] = useState<File | null>(null);
//     const [preview, setPreview] = useState<string | null>(null);

//     const handleConfirm = () => {
//         setStep("confirmation");
//     };

//     const handleClose = () => {
//         setStep("form");
//         setReason("");
//         setAction("refund");
//         setImage(null);
//         setPreview(null);
//         onClose();
//     };

//     const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const file = e.target.files?.[0];
//         if (file) {
//             setImage(file);
//             setPreview(URL.createObjectURL(file));
//         }
//     };

//     return (
//         <Dialog open={open} onOpenChange={handleClose}>
//             <DialogContent className="max-w-md">
//                 <DialogHeader>
//                     <DialogTitle>Return Product</DialogTitle>
//                 </DialogHeader>


//                 {step === "form" ? (
//                     <div className="space-y-4">
//                         <p className="text-gray-700">
//                             You are returning:{" "}
//                             <span className="font-semibold">{productName}</span>
//                         </p>

//                         {/* Action type */}
//                         <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-600">
//                                 Reason for return
//                             </label>
//                             <textarea
//                                 className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                                 placeholder="Enter your reason..."
//                                 value={reason}
//                                 onChange={(e) => setReason(e.target.value)}
//                             />
//                         </div>
//                         <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-600">
//                                 Action
//                             </label>
//                             <Select value={action} onValueChange={setAction}>
//                                 <SelectTrigger className="w-full">
//                                     <SelectValue placeholder="Choose action" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="refund">Refund</SelectItem>
//                                     <SelectItem value="exchange">Exchange</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>

//                         {/* Reason */}


//                         {/* Image Upload - styled like textarea */}
//                         {/* <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-600">
//                                 Upload Image (optional)
//                             </label>
//                             <label
//                                 htmlFor="file-upload"
//                                 className="w-full border rounded-md p-2 text-sm flex items-center justify-center cursor-pointer text-gray-500 hover:border-red-500 hover:text-red-700 focus-within:ring-2 focus-within:ring-red-500"
//                             >
//                                 {preview ? (
//                                     <img
//                                         src={preview}
//                                         alt="Preview"
//                                         className="w-24 h-24 object-cover rounded-md"
//                                     />
//                                 ) : (
//                                     "Click to upload image"
//                                 )}
//                                 <input
//                                     id="file-upload"
//                                     type="file"
//                                     accept="image/*"
//                                     onChange={handleImageChange}
//                                     className="hidden"
//                                 />
//                             </label>
//                         </div> */}
//                         {/* Image Upload */}
//                         <div className="space-y-2">
//                             <label className="block text-sm font-medium text-gray-600">
//                                 Upload Image (optional)
//                             </label>
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 className="w-full text-sm text-gray-600 border rounded-md p-2 file:mr-4 file:py-2 file:px-4 
//                file:rounded-md file:border-0 file:text-sm file:font-medium 
//                file:bg-gray-400 file:text-white hover:file:bg-gray-400"
//                             />
//                         </div>



//                         <DialogFooter>
//                             <Button variant="outline" onClick={handleClose}>
//                                 Cancel
//                             </Button>
//                             <Button
//                                 className="bg-red-700 hover:bg-red-700"
//                                 onClick={handleConfirm}
//                             >
//                                 Confirm Return
//                             </Button>
//                         </DialogFooter>
//                     </div>
//                 ) : (
//                     <div className="space-y-6">
//                         {/* Success header */}
//                         <div className="p-4 rounded-md bg-green-100 text-green-700">
//                             {action === "refund"
//                                 ? "✅ Refund request submitted."
//                                 : "✅ Exchange request submitted."}
//                         </div>

//                         {/* Action-specific details */}
//                         {action === "refund" ? (
//                             <div className="p-4 rounded-md bg-blue-100 text-blue-700">
//                                 💰 Amount will be processed back to your account within <b>5–7 working days</b>.
//                             </div>
//                         ) : (
//                             <div className="p-4 rounded-md bg-purple-100 text-purple-700">
//                                 🔄 Replacement will be shipped <b>after we receive your returned product</b>.
//                             </div>
//                         )}

//                         {/* Courier info */}
//                         {/* <div className="p-4 rounded-md bg-yellow-100 text-yellow-800">
//                             🚚 Courier will pick up your product by <b>Sep 10, 2025</b>.
//                         </div> */}

//                         <DialogFooter>
//                             <Button onClick={handleClose} className="w-full bg-red-700">
//                                 Close
//                             </Button>
//                         </DialogFooter>
//                     </div>

//                 )}
//             </DialogContent>
//         </Dialog>
//     );
// }
"use client";

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

interface ReturnModalProps {
    open: boolean;
    onClose: () => void;
    productName: string;
}

export default function ReturnModal({
    open,
    onClose,
    productName,
}: ReturnModalProps) {
    const [step, setStep] = useState<"form" | "confirmation">("form");
    const [action, setAction] = useState("refund");
    const [reason, setReason] = useState("");
    const [accountNo, setAccountNo] = useState("");
    const [upiId, setUpiId] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    console.log(image)
    const handleConfirm = () => {
        setStep("confirmation");
    };

    const handleClose = () => {
        setStep("form");
        setReason("");
        setAction("refund");
        setAccountNo("");
        setUpiId("");
        setImage(null);
        setPreview(null);
        onClose();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Return Product</DialogTitle>
                </DialogHeader>

                {step === "form" ? (
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            You are returning:{" "}
                            <span className="font-semibold">{productName}</span>
                        </p>

                        {/* Reason */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-600">
                                Reason for return
                            </label>
                            <textarea
                                className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter your reason..."
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                            />
                        </div>

                        {/* Action */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-600">
                                Action
                            </label>
                            <Select value={action} onValueChange={setAction}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Choose action" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="refund">Refund</SelectItem>
                                    <SelectItem value="exchange">Exchange</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Refund-specific fields */}
                        {action === "refund" && (
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-600">
                                        Account Number
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Enter your account number"
                                        value={accountNo}
                                        onChange={(e) => setAccountNo(e.target.value)}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-600">
                                        UPI ID
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Enter your UPI ID"
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Image Upload */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-600">
                                Upload Image (optional)
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="w-full text-sm text-gray-600 border rounded-md p-2 file:mr-4 file:py-2 file:px-4 
                   file:rounded-md file:border-0 file:text-sm file:font-medium 
                   file:bg-gray-400 file:text-white hover:file:bg-gray-400"
                            />
                          {preview && (
                            <Image
                                src={preview}
                                alt="Preview"
                                width={96}  // equal to w-24 (24 * 4px)
                                height={96} // equal to h-24
                                className="object-cover rounded-md mt-2"
                            />
                            )}

                        </div>

                        <DialogFooter>
                            <Button variant="outline" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button
                                className="bg-red-700 hover:bg-red-700"
                                onClick={handleConfirm}
                            >
                                Confirm Return
                            </Button>
                        </DialogFooter>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Success header */}
                        <div className="p-4 rounded-md bg-green-100 text-green-700">
                            {action === "refund"
                                ? "✅ Refund request submitted."
                                : "✅ Exchange request submitted."}
                        </div>

                        {/* Action-specific details */}
                        {action === "refund" ? (
                            <div className="p-4 rounded-md bg-blue-100 text-blue-700">
                                💰 Amount will be processed back to your account
                                ({accountNo || "N/A"}) / UPI ({upiId || "N/A"}) within{" "}
                                <b>5–7 working days</b>.
                            </div>
                        ) : (
                            <div className="p-4 rounded-md bg-purple-100 text-purple-700">
                                🔄 Replacement will be shipped{" "}
                                <b>after we receive your returned product</b>.
                            </div>
                        )}

                        <DialogFooter>
                            <Button onClick={handleClose} className="w-full bg-red-700">
                                Close
                            </Button>
                        </DialogFooter>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
