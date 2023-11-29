"use client"
import Grafis from "@/public/assets/image/grafis.png"
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import anime from "animejs";

import { formatPhone } from "../helper";
import Image from "next/image";

const Footer = () => {
  const Links = [
    { name: "Home", link: "hero", offset: -200 },
    { name: "Tentang kami", link: "about", offset: -100 },
    { name: "Tim kami", link: "team", offset: -100 },
    { name: "Galeri", link: "gallery", offset: -250 },
    { name: "Testimoni", link: "testimonies", offset: -50 },
  ];
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

  return (
    <footer className="mt-14">
      <div className="container max-w-full bg-[#282932] py-16">
        <div className="flex flex-wrap justify-between gap-y-6 text-white flex-col md:flex-row md:gap-x-4">
          <div className="w-full lg:h-[203px] lg:w-[268.5px]">
            <div className="flex gap-x-3">
              <Image src={Grafis} alt="Siomay Lumajang" sizes="(max-width: 576px) 300px, 600px" width={100}/>
            <h3 className="font-playfair text-3xl font-black mt-3">
              Siomay <span className="block text-primary">Lumajang</span>
            </h3>
            </div>
            <p className="mt-8 font-inter">
              Rasakan sendiri kenikmatan Siomay Lumajang yang telah menjadi khas kota pisang ini. Anda tidak akan kecewa.
            </p>
          </div>
          <div className="font-inter">
            <h3 className="back-line relative text-[19.2px] font-semibold">
              Quick Links
            </h3>
            <ul className="mt-8 flex flex-col gap-y-5">
              {
                Links.map((link, i) => {
                  return (
                    <li key={i}>
                      <button onClick={() => animateScroll(link.link)} type="button" className="cursor-pointer hover:text-primary">
                        {link.name}
                      </button>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div>
            <h3 className="back-line relative text-[19.2px] font-semibold">
              Lokasi
            </h3>
            <iframe title="Siomay Lumajang" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d246.85460114898098!2d113.22129110276165!3d-8.134671337346816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssdk%20santo%20yoseph%20lumajang!5e0!3m2!1sid!2sid!4v1688105481733!5m2!1sid!2sid" width={300} height={200} className="mt-8"></iframe>
          </div>

          <div className="font-inter">
            <h3 className="back-line relative text-[19.2px] font-semibold">
              Hubungi kami
            </h3>
            <ul className="mt-8 flex flex-col gap-y-5">
              <li className="hover:text-primary">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="me-3 text-[18px] text-primary"
                />
                <a href="https://maps.app.goo.gl/WB9KMWS2ZsJ7J1yx6">Jl Panjaitan, Citrodiwangsan, Lumajang, Jawa Timur
                  depan SDK Santo Yoshep</a>
              </li>
              <li className="hover:text-primary">
                <FontAwesomeIcon icon={faPhone} className="me-3 text-[18px] text-primary" />
                <a href={process.env.NEXT_PUBLIC_WA_LINK}>
                  {'0'+formatPhone(process.env.NEXT_PUBLIC_WA as string)}
                </a>
              </li>
              <li className="hover:text-primary">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-3 text-[18px] text-primary"
                />
                <a href="mailto:siomaylumajang@gmail.com">
                  siomaylumajang@gmail.com
                </a>
              </li>
              <li className="hover:text-primary">
                <FontAwesomeIcon icon={faClock} className="me-3 text-[18px] text-primary" />
                15.30 - 21.00 WIB
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bg-[#373844] max-w-full">
        <div className="flex w-full h-14 font-inter items-center">
          <h4 className="mx-auto text-white">Created by <a href="https://adiiskandar.my.id" className="text-primary font-bold">Iskandar</a></h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
