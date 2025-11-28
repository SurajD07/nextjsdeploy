import { useState } from 'react'
import { PaymentInfo, ShippingAddress } from '../types'

interface PaymentMethodProps {
  paymentInfo: PaymentInfo
  onPaymentChange: (payment: PaymentInfo) => void
  onNext: () => void
  onPrevious: () => void
}

export default function PaymentMethod({
  paymentInfo,
  onPaymentChange,
  onNext,
}: PaymentMethodProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('credit')
  const [isEditingAddress, setIsEditingAddress] = useState(false)
  //   const [tempAddress, setTempAddress] = useState<ShippingAddress>({
  //     name: 'Robin SD',
  //     company: 'Aim Window Info Tech',
  //     address: '16th Main Road, Btm 2nd Stage',
  //     city: 'Bengaluru, KARNATAKA 560076'
  //   })
  const [tempAddress, setTempAddress] = useState<ShippingAddress>({
    id: 'temp-1',
    name: 'Robin SD',
    company: 'Aim Window Info Tech',
    address: '16th Main Road, Btm 2nd Stage',
    city: 'Bengaluru, KARNATAKA 560076',
    isSelected: false
  })


  const handleMethodChange = (method: string) => {
    setSelectedMethod(method)
    onPaymentChange({ ...paymentInfo, method: method as PaymentInfo['method'] })
  }

  const handleAddressChange = (field: keyof ShippingAddress, value: string) => {
    setTempAddress((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveAddress = () => {
    // Save address (in real app you would call onPaymentChange with shipping info)
    setIsEditingAddress(false)
  }

  const handleCancelEdit = () => {
    setIsEditingAddress(false)
  }

  return (
    <div className="bg-white">
      {/* Delivery Address Section */}
      <div className="mb-4 border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4 border-b p-2">Delivery Address</h2>
        <div className="bg-white rounded-lg p-2">
          {!isEditingAddress ? (
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800">{tempAddress.name}</p>
                <p className="text-gray-600">{tempAddress.company}</p>
                <p className="text-gray-600">{tempAddress.address}</p>
                <p className="text-gray-600">{tempAddress.city}</p>
              </div>
              <button
                onClick={() => setIsEditingAddress(true)}
                className="text-[#9A0417] hover:text-[#9A0417] text-sm font-medium underline underline-offset-4"
              >
                Change
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  value={tempAddress.name}
                  onChange={(e) => handleAddressChange('name', e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#9A0417]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  value={tempAddress.company}
                  onChange={(e) =>
                    handleAddressChange('company', e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#9A0417]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  value={tempAddress.address}
                  onChange={(e) =>
                    handleAddressChange('address', e.target.value)
                  }
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#9A0417]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  value={tempAddress.city}
                  onChange={(e) => handleAddressChange('city', e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#9A0417]"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveAddress}
                  className="bg-[#9A0417] hover:bg-[#9A0417] text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Payment Method Section */}
      <div className="mb-8 border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Select Your Payment Method</h2>

        <div className="space-y-4">
          {/* Credit/Debit Card */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center mb-3">
              <input
                type="radio"
                name="payment"
                value="credit"
                checked={selectedMethod === 'credit'}
                onChange={(e) => handleMethodChange(e.target.value)}
                className="text-[#9A0417] focus:ring-[#9A0417]"
              />
              <label className="ml-3 font-medium  text-[#9A0417]">
                Credit or debit card
              </label>
            </div>

            {selectedMethod === 'credit' && (
              <div className="ml-6">
                <p className="text-sm text-gray-600 mb-4">
                  Add And Secure Cards As Per RBI Guidelines
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="****************"
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#9A0417]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nick Name
                    </label>
                    <input
                      type="text"
                      placeholder="Robin SD"
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#9A0417]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YYYY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#9A0417]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Net Banking */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="netbanking"
                checked={selectedMethod === 'netbanking'}
                onChange={(e) => handleMethodChange(e.target.value)}
                className="text-[#9A0417] focus:ring-[#9A0417]"
              />
              <label className="ml-3 font-medium text-gray-800">
                Net Banking
              </label>
            </div>
          </div>

          {/* UPI Apps */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={selectedMethod === 'upi'}
                onChange={(e) => handleMethodChange(e.target.value)}
                className="text-[#9A0417] focus:ring-[#9A0417]"
              />
              <label className="ml-3 font-medium text-gray-800">
                Other UPI Apps
              </label>
            </div>
          </div>

          {/* Cash on Delivery */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={selectedMethod === 'cod'}
                onChange={(e) => handleMethodChange(e.target.value)}
                className="text-[#9A0417] focus:ring-[#9A0417]"
              />
              <label className="ml-3 font-medium text-gray-800">
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* <button
        onClick={onNext}
        className="bg-[#9A0417] hover:bg-[#9A0417] text-white px-8 py-2 rounded font-medium"
      >
        Use This Payment Method
      </button> */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" }) // 👈 scroll up
          onNext() // 👈 then move to next step
        }}
        className="bg-[#9A0417] hover:bg-[#7e0312] text-white px-8 py-2 rounded font-medium"
      >
        Use This Payment Method
      </button>

    </div>
  )
}
