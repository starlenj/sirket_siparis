module.exports = {
  CreateSubeServis: async (
    parent,
    { data: { SubeId, Name } },
    { SubeServis }
  ) => {
    return await new SubeServis({
      SubeId,
      Name,
    }).save();
  },
  UpdateSubeServis: async (
    parent,
    { data: { SubeId, ServisId } },
    { SubeServis }
  ) => {
    const UpdateData = await SubeServis.findById(id);
    UpdateData.SubeId = SubeId;
    UpdateData.Name = Name;
    return await UpdateData.save();
  },
  DeleteSubeServis: async (parent, { data: { id } }, { SubeServis }) => {
    const UpdateData = await SubeServis.findById(id);
    UpdateData.Status = false;
    return await UpdateData.save();
  },
};
