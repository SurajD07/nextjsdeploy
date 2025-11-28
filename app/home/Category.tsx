
import CategoryItem from "@/components/CategoryItem";
import Link from "next/link";

const categories = [
    { id: 1, src: "/images/shorts.png", title: "Active Wear" },
    { id: 2, src: "/images/shoes.png", title: "Shoes" },
    { id: 3, src: "/images/accessories.png", title: "Sports Accessories" },
    { id: 4, src: "/images/tshirt.png", title: "Polo T-shirts" },
    { id: 5, src: "/images/bag.png", title: "Bags" },
    { id: 6, src: "/images/cricket.png", title: "Cricket Kit" },
    { id: 7, src: "/images/shorts.png", title: "Shorts" },
    { id: 8, src: "/images/polotshirts.png", title: "T-Shirts" },
];

export default function Category() {
    return (
        <div className="px-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Explore Popular Categories</h2>
                <Link href="/category">
                    <span className="text-[#9A0417] font-medium hover:underline cursor-pointer">
                        View All →
                    </span>
                </Link>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {categories.map((category) => (
                    <Link key={category.id} href={`/category/${category.id}`}>
                        <CategoryItem
                            src={category.src}
                            title={category.title}
                        />
                    </Link>
                ))}
            </div>


        </div>
    );
}