import React, { Component, Fragment } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { Query, Subscription } from "react-apollo";
import { GET_ODEME_ORDER } from "../../../queries";
import Moment from "react-moment";
import moment from "moment";
export default class Home extends Component {
  state = {
    OrderData: [],
    SelectOrder: [],
    show: false,
    Date: "",
    Umitkoy: 0,
    Bahceli: 0,
    Batikent: 0,
    Atakule: 0,
    Bilkent: 0,
  };
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
  }
  GetData(orders) {
    console.log(orders);
    var Topla = 0;
    var Bahceli = 0;
    var Ankamall = 0;
    var Umitkoy = 0;
    var Batikent = 0;
    var Kasmir = 0;
    var Atakule = 0;
    var Bilkent = 0;

    orders.OdemeOrders.map((data) => {
      console.log(moment(data.Date).endOf("year").format("YYYY"));
      if (
        moment(data.Date).endOf("month").format("M") === "4" &&
        moment(data.Date).endOf("year").format("YYYY") === "2021"
      ) {
        if (data.SubeId === "umitkoy") {
          data.Order.map((order) => {
            Umitkoy += parseFloat(order.Price) * parseInt(order.Quantity);
          });
        }
        if (data.SubeId === "bahcelievler") {
          data.Order.map((order) => {
            Bahceli += parseFloat(order.Price) * parseInt(order.Quantity);
          });
        }
        if (data.SubeId === "atakule") {
          data.Order.map((order) => {
            Atakule += parseFloat(order.Price) * parseInt(order.Quantity);
          });
        }
        if (data.SubeId === "bilkent") {
          data.Order.map((order) => {
            Bilkent += parseFloat(order.Price) * parseInt(order.Quantity);
          });
        }
        if (data.SubeId === "batikent") {
          data.Order.map((order) => {
            Batikent += parseFloat(order.Price) * parseInt(order.Quantity);
          });
        }
        if (data.SubeId === "atakule") {
          data.Order.map((order) => {
            Batikent += parseFloat(order.Price) * parseInt(order.Quantity);
          });
        }
      }
    });
    this.setState({ Umitkoy, Bahceli, Batikent, Bilkent, Atakule });
    window.jQuery(this.gridRef.current).DataTable({
      responsive: true,
      autoWidth: false,
    });
  }
  SelectOrder = async (order) => {
    localStorage.setItem("OrderId", order.id);
    window.location.href = "/OrderDetail";
  };
  render() {
    const Toplam = (data) => {
      var Topla = 0;
      data.map((order) => {
        console.log(data);
        Topla += parseFloat(order.Price) * parseInt(order.Quantity);
      });
      return <span>{Topla}</span>;
    };
    return (
      <Query
        query={GET_ODEME_ORDER}
        variables={{ PaymentType: "Online Ödeme" }}
        onCompleted={(data) => this.GetData(data)}
      >
        {({ loading, subscribeToMore, data, error }) => {
          if (loading) return <div className="loading">Loading...</div>;
          if (error) return <div>Error</div>;

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
                          <li class="breadcrumb-item active">
                            Sipariş Listesi
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="content">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Sipariş Listesi</h3>
                    </div>

                    <div class="card-body">
                      <table
                        id="example2"
                        class="table table-bordered table-hover"
                        ref={this.gridRef}
                      >
                        <thead>
                          <tr>
                            <td>Sube</td>
                            <td>Toplam</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr key={Math.random(0, 200)}>
                            <td>Umitkoy</td>
                            <td>{parseFloat(this.state.Umitkoy).toFixed(2)}</td>
                          </tr>
                          <tr key={Math.random(0, 200)}>
                            <td>Bahceli</td>
                            <td>{parseFloat(this.state.Bahceli).toFixed(2)}</td>
                          </tr>
                          <tr key={Math.random(0, 200)}>
                            <td>Batikent</td>
                            <td>
                              {parseFloat(this.state.Batikent).toFixed(2)}
                            </td>
                          </tr>
                          <tr key={Math.random(0, 200)}>
                            <td>Atakule</td>
                            <td>{parseFloat(this.state.Atakule).toFixed(2)}</td>
                          </tr>
                          <tr key={Math.random(0, 200)}>
                            <td>Bilkent</td>
                            <td>{parseFloat(this.state.Bilkent).toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
