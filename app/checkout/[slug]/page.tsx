'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ShippingDetails from '../components/ShippingHeader'
import PaymentMethod from '../components/PaymentMethod'
import OrderSummary from '../components/OrderSummary'
import OrderConfirmation from '../components/OrderConfirmation'
import WizardHeader from '../components/WizardHeader'

import { OrderItem, PaymentInfo, ShippingAddress } from '../types'
import RightSidebar from '../components/RightSidebar'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CheckoutSlugPage() {
    const params = useParams();
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;


    const [currentStep, setCurrentStep] = useState(1)
    const [shippingAddress, setShippingAddress] = useState<ShippingAddress>({
        id: "1",
        name: '',
        address: 'Site No 24, HighWayCity, Sarkarsamakulam, Kovilpalayam, Coimbatore 641107',
        city: 'Coimbatore',
        state: 'Tamil Nadu',
        pincode: '641107',
        isSelected: true
    })
    const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({ method: 'credit' })
    const [isVisible, setIsVisible] = useState(false);
    const [orderItems] = useState<OrderItem[]>([
        {
            id: slug || '1', // ✅ use slug here as id
            name: 'Nike Air Zoom Pegasus 40',
            color: 'Grey',
            size: '24',
            quantity: 1,
            price: 28000,
            originalPrice: 35000,
            discount: 20,
            image: '/nike-shoes.jpg'
        }
    ])

    const subtotal = orderItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    const discount = 100
    const shipping = 50
    const total = subtotal - discount + shipping

    const handleNextStep = () => currentStep < 4 && setCurrentStep(currentStep + 1)
    const handlePreviousStep = () => currentStep > 1 && setCurrentStep(currentStep - 1)
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

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <ShippingDetails
                        address={shippingAddress}
                        onAddressChange={setShippingAddress}
                        onNext={handleNextStep}
                    />
                )
            case 2:
                return (
                    <PaymentMethod
                        paymentInfo={paymentInfo}
                        onPaymentChange={setPaymentInfo}
                        onNext={handleNextStep}
                        onPrevious={handlePreviousStep}
                    />
                )
            case 3:
                return (
                    <OrderSummary
                        items={orderItems}
                        shippingAddress={shippingAddress}
                        paymentInfo={paymentInfo}
                        setPaymentInfo={setPaymentInfo}       // ✅ add this
                        onNext={handleNextStep}
                        onPrevious={handlePreviousStep}       // ✅ add this
                    />)
            case 4:

                return <OrderConfirmation orderId={`#${slug || '0000'}`} />

            default:
                return null
        }
    }

    return (
        <div className="min-h-screen bg-white-50">


            <header className="bg-white border-b">
                <div className="max-w-8xl custom-padding py-2 flex items-center justify-between relative">

                    {/* Left: Logo */}
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            alt="XL Supersports Logo"
                            width={120}
                            height={120}
                            className="rounded hidden sm:block cursor-pointer"
                        />
                    </Link>

                    {/* Center: Absolutely centered text */}
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <span className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold">
                            Gear Up & Checkout
                        </span>
                    </div>

                    {/* Right: Cart */}
                    <div className="flex items-center">
                        <button className="relative p-2 rounded-full hover:bg-gray-100">
                            <ShoppingCart className="w-5 sm:w-6 md:w-6 lg:w-6 text-red-600" />
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full">
                                2
                            </span>
                        </button>
                    </div>

                </div>
            </header>

            <div className="max-w-8xl  custom-padding px-4 py-8">

                {/* Wizard Header full width */}
                <div className="mb-8">
                    <WizardHeader currentStep={currentStep} />
                </div>

                {/* 2-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left side: Wizard content */}

                    <div className={currentStep === 4 ? "lg:col-span-3" : "lg:col-span-2"}>
                        {renderStepContent()}
                    </div>


                    {/* Right side: Sidebar */}
                    <div className="lg:col-span-1">
                        {currentStep !== 4 && ( // or use orderPlaced state
                            <RightSidebar
                                items={orderItems}
                                subtotal={subtotal}
                                discount={discount}
                                shipping={shipping}
                                total={total}
                                currentStep={currentStep}
                                showItems={currentStep === 3} // optional, keep as is
                            />
                        )}
                    </div>

                </div>
            </div>
            {isVisible && (
                <div
                    onClick={scrollToTop}
                    className="h-20 mt-2 flex items-center justify-center bg-cover bg-center cursor-pointer"
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
