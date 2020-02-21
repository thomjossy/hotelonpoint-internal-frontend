import "./nav.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser, logoutUser } from "../../../redux/actions/userActions";
import { Link } from "react-router-dom";
import logo from "../../images/HOP.svg";
import Dropdown from "../../dropdown/dropdown";

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
      <div className="nav-section">
        {authenticated ? (
          <nav className="hop-navbar">
            <span className="navbar-logo">
              <a href="https://www.hotelonpoints.com/">
                <img src={logo} alt="HotelOnPoints" />
              </a>
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
                    <Dropdown
                      imageurl={userData.imageUrl}
                      fullname={userData.fullName}
                    />
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
                <li className="nav-item mr-1">
                  <div
                    className="btn-group mr-1 btn-group-sm"
                    role="group"
                    aria-label="Button group with nested dropdown"
                  >
                    <div
                      className="btn-group"
                      id="google_translate_element"
                      role="group"
                    >
                      {/* <button type='button' className='botin'>
                            NGN
                          </button> */}
                    </div>
                  </div>
                </li>
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
                    <Dropdown
                      imageurl={userData.imageUrl}
                      fullname={userData.fullName}
                    />
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
              <a href="https://www.hotelonpoints.com/">
                <img src={logo} alt="HotelOnPoints" />
              </a>
            </span>

            <div className="hop-harmbuger-div" onClick={this.handleNav}>
              <i className="fas fa-bars"></i>
            </div>
            <ul
              className={
                this.state.showNav ? "show-ul hop-navbar-ul" : "hop-navbar-ul"
              }
            >
              <li className="nav-item mr-1">
                <div
                  className="btn-group mr-1 btn-group-sm"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <div
                    className="btn-group"
                    id="google_translate_element"
                    role="group"
                  >
                    {/* <button type='button' className='botin'>
                            NGN
                          </button> */}
                  </div>
                </div>
              </li>
              <li className="hop-navbar-li">
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>
              <li className="nav-item mr-1">
                <div
                  className="btn-group mr-1 mt-1 btn-group-sm"
                  role="group"
                  aria-label="Button group with nested dropdown"
                >
                  <div
                    className="btn-group"
                    id="google_translate_element"
                    role="group"
                  >
                    {/* <button type='button' className='botin'>
                            NGN
                          </button> */}
                  </div>
                </div>
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
