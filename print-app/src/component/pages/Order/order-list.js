import React, { Component, Fragment } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import Notification from "../../Notification";
import { Query, Subscription } from "react-apollo";
import { GET_ADDED_ORDERS, GET_ONAYLI_ORDERS } from "../../../queries";
import ReactNotifications from "react-browser-notifications";
import Moment from "react-moment";
import SweetAlert from "sweetalert2-react";
export default class Home extends Component {
  state = { OrderData: [], SelectOrder: [], show: false };
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.showNotifications = this.showNotifications.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  showNotifications() {
    // If the Notifications API is supported by the browser
    // then show the notification

    if (this.n.supported()) this.n.show();
  }

  handleClick(event) {
    // Do something here such as
    // console.log("Notification Clicked") OR
    // window.focus() OR
    // window.open("http://www.google.com")

    // Lastly, Close the notification
    window.location.href = "/OrderDetail";
    this.n.close(event.target.tag);
  }

  GetData(orders) {
    window.jQuery(this.gridRef.current).DataTable({
      responsive: true,
      autoWidth: false,
    });
  }
  GetSound() {
    const URL =
      "https://actions.google.com/sounds/v1/alarms/spaceship_alarm.ogg";
    const context = new AudioContext();
    let yodelBuffer;

    window
      .fetch(URL)
      .then((response) => response.arrayBuffer())
      .then((arrayBuffer) => context.decodeAudioData(arrayBuffer))
      .then((audioBuffer) => {
        yodelBuffer = audioBuffer;
        const source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start(1);
        source.stop(22);
      });
  }
  SelectOrder = async (order) => {
    localStorage.setItem("OrderId", order.id);
    window.location.href = "/OrderDetail";
  };
  render() {
    return (
      <Query
        query={GET_ONAYLI_ORDERS}
        variables={{ SubeId: this.props.session.ActiveUser.Sube }}
        onCompleted={(data) => this.GetData(data)}
      >
        {({ loading, subscribeToMore, data, error }) => {
          if (loading) return <div className="loading">Loading...</div>;
          if (error) return <div>Error</div>;
          subscribeToMore({
            document: GET_ADDED_ORDERS,
            variables: { SubeId: this.props.session.ActiveUser.Sube },
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              const newItem = subscriptionData.data.OrderAdded;
              if (newItem) {
                localStorage.setItem("OrderId", newItem.id);
              }
            },
          });
          return (
            <div>
              <Header session={this.props.session} />
              <SideBar session={this.props.session} />

              <SweetAlert
                show={this.state.show}
                title="Yeni Sipariş"
                text="Yeni Sipariş var"
                onConfirm={() => {
                  this.setState({ show: false });
                  window.location.href = "/OrderDetail";
                }}
              />
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
                            <td>Müşteri</td>
                            <td>Telefon</td>
                            <td>Plaka</td>
                            <td>Tarih</td>
                            <td>Durum</td>
                            <td>Detay</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data.OnayliOrders.map((order) => (
                            <tr key={Math.random(0, 200)}>
                              <td>{order.CustomerName}</td>
                              <td>{order.Phone}</td>
                              <td>{order.Plaka}</td>

                              <td>
                                <Moment format="DD.MM.YYYY HH:mm">
                                  {order.Date}
                                </Moment>
                              </td>
                              <td>
                                {order.OrderStatus === 1 ? (
                                  <span class="badge badge-success">
                                    Onaylanmış
                                  </span>
                                ) : (
                                  <span class="badge badge-warning">
                                    Onaylanmamış
                                  </span>
                                )}
                              </td>

                              <td>
                                <button
                                  class="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#SiparisModal"
                                  onClick={() => this.SelectOrder(order)}
                                >
                                  Detay
                                </button>
                              </td>
                            </tr>
                          ))}
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