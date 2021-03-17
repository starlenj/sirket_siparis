import { Product } from "./core/models/product/product.model";

export interface AppState{
  readonly product : Product[];
}
