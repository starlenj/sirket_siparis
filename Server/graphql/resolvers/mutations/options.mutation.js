module.exports = {
  CreateOption: async (
    parent,
    { data: { Name, SelectType, MinQuantity, MaxQuantity, IsRequired, Order } },
    { Option }
  ) => {
    return await new Option({
      Name,
      Order,
      MinQuantity,
      MaxQuantity,
      SelectType,
      IsRequired
    }).save();
  },
  UpdateOption: async (
    parent,
    {
      data: {
        Order,
        Name,
        MinQuantity,
        MaxQuantity,
        SelectType,
        IsRequired,
        id
      }
    },
    { Option }
  ) => {
    const UpdateOption = await Option.findById(id);
    UpdateOption.Name = Name;
    UpdateOption.Order = Order;
    UpdateOption.SelectType = SelectType;
    UpdateOption.MinQuantity = MinQuantity;
    UpdateOption.MaxQuantity = MaxQuantity;
    UpdateOption.IsRequired = IsRequired;
    return UpdateOption.save();
  },
  DeleteOption: async (parent, { data: { id } }, { Option }) => {
    const DeleteOptions = await Option.findById(id);
    DeleteOptions.Status = 0;
    return DeleteOptions.save();
  }
};
