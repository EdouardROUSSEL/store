"use client";

import { ProductListTypes } from "@/app/types";
import ProductCard from "./ProductCard";

export default function RelatedProductsPanel({
  relatedProductList,
  flexMobil = false,
}: {
  relatedProductList: ProductListTypes;
  flexMobil?: boolean;
  colNumber?: number;
}) {
  return (
    <div className="w-screen -ml-3 sm:-ml-6 md:-ml-10 ">
      <div
        className={` ${
          flexMobil
            ? "md:pr-6 md:pl-10 sm:pr-10 sm:pl-6 pr-3 pl-3 flex space-x-6 w-full overflow-scroll no-scrollbar"
            : "sm:grid-cols-3 grid-cols-2 grid gap-y-8 sm:gap-x-6 gap-x-4"
        }`}
      >
        {relatedProductList.map((product, index) => (
          <ProductCard key={index} product={product} flexMobil={flexMobil} />
        ))}
      </div>
    </div>
  );
}
