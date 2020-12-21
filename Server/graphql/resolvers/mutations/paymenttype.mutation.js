module.exports = {
  CreatePaymentType: async (
    parent,
    { data: { Name, SubeId } },
    { PaymentType }
  ) => {
    return await new PaymentType({
      Name,
      SubeId,
    }).save();
  },
  UpdatePaymentType: async (
    parent,
    { data: { Name, SubeId, id } },
    { PaymentType }
  ) => {
    const UpdatePaymentType = await PaymentType.findById(id);
    UpdatePaymentType.Name = Name;
    UpdatePaymentType.SubeId = SubeId;
    return UpdatePaymentType.save();
  },
  DeletePaymentType: async (parent, { data: { id } }, { PaymentType }) => {
    const DeletePaymentType = await PaymentType.findById(id);
    DeletePaymentType.status = 0;
    return DeletePaymentType.save();
  },
};
