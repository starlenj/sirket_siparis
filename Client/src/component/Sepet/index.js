import React, { Component } from "react";
import { Mutation } from "react-apollo";
import {
  CREATE_ORDER_HEADER,
  CREATE_ORDER_BODY,
  CREATE_SELECT_ORDER_OPTIONS,
} from "../../queries/index";
import SweetAlert from "sweetalert2-react";
import SiparisTuru from "../pages/SiparisTuru";
import { Modal, Button } from "react-bootstrap";
export default class Sepet extends Component {
  state = {
    showArabayaServis: false,
    SiparisOnayi: false,
    Order: [],
    PaymentType: "",
    Phone: "",
    CustomerName: "",
    show: false,
    Plaka: "",
    Aciklama: "",
    OrderType: "",
    Adres: "",
    Il: "",
    Ilce: "",
    Sube: "",
    PaketModal: false,
    showPaketServis: false,
    Note: "",
  };
  handleClose = () => {
    this.setState({ SiparisOnayi: false });
  };
  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const SiparisTuru = urlParams.get("SiparisTuru");
    const Sube = urlParams.get("Sube");
    if (SiparisTuru !== null) {
      this.setState({ OrderType: SiparisTuru });
    }
    if (Sube != null) {
      this.setState({ Sube });
    }
    this.SetSepet();
  }
  onChange = (e) => {
    if (e.target.name === "PaymentType") {
      var arr = [];
      var target = e.target.options;
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          this.setState({ PaymentType: target[i].value });
        }
      }
    }

    if (e.target.name === "OrderType") {
      var arr = [];
      var target = e.target.options;
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          this.setState({ OrderType: target[i].value });
          window.location.href = "?SiparisTuru=" + target[i].value;
          //localStorage.setItem("SiparisTuru", target[i].value);
          //window.location.reload();
        }
      }
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  SetSepet = () => {
    const Sepet = localStorage.getItem("Sepet");
    if (Sepet === null) {
      return;
    } else {
      const SepetList = JSON.parse(Sepet);
      console.log(SepetList);

      this.setState({ Order: SepetList });
    }
  };
  MiktarArtir = (order, index) => {
    var Orders = this.state.Order;
    Orders[index].Quantity = Orders[index].Quantity + 1;
    this.setState({ Order: Orders });
    localStorage.setItem("Sepet", JSON.stringify(Orders));
  };
  MiktarAzat = (index) => {
    var Orders = this.state.Order;
    if (Orders[index].Quantity === 1) return;
    else Orders[index].Quantity = Orders[index].Quantity - 1;
    this.setState({ Order: Orders });
    localStorage.setItem("Sepet", JSON.stringify(Orders));
  };
  handleClose = () => {
    this.setState({ PaketModal: false });
  };
  RemoveItem = (index) => {
    let ArrayIndex = index + 1;
    var Orders = this.state.Order;
    Orders.splice(index, 1);
    this.setState({ Order: Orders });
    localStorage.setItem("Sepet", JSON.stringify(Orders));
  };
  SiparisVer = (
    CreateOrderHeader,
    CreateOrderBody,
    CreateSelectOrderOptions
  ) => {
    if (this.state.OrderType === "Paket") {

      var Topla = this.state.OrderType === "Paket" ? 0 : 0;

      this.state.Order.map((order) => {
        Topla +=
          (parseFloat(order.Price) + parseFloat(order.ExtraPrice)) *
          parseInt(order.Quantity);
      });
      if (Topla < localStorage.getItem("BolgeTutar")) {
        alert(
          "Sipariş tutarınız yetersizdir.Bölge limiti " +
          localStorage.getItem("BolgeTutar") +
          " TL'dir"
        );
        return;
      }
    }
    if (this.state.PaymentType === "Online Ödeme") {
      if (localStorage.getItem("SUBE") === null || undefined) {
        alert("Lütfen Şube Seçimini Yapınız");
        return;
      }

      if (this.state.PaymentType === "" || undefined) {
        alert("Lütfen Ödeme türünüzü Seçiniz");
        return;
      }
      if (this.state.CustomerName === "" || undefined) {
        alert("Lütfen Ad Soyad Bilgisini Giriniz..");
        return;
      }
      if (this.state.OrderType === "Paket") {
        if (this.state.Note === "" || undefined) {
          alert("Lütfen Adres Bilgisini Giriniz..");
          return;
        }
      }

      if (this.state.OrderType === "Gel-Al") {
        if (this.state.Phone === "" || undefined) {
          alert("Lütfen Telefonunuzu Giriniz..");
          return;
        }
      }

      if (this.state.OrderType === "Arabaya Servis") {
        if (this.state.Plaka === "") {
          alert("Plaka ve Açıklama Zorunludur.");
          return;
        }
        if (this.state.Phone === "") {
          alert("Lütfen Telefonunuzu Giriniz..");
          return;
        }
      }
      localStorage.setItem("CustomerName", this.state.CustomerName);
      localStorage.setItem("Phone", this.state.Phone);
      localStorage.setItem("Plaka", this.state.Plaka);
      localStorage.setItem("PaymentType", this.state.PaymentType);
      localStorage.setItem("Aciklama", this.state.Aciklama);
      localStorage.setItem("OrderType", this.state.OrderType);
      localStorage.setItem("Adres", this.state.Adres);

      window.location.href = `https://sanalpos.hmbrgr.com.tr?Tutar=${this.state.Total}`;
      return;
    }
    var siparis = localStorage.getItem("Sepet");
    var SiparisList = JSON.parse(siparis);
    if (this.state.Sube === null || undefined) {
      alert("Lütfen Şube Seçimini Yapınız");
      return;
    }

    if (this.state.PaymentType === "" || undefined) {
      alert("Lütfen Ödeme türünüzü Seçiniz");
      return;
    }
    if (this.state.CustomerName === "" || undefined) {
      alert("Lütfen Ad Soyad Bilgisini Giriniz..");
      return;
    }
    if (this.state.OrderType === "Paket") {
      if (this.state.Aciklama === "" || undefined) {
        alert("Lütfen Adres Bilgisini Giriniz..");
        return;
      }
    }

    if (this.state.OrderType === "Gel-Al") {
      if (this.state.Phone === "" || undefined) {
        alert("Lütfen Telefonunuzu Giriniz..");
        return;
      }
    }
    if (this.state.OrderType === "Mağaza Sipariş") {
      if (this.state.Phone === "" || undefined) {
        alert("Lütfen Telefonunuzu Giriniz..");
        return;
      }
    }
    if (this.state.OrderType === "Arabaya Servis") {
      if (this.state.Plaka === "") {
        alert("Plaka ve Açıklama Zorunludur.");
        return;
      }
      if (this.state.Phone === "") {
        alert("Lütfen Telefonunuzu Giriniz..");
        return;
      }
    }
    CreateOrderHeader({
      variables: {
        PaymentType: this.state.PaymentType,
        OrderType: this.state.OrderType,
        CustomerId: "Web Sipariş Kullanıcısı",
        SubeId: this.state.Sube,
        Note: this.state.Note,
        Discount: 0,
        ServicePrice: 5,
        OrderChannel: "WebSipariş",
        CustomerName: this.state.CustomerName,
        Phone: this.state.Phone,
        Plaka: this.state.Plaka,
        Aciklama: this.state.Aciklama,
        Adres: this.state.Adres,
        Il: this.state.Il,
        Ilce: this.state.Ilce,
      },
    }).then(({ data }) => {
      if (data.CreateOrderHeader.id) {
        this.state.Order.map(async (Order) => {
          let CreateOrderBodyResult = await CreateOrderBody({
            variables: {
              ProductId: Order.ProductId,
              Quantity: Order.Quantity,
              Price: parseFloat(
                (
                  parseFloat(Order.Price) + parseFloat(Order.ExtraPrice)
                ).toFixed(2)
              ),
              OrderHeaderId: data.CreateOrderHeader.id,
            },
          });

          if (CreateOrderBodyResult.data.CreateOrder.id) {
            if (Order.EkLezzetOption.length !== 0) {
              Order.EkLezzetOption.map(async (EkLezzet) => {
                await CreateSelectOrderOptions({
                  variables: {
                    OrderBodyId: CreateOrderBodyResult.data.CreateOrder.id,
                    OptionsId: EkLezzet.id,
                  },
                });
              });
            }

            if (Order.EkmekOption.length !== 0) {
              Order.EkmekOption.map(async (EkmekOption) => {
                await CreateSelectOrderOptions({
                  variables: {
                    OrderBodyId: CreateOrderBodyResult.data.CreateOrder.id,
                    OptionsId: EkmekOption.id,
                  },
                });
              });
            }
            if (Order.IcecekOption.length !== 0) {
              Order.IcecekOption.map(async (IcecekOption) => {
                await CreateSelectOrderOptions({
                  variables: {
                    OrderBodyId: CreateOrderBodyResult.data.CreateOrder.id,
                    OptionsId: IcecekOption.id,
                  },
                });
              });
            }
            if (Order.ExtraOptions !== undefined)
              if (Order.ExtraOptions.length !== 0) {
                Order.ExtraOptions.map(async (ExtraOptions) => {
                  await CreateSelectOrderOptions({
                    variables: {
                      OrderBodyId: CreateOrderBodyResult.data.CreateOrder.id,
                      OptionsId: ExtraOptions.id,
                    },
                  });
                });
              }

            localStorage.removeItem("Sepet");
            if (this.state.OrderType === "Arabaya Servis") {
              localStorage.removeItem("SiparisTuru");
              localStorage.removeItem("Sube");
              this.setState({ showArabayaServis: true });
            } else if (this.state.OrderType === "Paket") {
              localStorage.removeItem("SiparisTuru");
              localStorage.removeItem("Sube");
              this.setState({ showPaketServis: true });
            } else {
              localStorage.removeItem("SiparisTuru");
              localStorage.removeItem("Sube");
              this.setState({ show: true });
            }
          }
          /*.then(({ data }) => {
            this.state.Order.map(Order => {
              if (Order.EkLezzetOption.length === 0) return;
              Order.EkLezzetOption.map(EkLezzet => {
                CreateSelectOrderOptions({
                  variables: {
                    OrderBodyId: data.CreateOrder.id,
                    OptionsId: EkLezzet.id
                  }
                });
              });
              if (Order.EkmekOption.length === 0) return;
              Order.EkmekOption.map(EkmekOption => {
                CreateSelectOrderOptions({
                  variables: {
                    OrderBodyId: data.CreateOrder.id,
                    OptionsId: EkmekOption.id
                  }
                });
              });

              if (Order.IcecekOption.length === 0) return;
              Order.IcecekOption.map(IcecekOption => {
                CreateSelectOrderOptions({
                  variables: {
                    OrderBodyId: data.CreateOrder.id,
                    OptionsId: IcecekOption.id
                  }
                });
              });
            });
          });*/
        });
      }
    });
  };

  render() {
    const AraToplam = () => {
      var Toplam = 0;
      this.state.Order.map((Order) => {
        Toplam +=
          (parseFloat(Order.Price) + parseFloat(Order.ExtraPrice)) *
          parseInt(Order.Quantity);
      });
      return parseFloat(Toplam).toFixed(2);
    };
    const IndirimToplami = () => {
      var Toplam = 0;
      this.state.Order.map((Order) => {
        Toplam +=
          (parseFloat(Order.Price) + parseFloat(Order.ExtraPrice)) *
          parseInt(Order.Quantity);
      });
      return parseFloat((Toplam / 100) * 5).toFixed(2);
    };
    const GenelToplam = () => {
      var Toplam = 0;
      this.state.Order.map((order) => {
        Toplam +=
          (parseFloat(order.Price) + parseFloat(order.ExtraPrice)) *
          parseInt(order.Quantity);
      });
      return parseFloat(Toplam - (Toplam / 100) * 5 + 5).toFixed(2);
    };
    const Toplam = () => {
      var Topla = this.state.OrderType === "Paket" ? 0 : 0;

      this.state.Order.map((order) => {
        Topla +=
          (parseFloat(order.Price) + parseFloat(order.ExtraPrice)) *
          parseInt(order.Quantity);
      });
      this.state.Total = parseFloat(Topla).toFixed(2);
      return (
        <div>
          <hr />{" "}
          <span style={{ marginTop: 15, fontSize: 14, fontWeight: "bold" }}>
            {" "}
            {this.state.OrderType === "Paket" ? (
              <div>
                <span style={{ color: "red" }}>
                  Indirim Tutarı : {parseFloat((Topla / 100) * 5).toFixed(2)} TL
                </span>
                <br />
                <br />
                <span style={{ color: "red" }}>
                  {" "}
                  Paket Servis Ücreti : {parseFloat(5).toFixed(2)} TL <br />
                </span>
                <br />
                Toplam :{" "}
                {parseFloat(
                  parseFloat(Topla - (Topla / 100) * 5 + 5).toFixed(2)
                ).toFixed(2)}{" "}
                TL
              </div>
            ) : (
                <div>Toplam : {parseFloat(Topla).toFixed(2)} TL</div>
              )}
          </span>
        </div>
      );
    };
    return (
      <div class="card mb-3" style={{ marginTop: 20, fontSize: 13 }}>
        <SweetAlert
          show={this.state.show}
          title="Siparişiniz Oluşturuldu"
          text="Siparişiniz Başarıyla Oluşturuldu. Hazır Olduğunda Size Sesleneceğiz. Teşekkür Ederiz"
          onConfirm={() => {
            this.setState({ show: false });
            window.location.reload();
          }}
        />

        <SweetAlert
          show={this.state.showArabayaServis}
          title="Siparişiniz Oluşturuldu"
          text="Siparişiniz Başarıyla Oluşturuldu. Hazır Olduğunda Aracınıza Teslim Edeceğiz. Teşekkür Ederiz"
          onConfirm={() => {
            this.setState({ show: false });
            window.location.reload();
          }}
        />
        <SweetAlert
          show={this.state.showPaketServis}
          title="Siparişiniz Oluşturuldu"
          text="Siparişiniz Başarıyla Oluşturuldu. Paketinizi En Kısa Zamanda Size Ulaştıracağız. Afiyet Olsun."
          onConfirm={() => {
            this.setState({ show: false });
            window.location.reload();
          }}
        />
        <div
          class="card-header"
          style={{ color: "white", backgroundColor: "#E77F3F" }}
        >
          Sepetim
        </div>
        <div class="card-body" style={{ padding: 5 }}>
          {this.state.Order.length > 0 ? (
            <div>
              {this.state.Order.map((order, index) => (
                <div
                  className="row"
                  style={{ border: 1, borderColor: "black", marginBottom: 10 }}
                >
                  <div className="col-md-1">
                    <button
                      className="btn btn-danger"
                      style={{
                        width: 20,
                        height: 25,
                        padding: 0,
                        marginBottom: 10,
                      }}
                      onClick={() => this.RemoveItem(index)}
                    >
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
                  <div className="col-md-1" style={{ marginBottom: 10 }}>
                    <button
                      className="btn btn-primary"
                      style={{ width: 20, height: 25, padding: 0 }}
                      onClick={() => this.MiktarArtir(order, index)}
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                    <span style={{ padding: 5 }}>{order.Quantity}</span>
                    <button
                      className="btn btn-primary"
                      style={{ width: 20, height: 25, padding: 0 }}
                      onClick={() => this.MiktarAzat(index)}
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  </div>
                  <div className="col-md-5">
                    <span style={{ paddingLeft: 5, fontSize: 12 }}>
                      {order.ProductName}
                    </span>
                  </div>
                  <div className="col-md-4">
                    <span
                      style={{
                        color: "#E77F3F",
                        fontWeight: "bold",
                        fontSize: 14,
                      }}
                    >
                      {(
                        (parseFloat(order.Price) +
                          parseFloat(order.ExtraPrice)) *
                        parseInt(order.Quantity)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
              <Toplam />
              <br />
              <br />
              <div className="form-group" style={{ marginBottom: 20 }}>
                <label style={{ fontWeight: "bold" }}>Ödeme Türü </label>
                <select
                  className="form-control"
                  name="PaymentType"
                  onChange={this.onChange}
                >
                  <option>..Lütfen Seçiniz ..</option>
                  <option value="Online Ödeme">Online Ödeme</option>
                  <option value="Nakit">Nakit</option>
                  <option value="Kredi Kartı">Kredi Kartı</option>
                  <option value="Sodexo">Sodexo</option>
                  <option value="Ticket">Ticket</option>
                  <option value="Multinet">Multinet</option>
                  <option value="Set Card">Set Card</option>
                  <option value="Cio Card">Cio Card</option>
                  <option value="Metropol Card">Metropol Card</option>
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: 20 }}>
                <label style={{ fontWeight: "bold" }}>Ad Soyad : </label>
                <input
                  type="text"
                  className="form-control"
                  name="CustomerName"
                  onChange={this.onChange}
                />
                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label style={{ fontWeight: "bold" }}>Telefon : </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Phone"
                    onChange={this.onChange}
                  />
                </div>
              </div>
              {this.state.OrderType === "Paket" ? (
                <div>
                  <label style={{ fontWeight: "bold" }}>Adres : </label>
                  <textarea
                    type="text"
                    className="form-control"
                    name="Aciklama"
                    onChange={this.onChange}
                  ></textarea>
                </div>
              ) : (
                  <div></div>
                )}

              {this.state.OrderType === "Arabaya Servis" ? (
                <div className="form-group" style={{ marginBottom: 20 }}>
                  <label style={{ fontWeight: "bold" }}>Plaka : </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Plaka"
                    onChange={this.onChange}
                  />

                  <label style={{ fontWeight: "bold" }}>Açıklama : </label>
                  <input
                    type="text"
                    className="form-control"
                    name="Aciklama"
                    onChange={this.onChange}
                  />
                </div>
              ) : (
                  <div></div>
                )}
              <button
                data-toggle="modal"
                data-target="#SiparisInfo"
                className="btn btn-primary"
              >
                Siparişi Onayla
              </button>

              <div
                class="modal fade bd-example-modal-xl"
                tabindex="-1"
                role="dialog"
                id="SiparisInfo"
              >
                <div class="modal-dialog modal-xl" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Sipariş </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div>
                        <div className="row col-md-12">
                          <div class="card col-md-6">
                            <div class="card-header ">
                              <h3 class="card-title">Sipariş Bilgileri</h3>
                            </div>
                            <div class="card-body">
                              <table>
                                <thead>
                                  <tr></tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Adınız :</td>
                                    <td>
                                      <b>{this.state.CustomerName}</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Ödeme Şekliniz :</td>
                                    <td>
                                      <b>{this.state.PaymentType}</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Telefonuz : </td>
                                    <td>
                                      <b>{this.state.Phone}</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Adresiniz /Açıklamanız: </td>
                                    <td>
                                      <b>{this.state.Aciklama}</b>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Siparişiniz ile ilgili bize iletmek
                                      <br />
                                      istediklerinizi lütfen yazın :{" "}
                                    </td>
                                    <td></td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <textarea
                                        name="Note"
                                        className="form-control"
                                        onChange={this.onChange}
                                      ></textarea>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="card col-md-6">
                            {this.state.OrderType === "Paket" && (

                              <div class="card-body">
                                Siparişiniz {this.state.Sube.toUpperCase()}{" "}
                              şubesinden gönderilecektir.
                                <br /> İrtibat için 444 82 20 numarasını
                              arayabilirsiniz.
                              </div>
                            )}
                          </div>
                        </div>
                        <br />
                        <br />
                        <div className="row col-md-12">
                          <div class="card col-md-12">
                            <div class="card-header ">
                              <h3 class="card-title">Ürün Detayı</h3>
                            </div>
                            <div class="card-body">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Miktar</th>
                                    <th>Ürün Adı</th>
                                    <th>Seçenekler</th>
                                    <th>Tutar</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {
                                    this.state.Order.length > 0 &&
                                    this.state.Order.map((Orders) => {

                                      return (
                                        <tr>
                                          <td>{Orders.Quantity}</td>
                                          <td>{Orders.ProductName}</td>
                                          <td>
                                            {(
                                              <span>
                                                {Orders.EkmekOption[0] === undefined ? "" : Orders.EkmekOption[0].Name}
                                              </span>
                                            )}

                                            {
                                              Orders.EkLezzetOption.map(
                                                (EkLezzet) => (
                                                  <span>,{EkLezzet.Name},</span>
                                                )
                                              )}
                                            {
                                              Orders.ExtraOptions.map(
                                                (ExtraOptions) => (
                                                  <span>
                                                    {ExtraOptions.Name},
                                                  </span>
                                                )
                                              )}
                                            {Orders.IcecekOption && (
                                              <span>
                                                {Orders.IcecekOption[0] === undefined ? "" : Orders.IcecekOption[0].Name}
                                              </span>
                                            )}
                                          </td>
                                          <td>
                                            {(
                                              (parseFloat(Orders.Price) +
                                                parseFloat(Orders.ExtraPrice)) *
                                              parseInt(Orders.Quantity)
                                            ).toFixed(2)}
                                          </td>
                                        </tr>
                                      )
                                    })}
                                </tbody>
                              </table>
                              <hr />
                              <table>
                                <thead>
                                  <th></th>
                                  <th></th>
                                  <th></th>
                                </thead>
                                <tbody>
                                  {this.state.OrderType === "Paket" && (
                                    <tr>
                                      <td style={{ fontWeight: "bold" }}>
                                        Ara Toplam :
                                      </td>
                                      <td style={{ fontWeight: "bold" }}>
                                        <AraToplam />
                                      </td>
                                    </tr>
                                  )}
                                  <tr>
                                    {this.state.OrderType === "Paket" && (
                                      <td
                                        style={{
                                          fontWeight: "bold",
                                          color: "red",
                                        }}
                                      >
                                        İndirim Tutarı :
                                      </td>
                                    )}
                                    {this.state.OrderType === "Paket" && (
                                      <td
                                        style={{
                                          fontWeight: "bold",
                                          color: "red",
                                        }}
                                      >
                                        <IndirimToplami />
                                      </td>
                                    )}
                                  </tr>
                                  <tr>
                                    {this.state.OrderType === "Paket" && (
                                      <td
                                        style={{
                                          fontWeight: "bold",
                                          color: "red",
                                        }}
                                      >
                                        Paket Servis Ücreti :
                                      </td>
                                    )}
                                    {this.state.OrderType === "Paket" && (
                                      <td>
                                        <span
                                          style={{
                                            fontWeight: "bold",
                                            color: "red",
                                          }}
                                        >
                                          {" "}
                                          5.00 TL
                                        </span>{" "}
                                      </td>
                                    )}
                                  </tr>
                                  <tr>
                                    <td>
                                      <span
                                        style={{
                                          fontWeight: "bold",
                                          fontSize: 14,
                                        }}
                                      >
                                        {" "}
                                        Genel Toplam :{""}
                                      </span>{" "}
                                    </td>
                                    <td>
                                      {this.state.OrderType === "Paket" ? (
                                        <GenelToplam />
                                      ) : (
                                          <AraToplam />
                                        )}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <br />
                        <br />
                        <Mutation mutation={CREATE_ORDER_HEADER}>
                          {(CreateOrderHeader, { loading, error }) => (
                            <Mutation mutation={CREATE_ORDER_BODY}>
                              {(CreateOrderBody, { loading, error }) => (
                                <Mutation
                                  mutation={CREATE_SELECT_ORDER_OPTIONS}
                                >
                                  {(
                                    CreateSelectOrderOptions,
                                    { loading, error }
                                  ) => (
                                    <div className="form-group">
                                      <button
                                        className="btn btn-primary"
                                        onClick={() =>
                                          this.SiparisVer(
                                            CreateOrderHeader,
                                            CreateOrderBody,
                                            CreateSelectOrderOptions
                                          )
                                        }
                                      >
                                        Siparişi Tamamla
                                      </button>
                                    </div>
                                  )}
                                </Mutation>
                              )}
                            </Mutation>
                          )}
                        </Mutation>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
              <div>
                <p class="card-text" style={{ textAlign: "center" }}>
                  <i
                    class="fa fa-shopping-basket fa-2x"
                    style={{ color: "#e1e1e1", textAlign: "center" }}
                  ></i>
                  <br />
                Sepetiniz şu anda boş!
              </p>
              </div>
            )}
        </div>
      </div>
    );
  }
}
