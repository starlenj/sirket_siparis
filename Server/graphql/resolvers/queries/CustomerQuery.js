const Customer = {
  UserAddress: async (parent, args, { CustomerAddress }) => {
    return await CustomerAddress.find({ customerId: parent._id, status: 1 });
  },
  Sepet: async (parent, args, { Sepet }) => {
    return await Sepet.find({ CustomerId: parent._id });
  },
};

module.exports = Customer;
