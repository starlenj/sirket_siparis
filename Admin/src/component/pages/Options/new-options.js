import React, { Component } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { Mutation } from "react-apollo";
import { CREATE_OPTIONS } from "../../../queries/index";
export default class NewOptions extends Component {
  state = {
    Name: "",
    MaxQuantity: 0,
    MinQuantity: 0,
    IsRequired: false,
    Price: 0,
    Order: 0,
    SelectType: ""
  };
  onChange = e => {
    if (e.target.name === "IsRequired") {
      if (e.target.value === "true") {
        this.setState({ IsRequired: true });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  onSubmit = (e, CreateOptions) => {
    if (!this.formValidate()) {
      this.setState({ Name: "" });
      CreateOptions();
    }
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
                    <h1>Seçenekler</h1>
                  </div>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="/">Anasayfa</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/OptionList">Seçenek Listesi</a>
                    </li>
                    <li class="breadcrumb-item active">Yeni Seçenek</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Seçenek Listesi</h3>
              </div>

              <div class="card-body">
                <Mutation
                  mutation={CREATE_OPTIONS}
                  variables={{
                    Name: this.state.Name,
                    MinQuantity: parseInt(this.state.MinQuantity),
                    MaxQuantity: parseInt(this.state.MaxQuantity),
                    IsRequired: this.state.IsRequired,
                    SelectType: this.state.SelectType,
                    Order: parseInt(this.state.Order)
                  }}
                  onCompleted={() => {
                    window.toastr.success(
                      "Seçenek Ekleme",
                      "İşlem Başarılı. Yönlendiriliyorsunuz..."
                    );
                    setTimeout(
                      () => (window.location.href = "/OptionList"),
                      3000
                    );
                  }}
                >
                  {(CreateOptions, { loading, error }) => (
                    <form>
                      <div className="form-group">
                        <label>Seçim Türü</label>
                        <select
                          type="text"
                          className="form-control"
                          placeholder="Kategori Adı"
                          name="SelectType"
                          onChange={this.onChange}
                        >
                          <option>Seçim Türünü Seçiniz..</option>
                          <option value="Single"> Tekli Seçim</option>
                          <option value="Multiple">Çoklu seçim</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Adı</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Kategori Adı"
                          name="Name"
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Sıra</label>
                        <input
                          type="Number"
                          className="form-control"
                          placeholder="Sıra"
                          name="Order"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Minumum Miktar</label>
                        <input
                          type="Number"
                          className="form-control"
                          placeholder="Minumum Miktar"
                          name="MinQuantity"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Maximum Miktar</label>
                        <input
                          type="Number"
                          className="form-control"
                          placeholder="Maximum Miktar"
                          name="MaxQuantity"
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Zorunlumu?</label>
                        <input
                          type="checkbox"
                          data-toggle="switch"
                          value="true"
                          className="form-control"
                          name="IsRequired"
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled={!this.formValidate}
                          onClick={e => {
                            e.preventDefault();
                            this.onSubmit(e, CreateOptions);
                          }}
                          data-dismiss="modal"
                        >
                          Kaydet
                        </button>
                      </div>
                    </form>
                  )}
                </Mutation>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
