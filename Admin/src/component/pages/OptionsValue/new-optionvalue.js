import React, { Component } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { Mutation } from "react-apollo";
import { CREATE_OPTIONSVALUE } from "../../../queries/index";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
class NewOptionsValue extends Component {
  state = {
    Name: "",
    Price: 0,
    OptionsId: "",
  };
  componentDidMount() {
    this.state.OptionsId = this.props.Option.Option.id;
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
                      <Link to="/">Anasayfa</Link>
                    </li>
                    <li class="breadcrumb-item">
                      <Link to="/OptionList">Seçenek Listesi</Link>
                    </li>
                    <li class="breadcrumb-item ">
                      <Link to="/OptionsValue">Seçenek Değer Listesi</Link>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Seçenek Değeri</h3>
              </div>

              <div class="card-body">
                <Mutation
                  mutation={CREATE_OPTIONSVALUE}
                  variables={{
                    Name: this.state.Name,
                    Price: parseFloat(this.state.Price),
                    OptionsId: this.state.OptionsId,
                  }}
                  onCompleted={() => {
                    window.toastr.success(
                      "Seçenek Değer Ekleme",
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
                        <label>Adı</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Adı"
                          name="Name"
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Fiyatı</label>
                        <input
                          type="Number"
                          className="form-control"
                          placeholder="Fiyatı"
                          name="Price"
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

const mapStateToProps = ({ Option }) => {
  return {
    Option,
  };
};
export default connect(mapStateToProps)(withRouter(NewOptionsValue));
