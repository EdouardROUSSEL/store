// types.ts
type Category = "Decoration" | "Lamp" | "Tech";

export interface Product {
  category: Category;
  pageLink: string;
  productBrand: string;
  productTitle: string;
  productPrice: number;
  productDescription: string;
  productImage: string[];
}

export interface ProductListTypes {
  productsList: Product[];
}
