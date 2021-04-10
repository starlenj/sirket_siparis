import React, { Component, useEffect } from "react";
import axios from "axios";
 class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    let mailAt = axios.post("http://85.105.113.179:3000/api/v1.0.1/Mailgonder", {
      subject: `magazasiparis.error`, mailTo: `emreatessoy@gmail.com`, message: `Hata bilgisi ${this.props.message} linki bilgisi ${window.location}
      Sepet Bilgisi ${localStorage.getItem("Sepet")}`
    });
    localStorage.clear();
  }

  render() {
    if (this.state.hasError) {
      return <div><a href="#" onClick={() => window.location.reload()}>Baglantinizda bir hata olustu lutfen baglantiya tiklayiniz</a></div>;
    }
    return this.props.children;
  }
}

export default Error;
