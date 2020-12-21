module.exports = {
  CreateCategory: async (
    parent,
    { data: { Name, Order, CategoryType, SubeId } },
    { Category }
  ) => {
    return await new Category({
      Name,
      Order,
      SubeId,
      CategoryType,
    }).save();
  },
  UpdateCategory: async (
    parent,
    { data: { Name, id, Order, SubeId } },
    { Category }
  ) => {
    const UpdateCategory = await Category.findById(id);
    UpdateCategory.Name = Name;
    UpdateCategory.Order = Order;
    UpdateCategory.SubeId = SubeId;
    return UpdateCategory.save();
  },
  DeleteCategory: async (parent, { data: { id } }, { Category }) => {
    const DeleteCategory = await Category.findById(id);
    DeleteCategory.Status = 0;
    return DeleteCategory.save();
  },
};
