import { OptionValues } from "./optionvalues.model";

export interface Options {
  id:string;
  Name:string;
  IsRequired:string;
  MaxQuantity:number;
  MinQuantity:number;
  SelectType:string;
  OptionValues:OptionValues[]
}
