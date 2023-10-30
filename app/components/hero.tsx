"use client"
import { useEffect } from 'react'
import anime from 'animejs'
import Image from 'next/image'

import Siomay from "../../public/assets/image/food.jpg"


import { trigger } from '../helper'
import { useMediaQuery } from '../hooks'

export default function Hero() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const animateScroll = (target: string) => {
    const element = document.getElementById(target);
    if (element) {
      const targetOffsetTop = element.offsetTop - 100;
      anime({
        targets: document.documentElement,
        scrollTop: targetOffsetTop,
        duration: 500,
        easing: 'easeOutQuad'
      });
    }
  };

  useEffect(() => {
    if (isDesktop) {
      const HeroImage: HTMLElement | null = document.querySelector(".hero-image") //menjadi entry awal
      trigger(HeroImage, () => {
        anime
          .timeline({
            easing: "easeInOutCubic",
          })
          .add({
            targets: ".hero-slug span",
            opacity: [0, 1],
            scale: [14, 1],
            duration: 800,
            delay: (_el: HTMLElement, i: number) => 800 * i,
          })
          .add({
            targets: [".hero-caption", ".hero-button"],
            opacity: [0, 1],
            translateX: [-100, 0],
            duration: 800,
          })
      })

    }
  }, [isDesktop])

  return (
    <section className="mt-7" id="hero">
      <div className="absolute right-0 top-0 z-[-1] hidden h-[90%] w-[73%] bg-[url('/background/bg-hero.png')] bg-cover bg-left-top bg-no-repeat lg:block"></div>
      <div className="container mx-auto max-w-full lg:flex lg:h-screen lg:items-center">
        <div className="flex lg:order-last lg:w-1/2">
          <Image
            src={Siomay}
            alt="Siomay"
            className="hero-image w-full"
            priority
            sizes='(min-width: 768px) 400px, 200px'
            loading='eager'
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="hero-slug font-playfair text-3xl font-black leading-[36px] text-black sm:text-xl lg:text-2xl lg:leading-[92.2px]">
            <span className={`me-2 inline-block ${isDesktop ? 'opacity-0' : ''}`}>Nikmat, </span>
            <span className={`me-2 inline-block ${isDesktop ? 'opacity-0' : ''}`}>Sedap, </span>
            <span className={`me-2 inline-block ${isDesktop ? 'opacity-0' : ''}`}>Mantap</span>
          </h1>
          <p className={`hero-caption mt-2 font-inter text-base ${isDesktop ? 'opacity-0' : ''} text-gray`}>
            Siomay Lumajang dibuat dengan ikan tenggiri asli. Setiap gigitan membawa kenikmatan seolah-olah Anda sedang berada di jantung Bandung.
          </p>
          <button 
          type='button' 
          className={`hero-button inline-block cursor-pointer mt-5 rounded-full bg-gradient-to-b from-[#FD831E] to-[#FF6D1A] px-5 py-3 text-white ${isDesktop ? 'opacity-0' : ''} shadow-lg`}
          onClick={()=> animateScroll('about')}
          >
            Lebih Lengkap
          </button>
        </div>
      </div>
    </section>
  )
}
