import Image from "next/image";

interface DealItemProps {
    brand: string;
    name: string;
    currentPrice: string;
    originalPrice: string;
    discount: string;
    image: string;
}

export default function DealItem({
    brand,
    name,
    currentPrice,
    originalPrice,
    discount,
    image
}: DealItemProps) {
    return (
        <div className="rounded-lg p-3">
            {/* Top: Image */}
            <div className="w-full h-70  rounded-lg mb-3">
                <Image
                
                    src={image}
                    alt={name}
                    width={800}       // pick a good baseline width
                    height={400}      // pick a good baseline height
                    className="w-full h-70 rounded mb-3"
                />
            </div>


            {/* Bottom: Product Details */}
            <div className="flex-1">
                {/* Brand */}
                <div className="text-sm font-semibold text-gray-900 mb-1">{brand}</div>

                {/* Product Name */}
                <div className="text-xs text-gray-600 mb-2 line-clamp-2">{name}</div>

                {/* Pricing */}
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg font-bold text-gray-900">₹{currentPrice}</span>
                    <span className="text-sm text-gray-400 line-through">₹{originalPrice}</span>
                    <span className="text-sm font-semibold text-red-600">{discount} Off</span>
                </div>
                <div className="stars text-orange-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                </div>
            </div>

        </div>
    );
}