import React, { Component, Fragment, createRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { Query } from "react-apollo";
import { GET_USERS } from "../../../queries";
import DeleteUser from "./delete-user";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { SetUser } from "../../../actions/User";
class UsersHome extends Component {
  state = { SelectUser: [] };
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.DeleteForm = createRef();
  }

  GetData(orders) {
    window.jQuery(this.gridRef.current).DataTable({
      responsive: true,
      autoWidth: false,
    });
  }
  SelectUser = async (user) => {
    this.setState({ SelectUser: user });
    this.UpdateForm.current.SetUser(user);
  };
  render() {
    return (
      <Query query={GET_USERS} onCompleted={(data) => this.GetData(data)}>
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
                          <h1>Kullanıcı</h1>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item">
                            <a href="/">Anasayfa</a>
                          </li>
                          <li class="breadcrumb-item active">
                            Kullanıcı Listesi
                          </li>
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

                    <div class="card-body">
                      <button
                        className="btn btn-primary"
                        style={{ float: "right" }}
                        onClick={() =>
                          (window.location.href = "/Users/NewUser")
                        }
                      >
                        Yeni
                      </button>
                      <table
                        id="example2"
                        class="table table-bordered table-hover"
                        ref={this.gridRef}
                      >
                        <thead>
                          <tr>
                            <td>Kullanıcı Adı</td>
                            <td>Yetkilendirme</td>
                            <td>Düzenle/Sil</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data.Users.map((user) => (
                            <tr key={Math.random(0, 200)}>
                              <td>{user.Name}</td>
                              <td>
                                <button
                                  class="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#PermissionModal"
                                  onClick={() =>
                                    this.SelectUserPermission(user)
                                  }
                                >
                                  Yetkilendirme
                                </button>
                              </td>
                              <td>
                                <Link
                                  class="btn btn-primary"
                                  to="/EditUser"
                                  onClick={() => this.SelectUser(user)}
                                >
                                  Düzenle
                                </Link>
                                <button
                                  class="btn btn-danger"
                                  data-toggle="modal"
                                  data-target="#DeleteCategoryModal"
                                  onClick={() => this.DeleteUser(user)}
                                >
                                  Sil
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>

              <div class="modal fade" id="DeleteCategoryModal">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Kullanıcı Sil</h4>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <DeleteUser ref={this.DeleteForm} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
const mapStateToProps = ({ User }) => {
  return {
    User,
  };
};
const mapDispatchToProps = {
  SetUser,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UsersHome));
