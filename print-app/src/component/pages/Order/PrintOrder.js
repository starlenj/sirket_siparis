import React, { Component } from "react";
import {
  GET_ORDER_DETAILS,
  SIPARIS_ONAY,
  SIPARIS_REDDET,
} from "../../../queries";
import { Query, Subscription, Mutation } from "react-apollo";
export default class App extends Component {
  state = { OrderData: [], Options: [], Toplam: "", id: "" };
  GetOptions(OrderData) {
    var arr = [];
    var Topla = 0;
    OrderData.map((order) => {
      Topla += parseFloat(order.Price) * parseInt(order.Quantity);
      order.SelectOrderOption.map((options) => {
        arr.push({ Name: options.OrderOptions[0].Name });
      });
    });

    this.setState({ id: OrderData[0].OrderHeaderId });
    this.setState({ Options: arr, Toplam: Topla });
    setTimeout(() => window.print(), 2000)
  }
  render() {
    return (
      <Query
        query={GET_ORDER_DETAILS}
        variables={{ id: localStorage.getItem("OrderId") }}
        onCompleted={(data) => this.GetOptions(data.Order.Order)}
      >
        {({ loading, data, error }) => {
          if (loading) return <div className="loading">Loading...</div>;
          if (error) return <div>Error</div>;
          return (
            <div style={{ width: "155px", fontSize: 12, maxWidth: "155px" }}>
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
                    <th style={{ width: '10%' }}>Miktar</th>
                    <th style={{ width: '20%' }}>Ürün Adı</th>
                    <th style={{ width: "30%" }}>Özellik</th>
                    <th>Fiyat</th>
                    <th>Tutar</th>
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
                                <td>{orders.Quantity}</td>
                                <td>{orders.Product[0].Name}</td>
                                <td>
                                  {this.state.Options.map((option) => (
                                    <div>{option.Name}</div>
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
                    );
                  }}
                </Query>
              </table>
            </div>
          );
        }
        }
      </Query >
    );

  }
}
