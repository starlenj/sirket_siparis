import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { GET_USERS, DELETE_USER } from "../../../queries/index";
export default class DeleteUser extends Component {
  state = { id: "" };
  constructor(props) {
    super(props);
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  SetUser(user) {
    this.setState({ id: user.id });
  }

  onSubmit = (e, DeleteUser) => {
    DeleteUser();
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
            mutation={DELETE_USER}
            variables={{ ...this.state }}
            refetchQueries={[{ query: GET_USERS }]}
          >
            {(DeleteUser, { loading, error }) => (
              <div>
                <p>Seçili Kullanıcı Silinecek Onaylıyor Musunuz</p>
                <div className="row">
                  <button
                    className="btn btn-danger"
                    type="submit"
                    data-dismiss="modal"
                    disabled={!this.formValidate}
                    onClick={(e) => {
                      e.preventDefault();
                      this.onSubmit(e, DeleteUser);
                    }}
                  >
                    Evet
                  </button>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    data-dismiss="modal"
                    style={{ float: "right", marginLeft: 30 }}
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
