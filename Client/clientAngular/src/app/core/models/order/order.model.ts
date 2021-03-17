import { OrderBody } from "./order.body.model";

export interface Order{
  id: string;
  PaymentType: string
  OrderType: string
  CustomerId: string
  SubeId: string
  Note: string
  Discount: number
  ServicePrice: number
  Order: OrderBody
  OrderStatus: number
  OrderChannel: string
  OrderPaymentType: string
  OrderOrderType: string
  OrderCustomer:string
  OrderSube: string
  Date: string
  Phone: string
  CustomerName: string
  Plaka: string
  Aciklama: string
  Adres: string
  OrderCancelInfo:string
}
