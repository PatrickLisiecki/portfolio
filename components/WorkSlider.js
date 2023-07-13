// Import Image
import Image from "next/image";

// Import Link
import Link from "next/link";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

// Import icon
import { BsArrowRight } from "react-icons/bs";

// Data
const workSlides = {
    slides: [
        {
            images: [
                {
                    title: "title",
                    path: "/thumb.jpg",
                    link: "https://github.com/PatrickLisiecki/book-review-forum",
                },
                {
                    title: "title",
                    path: "/thumb.jpg",
                    link: "https://github.com/PatrickLisiecki/book-review-forum",
                },
                {
                    title: "title",
                    path: "/thumb.jpg",
                    link: "https://github.com/PatrickLisiecki/book-review-forum",
                },
                {
                    title: "title",
                    path: "/thumb.jpg",
                    link: "https://github.com/PatrickLisiecki/book-review-forum",
                },
            ],
        },
        {
            images: [
                {
                    title: "title",
                    path: "/thumb.jpg",
                    link: "https://github.com/PatrickLisiecki/book-review-forum",
                },
                {
                    title: "title",
                    path: "/thumb.jpg",
                    link: "https://github.com/PatrickLisiecki/book-review-forum",
                },
                {
                    title: "title",
                    path: "/thumb.jpg",
                    link: "https://github.com/PatrickLisiecki/book-review-forum",
                },
                {
                    title: "title",
                    path: "/thumb.jpg",
                    link: "https://github.com/PatrickLisiecki/book-review-forum",
                },
            ],
        },
    ],
};

const WorkSlider = () => {
    return (
        <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[280px] sm:h-[480px]"
        >
            {workSlides.slides.map((slide, i) => {
                return (
                    <SwiperSlide key={i}>
                        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                            {slide.images.map((image, i) => {
                                return (
                                    <Link
                                        href={image.link}
                                        target="_blank"
                                        key={i}
                                    >
                                        <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                                            <div className="flex items-center justify-center relative overflow-hidden group">
                                                <Image
                                                    src={image.path}
                                                    width={500}
                                                    height={300}
                                                    alt=""
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                                                <div className="absolute bottom-0 translate-y-full text-[13px] tracking-[0.2em] group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                                    <div className="flex items-center gap-x-2">
                                                        <div className="delay-100">
                                                            VIEW
                                                        </div>
                                                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                                                            CODE
                                                        </div>
                                                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                                                            <BsArrowRight />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default WorkSlider;
