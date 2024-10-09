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

const tab = [
  {
    question: "spécification",
    content: [
      {
        title: "Dimensions",
        subContent: "11” H x 5” D",
      },
      {
        title: "Bulb (included)",
        subContent:
          "1x E12 bulb 2700K (soft warm white), 210 lumens, non-dimmable",
      },
      {
        title: "Weight",
        subContent: "1.3 lbs",
      },
    ],
  },
  {
    question: "Shipping and Returns",
    content: [
      {
        title: "Shipping",
        subContent: "This product ships to: North America",
      },
      {
        title: "Returns",
        subContent:
          "This product can be returned or exchanged within 30 days of delivery.",
      },
    ],
  },
  {
    question: "FAQ",
    content: [
      {
        title: "Can I replace the bulb?",
        subContent: "Yes! This product is compatible with any LED bulb.",
      },
    ],
  },
];

const ProductPage = ({ params }: ProductParams) => {
  const { id } = params;

  const product = ProductsList.find((product) => product.idProduct === id);

  if (!product) return <div>Produit non trouvé</div>;

  return (
    <div className="flex flex-col sm:space-y-20 space-y-12 py-12 md:py-24 items-center px-3 sm:px-6">
      <section className="w-full md:space-y-16 space-y-4">
        <ProductCarousel product={product as Product} />
        <div className="w-full space-y-2 px-3 md:px-0">
          <details className="md:px-3 px-0 group/details [&_svg]:open:-rotate-180 py-2 flex space-y-2 text-sm">
            <summary className="flex cursor-pointer list-none justify-between items-center [&::-webkit-details-marker]:hidden ">
              <p className="uppercase">{tab[0].question}</p>
              <svg
                fill="#000000"
                height="10px"
                width="10px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>
                </g>
              </svg>
            </summary>
            <div
              className="flex flex-col space-y-2"
              style={{
                fontFamily: "Courier Prime, monospace",
              }}
            >
              {tab[0].content.map((data, index) => (
                <span key={index}>
                  <p
                    className="py-[2px] inline mr-1"
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {data.title + " :"}
                  </p>
                  <p className="inline">{data.subContent}</p>
                </span>
              ))}
              <p>
                Due to our 3D printing process, each product will have minor
                variations in color and texture. This is part of what makes each
                item unique!
              </p>
            </div>
          </details>
          <hr className="border border-t-0 border-black" />
          <details className="md:px-3 px-0 group/details [&_svg]:open:-rotate-180 py-2 flex space-y-2 text-sm">
            <summary className="flex cursor-pointer list-none justify-between items-center [&::-webkit-details-marker]:hidden ">
              <p className="uppercase ">{tab[1].question}</p>
              <svg
                fill="#000000"
                height="10px"
                width="10px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>
                </g>
              </svg>
            </summary>
            <div
              className="flex  flex-col space-y-2"
              style={{
                fontFamily: "Courier Prime, monospace",
              }}
            >
              {tab[1].content.map((data, index) => (
                <span key={index}>
                  <p
                    className="py-[2px] inline mr-1"
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {data.title + " :"}
                  </p>
                  <p className="inline">{data.subContent}</p>
                </span>
              ))}
              <Link href={"/FAQ"}>
                <p className="underline">View full return policy</p>
              </Link>
            </div>
          </details>
          <hr className="border border-t-0 border-black" />
          <details className="md:px-3 px-0 group/details [&_svg]:open:-rotate-180 py-2 flex space-y-2 text-sm">
            <summary className="flex cursor-pointer list-none justify-between items-center [&::-webkit-details-marker]:hidden ">
              <p className="uppercase ">{tab[2].question}</p>
              <svg
                fill="#000000"
                height="10px"
                width="10px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>
                </g>
              </svg>
            </summary>
            <div
              className="flex  flex-col space-y-2"
              style={{
                fontFamily: "Courier Prime, monospace",
              }}
            >
              {tab[2].content.map((data, index) => (
                <span key={index}>
                  <p
                    className="py-[2px] inline mr-1"
                    style={{
                      fontWeight: "700",
                    }}
                  >
                    {data.title + " :"}
                  </p>
                  <p className="inline">{data.subContent}</p>
                </span>
              ))}
              <Link href={"/FAQ"}>
                <p className="underline">View full FAQ</p>
              </Link>
            </div>
          </details>
        </div>
      </section>
      <section>
        <div className="text-white flex flex-col space-y-2 w-screen md:rounded-3xl md:w-full aspect-[5/3] justify-center items-center md:aspect-[5/2] bg-gray-300">
          <h1 className="text-2xl md:text-3xl text-center w-4/5 md:w-1/2">
            We design, manufacture, assemble, and ship all of our products on a
            made-to-order basis from our small studio in Paris, France
          </h1>
        </div>
      </section>
      <section className="flex flex-col items-center space-y-12">
        <h2 className="text-4xl">Related</h2>
        <RelatedProductsPanel
          relatedProductList={ProductsList as ProductListTypes}
        />
      </section>
      <Link href="/category/all">
        <Button content="Découvrir tout les produits" />
      </Link>
    </div>
  );
};

export default ProductPage;
