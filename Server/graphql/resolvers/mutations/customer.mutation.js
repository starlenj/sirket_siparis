const bcrypt = require("bcrypt");
const token = require("../../../helpers/token");
module.exports = {
  CreateCustomer: async (
    parent,
    { data: { Name, Phone, Email, Password } },
    { Customer }
  ) => {
    const customers = await Customer.find({ Email });
    if (customers.length > 0) {
      throw new Error("E-Posta Adresi Mevcut");
    }
    const phones = await Customer.find({ Phone });
    if (phones.length > 0) {
      throw new Error("Telefon Mevcut");
    }
    const newUser = await new Customer({
      Name,
      Phone,
      Email,
      Password,
    }).save();
    return { token: token.generate(newUser, "1h") };
  },
  UpdateCustomer: async (
    parent,
    { data: { Name, Phone, Email, id } },
    { Customer }
  ) => {
    const UpdateCustomer = await Customer.findById(id);
    UpdateCustomer.Name = Name;
    UpdateCustomer.Phone = Phone;
    UpdateCustomer.Email = Email;
    return UpdateCustomer.save();
  },
  DeleteCustomer: async (parent, { data: { id } }, { Customer }) => {
    const UpdateCustomer = await Customer.findById(id);
    UpdateCustomer.status = 0;
    return UpdateCustomer.save();
  },
  SingInCustomer: async (
    parent,
    { data: { Email, Password } },
    { Customer }
  ) => {
    const user = await Customer.findOne({ Email });
    console.log(user);
    if (!user) throw new Error("Kullanıcı kaydı Mevcut değildir.");
    const validPassword = await bcrypt.compare(Password, user.Password);
    if (!validPassword) throw new Error("Hatalı Şifre");
    return { token: token.generate(user, "1h") };
  },
};
