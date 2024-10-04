"use client";
import React from "react";
import Button from "./Button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/Carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-Fade";
import Image from "next/image";

import { Product } from "@/app/types";

export default function ProductCarousel({ product }: { product: Product }) {
  return (
    <div className="w-full md:flex flex-col md:flex-row items-center justify-center sm:max-w-[480px] md:max-w-none font-roboto md:space-y-none sm:space-y-8">
      <Carousel
        className="md:w-1/2 w-full"
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
        <CarouselContent className="aspect-square">
          {product.productImage.map((imageSRC, index) => (
            <CarouselItem key={index}>
              <Image
                width={500}
                height={500}
                alt={"image " + index}
                src={imageSRC}
                className="object-cover rounded-lg md:rounded-3xl w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="md:w-1/2">
        <div className="xl:pl-16 md:p-none md:pl-12 p-3 xl:max-w-[35rem] md:max-w-[29rem] md:mx-auto">
          <div className="xl:text-2xl md:text-xl text-lg pb-1">
            {product.productName}
          </div>
          <div className="font-medium md:text-4xl xl:text-5xl text-3xl">
            {product.productTitle}
          </div>
          <div className="md:text-xl xl:text-2xl text-lg font-normal pt-4 pb-6">
            ${product.productPrice}
          </div>
          <div className="flex flex-col-reverse  md:flex-col space-y-8 space-y-reverse md:space-y-8">
            <div className=" md:text-lg xl:text-xl text-base">
              {product.productDescription}
            </div>
            <Button content="Order" />
          </div>
        </div>
      </div>
    </div>
  );
}
