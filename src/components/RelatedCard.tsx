import Link from "next/link";
import Button from "./Button";
import { ProductListTypes } from "@/app/types";

export default function CategoryPanelCard({
  relatedProductList,
}: {
  relatedProductList: ProductListTypes;
}) {
  return (
    <div className="w-screen -ml-3 md:w-full md:overflow-auto overflow-scroll md:grid md:grid-cols-3 flex  gap-y-8 gap-x-6 md:space-y-0 px-3 md:p-0 no-scrollbar">
      {relatedProductList.map((product, index) => (
        <CategoryCard
          key={index}
          productImage={product.productImage[0]}
          categoryLink={product.idCategory}
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
  let categoryName = "";
  switch (categoryLink) {
    case "lamp":
      categoryName = "lampes";
      break;
    case "tech":
      categoryName = "techs";
      break;
    case "decoration":
      categoryName = "décorations";
      break;
  }
  return (
    <div
      className="h-full min-h-72 rounded-3xl items-end justify-end flex p-6 aspect-square"
      style={{
        backgroundImage: `url(${productImage})`,
        backgroundSize: "cover",
      }}
    >
      <Link href={"/category/" + categoryLink}>
        <Button content={"Découvrir les " + categoryName} />
      </Link>
    </div>
  );
}
