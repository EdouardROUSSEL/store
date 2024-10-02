import Link from "next/link";
import Button from "./Button";
import { ProductListTypes } from "@/app/types";

export default function CategoryPanelCard({
  relatedProductList,
}: {
  relatedProductList: ProductListTypes;
}) {
  return (
    <div className="md:grid md:grid-cols-3 gap-y-8 gap-x-6 space-y-4 md:space-y-0">
      {relatedProductList.map((product, index) => (
        <CategoryCard
          key={index}
          productImage={product.productImage[0]}
          categoryLink={product.category}
        />
      ))}
    </div>
  );
}

function CategoryCard({
  productImage,
  categoryLink,
}: {
  productImage: string;
  categoryLink: string;
}) {
  return (
    <div
      className="h-full rounded-3xl items-end justify-end flex p-6 aspect-square"
      style={{
        backgroundImage: `url(${productImage})`,
        backgroundSize: "cover",
      }}
    >
      <Link href={"/category/" + categoryLink}>
        <Button content={categoryLink} />
      </Link>
    </div>
  );
}
