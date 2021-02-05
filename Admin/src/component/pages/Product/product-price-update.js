
import React, { Component, Fragment, createRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { Query, Mutation } from "react-apollo";
import { GET_PRODUCTS, UPDATE_PRODUCT_PRICE } from "../../../queries";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { SetProduct } from "../../../actions/Product";
class Home extends Component {
    state = { ProductId: "", Price: 0, OldPrice: 0 };
    constructor(props) {
        super(props);
        this.gridRef = React.createRef();
        this.HandlePrice = this.HandlePrice.bind(this);
    }

    render() {
        return (
            <Query
                query={GET_PRODUCTS}
                onCompleted={(data) => {
                    window.jQuery(this.gridRef.current).DataTable({
                        responsive: true,
                        autoWidth: false,
                    });
                    //this.setState({ ProductList: data });
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
                                            <Mutation
                                                mutation={UPDATE_PRODUCT_PRICE}

                                            >
                                                {(UpdateProductPrice, { loading, error }) => (
                                                    <button
                                                        className="btn btn-primary"
                                                        style={{ float: "right" }}
                                                        to="/UpdateProductPrice"
                                                    >
                                                        Güncelle
                                                    </button>
                                                )}
                                            </Mutation>

                                            <table
                                                id="example2"
                                                class="table table-bordered table-hover"
                                                ref={this.gridRef}
                                            >
                                                <thead>
                                                    <tr>
                                                        <td>Kategori</td>
                                                        <td>Ürün Adı</td>
                                                        <td>Fiyat</td>
                                                        <td>YemekSepetiPrice</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.Products.map((products, index) => (
                                                        <tr key={Math.random(0, 200)}>
                                                            <td>{products.Category[0].Name}({products.Category[0].CategoryType})</td>
                                                            <td>{products.Name}</td>
                                                            <td><input className="form-control" type="number" value={products.Price} productid={products.id} onChange={this.HandlePrice} oldprice={products.Price} /></td>
                                                            <td><input type="number" className="form-control" value={products.YemekSepetiPrice} productId={products.id} /></td>
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
