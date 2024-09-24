type ProductProps = {
  productBrand: string;
  productTitle: string;
  productPrice: number;
  productImage: string;
};

type ProductsPanelProps = {
  productsPanel: ProductProps[];
};

export default function ProductsPanel({ productsPanel }: ProductsPanelProps) {
  return (
    <div className="grid grid-cols-3 gap-y-8 gap-x-6 w-full">
      {productsPanel.map((product, index) => (
        <Card
          key={index}
          productBrand={product.productBrand}
          productTitle={product.productTitle}
          productPrice={product.productPrice}
          productImage={product.productImage}
        />
      ))}
    </div>
  );
}

function Card({
  productBrand,
  productTitle,
  productPrice,
  productImage,
}: ProductProps) {
  return (
    <div className="flex space-y-4 flex-col">
      <img src={productImage} className="aspect-square rounded-3xl" />
      <div>
        <p>{productBrand}</p>
        <p>{productTitle}</p>
        <p>${productPrice}</p>
      </div>
    </div>
  );
}
