export interface Product {
  idCategory: "decoration" | "lamp" | "tech";
  idProduct: string;
  productName: string;
  productTitle: string;
  productPrice: number;
  productDescription: string;
  productImage: string[];
}

export type ProductListTypes = Product[];

export interface Subtitle {
  title: string;
  path: string;
}

export interface FooterSection {
  title: string;
  subtitle: Subtitle[];
}
