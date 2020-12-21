import React, { Component } from "react";

export default class SideBar extends Component {
  render() {
    return (
      <div class="card mb-3" style={{ marginTop: 20, fontSize: 13 }}>
        <div class="card-header bg-danger" style={{ color: "white" }}>
          Sepetim
        </div>
        <div class="card-body">
          <p class="card-text" style={{ textAlign: "center" }}>
            <i
              class="fa fa-shopping-basket fa-2x"
              style={{ color: "#e1e1e1", textAlign: "center" }}
            ></i>
            <br />
            Sepetiniz Henüz Boş
          </p>
        </div>
      </div>
    );
  }
}
