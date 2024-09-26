"use client";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      // Vérifie si l'utilisateur défile vers le bas
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 50); // Ajoute un seuil pour éviter les petites transitions
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`md:px-12 px-6 md:py-8 py-2 sticky top-0 z-50 bg-white w-full text-sm md:text-base items-center
      transition-transform duration-300 transform ${
        scrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex w-full items-center">
        <button
          className="-ml-4 md:hidden w-1/3 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger size={15} />
        </button>
        <div className="w-1/3 flex-row space-x-6 hidden md:flex">
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
        <Link
          href="#"
          className={`w-1/3 text-end ${isOpen ? "opacity-0" : ""}`}
        >
          Panier
        </Link>
      </div>
      {isOpen && (
        <div className="bg-white flex flex-col w-full absolute left-0 px-6 h-screen space-y-6 mt-2">
          <Link
            href="/category/all"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            All
          </Link>
          <Link
            href="/category/tech"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            Tech
          </Link>
          <Link
            href="/category/decoration"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            Decoration
          </Link>
          <Link
            href="/category/lamp"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            Lamp
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text tracking-wide"
          >
            About
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text tracking-wide"
          >
            Instagram
          </Link>
        </div>
      )}
    </div>
  );
}
