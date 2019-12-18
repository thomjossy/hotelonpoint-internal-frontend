import "./nav.css";
import React, { Component } from "react";
import { faCcVisa, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faHotel,
  faPlaneDeparture,
  faShip,
  faTaxi
} from "@fortawesome/free-solid-svg-icons";
// import { getUser, logoutUser } from "../../redux/actions/userActions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import logo from "../../images/HOP.svg";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      userData: {}
    };
  }
  componentDidMount() {
    // this.props.getUser();
  }

  signout = () => {
    // this.props.logoutUser(history);
  };

  render() {
    // const {
    //   user: { authenticated, userData }
    // } = this.props;
    return (
      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light">
            <span className="navbar-brand">
              <img src={logo} width="200" alt="" />
            </span>
            <button
              class="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon bg-light"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link disabled"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <nav className="navbar-expand-lg navbar-light bg2 shadow   ">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <FontAwesomeIcon className="menuicon" icon={faHotel} />
                  Acommodation
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Taxishome/" className="nav-link">
                  <FontAwesomeIcon className="menuicon" icon={faTaxi} />
                  Taxis
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Airportshuttle/" className="nav-link">
                  <FontAwesomeIcon className="menuicon" icon={faShip} />
                  Tours&Ticket
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/flight/" className="nav-link">
                  <FontAwesomeIcon
                    className="menuicon"
                    icon={faPlaneDeparture}
                  />
                  Flight
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/flight/" className="nav-link">
                  <FontAwesomeIcon className="menuicon" icon={faCcVisa} />
                  Visa
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Attraction" className="nav-link">
                  Attractions
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
