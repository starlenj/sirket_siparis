import { Action } from "@ngrx/store";
import { Product } from "../../models/product/product.model";
import * as ProductActions from "../Action/product.action";


const initalState: Product = {
  id: "",
  CategoryId: "",
  Category: [],
  Info: "",
  Order: 0,
  Picture: "",
  Price: 0,
  SelectOption: [],
  Status: true,
  YemekSepetiPrice: 0,
  Name:""
}

export function productReducer(state: Product[] = [initalState], action: ProductActions.Actions) {


  switch (action.type) {
    case ProductActions.ADD_PRODUCT:
      return [action.payload];
    default:
      return state;
  }
}
