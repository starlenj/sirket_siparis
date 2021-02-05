import React, { Component, Fragment, createRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import NewCategory from "../../pages/Category/new-category";
import UpdateCategory from "../../pages/Category/edit-category";
import DeleteCategory from "../../pages/Category/delete-category";
import { Query } from "react-apollo";
import { GET_CATEGORYS } from "../../../queries";

export default class Home extends Component {
  state = { OrderData: [], SelectCategory: [] };
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
  SelectCategory = async (category) => {
    this.setState({ SelectCategory: category });
    this.UpdateForm.current.SetCategory(category);
  };
  DeleteCategory = async (category) => {
    this.setState({ SelectCategory: category });
    this.DeleteForm.current.SetCategory(category);
  };
  render() {
    return (
      <Query query={GET_CATEGORYS} onCompleted={(data) => this.GetData(data)}>
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
                          <h1>Kategori</h1>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item">
                            <a href="/">Anasayfa</a>
                          </li>
                          <li class="breadcrumb-item active">
                            Kategori Listesi
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="content">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Kategori Listesi</h3>
                    </div>

                    <div class="card-body">
                      <button
                        className="btn btn-primary"
                        style={{ float: "right" }}
                        data-toggle="modal"
                        data-target="#NewCategoryModal"
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
                            <td>Kategori Adı</td>
                            <td>Kategori Türü</td>
                            <td>Düzenle/Sil</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data.Categorys.map((category) => (
                            <tr key={Math.random(0, 200)}>
                              <td>{category.Name}</td>
                              <td>{category.CategoryType}</td>

                              <td>
                                <button
                                  class="btn btn-primary"
                                  data-toggle="modal"
                                  data-target="#UpdateCategoryModal"
                                  onClick={() => this.SelectCategory(category)}
                                >
                                  Düzenle
                                </button>
                                <button
                                  class="btn btn-danger"
                                  data-toggle="modal"
                                  data-target="#DeleteCategoryModal"
                                  onClick={() => this.DeleteCategory(category)}
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

              <div class="modal fade" id="NewCategoryModal">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Yeni Kategori</h4>
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
                      <NewCategory />
                    </div>
                  </div>
                </div>
              </div>

              <div class="modal fade" id="UpdateCategoryModal">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Kategori Güncelle</h4>
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

              <div class="modal fade" id="DeleteCategoryModal">
                <div class="modal-dialog modal-md">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Kategori Sil</h4>
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
