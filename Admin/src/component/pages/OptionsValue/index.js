import React, { Component, Fragment, createRef } from "react";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { Query } from "react-apollo";
import { GET_OPTIONSVALUE } from "../../../queries";
import { connect } from "react-redux";
import { SetOptionValue } from "../../../actions/OptionValue";
import { withRouter, Link } from "react-router-dom";
class OptionValueList extends Component {
  constructor(props) {
    super(props);
    this.gridRef = React.createRef();
  }
  componentDidMount() {
    console.log(this.props);
  }
  GetData(orders) {
    window.jQuery(this.gridRef.current).DataTable({
      responsive: true,
      autoWidth: false,
    });
  }

  EditOptionValue = async (OptionValue) => {
    this.props.SetOptionValue(OptionValue);
  };

  render() {
    return (
      <Query
        query={GET_OPTIONSVALUE}
        variables={{ OptionsId: this.props.Option.Option.id }}
        onCompleted={(data) => this.GetData(data)}
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
                      <Link
                        className="btn btn-primary"
                        to="/NewOptionsValue"
                        style={{ float: "right" }}
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
                            <td>Seçenek Adı</td>
                            <td>Düzenle/Sil</td>
                          </tr>
                        </thead>
                        <tbody>
                          {data.OptionValue.map((options) => (
                            <tr key={Math.random(0, 200)}>
                              <td>{options.Name}</td>

                              <td>
                                <Link
                                  class="btn btn-primary"
                                  to="/EditOptionsValue"
                                  onClick={() => this.EditOptionValue(options)}
                                >
                                  Düzenle
                                </Link>
                                <button
                                  class="btn btn-danger"
                                  data-toggle="modal"
                                  data-target="#DeleteOptionsModal"
                                  onClick={() => this.props.SetOption(options)}
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
            </div>
          );
        }}
      </Query>
    );
  }
}
const mapStateToProps = ({ OptionValue, Option }) => {
  return {
    Option,
    OptionValue,
  };
};
const mapDispatchToProps = {
  SetOptionValue,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(OptionValueList));
