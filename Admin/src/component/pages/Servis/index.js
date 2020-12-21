import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import {
  GET_SUBE,
  NEW_SUBE_SERVIS,
  GET_SUBE_SERVIS,
  DELETE_SUBE_SERVIS,
} from "../../../queries/index";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
class SubeServis extends Component {
  state = {
    SubeId: "",
    Name: "",
    SubeData: [],
    SelectServis: [],
  };
  constructor(props) {
    super(props);
    this.HandleInput = this.HandleInput.bind(this);
    var path = window.location.pathname.split("/");
    this.state.SubeId = path[2];
  }
  onSubmit = (e, CreateServis) => {
    CreateServis();
  };
  HandleDelete(DeleteSubeServis, SubeServis) {
    DeleteSubeServis({ variables: { id: SubeServis.id } });
  }
  HandleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
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
                    <h1>Şube Servis İşlemleri</h1>
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
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <Mutation
              mutation={NEW_SUBE_SERVIS}
              variables={{
                Name: this.state.Name,
                SubeId: this.state.SubeId,
              }}
            >
              {(CreateServis, { loading, error }) => (
                <form>
                  <div className="form-group">
                    <label>Servis Türü </label>
                    <input
                      type="text"
                      className="form-control"
                      name="Name"
                      onChange={this.HandleInput}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        this.onSubmit(e, CreateServis);
                      }}
                      data-dismiss="modal"
                    >
                      Kaydet
                    </button>
                  </div>
                </form>
              )}
            </Mutation>
            <Query
              query={GET_SUBE_SERVIS}
              variables={{ SubeId: this.state.SubeId }}
            >
              {({ loading, data, error }) => {
                if (loading) return <div className="loading">Loading...</div>;
                if (error) return <div>Error</div>;

                return (
                  <table
                    id="example2"
                    class="table table-bordered table-hover"
                    ref={this.gridRef}
                  >
                    <thead>
                      <tr>
                        <td>Sipariş Adı</td>
                        <td>Sil</td>
                      </tr>
                    </thead>
                    <tbody>
                      {data.SubeServis.map((SubeServis) => (
                        <tr key={Math.random(0, 200)}>
                          <td>{SubeServis.Name}</td>
                          <Mutation mutation={DELETE_SUBE_SERVIS}>
                            {(DeleteSubeServis, { loading, error }) => (
                              <td>
                                <button
                                  class="btn btn-danger"
                                  onClick={() =>
                                    this.HandleDelete(
                                      DeleteSubeServis,
                                      SubeServis
                                    )
                                  }
                                >
                                  Sil
                                </button>
                              </td>
                            )}
                          </Mutation>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                );
              }}
            </Query>
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ Sube }) => {
  return {
    Sube,
  };
};
export default connect(mapStateToProps)(withRouter(SubeServis));
