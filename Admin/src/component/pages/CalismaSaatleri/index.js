import React, { Component, Fragment, createRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import NewOptions from "../../pages/Options/new-options";
import UpdateCategory from "../../pages/Options/edit-options";
import DeleteCategory from "../../pages/Options/delete-options";
import { Query } from "react-apollo";
import { GET_OPTIONS } from "../../../queries";

export default class CalismaSaatleri extends Component {
  state = { OrderData: [], SelectOptions: [] };
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.UpdateForm = createRef();
    this.DeleteForm = createRef();
  }

  GetData(orders) {
    window.jQuery(this.gridRef.current).DataTable({
      responsive: true,
      autoWidth: false,
    });
  }
  SelectOptions = async (options) => {
    this.setState({ SelectOptions: options });
    this.UpdateForm.current.SetOption(options);
  };
  DeleteOptions = async (options) => {
    this.setState({ SelectOptions: options });
    this.DeleteForm.current.SetOption(options);
  };
  render() {
    return (
      <Query query={GET_OPTIONS} onCompleted={(data) => this.GetData(data)}>
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
                          <h1>Seçenekler</h1>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item">
                            <a href="/">Anasayfa</a>
                          </li>
                          <li class="breadcrumb-item active">
                            Seçenek Listesi
                          </li>
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
                      <button
                        className="btn btn-primary"
                        style={{ float: "right" }}
                        data-toggle="modal"
                        data-target="#NewOptionsModal"
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
                            <td>Seçenek Adı</td>
                            <td>Düzenle/Sil</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data.Options.map((options) => (
                            <tr key={Math.random(0, 200)}>
                              <td>{options.Name}</td>

                              <td>
                                <button
                                  class="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#UpdateOptionsModal"
                                  onClick={() => this.SelectOptions(options)}
                                >
                                  Düzenle
                                </button>
                                <button
                                  class="btn btn-danger"
                                  data-toggle="modal"
                                  data-target="#DeleteOptionsModal"
                                  onClick={() => this.DeleteOptions(options)}
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

              <div class="modal fade" id="NewOptionsModal">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Yeni Seçenek</h4>
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
                      <NewOptions />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal fade" id="UpdateOptionsModal">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Seçenek Güncelle</h4>
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
                      <UpdateCategory ref={this.UpdateForm} />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal fade" id="DeleteOptionsModal">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Seçenek Sil</h4>
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
                      <DeleteCategory ref={this.DeleteForm} />
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
