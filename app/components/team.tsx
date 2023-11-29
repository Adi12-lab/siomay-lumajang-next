"use client"
import anime from 'animejs'

import { useMediaQuery } from '../hooks'
import { trigger } from '../helper'

import Line from "../../public/assets/image/line.png"
import Model from "../../public/assets/image/model.png"
import Image from 'next/image'
import CardTeam from "../fragments/cardTeam"
import { useEffect } from "react"
export default function Team() {
    const isDesktop = useMediaQuery('(min-width: 768px)')
    useEffect(() => {
        if (isDesktop) {
            const teamImage = document.querySelector(".team-image")
            trigger(teamImage, () => {
                anime({
                    targets: ".team-image",
                    easing: 'easeInOutBack',
                    opacity: [0, 1],
                    translateY: [-100, 0],
                    duration: 1500
                })
            }, 0.5)

            const teamName: HTMLElement | null = document.querySelector(".team-name")
            if (teamName) {
                const textContent = teamName.textContent;
                if (textContent !== null) {
                    teamName.innerHTML = textContent.replace(/\S/g, "<span class='letter inline-block opacity-0'>$&</span>");
                }
            }

            trigger(teamName, () => {
                anime.timeline(
                    {
                        easing: "easeInOutBack",
                    })
                    .add({
                        targets: '.team-name .letter',
                        translateY: ["-1.1em", 0],
                        translateZ: 0,
                        opacity: [0, 1],
                        duration: 750,
                        delay: (_el: HTMLElement, i: number) => 50 * i
                    })
                    .add({
                        targets: ".team-line",
                        opacity: [0, 1],
                        scaleX: 60,
                        duration: 800
                    })
            })
            const teamDesc = document.querySelector(".team-desc")
            trigger(teamDesc, () => {
                anime({
                    targets: '.team-desc',
                    opacity: [0, 1],
                    easing: "easeInOutBack",
                    duration: 2000,
                })
            })
        }
    }, [isDesktop])
    return (
        <section className="mt-16 pb-14" >
            <div className="container max-w-full">
                <div className="flex w-full flex-wrap">
                    <div className="h-max lg:w-1/2">
                        <Image src={Model} alt="sugeng rihandoyo" className={`team-image ${isDesktop ? 'opacity-0' : ''}`} id="team" loading='eager'/>
                    </div>
                    <div className="lg:w-1/2 lg:pl-4">
                        <div className="overflow-hidden">
                            <h2 className="team-name font-playfair font-bold text-3xl sm:text-[35.2px] md:text-xl text-balance">Sugeng Rihandoyo</h2>
                            <Image src={Line} alt="Line" className={`team-line mt-1 h-1 w-1 scale-x-0 ${isDesktop ? 'opacity-0' : ''} md:mt-3`} />
                            <p className={`team-desc desc mt-4 font-inter${isDesktop ? 'opacity-0' : ''}`}>
                                Sugeng Rihandoyo, seorang pedagang kaki lima yang telah mengubah cara Lumajang menikmati siomay. Sugeng bukanlah penjual siomay biasa, dia adalah orang pertama yang memperkenalkan kelezatan siomay di Kota Lumajang dan berlanjut selama 20 tahun ini.
                            </p>

                            <p className={`team-desc mt-3 font-inter ${isDesktop ? 'opacity-0' : ''}`}>
                                Namun, bukan hanya rasa yang membuat siomay Sugeng begitu spesial. Sugeng percaya bahwa kepuasan pelanggan adalah segalanya. <strong>&ldquo;Pelanggan puas, kita juga puas&rdquo; </strong> katanya, menunjukkan komitmennya untuk memberikan layanan terbaik.
                                Dia juga dikenal karena sifatnya yang humoris, menciptakan suasana yang nyaman dan menyenangkan bagi pelanggan. Dengan Sugeng, membeli siomay bukan hanya tentang makanan, tetapi juga tentang pengalaman - sebuah perjalanan kuliner yang menggembirakan dan memuaskan.
                            </p>
                        </div>
                        <div className="mt-9 flex flex-col gap-x-10 gap-y-8 font-inter lg:flex-row">
                            <CardTeam />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
