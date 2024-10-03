import Button from "@/components/Button";
import FAQCard from "@/components/FAQCard";
import Link from "next/link";
import FAQ from "../app/data/FAQ.json";
import Products from "./data/Products.json";
import { ProductListTypes } from "./types";
import ProductsPanel from "@/components/ProductsPanel";
import CategoryCard from "@/components/CategoryCard";

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="w-full h-screen flex items-end md:-mt-[112px] -mt-[80px]">
        <div className="rounded-[24px] bg-gray-300 md:h-[calc(100%-112px)] h-[calc(100%-80px)] w-full flex p-6 md:p-16 items-end">
          <div className="space-y-4 md:w-1/2 w-full">
            <p className="text-white text-xl">description du produit</p>
            <Button content={"Order"} className="w-full md:w-fit rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-2">
        <p className="text-3xl ">
          Design et produit des lampes, décoration et accéssoire à Paris, France
          .
        </p>
        <Link href={"/about"}>
          <p className="text-sm underline font-light underline-offset-4">
            A propos
          </p>
        </Link>
      </section>

      <section className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <p className="text-2xl">Découvrir nos bestsellers</p>
          <Link href="/category/all">
            <p className="text-sm underline font-light underline-offset-4 text-end">
              Tout voir
            </p>
          </Link>
        </div>

        <ProductsPanel
          flexMobil={true}
          relatedProductList={Products.slice(0, 5) as ProductListTypes}
        />
      </section>
      <section className="h-96 bg-gray-400 rounded-3xl">
        <p>
          We design, manufacture, assemble, and ship all of our products on a
          made-to-order basis from our small studio in Paris, France
        </p>
      </section>
      <section>
        <CategoryCard
          categoryTitle={"Lampe de table"}
          categoryText={
            "Delightful lighting objects for every room in your home"
          }
          path={"/category/lamp"}
          products={Products as ProductListTypes}
        />
        <div className="flex space-x-6 pt-8">
          <Link
            href={"/category/tech"}
            className="w-1/2 aspect-square bg-gray-400 rounded-3xl"
          >
            <p></p>
          </Link>
          <Link
            href={"/category/decoration"}
            className="w-1/2 aspect-square bg-gray-400 rounded-3xl"
          ></Link>
          <Link
            href={"/category/decoration"}
            className="w-1/2 aspect-square bg-gray-400 rounded-3xl"
          ></Link>
        </div>
      </section>
      <section
        className="aspect-[8/10] md:aspect-[10/7] w-full flex items-end md:items-center rounded-3xl p-6 grayscale justify-center"
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
          <p className="font-light md:text-xl md:font-normal">
            Creators and exports share products that enrich their lives?
          </p>
        </div>
      </section>

      <section className="md:flex flex flex-col md:flex-row md:gap-6 pb-6 h-[640px]">
        <img
          src="https://creme-atelier.com/cdn/shop/files/300324_CremeAtelier0528.jpg?v=1713947074"
          className=" md:w-2/3  rounded-3xl object-cover "
        />
        <div className="space-y-2 md:w-1/3 overflow-y-scroll no-scrollbar">
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
