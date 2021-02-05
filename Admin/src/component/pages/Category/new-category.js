import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { CREATE_CATEGORY, GET_CATEGORYS } from "../../../queries/index";
export default class NewCategory extends Component {
  state = { Name: "", CategoryType: "", Order: 0 };
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
          <Mutation
            mutation={CREATE_CATEGORY}
            variables={{ Name: this.state.Name, Order: parseInt(this.state.Order), CategoryType: this.state.CategoryType }}
            refetchQueries={[{ query: GET_CATEGORYS }]}
          >
            {(CreateCategory, { loading, error }) => (
              <form>  <div className="form-group">
                <select className="form-control" onChange={this.onChange} name="CategoryType">
                  <label>Category Türü</label>
                  <option>Paket</option>
                  <option>Gel-Al</option>
                </select>
              </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Kategori Adı"
                    name="Name"
                    onChange={this.onChange}
                  />
                </div>  <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Kategori Sıralama"
                    name="Order"
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
                      this.onSubmit(e, CreateCategory);
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
