module.exports = {
  CreateProduct: async (
    parent,
    { data: { CategoryId, Name, Info, Price, Picture, Order, Status } },
    { Product }
  ) => {
    return await new Product({
      CategoryId,
      Name,
      Info,
      Price,
      Picture,
      Order,
      Status,
    }).save();
  },
  UpdateProduct: async (
    parent,
    { data: { CategoryId, Name, Info, Price, Picture, id, Order, Status } },
    { Product }
  ) => {
    const UpdateProduct = await Product.findById(id);
    UpdateProduct.Name = Name;
    UpdateProduct.CategoryId = CategoryId;
    UpdateProduct.Picture = Picture;
    UpdateProduct.Info = Info;
    UpdateProduct.Order = Order;
    UpdateProduct.Price = Price;
    return UpdateProduct.save();
  },
  DeleteProduct: async (parent, { data: { id } }, { Product }) => {
    const DeleteProducts = await Product.findById(id);
    DeleteProducts.Status = 0;
    return DeleteProducts.save();
  },
  ProductStatus: async (
    parent,
    { data: { id, Status } },
    { PubSubServer, Product }
  ) => {
    const DeleteProducts = await Product.findById(id);
    DeleteProducts.Status = Status;
    let ProductResponse = await DeleteProducts.save();
    PubSubServer.publish("ProductStatus", {
      ProductStatus: ProductResponse,
    });
    return ProductResponse;
  },
};
