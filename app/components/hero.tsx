import Image from 'next/image'
import Siomay from "../../public/assets/image/food.jpg"

import ButtonLink from '../fragments/ButtonLink'

export default function Hero() {
  return (
    <section className="mt-7" id="hero">
      <div className="absolute right-0 top-0 z-[-1] hidden h-[90%] w-[73%] bg-[url('/background/bg-hero.png')] bg-cover bg-left-top bg-no-repeat lg:block"></div>
      <div className="container mx-auto max-w-full lg:flex lg:h-screen lg:items-center">
        <div className="flex lg:order-last lg:w-1/2">
          <Image
            src={Siomay}
            alt="Siomay"
            className="hero-image opacity-0 w-full"
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="hero-slug font-playfair text-3xl font-black leading-[36px] text-black sm:text-xl lg:text-2xl lg:leading-[92.2px]">
            <span className="me-2 inline-block opacity-0">Nikmat, </span>
            <span className="me-2 inline-block opacity-0">Sedap, </span>
            <span className="me-2 inline-block opacity-0">Mantap</span>
          </h1>
          <p className="hero-caption mt-2 font-inter text-base opacity-0 text-gray">
            Siomay Lumajang dibuat dengan ikan tenggiri asli Bandung, memberikan rasa yang tak tertandingi. Setiap gigitan membawa kenikmatan seolah-olah Anda sedang berada di jantung Bandung.
          </p>
          <ButtonLink className='hero-button inline-block cursor-pointer mt-5 rounded-full bg-gradient-to-b from-[#FD831E] to-[#FF6D1A] px-5 py-3 text-white opacity-0 shadow-lg' to='about' smooth={true} offset={-120}>
            Lebih Lengkap
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
