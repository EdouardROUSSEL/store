"use client";
import { Product, ProductListTypes } from "@/app/types";
import { useRouter } from "next/navigation";

export default function ProductsPanel({ productsList }: ProductListTypes) {
  return (
    <div className="w-full overflow-x-scroll px-6 sm:px-0">
      <div className="flex sm:grid-cols-3 sm:grid sm:space-x-0 sm:gap-y-8 sm:gap-x-6">
        {productsList.map((product: Product, index: number) => (
          <Card
            category={product.category}
            pageLink={product.pageLink}
            key={index}
            productBrand={product.productBrand}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
            productImage={product.productImage}
            productDescription={product.productDescription}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  pageLink,
  productBrand,
  productTitle,
  productPrice,
  productImage,
}: Product) {
  const router = useRouter();
  return (
    <a
      className="flex space-y-4 flex-col min-w-[64vw] max-w-md sm:min-w-0 sm:max-w-full pr-6 sm:pr-0 cursor-pointer"
      onClick={() => router.push(`/product/${pageLink}`)}
    >
      <img
        src={productImage[0]}
        className="aspect-square rounded-3xl"
        alt={productTitle}
      />
      <div>
        <p className="font-wider font-light">{productBrand}</p>
        <p>{productTitle}</p>
        <p>${productPrice}</p>
      </div>
    </a>
  );
}
