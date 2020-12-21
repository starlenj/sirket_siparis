module.exports = {
  CreatePersonel: async (parent, { data: { Name, SubeId } }, { Personel }) => {
    return await new Personel({
      Name,
      SubeId,
    }).save();
  },

  UpdatePersonel: async (
    parent,
    { data: { Name, SubeId, id } },
    { Personel }
  ) => {
    const UpdatePermission = await Personel.findById(id);
    UpdatePermission.Name = Name;
    UpdatePermission.SubeId = SubeId;
    return await UpdatePermission.save();
  },

  DeletePersonel: async (parent, { data: { id } }, { Personel }) => {
    const UpdatePermission = await Personel.findById(id);
    UpdatePermission.Status = 0;
    return await UpdatePermission.save();
  },
};
