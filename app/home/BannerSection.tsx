"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function BannerSection() {
    const slides = [
        { left: "/images/img1.png", right: "/images/img2.png" },
        { left: "/images/img1.png", right: "/images/img2.png" },
        { left: "/images/img1.png", right: "/images/img2.png" },
    ];

    const responsive = {
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1, // 1 slide at a time
        },
        desktop: {
            breakpoint: { max: 3000, min: 769 },
            items: 1, // each slide contains 2 images
        },
    };

    return (
        <main className="mx-auto px-4 sm:px-10 p-5">
            <Carousel
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                arrows={true}
                infinite={false}
                containerClass="w-full"
                itemClass="px-0"
            >
                {slides.map((slide, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row w-full gap-2">
                        {/* Left image - 70% */}
                        <div className="relative w-full sm:w-[70%] h-64 sm:h-82">
                            <Image
                                src={slide.left}
                                alt={`Left Image ${idx * 2 + 1}`}
                                fill
                                className=""
                            />
                        </div>

                        {/* Right image - 30% */}
                        <div className="relative w-full sm:w-[30%] h-64 sm:h-82">
                            <Image
                                src={slide.right}
                                alt={`Right Image ${idx * 2 + 2}`}
                                fill
                                className=""
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </main>
    );
}
