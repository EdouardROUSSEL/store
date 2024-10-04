import { Product } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({
  product,
  flexMobil,
}: {
  product: Product;
  flexMobil: boolean;
}) {
  return (
    <Link
      className={`flex space-y-4 flex-col sm:pr-0 cursor-pointer ${
        flexMobil ? "md:min-w-96 sm:min-w-80 min-w-64" : " min-w-0 max-w-full "
      }`}
      href={`/product/${product.idProduct}`}
    >
      <div className="relative">
        <Image
          width={500}
          height={500}
          src={product.productImage[0]}
          className="aspect-square rounded-3xl transition-transform duration-300 hover:opacity-0 transform object-cover "
          alt={product.productTitle}
        />
        <Image
          width={500}
          height={500}
          src={product.productImage[1]}
          className="aspect-square rounded-3xl top-0 left-0 absolute transition-opacity duration-300 opacity-0 object-cover transform hover:opacity-100"
          alt={product.productTitle}
        />
      </div>

      <div>
        <p className="font-wider font-light">{product.productName}</p>
        <p className="text-xs">${product.productPrice}</p>
      </div>
    </Link>
  );
}
