import React, { Component } from "react";

export default class Toast extends Component {
  GetMessage(Status, Message, Title) {
    if (Status === "Success") {
      window.toastr.success(Title, Message);
    } else {
      window.toastr.error(Title, Message);
    }
  }
}
