"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsLetterBanner() {
    return (
        <div className="text-white py-10"
            style={{
                backgroundImage: `url('/images/background.png')`,
                backgroundSize: "cover", // 👈 use cover to fill container
                backgroundPosition: "center", // 👈 center the image
                backgroundRepeat: "no-repeat", // 👈 no repeat
            }}>
            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 px-6 lg:px-0 max-w-7xl mx-auto">

                {/* Left Text */}
                <div className="w-full lg:w-1/2 text-left">
                    <h2 className="text-xl md:text-2xl font-bold">
                        Sign Up to Our News & Offers
                    </h2>
                    <p className="text-sm md:text-base mt-2 opacity-90 leading-snug tracking-wider">
                        Subscribe now for exclusive sports deals, latest gear updates, and<br />
                        insider news from XL1 Super Sports, delivered straight to you.
                    </p>
                </div>

                {/* Right Input Box */}
                <div className="w-full lg:w-1/2 flex justify-end pt-5">
                    <form className="w-full md:w-auto lg:w-auto">
                        <div className="flex w-full md:w-80 lg:w-96">
                            <Input
                                type="tel"
                                placeholder="Enter your mobile number"
                                className="rounded-r-none bg-white text-black"
                            />
                            <Button
                                type="submit"
                                className="rounded-l-none bg-red-700 hover:bg-red-800"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    );
}
