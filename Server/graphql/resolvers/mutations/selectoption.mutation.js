module.exports = {
  CreateSelectOption: async (
    parent,
    { data: { ProductId, OptionsId } },
    { SelectOptions }
  ) => {
    return await new SelectOptions({
      ProductId,
      OptionsId,
    }).save();
  },
  UpdateSelectOption: async (
    parent,
    { data: { ProductId, OptionsId, id } },
    { SelectOptions }
  ) => {
    const UpdateSelectOptions = await SelectOptions.findById(id);
    UpdateSelectOptions.ProductId = ProductId;
    UpdateSelectOptions.OptionsId = OptionsId;
    return UpdateSelectOptions.save();
  },
  DeleteSelectOption: async (parent, { data: { id } }, { SelectOptions }) => {
    console.log(id);
    return await SelectOptions.findByIdAndDelete(id);
  },
};
