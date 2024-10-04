"use client";

import { ProductListTypes } from "@/app/types";
import ProductCard from "./ProductCard";

type ColNumber = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
};

export default function ProductsPanelGrid({
  relatedProductList,
  flexMobil = false,
  colNumber = { sm: 2, md: 4 },
  className,
}: {
  relatedProductList: ProductListTypes;
  flexMobil?: boolean;
  colNumber?: ColNumber;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className={`grid-cols-${colNumber.sm} md:grid-cols-${colNumber.md} grid gap-y-6 sm:gap-x-6 gap-x-4`}
      >
        {relatedProductList.map((product, index) => (
          <ProductCard key={index} product={product} flexMobil={flexMobil} />
        ))}
      </div>
    </div>
  );
}
