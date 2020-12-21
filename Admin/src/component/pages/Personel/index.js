import React, { Component, Fragment, createRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { Query } from "react-apollo";
import { GET_PERSONELS } from "../../../queries";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { SetPersonel } from "../../../actions/Personel";
class PersonelList extends Component {
  state = { OrderData: [], SelectProduct: [], Status: false };
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
  }

  render() {
    return (
      <Query
        query={GET_PERSONELS}
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
                          <h1>Personeller</h1>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item">
                            <a href="/">Anasayfa</a>
                          </li>
                          <li class="breadcrumb-item active">
                            Personel Listesi
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>

                <section class="content">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Personel Listesi</h3>
                    </div>

                    <div class="card-body">
                      <Link
                        className="btn btn-primary"
                        style={{ float: "right" }}
                        to="/NewPersonel"
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
                            <td>Adı</td>
                            <td>Şube</td>
                            <td>Düzenle</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data.Personels.map((personel) => (
                            <tr key={Math.random(0, 200)}>
                              <td>{personel.Name}</td>
                              <td>{personel.SubeId}</td>

                              <td>
                                <Link
                                  class="btn btn-primary"
                                  to="/EditPersonel"
                                  onClick={() =>
                                    this.props.SetPersonel(personel)
                                  }
                                >
                                  Düzenle
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = ({ Personel }) => {
  return {
    Personel,
  };
};
const mapDispatchToProps = {
  SetPersonel,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PersonelList));
