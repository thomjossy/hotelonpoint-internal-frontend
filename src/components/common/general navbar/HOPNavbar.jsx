import "./nav.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, logoutUser } from "../../../redux/actions/userActions";
import { Link } from "react-router-dom";
import logo from "../../images/HOP.svg";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showNav: false
      // authenticated: false,
      // userData: {}
    };
  }
  componentDidMount() {
    // this.props.getUser();
  }

  signout = () => {
    this.props.logoutUser();
  };
  handleNav = () => {
    this.setState({ showNav: !this.state.showNav });
  };

  render() {
    const {
      user: { authenticated, userData }
    } = this.props;
    return (
      <div>
        {authenticated ? (
          <nav className="hop-navbar">
            <span className="navbar-logo">
              <img src={logo} alt="HotelOnPoints" />
            </span>

            <div className="hop-harmbuger-div" onClick={this.handleNav}>
              <i className="fas fa-bars hop-bars"></i>
            </div>
            {userData && userData.isAdmin ? (
              <ul
                className={
                  this.state.showNav ? "show-ul hop-navbar-ul" : "hop-navbar-ul"
                }
              >
                {userData && (
                  <li className="nav-item mr-1">
                    <div>
                      <img
                        src={userData.imageUrl}
                        alt="..."
                        style={{
                          width: 40,
                          height: 40,
                          marginLeft: 10,
                          marginRight: 10
                        }}
                        className="rounded-circle"
                      />{" "}
                      <span style={{ color: "white", marginRight: 10 }}>
                        {userData.fullName}
                      </span>
                    </div>
                  </li>
                )}
                <li className="hop-navbar-li">
                  <button className="navbar-link " onClick={this.signout}>
                    Log out
                  </button>
                </li>
              </ul>
            ) : (
              <ul
                className={
                  this.state.showNav ? "show-ul hop-navbar-ul" : "hop-navbar-ul"
                }
              >
                <li className="hop-navbar-li">
                  <Link to="/" className="navbar-link">
                    Home
                  </Link>
                </li>
                <li className="hop-navbar-li">
                  <Link to="/add-property" className="navbar-link">
                    Add New Property
                  </Link>
                </li>
                {userData && (
                  <li className="nav-item mr-1">
                    <div>
                      <img
                        src={userData.imageUrl}
                        alt="..."
                        style={{
                          width: 40,
                          height: 40,
                          marginLeft: 10,
                          marginRight: 10
                        }}
                        className="rounded-circle"
                      />{" "}
                      <span style={{ color: "white", marginRight: 10 }}>
                        {userData.fullName}
                      </span>
                    </div>
                  </li>
                )}
                <li className="hop-navbar-li">
                  <button className="navbar-link " onClick={this.signout}>
                    Log out
                  </button>
                </li>
              </ul>
            )}
          </nav>
        ) : (
          <nav className="hop-navbar">
            <span className="navbar-logo">
              <img src={logo} alt="HotelOnPoints" />
            </span>

            <div className="hop-harmbuger-div" onClick={this.handleNav}>
              <i className="fas fa-bars hop-bars"></i>
            </div>
            <ul
              className={
                this.state.showNav ? "show-ul hop-navbar-ul" : "hop-navbar-ul"
              }
            >
              <li className="hop-navbar-li">
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>
              <li className="hop-navbar-li">
                <Link to="/add-property" className="navbar-link">
                  Add New Property
                </Link>
              </li>

              <li className="hop-navbar-li">
                <Link to="/login" className="navbar-link ">
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapActionsToProps = {
  getUser,
  logoutUser
};

export default connect(mapStateToProps, mapActionsToProps)(Navbar);
