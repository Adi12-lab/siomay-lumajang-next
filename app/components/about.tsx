"use client"
import Image from 'next/image'
import { StaticImageData } from 'next/image';
import { useEffect } from "react"
import anime from 'animejs'

import { useMediaQuery } from '../hooks'
import { trigger, getClass } from '../helper'
import Slipper from "../../public/assets/image/slipper.png"
import Fish from "../../public/assets/image/fish.png"
import Orders from "../../public/assets/image/orders.png"
import Line from "../../public/assets/image/line.png"
export default function About() {
    const isDesktop = useMediaQuery('(min-width: 768px)')
    type Service = {
        icon: StaticImageData;
        name: string;
        description: string;
    };

    const services: Service[] = [
        {
            icon: Slipper,
            name: "Tradisional",
            description:
                "Siomay yang dibuat dengan cara yang tradisional, tentunya tetap berkualitas terbaik",
        },
        {
            icon: Fish,
            name: "Bahan Terbaik",
            description:
                "Kami memilih bahan terbaik, yaitu ikan tenggiri yang menjadi bahan utama",
        },
        {
            icon: Orders,
            name: "Pesanan Banyak",
            description:
                "Kami juga menerima pesanan dalam jumlah banyak. Selain itu, kami siap datang ke acara anda",
        },
    ];

    useEffect(() => {
        if (isDesktop) {
            const aboutTitle: HTMLElement | null = document.querySelector(".about-title")
            trigger(aboutTitle, () => {
                aboutTitle && anime.timeline({
                    easing: "easeInOutCubic",
                }).add({
                    targets: ".about-line",
                    //width: [0, "336px"], //width tidak akan bisa
                    scaleX: 84,
                    duration: 800,
                }).add({
                    targets: getClass(aboutTitle),
                    opacity: [0, 1],
                    duration: 1000
                })

            })
              //About description
              const description: HTMLElement | null = document.querySelector(".about-desc")
              trigger(description, () => {
                description && anime({
                  targets: getClass(description),
                  easing: "easeInOutCubic",
                  opacity: [0, 1],
                  duration: 1000
                })
              })


            //About card
            const cards = Array.from(document.querySelectorAll<HTMLDivElement>(".about-card"))
            cards.forEach((card, i) => {
                trigger(card, () => {
                    card && anime({
                        targets: getClass(card) + '.card-' + i,
                        easing: "easeInOutCubic",
                        opacity: [0, 1],
                        translateY: [-50, 0],
                        duration: 400 * (i + 1)
                    })
                })
            })

        }
    }, [isDesktop])
    return (
        <section className="mt-7 bg-[#FAFAFA] py-14">
            <div className="container max-w-full">
                <div className="pb-4 text-center">
                    <h2 className={`about-title font-playfair text-3xl font-bold ${isDesktop ? 'opacity-0' : ''} leading-9 sm:text-[35.2px] sm:leading-10 md:text-xl`} id="about">
                        Selamat Datang di Siomay Lumajang
                    </h2>
                    <Image src={Line} alt="line" className="about-line mx-auto mt-4 w-1 h-1 scale-0" />
                    <p className={`about-desc mx-auto mt-6 font-inter ${isDesktop ? 'opacity-0' : ''} lg:w-[695px]`}>
                        Terima kasih telah mempertimbangkan Siomay Lumajang untuk makanan
                        Anda berikutnya. Kami tidak sabar untuk menyajikan makanan terbaik
                        untuk Anda!
                    </p>
                </div>

                <div className="mt-7 flex flex-wrap flex-col items-center gap-y-6 md:justify-evenly lg:flex-row">
                    {services.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`about-card card-${index} group flex h-[249px] w-[321px] flex-col items-center justify-center rounded-[50px] ${isDesktop ? 'opacity-0' : ''} from-[#FF7010] to-[#473B32] p-7 text-balance hover:bg-gradient-to-br`}
                            >
                                <div className="w-fit rounded-full bg-primary px-4 py-3 transition-all duration-100 ease-in-out group-hover:bg-white ">
                                    <Image
                                        src={item.icon}
                                        alt={item.name}
                                        className="mx-auto h-[47px] w-[40px]"
                                    />
                                </div>
                                <h4 className="mt-2 text-center font-playfair text-[20px] text-primary transition-all duration-100 ease-in-out group-hover:text-white">
                                    {item.name}
                                </h4>
                                <p className="font-gray mt-2 text-center font-inter transition-all duration-100 ease-in-out group-hover:text-white">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
