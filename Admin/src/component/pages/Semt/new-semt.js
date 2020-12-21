import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { CREATE_SEMT, GET_SEMTS } from "../../../queries/index";
export default class NewSemt extends Component {
  state = { Name: "" };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e, createCategory) => {
    if (!this.formValidate()) {
      this.setState({ Name: "" });
      createCategory();
    }
  };

  formValidate = () => {
    const { Name } = this.state;
    return !Name;
  };
  render() {
    return (
      <div className="container">
        <div className="row col-md-12">
          <Mutation mutation={CREATE_SEMT} variables={{ ...this.state }}>
            {(CreateSemt, { loading, error }) => (
              <form>
                <div className="form-group">
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
                      this.onSubmit(e, CreateSemt);
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
    );
  }
}
