import ProductCarousel from "@/components/ProductCarousel";
import ProductsList from "../../products.json";
import { Product } from "@/app/types";

interface ProductParams {
  params: {
    id: string;
  };
}

const ProductPage = ({ params }: ProductParams) => {
  const { id } = params;

  const product = ProductsList.find((product) => product.pageLink === id);

  if (!product) return <div>Produit non trouvé</div>;

  return (
    <div>
      <ProductCarousel product={product as Product} />
    </div>
  );
};

export default ProductPage;
