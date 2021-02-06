module.exports = {
  CreateOptionValue: async (
    parent,
    { data: { Name, Price, Order, OptionsId } },
    { OptionValue }
  ) => {
    return await new OptionValue({
      Name,
      Price,
      OptionsId,
      Order,
    }).save();
  },
  UpdateOptionValue: async (
    parent,
    { data: { Name, Price, id, Order } },
    { OptionValue }
  ) => {
    const UpdateOption = await OptionValue.findById(id);
    UpdateOption.Name = Name;
    UpdateOption.Price = Price;
    UpdateOption.Order = Order;
    return UpdateOption.save();
  },
  DeleteOptionValue: async (parent, { data: { id } }, { OptionValue }) => {
    const DeleteOptions = await OptionValue.findById(id);
    DeleteOptions.Status = 0;
    return DeleteOptions.save();
  },
};
