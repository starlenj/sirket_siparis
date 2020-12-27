import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Print from "./component/pages/Order/PrintOrder";
import sessionWrapperHOC from "./component/sessionWrapper";
const Root = ({ refetch, session }) => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route
          path="/"
          render={() => <Print />}
        />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);
const RootWithSessionWrapper = sessionWrapperHOC(Root);
export default class App extends Component {
  render() {
    return <RootWithSessionWrapper />;
  }
}
