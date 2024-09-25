import ProductsList from "../../products.json";

interface ProductParams {
  params: {
    id: string;
  };
}

const CategoryPage = ({ params }: ProductParams) => {
  const { id } = params;

  const productsInSameCategory = ProductsList.filter((p) => p.category === id);

  return (
    <div>
      <h1>Produits dans la catégorie {productsInSameCategory[0].category}</h1>
      <div>
        {productsInSameCategory.map((p, index) => (
          <div key={index}>
            <h2>{p.productTitle}</h2>
            <p>Marque: {p.productBrand}</p>
            <p>Prix: ${p.productPrice}</p>
            <img src={p.productImage[0]} alt={p.productTitle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
