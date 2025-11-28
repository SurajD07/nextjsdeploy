"use client";

import { useState } from "react";

type Address = {
    name: string;
    fullAddress: string;
    phone: string;
    alternatePhone: string;
};

export default function DeliveryAddressCard({ initialAddress }: { initialAddress: Address }) {
    const [address, setAddress] = useState(initialAddress);
    const [isEditing, setIsEditing] = useState(false);
    const [isEditingPhone, setIsEditingPhone] = useState(false);
    const [tempData, setTempData] = useState(address);

    const handleSave = () => {
        setAddress(tempData);
        setIsEditing(false);
        setIsEditingPhone(false);
    };

    return (
        <div className="border rounded-lg bg-white p-4 shadow-sm w-full md:w-full lg:w-[410px]">
            <h3 className="text-lg font-semibold mb-4">Delivery Address</h3>

            {isEditing ? (
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        value={tempData.name}
                        onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                        className="border rounded p-2"
                    />
                    <textarea
                        value={tempData.fullAddress}
                        onChange={(e) => setTempData({ ...tempData, fullAddress: e.target.value })}
                        className="border rounded p-2"
                    />
                    <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded">
                        Save
                    </button>
                </div>
            ) : isEditingPhone ? (
                <div className="flex flex-col gap-2">
                    <input
                        type="text"
                        value={tempData.phone}
                        onChange={(e) => setTempData({ ...tempData, phone: e.target.value })}
                        className="border rounded p-2"
                    />
                    <input
                        type="text"
                        value={tempData.alternatePhone}
                        onChange={(e) => setTempData({ ...tempData, alternatePhone: e.target.value })}
                        className="border rounded p-2"
                    />
                    <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded">
                        Save Phone Numbers
                    </button>
                </div>
            ) : (
                <div>

                    <div className="flex items-center justify-between">
                        <p className="font-semibold ">{address.name}</p>
                        <button
                            onClick={() => {
                                setTempData(address);
                                setIsEditing(true);
                            }}
                            className="text-red-700 text-sm font-medium hover:underline border border-red-700 p-2"
                        >
                            Change
                        </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{address.fullAddress}</p>


                    <p className="text-sm mt-2">Phone Number: {address.phone}</p>
                    <p className="text-sm mt-2">Alternate Phone Number: {address.alternatePhone}</p>

                    <div className="flex flex-col mt-3 gap-2">

                        <button
                            onClick={() => {
                                setTempData(address);
                                setIsEditingPhone(true);
                            }}
                            className="text-red-700 text-sm font-medium hover:underline"
                        >
                            Change Phone Number
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
