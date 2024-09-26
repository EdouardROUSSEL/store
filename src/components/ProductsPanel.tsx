"use client";

import { ProductListTypes } from "@/app/types";
import ProductCard from "./ProductCard";

export default function ProductsPanel({
  productsList,
  flexMobil = false,
}: {
  productsList: ProductListTypes;
  flexMobil?: boolean;
  colNumber?: number;
}) {
  return (
    <div className={`w-full px-6 md:px-0 ${flexMobil ?? "overflow-x-scroll "}`}>
      <div
        className={` ${
          flexMobil
            ? "flex sm:grid-cols-3 sm:grid sm:gap-y-8 sm:gap-x-6"
            : "sm:grid-cols-3 grid-cols-2 grid gap-y-8 sm:gap-x-6 gap-x-4 "
        }`}
      >
        {productsList.map((product, index) => (
          <ProductCard key={index} product={product} flexMobil={flexMobil} />
        ))}
      </div>
    </div>
  );
}
