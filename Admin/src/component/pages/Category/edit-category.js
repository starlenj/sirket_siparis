import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import { GET_CATEGORYS, UPDATE_CATEGORY } from "../../../queries/index";
export default class NewCategory extends Component {
  state = { Name: [], id: "", CategoryType: "", Order: 0 };
  constructor(props) {
    super(props);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  SetCategory(category) {
    console.log(category);
    this.setState({ Name: category.Name, id: category.id, CategoryType: category.CategoryType, Order: category.Order });
  }

  onSubmit = (e, UpdateCategory) => {
    if (!this.formValidate()) {
      this.setState({ Name: "" });
      UpdateCategory();
    }
  };

  formValidate = () => {
    const { Name } = this.state;
    return !Name;
  };
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row col-md-12">
            <Mutation
              mutation={UPDATE_CATEGORY}
              variables={{
                Name: this.state.Name,
                Order: parseInt(this.state.Order),
                CategoryType: this.state.CategoryType,
                id: this.state.id
              }}
              refetchQueries={[{ query: GET_CATEGORYS }]}
            >
              {(UpdateCategory, { loading, error }) => (
                <form>

                  <div className="form-group">
                    <select className="form-control" onChange={this.onChange} name="CategoryType">
                      <option selected={this.state.CategoryType === "Paket"}>Paket</option>
                      <option selected={this.state.CategoryType === "Gel-Al"}>Gel-Al</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Kategori Sıra"
                      name="Order"
                      value={this.state.Order}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Kategori Adı"
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

                        this.onSubmit(e, UpdateCategory);
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
      </Fragment>
    );
  }
}
