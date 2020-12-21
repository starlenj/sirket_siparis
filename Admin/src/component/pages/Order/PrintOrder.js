import React, { Component } from "react";
import {
  GET_ORDER_DETAILS,
  SIPARIS_ONAY,
  SIPARIS_REDDET,
} from "../../../queries";
import { Query, Subscription, Mutation } from "react-apollo";
export default class App extends Component {
  componentDidMount() {}
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
          console.log(data);
          return (
            <div class="wrapper">
              <section class="invoice">
                <div class="row">
                  <div class="col-12">
                    <span
                      class="page-header"
                      style={{
                        textAlign: "center",
                        alignContent: "cente",
                        alignItems: "center",
                        alignSelf: "center",
                      }}
                    >
                      <b>
                        HMBRGR {"  "}
                        Sipari Fişi
                      </b>
                    </span>
                    <br />
                    <span>Müşteri Adı : {data.Order.CustomerName} </span>
                    <br />
                    <span>Plaka : {data.Order.Plaka} </span>
                    <br />
                    <span>Telefon : {data.Order.Phone} </span>
                    <br />
                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Miktar</th>
                          <th>Ürün Adı</th>
                          <th>Özellik</th>
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
                </div>
              </section>
            </div>
          );
        }}
      </Query>
    );
  }
}
