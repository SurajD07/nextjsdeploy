import Image from "next/image";

interface Blog {
    id: number;
    title: string;
    description: string;
    image: string;
    author: string;
    date: string;
    readTime: string;
}

interface BlogCardProps {
    blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className="bg-[#FCFCFC] border border-[#E4E8EA]  rounded-lg shadow-md overflow-hidden p-4 min-h-[430px]">
            {/* Blog Image */}
            <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-md mt-2"
            />

            {/* Meta Info */}
            <div className="mt-3 text-sm text-gray-500 flex justify-between items-center">
                <div className="flex items-center gap-1">
                    <Image
                        src="/images/about/clock.png"   // place your clock icon inside public/icons/clock.png
                        alt="Clock Icon"
                        width={16}
                        height={16}
                    />
                    <span>{blog.readTime}</span>
                </div>
                <span className="text-red-700 font-semibold cursor-pointer">
                    Read Now →
                </span>
            </div>

            {/* Title + Desc */}
            <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{blog.description}</p>

            {/* Author */}
            <div className="flex items-center gap-2 mt-5">
                <Image
                    src="/images/about/bb2.png"
                    alt={blog.author}
                    width={30}
                    height={30}
                    className="rounded-full"
                />
                <div className="text-sm">
                    <p className="font-medium">{blog.author}</p>
                    <p className="text-gray-500">{blog.date}</p>
                </div>
            </div>
        </div>
    );
}
