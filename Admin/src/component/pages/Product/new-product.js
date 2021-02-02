import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import {
  CREATE_PRODUCT,
  GET_CATEGORYS,
  GET_OPTIONS,
  CREATE_SELECTOPTION,
} from "../../../queries/index";
export default class NewProduct extends Component {
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
    CategoryId: "",
    Options: [],
  };
  onChange = (e) => {
    if (e.target.name === "Options") {
      this.state.Options = [];

      for (var i = 0; i < e.target.options.length; i++) {
        if (e.target.options[i].selected) {
          this.state.Options.push(e.target.options[i].value);
        }
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  CategoryChange = (e) => {
    this.CategoryId = e.target.value;
  };
  onSubmit = (e, CreateProduct, CreateSelectOption) => {
    CreateProduct().then(({ data }) => {
      for (var i = 0; i < this.state.Options.length; i++) {
        CreateSelectOption({
          variables: {
            ProductId: data.CreateProduct.id,
            OptionsId: this.state.Options[i],
          },
        })
          .then((response) => {
            window.toastr.success(
              "Ürün Ekleme",
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
                    <h1>Yeni Ürün</h1>
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
                    <li class="breadcrumb-item active">Yeni Ürün</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <Mutation
              mutation={CREATE_PRODUCT}
              variables={{
                Name: this.state.Name,
                Price: parseFloat(this.state.Price),
                Order: parseInt(this.state.Order),
                Status: 1,
                Picture: this.state.Picture,
                YemekSepetiPrice: this.state.YemekSepetiPrice,
                CategoryId: this.CategoryId,
                Info: this.state.Info,
              }}
            >
              {(CreateProduct, { loading, error }) => (
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
                              <option value={category.id}>
                                {category.Name}
                              </option>
                            ))}
                          </select>
                        </div>
                      );
                    }}
                  </Query>

                  <Query query={GET_OPTIONS}>
                    {({ loading, data, error }) => {
                      if (loading)
                        return <div className="loading">Loading...</div>;
                      if (error) return <div>Error</div>;
                      return (
                        <div className="form-group">
                          <label>Seçenek</label>
                          <select
                            className="form-control"
                            name="Options"
                            onChange={this.onChange}
                            multiple
                          >
                            {data.Options.map((option) => (
                              <option value={option.id}>{option.Name}</option>
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
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Kısa Açıklama</label>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Kısa Açıklama"
                      name="Info"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Resim</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Picture"
                      name="Order"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Sırlama</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Sırlama"
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
                      name="Price"
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Aktif</label>
                    <input
                      type="checkbox"
                      className="form-control"
                      name="Status"
                      value={false}
                      onChange={this.onChange}
                    />
                  </div>
                  <Mutation mutation={CREATE_SELECTOPTION}>
                    {(CreateSelectOption, { loading, error }) => (
                      <div className="form-group">
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled={!this.formValidate}
                          onClick={(e) => {
                            e.preventDefault();
                            this.onSubmit(e, CreateProduct, CreateSelectOption);
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
