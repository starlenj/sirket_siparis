import React, { Component, Fragment } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import Menu from "../../Menu/index";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container" style={{ marginTop: 30 }}>
          <div class="row">
            <div className="flex-xl-left col-md-3">
              <SideBar
                session={this.props.session}
                refetch={this.props.refetch}
              />
            </div>
            <div className="flex-xl-left col-md-8">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
