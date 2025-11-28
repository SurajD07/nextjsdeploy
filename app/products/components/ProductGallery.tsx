"use client";
import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="w-full">

            {/* <div className="w-[90%] max-w-3xl h-[500px] flex items-center justify-center relative">
                <Image
                    src={images[selectedIndex]}
                    alt="Product"
                    fill
                    className="object-cover rounded-lg"
                />
            </div> */}
            <div
                className="
          w-full sm:w-[95%] lg:w-[90%] max-w-3xl 
          h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]
          flex items-center justify-center relative
        "
            >
                <Image
                    src={images[selectedIndex]}
                    alt="Product"
                    fill
                    className="md:object-cover rounded-lg"
                    priority
                />
            </div>



            {/* Thumbnails */}
            <div className="flex gap-3 mt-8 overflow-x-auto">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`w-24 h-24 border rounded-lg flex items-center justify-center ${selectedIndex === index ? "border-red-500" : "border-gray-300"
                            }`}
                    >
                        <Image
                            src={img}
                            alt={`Thumbnail ${index}`}
                            width={80}
                            height={80}
                            className="rounded-lg"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
