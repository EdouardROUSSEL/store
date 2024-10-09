"use client";
import React from "react";
import Button from "./Button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Image from "next/image";

import { Product } from "@/app/types";

export default function ProductCarousel({ product }: { product: Product }) {
  return (
    <div className="w-full md:flex flex-col md:flex-row items-center justify-center sm:max-w-[480px] md:max-w-none md:space-y-none space-y-2 ">
      <Carousel
        className="md:w-1/2 w-full aspect-[4/5] md:aspect-square rounded-lg md:rounded-3xl overflow-hidden"
        opts={{
          loop: true,
        }}
        plugins={[
          Fade({ active: true }),
          Autoplay({
            delay: 5000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
            stopOnFocusIn: false,
          }),
        ]}
      >
        <CarouselContent className="md:aspect-square aspect-[4/5]">
          {product.productImage.map((imageSRC, index) => (
            <CarouselItem key={index} className="md:aspect-square aspect-[4/5]">
              <Image
                width={1000}
                height={1000}
                alt={"image " + index}
                src={imageSRC}
                className="rounded-3xl object-cover md:aspect-square aspect-[4/5]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="md:w-1/2">
        <div className="xl:pl-16 md:p-none md:pl-12 p-3 xl:max-w-[35rem] md:max-w-[29rem] md:mx-auto">
          <h2 className="capitalize md:text-4xl xl:text-5xl text-3xl">
            {product.productName}
          </h2>
          <p className="md:text-xl xl:text-2xl text-lg font-normal pt-0 md:pt-6 pb-6">
            ${product.productPrice}
          </p>
          <div className="flex flex-col-reverse  md:flex-col space-y-8 space-y-reverse md:space-y-8">
            <p className=" md:text-lg xl:text-xl text-base">
              {product.productDescription}
            </p>
            <Button content="Order" className="w-full md:w-fit" />
          </div>
        </div>
      </div>
    </div>
  );
}
