import SweetAlert from "sweetalert2-react";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import {
  CREATE_ORDER_HEADER,
  CREATE_ORDER_BODY,
  CREATE_SELECT_ORDER_OPTIONS,
} from "../../../queries/index";
export default class OdemeBasarili extends Component {
  state = { ShowAlert: false, Order: [], SiparisBasladi: false };

  componentDidMount() {
    //localStorage.setItem("SiparisTuru", "GelAl");
    this.SetSepet();
  }
  SetSepet = () => {
    const Sepet = localStorage.getItem("Sepet");
    if (Sepet === null) {
      window.location.href = "/";
      return;
    } else {
      const SepetList = JSON.parse(Sepet);
      this.setState({ ShowAlert: true, Order: SepetList });
    }
  };

  SiparisVer = (
    CreateOrderHeader,
    CreateOrderBody,
    CreateSelectOrderOptions
  ) => {
    this.setState({ SiparisBasladi: true });
    CreateOrderHeader({
      variables: {
        PaymentType: localStorage.getItem("PaymentType"),
        OrderType: localStorage.getItem("OrderType"),
        CustomerId: "Web Sipariş Kullanıcısı",
        SubeId: localStorage.getItem("SUBE"),
        Note: localStorage.getItem("Note"),
        Discount: 0,
        ServicePrice: 0,
        OrderChannel: "WebSipariş",
        CustomerName: localStorage.getItem("CustomerName"),
        Phone: localStorage.getItem("Phone"),
        Plaka: localStorage.getItem("Plaka"),
        Aciklama: localStorage.getItem("Aciklama"),
      },
    }).then(({ data }) => {
      if (data.CreateOrderHeader.id) {
        this.state.Order.map(async (Order) => {
          console.log(Order);
          let CreateOrderBodyResult = await CreateOrderBody({
            variables: {
              ProductId: Order.ProductId,
              Quantity: Order.Quantity,
              Price: parseFloat(
                (
                  parseFloat(Order.Price) + parseFloat(Order.ExtraPrice) + parseFloat(Order.ExtraPrice)
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
            if (Order.ExtraOptions !== undefined) {
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
            }



          }

        });
        localStorage.removeItem("Sepet");

        if (this.state.OrderType === "Arabaya Servis") {
          localStorage.removeItem("SiparisTuru");
          localStorage.removeItem("Sube");

        } else if (this.state.OrderType === "Paket") {
          localStorage.removeItem("SiparisTuru");
          localStorage.removeItem("Sube");

        } else {
          localStorage.removeItem("SiparisTuru");
          localStorage.removeItem("Sube");

        }
        localStorage.removeItem("Adres", this.state.Adres);
        localStorage.removeItem("Note", this.state.Note);
        localStorage.removeItem("SUBE", this.state.Sube);

        setTimeout(() => {
          this.setState({ ShowAlert: false });
          window.location.href = "/"
        }, 2000);
      }
    });
  };

  render() {
    return (
      <div>
        <Mutation mutation={CREATE_ORDER_HEADER}>
          {(CreateOrderHeader, { loading, error }) => (
            <Mutation mutation={CREATE_ORDER_BODY}>
              {(CreateOrderBody, { loading, error }) => (
                <Mutation mutation={CREATE_SELECT_ORDER_OPTIONS}>
                  {(CreateSelectOrderOptions, { loading, error }) => (
                    <div className="form-group">
                      <SweetAlert
                        show={this.state.ShowAlert}
                        title="Ödemeniz Alındı"
                        text="Siparişiniz Başarıyla Oluşturuldu. Teşekkür Ederiz"
                        onConfirm={() =>
                          this.state.SiparisBasladi === false
                            ? this.SiparisVer(
                              CreateOrderHeader,
                              CreateOrderBody,
                              CreateSelectOrderOptions
                            )
                            : () => console.log("SİPARİŞ VAR")
                        }
                      />
                    </div>
                  )}
                </Mutation>
              )}
            </Mutation>
          )}
        </Mutation>
      </div>
    );
  }
}
