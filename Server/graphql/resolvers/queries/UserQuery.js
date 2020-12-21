const User = {
  UserPermissions: async (parent, args, { Permission }) => {
    return await Permission.find({ UserId: parent._id, Status: 1 });
  },
  SubeInfo: async (parent, args, { Sube }) => {
    return await Sube.find({ _id: parent.Sube });
  },
};

module.exports = User;
