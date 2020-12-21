import React, { Component } from "react";
import { SIGNIN_USER } from "../../../queries/index";
import { Mutation } from "react-apollo";
import Error from "../Error";
import { withRouter } from "react-router-dom";
const initialState = { Email: "", Password: "" };

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  resetState = () => {
    this.setState({ ...initialState });
  };

  formValidate = () => {
    const { Email, Password } = this.state;
    const isValid = !Email || !Password;
    return isValid;
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e, signInUser) => {
    signInUser().then(async ({ data }) => {
      this.resetState();
      localStorage.setItem("TOKEN", data.SignIn.token);
      await this.props.refetch();
      this.props.history.push("/");
    });
  };
  render() {
    const { Email, Password } = this.state;
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <Mutation mutation={SIGNIN_USER} variables={{ Email, Password }}>
            {(signInUser, { loading, error }) => (
              <form
                className="login-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  this.onSubmit(e, signInUser);
                }}
              >
                <div class="card">
                  <div class="card-body login-card-body">
                    <p class="login-box-msg">
                      <img
                        src="https://static.restajet.com/company/3268/web/09346885-03ed-4b0f-ac7e-9f5f6b86b970.png?h=70"
                        width="200"
                        height="120"
                      />
                    </p>

                    <form action="../../index3.html" method="post">
                      <div class="input-group mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="E-Posta"
                          name="Email"
                          onChange={this.onChange}
                        />
                        <div class="input-group-append">
                          <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                          </div>
                        </div>
                      </div>
                      <div class="input-group mb-3">
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Password"
                          name="Password"
                          onChange={this.onChange}
                        />
                        <div class="input-group-append">
                          <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-8">
                          <div class="icheck-primary">
                            <input type="checkbox" id="remember" />
                            <label for="remember">Beni Hatırla</label>
                          </div>
                        </div>

                        <div class="col-4">
                          <button
                            type="submit"
                            class="btn btn-primary btn-block"
                            disabled={loading || this.formValidate()}
                          >
                            Giriş Yap
                          </button>
                          {loading && <div>Loading..</div>}
                          {error && <Error error={error} />}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            )}
          </Mutation>
        </div>
      </div>
    );
  }
}
export default withRouter(Login);
