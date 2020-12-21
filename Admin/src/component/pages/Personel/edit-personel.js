import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import { UPDATE_PERSONEL } from "../../../queries/index";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
class EditPersonel extends Component {
  constructor(props) {
    super(props);
    this.CategoryId = "";
  }

  state = {
    Name: "",
    SubeId: "",
    id: "",
  };

  componentDidMount() {
    const { Personel } = this.props.Personel;
    console.log(Personel);
    this.setState({
      Name: Personel.Name,
      SubeId: Personel.SubeId,
      id: Personel.id,
    });
  }
  onChange = (e) => {
    if (e.target.name === "Options") {
      this.state.NewSelectOption = [];

      for (var i = 0; i < e.target.options.length; i++) {
        if (e.target.options[i].selected) {
          this.state.NewSelectOption.push(e.target.options[i].value);
        }
      }
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  onSubmit = (e, UpdatePersonel) => {
    UpdatePersonel();
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
                    <h1>Personel Güncelle</h1>
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
                    <li class="breadcrumb-item active">Personel Güncelleme</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section class="content">
            <Mutation
              mutation={UPDATE_PERSONEL}
              variables={{
                Name: this.state.Name,
                SubeId: this.state.SubeId,
                id: this.state.id,
              }}
              onCompleted={(data) => {
                if (data) window.location.href = "/Personel";
              }}
            >
              {(UpdatePersonel, { loading, error }) => (
                <form>
                  <div className="form-group">
                    <label>Adı</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Adı"
                      name="Name"
                      value={this.state.Name}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Şube Adı : </label>
                    <select
                      className="form-control"
                      style={{ width: "100%" }}
                      name="SubeId"
                      onChange={this.onChange}
                    >
                      <option>..Şube Seçiniz..</option>
                      <option
                        value={"arcadium"}
                        selected={this.state.SubeId === "arcadium"}
                      >
                        Arcadium
                      </option>
                      <option
                        value={"gordion"}
                        selected={this.state.SubeId === "gordion"}
                      >
                        Gordion
                      </option>
                      <option
                        value={"armada"}
                        selected={this.state.SubeId === "armada"}
                      >
                        Armada
                      </option>
                      <option
                        value={"bahcelievler"}
                        selected={this.state.SubeId === "bahcelievler"}
                      >
                        Bahçelievler
                      </option>
                      <option
                        value={"bilkent"}
                        selected={this.state.SubeId === "bilkent"}
                      >
                        Bilkent
                      </option>
                      <option
                        value={"ankamall"}
                        selected={this.state.SubeId === "ankamall"}
                      >
                        Ankamall
                      </option>
                      <option
                        value={"atakule"}
                        selected={this.state.SubeId === "atakule"}
                      >
                        Atakule
                      </option>
                      <option
                        value={"cepa"}
                        selected={this.state.SubeId === "cepa"}
                      >
                        Cepa
                      </option>
                      <option
                        value={"kayseri"}
                        selected={this.state.SubeId === "kayseri"}
                      >
                        Kayseri
                      </option>
                      <option
                        value={"adana"}
                        selected={this.state.SubeId === "adana"}
                      >
                        Adana
                      </option>
                      <option
                        value={"mersin"}
                        selected={this.state.SubeId === "mersin"}
                      >
                        Mersin
                      </option>
                      <option
                        value={"kasmir"}
                        selected={this.state.SubeId === "kasmir"}
                      >
                        Kaşmir
                      </option>
                      <option
                        value={"umitkoy"}
                        selected={this.state.SubeId === "umitkoy"}
                      >
                        Ümitköy
                      </option>
                      <option
                        value={"batikent"}
                        selected={this.state.SubeId === "batikent"}
                      >
                        Batıkent
                      </option>
                      <option
                        value={"eskisehir"}
                        selected={this.state.SubeId === "eskisehir"}
                      >
                        Eskişehir
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary"
                      type="button"
                      disabled={!this.formValidate}
                      onClick={(e) => {
                        e.preventDefault();
                        this.onSubmit(e, UpdatePersonel);
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
const mapStateToProps = ({ Personel }) => {
  return {
    Personel,
  };
};
export default connect(mapStateToProps)(withRouter(EditPersonel));
