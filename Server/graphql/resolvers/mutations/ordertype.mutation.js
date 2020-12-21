module.exports = {
  CreateOrderType: async (
    parent,
    { data: { Name, SubeId } },
    { OrderType }
  ) => {
    return await new OrderType({
      Name,
      SubeId,
    }).save();
  },
  UpdateOrderType: async (
    parent,
    { data: { Name, SubeId, id } },
    { OrderType }
  ) => {
    const UpdateOrderType = await OrderType.findById(id);
    UpdateOrderType.Name = Name;
    UpdateOrderType.SubeId = SubeId;
    return UpdateOrderType.save();
  },
  DeleteOrderType: async (parent, { data: { id } }, { OrderType }) => {
    const DeleteOrderType = await OrderType.findById(id);
    DeleteOrderType.status = 0;
    return DeleteOrderType.save();
  },
};
