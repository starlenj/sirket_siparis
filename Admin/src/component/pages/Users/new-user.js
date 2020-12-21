import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { CREATE_USER, GET_USERS, GET_SUBES } from "../../../queries/index";
import Error from "../Error";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
export default class NewCategory extends Component {
  state = { Name: "", Email: "", Password: "", Sube: "" };
  onChange = (e) => {
    if (e.target.name == "Sube") {
      var target = e.target.options;
      for (var i = 0; i < target.length; i++) {
        if (target[i].selected) {
          if (target[i].value !== "") {
            this.setState({ Sube: target[i].value });
          }
        }
      }
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e, CreateUser) => {
    if (!this.formValidate()) {
      this.setState({ Name: "", Email: "", Password: "", Sube: "" });
      CreateUser();
    }
  };

  formValidate = () => {
    const { Name, Email, Password, Sube } = this.state;
    return !Name && !Email && !Password && !Sube;
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
                    <h1>Kullanıcı</h1>
                  </div>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="/">Anasayfa</a>
                    </li>
                    <li class="breadcrumb-item active">Kullanıcı Listesi</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section class="content">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Kullanıcı Listesi</h3>
              </div>
              <div className="container">
                <div className="row col-md-12">
                  <Mutation
                    mutation={CREATE_USER}
                    variables={{ ...this.state }}
                    refetchQueries={[{ query: GET_USERS }]}
                  >
                    {(CreateUser, { loading, error }) => (
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Adı"
                            name="Name"
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="E-Posta"
                            name="Email"
                            onChange={this.onChange}
                          />
                        </div>
                        <Query query={GET_SUBES}>
                          {({ loading, data, error }) => {
                            if (loading)
                              return <div className="loading">Loading...</div>;
                            if (error) return <div>Error</div>;
                            return (
                              <select
                                className="form-control"
                                style={{ width: "100%" }}
                                name="Sube"
                                onChange={this.onChange}
                              >
                                <option>...Şube Seçiniz...</option>
                                {data.Subes.map((sube) => (
                                  <option value={sube.id}>{sube.Name}</option>
                                ))}
                              </select>
                            );
                          }}
                        </Query>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Şifre"
                            name="Password"
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
                              this.onSubmit(e, CreateUser);
                            }}
                            data-dismiss="modal"
                          >
                            Kaydet
                          </button>

                          {error && <Error error={error} />}
                        </div>
                      </form>
                    )}
                  </Mutation>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
