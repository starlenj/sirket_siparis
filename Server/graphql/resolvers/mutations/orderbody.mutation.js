module.exports = {
  CreateOrder: async (
    parent,
    { data: { ProductId, Options, Quantity, Price, OrderHeaderId } },
    { OrderBody }
  ) => {
    return await new OrderBody({
      ProductId,
      Options,
      Quantity,
      Price,
      OrderHeaderId,
    }).save();
  },
  UpdateOrder: async (
    parent,
    { data: { Options, Quantity, Price, id } },
    { OrderBody }
  ) => {
    const UpdateOrderBody = await OrderBody.findById(id);
    UpdateOrderBody.Options = Options;
    UpdateOrderBody.Quantity = Quantity;
    UpdateOrderBody.Price = Price;
    return UpdateOrderBody.save();
  },
  DeleteOrderHeader: async (parent, { data: { id } }, { OrderBody }) => {
    const DeleteOrder = await OrderBody.findById(id);
    DeleteOrder.status = 0;
    return DeleteOrder.save();
  },
};
