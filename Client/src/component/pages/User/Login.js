import React, { Component } from "react";
import { SIGNIN_USER } from "../../../queries/index";
import { Mutation } from "react-apollo";
import Error from "../Error";
import { withRouter } from "react-router-dom";
const initialState = { email: "", password: "" };

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }
  resetState = () => {
    this.setState({ ...initialState });
  };

  formValidate = () => {
    const { email, password } = this.state;
    const isValid = !email || !password;
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
    const { email, password } = this.state;
    return (
      <div className="content-wrapper">
        <Mutation mutation={SIGNIN_USER} variables={{ email, password }}>
          {(signInUser, { loading, error }) => (
            <form
              className="login-form"
              onSubmit={(e) => {
                e.preventDefault();
                this.onSubmit(e, signInUser);
              }}
            >
              <div className="page-content">
                <div className="content-wrapper">
                  <div className="content d-flex justify-content-center align-items-center">
                    <div className="card mb-0">
                      <div className="card-body">
                        <div className="text-center mb-3">
                          <img
                            className="logo"
                            src="/assets/logo.png"
                            width="70%"
                          />

                          <h5 className="mb-0">Lütfen Giriş Yapınız</h5>
                          <span className="d-block text-muted">
                            Hesap Bilgileriniz
                          </span>
                        </div>

                        <div className="form-group form-group-feedback form-group-feedback-left">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="E-Posta"
                            name="email"
                            onChange={this.onChange}
                          />
                          <div className="form-control-feedback">
                            <i className="icon-user text-muted"></i>
                          </div>
                        </div>

                        <div className="form-group form-group-feedback form-group-feedback-left">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Şifre"
                            name="password"
                            onChange={this.onChange}
                          />
                          <div className="form-control-feedback">
                            <i className="icon-lock2 text-muted"></i>
                          </div>
                        </div>

                        <div className="form-group d-flex align-items-center">
                          <a
                            href="login_password_recover.html"
                            className="ml-auto"
                          >
                            Forgot password?
                          </a>
                        </div>

                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            disabled={loading || this.formValidate()}
                          >
                            Giriş Yap
                            <i className="icon-circle-right2 ml-2"></i>
                          </button>
                          {loading && <div>Loading..</div>}
                          {error && <Error error={error} />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}
export default withRouter(Login);
