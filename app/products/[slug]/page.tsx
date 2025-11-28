"use client"
import DealItem from "@/components/DealItem";
import AboutThisItem from "../components/AboutThisItem";
import FAQ from "../components/FAQ";
import ProductDetails from "../components/ProductDetails";
import ProductGallery from "../components/ProductGallery";
import ProductPurchaseBox from "../components/ProductPurchaseBox";
import ProductSpecification from "../components/ProductSpecification";
import Reviews from "../components/Reviews";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ProductPage() {
  const [isVisible, setIsVisible] = useState(false);
  const tabs = [
    { label: "Product Specification", content: <ProductSpecification /> },
    { label: "About This Item", content: <AboutThisItem /> },
    { label: "Reviews", content: <Reviews /> },
    { label: "FAQ", content: <FAQ /> },
  ];


  // Show button when scrolled down
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

  const dealsData = [
    {
      id: 1,
      brand: "SG",
      name: "CRICKET MAX Power Bat – Eng...",
      currentPrice: "4,499",
      originalPrice: "5,999",
      discount: "25%",
      image: "/images/attire1.png" // Add image path
    },
    {
      id: 2,
      brand: "NIKE",
      name: "PRO Training Jersey – Dri-FIT",
      currentPrice: "1,299",
      originalPrice: "1,499",
      discount: "24%",
      image: "/images/attire2.png"
    },
    {
      id: 3,
      brand: "KOOKABURRA",
      name: "Elite Cricket Kit Bag – Large Capa...",
      currentPrice: "2,899",
      originalPrice: "3,499",
      discount: "22%",
      image: "/images/attire3.png"
    },
    {
      id: 4,
      brand: "ADIDAS",
      name: "Sprintstar Running Shoes – Unisex",
      currentPrice: "3,499",
      originalPrice: "4,499",
      discount: "22%",
      image: "/images/attire4.png"
    },
    {
      id: 5,
      brand: "SS TON",
      name: "Blaster Pro Batting Gloves",
      currentPrice: "799",
      originalPrice: "1,699",
      discount: "27%",
      image: "/images/attire5.png"
    },
    {
      id: 6,
      brand: "ADIDAS",
      name: "Sprintstar Running Shoes – Unisex",
      currentPrice: "3,499",
      originalPrice: "4,499",
      discount: "22%",
      image: "/images/attire6.png"
    },
    {
      id: 7,
      brand: "SS TON",
      name: "Blaster Pro Batting Gloves",
      currentPrice: "799",
      originalPrice: "1,699",
      discount: "27%",
      image: "/images/attire7.png"
    },
    {
      id: 8,
      brand: "KOOKABURRA",
      name: "Elite Cricket Kit Bag – Large Capa...",
      currentPrice: "2,899",
      originalPrice: "3,499",
      discount: "22%",
      image: "/images/attire8.png"
    },
    {
      id: 9,
      brand: "ADIDAS",
      name: "Sprintstar Running Shoes – Unisex",
      currentPrice: "3,499",
      originalPrice: "4,499",
      discount: "22%",
      image: "/images/attire9.png"
    },
    {
      id: 10,
      brand: "SG",
      name: "CRICKET MAX Power Bat – Eng...",
      currentPrice: "4,499",
      originalPrice: "5,999",
      discount: "25%",
      image: "/images/attire10.png" // Add image path
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  };


  return (
    <div className="w-full h-full">
      <Breadcrumb className="custom-padding mt-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="" className="text-red-600">Nike Air Zoom Pegasus 40</BreadcrumbLink>
          </BreadcrumbItem>
         
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid grid-cols-1 md:grid-cols-2 custom-padding">
        {/* Left Side - Gallery */}
        <div className="flex items-center justify-center mt-5">
          <ProductGallery
            images={[
              "/images/trophy/shoe1.png",
              "/images/trophy/shoe2.png",
              "/images/trophy/shoe3.png",
              "/images/trophy/shoe4.png",
              "/images/trophy/shoe1.png",
            ]}
          />
        </div>

        {/* Right Side - Product Info */}
        <div className="flex flex-col justify-center ">
          <ProductDetails />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-10 custom-padding">
        {/* Tabs Section */}
        <div className="w-full lg:w-[70%]">
          <Tabs tabs={tabs} />
        </div>

        {/* Purchase Box */}
        <div className="hidden lg:flex w-full lg:w-[30%] flex-col justify-start px-2">
          <ProductPurchaseBox />
        </div>

      </div>
      <div className="custom-padding ">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Brand in this Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {dealsData.slice(0, 10).map((deal) => (
            <DealItem
              key={deal.id}
              brand={deal.brand}
              name={deal.name}
              currentPrice={deal.currentPrice}
              originalPrice={deal.originalPrice}
              discount={deal.discount}
              image={deal.image}
            />
          ))}
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
