import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./component/pages/User/Login";
import Home from "./component/pages/User/Home";
import sessionWrapperHOC from "./component/sessionWrapper";
import { applyMiddleware, createStore } from "redux";
import RootReducer from "./Resolver/index";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import OdemeBasarili from "./component/pages/Odeme/OdemeBasarili";
import OdemeBasarisiz from "./component/pages/Odeme/OdemeBasarisiz";
const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const Root = ({ refetch, session }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route
            path="/OdemeBasarili"
            exact
            render={() => <OdemeBasarili refetch={refetch} session={session} />}
          />
          <Route
            path="/OdemeBasarisiz"
            exact
            render={() => (
              <OdemeBasarisiz refetch={refetch} session={session} />
            )}
          />
          <Route
            path="/:SubeAdi"
            exact
            component={(props) => {
              var SubeAdi = props.match.params.SubeAdi;

              window.location.href = "/?Sube=" + SubeAdi;
            }}
          />
          <Route
            path="/"
            exact
            render={() => <Home refetch={refetch} session={session} />}
          />
          <Route path="/login" render={() => <Home refetch={refetch} />} />
          <Redirect to="/" />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </Provider>
);
const RootWithSessionWrapper = sessionWrapperHOC(Root);
export default class App extends Component {
  render() {
    return <RootWithSessionWrapper />;
  }
}
