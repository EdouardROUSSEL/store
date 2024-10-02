export interface Product {
  category: "decoration" | "lamp" | "tech";
  pageLink: string;
  productBrand: string;
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
