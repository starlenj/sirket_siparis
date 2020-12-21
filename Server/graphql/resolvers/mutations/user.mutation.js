const bcrypt = require("bcrypt");
const token = require("../../../helpers/token");
module.exports = {
  CreateUser: async (
    parent,
    { data: { Email, Password, Name, Sube } },
    { User }
  ) => {
    const user = await User.findOne({ Email });
    if (user) {
      throw new Error("Kullanıcı kaydı mevcuttur");
    }
    const newUser = await new User({
      Email,
      Sube,
      Password,
      Name,
    }).save();
    return { token: token.generate(newUser, "1h") };
  },
  UpdateUser: async (parent, { data: { Email, id, Name, Sube } }, { User }) => {
    const UpdateUser = await User.findById(id);
    UpdateUser.Name = Name;
    UpdateUser.Email = Email;
    UpdateUser.Sube = Sube;
    return UpdateUser.save();
  },
  DeleteUser: async (parent, { data: { id } }, { User }) => {
    const UpdateUser = await User.findById(id);
    UpdateUser.Status = 0;
    return UpdateUser.save();
  },
  SignIn: async (parent, { data: { Email, Password } }, { User }) => {
    const user = await User.findOne({ Email });
    if (!user) throw new Error("Kullanıcı kaydı Mevcut değildir.");
    const validPassword = await bcrypt.compare(Password, user.Password);
    if (!validPassword) throw new Error("Hatalı Şifre");
    return { token: token.generate(user, "7d") };
  },
};
