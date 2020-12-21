const { withFilter } = require("apollo-server");
module.exports = {
  SubeStatus: {
    subscribe: withFilter(
      (parent, args, { PubSubServer }) => {
        return PubSubServer.asyncIterator("SubeStatus");
      },
      (payload, variables) => {
        return payload.SubeStatus.SubeId === variables._id ? true : false;
      }
    ),
  },
};
