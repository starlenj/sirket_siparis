
import { Order } from "../../models/order/order.model";
import { OrderBody } from "../../models/order/order.body.model";
import * as OrderActions from "../Action/order.actions";


var orderBody: OrderBody;
const initalState: Order = {
  id: "",
  PaymentType: "",
  OrderType: "",
  CustomerId: "",
  SubeId: "",
  Note: "",
  Discount: 0,
  ServicePrice: 0,
  OrderStatus: 0,
  OrderChannel: "",
  OrderPaymentType: "",
  OrderOrderType: "",
  OrderCustomer: "",
  OrderSube: "",
  Date: '',
  Phone: "",
  CustomerName: "",
  Plaka: "",
  Aciklama: "",
  Adres: "",
  OrderCancelInfo: "",
  Order:orderBody

}

export function orderReducer(state: Order[] = [initalState], action: OrderActions.Actions) {
  switch (action.type) {
    case OrderActions.ADD_ORDER:
      return [action.payload];
    default:
      return state;
  }
}
