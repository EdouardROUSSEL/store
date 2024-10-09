import { ProductListTypes } from "@/app/types";
import ProductsPanelGrid from "./ProductsPanelGrid2";
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
    <div className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-10 ">
      <Link
        href={path}
        className="text-white flex flex-col justify-end p-6 aspect-square md:w-1/2 w-full bg-gray-300 rounded-3xl "
      >
        <h2 className="uppercase text-xl md:text-lg">{categoryTitle}</h2>
        <h3 className="text-lg md:text-xl w-2/3">{categoryText}</h3>
        {addButton && (
          <p className="hidden md:block underline underline-offset-4 pt-2">
            Découvrir
          </p>
        )}
      </Link>
      <ProductsPanelGrid
        className="md:w-1/2"
        relatedProductList={products.slice(0, 4) as ProductListTypes}
      />
    </div>
  );
}
