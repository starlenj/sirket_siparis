import React from "react";
import { Query } from "react-apollo";
import { GET_ACTIVE_USER } from "../queries";
import Error from "./pages/Error";
const sessionWrapperHOC = (Component) => (props) => (
  <Query query={GET_ACTIVE_USER}>
    {({ loading, data, refetch, error }) => {
      if (loading) return <div style={{ textAlign: "center" }}>Loading...</div>;
      if (error) return <Error error={error} {...props} />;
      return <Error ><Component {...props} refetch={refetch} session={data} /></Error>;
    }}
  </Query>
);

export default sessionWrapperHOC;
