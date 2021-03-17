import React, { Component, Fragment } from "react";
import { Modal, Button } from "react-bootstrap";
import PaketData from "../../Data/Paket.json";
import Select from "react-select";
export default class Header extends Component {
  state = {
    Bolge: "",
    SiparisTuru: "",
    Sube: "",
    PaketModal: false,
    OrderType: "",
    SiparisZamani: false,
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const now = new Date().getHours();
    if (now >= 20 || now < 11) {
      this.setState({ SiparisZamani: true });
    }
    //this.setState({ Sube: localStorage.getItem("SUBE") });
    const urlParams = new URLSearchParams(window.location.search);
    const SiparisTuru = urlParams.get("SiparisTuru");
    var Sepet = localStorage.getItem("Sepet");

    if (Sepet === null) {
      localStorage.setItem("Sepet", "[]");
    }
    localStorage.setItem("siparis_turu", SiparisTuru);
    const Sube = urlParams.get("Sube");
    if (Sube === null) {
      this.setState({ PaketModal: true });
    } else {
      if (SiparisTuru === null) {
        localStorage.setItem("SUBE", Sube);
        this.setState({ PaketModal: true, Sube });
      } else {
        localStorage.setItem("SUBE", Sube);
        this.setState({ Sube });
      }
    }
  }
  HandleBolge = (e) => {
    if (e.value !== "") {
      /*if( e.SubeId==="bahcelievler"){
        alert("Tadilat nedeniyle bahçelievler subemiz kapalidir..");
        return;
      }*/
      this.setState({ Bolge: e.value });
      localStorage.setItem("Bolge", e.value);
      localStorage.setItem("BolgeTutar", e.MinimumTutar);
      window.location.href =
        "?SiparisTuru=Paket&&Sube=" +
        e.SubeId
      // window.location.reload();
    }
  };
  HandleServisTuru = (e) => {
    var target = e.target.options;
    for (var i = 0; i < target.length; i++) {
      if (target[i].selected) {
        if (target[i].value !== "") {
          localStorage.setItem("siparis_turu", target[i].value);
          this.setState({ SiparisTuru: target[i].value });
          if (target[i].value !== 'Paket') {
            if (this.state.Sube != "") {
              window.location.href =
                "?SiparisTuru=" +
                target[i].value +
                "&&Sube=" +
                this.state.Sube;
            }
          }

          // localStorage.removeItem("Sepet");
          // window.location.reload();
        }
      }
    }
  };
  handleSube = (e) => {
    var target = e.target.options;
    for (var i = 0; i < target.length; i++) {
      if (target[i].selected) {
        if (target[i].value !== "") {
          /*if(target[i].value==="bahcelievler"){
            alert("Tadilat nedeniyle bu subemiz kapalidir..");
            return;
          }*/
          localStorage.setItem("SUBE", target[i].value);
          this.setState({ Sube: target[i].value });
          window.location.href =
            "?SiparisTuru=" +
            this.state.SiparisTuru +
            "&&Sube=" +
            target[i].value;
          // localStorage.removeItem("Sepet");
          // window.location.reload();
        }
      }
    }
  };
  onChange(e) {
    var arr = [];
    var target = e.target.options;
    for (var i = 0; i < target.length; i++) {
      if (target[i].selected) {
        this.setState({ OrderType: target[i].value });
        window.location.href =
          "?SiparisTuru=" + target[i].value + "&&Sube=" + this.state.Sube;
        //localStorage.setItem("SiparisTuru", target[i].value);
        //window.location.reload();
      }
    }
  }
  render() {
    var PaketValue = PaketData.sort((a, b) =>
      a.value.toLowerCase() > b.value.toLowerCase() ? 1 : -1
    );
    const { Sube } = this.state;
    return (
      <div>
        <Modal
          show={this.state.PaketModal}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Sipariş Türü ve Şube Seçimi </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lütfen Sipariş Türünü Seçiniz
            <select className="form-control" onChange={this.HandleServisTuru}>
              <option>--Lütfen Seçiniz--</option>
              <option value="Paket">Paket Servis</option>
              <option value="Gel-Al">Gel-Al</option>
              <option value="Arabaya Servis">Arabaya Servis</option>
            </select>
            {this.state.SiparisTuru === "Arabaya Servis" && (
              <div className="form-group">
                <label>Lütfen Şubenizi Seçiniz </label>
                <select
                  className="form-control"
                  style={{ width: "100%" }}
                  name="SubeSelect"
                  onChange={this.handleSube}
                >
                  <option selected={Sube === ""} value="">
                    ---Şube Seçiniz---
                  </option>
                  <option selected={Sube === "ankamall"} value="ankamall">
                    Ankamall
                  </option>
                  <option selected={Sube === "armada"} value="armada">
                    Armada
                  </option>
                  <option selected={Sube === "atakule"} value="atakule">
                    Atakule
                  </option>


                  <option selected={Sube === "arcadium"} value="arcadium">
                    Arcadium
                  </option>
                  <option selected={Sube === "mersin"} value="mersin">
                    Mersin
                  </option>
                  <option selected={Sube === "adana"} value="adana">
                    Adana
                  </option>

                  <option
                    selected={Sube === "bahcelievler"}
                    value="bahcelievler"
                    disabled={true}
                  >
                    Bahçelievler (Tadilat nedeniyle kapaliyiz)
                  </option>
                  <option selected={Sube === "bilkent"} value="bilkent">
                    Bilkent
                  </option>
                  <option selected={Sube === "cepa"} value="cepa">
                    Cepa
                  </option>
                  <option selected={Sube === "gordion"} value="gordion">
                    Gordion
                  </option>
                  <option selected={Sube === "kasmir"} value="kasmir">
                    Kaşmir
                  </option>
                  <option selected={Sube === "umitkoy"} value="umitkoy">
                    Ümitköy
                  </option>
                  <option selected={Sube === "batikent"} value="batikent">
                    Batıkent
                  </option>
                  <option selected={Sube === "eskisehir"} value="eskisehir">
                    Eskişehir
                  </option>
                </select>
              </div>
            )}
            {this.state.SiparisTuru === "Gel-Al" && (
              <div className="form-group">
                <label>Lütfen Şubenizi Seçiniz </label>
                <select
                  className="form-control"
                  style={{ width: "100%" }}
                  name="SubeSelect"
                  onChange={this.handleSube}
                >
                  <option selected={Sube === ""} value="">
                    ---Şube Seçiniz---
                  </option>
                  <option selected={Sube === "ankamall"} value="ankamall">
                    Ankamall
                  </option>
                  <option selected={Sube === "armada"} value="armada">
                    Armada
                  </option>
                  <option selected={Sube === "atakule"} value="atakule">
                    Atakule
                  </option>

                  <option selected={Sube === "arcadium"} value="arcadium">
                    Arcadium
                  </option>
                  <option selected={Sube === "mersin"} value="mersin">
                    Mersin
                  </option>
                  <option selected={Sube === "adana"} value="adana">
                    Adana
                  </option>

                  <option
                    selected={Sube === "bahcelievler"}
                    value="bahcelievler"
                    disabled={true}
                  >
                    Bahçelievler (Tadilat nedeniyle kapaliyiz)
                  </option>
                  <option selected={Sube === "bilkent"} value="bilkent">
                    Bilkent
                  </option>
                  <option selected={Sube === "cepa"} value="cepa">
                    Cepa
                  </option>
                  <option selected={Sube === "gordion"} value="gordion">
                    Gordion
                  </option>
                  <option selected={Sube === "kasmir"} value="kasmir">
                    Kaşmir
                  </option>
                  <option selected={Sube === "umitkoy"} value="umitkoy">
                    Ümitköy
                  </option>
                  <option selected={Sube === "batikent"} value="batikent">
                    Batıkent
                  </option>
                  <option selected={Sube === "eskisehir"} value="eskisehir">
                    Eskişehir
                  </option>
                </select>
              </div>
            )}
            {this.state.SiparisTuru === "Paket" && (
              <div className="form-group">
                <label>Lütfen Bölge Seçiniz</label>
                <Select options={PaketValue} onChange={this.HandleBolge} />
              </div>
            )}
          </Modal.Body>
        </Modal>


        <Modal
          show={this.state.SiparisZamani}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Sipariş </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>
              Paket servis hizmet saatlerimiz 11:00 ile 20:00 arasındadır.
            </span>
          </Modal.Body>
        </Modal>


        <nav class="navbar navbar-light bg-dark">
          <div className="container">
            <a class="navbar-brand" href="#">
              <img
                src="https://www.hmbrgr.co/wp-content/uploads/2019/04/logo-beyaz.png"
                width="90"
                height="60"
                class="d-inline-block align-top"
              />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
