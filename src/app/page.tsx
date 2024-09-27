import Button from "@/components/Button";
import FAQCard from "@/components/FAQCard";
import Link from "next/link";
import FAQ from "./Faq.json";

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="w-full h-screen flex items-end md:-mt-[112px] -mt-[80px]">
        <div className="rounded-[24px] bg-gray-300 md:h-[calc(100%-112px)] h-[calc(100%-80px)] w-full flex p-6 md:p-16 items-end">
          <div className="space-y-4 md:w-1/2 w-full">
            <p className="text-white text-3xl">description du produit</p>
            <Button content={"Order"} className="w-full md:w-fit rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="">
        <p>blablabla</p>
      </section>
      <section className="space-x-10">
        <div className="md:grid md:grid-cols-3 gap-y-8 gap-x-6 space-y-4 md:space-y-0">
          <div
            className="h-full rounded-3xl items-end justify-end flex p-6 aspect-square"
            style={{
              backgroundImage: `url(https://creme-atelier.com/cdn/shop/files/300324_CremeAtelier0743_MELLAN_SLADD.jpg?v=1713723072)`,
              backgroundSize: "cover",
            }}
          >
            <Link href="/category/all">
              <Button content="Découvrir les lampes" />
            </Link>
          </div>
          <div
            className="h-full rounded-3xl items-end justify-end flex p-6 aspect-square"
            style={{
              backgroundImage: `url(https://creme-atelier.com/cdn/shop/files/300324_CremeAtelier0552.jpg?v=1713723043)`,
              backgroundSize: "cover",
            }}
          >
            <Link href="/category/all">
              <Button content="Découvrir la décoration" />
            </Link>
          </div>
          <div
            className="h-full rounded-3xl items-end justify-end flex p-6 aspect-square"
            style={{
              backgroundImage: `url(https://creme-atelier.com/cdn/shop/files/300324_CremeAtelier0528.jpg?v=1713947074)`,
              backgroundSize: "cover",
            }}
          >
            <Link href="/category/all">
              <Button content="Découvrir les accéssoirs tech" />
            </Link>
          </div>
        </div>
        <Link href="/category/all">
          <Button content="Tout découvrir" />
        </Link>
      </section>
      <section className="md:flex flex flex-col md:flex-row md:gap-6 h-screen ">
        <img
          src="https://creme-atelier.com/cdn/shop/files/300324_CremeAtelier0528.jpg?v=1713947074"
          className=" md:w-2/3  rounded-3xl object-cover aspect-square h-2/3"
        />
        <div className="space-y-2 md:w-1/3 overflow-y-scroll h-2/3">
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
