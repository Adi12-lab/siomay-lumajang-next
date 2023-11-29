"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react'
import anime from "animejs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft, } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { trigger } from '../helper';

import Line from "../../public/assets/image/line.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper as SwiperType } from "swiper/types";

const Testimoni = () => {
    const [isDekstop, setIsDekstop] = useState(false)
    useEffect(() => {
        const mediaWatcher = window.matchMedia("screen and (min-width: 1024px)").matches
        if (mediaWatcher) setIsDekstop(true)
        else setIsDekstop(false)

        //Animasi
        const testimoniTitle = document.querySelector(".testimoni-title")
        trigger(testimoniTitle, () => {
            anime.timeline().
                add({
                    targets: ".testimoni-title",
                    translateX: [-200, 0],
                    opacity: [0, 1],
                    skewX: ["40deg", 0],
                    easing: "easeOutBack",
                    duration: 1000
                }).
                add({
                    targets: ".testimoni-line",
                    opacity: [0, 1],
                    scaleX: 30,
                    easing: "easeOutBack",
                    duration: 1000
                })
        })

    }, [])
    const handleSwiperchange = (swiper: SwiperType) => {
        swiper.slides.forEach(slide => { slide.classList.remove("slide-middle") }) //hapus semua slide middlenya
        const activeIndex: number = swiper.activeIndex

        if (isDekstop) {
            const middleSlide = swiper.slides[activeIndex + 1]
            if (activeIndex + 1 < swiper.slides.length) {
                middleSlide.classList.add("slide-middle")
            }
        } else {
            const middleSlide = swiper.slides[activeIndex]
            middleSlide.classList.add("slide-middle")

        }
    }
    type testimoniesType = {
        name: string;
        status: string;
        img: string;
        comment: string;
    };
    const testimonies: testimoniesType[] = [
        {
            name: "Ibu Rina",
            status: "Pecinta Kuliner",
            img: "/assets/image/food.jpg",
            comment:
                "Sebagai seorang foodie, saya selalu mencari makanan yang unik dan. Siomay Lumajang ini memang paling pas. Rasanya luar biasa dan membuat saya pengen nagih.",
        },
        {
            name: "Dian",
            status: "Pelanggan baru",
            img: "/assets/image/food.jpg",
            comment:
                "Baru aja nyoba Siomay Lumajang untuk pertama kalinya dan saya sangat terkesan!.",
        },
        {
            name: "Bapak Joko",
            status: "Pencari makanan sehat",
            img: "/assets/image/food.jpg",
            comment:
                "Siomay Lumajang dibuat dengan ikan asli bukan tepung di kebanyakan siomay lainnya ditambah rasanya Maknyuus",
        },
        {
            name: "Bapak Joko",
            status: "Pemburu camilan",
            img: "/assets/image/food.jpg",
            comment:
                "Siomay Lumajang tidak hanya lezat, tetapi juga harganya sangat terjangkau.",
        },
        {
            name: "Ibu Tini",
            status: "Pelanggan lama",
            img: "/assets/image/food.jpg",
            comment:
                "Saya suka bagaimana Pak Sugeng selalu membuat saya tertawa. Rasanya membeli siomay bukan hanya tentang makanan, tetapi juga tentang pengalaman yang menyenangkan hahaha.",
        },

    ];
    return (
        <section className="mt-7 pt-14">
            <div className="container max-w-full">
                <h2 className="testimoni-title text-center font-playfair font-bold opacity-0 text-3xl sm:text-[35.2px] md:text-xl" id="testimonies">Testimoni</h2>
                <Image src={Line} alt="line" className="testimoni-line mx-auto mt-3 h-1 w-1 opacity-0" />
                <Swiper
                    className="mt-10"
                    modules={[Pagination]}
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        400: {
                            slidesPerView: 1
                        },
                        1024: {
                            slidesPerView: 3
                        }
                    }
                    }
                    onSlideChangeTransitionEnd={handleSwiperchange}
                >
                    {testimonies.map((testimonie, index) => {

                        return (
                            <SwiperSlide key={index} className={`testi-slide ${(isDekstop && index === 1) || (!isDekstop && index === 0) ? 'slide-middle' : ''}`}>
                                <div className='font-inter'>
                                    <CardHeader name={testimonie.name} status={testimonie.status} img={testimonie.img} />
                                    {/* Content */}
                                    <p className="mt-4 text-gray">{testimonie.comment}</p>
                                    {/* Footer */}
                                    <CardFooter />

                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

const CardHeader = ({ name, status, img }: { name: string, status: string, img: string }) => {
    return (
        <div className="flex">
            <Image
                src={img}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full shadow-lg outline outline-1 outline-white"
            />
            <div className="ms-4">
                <h6 className="text-[17.6px] font-semibold">
                    {name}
                </h6>
                <span className="text-primary">
                    {status}
                </span>
            </div>
        </div>
    )
}

const CardFooter = () => {
    return (
        <div className="flex items-center justify-between">
            <span>
                <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FBA13A]"
                />
                <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FBA13A]"
                />
                <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FBA13A]"
                />
                <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FBA13A]"
                />
                <FontAwesomeIcon
                    icon={faStar}
                    className="text-[#FBA13A]"
                />
            </span>
            <div className="text-end">
                <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-[55px] text-[#FFE4D2]"
                />
            </div>
        </div>
    )
}


export default Testimoni;
