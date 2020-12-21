module.exports = {
  CreateAddress: async (
    parent,
    { data: { name, address, customerId } },
    { CustomerAddress }
  ) => {
    return await new CustomerAddress({
      name,
      customerId,
      address,
    }).save();
  },
  UpdateAddress: async (
    parent,
    { data: { name, address, id } },
    { CustomerAddress }
  ) => {
    const UpdateData = await CustomerAddress.findById(id);
    UpdateData.name = name;
    UpdateData.address = address;
    return UpdateData.save();
  },
  DeleteAddress: async (parent, { data: { id } }, { CustomerAddress }) => {
    const UpdateData = await CustomerAddress.findById(id);
    UpdateData.status = 0;
    return UpdateData.save();
  },
};
