"use client"

import anime from "animejs";
import { useEffect } from "react";
import { trigger } from "../helper";

import { useMediaQuery } from '../hooks'
export default function Break() {
    const isDesktop = useMediaQuery('(min-width: 768px)')
    useEffect(() => {
        if (isDesktop) {

            const breakTitle = document.querySelector(".break-title")
            if (breakTitle) {
                const textContent = breakTitle.textContent
                if (textContent) breakTitle.innerHTML = textContent.replace(/\S/g, "<span class='letter inline-block opacity-0'>$&</span>");
            }
            trigger(breakTitle, () => {
                anime.timeline().add({
                    targets: '.break-title .letter',
                    translateX: [40, 0],
                    translateZ: 0,
                    opacity: [0, 1],
                    easing: "easeOutExpo",
                    duration: 800,
                    delay: (_el: HTMLElement, i: number) => 500 + 30 * i
                }).add({
                    targets: '.break-button',
                    translateX: [40, 0],
                    opacity: [0, 1],
                    duration: 500,
                    easing: "easeOutExpo",
                });

            }, 0.4)
        }
    }, [isDesktop])
    return (
        <section className="mt-7 bg-[url('/background/break.png')]">
            <div className="container max-w-full py-9">
                <div>
                    <h3 className="break-title font-playfair text-[25px] font-bold text-white sm:text-[35px] md:leading-[55px] md:text-xl text-balance">
                        Gak perlu ragu lagi dong langsung pesan sekarang
                    </h3>
                    <a href={process.env.NEXT_PUBLIC_WA_LINK}
                        className={`break-button mt-8 rounded-full bg-[#0C0F2E] ${isDesktop ? 'opacity-0' : ''} px-7 py-3 text-white`}
                        type="button"
                    >
                        Order Now
                    </a>
                </div>
            </div>
        </section>
    );
};

