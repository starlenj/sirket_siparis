module.exports = {
  CreateCalismaSaatleri: async (
    parent,
    { data: { Gun, Saat, SubeId } },
    { CalismaSaatleri }
  ) => {
    return await new CalismaSaatleri({
      Gun,
      Saat,
      SubeId,
    }).save();
  },
  UpdateCalismaSaatleri: async (
    parent,
    { data: { Gun, Saat, SubeId, id } },
    { CalismaSaatleri }
  ) => {
    const UpdateCalismaSaatleri = await CalismaSaatleri.findById(id);
    UpdateCalismaSaatleri.Gun = Gun;
    UpdateCalismaSaatleri.Saat = Saat;
    UpdateCalismaSaatleri.SubeId = SubeId;
    return UpdateCalismaSaatleri.save();
  },
  DeleteCalismaSaatleri: async (
    parent,
    { data: { id } },
    { CalismaSaatleri }
  ) => {
    const DeleteCalismaSaatleri = await CalismaSaatleri.findById(id);
    DeleteCalismaSaatleri.status = 0;
    return DeleteCalismaSaatleri.save();
  },
};
