import React, { Component, Fragment, createRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import NewSemt from "./new-semt";
import EditSemt from "./edit-semt";
import { Query ,Mutation} from "react-apollo";
import { UPDATE_SEMT,GET_SEMTS,DELETE_SEMT } from "../../../queries";
import { withRouter, Link } from "react-router-dom";
 class Semt extends Component {
   state = { OrderData: [], SelectSemt: [], Status: false };
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
    this.onChange = this.onChange.bind(this)
  }
   onChange(e){
var Data =      this.state.SelectSemt 
Data[e.target.name] = e.target.value;
     this.setState({SelectSemt :Data});
   }
   DeleteSemtHandle(DeleteSemt,Semt){
     DeleteSemt({variables:{id : Semt.id}})

   }
  render() {
    return (
      <Query
        query={GET_SEMTS}
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
                          <h1>Semtler</h1>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item">
                            <a href="/">Anasayfa</a>
                          </li>
                          <li class="breadcrumb-item active">Semt Listesi</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="content">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Semt Listesi</h3>
                    </div>

                    <div class="card-body">
                      <button 
                        type="button"
                        className="btn btn-primary"
                        style={{ float: "right" }}
                        data-toggle="modal"
                        data-target="#NewSemtModal"
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
                            <td>Adı</td>
                            <td>Düzenle</td>
                            <td>Sil</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data.Semts.map((Semt) => (
                            <tr key={Math.random(0, 200)}>
                              <td>{Semt.Name}</td>

                              <td>
                                <button
                                  class="btn btn-primary"
                                  type="button"
                                  data-toggle="modal"                                  
                                  data-target="#EditSemtModal"
                                  onClick={() =>{ this.setState({SelectSemt  : Semt}) }} 
                                >
                                  Düzenle
                                </button>
                              </td>
                              <td>
          <Mutation mutation={DELETE_SEMT} onCompleted={() => {window.location.reload()
        }}
>
            {(DeleteSemt, { loading, error }) => (
                                <button
                                  class="btn btn-danger"
                                  type="button"
                                  onClick={()=> this.DeleteSemtHandle(DeleteSemt,Semt) }
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

              <div class="modal" tabindex="-1" role="dialog" id="NewSemtModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Yeni Semt</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
    <NewSemt />
      </div>
    </div>
  </div>
</div>
                <div class="modal" tabindex="-1" role="dialog" id="EditSemtModal">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Semt Düzenle</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <Mutation mutation={UPDATE_SEMT} variables={{ ...this.state.SelectSemt }}>
            {(UpdateSemt, { loading, error }) => (
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Adı"
                    name="Name"
                    value={this.state.SelectSemt.Name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                    UpdateSemt(); 

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
</div>

            </div>
          );
        }}
      </Query>
    );
  }
}
export default withRouter(Semt);
