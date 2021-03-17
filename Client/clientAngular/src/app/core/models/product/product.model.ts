import { Category } from "../category.model";
import { SelectOption } from "../options/selectoption.model";

export interface Product{
  id:string;
  CategoryId:string;
  Category :Category[];
  SelectOption:SelectOption[];
  Price :number;
  Picture:string;
  YemekSepetiPrice:number;
  Info:string;
  Status:boolean;
  Order:number;
  Name:string;
}
