import { TopLevelCategory } from "../../interfaces/toppage.interface";
import { TopPageModel } from "../../interfaces/toppage.interface";
import { ProductModel } from "../../interfaces/product.interface";

export interface TopPageComponentsProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: TopPageModel;
  products: ProductModel[];
}
