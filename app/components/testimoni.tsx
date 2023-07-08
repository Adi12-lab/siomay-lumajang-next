"use client"
import { useState, useEffect } from 'react'

import Line from "../../public/assets/image/line.png";
import Avatar from "../../public/assets/image/food.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft, } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import anime from "animejs";
import { trigger } from '../helper';
import Image from 'next/image';


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
                    width: "120px",
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
        comment: string;
    };
    const testimonies: testimoniesType[] = [
        {
            name: "Ibu Rina",
            status: "Pecinta Kuliner",
            comment:
                "Sebagai seorang foodie, saya selalu mencari makanan yang unik dan. Siomay Pak Sugeng benar-benar memenuhi kriteria itu. Rasanya luar biasa dan membuat saya ingin mencoba lagi.",
        },
        {
            name: "Dian",
            status: "Pelanggan baru",
            comment:
                "Saya baru saja mencoba siomay Pak Sugeng untuk pertama kalinya dan saya sangat terkesan! Saya pasti akan kembali lagi.",
        },
        {
            name: "Ibu Sari",
            status: "Pelanggan dengan Anak",
            comment:
                "Anak-anak saya sangat menyukai siomay Pak Sugeng. Itu adalah salah satu favorit mereka dan kami sering membelinya sebagai camilan sore.",
        },
        {
            name: "Bapak Joko",
            status: "Pencari makanan sehat",
            comment:
                "Saya sangat menghargai bahwa siomay Pak Sugeng dibuat dengan ikan tenggiri asli. Rasanya lezat dan saya merasa baik karena tahu bahwa saya memberi tubuh saya makanan yang sehat.",
        },
        {
            name: "Bapak Joko",
            status: "Pemburu camilan",
            comment:
                "Siomay Pak Sugeng tidak hanya lezat, tetapi juga harganya sangat terjangkau. Itu selalu memberikan nilai terbaik untuk uang saya.",
        },
        {
            name: "Ibu Tini",
            status: "Pelanggan lama",
            comment:
                "Saya suka bagaimana Pak Sugeng selalu membuat sayaawa. Membeli siomay dari dia bukan hanya tentang makanan, tetapi juga tentang pengalaman yang menyenangkan.",
        },

    ];
    return (
        <section className="mt-7 pt-14" id="testimonies">
            <div className="container max-w-full">
                <h2 className="testimoni-title text-center font-playfair opacity-0 text-3xl sm:text-[35.2px] md:text-xl">Testimoni</h2>
                <Image src={Line} alt="line" className="testimoni-line mx-auto mt-3 h-1 w-0" />
                <Swiper
                    className="mt-16 py-3 sm:px-4"
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
                            <SwiperSlide key={index} className={`${(isDekstop && index === 1) || (!isDekstop && index === 0) ? 'slide-middle' : ''} w-[352px] rounded-[15px] px-6 py-8 shadow-[5px_5px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out`}>
                                <div className='font-inter'>
                                    {/* Header */}
                                    <div className="flex">
                                        <Image
                                            src={Avatar}
                                            alt="avatar"
                                            className="h-16 w-16 rounded-full shadow-lg outline outline-1 outline-white"
                                        />
                                        <div className="ms-4">
                                            <h6 className="text-[17.6px] font-semibold">
                                                {testimonie.name}
                                            </h6>
                                            <span className="text-primary">
                                                {testimonie.status}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Content */}
                                    <p className="mt-4 text-gray">{testimonie.comment}</p>
                                    {/* Footer */}
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
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};


export default Testimoni;
