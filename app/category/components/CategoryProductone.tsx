import Image from "next/image";

interface CategoryItemProps {
  src: string;
  title: string;
}

export default function CategoryProductone({ src, title }: CategoryItemProps) {
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer group">
      {/* Circle Image */}
      <div className="
        w-20 h-20     /* mobile */
        sm:w-36 sm:h-36  /* small screens */
        md:w-40 md:h-40  /* tablets */
        lg:w-52 lg:h-52  /* desktop */
        relative rounded-full overflow-hidden border border-gray-200
        transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:border-red-500 
      ">
        <Image
          src={src}
          alt={title}
          fill
          className=" transition-transform duration-300 group-hover:scale-110"
        />
        {/* Overlay highlight */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      </div>

      {/* Title */}
      <span className="text-xs sm:text-sm md:text-base text-center transition-colors group-hover:text-red-600">
        {title}
      </span>
    </div>
  );
}

