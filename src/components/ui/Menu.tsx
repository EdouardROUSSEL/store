"use client";
import { Fade as Hamburger } from "hamburger-react";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
    <div className="px-6 md:px-0 py-6 sticky top-0 z-50 bg-white w-full text-sm md:text-base">
      <div className="flex w-full items-center">
        <button
          className="-ml-4 md:hidden w-1/3"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger size={15} />
        </button>
        <div className=" w-1/3 flex-row space-x-6 hidden md:flex">
          <Link href="/category/all">All</Link>
          <Link href="/category//tech">Tech</Link>
          <Link href="/category//decoration">Decoration</Link>
          <Link href="/category//lamp">Lamp</Link>
          <Link href="/category//about">About</Link>
          <Link href="#">Instagram</Link>
        </div>

        <div className="flex-grow text-center w-1/3">
          <Link href="#">LOGO</Link>
        </div>
        <Link
          href="#"
          className={`w-1/3 text-end ${isOpen ? "opacity-0" : ""}`}
        >
          Panier
        </Link>
      </div>
      {isOpen && (
        <div className="bg-white flex flex-col w-full absolute left-0 px-6 h-screen space-y-6 mt-6">
          <Link
            href="/all"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            All
          </Link>
          <Link
            href="/tech"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            Tech
          </Link>
          <Link
            href="/decortion"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            Decoration
          </Link>
          <Link
            href="/lamp"
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
