import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import { UPDATE_SUBE } from "../../../queries/index";
import SideBar from "../../SideBar/index";
import Header from "../../Header/index";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
class EditSube extends Component {
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
        const { Sube } = this.props.Sube;
        this.setState({
            Name: Sube.Name,
            id: Sube.id,
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
                                            <a href="/Sube">Şube Listesi</a>
                                        </li>
                                        <li class="breadcrumb-item active">Şube Güncelleme</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="content">
                        <Mutation
                            mutation={UPDATE_SUBE}
                            variables={{
                                Name: this.state.Name,
                                id: this.state.id,
                            }}
                            onCompleted={(data) => {
                                if (data) window.location.href = "/Sube";
                            }}
                        >
                            {(UpdateSube, { loading, error }) => (
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
                                        <button
                                            className="btn btn-primary"
                                            type="button"
                                            disabled={!this.formValidate}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                this.onSubmit(e, UpdateSube);
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
const mapStateToProps = ({ Sube }) => {
    return {
        Sube,
    };
};
export default connect(mapStateToProps)(withRouter(EditSube));
