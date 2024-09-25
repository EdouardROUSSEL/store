import ProductsList from "../../products.json";
import { Product } from "@/app/types";
import ProductsPanel from "@/components/ProductsPanel";

interface ProductParams {
  params: {
    id: string;
  };
}

const CategoryPage = ({ params }: ProductParams) => {
  const { id } = params;
  let productsInSameCategory = ProductsList as Product[];
  if (id !== "all") {
    productsInSameCategory = ProductsList.filter(
      (p) => p.category === id
    ) as Product[];
  }

  return (
    <div>
      <ProductsPanel productsList={productsInSameCategory} />
    </div>
  );
};

export default CategoryPage;
