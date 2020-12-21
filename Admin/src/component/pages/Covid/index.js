import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import * as Moment from "moment";
import {
  GET_SUBE_PERSONELS,
  GET_COVID_HEADER,
  CREATE_COVID_HEADER,
  CREATE_COVID_ATES,
  CREATE_COVID_HIJYEN,
} from "../../../queries/index";
export default class CovidForm extends Component {
  constructor(props) {
    super(props);
    this.CategoryId = "";
    console.log(this.props);
  }
  state = { Saat: "", SubeId: "", PersonelList: [], HijyenSaat: "" };
  Ates = (e, Personel) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onChange = (e) => {
    if (e.target.name === "Saat") {
      this.state.Options = [];

      for (var i = 0; i < e.target.options.length; i++) {
        if (e.target.options[i].selected) {
          this.setState({ Saat: e.target.options[i].value });
        }
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
    console.log(this.state);
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
        CreatedAt: Moment().format("YYYY.MM.DD"),
      },
    });
    var HeaderId = CreateCovidHeaderResult.data.CreateCovidFormHeader.id;

    this.state.PersonelList.map(async (personel) => {
      ates = this.state[personel.id];
      let CovidAtesResult = await CreateCovidAtes({
        variables: {
          HeaderId,
          PersonelId: personel.id,
          Ates: parseFloat(ates),
          Saat: parseInt(this.state.Saat),
        },
      });
      if (CovidAtesResult.data.CreateCovidAtes.id) {
        window.toastr.success("Ateş Ekleme", "İşlem Başarılı");
        window.location.reload();
      }
    });
  };
  handleHijyen = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  SubmitHijyen = async (CreateCovidHeader, CreateCovidHijyen) => {
    if (this.state.HijyenSaat === "") {
      alert("Saat Seçmek Zorunludur");
      return;
    }

    let CreateCovidHeaderResult = await CreateCovidHeader({
      variables: {
        SubeId: this.props.session.ActiveUser.Sube,
        CreatedAt: Moment().format("YYYY.MM.DD"),
      },
    });
    var HeaderId = CreateCovidHeaderResult.data.CreateCovidFormHeader.id;
    if (this.state.HijyenSaat === "10") {
      var saat = this.state.HijyenSaat;
      var YerTemizligi = this.state.YerTemizligi === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Yer Temizliği",
          IslemDegeri: YerTemizligi,
          Saat: parseInt(saat),
        },
      });

      var TezgahTemizligi = this.state.TezgahTemizligi === "on" ? true : false;
      var saat = this.state.HijyenSaat;
      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Tezgah Temizliği",
          IslemDegeri: TezgahTemizligi,
          Saat: parseInt(saat),
        },
      });
      var EkipmanTemizligi =
        this.state.EkipmanTemizligi === "on" ? true : false;
      var saat = this.state.HijyenSaat;
      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Ekipman Temizliği",
          IslemDegeri: EkipmanTemizligi,
          Saat: parseInt(saat),
        },
      });
      var KasaBolgeTemizligi =
        this.state.KasaBolgeTemizligi === "on" ? true : false;
      var saat = this.state.HijyenSaat;
      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Kasa Bölge Temizliği",
          IslemDegeri: KasaBolgeTemizligi,
          Saat: parseInt(saat),
        },
      });
      var BahceAlani = this.state.BahceAlani === "on" ? true : false;
      var saat = this.state.HijyenSaat;
      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Bahçe Alanı",
          IslemDegeri: BahceAlani,
          Saat: parseInt(saat),
        },
      });
      var SurekliTemas = this.state.SurekliTemas === "on" ? true : false;
      var saat = this.state.HijyenSaat;
      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Sürekli Temas Edilen Yüzeylerin Temizliği",
          IslemDegeri: SurekliTemas,
          Saat: parseInt(saat),
        },
      });
      var AracIsleri = this.state.AracIsleri === "on" ? true : false;
      var saat = this.state.HijyenSaat;
      let result = await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Araç İçleri",
          IslemDegeri: AracIsleri,
          Saat: parseInt(saat),
        },
      });
      console.log(result);
      if (result) {
        window.toastr.success("Kayıt Ekleme", "İşlem Başarılı");
        window.location.reload();
      }
    }

    if (this.state.HijyenSaat === "15") {
      var YerTemizligi = this.state.YerTemizligi === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Yer Temizliği",
          IslemDegeri: YerTemizligi,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });

      var TezgahTemizligi = this.state.TezgahTemizligi === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Tezgah Temizliği",
          IslemDegeri: TezgahTemizligi,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });
      var EkipmanTemizligi =
        this.state.EkipmanTemizligi === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Ekipman Temizliği",
          IslemDegeri: EkipmanTemizligi,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });
      var KasaBolgeTemizligi =
        this.state.KasaBolgeTemizligi === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Kasa Bölge Temizliği",
          IslemDegeri: KasaBolgeTemizligi,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });
      var BahceAlani = this.state.BahceAlani === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Bahçe Alanı",
          IslemDegeri: BahceAlani,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });
      var SurekliTemas = this.state.SurekliTemas === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Sürekli Temas Edilen Yüzeylerin Temizliği",
          IslemDegeri: SurekliTemas,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });
      var AracIsleri = this.state.AracIsleri === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Araç İçleri",
          IslemDegeri: AracIsleri,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });

      var DepoDuzen = this.state.DepoDuzen === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Depo Düzen ve Temizliği",
          IslemDegeri: DepoDuzen,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });

      var EkmekTepsileri = this.state.EkmekTepsileri === "on" ? true : false;

      let result = await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Ekmek Tepsileri Temizliği",
          IslemDegeri: EkmekTepsileri,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });
      console.log(result);
      if (result) {
        window.toastr.success("Kayıt Ekleme", "İşlem Başarılı");
        window.location.reload();
      }
    }
    if (this.state.HijyenSaat === "18") {
      var saat = this.state.HijyenSaat;
      var YerTemizligi = this.state.YerTemizligi === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Yer Temizliği",
          IslemDegeri: YerTemizligi,
          Saat: parseInt(saat),
        },
      });

      var TezgahTemizligi = this.state.TezgahTemizligi === "on" ? true : false;
      var saat = this.state.HijyenSaat;
      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Tezgah Temizliği",
          IslemDegeri: TezgahTemizligi,
          Saat: parseInt(saat),
        },
      });
      var EkipmanTemizligi =
        this.state.EkipmanTemizligi === "on" ? true : false;
      var saat = this.state.HijyenSaat;
      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Ekipman Temizliği",
          IslemDegeri: EkipmanTemizligi,
          Saat: parseInt(saat),
        },
      });

      var SurekliTemas = this.state.SurekliTemas === "on" ? true : false;
      var saat = this.state.HijyenSaat;
      let result = await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Sürekli Temas Edilen Yüzeylerin Temizliği",
          IslemDegeri: SurekliTemas,
          Saat: parseInt(saat),
        },
      });

      console.log(result);
      if (result) {
        window.toastr.success("Kayıt Ekleme", "İşlem Başarılı");
        window.location.reload();
      }
    }
    if (this.state.HijyenSaat === "21") {
      var YerTemizligi = this.state.YerTemizligi === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Yer Temizliği",
          IslemDegeri: YerTemizligi,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });

      var TezgahTemizligi = this.state.TezgahTemizligi === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Tezgah Temizliği",
          IslemDegeri: TezgahTemizligi,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });
      var EkipmanTemizligi =
        this.state.EkipmanTemizligi === "on" ? true : false;

      await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Ekipman Temizliği",
          IslemDegeri: EkipmanTemizligi,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });

      var SurekliTemas = this.state.SurekliTemas === "on" ? true : false;

      let result = await CreateCovidHijyen({
        variables: {
          HeaderId: HeaderId,
          IslemAdi: "Sürekli Temas Edilen Yüzeylerin Temizliği",
          IslemDegeri: SurekliTemas,
          Saat: parseInt(this.state.HijyenSaat),
        },
      });
      console.log(result);
      if (result) {
        window.toastr.success("Kayıt Ekleme", "İşlem Başarılı");
        window.location.reload();
      }
    }
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
                              <Query
                                query={GET_SUBE_PERSONELS}
                                variables={{
                                  SubeId: this.props.session.ActiveUser.Sube,
                                }}
                                onCompleted={(data) =>
                                  this.setState({
                                    PersonelList: data.SubePersonel,
                                  })
                                }
                              >
                                {({ loading, data, error }) => {
                                  if (loading)
                                    return (
                                      <div className="loading">Loading...</div>
                                    );
                                  if (error) return <div>Error</div>;

                                  return (
                                    <table class="table">
                                      <thead>
                                        <tr>
                                          <th>Saat : </th>
                                          <th>
                                            <select
                                              className="form-control"
                                              onChange={this.onChange}
                                              name="Saat"
                                            >
                                              <option value="">
                                                ..Saat Seçiniz..
                                              </option>
                                              <option value="11">11:00</option>
                                              <option value="12">12:00</option>
                                              <option value="14">14:00</option>
                                              <option value="16">16:00</option>
                                              <option value="18">18:00</option>
                                              <option value="20">20:00</option>
                                              <option value="21">21:00</option>
                                            </select>
                                          </th>

                                          <th></th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {data.SubePersonel.map((personel) => (
                                          <tr>
                                            <th scope="row">{personel.Name}</th>
                                            <td>
                                              <div class="form-group form-control-sm">
                                                <input
                                                  type="number"
                                                  class="form-control input-sm"
                                                  minlength="1"
                                                  name={personel.Name}
                                                  id={personel.id}
                                                  onChange={(e) =>
                                                    this.Ates(e, personel)
                                                  }
                                                />
                                              </div>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  );
                                }}
                              </Query>
                              <Mutation mutation={CREATE_COVID_HEADER}>
                                {(CreateCovidHeader, { loading, error }) => (
                                  <Mutation mutation={CREATE_COVID_ATES}>
                                    {(CreateCovidAtes, { loading, error }) => (
                                      <div class="form-group">
                                        <button
                                          class="btn btn-primary"
                                          onClick={() =>
                                            this.onSubmit(
                                              CreateCovidHeader,
                                              CreateCovidAtes
                                            )
                                          }
                                        >
                                          Kaydet
                                        </button>
                                      </div>
                                    )}
                                  </Mutation>
                                )}
                              </Mutation>
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
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Saat : </th>
                                  <th>
                                    <select
                                      className="form-control"
                                      onChange={this.onChange}
                                      name="HijyenSaat"
                                    >
                                      <option value="">..Saat Seçiniz..</option>
                                      <option value="10">10:00</option>
                                      <option value="15">15:00</option>
                                      <option value="18">18:00</option>
                                      <option value="21">21:00</option>
                                    </select>
                                  </th>

                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.state.HijyenSaat === "10" ? (
                                  <Fragment>
                                    <tr>
                                      <th scope="row">Yer Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="YerTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Tezgah Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="TezgahTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Ekipman Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="EkipmanTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Kasa Bölge Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            name="KasaBolgeTemizligi"
                                            minlength="1"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">
                                        Bahçe Alanında Dinlenme Amaçlı Sandalye
                                      </th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            name="BahceAlani"
                                            minlength="1"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">
                                        Sürekli Temas Edilen Yüzeyler
                                      </th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="SurekliTemas"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Araç İçleri</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="AracIsleri"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </Fragment>
                                ) : (
                                  <div></div>
                                )}

                                {this.state.HijyenSaat === "15" ? (
                                  <Fragment>
                                    <tr>
                                      <th scope="row">Yer Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="YerTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Tezgah Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="TezgahTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Ekipman Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="EkipmanTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Kasa Bölge Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            name="KasaBolgeTemizligi"
                                            minlength="1"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">
                                        Bahçe Alanında Dinlenme Amaçlı Sandalye
                                      </th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            name="BahceAlani"
                                            minlength="1"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">
                                        Ekmek Tepsileri Temizliği
                                      </th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            name="EkmekTepsileri"
                                            minlength="1"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">
                                        Depo Düzen ve Temizliği
                                      </th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            name="DepoDuzen"
                                            minlength="1"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">
                                        Sürekli Temas Edilen Yüzeyler
                                      </th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="SurekliTemas"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Araç İçleri</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="AracIsleri"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </Fragment>
                                ) : (
                                  <div></div>
                                )}

                                {this.state.HijyenSaat === "18" ? (
                                  <Fragment>
                                    <tr>
                                      <th scope="row">Yer Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="YerTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Tezgah Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="TezgahTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Ekipman Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="EkipmanTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>

                                    <tr>
                                      <th scope="row">
                                        Sürekli Temas Edilen Yüzeyler
                                      </th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="SurekliTemas"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </Fragment>
                                ) : (
                                  <div></div>
                                )}

                                {this.state.HijyenSaat === "21" ? (
                                  <Fragment>
                                    <tr>
                                      <th scope="row">Yer Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="YerTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Tezgah Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="TezgahTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Ekipman Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="EkipmanTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Kasa Bölge Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            name="KasaBolgeTemizligi"
                                            minlength="1"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">
                                        Bahçe Alanında Dinlenme Amaçlı Sandalye
                                      </th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            name="BahceAlani"
                                            minlength="1"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">
                                        Sürekli Temas Edilen Yüzeyler
                                      </th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="SurekliTemas"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Soyunma Odası Wc</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="SoyunmaOdasi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Izgara Temizliği</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="IzgaraTemizligi"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Araç İçleri</th>
                                      <td>
                                        <div class="form-group form-control-sm">
                                          <input
                                            type="checkbox"
                                            class="form-control input-sm"
                                            minlength="1"
                                            name="AracIsleri"
                                            onChange={this.handleHijyen}
                                          />
                                        </div>
                                      </td>
                                    </tr>
                                  </Fragment>
                                ) : (
                                  <div></div>
                                )}
                              </tbody>
                            </table>
                            <Mutation mutation={CREATE_COVID_HEADER}>
                              {(CreateCovidHeader, { loading, error }) => (
                                <Mutation mutation={CREATE_COVID_HIJYEN}>
                                  {(CreateCovidHijyen, { loading, error }) => (
                                    <div class="form-group">
                                      <button
                                        class="btn btn-primary"
                                        onClick={() =>
                                          this.SubmitHijyen(
                                            CreateCovidHeader,
                                            CreateCovidHijyen
                                          )
                                        }
                                      >
                                        Kaydet
                                      </button>
                                    </div>
                                  )}
                                </Mutation>
                              )}
                            </Mutation>
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
