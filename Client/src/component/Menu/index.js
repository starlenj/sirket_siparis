import React, { Component, createRef } from "react";
import { Query } from "react-apollo";
import { GET_PRODUCT, GET_MENU } from "../../queries/index";
import NewOrderModal from "../Order/new-order";
import { connect } from "react-redux";
import { SetProduct } from "../../Actions/Product";
import { SetQuantity } from "../../Actions/Order";
import { Modal, Button } from "react-bootstrap";
class Menu extends Component {
  state = {
    Quantity: 1,
    SelectProduct: [],
    SelectSube: "",
    SelectProduct: [],
    UrunModal: false,
    Bolge: "",
    BolgeModal: false,
    OrderModal: false
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.NewOrder = createRef();
    this.handleCloseOrderModal = this.handleCloseOrderModal.bind(this);
  }
  componentDidMount() {
    this.setState({ SelectSube: localStorage.getItem("SUBE"), OrderType: localStorage.getItem("siparis_turu") });
    var SelectInfo = localStorage.getItem("URUN_ID");
  }
  SetOrder = (Product, Category) => {
    console.log(Product, Category);
    this.props.SetDefault();
    Product.Price = this.Fiyat(Category, Product.Price);
    this.props.SetProduct(Product);
    this.setState({ OrderModal: true })
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClose = () => {
    this.setState({ UrunModal: false });
    localStorage.removeItem("URUN_ID");
  };
  QuantityHandle = (e, productId) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleCloseOrderModal() {
    this.setState({ OrderModal: false })
    this.props.SetProduct([]);

  }
  CreateSepet = (order) => {
    var NewOrder = {
      ProductId: order.id,
      EkmekOption: Array.from([]),
      ExtraPrice: 0,
      IcecekOption: Array.from([]),
      EkLezzetOption: Array.from([]),
      ExtraOptions: Array.from([]),
      Price: order.Price,
      ProductName: order.Name,
      Quantity: 1,
      OrderType: "",
    };
    var SepetYeni = [];
    let Sepet = JSON.parse(localStorage.getItem("Sepet"));
    if (Sepet !== null) {
      if (Sepet.length > 0) {
        for (var i = 0; i < Sepet.length; i++) {
          SepetYeni.push(Sepet[i]);
        }
      }
    }
    SepetYeni.push(NewOrder);
    localStorage.setItem("Sepet", JSON.stringify(SepetYeni));

    window.location.reload();
  };
  Fiyat = (Category, Price) => {
    return Price;
  };
  render() {
    return (
      <div class="mb-2 menu-wrap" style={{ fontSize: 13 }}>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link red text-dark active"
              id="menu-tab"
              data-toggle="tab"
              href="#menu"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <b> </b>
            </a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active "
            id="menu"
            role="tabpanel"
            aria-labelledby="menu-tab"
          >
            <div className="table-responsive">
              {this.state.OrderType !== "" && (
                <Query query={GET_MENU} variables={{ CategoryType: localStorage.getItem("siparis_turu") }}>
                  {({ loading, data, error }) => {
                    if (loading) return <div className="loading">Loading...</div>;
                    return (
                      <div>
                        {data.GetMenu && data.GetMenu.sort((a, b) =>
                          a.Order > b.Order ? 1 : -1
                        ).map((Category) => (
                          <table className="table table-hover table-sm">
                            <thead>
                              <tr>
                                <td style={{ width: "25%" }}>
                                  <span style={{ fontSize: 15 }}>
                                    <b>{Category.Name}</b>
                                  </span>
                                </td>
                                <td style={{ width: "40%" }}></td>
                                <td style={{ width: "22%" }}><b>Sepet Fiyatı</b></td>
                                <td style={{ width: "22%" }}><b>Size Özel Fiyat</b></td>
                              </tr>
                            </thead>

                            <tbody>
                              {Category.Products.sort((a, b) =>
                                a.Order > b.Order ? 1 : -1
                              ).map((product) => (
                                <tr>
                                  <td>
                                    {product.SelectOption.length > 0 ? (
                                      <button
                                        className="btn btn-success btn-sm"
                                        style={{
                                          width: 25,
                                          height: 25,
                                          padding: 0,
                                          marginLeft: 5,
                                        }}
                                        onClick={() =>
                                          this.SetOrder(product, Category)
                                        }
                                        data-toggle="modal"
                                        data-target="#setOrderModal"

                                      >
                                        <i class="fa fa-plus"></i>
                                      </button>
                                    ) : (
                                        <button
                                          className="btn btn-success btn-sm"
                                          style={{
                                            width: 25,
                                            height: 25,
                                            padding: 0,
                                            marginLeft: 5,
                                          }}
                                          onClick={() => this.CreateSepet(product)}
                                        >
                                          <i class="fa fa-plus"></i>
                                        </button>
                                      )}
                                    <img
                                      src={
                                        product.Picture === ""
                                          ? "https://siparis.hmbrgr.com.tr/Templates/newyork/assets/img/nophoto-img.jpg"
                                          : product.Picture
                                      }
                                      style={{
                                        width: 50,
                                        height: 50,
                                        marginLeft: 20,
                                        marginRight: 10,
                                      }}
                                    />
                                  </td>
                                  <td>
                                    <div className="row" style={{ fontSize: 11 }}>
                                      <p>
                                        <b>{product.Name}</b>{" "}
                                      </p>
                                    </div>
                                    <div className="row" style={{ fontSize: 11 }}>
                                      <p>{product.Info}</p>
                                    </div>
                                  </td>

                                  <td

                                  >
                                    <p>
                                      <del style={{
                                        color: "red",
                                        fontWeight: "bold",
                                        fontSize: 15
                                      }}> {this.Fiyat(Category, product.YemekSepetiPrice)}  </del><span style={{
                                        color: "red"
                                      }}>TL</span>

                                    </p>
                                  </td>
                                  <td
                                    style={{
                                      color: "#E77F3F",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    <p>
                                      {this.Fiyat(Category, product.Price)}
                                      <b>TL</b>
                                    </p>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        ))}
                      </div>
                    );
                  }}
                </Query>
              )}

            </div>
          </div>

          <div
            class="tab-pane fade"
            id="bilgi"
            role="tabpanel"
            aria-labelledby="bilgi-tab"
          >
            ...
          </div>
        </div>


        <Modal
          show={this.state.OrderModal}
          onHide={this.handleCloseOrderModal}
          size={"lg"}

        >
          <Modal.Header closeButton>
            <Modal.Title>Sipariş Türü ve Şube Seçimi </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <NewOrderModal />

          </Modal.Body>
        </Modal>
        <Query
          query={GET_PRODUCT}
          variables={{ id: localStorage.getItem("URUN_ID") }}
          onCompleted={(data) => {
            if (data.Product) {
              this.setState({ UrunModal: true });
              this.SetOrder(data.Product, data.Product.Category[0]);
            }
          }}
        >
          {({ loading, data, error }) => {
            if (loading) return <div className="loading">Loading...</div>;
            return (
              <Modal
                show={this.state.UrunModal}
                onHide={this.handleClose}
                size="lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Ürün Seçim Ekranı</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <NewOrderModal />
                </Modal.Body>
              </Modal>
            );
          }}
        </Query>
      </div>
    );
  }
}
const mapStateToProps = ({ Product }) => {
  return {
    Product,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    SetProduct: (product) =>
      dispatch({ type: "SET_PRODUCT", payload: product }),
    SetDefault: () => dispatch({ type: "SET_DEFAULT" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
