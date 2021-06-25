import React, { Component } from "react";
import {
  GET_ORDER_DETAILS,
  SIPARIS_ONAY,
  SIPARIS_REDDET,
} from "../../../queries";
import moment from "moment";
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

    this.setState({
      id: OrderData[0].OrderHeaderId,
      OrderType: data.OrderType,
    });
    this.setState({ Options: arr, Toplam: Topla });

    setTimeout(() => window.print(), 2000);
  }
  render() {
    return (
      <Query
        query={GET_ORDER_DETAILS}
        variables={{ id: window.localStorage.getItem("OrderId") }}
        onCompleted={(data) => this.GetOptions(data.Order.Order, data.Order)}
      >
        {({ loading, data, error }) => {
          if (loading) return <div className="loading">Loading...</div>;
          if (error) return <div>Error</div>;
          console.log(data);
          return (
            <div
              style={{
                width: "255px",
                fontSize: 20,
                maxWidth: "255px",
                margin: 0,
              }}
            >
              <span style={{ textAlign: "center" }}>
                <b>HMBRGR {"  "}</b> <br />
              </span>
              <br />
              <span>
                <b>Sipariş Türü :</b> {data.Order.OrderType}
                <br />{" "}
              </span>
              <br />
              <span>
                <b>Sipariş Zamanı :</b>{" "}
                {moment(data.Order.Date).format("DD.MM.YYYY HH:mm")}
                <br />{" "}
              </span>
              <br />
              <span>
                <b>Müşteri Adı :</b> {data.Order.CustomerName} <br />
              </span>
              <br />
              <span>
                <b>Müşteri Adresi :</b> {data.Order.Aciklama}
                <br />{" "}
              </span>
              <br />
              <span>
                <b>Müşteri Notu :</b> {data.Order.Note}
                <br />{" "}
              </span>
              <br />
              <span>
                <b>Ödeme Türü :</b> <b>{data.Order.PaymentType}</b>
                <br />{" "}
              </span>
              <br />
              <span>
                <b>Telefon :</b> {data.Order.Phone}
                <br />{" "}
              </span>
              <br />
              <br />

              <table >
                <thead>
                  <tr>
                    <th style={{ width: "45%" }}>Ürün Adı</th>
                    <th>Özellik</th>
                    <th>Fiyat</th>
                    <th>Tutar</th>
                  </tr>
                </thead>

                <tbody>
                  {data.Order.Order !== undefined
                    ? data.Order.Order.map((orders) => {
                        return (
                          <tr style={{borderWidth:"1px",width:"100%",marginBottom:100}}>
                            <td>
                              {orders.Quantity}x{orders.Product[0].Name}
                            </td>

                            <td style={{ width: "100%" }}>
                              {orders.SelectOrderOption.map((option) => (
                                <div>
                                  <span> {option.OrderOptions[0].Name}</span>
                                </div>
                              ))}
                            </td>
                            <td>{parseFloat(orders.Price).toFixed(2)}</td>
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
                      <br />
                      <br />
                      <span>TOPLAM :</span>
                      {"    "}

                      <span>{parseFloat(this.state.Toplam).toFixed(2)}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
