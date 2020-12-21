import React, { Component } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import {
  KrediKartiHesapla,
  TicketHesapla,
  NakitHesapla,
  SodexoHesapla,
} from "../../../Helper/Cashier";
import CurrencyInput from "react-currency-input";

export default class CashierForm extends Component {
  state = {
    Nakit: {
      IkiYuz: 0,
      Yuz: 0,
      Elli: 0,
      Yirmi: 0,
      On: 0,
      Bes: 0,
      Bir: 0,
      SifirBes: 0,
      SifirYirmiBes: 0,
      SifirBir: 0,
      SifirSifirBes: 0,
    },
    Sodexo: {
      IkiYuz: 0,
      Yuz: 0,
      Elli: 0,
      Yirmi: 0,
      On: 0,
      Bes: 0,
      Bir: 0,
      SifirBes: 0,
      SifirYirmiBes: 0,
      SifirBir: 0,
      SifirSifirBes: 0,
    },
    Ticket: {
      IkiYuz: 0,
      Yuz: 0,
      Elli: 0,
      Yirmi: 0,
      On: 0,
      Bes: 0,
      Bir: 0,
      SifirBes: 0,
      SifirYirmiBes: 0,
      SifirBir: 0,
      SifirSifirBes: 0,
    },
    Visa: {
      Pos1: 0,
      Pos2: 0,
      Pos3: 0,
      Pos4: 0,
      Pos5: 0,
      Pos6: 0,
      Pos7: 0,
    },
    GunSonu: {
      TicketKuponGunSonu: 0,
      TicketGunSonu: 0,
      SodexoKuponGunSonu: 0,
      SetCardGunSonu: 0,
      MultinetGunSonu: 0,
      SeoCardGunSonu: 0,
      SinemaBiletiGunSonu: 0,
      YemekSepetiGunSonu: 0,
      SodexoGunSonu: 0,
      AvmKuponGunSonu: 0,
      MetropoGunSonu: 0,
    },
  };

