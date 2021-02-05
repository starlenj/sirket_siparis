module.exports = {
  CreateOptionValue: async (
    parent,
    { data: { Name, Price, OptionsId } },
    { OptionValue }
  ) => {
    return await new OptionValue({
      Name,
      Price,
      OptionsId,
    }).save();
  },
  UpdateOptionValue: async (
    parent,
    { data: { Name, Price, id } },
    { OptionValue }
  ) => {
    const UpdateOption = await OptionValue.findById(id);
    UpdateOption.Name = Name;
    UpdateOption.Price = Price;
    return UpdateOption.save();
  },
  DeleteOptionValue: async (parent, { data: { id } }, { OptionValue }) => {
    const DeleteOptions = await OptionValue.findById(id);
    DeleteOptions.Status = 0;
    return DeleteOptions.save();
  },
};
