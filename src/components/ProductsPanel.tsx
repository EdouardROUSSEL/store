type ProductProps = {
  productBrand: string;
  productTitle: string;
  productPrice: number;
  productImage: string;
  pageLink: string;
};

type ProductsPanelProps = {
  productsPanel: ProductProps[];
};

export default function ProductsPanel({ productsPanel }: ProductsPanelProps) {
  return (
    <div className="w-full overflow-x-scroll px-6 sm:px-0">
      <div className="flex sm:grid-cols-3 sm:grid sm:space-x-0 sm:gap-y-8 sm:gap-x-6">
        {productsPanel.map((product, index) => (
          <Card
            pageLink={product.pageLink}
            key={index}
            productBrand={product.productBrand}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
            productImage={product.productImage}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  pageLink,
  productBrand,
  productTitle,
  productPrice,
  productImage,
}: ProductProps) {
  return (
    <a
      className="flex space-y-4 flex-col min-w-[64vw] max-w-md sm:min-w-0 sm:max-w-full pr-6 sm:pr-0"
      href={pageLink}
    >
      <img src={productImage} className="aspect-square rounded-3xl" />
      <div>
        <p className="font-wider font-light">{productBrand}</p>
        <p>{productTitle}</p>
        <p>${productPrice}</p>
      </div>
    </a>
  );
}
