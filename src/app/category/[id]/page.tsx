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
      (p) => p.category === id
    ) as ProductListTypes;
  }

  return (
    <div>
      <ProductsPanel
        relatedProductList={productsInSameCategory as ProductListTypes}
      />
    </div>
  );
};

export default CategoryPage;
