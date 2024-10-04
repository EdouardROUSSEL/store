import FAQCard from "@/components/FAQCard";
import Link from "next/link";
import FAQ from "../app/data/FAQ.json";
import Products from "./data/Products.json";
import { ProductListTypes } from "./types";
import ProductsPanel from "@/components/ProductsPanel";
import CategoryCard from "@/components/CategoryCard";

export default function Page() {
  return (
    <div className="space-y-12">
      <section className="w-full flex h-[96vh] lg:h-[97vh] pt-10 px-3 sm:px-6">
        <div
          className="rounded-[24px] bg-gray-300  w-full flex p-6 md:p-10 items-end animate-scale-down"
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/564x/67/fd/c1/67fdc13d2c33c32f5793129037ee694a.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="md:w-1/2 w-full text-hidden text-white">
            <p className=" text-xl uppercase">description du produit</p>
            <p className="underline underline-offset-4">
              Découvrir les produits
            </p>
          </div>
        </div>
      </section>
      <section className="md:px-6">
        <div className="text-white flex flex-col space-y-2 w-screen md:rounded-3xl md:w-full aspect-[5/3] justify-center items-center md:aspect-[5/2] bg-gray-300">
          <p className="text-2xl md:text-3xl text-center w-4/5 md:w-1/2">
            Design et produit des lampes, décoration et accessoire à Paris,
            France .
          </p>
          <Link href={"/about"}>
            <p className="text-sm underline font-light place-self-start underline-offset-4">
              A propos
            </p>
          </Link>
        </div>
      </section>

      <section className="px-3 sm:px-6 w-full">
        <ProductsPanel
          flexMobil={true}
          relatedProductList={Products.slice(0, 5) as ProductListTypes}
        />
      </section>
      <section className="md:px-6">
        <div className="text-white flex flex-col space-y-2 w-screen md:rounded-3xl md:w-full aspect-[5/3] justify-center items-center md:aspect-[5/2] bg-gray-300">
          <p className="text-2xl md:text-3xl text-center w-4/5 md:w-1/2">
            We design, manufacture, assemble, and ship all of our products on a
            made-to-order basis from our small studio in Paris, France
          </p>{" "}
        </div>
      </section>
      <section className="px-3 sm:px-6 w-full">
        <CategoryCard
          categoryText="Delightful lighting objects for every room in your home"
          categoryTitle={"Lampe de table"}
          path={"/category/lamp"}
          products={Products as ProductListTypes}
        />
      </section>
      <section className="px-3 sm:px-6 w-full">
        <Link
          href={"/category/tech"}
          className="flex justify-end flex-col w-full md:w-full aspect-square bg-gray-300 md:rounded-3xl text-white p-6 md:aspect-[5/2] rounded-3xl"
        >
          <p className="uppercase md:text-lg">Dock ER06</p>
          <p className="text-xs md:text-sm">
            We design, manufacture, assemble, and ship all of our products
          </p>
          <p className="underline underline-offset-4 hidden md:block">
            Découvrir
          </p>
        </Link>
      </section>
      <section className="px-3 sm:px-6 w-full">
        <div
          className="aspect-[8/10] md:aspect-[10/7] w-full flex items-end md:items-center rounded-3xl p-6 grayscale justify-center "
          style={{
            backgroundImage:
              "url(https://i.pinimg.com/564x/67/fd/c1/67fdc13d2c33c32f5793129037ee694a.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center text-white space-y-2 md:w-1/3 w-2/3">
            <p className="uppercase font-light text-sm  ">Coming soon</p>
            <p className="text-3xl md:text-5xl">Curated by</p>
            <p className="font-light md:text-xl md:font-normal ">
              Creators and exports share products that enrich their lives?
            </p>
          </div>
        </div>
      </section>

      <section className="md:flex flex flex-col md:flex-row md:gap-6 pb-6 aspect-[8/10] w-full max-h-[50vh] md:max-h-[35vh] px-3 sm:px-6">
        <img
          src="https://creme-atelier.com/cdn/shop/files/300324_CremeAtelier0528.jpg?v=1713947074"
          className="md:w-2/3 rounded-3xl object-cover hidden md:block h-auto"
        />
        <div className="space-y-2 md:w-1/3 overflow-y-scroll no-scrollbar h-auto">
          {FAQ.map((data, index) => (
            <FAQCard
              key={index}
              question={data.question}
              reponse={data.reponse}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
