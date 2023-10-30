"use client"

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOffset, setIsOffset] = useState(false);


  useEffect(() => {
    window.onscroll = () => {
      const navbar: HTMLElement | null = document.querySelector("#navbar");
      if (navbar) {
        if (window.scrollY > navbar.offsetTop) setIsOffset(true);
        else setIsOffset(false);
      }
    };


  }, []);

  const Links = [
    { name: "Home", link: "hero", offset: -200 },
    { name: "Tentang kami", link: "about", offset: -70 },
    { name: "Tim kami", link: "team", offset: -70},
    { name: "Galeri", link: "gallery", offset: -100 },
    { name: "Testimoni", link: "testimonies", offset: -100 },
  ];

  return (
    <header
      className={`${
        isOffset ? "fixed shadow-lg" : "relative"
      } left-0 top-0 z-10 w-full bg-orange-300 transition duration-200 ${
        isOffset ? "" : "lg:absolute lg:bg-transparent"
      }  lg:py-3"`}
      id="navbar"
    >
      <div className="container max-w-full">
        <div className="mx-auto flex items-center justify-between bg-orange-300 py-4 lg:bg-transparent">
          <h1 className="font-playfair text-3xl font-black">
            Siomay <span className="text-primary">Lumajang</span>
          </h1>

          <button
            id="hamburger"
            type="button"
            className={`block lg:hidden ${isOpen ? "hamburger-active" : ""}`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span className="hamburger-line origin-top-left"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line origin-bottom-left"></span>
          </button>
          <ul
            className={`absolute left-0 z-[-1] w-full bg-inherit pl-9 transition-all duration-500  ease-in-out lg:static lg:z-auto lg:flex lg:w-auto lg:items-center lg:bg-transparent ${
              isOpen ? "top-16 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="my-7 lg:my-0 lg:ml-8">
                <Link
                  to={link.link}
                  smooth
                  offset={link.offset}
                  className="hover:text-gray-400 font-medium text-black duration-500 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
