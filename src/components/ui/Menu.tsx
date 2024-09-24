"use client";
import { Fade as Hamburger } from "hamburger-react";
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
          <a href="#">All</a>
          <a href="#">Tech</a>
          <a href="#">Decoration</a>
          <a href="#">Lamp</a>
          <a href="#">Instagram</a>
        </div>

        <div className="flex-grow text-center w-1/3">
          <a href="#">LOGO</a>
        </div>
        <a href="#" className={`w-1/3 text-end ${isOpen ? "opacity-0" : ""}`}>
          Panier
        </a>
      </div>
      {isOpen && (
        <div className="bg-white flex flex-col w-full absolute left-0 px-6 h-screen space-y-6 mt-6">
          <a
            href="#"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            All
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            Tech
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            Decoration
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text tracking-wider"
          >
            Lamp
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text tracking-wide"
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text tracking-wide"
          >
            Instagram
          </a>
        </div>
      )}
    </div>
  );
}
