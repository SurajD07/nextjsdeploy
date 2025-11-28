

interface CategoryItemProps {
    src: string;
    title: string;
}

export default function ProductoryItem({ src, title }: CategoryItemProps) {
    return (
        <div className="flex flex-col items-center gap-2 cursor-pointer group">
            {/* Circle Wrapper */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:border-red-500">
                <div
                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                    style={{
                        WebkitMaskImage: `url(${src})`,
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: "contain",
                        backgroundColor: "#3D3D3D", // 👈 Your custom color
                    }}
                />
            </div>


            {/* Title */}
            <span className="text-xs text-center transition-colors group-hover:text-red-600">
                {title}
            </span>
        </div>
    );
}
