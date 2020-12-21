import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { CREATE_PERSONEL } from "../../../queries/index";
export default class NewPersonel extends Component {
  constructor(props) {
    super(props);
    this.CategoryId = "";
  }
  state = {
    Name: "",
    SubeId: "",
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
  CategoryChange = (e) => {
    this.CategoryId = e.target.value;
  };
  onSubmit = (e, CreatePersonel) => {
    CreatePersonel();
  };

  formValidate = () => {
    const { Name } = this.state;
    return !Name;
  };
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
                    <h1>Yeni Personel</h1>
                  </div>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">
                      <a href="/">Anasayfa</a>
                    </li>
                    <li class="breadcrumb-item">
                      <a href="/Personel">Personel Listesi</a>
                    </li>
                    <li class="breadcrumb-item active">Yeni Personel</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <Mutation
              mutation={CREATE_PERSONEL}
              variables={{
                Name: this.state.Name,
                SubeId: this.state.SubeId,
              }}
              onCompleted={(data) => {
                if (data) window.location.href = "/Personel";
              }}
            >
              {(CreatePersonel, { loading, error }) => (
                <form>
                  <div className="form-group">
                    <label>Şube Adı : </label>
                    <select
                      className="form-control"
                      style={{ width: "100%" }}
                      name="SubeId"
                      onChange={this.onChange}
                    >
                      <option>..Şube Seçiniz..</option>
                      <option value={"arcadium"}>Arcadium</option>
                      <option value={"gordion"}>Gordion</option>
                      <option value={"armada"}>Armada</option>
                      <option value={"bahcelievler"}>Bahçelievler</option>
                      <option value={"bilkent"}>Bilkent</option>
                      <option value={"ankamall"}>Ankamall</option>
                      <option value={"atakule"}>Atakule</option>
                      <option value={"cepa"}>Cepa</option>
                      <option value={"kayseri"}>Kayseri</option>
                      <option value={"adana"}>Adana</option>
                      <option value={"mersin"}>Mersin</option>
                      <option value={"kasmir"}>Kaşmir</option>
                      <option value={"umitkoy"}>Ümitköy</option>
                      <option value={"batikent"}>Batıkent</option>
                      <option value={"eskisehir"}>Eskişehir</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label> Adı</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder=" Adı"
                      name="Name"
                      onChange={this.onChange}
                    />
                  </div>

                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      type="button"
                      disabled={!this.formValidate}
                      onClick={(e) => {
                        e.preventDefault();
                        this.onSubmit(e, CreatePersonel);
                      }}
                      data-dismiss="modal"
                    >
                      Kaydet
                    </button>
                  </div>
                </form>
              )}
            </Mutation>
          </section>
        </div>
      </div>
    );
  }
}
