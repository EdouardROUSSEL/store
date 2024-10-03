import ProductsList from "../../data/Products.json";
import { ProductListTypes } from "@/app/types";
import ProductsPanel from "@/components/ProductsPanel";

interface ProductParams {
  params: {
    id: string;
  };
}

const CategoryPage = ({ params }: ProductParams) => {
  const { id } = params;
  let productsInSameCategory = ProductsList as ProductListTypes;
  if (id !== "all") {
    productsInSameCategory = ProductsList.filter(
      (p) => p.idCategory === id
    ) as ProductListTypes;
  }

  let categoryName = "";
  switch (id) {
    case "lamp":
      categoryName = "lampe";
      break;
    case "tech":
      categoryName = "tech";
      break;
    case "decoration":
      categoryName = "décoration";
      break;
  }

  return (
    <div className="flex flex-col items-center space-y-24 justify-start">
      <h1 className="capitalize text-7xl">{categoryName}</h1>
      <ProductsPanel
        relatedProductList={productsInSameCategory as ProductListTypes}
      />
    </div>
  );
};

export default CategoryPage;
