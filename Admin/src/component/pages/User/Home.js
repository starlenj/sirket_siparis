import React, { Component, Fragment } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import Menu from "../../Menu/index";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header session={this.props.session} />
        <SideBar session={this.props.session} />
      </div>
    );
  }
}
