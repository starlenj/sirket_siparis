import React, { Component, useRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { Query, Subscription, Mutation } from "react-apollo";
import {
  GET_ORDER_DETAILS,
  SIPARIS_ONAY,
  SIPARIS_REDDET,
} from "../../../queries";
import { ReddetSmsGonder, KabulSmsGonder } from '../../../Helper/Sms';
import PrintOrder from './PrintOrder';
export default class OrderDetail extends Component {
  state = { IptalSebebi: "", OrderData: [], Phone: "", Options: [], Toplam: "", id: "", OrderType: "" };
  constructor(props) {
    super(props);
    this.HandleIptalSebebi = this.HandleIptalSebebi.bind(this);
  }
  GetOptions(OrderData, data) {
    var arr = [];
    var Topla = data.Order.OrderType === "Paket" ? 0 : 0;
    OrderData.map((order) => {
      console.log(data);
      Topla += parseFloat(order.Price) * parseInt(order.Quantity);
      order.SelectOrderOption.map((options) => {
        arr.push({ Name: options.OrderOptions[0].Name });
      });
    });

    this.setState({
      id: OrderData[0].OrderHeaderId,
      OrderType: data.Order.OrderType,
    });
    this.setState({ Options: arr, Toplam: Topla, Phone: data.Order.Phone });
  }
  HandleIptalSebebi(e) {
    this.setState({ IptalSebebi: e.target.value });
  }
  SiparisOnayla = async (SiparisOnay) => {
    if (this.state.OrderType === "Paket") {
      let result = await SiparisOnay();
      if (result) {
        console.log(result);
        let smsresponse = await KabulSmsGonder(this.state.Phone, this.props.session.ActiveUser.Sube);
        console.log(smsresponse);
        if (smsresponse.status == "200") {
          window.location.href = "/orders";
        }
      }
    }
    let result = await SiparisOnay();
    if (result)
      window.location.href = "/orders";
  };

  SiparisReddet = async (SiparisReddet) => {
    if (this.state.IptalSebebi === "") {
      alert("İptal Nedeni Zorunludur!!");
      return;
    }
    let result = await SiparisReddet()
    if (result) {

      ///SMS GÖNDERME BURADA OLACAK
      let smsresponse = await ReddetSmsGonder(this.state.Phone, this.state.IptalSebebi, this.props.session.ActiveUser.Sube)
      if (smsresponse.status == "200") {
        window.location.href = "/orders";
      }

    }
  };
  render() {
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
                    <h1>Şipariş</h1>
                  </div>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="/">Anasayfa</a>
                    </li>
                    <li class="breadcrumb-item active">Sipariş Listesi</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section class="content">
            <div className="row col-md-12">
              <div class="card col-md-5">
                <div class="card-header bg-primary">
                  <h3 class="card-title">Sipariş</h3>
                </div>
                <div class="card-body">
                  <table className="table">
                    <thead>
                      <tr></tr>
                    </thead>
                    <Query
                      query={GET_ORDER_DETAILS}
                      variables={{ id: localStorage.getItem("OrderId") }}
                      onCompleted={(data) =>
                        this.GetOptions(data.Order.Order, data)
                      }
                    >
                      {({ loading, data, error }) => {
                        if (loading)
                          return <div className="loading">Loading...</div>;
                        if (error) return <div>Error</div>;

                        return (
                          <tbody>
                            <tr>
                              <td>Durum :</td>
                              <td>
                                {data.Order.OrderStatus === 1 ? (
                                  <span class="badge badge-success">
                                    Onaylanmış
                                  </span>
                                ) : (
                                    <span class="badge badge-warning">
                                      Onaylanmamış
                                    </span>
                                  )}
                              </td>
                            </tr>
                            <tr>
                              <td>Ödeme Şekli :</td>
                              <td>
                                <span>
                                  <b>{data.Order.PaymentType}</b>
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>Müşteri :</td>
                              <td>
                                <b>{data.Order.CustomerName}</b>
                              </td>
                            </tr>
                            <tr>
                              <td>Telefon : </td>
                              <td>
                                <b>{data.Order.Phone}</b>
                              </td>
                            </tr>
                            <tr>
                              <td>Adres /Açıklama: </td>
                              <td>
                                <b>{data.Order.Aciklama}</b>
                              </td>
                            </tr>
                            <tr>
                              <td>Plaka : </td>
                              <td>
                                <b>{data.Order.Plaka}</b>
                              </td>
                            </tr>
                            <tr>
                              <td>Müşteri Notu : </td>
                              <td>
                                <b>{data.Order.Note}</b>
                              </td>
                            </tr>
                          </tbody>
                        );
                      }}
                    </Query>
                  </table>
                </div>
              </div>

              <div class="card col-md-12">
                <div class="card-header bg-success">
                  <h3 class="card-title">Sipariş Bilgileri</h3>
                </div>
                <div class="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <td>Ürün</td>
                        <td>Seçenekler</td>
                        <td>Miktar</td>
                        <td>Fiyat</td>
                        <td>Toplam</td>
                      </tr>
                    </thead>
                    <Query
                      query={GET_ORDER_DETAILS}
                      variables={{ id: localStorage.getItem("OrderId") }}
                    >
                      {({ loading, data, error }) => {
                        if (loading)
                          return <div className="loading">Loading...</div>;
                        if (error) return <div>Error</div>;
                        return (
                          <tbody>
                            {data.Order.Order !== undefined
                              ? data.Order.Order.map((orders) => {
                                return (
                                  <tr>
                                    <td>{orders.Product[0].Name}</td>
                                    <td>
                                      {orders.SelectOrderOption.map(
                                        (option) => (
                                          <div>
                                            {option.OrderOptions[0].Name}
                                          </div>
                                        )
                                      )}
                                    </td>
                                    <td>{orders.Quantity}</td>
                                    <td>
                                      {parseFloat(orders.Price).toFixed(2)}
                                    </td>
                                    <td>
                                      {(
                                        parseFloat(orders.Price) *
                                        parseInt(orders.Quantity)
                                      ).toFixed(2)}
                                    </td>
                                  </tr>
                                );
                              })
                              : ""}
                          </tbody>
                        );
                      }}
                    </Query>
                  </table>
                </div>
              </div>
              <div class="card col-md-4">
                <div class="card-header bg-dark">
                  <h3 class="card-title">Sipariş Toplamı</h3>
                </div>
                <div class="card-body">
                  <div className="row">
                    <span style={{ marginLeft: 20 }}>
                      {" "}


                      <br />
                      <span>TOPLAM :</span>
                      {"    "}
                      {this.state.OrderType === "Paket" ? (
                        <span>
                          {parseFloat(
                            this.state.Toplam
                          ).toFixed(2)}
                        </span>
                      ) : (
                          <span>{parseFloat(this.state.Toplam).toFixed(2)}</span>
                        )}
                    </span>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div
                className="col-md-4"
                style={{ marginLeft: 200, marginTop: 50 }}
              >

                <a
                  href="https://panel.hmbrgr.com.tr/printapp"
                  target="_blank"
                  className="btn btn-secondary"
                  style={{ width: "100%" }}

                >
                  Yazdır
                    </a>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  style={{ width: "100%" }}
                  data-toggle="modal"
                  data-target="#ReddetModal"
                >
                  Reddet
                    </button>
                <br />
                <br />

                <Mutation
                  mutation={SIPARIS_ONAY}
                  variables={{ id: this.state.id }}
                >
                  {(SiparisOnay, { loading, error }) => (
                    <button
                      className="btn btn-primary"
                      style={{ width: "100%" }}
                      onClick={() => this.SiparisOnayla(SiparisOnay)}
                    >
                      Onayla
                    </button>
                  )}
                </Mutation>
              </div>
            </div>
          </section>
          <div class="modal" tabindex="-1" role="dialog" id="ReddetModal">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">İptal Nedeni</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Lüften İptal Nedenini Seçiniz..</p>
                  <select className="form-control" onChange={this.HandleIptalSebebi} name="IptalSebebi">
                    <option value="">--Lütfen Seçiniz--</option>
                    <option value="Adres Eksikliği">Adres Eksikliği</option>
                    <option>Bölge Tutar Altında</option>
                    <option>Gecikmeden Dolayı Kullanıcı İptali</option>
                    <option>Gönderim Bölge Dışı</option>
                    <option>Hava Muhalefeti</option>
                    <option>Kullanıcı Birden Fazla Sipariş Verdi</option>
                    <option>Kullanıcı Siparişi İptal Etmek İstedi</option>
                    <option>Kullanıcı Notu Geçersiz</option>
                    <option>Motorcu/Motor Problemi</option>
                    <option>Ödemek Şekli Yok/Pos Cihazı Arızalı</option>
                    <option>Restorant Kapalı Erken Kapama</option>
                    <option>Sipariş Kapıda Kullanıcıya Ulaşılamıyor</option>
                    <option>Sipariş Kapıdan Döndü</option>
                    <option>Telefon Hatalı/Kullanılmıyor</option>
                    <option>Ürün Yok</option>
                    <option>Yoğunluk</option>
                  </select>
                </div>
                <div class="modal-footer">
                  <Mutation
                    mutation={SIPARIS_REDDET}
                    variables={{ id: this.state.id, OrderCancelInfo: this.state.IptalSebebi }}
                  >
                    {(SiparisReddet, { loading, error }) => (
                      <button
                        className="btn btn-danger"
                        onClick={() => this.SiparisReddet(SiparisReddet)}
                      >
                        Tamam
                      </button>
                    )}
                  </Mutation>


                  <button type="button" class="btn btn-secondary" data-dismiss="modal">İptal</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
