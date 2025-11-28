"use client";

import Image from "next/image";
// import Image from "next/image";
import React from "react";

// export interface Brand {
//   name: string;
//   tagline: string;
//   logo: string;
// }
export interface Brand {
  name: string;
  tagline: string;
  image: string; // changed from logo → image
}


interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  const imageSrc =
    brand.image && brand.image.startsWith("/")
      ? brand.image
      : brand.image && brand.image.startsWith("http")
        ? brand.image
        : "/images/logo/yonex.png"
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-4 h-20 min-w-[200px] flex items-center cursor-pointer hover:bg-gray-200 transition-colors duration-200 border border-gray-200 mx-2">
      <div className="flex items-center space-x-3 w-full">
        {/* Logo */}
        {/* <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center text-gray-600 font-bold text-sm flex-shrink-0">
          {brand.logo}
        </div> */}
        <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
          <Image
            src={imageSrc}
            alt={brand.name}
            width={200}
            height={200}
            className="max-w-full max-h-full object-contain"
          />
        </div>


        {/* Brand info */}
        <div className="flex-1 min-w-0">
          <div className="font-bold text-gray-800 text-sm tracking-wide uppercase">
            {brand.name}
          </div>
          <div className="text-xs text-gray-500 mt-0.5 leading-tight">
            {brand.tagline}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
