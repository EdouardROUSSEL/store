import ProductsPanel from "@/components/ProductsPanel";
import ProductsList from "./products.json";
import Menu from "@/components/ui/Menu";
import { ProductListTypes } from "./types";

export default function Page() {
  return (
    <div className="flex flex-col items-center md:space-y-16">
      <h1 className="text-6xl">Related</h1>
      <ProductsPanel
        productsList={ProductsList as ProductListTypes}
        flexMobil={true}
      />
    </div>
  );
}
