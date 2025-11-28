// import Image from "next/image";

// export default function Shop() {
//     return (
//         <div className="p-6">
//             <div className="grid grid-cols-4 gap-5 px-12">
//                 <Image
//                     src="/images/wwf1.png"
//                     alt="Image 1"
//                     width={310}  // Set the desired width
//                     height={200} // Set the desired height
//                     className="object-cover"
//                 />
//                 <Image
//                     src="/images/wwf2.png"
//                     alt="Image 2"
//                     width={310}
//                     height={200}
//                     className="object-cover"
//                 />
//                 <Image
//                     src="/images/wwf3.png"
//                     alt="Image 3"
//                     width={310}
//                     height={200}
//                     className="object-cover"
//                 />
//                 <Image
//                     src="/images/wwf1.png"
//                     alt="Image 3"
//                     width={310}
//                     height={200}
//                     className="object-cover"
//                 />
//             </div>

//         </div>

//     );
// }
import Image from "next/image";

export default function Shop() {
    return (
        <div className="lg:p-6">
            <div
                className="
                    grid gap-5 px-4 sm:px-6 
                    grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4
                "
            >
                <Image
                    src="/images/wwf1.png"
                    alt="Image 1"
                    width={310}
                    height={200}
                    className="object-cover w-full h-auto rounded-md"
                />
                <Image
                    src="/images/wwf2.png"
                    alt="Image 2"
                    width={310}
                    height={200}
                    className="object-cover w-full h-auto rounded-md"
                />
                <Image
                    src="/images/wwf3.png"
                    alt="Image 3"
                    width={310}
                    height={200}
                    className="object-cover w-full h-auto rounded-md"
                />
                <Image
                    src="/images/wwf1.png"
                    alt="Image 4"
                    width={310}
                    height={200}
                    className="object-cover w-full h-auto rounded-md"
                />
            </div>
        </div>
    );
}
