module.exports = {
  CreateSelectOrderOptions: async (
    parent,
    { data: { OrderBodyId, OptionsId } },
    { SelectOrderOptions }
  ) => {
    return await new SelectOrderOptions({
      OrderBodyId,
      OptionsId,
    }).save();
  },
  UpdateSelectOrderOptions: async (
    parent,
    { data: { OptionsId, id } },
    { SelectOrderOptions }
  ) => {
    const UpdateSelectOrderOptions = await SelectOrderOptions.findById(id);
    UpdateSelectOrderOptions.OptionsId = OptionsId;
    return UpdateSelectOrderOptions.save();
  },
  DeleteSelectOrderOptions: async (
    parent,
    { data: { id } },
    { SelectOrderOptions }
  ) => {
    const DeleteSelectOptions = await SelectOrderOptions.findById(id);
    DeleteSelectOptions.status = 0;
    return DeleteSelectOptions.save();
  },
};
