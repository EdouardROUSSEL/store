import ProductsList from "../../products.json";

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
      <h1>Page</h1>
      <p>Marque: {product.productBrand}</p>
    </div>
  );
};

export default ProductPage;
