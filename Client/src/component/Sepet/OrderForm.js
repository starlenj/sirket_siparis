import React, { Component } from "react";

export default class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.handleSiparisTuru = this.handleSiparisTuru.bind(this);
  }

  state = { PaketAktif: true, GelAlAktif: true, ArabaServisAktif: true };
  onChange = (e) => {
    if (e.target.name === "PaymentType") {
      var arr = [];
      var target = e.target.options;
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          this.setState({ PaymentType: target[i].value });
        }
      }
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

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
        <div class="card-header bg-danger" style={{ color: "white" }}>
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

          <div className="form-group" style={{ marginBottom: 20 }}>
            <label style={{ fontWeight: "bold" }}>Ad Soyad : </label>
            <input
              type="text"
              className="form-control"
              name="CustomerName"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: 20 }}>
            <label style={{ fontWeight: "bold" }}>Telefon : </label>
            <input
              type="text"
              className="form-control"
              name="Phone"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group" style={{ marginBottom: 20 }}>
            <label style={{ fontWeight: "bold" }}>Ödeme Türü </label>
            <select
              className="form-control"
              name="PaymentType"
              onChange={this.onChange}
            >
              <option>..Lütfen Seçiniz ..</option>
              <option value="Nakit">Nakit</option>
              <option value="Kredi Kartı">Kredi Kartı</option>
              <option value="Sodexo">Sodexo</option>
              <option value="Ticket">Ticket</option>
              <option value="Multinet">Multinet</option>
              <option value="Set Card">Set Card</option>
              <option value="Metropol Card">Metropol Card</option>
              <option value="Yakında..." disabled>
                Online Ödeme (Yakında)
              </option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
