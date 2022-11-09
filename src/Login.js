import React, { PureComponent } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Login extends PureComponent {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  login = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
    this.props.login(this.state);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <>
        <div className="fixed-header">
          <div className="container">Header</div>
        </div>
        
        <div class="wrapper">
          <div class="sidebar">
            <li>
              <a href="#" class="active">
                <span class="icon"><i class="fas fa-home"></i></span>
                <span class="item">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="icon"><i class="fas fa-desktop"></i></span>
                <span class="item">Login</span>
              </a>
            </li>
          </div>
        </div>
        
        <div>
          <form className="loginForm">
            {this.props.loggedIn ? "Logged in" : ""}
            {this.props.loginProcessing && !this.props.loggedIn ? "Logging.." : ""}
            <h1 className="heading"> Login </h1>
            <div className="field">
              <div className="customInput">
                <FontAwesomeIcon icon="envelope" className="inputicon" />
                <input
                  className="inputfield"
                  type="email"
                  placeholder="Email.."
                  autoComplete="username"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="customInput">
                <FontAwesomeIcon icon="key" className="inputicon" />
                <input
                  className="inputfield"
                  type="password"
                  placeholder="Password.."
                  autoComplete="current-password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
            </div>
            <div className="field submitfield">
              <input
                className="submit"
                type="submit"
                value="SIGN IN"
                onClick={this.login}
              />
            </div>
            <div className="field signupfield">
              <span className="linkfield">
                <Link to="/register">New User? Sign up here</Link>
              </span>
            </div>
          </form>
        </div>
        <div className="fixed-footer">
          <div className="container"> footer </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn,
    loginProcessing: state.loginProcessing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(startLogin(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
