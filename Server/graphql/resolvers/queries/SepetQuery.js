const Sepet = {
  Order: async (parent, args, { OrderBody }) => {
    return await OrderBody.find({ OrderHeaderId: parent.OrderHeaderId });
  },
};

module.exports = Sepet;
