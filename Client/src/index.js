import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://webserivs.hmbrgr.com.tr/graphql",
  //uri: "http://localhost:4000/graphql",

  //uri: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("TOKEN"),
      },
    });
  },
});
// uri: "https://webserivs.hmbrgr.com.tr/graphql",
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("rootStore")
);
