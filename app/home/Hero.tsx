"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Hero() {
  const slides = [
    { image: "/images/img3.png" },
    { image: "/images/img1.png" },
    { image: "/images/img3.png" },
  ];

  const responsive = {
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 769 },
      items: 1,
    },
  };

  return (
    <main className="mx-auto px-4 sm:px-10 p-5">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={true}
        infinite={true} // loops slides
        autoPlay={true} // enable autoplay
        autoPlaySpeed={2000} // 3 seconds per slide
        keyBoardControl={true}
        transitionDuration={2000} // smooth transition
        containerClass="w-full"
        itemClass="px-0"
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative w-full h-64 sm:h-96">
            <Image
              src={slide.image}
              alt={`Slide Image ${idx + 1}`}
              fill
              className="rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </main>
  );
}
