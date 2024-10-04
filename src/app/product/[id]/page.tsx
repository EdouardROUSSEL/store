import ProductCarousel from "@/components/ProductCarousel";
import ProductsList from "../../data/Products.json";
import { Product, ProductListTypes } from "@/app/types";
import RelatedProductsPanel from "@/components/ProductsPanel";
import Link from "next/link";
import Button from "@/components/Button";

interface ProductParams {
  params: {
    id: string;
  };
}

const ProductPage = ({ params }: ProductParams) => {
  const { id } = params;

  const product = ProductsList.find((product) => product.idProduct === id);

  if (!product) return <div>Produit non trouvé</div>;

  return (
    <div className="flex flex-col sm:space-y-20 space-y-6 pt-20 sm:mb-20 mb-6 items-center px-3 sm:px-12">
      <ProductCarousel product={product as Product} />
      <div className="flex flex-col items-center space-y-12">
        <h1 className="text-6xl">Related</h1>
        <RelatedProductsPanel
          relatedProductList={ProductsList as ProductListTypes}
        />
      </div>
      <Link href="/category/all">
        <Button content="Découvrir tout les produits" />
      </Link>
    </div>
  );
};

export default ProductPage;
