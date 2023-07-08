import Swiper from "swiper";
import { Autoplay} from 'swiper/modules';
import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";
import { trigger } from "../helper";

import "swiper/css";
import "swiper/css/pagination";
import lightGallery from "lightgallery";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import Line from "../../public/assets/image/line.png";
import Gallery1 from "../../public/assets/image/gallery1.png";
import Gallery2 from "../../public/assets/image/gallery2.png";
import Gallery3 from "../../public/assets/image/gallery3.png";
import Gallery4 from "../../public/assets/image/food.jpg";
import { LightGallery } from "lightgallery/lightgallery";
import { SwiperOptions } from "swiper/types";

import Image from "next/image";
const Gallery = () => {
  const images = [Gallery1, Gallery2, Gallery3, Gallery4];
  const lgSwiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log(images)
    let lg: LightGallery;
    const swiperParams: SwiperOptions = {
      modules: [Autoplay],
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 15,
      centeredSlides: true,
      centeredSlidesBounds: true,
      breakpoints: {
        600: {
          slidesPerView: 1.6,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 3,
        },
      },

      on: {
        init: function () {
          if (lgSwiperRef.current) {
            lg = lightGallery(lgSwiperRef.current, {
              plugins: [lgZoom, lgThumbnail],
            });

            lgSwiperRef.current.addEventListener("lgBeforeClose", () => {
              swiper.slideTo(lg.index, 0);
            });
          }
        },
      },
    };
    const swiper = new Swiper("#gallery", swiperParams);


    //Animasi

    const galleryTitle = document.querySelector(".gallery-title")
    trigger(galleryTitle, () => {
      galleryTitle && anime.timeline().
        add({
          targets: ".gallery-title",
          translateX: [200, 0],
          opacity: [0, 1],
          skewX: ["40deg", 0],
          easing: "easeOutBack",
          duration: 1000
        }).
        add({
          targets: ".gallery-line",
          scaleX: 30,
          opacity: [0, 1],
          easing: "easeOutBack",
          duration: 1000
        })
    })


    return () => {
      if (lg) {
        lg.destroy(); // Destroy the lightGallery instance when the component is unmounted or before the effect runs again
      }
    };




  }, []);

  return (
    <section className="mt-7 pt-14">
      <div className="container max-w-full">
        <h2 className="gallery-title text-center font-playfair text-3xl opacity-0 sm:text-[35.2px] md:text-xl">
          Galeri Kami
        </h2>
        <Image src={Line} alt="line" className="gallery-line mx-auto mt-3 h-1 w-1 opacity-0s" />
        <div id="gallery" className="swiper mt-16">
          <div className="swiper-wrapper" ref={lgSwiperRef}>
            {images.map((item, index) => (
              <a
                href={item.src}
                key={index}
                className="swiper-slide flex h-[270px] rounded-lg justify-center overflow-hidden px-0 sm:h-[320px] lg:h-[306px]"
              >
                <Image src={item} alt={item.src} className="w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
