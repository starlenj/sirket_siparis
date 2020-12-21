import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { CREATE_SUBE } from "../../../queries/index";
export default class NewSube extends Component {
  state = {
    Name: "",
    PaketServis: false,
    RestorantSiparis: false,
    GelAl: false,
    ArabayaServis: false,
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e, CreateSube) => {
    if (this.state.Name !== "") {
      CreateSube();
    }
  };
  CheckBoxChange = (e) => {
    if (e.target.value === "on") {
      this.setState({ [e.target.name]: true });
    }
    if (e.target.value === "off") {
      this.setState({ [e.target.name]: false });
    }
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
                    <h1>Yeni Şube</h1>
                  </div>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="/">Anasayfa</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/Sube">Şube Listesi</a>
                    </li>
                    <li class="breadcrumb-item active">Yeni Şube</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <form>
              <div className="form-group">
                <label>Şube Adı</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Şube Adı"
                  name="Name"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Paket Servis</label>
                <input
                  type="checkbox"
                  className="form-control"
                  placeholder="Şube Adı"
                  name="PaketServis"
                  checked={this.state.PaketServis}
                  onChange={this.CheckBoxChange}
                />
              </div>
              <div className="form-group">
                <label>Şube Adı</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Şube Adı"
                  name="Name"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Şube Adı</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Şube Adı"
                  name="Name"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Şube Adı</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Şube Adı"
                  name="Name"
                  onChange={this.onChange}
                />
              </div>
              <Mutation
                mutation={CREATE_SUBE}
                variables={{ Name: this.state.Name }}
                onCompleted={() => (window.location.href = "/Sube")}
              >
                {(CreateSube, { loading, error }) => (
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      type="button"
                      disabled={!this.formValidate}
                      onClick={(e) => {
                        e.preventDefault();
                        this.onSubmit(e, CreateSube);
                      }}
                      data-dismiss="modal"
                    >
                      Kaydet
                    </button>
                  </div>
                )}
              </Mutation>
            </form>
          </section>
        </div>
      </div>
    );
  }
}
