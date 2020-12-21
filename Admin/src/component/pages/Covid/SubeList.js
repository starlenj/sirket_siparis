import React, { Component, Fragment } from "react";
import { Query, Mutation, ApolloConsumer } from "react-apollo";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import * as Moment from "moment";
import {
  GET_PERSONELS,
  GET_COVID_HEADER,
  CREATE_COVID_HEADER,
  CREATE_COVID_ATES,
  CREATE_COVID_HIJYEN,
} from "../../../queries/index";
export default class CovidForm extends Component {
  constructor(props) {
    super(props);
    this.CategoryId = "";
  }
  state = {
    Saat: "",
    SubeId: "",
    PersonelList: [],
    HijyenSaat: "",
    CreatedAt: "",
    AtesData: [],
    HijyenData: [],
  };
  Ates = (e, Personel) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onChange = (e) => {
    if (e.target.name === "Options") {
      this.state.Options = [];

      for (var i = 0; i < e.target.options.length; i++) {
        if (e.target.options[i].selected) {
          this.state.Options.push(e.target.options[i].value);
        }
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  handleSaat = (e) => {};
  onSubmit = async (CreateCovidHeader, CreateCovidAtes) => {
    var ates = 0;
    var personelId = "";
    if (this.state.Saat === "") {
      alert("Saat Seçmek Zorunludur");
      return;
    }
    let CreateCovidHeaderResult = await CreateCovidHeader({
      variables: {
        SubeId: this.props.session.ActiveUser.Sube,
        CreatedAt: Moment(this.state.CreatedAt).format("YYYY.MM.DD"),
      },
    });
    var HeaderId = CreateCovidHeaderResult.data.CreateCovidFormHeader.id;

    this.state.PersonelList.map(async (personel) => {
      ates = this.state[personel.id];

      let CovidAtesResult = await CreateCovidAtes({
        variables: {
          HeaderId,
          PersonelId: personel.id,
          Ates: parseInt(ates),
          Saat: parseInt(this.state.Saat),
        },
      });
      if (CovidAtesResult.data.CreateCovidAtes.id) {
        window.toastr.success("Ateş Ekleme", "İşlem Başarılı");
        window.location.reload();
      }
    });
    console.log(this.state);
  };
  GetHijyenData = (data) => {
    this.setState({ HijyenData: data });
    console.log(this.state.HijyenData);
  };
  handleHijyen = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  GetData = (data) => {
    this.setState({ AtesData: data });
  };
  render() {
    return (
      <div>
        <Header session={this.props.session} />
        <SideBar session={this.props.session} />
        <Query
          query={GET_COVID_HEADER}
          variables={{
            CreatedAt: Moment().format("YYYY.MM.DD"),
            SubeId: this.props.session.ActiveUser.Sube,
          }}
        >
          {({ loading, data, error }) => {
            if (loading) return <div className="loading">Loading...</div>;
            if (error) return <div>Error</div>;

            return (
              <div class="content-wrapper">
                <section class="content-header">
                  <div class="container-fluid">
                    <div class="row mb-2">
                      <div class="col-sm-6">
                        <div class="row">
                          <h1>Covid Form</h1>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item">
                            <a href="/">Anasayfa</a>
                          </li>

                          <li class="breadcrumb-item active">Covid Form</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>
                <section class="content">
                  <div class="content">
                    <div class="page has-sidebar-left bg-light height-full">
                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            Ateş Kontrol
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            Rutin Hijyen
                          </a>
                        </li>
                      </ul>
                      <div class="tab-content" id="myTabContent">
                        <div
                          class="tab-pane fade show active"
                          id="home"
                          role="tabpanel"
                          aria-labelledby="home-tab"
                        >
                          <div class="card">
                            <div class="card-body b-b">
                              <div className="form-group">
                                <label>Tarih : </label>
                                <input
                                  type="date"
                                  className="form-control"
                                  name="CreatedAt"
                                  onChange={this.onChange}
                                />
                              </div>
                              <ApolloConsumer>
                                {(client) => (
                                  <div className="form-group">
                                    <button
                                      type="date"
                                      className="btn btn-primary"
                                      name="CreatedAt"
                                      onClick={async () => {
                                        const { data } = await client.query({
                                          query: GET_COVID_HEADER,
                                          variables: {
                                            SubeId: this.props.session
                                              .ActiveUser.Sube,
                                            CreatedAt: Moment(
                                              this.state.CreatedAt
                                            ).format("YYYY.MM.DD"),
                                          },
                                        });
                                        this.GetData(data.CovidHeader);
                                      }}
                                    >
                                      Getir
                                    </button>
                                  </div>
                                )}
                              </ApolloConsumer>
                              {this.state.AtesData.map((Ates) => (
                                <table class="table">
                                  <thead>
                                    <tr>
                                      <th> </th>
                                      <th></th>

                                      <th></th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {Ates.CovidAtesList.length > 0 ? (
                                      Ates.CovidAtesList.map((AtesPersonel) => {
                                        return (
                                          <tr>
                                            <th scope="row">
                                              {
                                                AtesPersonel.PersonelList[0]
                                                  .Name
                                              }
                                            </th>
                                            <td>
                                              <div class="form-group form-control-sm">
                                                <span>{AtesPersonel.Ates}</span>
                                              </div>
                                            </td>
                                          </tr>
                                        );
                                      })
                                    ) : (
                                      <div></div>
                                    )}
                                  </tbody>
                                </table>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="profile"
                          role="tabpanel"
                          aria-labelledby="profile-tab"
                        >
                          <div class="content">
                            <div className="form-group">
                              <label>Tarih : </label>
                              <input
                                type="date"
                                className="form-control"
                                name="CreatedAt"
                                onChange={this.onChange}
                              />
                            </div>
                            <ApolloConsumer>
                              {(client) => (
                                <div className="form-group">
                                  <button
                                    type="date"
                                    className="btn btn-primary"
                                    name="CreatedAt"
                                    onClick={async () => {
                                      const { data } = await client.query({
                                        query: GET_COVID_HEADER,
                                        variables: {
                                          SubeId: this.props.session.ActiveUser
                                            .Sube,
                                          CreatedAt: Moment(
                                            this.state.CreatedAt
                                          ).format("YYYY.MM.DD"),
                                        },
                                      });
                                      this.GetHijyenData(data.CovidHeader);
                                    }}
                                  >
                                    Getir
                                  </button>
                                </div>
                              )}
                            </ApolloConsumer>
                            <table class="table">
                              <thead>
                                <tr>
                                  <th></th>
                                  <th>10:00 </th>
                                  <th>15:00</th>
                                  <th>18:00</th>
                                  <th>21:00</th>

                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.HijyenData.map((HijyenData) => (
                                  <Fragment>
                                    {HijyenData.CovidHijyenList.map(
                                      (Hijyen) => (
                                        <tr>
                                          <th scope="row">{Hijyen.IslemAdi}</th>
                                          {Hijyen.Saat === 10 ? (
                                            <td>
                                              <span>
                                                {" "}
                                                {Hijyen.IslemDegeri === true
                                                  ? "Yapıldı"
                                                  : "Yapılmadı"}
                                              </span>
                                            </td>
                                          ) : (
                                            <td></td>
                                          )}

                                          {Hijyen.Saat === 15 ? (
                                            <td>
                                              <span>
                                                {" "}
                                                {Hijyen.IslemDegeri === true
                                                  ? "Yapıldı"
                                                  : "Yapılmadı"}
                                              </span>
                                            </td>
                                          ) : (
                                            <td></td>
                                          )}
                                          {Hijyen.Saat === 18 ? (
                                            <td>
                                              <span>
                                                {" "}
                                                {Hijyen.IslemDegeri === true
                                                  ? "Yapıldı"
                                                  : "Yapılmadı"}
                                              </span>
                                            </td>
                                          ) : (
                                            <td></td>
                                          )}

                                          {Hijyen.Saat === 21 ? (
                                            <td>
                                              <span>
                                                {" "}
                                                {Hijyen.IslemDegeri === true
                                                  ? "Yapıldı"
                                                  : "Yapılmadı"}
                                              </span>
                                            </td>
                                          ) : (
                                            <td></td>
                                          )}
                                        </tr>
                                      )
                                    )}
                                  </Fragment>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
