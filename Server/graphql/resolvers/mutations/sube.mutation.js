module.exports = {
  CreateSube: async (parent, { data: { Name, Order } }, { Sube }) => {
    return await new Sube({
      Name,
      Order,
    }).save();
  },
  UpdateSube: async (parent, { data: { Name, id, Order } }, { Sube }) => {
    const UpdateCategory = await Sube.findById(id);
    UpdateCategory.Name = Name;
    UpdateCategory.Order = Order;
    return UpdateCategory.save();
  },
  DeleteSube: async (parent, { data: { id } }, { Sube }) => {
    const DeleteCategory = await Sube.findById(id);
    DeleteCategory.Status = 0;
    return DeleteCategory.save();
  },
  SubeStatus: async (parent, { data: { id, Status } }, { Sube }) => {
    const DeleteCategory = await Sube.findById(id);
    DeleteCategory.Status = Status;
    return DeleteCategory.save();
  },
};
