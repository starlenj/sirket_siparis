import React, { Component } from "react";
import {
  GET_ORDER_DETAILS,
  SIPARIS_ONAY,
  SIPARIS_REDDET,
} from "../../../queries";
import { Query, Subscription, Mutation } from "react-apollo";
export default class App extends Component {
  state = { OrderData: [], Options: [], Toplam: "", id: "", OrderType: "" };
  GetOptions(OrderData, data) {
    var arr = [];
    var Topla = 0;
    OrderData.map((order) => {
      Topla += parseFloat(order.Price) * parseInt(order.Quantity);
      order.SelectOrderOption.map((options) => {
        arr.push({ Name: options.OrderOptions[0].Name });
      });
    });

    this.setState({ id: OrderData[0].OrderHeaderId, OrderType: data.OrderType, });
    this.setState({ Options: arr, Toplam: Topla });

    setTimeout(() => window.print(), 2000)
  }
  render() {
    return (
      <Query
        query={GET_ORDER_DETAILS}
        variables={{ id: localStorage.getItem("OrderId") }}
        onCompleted={(data) => this.GetOptions(data.Order.Order, data.Order)}
      >
        {({ loading, data, error }) => {
          if (loading) return <div className="loading">Loading...</div>;
          if (error) return <div>Error</div>;
          return (
            <div style={{ width: "255px", fontSize: "100%", maxWidth: "255px", margin: 0 }}>
              <span
                style={{ textAlign: "center" }}
              >
                <b>
                  HMBRGR {"  "}
                </b>
              </span>
              <br />
              <span><b>Müşteri Adı :</b> {data.Order.CustomerName} </span>
              <br />
              <span><b>Müşteri Adresi :</b> {data.Order.Aciklama} </span>
              <br />
              <span><b>Müşteri Notu :</b> {data.Order.Note} </span>
              <br />
              <span><b>Telefon :</b> {data.Order.Phone} </span>
              <br />

              <table>
                <thead>
                  <tr>
                    <th>Miktar</th>
                    <th >Ürün Adı</th>
                    <th >Özellik</th>
                    <th>Fiyat</th>
                    <th>Tutar</th>
                  </tr>
                </thead>


                <tbody>
                  {data.Order.Order !== undefined
                    ? data.Order.Order.map((orders) => {
                      return (
                        <tr>
                          <td>{orders.Quantity}</td>
                          <td>{orders.Product[0].Name}</td>

                          <td style={{ width: "100%" }}>
                            {orders.SelectOrderOption.map((option) => (
                              <div><span> {option.Name}</span></div>
                            ))}
                          </td>
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

              </table>
              <div class="card col-md-4">
                <div class="card-header bg-dark">
                  <h3 class="card-title">Sipariş Toplamı</h3>
                </div>
                <div class="card-body">
                  <div className="row">
                    <span>
                      {" "}
                      {this.state.OrderType === "Paket" && (
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "red",
                            fontSize: 19,
                          }}
                        >
                          Paket Servis Ücreti : 5.00 TL{" "}
                        </span>
                      )}
                      <br />
                      {this.state.OrderType === "Paket" && (
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "red",
                            fontSize: 19,
                          }}
                        >
                          İndirim Tutarı :{" "}
                          {parseFloat((this.state.Toplam / 100) * 5).toFixed(2)}{" "}
                        </span>
                      )}
                      <br />
                      <span>TOPLAM :</span>
                      {"    "}
                      {this.state.OrderType === "Paket" ? (
                        <span>
                          {parseFloat(
                            this.state.Toplam -
                            (this.state.Toplam / 100) * 5 +
                            5
                          ).toFixed(2)}
                        </span>
                      ) : (
                          <span>{parseFloat(this.state.Toplam).toFixed(2)}</span>
                        )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        }
      </Query >
    );

  }
}
