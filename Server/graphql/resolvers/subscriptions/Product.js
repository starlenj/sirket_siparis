const { withFilter } = require("apollo-server");
module.exports = {
  ProductStatus: {
    subscribe: withFilter(
      (parent, args, { PubSubServer }) => {
        return PubSubServer.asyncIterator("ProductStatus");
      },
      (payload, variables) => {
        return payload.ProductStatus._id === variables.id ? true : false;
      }
    ),
  },
};
