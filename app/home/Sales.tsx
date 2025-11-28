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
    }
];

export default function Sales() {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Unbeatable Sports Steals</h2>

            {/* Grid layout for multiple items per row */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {dealsData.map((deal) => (
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