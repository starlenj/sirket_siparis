import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./component/pages/User/Login";
import Home from "./component/pages/User/Home";
import Sube from "./component/pages/Sube/Sube";
import Category from "./component/pages/Category/index";
import Orders from "./component/pages/Order/index";
import OrderDetail from "./component/pages/Order/order-detail";
import OrderList from "./component/pages/Order/order-list";
import Options from "./component/pages/Options/index";
import NewOptions from "./component/pages/Options/new-options";
import Users from "./component/pages/Users/index";
import Product from "./component/pages/Product/index";
import EditProduct from "./component/pages/Product/edit-product";
import NewProduct from "./component/pages/Product/new-product";
import CalismaSaatleri from "./component/pages/CalismaSaatleri/index";
import sessionWrapperHOC from "./component/sessionWrapper";
import EditOptions from "./component/pages/Options/edit-options";
import OptionsValue from "./component/pages/OptionsValue/index";
import NewOptionsValue from "./component/pages/OptionsValue/new-optionvalue.js";
import EditOptionsValue from "./component/pages/OptionsValue/edit-optionvalue.js";
import CovidForm from "./component/pages/Covid/index.js";
import CovidFormList from "./component/pages/Covid/list.js";
import CovidFormSubeList from "./component/pages/Covid/SubeList.js";
import Personel from "./component/pages/Personel/index.js";
import NewPersonel from "./component/pages/Personel/new-personel";
import EditPersonel from "./component/pages/Personel/edit-personel";
import NewSubeForm from "./component/pages/Sube/NewSube";
import EditSubeForm from "./component/pages/Sube/EditSube";
import NewUserForm from "./component/pages/Users/new-user";
import SubeServisForm from "./component/pages/Servis/";
import Semts from "./component/pages/Semt/";
const Root = ({ refetch, session }) => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route
          path="/Semt"
          render={() => <Semts refetch={refetch} session={session} />}
        />
        <Route
          path="/ServisSube/:id"
          render={() => <SubeServisForm refetch={refetch} session={session} />}
        />
        <Route
          path="/NewSube"
          render={() => <NewSubeForm refetch={refetch} session={session} />}
        />
        <Route
          path="/EditSube"
          render={() => <EditSubeForm refetch={refetch} session={session} />}
        />
        <Route
          path="/CovidFormList"
          render={() => <CovidFormList refetch={refetch} session={session} />}
        />
        <Route
          path="/CovidFormSubeList"
          render={() => (
            <CovidFormSubeList refetch={refetch} session={session} />
          )}
        />
        <Route
          path="/EditPersonel"
          render={() => <EditPersonel refetch={refetch} session={session} />}
        />
        <Route
          path="/NewPersonel"
          render={() => <NewPersonel refetch={refetch} session={session} />}
        />
        <Route
          path="/Personel"
          render={() => <Personel refetch={refetch} session={session} />}
        />
        <Route
          path="/CovidForm"
          render={() => <CovidForm refetch={refetch} session={session} />}
        />
        <Route
          path="/OrderList"
          render={() => <OrderList refetch={refetch} session={session} />}
        />
        <Route
          path="/OrderDetail"
          render={() => <OrderDetail refetch={refetch} session={session} />}
        />
        <Route
          path="/EditProduct"
          render={() => <EditProduct refetch={refetch} session={session} />}
        />
        <Route
          path="/NewProduct"
          render={() => <NewProduct refetch={refetch} session={session} />}
        />
        <Route
          path="/EditOptionsValue"
          render={() => (
            <EditOptionsValue refetch={refetch} session={session} />
          )}
        />
        <Route
          path="/NewOptionsValue"
          render={() => <NewOptionsValue refetch={refetch} session={session} />}
        />
        <Route
          path="/OptionsValue"
          render={() => <OptionsValue refetch={refetch} session={session} />}
        />
        <Route
          path="/login"
          render={() => <Login refetch={refetch} session={session} />}
        />
        <Route
          path="/sube"
          render={() => <Sube refetch={refetch} session={session} />}
        />
        <Route
          path="/orders"
          render={() => <Orders refetch={refetch} session={session} />}
        />
        <Route
          path="/EditOption"
          exact
          render={() => <EditOptions refetch={refetch} session={session} />}
        />
        <Route
          path="/NewOption"
          exact
          render={() => <NewOptions refetch={refetch} session={session} />}
        />

        <Route
          path="/OptionList"
          exact
          render={() => <Options refetch={refetch} session={session} />}
        />
        <Route
          path="/category"
          exact
          render={() => <Category refetch={refetch} session={session} />}
        />
        <Route
          path="/"
          exact
          render={() => <Home refetch={refetch} session={session} />}
        />
        <Route
          path="/product"
          exact
          render={() => <Product refetch={refetch} session={session} />}
        />
        <Route
          path="/calismaSaatleri"
          exact
          render={() => <CalismaSaatleri refetch={refetch} session={session} />}
        />
        <Route
          path="/users"
          exact
          render={() => <Users refetch={refetch} session={session} />}
        />
        <Route
          path="/Users/NewUser"
          render={() => <NewUserForm refetch={refetch} session={session} />}
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