  handlePos = (e) => {
    var PosArray = this.state.Visa;
    PosArray[e.target.name] = parseFloat(e.target.value);
    this.setState({ Visa: PosArray });
  };
  handleNakit = (e) => {
    var NakitArray = this.state.Nakit;
    NakitArray[e.target.name] = parseFloat(e.target.value);
    this.setState({ Nakit: NakitArray });
  };
  handleTicket = (e) => {
    var TicketArray = this.state.Ticket;
    TicketArray[e.target.name] = parseFloat(e.target.value);
    this.setState({ Ticket: TicketArray });
  };
  handleSodexo = (e) => {
    var SodexoArray = this.state.Sodexo;
    SodexoArray[e.target.name] = parseFloat(e.target.value);
    this.setState({ Sodexo: SodexoArray });
  };
  handleGunSonu = (e) => {
    var GunSonuArray = this.state.GunSonu;
    GunSonuArray[e.target.name] = parseFloat(e.target.value);
    this.setState({ GunSonu: GunSonuArray });
  };
  componentWillUnmount() {}
  SaveReport = () => {
    console.log(this.state);
  };
  render() {
    const TicketKuponToplami = () => {
      var TicketToplami = TicketHesapla(this.state.Ticket);
      return <span>{TicketToplami}</span>;
    };

    const SodexoKuponToplami = () => {
      var SodexoToplami = 0;
      SodexoToplami = SodexoHesapla(this.state.Sodexo);
      return <span>{SodexoToplami}</span>;
    };
    const NakitToplami = () => {
      var NakitToplami = 0;
      NakitToplami = NakitHesapla(this.state.Nakit);
      return <span>{NakitToplami}</span>;
    };
    const VisaToplami = () => {
      var VisaToplami = 0;
      VisaToplami = KrediKartiHesapla(this.state.Visa);
      return <span>{VisaToplami}</span>;
    };
    return (
      <div>
        <Header session={this.props.session} />
        <SideBar session={this.props.session} />

        <div class="content-wrapper">
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <div class="row">
                    <h1>Kasa</h1>
                  </div>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="/">Anasayfa</a>
                    </li>
                    <li class="breadcrumb-item active">Kasa Bildirimi</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section class="content">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Kasa Bildirimi</h3>
              </div>

              <div class="card-body">
                <div className="row">
                  <div className="col-sm-6">
                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Nakit</th>
                          <th>Ticket</th>
                          <th>Sodexo</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">200 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="IkiYuz"
                              min={0}
                              value={this.state.Nakit.IkiYuz}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="IkiYuz"
                              min={0}
                              value={this.state.Ticket.IkiYuz}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="IkiYuz"
                              min={0}
                              value={this.state.Sodexo.IkiYuz}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>100 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Yuz"
                              min={0}
                              value={this.state.Nakit.Yuz}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Yuz"
                              min={0}
                              value={this.state.Ticket.Yuz}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Yuz"
                              min={0}
                              value={this.state.Sodexo.Yuz}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>50 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Elli"
                              min={0}
                              value={this.state.Nakit.Elli}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Elli"
                              min={0}
                              value={this.state.Ticket.Elli}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Elli"
                              min={0}
                              value={this.state.Sodexo.Elli}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>20 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Yimir"
                              min={0}
                              value={this.state.Nakit.Yirmi}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Yirmi"
                              min={0}
                              value={this.state.Ticket.Yirmi}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Yimri"
                              min={0}
                              value={this.state.Sodexo.Yirmi}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>10 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="On"
                              min={0}
                              value={this.state.Nakit.On}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="On"
                              min={0}
                              value={this.state.Ticket.On}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Yuz"
                              min={0}
                              value={this.state.Sodexo.On}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>5 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Bes"
                              min={0}
                              value={this.state.Nakit.Bes}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Bes"
                              min={0}
                              value={this.state.Ticket.Bes}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Yuz"
                              min={0}
                              value={this.state.Sodexo.Bes}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>1 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Bir"
                              min={0}
                              value={this.state.Nakit.Bir}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Bir"
                              min={0}
                              value={this.state.Ticket.Bir}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Bir"
                              min={0}
                              value={this.state.Sodexo.Bir}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>0.5 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirBes"
                              min={0}
                              value={this.state.Nakit.SifirBes}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirBes"
                              min={0}
                              value={this.state.Ticket.SifirBes}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirBes"
                              min={0}
                              value={this.state.Sodexo.SifirBes}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>0.25 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirYirmiBes"
                              min={0}
                              value={this.state.Nakit.SifirYirmiBes}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirYirmiBes"
                              min={0}
                              value={this.state.Ticket.SifirYirmiBes}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirYirmiBes"
                              min={0}
                              value={this.state.Sodexo.SifirYirmiBes}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>0.1 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirBir"
                              min={0}
                              value={this.state.Nakit.SifirBir}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirBir"
                              min={0}
                              value={this.state.Ticket.SifirBir}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirBir"
                              min={0}
                              value={this.state.Sodexo.SifirBir}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>0.05 </th>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirSifirBes"
                              min={0}
                              value={this.state.Nakit.SifirSifirBes}
                              onChange={this.handleNakit}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="SifirSifirBes"
                              min={0}
                              value={this.state.Ticket.SifirSifirBes}
                              onChange={this.handleTicket}
                            />
                          </td>
                          <td>
                            <input
                              type="number"
                              style={{ width: 50 }}
                              name="Bir"
                              min={0}
                              value={this.state.Sodexo.SifirSifirBes}
                              onChange={this.handleSodexo}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-sm-6">
                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>POS1</th>
                          <td>
                            <CurrencyInput
                              name="Pos1"
                              style={{ width: 70 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.Visa.Pos1}
                              onChangeEvent={this.handlePos}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>POS2</th>
                          <td>
                            <CurrencyInput
                              name="Pos2"
                              style={{ width: 70 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.Visa.Pos2}
                              onChangeEvent={this.handlePos}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>POS3</th>
                          <td>
                            <CurrencyInput
                              name="Pos3"
                              style={{ width: 70 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.Visa.Pos3}
                              onChangeEvent={this.handlePos}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>POS4</th>
                          <td>
                            <CurrencyInput
                              name="Pos4"
                              style={{ width: 70 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.Visa.Pos4}
                              onChangeEvent={this.handlePos}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>POS5</th>
                          <td>
                            <CurrencyInput
                              name="Pos5"
                              style={{ width: 70 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.Visa.Pos5}
                              onChangeEvent={this.handlePos}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>POS6</th>
                          <td>
                            <CurrencyInput
                              name="Pos6"
                              style={{ width: 70 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.Visa.Pos6}
                              onChangeEvent={this.handlePos}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>POS7</th>
                          <td>
                            <CurrencyInput
                              name="Pos7"
                              style={{ width: 70 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.Visa.Pos7}
                              onChangeEvent={this.handlePos}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <table className="table">
                      <thead>
                        <tr>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Ticket /Sodexo Kupon </th>
                          <td>
                            <TicketKuponToplami />
                          </td>
                          <td>
                            <SodexoKuponToplami />
                          </td>
                        </tr>
                        <tr>
                          <th>Nakit /Visa Kupon </th>
                          <td>
                            <NakitToplami />
                          </td>
                          <td>
                            <VisaToplami />
                          </td>
                        </tr>
                        <tr>
                          <th>Multinet/Set Card Gün Sonu</th>
                          <td>
                            <CurrencyInput
                              name="MultinetGunSonu"
                              style={{ width: 80 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.GunSonu.MultinetGunSonu}
                              onChangeEvent={this.handleGunSonu}
                            />
                          </td>
                          <td>
                            <CurrencyInput
                              name="SetCardGunSonu"
                              style={{ width: 80 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.GunSonu.SetCardGunSonu}
                              onChangeEvent={this.handleGunSonu}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Ticket/Sodexo Gün Sonu</th>
                          <td>
                            <CurrencyInput
                              name="TicketGunSonu"
                              style={{ width: 80 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.GunSonu.TicketGunSonu}
                              onChangeEvent={this.handleGunSonu}
                            />
                          </td>
                          <td>
                            <CurrencyInput
                              name="SodexoGunSonu"
                              style={{ width: 80 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.GunSonu.SodexoGunSonu}
                              onChangeEvent={this.handleGunSonu}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Seo Card/Avm Kupon Gün Sonu</th>
                          <td>
                            <CurrencyInput
                              name="SeoCardGunSonu"
                              style={{ width: 80 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.GunSonu.SeoCardGunSonu}
                              onChangeEvent={this.handleGunSonu}
                            />
                          </td>
                          <td>
                            <CurrencyInput
                              name="AvmKuponGunSonu"
                              style={{ width: 80 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.AvmKuponGunSonu}
                              onChangeEvent={this.handleGunSonu}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Sinema Bİleti/Metropol Gün Sonu</th>
                          <td>
                            <CurrencyInput
                              name="SinemaBiletiGunSonu"
                              style={{ width: 80 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.SinemaBiletiGunSonu}
                              onChangeEvent={this.handleGunSonu}
                            />
                          </td>
                          <td>
                            <CurrencyInput
                              name="MetropolGunSonu"
                              style={{ width: 80 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.MetropoGunSonu}
                              onChangeEvent={this.handleGunSonu}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th>Yemek Sepeti</th>
                          <td>
                            <CurrencyInput
                              name="YemekSepetiGunSonu"
                              style={{ width: 80 }}
                              decimalSeparator="."
                              thousandSeparator=","
                              value={this.state.YemekSepetiGunSonu}
                              onChangeEvent={this.handleGunSonu}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <button className="btn btn-primary" onClick={this.SaveReport}>
                  Kaydet
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
