module.exports = {
  CreateOrderHeader: async (
    parent,
    {
      data: {
        PaymentType,
        OrderType,
        CustomerId,
        SubeId,
        Note,
        Discount,
        ServicePrice,
        OrderChannel,
        CustomerName,
        Phone,
        Plaka,
        Aciklama,
        Adres
      },
    },
    { OrderHeader, PubSubServer }
  ) => {
    try {
      let OrderHeaderResult = await new OrderHeader({
        PaymentType,
        OrderType,
        CustomerId,
        SubeId,
        Note,
        Discount,
        ServicePrice,
        OrderChannel,
        CustomerName,
        Phone,
        Plaka,
        Aciklama,
        Adres
      }).save();
      PubSubServer.publish("OrderAdded", {
        OrderAdded: OrderHeaderResult,
      });
      return OrderHeaderResult;
    } catch (e) {
      console.error(e);
    }
  },
  UpdateOrderHeader: async (
    parent,
    { data: { PaymentType, Note, Discount, ServicePrice, id, Adres } },
    { OrderHeader }
  ) => {
    const UpdateOrderHeader = await OrderHeader.findById(id);
    UpdateCustomer.PaymentType = PaymentType;
    UpdateCustomer.Note = Note;
    UpdateCustomer.Discount = Discount;
    UpdateCustomer.ServicePrice = ServicePrice;
    UpdateCustomer.Adres = Adres;
    return UpdateOrderHeader.save();
  },
  DeleteOrderHeader: async (parent, { data: { id } }, { OrderHeader }) => {
    const DeleteOrder = await OrderHeader.findById(id);
    DeleteOrder.status = 0;
    return DeleteOrder.save();
  },
  SiparisOnay: async (parent, { data: { id } }, { OrderHeader }) => {
    const UpdateSiparis = await OrderHeader.findById(id);
    UpdateSiparis.OrderStatus = 1;
    return UpdateSiparis.save();
  },

  SiparisReddet: async (parent, { data: { id } }, { OrderHeader }) => {
    const UpdateSiparis = await OrderHeader.findById(id);
    UpdateSiparis.OrderStatus = -1;
    return UpdateSiparis.save();
  },
};
