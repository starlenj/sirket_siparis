const { withFilter } = require("apollo-server");
module.exports = {
  OrderAdded: {
    subscribe: withFilter(
      (parent, args, { PubSubServer }) => {
        return PubSubServer.asyncIterator("OrderAdded");
      },
      (payload, variables) => {
        return payload.OrderAdded.SubeId === variables.SubeId ? true : false;
      }
    ),
  },
};
