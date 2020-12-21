import React, { Component } from "react";

export default class SiparisTuru extends Component {
  constructor(props) {
    super(props);
    this.handleSiparisTuru = this.handleSiparisTuru.bind(this);
  }
  state = { PaketAktif: true, GelAlAktif: true, ArabaServisAktif: true };
  handleSiparisTuru = (e) => {
    if (e.target.name === "Paket") {
      if (localStorage.getItem("SiparisTuru") === "Paket") {
        localStorage.removeItem("SiparisTuru");
        this.setState({
          GelAlAktif: true,
          ArabaServisAktif: true,
        });
      } else {
        localStorage.setItem("SiparisTuru", "Paket");
        this.setState({ GelAlAktif: false, ArabaServisAktif: false });
      }
    } else if (e.target.name === "GelAl") {
      if (localStorage.getItem("SiparisTuru") === "GelAl") {
        localStorage.removeItem("SiparisTuru");
        this.setState({
          PaketAktif: true,
          ArabaServisAktif: true,
        });
      } else {
        localStorage.setItem("SiparisTuru", "GelAl");
        this.setState({ PaketAktif: false, ArabaServisAktif: false });
      }
    } else if (e.target.name === "ArabayaServis") {
      if (localStorage.getItem("SiparisTuru") === "ArabayaServis") {
        localStorage.removeItem("SiparisTuru");
        this.setState({
          PaketAktif: true,
          GelAlAktif: true,
        });
      } else {
        localStorage.setItem("SiparisTuru", "ArabayaServis");
        this.setState({ PaketAktif: false, GelAlAktif: false });
      }
    }
  };
  render() {
    return (
      <div class="card mb-3" style={{ marginTop: 20, fontSize: 13 }}>
        <div
          class="card-header"
          style={{ color: "white", backgroundColor: "#E77F3F" }}
        >
          Sipariş Türü
        </div>
        <div class="card-body">
          <div className="row">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="GelAl"
                disabled={!this.state.GelAlAktif}
                onChange={this.handleSiparisTuru}
              />
              <label class="form-check-label" htmlFor="exampleCheck1">
                Gel-Al
              </label>
            </div>
          </div>
          <div className="row">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                name="ArabayaServis"
                disabled={!this.state.ArabaServisAktif}
                onChange={this.handleSiparisTuru}
              />
              <label class="form-check-label" htmlFor="exampleCheck1">
                Arabaya Servis
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
