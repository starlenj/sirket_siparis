import React from "react";
import { Query } from "react-apollo";
import { GET_ACTIVE_USER } from "../queries";
const sessionWrapperHOC = (Component) => (props) => (
  <Query query={GET_ACTIVE_USER}>
    {({ loading, data, refetch }) => {
      if (loading) return <div style={{ textAlign: "center" }}>Loading...</div>;
      return <Component {...props} refetch={refetch} session={data} />;
    }}
  </Query>
);

export default sessionWrapperHOC;
