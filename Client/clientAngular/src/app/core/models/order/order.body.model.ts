import { SelectOption } from "../options/selectoption.model";
import { Product } from "../product/product.model";

export interface OrderBody{
  id: string;
  ProductId: string
  SelectOrderOption: SelectOption
  Quantity: number
  Price: number
  Product: Product
  OrderHeaderId: string
}
