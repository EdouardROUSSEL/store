import { ProductListTypes } from "@/app/types";
import ProductsPanelGrid from "./ProductsPanelGrid";
import Link from "next/link";

export default function CategoryCard({
  products,
  categoryTitle,
  categoryText,
  path,
  addButton = true,
}: {
  path: string;
  categoryTitle: string;
  categoryText: string;
  products: ProductListTypes;
  addButton?: boolean;
}) {
  return (
    <div className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-10">
      <Link
        href={path}
        className="text-white flex flex-col justify-end p-6 aspect-square md:w-1/2 w-full bg-gray-300 rounded-3xl "
      >
        <p className="uppercase md:text-lg">{categoryTitle}</p>
        <p className="text-xs md:text-sm">{categoryText}</p>
        {addButton && (
          <p className="hidden md:block underline underline-offset-4 pt-2">
            Découvrir
          </p>
        )}
      </Link>
      <ProductsPanelGrid
        className="sm:w-1/2"
        colNumber={{ sm: 2, md: 2 }}
        relatedProductList={products.slice(0, 4) as ProductListTypes}
      />
    </div>
  );
}
