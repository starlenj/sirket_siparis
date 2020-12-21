import React, { Component, Fragment, createRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { Query, Mutation } from "react-apollo";
import { GET_SUBES, DELETE_SUBE } from "../../../queries";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { SetSube } from "../../../actions/Sube";
import NewSube from "../../Form/NewSube";
class Home extends Component {
  state = { OrderData: [], SelectSube: [], Status: false };
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
  }
  DeleteSube = async (id, DeleteSube) => {
    if (id) {
      let result = await DeleteSube({ variables: { id } });
      if (result.data.DeleteSube.id) {
        window.location.reload();
      }
    }
  };
  SetSube(Sube) {
    this.setState({ SelectSube: Sube });
  }
  render() {
    return (
      <Query
        query={GET_SUBES}
        onCompleted={() => {
          window.jQuery(this.gridRef.current).DataTable({
            responsive: true,
            autoWidth: false,
          });
        }}
      >
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
                          <h1>Şubeler</h1>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item">
                            <a href="/">Anasayfa</a>
                          </li>
                          <li class="breadcrumb-item active">Şube Listesi</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="content">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Şube Listesi</h3>
                    </div>

                    <div class="card-body">
                      <Link
                        className="btn btn-primary"
                        style={{ float: "right" }}
                        to="/NewSube"
                      >
                        Yeni
                      </Link>
                      <table
                        id="example2"
                        class="table table-bordered table-hover"
                        ref={this.gridRef}
                      >
                        <thead>
                          <tr>
                            <td>Şube Adı</td>
                            <td>Düzenle</td>
                            <td>Servis</td>
                            <td>Sil</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data.Subes.map((Sube) => (
                            <tr key={Math.random(0, 200)}>
                              <td>{Sube.Name}</td>
                              <td>
                                <Link
                                  class="btn btn-primary"
                                  to="/EditSube"
                                  onClick={() => this.props.SetSube(Sube)}
                                >
                                  Düzenle
                                </Link>
                              </td>
                              <td>
                                <Link
                                  class="btn btn-primary"
                                  to={"/ServisSube/" + Sube.id}
                                >
                                  Servis
                                </Link>
                              </td>
                              <td>
                                <Mutation mutation={DELETE_SUBE}>
                                  {(DeleteSube, { loading, error }) => (
                                    <button
                                      className="btn btn-danger"
                                      onClick={() =>
                                        this.DeleteSube(Sube.id, DeleteSube)
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
                    </div>
                  </div>
                </section>
              </div>
              <div
                class="modal"
                tabindex="-1"
                role="dialog"
                id="SubeServisModal"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">Şube Servis Seçimi</h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
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

const mapStateToProps = ({ Sube }) => {
  return {
    Sube,
  };
};
const mapDispatchToProps = {
  SetSube,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
