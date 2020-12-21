const OrderHeader = {
  Order: async (parent, args, { OrderBody }) => {
    return await OrderBody.find({ OrderHeaderId: parent.id });
  },
  OrderPaymentType: async (parent, args, { PaymentType }) => {
    return await PaymentType.find({ id: parent.PaymentType });
  },
  OrderOrderType: async (parent, args, { OrderType }) => {
    return await OrderType.find({ id: parent.OrderType });
  },
  OrderCustomer: async (parent, args, { Customer }) => {
    return await Customer.find({ id: parent.CustomerId });
  },
  OrderSube: async (parent, args, { Sube }) => {
    return await Sube.find({ id: parent.SubeId });
  },
};

module.exports = OrderHeader;
