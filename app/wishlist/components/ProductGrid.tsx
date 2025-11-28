// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// interface Product {
//     id: number;
//     name: string;
//     image: string;
//     price: number;
//     originalPrice: number;
//     discount: number;
//     rating: number;
//     brand: string;
//     logo: string;
// }

// const products: Product[] = [
//     {
//         id: 1,
//         logo: '/images/logo/nike.png',
//         brand: 'nike',
//         name: 'Nike Air Zoom Pegasus 40',
//         image: '/images/cycle.png',
//         price: 6999,
//         originalPrice: 8999,
//         discount: 20,
//         rating: 5,
//     },
//     {
//         id: 2,
//         name: 'Nike Air Zoom Pegasus 40',
//         image: '/images/blackbag.png',
//         logo: '/images/logo/nike.png',
//         brand: 'nike',
//         price: 6999,
//         originalPrice: 8999,
//         discount: 20,
//         rating: 5,
//     },
//     {
//         id: 3,
//         name: 'Nike Air Zoom Pegasus 40',
//         image: '/images/cycle.png',
//         logo: '/images/logo/nike.png',
//         brand: 'nike',
//         price: 6999,
//         originalPrice: 8999,
//         discount: 20,
//         rating: 5,
//     },
    // {
    //     id: 4,
    //     logo: '/images/logo/nike.png',
    //     brand: 'nike',
    //     name: 'Nike Air Zoom Pegasus 40',
    //     image: '/images/cycle.png',
    //     price: 6999,
    //     originalPrice: 8999,
    //     discount: 20,
    //     rating: 5,
    // },
    // {
    //     id: 5,
    //     name: 'Nike Air Zoom Pegasus 40',
    //     image: '/images/blackbag.png',
    //     logo: '/images/logo/nike.png',
    //     brand: 'nike',
    //     price: 6999,
    //     originalPrice: 8999,
    //     discount: 20,
    //     rating: 5,
    // },
    // {
    //     id: 6,
    //     name: 'Nike Air Zoom Pegasus 40',
    //     image: '/images/cycle.png',
    //     logo: '/images/logo/nike.png',
    //     brand: 'nike',
    //     price: 6999,
    //     originalPrice: 8999,
    //     discount: 20,
    //     rating: 5,
    // },

// ];

// const ProductGrid: React.FC = () => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 custom-padding">
//             {products.map((product) => (
//                 <div
//                     key={product.id}
//                     className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
//                 >
//                     <Image
//                         src={product.image}
//                         alt={product.name}
//                         width={600}     // pick a reasonable intrinsic width
//                         height={288}    // matches h-72 (288px)
//                         className="w-full h-72 mb-4 rounded object-cover"
//                     />

//                     {/* Brand + Rating */}
//                     <div className="flex items-center justify-between mb-2">
//                         {/* <div className="flex items-center">
//                             <img
//                                 src={product.logo}
//                                 alt={product.brand}
//                                 className="w-5 h-5 rounded-full "
//                             />
//                             <span className="text-sm font-medium">{product.brand}</span>
//                         </div> */}
//                         <div className="flex items-center space-x-2">
//                             {/* Logo circle with black background */}
//                             <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
//                                 <Image
//                                     src={product.logo}
//                                     alt={product.brand}
//                                     width={16}    // w-4 = 16px
//                                     height={16}   // h-4 = 16px
//                                     className="w-4 h-4 rounded-full object-cover"
//                                 />
//                             </div>

//                             {/* Brand name */}
//                             <span className="text-sm font-medium">{product.brand}</span>
//                         </div>

//                         <div className="flex items-center">
//                             {Array.from({ length: 5 }, (_, i) => (
//                                 <svg
//                                     key={i}
//                                     className={`w-4 h-4 ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
//                                         }`}
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                 >
//                                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.048 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
//                                 </svg>
//                             ))}
//                         </div>
//                     </div>

//                     <h2 className="text-md font-semibold">{product.name}</h2>

