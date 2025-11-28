
// "use client";
// import Image from "next/image";
// import Lucide from "../ui/lucide";
// import { Input } from "../ui/input";
// import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
// import { useState } from "react";
// import {

//     Bird,
//     Shirt,
//     Footprints,
//     Circle,
//     Target,

//     Volleyball,
//     Dice5
// } from "lucide-react";


// export default function Navbar() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const categories = [
//         { name: "Cricket", icon: Bird, color: "bg-green-100", textColor: "text-green-800" },
//         { name: "Badminton", icon: Bird, color: "bg-blue-100", textColor: "text-blue-800" },
//         { name: "Apparels", icon: Shirt, color: "bg-purple-100", textColor: "text-purple-800" },
//         { name: "Shoes", icon: Footprints, color: "bg-red-100", textColor: "text-red-800" },
//         { name: "Football", icon: Circle, color: "bg-amber-100", textColor: "text-amber-800" },
//         { name: "Basket Ball", icon: Target, color: "bg-orange-100", textColor: "text-orange-800" },
//         { name: "Tennis", icon: Target, color: "bg-emerald-100", textColor: "text-emerald-800" },
//         { name: "Volleyball", icon: Volleyball, color: "bg-cyan-100", textColor: "text-cyan-800" },
//         { name: "Indoor Games", icon: Dice5, color: "bg-pink-100", textColor: "text-pink-800" }
//     ];

//     return (
//         <div className="relative">
//             <div className="flex justify-between bg-red-700 text-white px-10 p-2 text-sm">
//                 <div className="flex items-center gap-2">
//                     <Lucide icon="Phone" className="w-4 h-4 text-white" />
//                     <h4>044 48591898, 9027901695</h4>
//                 </div>
//                 <div className="flex items-center gap-2">
//                     <Lucide icon="MapPin" className="w-4 h-4 text-white" />
//                     <h4>India</h4>
//                 </div>
//             </div>
//             <nav className="bg-white py-3 shadow-md px-10 sticky top-0 z-50">
//                 <div className="flex items-center justify-between w-full">
//                     <div className="flex items-center">
//                         <div className="flex-shrink-0">
//                             <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
//                         </div>
//                         {/* <div className="relative hidden md:hidden sm:flex w-80 md:w-96 lg:w-[500px] mx-3">
//                             <input
//                                 type="text"
//                                 placeholder="Search for..."
//                                 className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                         </div> */}
//                         <div className="relative hidden lg:flex w-[500px] mx-3">
//                             <input
//                                 type="text"
//                                 placeholder="Search for..."
//                                 className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                         </div>

//                     </div>
//                     <div className="hidden sm:flex items-center gap-6">
//                         <button className="flex flex-wrap items-center gap-1 text-black hover:text-blue-500">
//                             <User size={18} /> Sign In
//                         </button>
//                         <button className="flex flex-wrap items-center gap-1 text-black hover:text-red-500">
//                             <Heart size={18} /> Wishlist
//                         </button>
//                         <button className="flex flex-wrap items-center gap-1 text-black hover:text-green-500">
//                             <ShoppingCart size={18} /> Cart
//                         </button>
//                     </div>

//                     {/* Mobile Menu Toggle */}
//                     <div className="sm:hidden flex items-center">
//                         <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {mobileMenuOpen && (
//                     <div className="sm:hidden mt-3 flex items-center justify-between gap-3">
//                         <button className="flex items-center gap-2 text-black hover:text-blue-500">
//                             <User size={18} /> Sign In
//                         </button>
//                         <button className="flex items-center gap-2 text-black hover:text-red-500">
//                             <Heart size={18} /> Wishlist
//                         </button>
//                         <button className="flex items-center gap-2 text-black hover:text-green-500">
//                             <ShoppingCart size={18} /> Cart
//                         </button>
//                         {/* Mobile search bar */}
//                         <div className="relative flex-1 hidden lg:flex">
//                             <input
//                                 type="text"
//                                 placeholder="Search for..."
//                                 className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                             />
//                             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
//                         </div>


//                     </div>
//                 )}

//             </nav>
//             <div className="flex flex-wrap justify-center lg:justify-start lg:flex-nowrap px-4 lg:px-10 pt-3 pb-3 border border-bottom">
//                 {categories.map((cat, idx) => {
//                     const Icon = cat.icon;
//                     return (
//                         <div
//                             key={cat.name}
//                             className={`
//           flex items-center gap-2 text-gray-500 cursor-pointer hover:text-gray-900
//           px-2 py-2
//           ${idx !== categories.length - 1 ? "lg:border-r lg:border-gray-300" : ""}
//           w-auto lg:flex-1
//         `}
//                         >
//                             <Icon className="w-5 h-5" />
//                             <span className="whitespace-nowrap text-sm sm:text-base">{cat.name}</span>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div >
//     );
// }
"use client";
import Image from "next/image";
import Lucide from "../ui/lucide";
import { Heart, LogOutIcon, Menu, Package, Search, ShoppingCart, User, User2, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
    Bird,
    Shirt,
    Footprints,
    Circle,
    Target,
    Volleyball,
    Dice5
} from "lucide-react";
import Link from "next/link";
import SignInModal from "../SignInModal";

