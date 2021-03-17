import { Action } from "@ngrx/store";
import { Product } from "../../models/product/product.model";


export const ADD_PRODUCT = "[PRODUCT] Add";
export const REMOVE_PRODUCT = "[PRODUCT] Remove";


export class AddProductAction implements Action {
  readonly type: string = ADD_PRODUCT;

  constructor(public payload: Product) { }

}
export class DeleteProductAction implements Action {
  readonly type: string = REMOVE_PRODUCT;

  constructor(public payload: Product) { }

}

export type Actions = AddProductAction | DeleteProductAction;
