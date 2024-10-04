"use client";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      // Vérifie si l'utilisateur défile vers le bas
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 40); // Ajoute un seuil pour éviter les petites transitions
      setLastScrollY(currentScrollY);
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("click", handleClickOutside); // Ajoute l'écouteur de clics
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleClickOutside); // Retire l'écouteur lors du démontage
    };
  }, [lastScrollY]);

  return (
    <div
      className="sticky z-50 top-0 py-3 
      w-full text-sm md:text-base items-center"
    >
      <div
        ref={menuRef}
        className={`flex w-full flex-col transition-opacity transform delay-300 absolute  ${
          scrollingDown ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`w-full items-center flex bg-[#efefef] px-6 lg:py-3 ${
            isOpen ? "rounded-t-xl" : "rounded-xl"
          } 
           `}
        >
          <button
            className="lg:hidden w-1/3 -ml-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Hamburger
              toggled={isOpen}
              toggle={() => setIsOpen(!isOpen)}
              size={15}
            />
          </button>
          <div className="w-1/3 flex-row space-x-6 hidden lg:flex">
            <Link href="/category/all">All</Link>
            <Link href="/category/tech">Tech</Link>
            <Link href="/category/decoration">Decoration</Link>
            <Link href="/category/lamp">Lamp</Link>
            <Link href="/about">About</Link>
            <Link href="#">Instagram</Link>
          </div>
          <div className="flex-grow text-center w-1/3">
            <Link href="/">LOGO</Link>
          </div>
          <Link href="#" className="w-1/3 text-end">
            Panier
          </Link>
        </div>

        <div
          className={`bg-[#efefef] rounded-b-lg  ${
            isOpen ? "opacity-100 py-2" : "opacity-0"
          }`}
        >
          {isOpen && (
            <span className="flex flex-row w-full justify-between space-x-6 px-6">
              <Link
                href="/category/all"
                onClick={() => setIsOpen(!isOpen)}
                className=""
              >
                All
              </Link>
              <Link
                href="/category/tech"
                onClick={() => setIsOpen(!isOpen)}
                className=""
              >
                Tech
              </Link>
              <Link
                href="/category/decoration"
                onClick={() => setIsOpen(!isOpen)}
                className=""
              >
                Decoration
              </Link>
              <Link
                href="/category/lamp"
                onClick={() => setIsOpen(!isOpen)}
                className=""
              >
                Lamp
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(!isOpen)}
                className=""
              >
                About
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
