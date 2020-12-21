import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { GET_CATEGORYS, UPDATE_CATEGORY } from "../../../queries/index";
export default class NewCategory extends Component {
  state = { Name: [], id: "" };
  constructor(props) {
    super(props);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  SetCategory(category) {
    this.setState({ Name: category.Name, id: category.id });
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
      <div className="container">
        <div className="row col-md-12">
          <Mutation
            mutation={UPDATE_CATEGORY}
            variables={{ ...this.state }}
            refetchQueries={[{ query: GET_CATEGORYS }]}
          >
            {(UpdateCategory, { loading, error }) => (
              <form>
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
                      e.preventDefault();
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
    );
  }
}
