"use client"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const features = [
        "Quality First",
        "Passion for Sports",
        "Trusted Service",
        "Affordable for All",
        "Sustainable Future",
        "Fueling Passion",
        "Innovative Gear",
        "Global Reach",
        "Community Driven",
    ]
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
        <div className=" my-2">
                <Breadcrumb className="custom-padding">
                    <BreadcrumbList>
                        {/* Home */}
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />

                        {/* Cart */}
                        <BreadcrumbItem>
                            <BreadcrumbPage>About Us</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            <h2 className="font-bold text-2xl mt-5 custom-padding">About Us</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 custom-padding ">
                <div className="items-center ">
                    <Image
                        src="/images/about/one.png"   // image must be inside /public/images/products/
                        alt="Product"
                        width={600}                        // required when not using `fill`
                        height={500}                       // required when not using `fill`
                        className="lg:w-160 lg:h-125  w-full h-auto rounded-lg py-5"
                        priority                           // optional (for faster load above-the-fold)
                    />

                </div>
                <div className="flex flex-col leading-snug max-w-4xl mt-8">
                    {/* Section heading */}
                    <h2 className="text-red-700 text-2xl font-bold">Who We Are</h2>
                    <h3 className="text-2xl tracking-wider mt-2 text-gray-800">
                        Where sports meets quality and trust
                    </h3>

                    {/* Description */}
                    <div className="mt-3 space-y-2 text-gray-600 text-base">
                        <p>We are more than just a sports store – we are a team of passionate athletes and enthusiasts who believe that the right gear can transform every game. From cricket bats to running shoes, from jerseys to water bottles, we bring you the finest collection of sports essentials designed to fuel your passion and keep you game-ready. </p>
                    </div>

                    {/* Values */}
                    <h2 className="font-bold text-2xl mt-6 text-gray-800">Our Values</h2>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-5">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-red-600 bg-red-100">
                                    <Check className="w-4 h-4 text-red-600" />
                                </div>
                                <span className="text-gray-600 text-lg font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>



                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 custom-padding  gap-5 mt-5">
                <div>
                    <Image
                        src="/images/about/two.png"   // image must be inside /public/images/products/
                        alt="Product"
                        width={700}                        // required when not using `fill`
                        height={400}                       // required when not using `fill`
                        className="lg:w-200 lg:h-70 w-full h-auto"
                        priority                           // optional (for faster load above-the-fold)
                    />
                </div>
                <div>
                    <Image
                        src="/images/about/three.png"   // image must be inside /public/images/products/
                        alt="Product"
                        width={700}                        // required when not using `fill`
                        height={400}                       // required when not using `fill`
                        className="lg:w-200 lg:h-70 w-full h-auto"
                        priority                           // optional (for faster load above-the-fold)
                    />
                </div>
                <div>

                </div>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 custom-padding gap-5 mt-5 mb-5">

                <div className="">
                    <h2 className="font-bold text-2xl ">Our Mission</h2>
                    <p className="mt-2 text-[#808080]">
                        A hot air balloon ride in Dubai offers a tranquil and breath-taking way to experience the Arabian desert at sunrise.
                        Passengers can enjoy panoramic views of the vast dunes and native wildlife, often accompanied by a traditional falconry
                        display, making for a serene and memorable adventure.A hot air balloon ride in Dubai offers a tranquil and breath-taking way to experience the Arabian desert at sunrise.
                        Passengers can enjoy panoramic views of the vast dunes and native wildlife, often accompanied by a traditional falconry
                        display, making for a serene and memorable adventure.
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-2xl">Our Vision</h2>
                    <p className="mt-2 text-[#808080]">A hot air balloon ride in Dubai offers a tranquil and breath-taking way to experience the Arabian desert at sunrise.
                        Passengers can enjoy panoramic views of the vast dunes and native wildlife, often accompanied by a traditional falconry
                        display, making for a serene and memorable adventure.A hot air balloon ride in Dubai offers a tranquil and breath-taking way to experience the Arabian desert at sunrise.
                        Passengers can enjoy panoramic views of the vast dunes and native wildlife, often accompanied by a traditional falconry
                        display, making for a serene and memorable adventure. </p>

                </div>


            </div>
            <section className="bg-red-50 py-12 custom-padding">
                <h3 className="text-red-600 font-semibold">Why Choose Us</h3>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                    Trusted by Players, Loved by Champions.
                </h2>
                <div className="max-w-8xl">
                    {/* Heading */}


                    {/* Features Grid */}
                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 relative">

                        {/* Feature 1 */}
                        <div className="bg-white rounded-lg shadow-sm p-6 relative flex items-start space-x-4 min-h-[200px]">
                            <div className="absolute -top-0 right-[200] transform -translate-x-1/2">
                                <Image
                                    src="/images/about/Ellipse1.png"
                                    alt="Top Icon"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="absolute -top-[-5] right-[-32] transform -translate-x-1/2">
                                <Image
                                    src="/images/about/Ellipse2.png"
                                    alt="Right Top Icon"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="absolute bottom-[14] right-12 transform -translate-x-1/2 translate-y-1/2">
                                <Image
                                    src="/images/about/Ellipse3.png"
                                    alt="Bottom Icon"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className="space-y-3">
                                <Image
                                    src="/images/about/four.png" // path to your image
                                    alt="Percent Icon"
                                    width={32} // width in pixels
                                    height={32} // height in pixels
                                    className="text-red-600" // optional, for styling
                                />
                                <h4 className="font-semibold text-lg text-gray-900 ">Wide Range of Sports Gear</h4>
                                <p className="text-gray-600 text-sm ">
                                    From shoes and bats to jerseys, bags, and bottles, everything you need in one place.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4 min-h-[200px] relative">
                            <div className="absolute -top-0 right-[200] transform -translate-x-1/2">
                                <Image
                                    src="/images/about/Ellipse1.png"
                                    alt="Top Icon"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="absolute -top-[-5] right-[-32] transform -translate-x-1/2">
                                <Image
                                    src="/images/about/Ellipse2.png"
                                    alt="Right Top Icon"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="absolute bottom-[14] right-12 transform -translate-x-1/2 translate-y-1/2">
                                <Image
                                    src="/images/about/Ellipse3.png"
                                    alt="Bottom Icon"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className="space-y-3">
                                <Image
                                    src="/images/about/five.png" // path to your image
                                    alt="Percent Icon"
                                    width={32} // width in pixels
                                    height={32} // height in pixels
                                    className="text-red-600" // optional, for styling
                                />
                                <h4 className="font-semibold text-lg text-gray-900">Quality You Can Trust</h4>
                                <p className="text-gray-600 text-sm">
                                    Premium products from trusted brands designed for performance and durability.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4 min-h-[200px] relative">
                            <div className="absolute -top-0 right-[200] transform -translate-x-1/2">
                                <Image
                                    src="/images/about/Ellipse1.png"
                                    alt="Top Icon"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="absolute -top-[-5] right-[-32] transform -translate-x-1/2">
                                <Image
                                    src="/images/about/Ellipse2.png"
                                    alt="Right Top Icon"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="absolute bottom-[14] right-12 transform -translate-x-1/2 translate-y-1/2">
                                <Image
                                    src="/images/about/Ellipse3.png"
                                    alt="Bottom Icon"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className="space-y-3">
                                <Image
                                    src="/images/about/six.png" // path to your image
                                    alt="Percent Icon"
                                    width={32} // width in pixels
                                    height={32} // height in pixels
                                    className="text-red-600" // optional, for styling
                                />
                                <h4 className="font-semibold text-lg text-gray-900">Affordable & Accessible</h4>
                                <p className="text-gray-600 text-sm">
                                    Competitive pricing so every athlete, beginner or pro, can get the right gear.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white rounded-lg shadow-sm p-6 flex items-start space-x-4 min-h-[200px] relative">
                            <div className="absolute -top-0 right-[200] transform -translate-x-1/2">
                                <Image
                                    src="/images/about/Ellipse1.png"
                                    alt="Top Icon"
                                    width={48}
                                    height={48}
                                />
                            </div>
                            <div className="absolute -top-[-5] right-[-32] transform -translate-x-1/2">
                                <Image
                                    src="/images/about/Ellipse2.png"
                                    alt="Right Top Icon"
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <div className="absolute bottom-[14] right-12 transform -translate-x-1/2 translate-y-1/2">
                                <Image
                                    src="/images/about/Ellipse3.png"
                                    alt="Bottom Icon"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <div className="space-y-3">
                                <Image
                                    src="/images/about/seven.png" // path to your image
                                    alt="Percent Icon"
                                    width={32} // width in pixels
                                    height={32} // height in pixels
                                    className="text-red-600" // optional, for styling
                                />
                                <h4 className="font-semibold text-lg text-gray-900">Fast Delivery & Support</h4>
                                <p className="text-gray-600 text-sm">
                                    Quick shipping and dedicated customer service to keep your game on track.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-2  mt-12  border border-black rounded-lg  bg-[#F3F3F3] m-14">
                <div className="flex justify-center items-center p-6 md:p-10">
                    <div className="space-y-3 min-w-[250px] md:min-w-[300px] text-center lg:text-left">
                        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold">
                            Don’t Just Play, Play Like a Champion.
                        </h2>
                        <p className="max-w-xs md:max-w-sm mt-4">
                            Join our journey and gear up for greatness. Explore our collections and take your game to the next level.
                        </p>
                        <Button className="text-white bg-[#9A0417] w-full mt-5">Shop Now</Button>
                    </div>
                </div>


                <div>
                    <Image
                        src="/images/about/eight.png"
                        alt="Hero Image"
                        width={600}   // set desired width
                        height={400}  // set desired height
                        className="w-full h-auto rounded-md"
                    />


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
    );
}
