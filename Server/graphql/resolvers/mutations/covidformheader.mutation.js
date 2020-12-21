module.exports = {
  CreateCovidFormHeader: async (
    parent,
    { data: { SubeId, CreatedAt } },
    { CovidFormHeader }
  ) => {
    return await new CovidFormHeader({
      CreatedAt,
      SubeId,
    }).save();
  },
  UpdateCovidFormHeader: async (
    parent,
    { data: { CreatedAt, SubeId, id } },
    { CovidFormHeader }
  ) => {
    const UpdateServis = await CovidFormHeader.findById(id);
    UpdateServis.CreatedAt = CreatedAt;
    UpdateServis.SubeId = SubeId;
    return UpdateServis.save();
  },
  DeleteCovidFormHeader: async (
    parent,
    { data: { id } },
    { CovidFormHeader }
  ) => {
    const DeleteServis = await CovidFormHeader.findById(id);
    DeleteServis.status = 0;
    return DeleteServis.save();
  },
};
