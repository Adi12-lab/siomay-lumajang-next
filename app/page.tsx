"use client"
import { trigger, getClass } from './helper'
import anime from 'animejs'
import { useEffect } from 'react'

import { Suspense } from 'react'
import Merge from './merge'
import Loading from './loading'
export default function Home() {
  useEffect(() => {
    const HeroImage: HTMLElement | null = document.querySelector(".hero-image") //menjadi entry awal
    trigger(HeroImage, () => {
      anime
        .timeline({
          easing: "easeInOutCubic",

        })
        .add({
          targets: ".hero-image",
          opacity: [0, 1],
          duration: 1500
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


    //==== TEAM ====
    //Team image
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

  }, [])
  return (
    <>
    <Suspense fallback={<Loading />}>
      <Merge />

    </Suspense>
    </>
  )
}
