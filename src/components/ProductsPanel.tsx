"use client";

import { ProductListTypes } from "@/app/types";
import ProductCard from "./ProductCard";

export default function RelatedProductsPanel({
  relatedProductList,
  flexMobil = false,
}: {
  relatedProductList: ProductListTypes;
  flexMobil?: boolean;
}) {
  return (
    <div className="w-full">
      <div
        className={` ${
          flexMobil
            ? "flex space-x-6 w-full overflow-scroll no-scrollbar"
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
