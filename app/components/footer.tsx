
import { Link } from "react-scroll";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const Links = [
    { name: "Home", link: "hero", offset: -200 },
    { name: "Tentang kami", link: "about", offset: -100 },
    { name: "Tim kami", link: "team", offset: -100 },
    { name: "Galeri", link: "gallery", offset: -250 },
    { name: "Testimoni", link: "testimonies", offset: -50 },
  ];
  return (
    <footer className="mt-14">
      <div className="container max-w-full bg-[#282932] py-16">
        <div className="flex flex-wrap justify-between gap-y-6 text-white flex-col md:flex-row md:gap-x-4">
          <div className="w-full lg:h-[203px] lg:w-[268.5px]">
            <h1 className="font-playfair text-3xl font-black">
              Siomay <span className="text-primary">Lumajang</span>
            </h1>
            <p className="mt-8 font-inter">
              Rasakan sendiri kenikmatan siomay khas Bandung yang telah dibawa ke kota pisang ini. Anda tidak akan kecewa.
            </p>
          </div>
          <div className="font-inter">
            <h3 className="back-line relative text-[19.2px] font-semibold">
              Links
            </h3>
            <ul className="mt-8 flex flex-col gap-y-5">
              {
                Links.map((link, i) => {
                  return (
                    <li key={i}>
                      <Link to={link.link} smooth="easeOutQuint" offset={link.offset} className="cursor-pointer" duration={800}>{link.name}</Link>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d246.85460114898098!2d113.22129110276165!3d-8.134671337346816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssdk%20santo%20yoseph%20lumajang!5e0!3m2!1sid!2sid!4v1688105481733!5m2!1sid!2sid" width={300} height={200} className="mt-8"></iframe>
          </div>

          <div className="font-inter">
            <h3 className="back-line relative text-[19.2px] font-semibold">
              Hubungi kami
            </h3>
            <ul className="mt-8 flex flex-col gap-y-5">
              <li>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="me-3 text-primary"
                />
                203, Envato ka Yents, Behind Alis Str, Melbourne, Australia.
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-3 text-primary" />
                +62 8523 251 7546
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="me-3 text-primary"
                />
                siomaylumajang@gmail.com
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} className="me-3 text-primary" />
                15.30 - 21.00 WIB
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container bg-[#373844] max-w-full">
        <div className="flex w-full h-14 font-inter items-center">
          <h4 className="mx-auto text-white">Created by <span className="text-primary font-bold">Iskandar</span></h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
