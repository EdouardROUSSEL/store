"use client";
import { Fade as Hamburger } from "hamburger-react";

export default function Menu() {
  return (
    <div className="px-6 md:px-0 py-6 sticky top-0 z-50 bg-white w-full">
      <div className="flex w-full items-center">
        <details className="md:hidden w-1/3 ">
          <summary className="flex items-center cursor-pointer -ml-4">
            <Hamburger size={15} />
          </summary>

          <ul className="flex flex-col space-y-5 absolute left-0 w-screen h-screen px-6 bg-white tracking-wider pt-10 text-3xl">
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">Tech</a>
            </li>
            <li>
              <a href="#">Decoration</a>
            </li>
            <li>
              <a href="#">Lamp</a>
            </li>
            <li>
              <a href="#" className="text-lg">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-lg">
                Instragram
              </a>
            </li>
          </ul>
        </details>

        <div className=" w-1/3 flex-row space-x-6 hidden md:flex">
          <a href="#">Buy</a>
          <a href="#">Science</a>
          <a href="#">FAQs</a>
          <a href="#">Futur</a>
          <a href="#">About</a>
        </div>

        <div className="flex-grow text-center w-1/3">
          <a href="#">LOGO</a>
        </div>

        <a href="#" className="w-1/3 text-end">
          Panier
        </a>
      </div>
    </div>
  );
}
