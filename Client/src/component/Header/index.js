import React, { useEffect, Component, Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Select from "react-select";
import { Query } from "react-apollo";
import { useQuery } from "react-apollo";
import { GET_SUBES, GET_BOLGE_SEHIR } from "../../queries/index";
import { GetBolge } from "../../Helper/bolge";
const Header = ({ props }) => {
  /*
    Bolge: "",
    SiparisTuru: "",
    Sube: "",
    Sehir: "",
    PaketModal: false,
    OrderType: "",
    SiparisZamani: false,
	*/
  const [siparisTuru, setSiparisTuru] = useState("");
  const [sehir, setSehir] = useState("");
  const [bolge, setBolge] = useState([]);
  const [paketValue, setPaketValue] = useState([]);
  const [sube, setSube] = useState([]);
  const [siparisZamani, setSiparisZamani] = useState(false);
  const [paketModal, setPaketModal] = useState(false);
  useEffect(() => {
    const now = new Date().getHours();
    if (now >= 21 || now < 11) {
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
      setPaketModal(true);
    } else {
      if (SiparisTuru === null) {
        localStorage.setItem("SUBE", Sube);
        setPaketModal(true);
        setSube(Sube);
      } else {
        localStorage.setItem("SUBE", Sube);
        setSube(Sube);
      }
    }
  }, []);
  const HandleSehir = async (e) => {
    if (e.target.value !== "") {
      setSehir(e.target.value);
      localStorage.setItem("Sehir", e.target.value);
      let response = await GetBolge(e.target.value);
      console.log(response);
    }
  };
  const HandleBolge = (e) => {
    if (e.value !== "") {
      setBolge(e.value);
      localStorage.setItem("Bolge", e.value);
      localStorage.setItem("BolgeTutar", e.MinimumTutar);
      window.location.href = "?SiparisTuru=Paket&&Sube=" + e.SubeId;
      // window.location.reload();
    }
  };
  const HandleServisTuru = (e) => {
    var target = e.target.options;
    for (var i = 0; i < target.length; i++) {
      if (target[i].selected) {
        if (target[i].value !== "") {
          localStorage.setItem("siparis_turu", target[i].value);
          this.setState({ SiparisTuru: target[i].value });
          setSiparisTuru(target[i].value);
          if (target[i].value !== "Paket") {
            if (this.state.Sube != "") {
              window.location.href =
                "?SiparisTuru=" + target[i].value + "&&Sube=" + this.state.Sube;
            }
          }

          // localStorage.removeItem("Sepet");
          // window.location.reload();
        }
      }
    }
  };
  const handleSube = (e) => {
    var target = e.target.options;
    const now = new Date().getHours();
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
  const onChange = (e) => {
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
  };
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
            </select>
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
                  <option
                    selected={Sube === "ankamall"}
                    value="ankamall"
                  >
                    Ankamall
                  </option>
                  <option
                    selected={Sube === "armada"}
                    value="armada"
                  >
                    Armada
                  </option>
                  <option selected={Sube === "atakule"} value="atakule">
                    Atakule
                  </option>

                  <option
                    selected={Sube === "arcadium"}
                    value="arcadium"
                  >
                    Arcadium
                  </option>
                  <option
                    selected={Sube === "mersin"}
                    value="mersin"
                  >
                    Mersin
                  </option>
                  <option
                    selected={Sube === "adana"}
                    value="adana"
                  >
                    Adana
                  </option>

                  <option
                    selected={Sube === "bahcelievler"}
                    value="bahcelievler"
                  >
                    Bahçelievler
                  </option>
                  <option selected={Sube === "bilkent"} value="bilkent">
                    Bilkent
                  </option>
                  <option
                    selected={Sube === "cepa"}
                    value="cepa"
                  >
                    Cepa
                  </option>
                  <option
                    selected={Sube === "gordion"}
                    value="gordion"
                  >
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
                  <option selected={Sube === "incek"} value="incek">
                    Incek 
                  </option>
                  <option selected={Sube === "tunali"} value="tunali">
                    Tunalı 
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
              Servis hizmet saatlerimiz 11:00 ile 21:00 arasındadır.
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

  return (
    <div>
      <Modal
        show={paketModal}
        onHide={() => setPaketModal(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Sipariş Türü ve Şube Seçimi{paketValue} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lütfen Sipariş Türünü Seçiniz
          <select className="form-control" onChange={HandleServisTuru}>
            <option>--Lütfen Seçiniz--</option>
            <option value="Paket">Paket Servis</option>
            <option value="Gel-Al">Gel-Al</option>
          </select>
          {siparisTuru === "Gel-Al" && (
            <Query query={GET_SUBES}>
              {({ loading, data, error }) => {
                if (loading) return <div className="loading">Loading...</div>;
                return (
                  <div className="form-group">
                    <label>Lütfen Şubenizi Seçiniz </label>
                    <select
                      className="form-control"
                      style={{ width: "100%" }}
                      name="SubeSelect"
                      onChange={this.handleSube}
                    >
                      <option selected={sube === ""} value="">
                        ---Şube Seçiniz---
                      </option>
                      {data.Subes.length > 0 &&
                        data.Subes.map((sube) => <option>{sube.Name}</option>)}
                    </select>
                  </div>
                );
              }}
            </Query>
          )}
          {siparisTuru === "Paket" && (
            <div>
              Lutfen Sehir Seciniz
              <select className="form-control" onChange={HandleSehir}>
                <option>--Lütfen Sehir Seçiniz--</option>
                <option value="ankara">Ankara</option>
                <option value="eskisehir">Eskisehir</option>
              </select>
            </div>
          )}
          {siparisTuru === "Paket" && (
            <div className="form-group">
              <label>Lütfen Bölge Seçiniz</label>
              <Select options={paketValue} onChange={HandleBolge} />
            </div>
          )}
        </Modal.Body>
      </Modal>

      <Modal
        show={siparisZamani}
        onHide={() => setSiparisZamani(false)}
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
};
export default Header;

