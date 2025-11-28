import DealItem from "@/components/DealItem";
import Link from "next/link";

const dealsData = [
    {
        id: 1,
        brand: "SG",
        name: "CRICKET MAX Power Bat – Eng...",
        currentPrice: "4,499",
        originalPrice: "5,999",
        discount: "25%",
        image: "/images/bats.png" // Add image path
    },
    {
        id: 2,
        brand: "NIKE",
        name: "PRO Training Jersey – Dri-FIT",
        currentPrice: "1,299",
        originalPrice: "1,499",
        discount: "24%",
        image: "/images/nike.png"
    },
    {
        id: 3,
        brand: "KOOKABURRA",
        name: "Elite Cricket Kit Bag – Large Capa...",
        currentPrice: "2,899",
        originalPrice: "3,499",
        discount: "22%",
        image: "/images/KOOKABURRA.png"
    },
    {
        id: 4,
        brand: "ADIDAS",
        name: "Sprintstar Running Shoes – Unisex",
        currentPrice: "3,499",
        originalPrice: "4,499",
        discount: "22%",
        image: "/images/adida.png"
    },
    {
        id: 5,
        brand: "SS TON",
        name: "Blaster Pro Batting Gloves",
        currentPrice: "799",
        originalPrice: "1,699",
        discount: "27%",
        image: "/images/gloves.png"
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

export default function Offer() {
    return (
        <div className=" p-6">
            <div className="flex items-center justify-between mb-6 px-5">
                <h2 className="text-xl font-bold text-gray-900">
                    Game-Changing Deals for You
                </h2>
                <button className="flex items-center text-sm font-medium text-red-800 hover:underline">
                    View All
                    <span className="ml-1">→</span>
                </button>
            </div>
            {/* Grid layout for multiple items per row */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {dealsData.slice(0, 10).map((deal) => (
                    <Link key={deal.id} href={`/products/${deal.id}`}>
                        <DealItem
                            brand={deal.brand}
                            name={deal.name}
                            currentPrice={deal.currentPrice}
                            originalPrice={deal.originalPrice}
                            discount={deal.discount}
                            image={deal.image}
                        />
                    </Link>
                ))}
            </div>

        </div>
    );
}