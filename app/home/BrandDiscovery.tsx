"use client";

import React from "react";
import styles from "./BrandDiscovery.module.css";
import BrandCard from "@/components/BrandCard";

interface Brand {
  name: string;
  tagline: string;
  image: string;  // changed from logo → image
}


const BrandDiscovery: React.FC = () => {

  const brands: Brand[] = [
    { name: "N I K E", tagline: "Just Do It", image: "/images/logo/nike.png" },
    { name: "A D I D A S", tagline: "Impossible is Nothing", image: "/images/logo/adidas.png" },
    { name: "Y O N E X", tagline: "Far Beyond Ordinary", image: "/images/logo/yonex.png" },
    { name: "P U M A", tagline: "Forever Faster", image: "/images/logo/puma.png" },
    { name: "R E E B O K", tagline: "I Am What I Am", image: "/images/logo/reebok.png" },
    { name: "A S I C S", tagline: "Sound Mind, Sound Body", image: "images/logo/asics.png" },
  ];



  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="max-w-full mx-auto p-6 bg-white overflow-hidden">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Discover Your Favorite Brands
        </h1>
      </div>

      {/* Row 1 - Left to Right */}
      <div className="relative mb-3 overflow-hidden">
        <div className={styles.marqueeContainer}>
          <div className={`${styles.marqueeContent} ${styles.animateMarqueeLeft}`}>
            {duplicatedBrands.map((brand, index) => (
              <BrandCard key={`row1-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>

      {/* Row 2 - Right to Left */}
      <div className="relative overflow-hidden">
        <div className={styles.marqueeContainer}>
          <div className={`${styles.marqueeContent} ${styles.animateMarqueeRight}`}>
            {duplicatedBrands.map((brand, index) => (
              <BrandCard key={`row2-${index}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDiscovery;
