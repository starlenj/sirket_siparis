module.exports = {
  CreateProductPrice: async (
    parent,
    { data: { ProductId, Price, SubeId, Status } },
    { ProductPrice }
  ) => {
    return await new Product({
      Status,
      ProductId,
      SubeId,
      Price,
    }).save();
  },
  UpdateProductPrice: async (
    parent,
    { data: { Status, ProductId, SubeId, Price } },
    { ProductPrice }
  ) => {
    const UpdateProduct = await ProductPrice.findById(id);
    UpdateProduct.Price = Price;
    UpdateProduct.ProductId = ProductId;
    UpdateProduct.SubeId = SubeId;
    UpdateProduct.Status = Status;
    return UpdateProduct.save();
  },
  DeleteProductPrice: async (parent, { data: { id } }, { ProductPrice }) => {
    const DeleteProducts = await ProductPrice.findById(id);
    DeleteProducts.Status = 0;
    return DeleteProducts.save();
  },
};
