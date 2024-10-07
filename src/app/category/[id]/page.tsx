import ProductsList from "../../data/Products.json";
import { ProductListTypes } from "@/app/types";
import CategoryCard from "@/components/CategoryCard";
import ProductsPanelGrid24 from "@/components/ProductsPanelGrid24";

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
    <div className="flex flex-col items-center space-y-6 justify-start px-3 sm:px-6 md:py-20 py-12">
      <CategoryCard
        categoryText="Delightful lighting objects for every room in your home"
        categoryTitle={categoryName}
        path={"/category/lamp"}
        products={ProductsList as ProductListTypes}
        addButton={false}
      />

      <ProductsPanelGrid24
        relatedProductList={productsInSameCategory as ProductListTypes}
      />
    </div>
  );
};

export default CategoryPage;
