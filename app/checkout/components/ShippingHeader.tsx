"use client"

import { useState } from "react"
import { ShippingAddress } from "../types"

interface ShippingDetailsProps {
    address: ShippingAddress
    onAddressChange: (address: ShippingAddress) => void
    onNext: () => void
}

export default function ShippingDetails({
    onAddressChange,
    onNext
}: ShippingDetailsProps) {
    const [addresses, setAddresses] = useState<ShippingAddress[]>([
        {
            id: "1",
            name: "Home",
            address:
                "Site No 24, HighWayCity, Sarkarsamakulam, Kovilpalayam, Coimbatore 641107",
            isSelected: true,
        },
        {
            id: "2",
            name: "Office",
            address:
                "4th Floor, 16th Main N. S. Palya, Near By To, Mico Layout, BTM 2nd Stage, Bengaluru, Karnataka 560076",
            isSelected: false,
        },
    ])

    const [isEditing, setIsEditing] = useState<string | null>(null)
    const [formValues, setFormValues] = useState<ShippingAddress | null>(null)
    const [isAdding, setIsAdding] = useState(false)

    // select address
    const handleSelect = (id: string) => {
        const updated = addresses.map((addr) => ({
            ...addr,
            isSelected: addr.id === id,
        }))
        setAddresses(updated)
        onAddressChange(updated.find((a) => a.isSelected)!)
    }

    // edit existing
    const handleEdit = (addr: ShippingAddress) => {
        setIsEditing(addr.id)
        setFormValues({ ...addr })
        setIsAdding(false)
    }

    // save edited
    const handleSave = () => {
        if (!formValues) return
        if (isAdding) {
            // Save as new address
            const newAddr = { ...formValues, id: String(addresses.length + 1) }
            const updated = addresses.map((a) => ({ ...a, isSelected: false })).concat(newAddr)
            setAddresses(updated)
            onAddressChange(newAddr)
            setIsAdding(false)
        } else {
            // Update existing
            const updated = addresses.map((addr) =>
                addr.id === formValues.id ? { ...formValues } : addr
            )
            setAddresses(updated)
            onAddressChange(formValues)
        }
        setIsEditing(null)
        setFormValues(null)
    }

    // cancel edit/add
    const handleCancel = () => {
        setIsEditing(null)
        setFormValues(null)
        setIsAdding(false)
    }

    // prepare new blank address (not pushed yet)
    const handleAdd = () => {
        setFormValues({
            id: "",
            name: "",
            address: "",
            isSelected: true,
        })
        setIsEditing("new")
        setIsAdding(true)
    }

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">
                Select Your Shipping Address
            </h2>

            <div className="space-y-4">
                {addresses.map((addr) => (
                    <div key={addr.id} className="border rounded-lg p-4">
                        <div className="flex items-start gap-3">
                            <input
                                type="radio"
                                name="address"
                                checked={addr.isSelected}
                                onChange={() => handleSelect(addr.id)}
                                className="mt-2 text-[#9A0417] focus:ring-[#9A0417]"
                            />

                            <div className="w-full">
                                {isEditing === addr.id && formValues ? (
                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            value={formValues.name}
                                            onChange={(e) =>
                                                setFormValues({ ...formValues, name: e.target.value })
                                            }
                                            placeholder="Label (e.g. Home, Office)"
                                            className="w-full border rounded px-3 py-2"
                                        />
                                        <textarea
                                            value={formValues.address}
                                            onChange={(e) =>
                                                setFormValues({
                                                    ...formValues,
                                                    address: e.target.value,
                                                })
                                            }
                                            placeholder="Enter full address"
                                            className="w-full border rounded px-3 py-2"
                                            rows={3}
                                        />
                                        <div className="flex gap-3">
                                            <button
                                                onClick={handleSave}
                                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={handleCancel}
                                                className="text-gray-600 hover:text-gray-800 px-4 py-1 rounded"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <p className="font-medium text-gray-800">{addr.name}</p>
                                            <p className="text-gray-600 text-sm">{addr.address}</p>
                                        </div>
                                        <button
                                            onClick={() => handleEdit(addr)}
                                            className="text-[#9A0417] hover:text-[#9A0417] text-sm font-medium underline underline-offset-2 cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Temporary new form (only shows while adding) */}
                {isAdding && formValues && (
                    <div className="border rounded-lg p-4">
                        <div className="space-y-2">
                            <input
                                type="text"
                                value={formValues.name}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, name: e.target.value })
                                }
                                placeholder="Label (e.g. Home, Office)"
                                className="w-full border rounded px-3 py-2"
                            />
                            <textarea
                                value={formValues.address}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, address: e.target.value })
                                }
                                placeholder="Enter full address"
                                className="w-full border rounded px-3 py-2"
                                rows={3}
                            />
                            <div className="flex gap-3">
                                <button
                                    onClick={handleSave}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleCancel}
                                    className="text-gray-600 hover:text-gray-800 px-4 py-1 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {!isAdding && (
                <button
                    onClick={handleAdd}
                    className="mt-4 text-[#9A0417] hover:text-[#9A0417] text-sm font-medium block underline underline-offset-4"
                >
                    + Add New Delivery Address
                </button>
            )}
            <div className="flex justify-end">
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" }) // 👈 scroll to top
                        onNext() // 👈 then trigger next step
                    }}
                    className="mt-6 bg-[#9A0417] hover:bg-[#7e0312] text-white px-8 py-2 rounded font-medium"
                >
                    Next
                </button>
            </div>

        </div>
    )
}
