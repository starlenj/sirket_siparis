import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem("TOKEN") || null,
    },
  });
  return forward(operation);
});

const wsLink = new WebSocketLink(
  new SubscriptionClient("wss://webserivs.hmbrgr.com.tr/graphql", {
    reconnect: true,
  })
);

const httpLink = middlewareLink.concat(
  createHttpLink({
    //uri: "https://webserivs.hmbrgr.com.tr/graphql",
    uri: "http://localhost:4000/graphql"
    // uri: "https://webserivs.hmbrgr.com.tr/graphql",
  })
);

const hasSubscriptionOperation = ({ query: { definitions } }) => {
  return definitions.some(
    ({ kind, operation }) =>
      kind === "OperationDefinition" && operation === "subscription"
  );
};

const link = ApolloLink.split(hasSubscriptionOperation, wsLink, httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
