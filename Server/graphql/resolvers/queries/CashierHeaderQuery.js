const CashierHeader = {
  CashierBody: async (parent, args, { CashierBody }) => {
    return await CashierBody.find({ HeaderId: parent.id });
  },
};
module.exports = CashierHeader;
