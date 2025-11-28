// import Image from "next/image";

// export default function PromoGrid() {
//     return (
//         <div className="p-0">
//             <div className="grid grid-cols-3 gap-5 px-12 items-stretch">

//                 {/* Left Image */}
//                 <div className="relative group rounded-xl overflow-hidden">
//                     <Image
//                         src="/images/wwf4.png"
//                         alt="Image 1"
//                         width={310}
//                         height={400}
//                         className="w-full h-[400px] rounded-xl transform transition-transform duration-300 group-hover:scale-105"
//                     />
//                     {/* Overlay highlight */}
//                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
//                 </div>

//                 {/* Middle Column with 2 stacked images */}
//                 <div className="flex flex-col gap-5">
//                     <div className="relative group rounded-xl overflow-hidden">
//                         <Image
//                             src="/images/wwf6.png"
//                             alt="Image 2"
//                             width={310}
//                             height={200}
//                             className="w-full h-[190px] rounded-xl transform transition-transform duration-300 group-hover:scale-105"
//                         />
//                         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
//                     </div>

//                     <div className="relative group rounded-xl overflow-hidden">
//                         <Image
//                             src="/images/wwf7.png"
//                             alt="Image 3"
//                             width={310}
//                             height={200}
//                             className="w-full h-[190px] rounded-xl transform transition-transform duration-300 group-hover:scale-105"
//                         />
//                         <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
//                     </div>
//                 </div>

//                 {/* Right Image */}
//                 <div className="relative group rounded-xl overflow-hidden">
//                     <Image
//                         src="/images/wwf5.png"
//                         alt="Image 4"
//                         width={310}
//                         height={400}
//                         className="w-full h-[400px] rounded-xl transform transition-transform duration-300 group-hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
//                 </div>

//             </div>
//         </div>
//     );
// }
import Image from "next/image";

export default function PromoGrid() {
    return (
        <div className="p-0">
            <div
                className="
                    grid gap-5 px-4 sm:px-6 md:px-12
                    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                    items-stretch
                "
            >
                {/* Left Image */}
                <div className="relative group rounded-xl overflow-hidden">
                    <Image
                        src="/images/wwf4.png"
                        alt="Image 1"
                        width={310}
                        height={400}
                        className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>

                {/* Middle Column with 2 stacked images */}
                <div className="flex flex-col gap-5">
                    <div className="relative group rounded-xl overflow-hidden">
                        <Image
                            src="/images/wwf6.png"
                            alt="Image 2"
                            width={310}
                            height={200}
                            className="w-full h-[180px] sm:h-[170px] lg:h-[190px] rounded-xl object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    </div>

                    <div className="relative group rounded-xl overflow-hidden">
                        <Image
                            src="/images/wwf7.png"
                            alt="Image 3"
                            width={310}
                            height={200}
                            className="w-full h-[180px] sm:h-[170px] lg:h-[190px] rounded-xl object-cover transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative group rounded-xl overflow-hidden">
                    <Image
                        src="/images/wwf5.png"
                        alt="Image 4"
                        width={310}
                        height={400}
                        className="w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-xl object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </div>
            </div>
        </div>
    );
}
