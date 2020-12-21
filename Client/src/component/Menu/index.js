import React, { Component, createRef } from "react";
import { Query } from "react-apollo";
import { GET_PRODUCTS, GET_CATEGORYS, GET_PRODUCT } from "../../queries";
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
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.NewOrder = createRef();
  }
  componentDidMount() {
    this.setState({ SelectSube: localStorage.getItem("SUBE") });
    var SelectInfo = localStorage.getItem("URUN_ID");
  }
  SetOrder = (Product, Category) => {
    console.log(Product, Category);
    this.props.SetDefault();
    Product.Price = this.Fiyat(Category, Product.Price);
    this.props.SetProduct(Product);
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
  CreateSepet = (order) => {
    var NewOrder = {
      ProductId: order.id,
      EkmekOption: [],
      ExtraPrice: 0,
      IcecekOption: [],
      EkLezzetOption: [],
      Price: order.Price,
      ProductName: order.Name,
      Quantity: 1,
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
    var siparis_turu = localStorage.getItem("siparis_turu");
    if (siparis_turu === "Paket") {
      return parseFloat(Price + 2).toFixed(2);
    } else {
      return Price;
    }
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
              <b> Menü</b>
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
              <Query query={GET_CATEGORYS}>
                {({ loading, data, error }) => {
                  if (loading) return <div className="loading">Loading...</div>;
                  return (
                    <div>
                      {data.Categorys.sort((a, b) =>
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
                              <td style={{ width: "45%" }}></td>
                              <td style={{ width: "20%" }}></td>
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
        <div class="modal fade" id="setOrderModal">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
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
                <NewOrderModal />
              </div>
            </div>
          </div>
        </div>

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
