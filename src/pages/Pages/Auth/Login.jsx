import  React, { Component, useState }from "react";
import { useForm, LoginData } from "../../../service/login";
import {useHistory} from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  const { form, inputChangeHanlder } = useForm();
  const [loader, setLoader] = useState(false);

  const submitForm = async () => {
    setLoader(true);
    LoginData(form, setLoader, nextLogin);
   
  };

  const nextLogin = () => {
    console.log('jalan')
    history.push('/')
    history.go()
  }

  const goToRegister = () => {
    history.push('/auth/register')
  }

    return (
      <div id="app">
        <section className="section">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div className="login-brand">
                  <img
                    src="../assets/img/stisla-fill.svg"
                    alt="logo"
                    width="100"
                    className="shadow-light rounded-circle"
                  />
                </div>

                <div className="card card-primary">
                  <div className="card-header">
                    <h4>Login</h4>
                  </div>

                  <div className="card-body">
                    <form
                      method="POST"
                      action="#"
                      noValidate
                      className="needs-validation"
                    >
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          className="form-control"
                          name="email"
                          tabIndex="1"
                          required
                          autoFocus
                          onChange={(e) => inputChangeHanlder(e)}
                        />
                        <span className="text-danger"></span>
                        <div className="invalid-feedback">
                          Please fill in your email
                        </div>
                      </div>

                      <div className="form-group">
                        <div className="d-block">
                          <label htmlFor="password" className="control-label">
                            Password
                          </label>
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          tabIndex="2"
                          required
                          onChange={(e) => inputChangeHanlder(e)}
                        />
                        <span className="text-danger"></span>
                        <div className="invalid-feedback">
                          please fill in your password
                        </div>
                      </div>

                      <div className="form-group">

                      </div>

                      <div className="form-group">
                      {!loader ? (
                          <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block"
                            onClick={() => submitForm()}
                          >
                            Login
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block"
                            disabled={true}
                          >
                            <span className="spinner-border spinner-border-sm mr-2"></span>
                            Processing
                          </button>
                        )}
                      </div>
                    </form>
                    {/* <div className="text-center mt-4 mb-3">
                      <div className="text-job text-muted">
                        Login With Social
                      </div>
                    </div> */}
                    {/* <div className="row sm-gutters">
                      <div className="col-6">
                        <a className="btn btn-block btn-social btn-facebook">
                          <span className="fab fa-facebook"></span> Facebook
                        </a>
                      </div>
                      <div className="col-6">
                        <a className="btn btn-block btn-social btn-twitter">
                          <span className="fab fa-twitter"></span> Twitter
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="mt-5 text-muted text-center">
                  Don't have an account?{" "}
                  <a onClick={() => goToRegister()}>Create One</a>
                </div>
                <div className="simple-footer">
                  Copyright &copy; Stisla 2018
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
// }

export default Login;