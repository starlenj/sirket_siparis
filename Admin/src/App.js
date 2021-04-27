import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./component/pages/User/Login";
import Home from "./component/pages/User/Home";
import Orders from "./component/pages/Order/index";
import OrderDetail from "./component/pages/Order/order-detail";
import OrderList from "./component/pages/Order/order-list";
import Bolge from "./component/pages/Bolge/";
import OdemeOrder from "./component/pages/Order/odeme-gecmisi";
import sessionWrapperHOC from "./component/sessionWrapper";
const Root = ({ refetch, session }) => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route
          path="/Bolgeler"
          render={() => <Bolge refetch={refetch} session={session} />}
        />
        <Route
          path="/OrderList"
          render={() => <OrderList refetch={refetch} session={session} />}
        />
        <Route
          path="/OdemeOrder"
          render={() => <OdemeOrder refetch={refetch} session={session} />}
        />
        <Route
          path="/OrderDetail"
          render={() => <OrderDetail refetch={refetch} session={session} />}
        />
        <Route
          path="/login"
          render={() => <Login refetch={refetch} session={session} />}
        />
        <Route
          path="/orders"
          render={() => <Orders refetch={refetch} session={session} />}
        />
        <Route
          path="/"
          exact
          render={() => <Home refetch={refetch} session={session} />}
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
