import React, { Component, Fragment, createRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { Query } from "react-apollo";
import { GET_PRODUCTS } from "../../../queries";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { SetProduct } from "../../../actions/Product";
class Home extends Component {
  state = { OrderData: [], SelectProduct: [], Status: false };
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
  }

  render() {
    return (
      <Query
        query={GET_PRODUCTS}
        onCompleted={() => {
          window.jQuery(this.gridRef.current).DataTable({
            responsive: true,
            autoWidth: false,
          });
        }}
      >
        {({ loading, data, error }) => {
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
                          <h1>Ürünler</h1>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item">
                            <a href="/">Anasayfa</a>
                          </li>
                          <li class="breadcrumb-item active">Ürün Listesi</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="content">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Ürün Listesi</h3>
                    </div>

                    <div class="card-body">
                      <Link
                        className="btn btn-primary"
                        style={{ float: "right" }}
                        to="/NewProduct"
                      >
                        Yeni
                      </Link>
                      <Link
                        className="btn btn-primary"
                        style={{ float: "right" }}
                        to="/ProductPriceUpdate"
                      >
                        Toplu Fiyat Değiştir
                      </Link>
                      <table
                        id="example2"
                        class="table table-bordered table-hover"
                        ref={this.gridRef}
                      >
                        <thead>
                          <tr>
                            <td>Kategori</td>
                            <td>Ürün Adı</td>
                            <td>Kısa Açıklama</td>
                            <td>Fiyat</td>
                            <td>Düzenle</td>
                            <td>Koplaya</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data.Products.map((products) => (
                            <tr key={Math.random(0, 200)}>
                              <td>{products.Category[0].Name}({products.Category[0].CategoryType})</td>
                              <td>{products.Name}</td>
                              <td>{products.Info}</td>
                              <td>{products.Price}</td>

                              <td>
                                <Link
                                  class="btn btn-primary"
                                  to="/EditProduct"
                                  onClick={() =>
                                    this.props.SetProduct(products)
                                  }
                                >
                                  Düzenle
                                </Link>
                              </td><td>
                                <Link
                                  class="btn btn-success"
                                  to="/NewProduct"
                                  onClick={() =>
                                    this.props.SetProduct(products)
                                  }
                                >
                                  Kopyala
                                </Link>
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

const mapStateToProps = ({ Product }) => {
  return {
    Product,
  };
};
const mapDispatchToProps = {
  SetProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