// Add this CSS to your global styles or as a style tag
const stickyStyles = `
.sticky-nav-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.sticky-placeholder {
  height: 76px; /* Adjust based on your nav height */
  display: none;
}
.sticky-active .sticky-placeholder {
  display: block;
}
`;

export default function Navbar() {
      const userRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const [categoriesOpen, setCategoriesOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
      const [openUser, setOpenUser] = useState(false);
    const [loading, setloading] = useState(false);
    console.log(loading)
    const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;


    const categories = [
        { name: "Cricket", icon: Bird, color: "bg-green-100", textColor: "text-green-800" },
        { name: "Badminton", icon: Bird, color: "bg-blue-100", textColor: "text-blue-800" },
        { name: "Apparels", icon: Shirt, color: "bg-purple-100", textColor: "text-purple-800" },
        { name: "Shoes", icon: Footprints, color: "bg-red-100", textColor: "text-red-800" },
        { name: "Football", icon: Circle, color: "bg-amber-100", textColor: "text-amber-800" },
        { name: "Basket Ball", icon: Target, color: "bg-orange-100", textColor: "text-orange-800" },
        { name: "Tennis", icon: Target, color: "bg-emerald-100", textColor: "text-emerald-800" },
        { name: "Volleyball", icon: Volleyball, color: "bg-cyan-100", textColor: "text-cyan-800" },
        { name: "Indoor Games", icon: Dice5, color: "bg-pink-100", textColor: "text-pink-800" }
    ];

      useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setOpenUser(false); // Close the modal
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

    useEffect(() => {
        // Add the styles to the document
        const styleElement = document.createElement('style');
        styleElement.textContent = stickyStyles;
        document.head.appendChild(styleElement);

        // Set up scroll listener for manual sticky behavior
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 50); // Adjust this value as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.head.removeChild(styleElement);
        };
    }, []);

      const toggleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent handleClickOutside from firing
          setOpenUser((prevState) => !prevState);
          
    };
    
 const handleLogout = () => {
  setloading(true);
  if (typeof window !== "undefined") {
    ["access-token", "userId", "refreshToken", "userName", "mobile"].forEach(
      (item) => localStorage.removeItem(item)
    );
  }
  setTimeout(() => setloading(false), 500);
    };
    
     const [mobile, setMobile] = useState<string | null>(null);

    useEffect(() => {
        const value = localStorage.getItem("mobile");
        setMobile(value);
    }, []);

    return (
        <div className={isSticky ? "sticky-active" : ""}>
            {/* Add style tag for the sticky behavior */}
            <style jsx>{`
                .sticky-nav-fixed {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 50;
                    background: white;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .sticky-placeholder {
                    height: 76px;
                    display: none;
                }
                .sticky-active .sticky-placeholder {
                    display: block;
                }
            `}</style>

            <div className="flex justify-between bg-red-700 text-white px-4 sm:px-10 p-2 text-sm">
                <div className="flex items-center gap-2">
                    <Lucide icon="Phone" className="w-4 h-4 text-white" />
                    <h4>044 48591898, 9027901695</h4>
                </div>
                <div className="flex items-center gap-2">
                    <Lucide icon="MapPin" className="w-4 h-4 text-white" />
                    <h4>India</h4>
                </div>
            </div>

            {/* Placeholder div to prevent layout shift when nav becomes fixed */}
            <div className="sticky-placeholder"></div>

            {/* Navigation bar with conditional fixed class */}
            <nav className={`bg-white py-3 shadow-md px-4 sm:px-10 ${isSticky ? 'sticky-nav-fixed' : ''}`}>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        {/* <div className="flex-shrink-0">
                            <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
                        </div> */}
                        <div className="flex-shrink-0">
                            <Link href="/">
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    width={200}
                                    height={200}
                                    className="cursor-pointer"
                                />
                            </Link>
                        </div>

                        <div className="relative hidden lg:flex w-[500px] mx-3">
                            <input
                                type="text"
                                placeholder="Search for..."
                                className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center gap-6">
                        {!userId && <button
                            onClick={() => setIsOpen(true)}
                            className="flex flex-wrap items-center gap-1 text-black hover:text-red-700 cursor-pointer"
                        >
                            <User size={18} /> Sign In
                        </button>}
                        <Link href="/wishlist">
                            <button className="flex flex-wrap items-center gap-1 text-black hover:text-red-700 cursor-pointer">
                                <Heart size={18} /> Wishlist
                            </button>
                        </Link>

                        {/* My Orders */}
                        <Link href="/orders">
                            <button className="flex flex-wrap items-center gap-1 text-black hover:text-red-700 cursor-pointer">
                                <Package size={18} /> My Orders
                            </button>
                        </Link>

                        {/* Cart */}
                        <Link href="/cart">
                            <button className="flex flex-wrap items-center gap-1 text-black hover:text-red-700 cursor-pointer">
                                <ShoppingCart size={18} /> Cart
                            </button>
                        </Link>
                       {userId &&<div className="hidden md:block ">
                        <div
                        className="flex justify-center items-center gap-2 relative cursor-pointer"
                        onClick={toggleDropdown}
                        ref={userRef}
                        >
                        {/* Avatar */}
                        {/* <img
                            src="https://static.vecteezy.com/system/resources/previews/020/911/739/large_2x/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png"
                            className="w-9 2xl:w-8 h-9 2xl:h-8 rounded-full border border-gray-300 object-cover"
                            alt="User Avatar"
                        /> */}

                        {/* Username */}
                        <div className="flex flex-col leading-tight">
                            <p className="font-medium font-Montserrat text-[#333333] text-xs 2xl:text-sm">
                            {mobile}
                            </p>
                            <p className="text-[10px] text-gray-500">Customer</p>
                        </div>

                        {/* Dropdown */}
                        <div
                            className={`absolute top-14 right-0 z-50 min-w-[160px] border border-gray-200 bg-white rounded-md shadow-lg transition-all duration-200 ease-in-out origin-top ${
                            openUser ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                            }`}
                        >
                            {/* Profile */}
                            <div
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gradient-to-r hover:from-[#e40808f1] hover:to-[#cd0000e6] hover:text-white cursor-pointer text-sm font-Poppins transition-colors"
                            onClick={(e) => e.stopPropagation()}
                            >
                            <User2 className="w-4 h-4" />
                            <p>Profile</p>
                            </div>

                            {/* Logout */}
                            <div
                            className="flex items-center gap-2 px-3 py-2 hover:bg-gradient-to-r hover:from-[#e40808f1] hover:to-[#cd0000e6] hover:text-white cursor-pointer text-sm font-Poppins transition-colors"
                              onClick={handleLogout}
                            >
                            <LogOutIcon className="w-4 h-4" />
                            <p>Logout</p>
                            </div>
                        </div>
                        </div>

                         </div>}

                    </div>

                    {/* Mobile Menu Toggle */}
                    {/* <div className="sm:hidden flex items-center">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div> */}
                    {/* Mobile Menu Toggle */}
                    <div className="sm:hidden flex items-center">
                        <button onClick={() => setCategoriesOpen(true)}>
                            <Menu size={24} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}

                <div className="sm:hidden mt-3">
                    <div className="relative w-full mb-3">
                        <input
                            type="text"
                            placeholder="Search for..."
                            className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    </div>
                    <div className="flex justify-between">
                        {/* <button className="flex items-center gap-2 text-black hover:text-blue-500">
                            <User size={18} /> Sign In
                        </button> */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex items-center gap-1 text-black hover:text-red-500"
                        >
                            <User size={18} /> Sign In
                        </button>
                        <button className="flex items-center gap-2 text-black hover:text-red-500">
                            <Heart size={18} /> Wishlist
                        </button>
                        <button className="flex items-center gap-2 text-black hover:text-green-500">
                            <ShoppingCart size={18} /> Cart
                        </button>
                    </div>
                </div>

            </nav>

            <div className="hidden lg:flex flex-wrap justify-start px-10 py-3 border-t border-b border-gray-200 bg-white">
                {categories.map((cat, idx) => {
                    const Icon = cat.icon;
                    return (
                        <div
                            key={cat.name}
                            className={`
                                flex items-center gap-2 text-gray-500 cursor-pointer hover:text-gray-900
                                px-2 py-2
                                ${idx !== categories.length - 1 ? "lg:border-r lg:border-gray-300" : ""}
                                w-auto lg:flex-1
                            `}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="whitespace-nowrap text-sm sm:text-base">{cat.name}</span>
                        </div>
                    );
                })}
            </div>
            {categoriesOpen && (
                <div className="fixed inset-0 z-50 flex">
                    {/* Sidebar */}
                    <div className="bg-white w-72 h-full shadow-lg p-5 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Categories</h2>
                            <button onClick={() => setCategoriesOpen(false)}>
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex flex-col gap-3">
                            {categories.map((cat) => {
                                const Icon = cat.icon;
                                return (
                                    <div
                                        key={cat.name}
                                        className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-gray-900"
                                    >
                                        <Icon className="w-5 h-5" />
                                        <span className="text-sm">{cat.name}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Overlay */}
                    <div
                        className="flex-1 bg-black bg-opacity-40"
                        onClick={() => setCategoriesOpen(false)}
                    ></div>
                </div>
            )}
            <SignInModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>

    );
}
