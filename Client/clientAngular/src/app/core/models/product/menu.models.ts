import { Product } from "./product.model";

export interface Menu{
  Name:string;
  Order:number;
  Products:Product[]
  id:string;
}