//                     <div className="text-green-600 text-lg font-bold">
//                         ₹{product.price.toLocaleString()}
//                     </div>
//                     <div className="text-sm text-gray-500 line-through">
//                         ₹{product.originalPrice.toLocaleString()}
//                     </div>
//                     <div className="text-sm text-red-500 mb-2">
//                         {product.discount}% Off
//                     </div>

//                     {/* <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-700 w-full">
//                         Add to Cart
//                     </button> */}
//                     <Link href="/cart" passHref>
//                         <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 w-full cursor-pointer">
//                             Add to Cart
//                         </button>
//                     </Link>
//                 </div>
//             ))}
//         </div>

//     );
// };

// export default ProductGrid;
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Trash2} from 'lucide-react'; // ❌ delete icon

interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    brand: string;
    logo: string;
}

const initialProducts: Product[] = [
    {
        id: 1,
        logo: '/images/logo/nike.png',
        brand: 'nike',
        name: 'Nike Air Zoom Pegasus 40',
        image: '/images/cycle.png',
        price: 6999,
        originalPrice: 8999,
        discount: 20,
        rating: 5,
    },
    {
        id: 2,
        name: 'Nike Air Zoom Pegasus 40',
        image: '/images/blackbag.png',
        logo: '/images/logo/nike.png',
        brand: 'nike',
        price: 6999,
        originalPrice: 8999,
        discount: 20,
        rating: 5,
    },
    {
        id: 3,
        name: 'Nike Air Zoom Pegasus 40',
        image: '/images/cycle.png',
        logo: '/images/logo/nike.png',
        brand: 'nike',
        price: 6999,
        originalPrice: 8999,
        discount: 20,
        rating: 5,
    },
     {
        id: 4,
        logo: '/images/logo/nike.png',
        brand: 'nike',
        name: 'Nike Air Zoom Pegasus 40',
        image: '/images/cycle.png',
        price: 6999,
        originalPrice: 8999,
        discount: 20,
        rating: 5,
    },
    {
        id: 5,
        name: 'Nike Air Zoom Pegasus 40',
        image: '/images/blackbag.png',
        logo: '/images/logo/nike.png',
        brand: 'nike',
        price: 6999,
        originalPrice: 8999,
        discount: 20,
        rating: 5,
    },
    {
        id: 6,
        name: 'Nike Air Zoom Pegasus 40',
        image: '/images/cycle.png',
        logo: '/images/logo/nike.png',
        brand: 'nike',
        price: 6999,
        originalPrice: 8999,
        discount: 20,
        rating: 5,
    },
];

const ProductGrid: React.FC = () => {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    // 🗑 handle delete
    const handleDelete = (id: number) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 custom-padding">
            {products.map((product) => (
                <div
                    key={product.id}
                    className="border rounded-lg p-4 shadow-md hover:shadow-lg transition"
                >
                    {/* Image wrapper with delete button */}
                    <div className="relative">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={600}
                            height={288}
                            className="w-full h-72 mb-4 rounded object-cover"
                        />

                        {/* Delete button */}
                        <button
                            onClick={() => handleDelete(product.id)}
                            className="absolute top-2 right-2 bg-white text-red-700 p-2 rounded-full hover:bg-red-700"
                        >
                              <Trash2 className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Brand + Rating */}
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                                <Image
                                    src={product.logo}
                                    alt={product.brand}
                                    width={16}
                                    height={16}
                                    className="w-4 h-4 rounded-full object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium">{product.brand}</span>
                        </div>

                        <div className="flex items-center">
                            {Array.from({ length: 5 }, (_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 h-4 ${
                                        i < Math.round(product.rating)
                                            ? 'text-yellow-400'
                                            : 'text-gray-300'
                                    }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.176 0l-3.38 2.454c-.784.57-1.838-.197-1.539-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.048 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                                </svg>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-md font-semibold">{product.name}</h2>

                    <div className="text-green-600 text-lg font-bold">
                        ₹{product.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                        ₹{product.originalPrice.toLocaleString()}
                    </div>
                    <div className="text-sm text-red-500 mb-2">
                        {product.discount}% Off
                    </div>

                    <Link href="/cart" passHref>
                        <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 w-full cursor-pointer">
                            Add to Cart
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;
