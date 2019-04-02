import React, { Component } from "react";
import "./NavigationBar.css";
import iconLogin from "../img/iconLogin.png";
import FacebookNav from "../img/facebookNav.png";
import { Link } from "react-router-dom";
import line from "../img/line.png";
import eng from "../img/eng.png";
import japan from "../img/japan.png";
import thai from "../img/thai.jpg";

class NavigationBar extends Component {
  constructor() {
    super();

    this.state = {
      popupSignin: false
    };

    this.popupSignin = this.popupSignin.bind(this);
  }

  openNewTab = () => {
    window.open("https://www.facebook.com/pasutora/", "_blank");
  };

  popupSignin(event) {
    const { popupSignin } = this.state;
    event.preventDefault();

    this.setState({
      popupSignin: !popupSignin
    });
  }
  render() {
    return (
      <div id="navigation_bar">
        <div className="menu_left">
          <Link to="/">
            <div className="txtHome">Home</div>
          </Link>
        </div>
        <div className="menu_right">
          <img
            src={FacebookNav}
            className="iconFacebookNav"
            alt="facebook"
            onClick={this.openNewTab}
          />

          <img
            id="facebookNav"
            style={{ cursor: "pointer" }}
            className="iconFacebookNav"
            src={line}
            alt="line"
            style={{ marginRight: "25px" }}
          />

          <div className="dropdown">
            <button className="dropbtn">
              <img className="flag" src={eng} alt="eng" />
              <div className="Language">English</div>
            </button>
            <div className="dropdown-content">
              <a href="#">
                <img className="flag" src={eng} alt="eng" />
                <div className="Language">English</div>
              </a>
              <a href="#">
                <img className="flag" src={japan} alt="japan" />
                <div className="Language">Japan</div>
              </a>
              <a href="#">
                <img className="flag" src={thai} alt="thai" />
                <div className="Language">Thai</div>
              </a>
            </div>
          </div>

          <div onClick={this.popupSignin} className="link">
            <div>
              {" "}
              <div className="userIcon">
                <img src={iconLogin} alt="person" />
              </div>
              <div
                className="txtLogin"
                style={{ display: "inline-block", marginLeft: "10px" }}
              >
                Login
              </div>
            </div>
          </div>

          <Link to="/register" onClick={this.popupRegister} className="txtReg">
            Register
          </Link>
          {this.state.popupSignin ? (
            <div className="login">
              <div style={{ padding: "10px" }}>
                <div style={{ fontWeight: "bold", textAlign: "center" }}>
                  Login to your account
                </div>
                <div className="control" style={{ marginTop: "10px" }}>
                  Email or mobile number
                  <input
                    className="input"
                    type="text"
                    placeholder="Email or Phone"
                  />
                  Password
                  <div style={{ float: "right", color: "gray" }}>
                    Forget password ?
                  </div>
                  <input className="input" type="text" placeholder="Password" />
                </div>
                <div style={{ marginTop: "10px", textAlign: "left" }}>
                  <a
                    style={{ display: "inline-block" }}
                    className="button is-dark"
                  >
                    Login
                  </a>
                  <div style={{ display: "inline-block", marginLeft: "20px" }}>
                    No account yet ?<br />
                    register
                  </div>
                </div>
              </div>

              <div className="loginWithAnother">
                <div style={{ textAlign: "center" }}>
                  <div style={{ color: "white" }}> or login with</div>
                  <div
                    style={{
                      marginTop: "5px",
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    <div
                      style={{
                        width: "50%"
                      }}
                    >
                      <a className="button is-link">Facebook</a>
                    </div>
                    <div
                      style={{
                        width: "50%"
                      }}
                    >
                      <a class="button is-danger loginAnotherButton">Gmail</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default NavigationBar;
