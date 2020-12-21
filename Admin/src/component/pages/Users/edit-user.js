import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { GET_USERS, UPDATE_USER } from "../../../queries/index";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
export default class NewCategory extends Component {
  state = { Name: "", Email: "", id: "", Sube: "" };
  constructor(props) {
    super(props);
  }
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
  SetUser(user) {
    console.log(user);
    this.setState({
      Name: user.Name,
      id: user.id,
      Email: user.Email,
      Sube: user.Sube,
    });
  }

  onSubmit = (e, UpdateUser) => {
    if (!this.formValidate()) {
      this.setState({ Name: "" });
      UpdateUser();
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
                    mutation={UPDATE_USER}
                    variables={{ ...this.state }}
                    refetchQueries={[{ query: GET_USERS }]}
                  >
                    {(UpdateUser, { loading, error }) => (
                      <form>
                        <div className="form-group">
                          <label>Kullanıcı Adı </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Kullanıcı Adı"
                            name="Name"
                            value={this.state.Name}
                            onChange={this.onChange}
                          />
                        </div>
                        <div className="form-group">
                          <label>E-Posta</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="E-Posta"
                            name="Email"
                            value={this.state.Email}
                            onChange={this.onChange}
                          />
                        </div>

                        <select
                          className="form-control"
                          style={{ width: "100%" }}
                          name="Sube"
                          onChange={this.onChange}
                        >
                          <option>..Şube Seçiniz..</option>
                          <option value={"arcadium"}>Arcadium</option>
                          <option value={"gordion"}>Gordion</option>
                          <option value={"armada"}>Armada</option>
                          <option value={"bahcelievler"}>Bahçelievler</option>
                          <option value={"bilkent"}>Bilkent</option>
                          <option value={"ankamall"}>Ankamall</option>
                          <option value={"atakule"}>Atakule</option>
                          <option value={"cepa"}>Cepa</option>
                          <option value={"kayseri"}>Kayseri</option>
                          <option value={"adana"}>Adana</option>
                          <option value={"mersin"}>Mersin</option>
                          <option value={"merkez"}>Merkez</option>
                        </select>
                        <div className="form-group">
                          <button
                            className="btn btn-primary"
                            type="button"
                            disabled={!this.formValidate}
                            onClick={(e) => {
                              e.preventDefault();
                              this.onSubmit(e, UpdateUser);
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
            </div>
          </section>
        </div>
      </div>
    );
  }
}
