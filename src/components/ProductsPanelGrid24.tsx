"use client";

import { ProductListTypes } from "@/app/types";
import ProductCard from "./ProductCard";

export default function ProductsPanelGrid({
  relatedProductList,
  flexMobil = false,
  className,
}: {
  relatedProductList: ProductListTypes;
  flexMobil?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className={`grid-cols-2 md:grid-cols-4 grid gap-y-6 sm:gap-x-6 gap-x-4`}
      >
        {relatedProductList.map((product, index) => (
          <ProductCard key={index} product={product} flexMobil={flexMobil} />
        ))}
      </div>
    </div>
  );
}
