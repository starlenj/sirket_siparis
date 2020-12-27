import React, { Component } from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

const onClick = (history, client) => {
  localStorage.setItem("TOKEN", "");
  client.resetStore();
  history.push("/");
};

const Logout = ({ history }) => (
  <ApolloConsumer>
    {(client) => {
      return (
        <button onClick={() => onClick(history, client)}>
          <i class="fas fa-sign-out-alt"></i>
        </button>
      );
    }}
  </ApolloConsumer>
);

export default withRouter(Logout);
