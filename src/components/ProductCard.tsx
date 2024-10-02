import { Product } from "@/app/types";
import { useRouter } from "next/navigation";

export default function ProductCard({
  product,
  flexMobil,
}: {
  product: Product;
  flexMobil: boolean;
}) {
  const router = useRouter();
  return (
    <a
      className={`flex space-y-4 flex-col  sm:min-w-0 sm:max-w-full sm:pr-0 cursor-pointer ${
        flexMobil ? "min-w-[64vw] max-w-md pr-6" : " min-w-0 max-w-full "
      }`}
      onClick={() => router.push(`/product/${product.pageLink}`)}
    >
      <div className="relative">
        <img
          src={product.productImage[0]}
          className="aspect-square rounded-3xl transition-transform duration-300 hover:opacity-0 transform object-cover "
          alt={product.productTitle}
        />
        <img
          src={product.productImage[1]}
          className="aspect-square rounded-3xl top-0 left-0 absolute transition-opacity duration-300 opacity-0 object-cover transform hover:opacity-100"
          alt={product.productTitle}
        />
      </div>

      <div>
        <p className="font-wider font-light">{product.productBrand}</p>
        <p>{product.productTitle}</p>
        <p>${product.productPrice}</p>
      </div>
    </a>
  );
}
