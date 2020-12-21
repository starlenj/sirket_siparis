import React, { Component } from "react";
import { Mutation } from "react-apollo";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { UPDATE_OPTIONS } from "../../../queries/index";
import { connect } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";

class EditOptions extends Component {
  state = {
    Name: "",
    IsRequired: false,
    MinQuantity: 0,
    MaxQuantity: 0,
    OptionsCategory: "",
    Order: 0,
    id: ""
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { Option } = this.props.Option;
    console.log(Option);
    this.setState({
      Name: Option.Name,
      IsRequired: Option.IsRequired,
      MinQuantity: Option.MinQuantity,
      MaxQuantity: Option.MaxQuantity,
      SelectType: Option.SelectType,
      Price: Option.Price,
      Order: Option.Order,
      id: Option.id
    });
  }
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

  onSubmit = (e, UpdateOption) => {
    if (!this.formValidate()) {
      this.setState({ Name: "" });
      UpdateOption();
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
                    <li class="breadcrumb-item active">Seçenek Güncelleme</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Seçenek Güncelle</h3>
              </div>

              <div class="card-body">
                <Mutation
                  mutation={UPDATE_OPTIONS}
                  variables={{
                    Name: this.state.Name,
                    Price: parseFloat(this.state.Price),
                    MinQuantity: parseInt(this.state.MinQuantity),
                    MaxQuantity: parseInt(this.state.MaxQuantity),
                    SelectType: this.state.SelectType,
                    IsRequired: this.state.IsRequired,
                    Order: parseInt(this.state.Order),
                    id: this.state.id
                  }}
                  onCompleted={() => {
                    window.toastr.success(
                      "Seçenek Düzenleme",
                      "İşlem Başarılı. Yönlendiriliyorsunuz..."
                    );
                    setTimeout(
                      () => (window.location.href = "/OptionList"),
                      3000
                    );
                  }}
                >
                  {(UpdateOption, { loading, error }) => (
                    <form>
                      <div className="form-group">
                        <label>Seçenek Türü</label>
                        <select
                          className="form-control"
                          name="SelectType"
                          onChange={this.onChange}
                        >
                          <option value="">Seçenet Türü Seçiniz..</option>
                          <option
                            value="Single"
                            selected={this.state.SelectType === "Single"}
                          >
                            Tekli Seçim
                          </option>
                          <option
                            value="Multiple"
                            selected={this.state.SelectType === "Multiple"}
                          >
                            Çoklu Seçim
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Adı :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Kategori Adı"
                          name="Name"
                          value={this.state.Name}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Sıralama :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Sıralama"
                          name="Order"
                          value={this.state.Order}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Minimum Miktar :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Minimum Miktar"
                          name="MinQuantity"
                          value={this.state.MinQuantity}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Maximum Miktar :</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Maximum Miktar"
                          name="MaxQuantity"
                          value={this.state.MaxQuantity}
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
                            this.onSubmit(e, UpdateOption);
                          }}
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
const mapStateToProps = ({ Option }) => {
  return {
    Option
  };
};

export default connect(mapStateToProps)(withRouter(EditOptions));
