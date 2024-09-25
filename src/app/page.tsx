import ProductsList from "./products.json";
import ProductCard from "../components/ProductCard";
import Menu from "@/components/ui/Menu";
import ProductsPanel from "@/components/ProductsPanel";

export default function Page() {
  return (
    <div className="flex flex-col items-center md:space-y-16">
      <Menu />
      {/* <ProductCard
    productBrand="Bose"
    productTitle="Noise Cancelling Headphones 700"
    productPrice={299}
    productDescription="The Bose Noise Cancelling Headphones 700 deliver excellent sound and are ideal for working or traveling, when you need the most effective noise cancellation and long battery life. They are comfortable to wear for hours, and their touch controls are smooth and intuitive."
    productImage={productImage}
  />*/}
      <h1 className="text-6xl">Related</h1>
      <ProductsPanel productsList={ProductsList} />
    </div>
  );
}
