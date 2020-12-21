import React, { Component } from "react";
import { Mutation } from "react-apollo";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { UPDATE_OPTIONSVALUE } from "../../../queries/index";
import { connect } from "react-redux";
import { Link, withRouter, useHistory } from "react-router-dom";

class EditOptions extends Component {
  state = {
    Name: "",
    Price: 0,
    id: "",
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { OptionValue } = this.props.OptionValue;
    console.log(OptionValue);
    this.setState({
      Name: OptionValue.Name,
      Price: OptionValue.Price,
      id: OptionValue.id,
    });
  }
  onChange = (e) => {
    if (e.target.name === "IsRequired") {
      if (e.target.value === "true") {
        this.setState({ IsRequired: true });
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
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
                    <li class="breadcrumb-item">
                      <a href="/OptionValue">Seçenek Değer Listesi</a>
                    </li>
                    <li class="breadcrumb-item active">
                      Seçenek Değeri Güncelleme
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Seçenek Değeri Güncelle</h3>
              </div>

              <div class="card-body">
                <Mutation
                  mutation={UPDATE_OPTIONSVALUE}
                  variables={{
                    Name: this.state.Name,
                    Price: parseFloat(this.state.Price),
                    id: this.state.id,
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
                        <label>Adı :</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Name"
                          value={this.state.Name}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Fiyat :</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Price"
                          value={this.state.Price}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group">
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled={!this.formValidate}
                          onClick={(e) => {
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
const mapStateToProps = ({ Option, OptionValue }) => {
  return {
    Option,
    OptionValue,
  };
};

export default connect(mapStateToProps)(withRouter(EditOptions));
