"use client"
import { authProductApi } from "@/apiConfig/authApi";
import DealItem from "@/components/DealItem";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

// const dealsData = [
//   {
//     id: 1,
//     brand: "SG",
//     name: "CRICKET MAX Power Bat – Eng...",
//     currentPrice: "4,499",
//     originalPrice: "5,999",
//     discount: "25%",
//     image: "/images/bats.png" // Add image path
//   },
//   {
//     id: 2,
//     brand: "NIKE",
//     name: "PRO Training Jersey – Dri-FIT",
//     currentPrice: "1,299",
//     originalPrice: "1,499",
//     discount: "24%",
//     image: "/images/nike.png"
//   },
//   {
//     id: 3,
//     brand: "KOOKABURRA",
//     name: "Elite Cricket Kit Bag – Large Capa...",
//     currentPrice: "2,899",
//     originalPrice: "3,499",
//     discount: "22%",
//     image: "/images/KOOKABURRA.png"
//   },
//   {
//     id: 4,
//     brand: "ADIDAS",
//     name: "Sprintstar Running Shoes – Unisex",
//     currentPrice: "3,499",
//     originalPrice: "4,499",
//     discount: "22%",
//     image: "/images/adida.png"
//   },
//   {
//     id: 5,
//     brand: "SS TON",
//     name: "Blaster Pro Batting Gloves",
//     currentPrice: "799",
//     originalPrice: "1,699",
//     discount: "27%",
//     image: "/images/gloves.png"
//   }
// ];

export default function Dealsection() {

  const queryGet = useQuery({
    queryKey: ["authProductApiGet"],
    queryFn: () => authProductApi("")
  })
  console.log("queryGet", queryGet?.data?.data?.result)
  const authProductData = queryGet?.data?.data?.result || []

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Todays Best Deals for You</h2>

      {/* Grid layout for multiple items per row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* {dealsData.map((deal) => (
          <DealItem
            key={deal.id}
            brand={deal.brand}
            name={deal.name}
            currentPrice={deal.currentPrice}
            originalPrice={deal.originalPrice}
            discount={deal.discount}
            image={deal.image}
          />
        ))} */}
         {authProductData?.map((deal: { _id: string; name: string; productCategory: { name: string }; amount: string; mimimumAmount: string; image: string; }, index: number) => (
          <Link key={index} href={`/products/${deal._id}`}>
            <DealItem
              brand={deal?.name}
              name={deal?.productCategory?.name}
              currentPrice={deal?.amount}
              originalPrice={deal.mimimumAmount}
              discount={deal?.mimimumAmount}
              image={deal?.image}
            />
          </Link>
        ))}

      </div>
    </div>
  );
}