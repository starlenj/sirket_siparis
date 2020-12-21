module.exports = {
  CreateSube: async (parent, { data: { Name } }, { Sube }) => {
    return await new Sube({
      Name,
    }).save();
  },
  UpdateSube: async (parent, { data: { Name, id } }, { Sube }) => {
    const UpdateData = await Sube.findById(id);
    UpdateData.Name = Name;
    return await UpdateData.save();
  },
  DeleteSube: async (parent, { data: { id } }, { Sube }) => {
    const UpdateData = await Sube.findById(id);
    UpdateData.Status = false;
    return await UpdateData.save();
  },
  SubeUpdateStatus: async (
    parent,
    { data: { id, Status } },
    { Sube, PubSubServer }
  ) => {
    const UpdateData = await Sube.findById(id);
    UpdateData.Status = Status;
    let UpdateResult = await UpdateData.save();
    PubSubServer.publish("SubeStatus", {
      SubeStatus: UpdateResult,
    });
    return UpdateResult;
  },
};
