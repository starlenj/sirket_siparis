import { Action } from "@ngrx/store";
import { Order } from "../../models/order/order.model";

export const ADD_ORDER = "[ORDER] Add";
export const SET_QUANTITY = "[ORDER] SET QUANTITY";
export const UNSET_QUANTITY = "[ORDER] UNSET QUANTITY";
export const SET_EXTRA_OPTIONS = "[ORDER] SET EXTRA OPTIONS";
export const SET_EXTRA = "[ORDER] SET EXTRA";
export const SET_EKMEK = "[ORDER] SET EKMEK";
export const SET_ICECEK = "[ORDER] SET ICECEK";
export const SET_ICECEK_EXTRA = "[ORDER] SET ICECEK EXTRA";
export const SET_EK_OPTIONS = "[ORDER] SET EK OPTIONS";
export const SET_OPTIONS = "[ORDER] SET OPTIONS";

export class AddOrderAction implements Action {
  readonly type: string = ADD_ORDER;
  constructor(public payload: Order) { }
}

export class SetQuantityAction implements Action {
  readonly type: string = SET_QUANTITY;
  constructor(public payload: Order) { }
}

export class UnSetQuantityAction implements Action {
  readonly type: string = UNSET_QUANTITY;
  constructor(public payload: Order) { }
}


export class SetExtraOptionsAction implements Action {
  readonly type: string = SET_EXTRA_OPTIONS;
  constructor(public payload: Order) { }
}

export class SetExtraAction implements Action {
  readonly type: string = SET_EXTRA;
  constructor(public payload: Order) { }
}

export class SetEkOptionsAction implements Action {
  readonly type: string = SET_EK_OPTIONS;
  constructor(public payload: Order) { }
}



export type Actions = AddOrderAction | SetQuantityAction | SetExtraOptionsAction | SetEkOptionsAction;
