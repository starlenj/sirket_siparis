module.exports = {
  CreateSemt: async (parent, { data: { Name } }, { Semt }) => {
    return await new Semt({
      Name,
    }).save();
  },
  UpdateSemt: async (parent, { data: { Name, id } }, { Semt }) => {
    const UpdateData = await Semt.findById(id);
    UpdateData.Name = Name;
    return await UpdateData.save();
  },
  DeleteSemt: async (parent, { data: { id } }, { Semt }) => {
    const UpdateData = await Semt.findById(id);
    UpdateData.Status = false;
    return await UpdateData.save();
  },
};
