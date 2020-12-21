import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { GET_OPTIONS, DELETE_OPTIONS } from "../../../queries/index";
export default class DeleteOption extends Component {
  state = { id: "" };
  constructor(props) {
    super(props);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  SetOption(options) {
    this.setState({ id: options.id });
  }

  onSubmit = (e, DeleteOption) => {
    DeleteOption();
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
            mutation={DELETE_OPTIONS}
            variables={{ ...this.state }}
            refetchQueries={[{ query: GET_OPTIONS }]}
          >
            {(DeleteOption, { loading, error }) => (
              <div>
                <p>Seçili Seçenek Silinecek Onaylıyor Musunuz</p>
                <div className="row">
                  <button
                    className="btn btn-danger"
                    type="submit"
                    data-dismiss="modal"
                    disabled={!this.formValidate}
                    onClick={(e) => {
                      e.preventDefault();
                      this.onSubmit(e, DeleteOption);
                    }}
                  >
                    Evet
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
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
