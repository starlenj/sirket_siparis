import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import {
  UPDATE_PRODUCT,
  GET_PRODUCTS,
  GET_CATEGORYS,
  DELETE_SELECTOPTIONS,
  GET_OPTIONS,
  CREATE_SELECTOPTION,
} from "../../../queries/index";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.CategoryId = "";
  }

  state = {
    Name: "",
    Info: "",
    Price: 0,
    YemekSepetiPrice: 0,
    Order: 0,
    Picture: "",
    Status: 0,
    id: "",
    CategoryId: null,
    Options: [],
    NewSelectOption: [],
    SelectOption: [],
  };
  FilterData = (data) => {
    var filteredArray = data.Options.filter((Options) => {
      return (
        this.state.Options.filter((SelectOption) => {
          return Options.id == SelectOption.Options[0].id;
        }).length == 0
      );
    });
    this.setState({ SelectOption: filteredArray });
  };
  CategoryChange = (e) => {
    this.setState({ CategoryId: e.target.value });
  };
  componentDidMount() {
    const { Product } = this.props.Product;
    this.setState({
      Name: Product.Name,
      Info: Product.Info,
      Price: Product.Price,
      YemekSepetiPrice: Product.YemekSepetiPrice,
      CategoryId: Product.Category[0].id,
      Options: Product.SelectOption,
      Picture: Product.Picture,
      Order: Product.Order,
      id: Product.id,
    });
    this.CategoryId = Product.Category[0].id;
  }
  onChange = (e) => {
    if (e.target.name === "Options") {
      this.state.NewSelectOption = [];

      for (var i = 0; i < e.target.options.length; i++) {
        if (e.target.options[i].selected) {
          this.state.NewSelectOption.push(e.target.options[i].value);
        }
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  onSubmit = (e, UpdateProduct, CreateSelectOption) => {
    UpdateProduct().then(({ data }) => {
      if (this.state.NewSelectOption.length === 0) {
        window.toastr.success(
          "Ürün Güncelleme",
          "İşlem Başarılı.. Yönlendiriliyorsunuz.."
        );
        setTimeout(() => {
          window.location.href = "/product";
        }, 3000);
      }
      for (var i = 0; i < this.state.NewSelectOption.length; i++) {
        CreateSelectOption({
          variables: {
            ProductId: data.UpdateProduct.id,
            OptionsId: this.state.NewSelectOption[i],
          },
        })
          .then((response) => {
            window.toastr.success(
              "Ürün Güncelleme",
              "İşlem Başarılı.. Yönlendiriliyorsunuz.."
            );
            setTimeout(() => {
              window.location.href = "/product";
            }, 3000);
          })
          .catch((error) => console.error(error));
      }
    });
  };
  DeleteOptions = (DeleteSelectOpiton, Option) => {
    DeleteSelectOpiton({ variables: { id: Option.id } });
  };
  formValidate = () => {
    const { Name } = this.state;
    return !Name;
  };
  render() {
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
                    <h1>Ürün Güncelle</h1>
                  </div>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="/">Anasayfa</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/product">Ürün Listesi</a>
                    </li>
                    <li class="breadcrumb-item active">Ürün Güncelleme</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <Mutation
              mutation={UPDATE_PRODUCT}
              variables={{
                Name: this.state.Name,
                Price: parseFloat(this.state.Price),
                YemekSepetiPrice: parseFloat(this.state.YemekSepetiPrice),
                Order: parseInt(this.state.Order),
                Status: parseInt(this.state.Status),
                Picture: this.state.Picture,
                CategoryId: this.state.CategoryId,
                Info: this.state.Info,
                id: this.state.id,
              }}
              refetchQueries={[{ query: GET_PRODUCTS }]}
            >
              {(UpdateProduct, { loading, error }) => (
                <form>
                  <Query query={GET_CATEGORYS}>
                    {({ loading, data, error }) => {
                      if (loading)
                        return <div className="loading">Loading...</div>;
                      if (error) return <div>Error</div>;
                      return (
                        <div className="form-group">
                          <label>Kategori</label>
                          <select
                            className="form-control"
                            name="CategoryId"
                            onChange={this.CategoryChange}
                          >
                            <option>Kategori Seçiniz...</option>
                            {data.Categorys.map((category) => (
                              <option
                                key={category.id}
                                value={category.id}
                                selected={category.id === this.state.CategoryId}
                              >
                                {category.Name} ({category.CategoryType})
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    }}
                  </Query>
                  <div className="form-group">
                    <label>Ürün Adı</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ürün Adı"
                      name="Name"
                      value={this.state.Name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Kısa Açıklama</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Kısa Açıklama"
                      value={this.state.Info}
                      name="Info"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Resim</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Görsel"
                      name="Picture"
                      value={this.state.Picture}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Sırlama</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Sırlama"
                      value={this.state.Order}
                      name="Order"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>YemekSepeti Fiyatı</label>
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="Fiyat"
                      value={this.state.YemekSepetiPrice}
                      name="YemekSepetiPrice"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Fiyat</label>
                    <input
                      type="Number"
                      className="form-control"
                      placeholder="Fiyat"
                      value={this.state.Price}
                      name="Price"
                      onChange={this.onChange}
                    />
                  </div>

                  <Query
                    query={GET_OPTIONS}
                    onCompleted={(data) => this.FilterData(data)}
                  >
                    {({ loading, data, error }) => {
                      if (loading)
                        return <div className="loading">Loading...</div>;
                      if (error) return <div>Error</div>;
                      return <div className="form-group"></div>;
                    }}
                  </Query>

                  <div className="form-group">
                    <label>Seçenek</label>
                    <select
                      className="form-control"
                      name="Options"
                      onChange={this.onChange}
                      multiple
                    >
                      {this.state.SelectOption.map((option) => (
                        <option value={option.id}>{option.Name}</option>
                      ))}
                    </select>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <td>Adı</td>
                        <td>Fiyatı</td>
                        <td>Düzenle/Sil</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.Options.map((Option) => (
                        <tr>
                          <td>{Option.Options[0].Name}</td>
                          <td>{Option.Options[0].Price}</td>
                          <td>
                            <Link
                              className="btn btn-primary"
                              onClick={() => console.log(Option)}
                            >
                              Düzenle
                            </Link>
                            <Mutation
                              mutation={DELETE_SELECTOPTIONS}
                              refetchQueries={GET_OPTIONS}
                            >
                              {(DeleteSelectOption, { loading, error }) => (
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() =>
                                    this.DeleteOptions(
                                      DeleteSelectOption,
                                      Option
                                    )
                                  }
                                >
                                  Sil
                                </button>
                              )}
                            </Mutation>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Mutation mutation={CREATE_SELECTOPTION}>
                    {(CreateSelectOption, { loading, error }) => (
                      <div className="form-group">
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled={!this.formValidate}
                          onClick={(e) => {
                            e.preventDefault();
                            this.onSubmit(e, UpdateProduct, CreateSelectOption);
                          }}
                          data-dismiss="modal"
                        >
                          Kaydet
                        </button>
                      </div>
                    )}
                  </Mutation>
                </form>
              )}
            </Mutation>
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ Product }) => {
  return {
    Product,
  };
};
export default connect(mapStateToProps)(withRouter(EditProduct));
