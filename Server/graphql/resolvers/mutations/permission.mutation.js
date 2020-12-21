module.exports = {
  CreatePermission: async (
    parent,
    { data: { Name, UserId } },
    { Permission }
  ) => {
    const user = await Permission.findOne({ Name });
    if (user) {
      throw new Error("Yetki kaydı mevcuttur");
    }
    return await new Permission({
      Name,
      UserId,
    }).save();
  },

  UpdatePermission: async (
    parent,
    { data: { Name, UserId, id } },
    { Permission }
  ) => {
    const UpdatePermission = await Permission.findById(id);
    UpdatePermission.Name = Name;
    UpdatePermission.UserId = UserId;
    return await UpdatePermission.save();
  },

  DeletePermission: async (parent, { data: { id } }, { Permission }) => {
    const UpdatePermission = await Permission.findById(id);
    UpdatePermission.Status = 0;
    return await UpdatePermission.save();
  },
};
