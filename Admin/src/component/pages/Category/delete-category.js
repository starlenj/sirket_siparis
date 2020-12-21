import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { GET_CATEGORYS, DELETE_CATEGORY } from "../../../queries/index";
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
            mutation={DELETE_CATEGORY}
            variables={{ ...this.state }}
            refetchQueries={[{ query: GET_CATEGORYS }]}
          >
            {(DeleteCategory, { loading, error }) => (
              <div>
                <p>Seçili Kategori Silinecek Onaylıyor Musunuz</p>
                <div className="row">
                  <button
                    className="btn btn-danger"
                    type="submit"
                    data-dismiss="modal"
                    disabled={!this.formValidate}
                    onClick={(e) => {
                      e.preventDefault();
                      this.onSubmit(e, DeleteCategory);
                    }}
                  >
                    Evet
                  </button>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    data-dismiss="modal"
                    style={{ float: "right", marginLeft: 30 }}
                    disabled={!this.formValidate}
                  >
                    Hayır
                  </button>
                </div>
              </div>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}
