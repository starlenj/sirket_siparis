module.exports = {
  CreateSepet: async (
    parent,
    { data: { OrderHeaderId, CustomerId } },
    { Sepet }
  ) => {
    return await new Sepet({
      OrderHeaderId,
      CustomerId,
    }).save();
  },
  DeleteSepet: async (parent, { data: { id } }, { Sepet }) => {
    const UpdateSepet = await Sepet.findById(id);
    UpdateSepet.status = 0;
    return UpdateSepet.save();
  },
};
