import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HotelDashboardNavbar extends Component {
  state = {
    navOpen: false
  };

  handleNavOpen = () => {
    this.setState({ navOpen: !this.state.navOpen });
    console.log("clicked");
  };
  render() {
    return (
      <div className="dashboardnavbar-div">
        <div className="harmbuger-div">
          <i onClick={this.handleNavOpen} className="fas fa-bars"></i>
        </div>
        <nav
          className={
            this.state.navOpen ? "dashboardnavbar" : "dashboardnavbar-close"
          }
        >
          <ul>
            <li>
              <Link to="/">
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties">
                <i className="fas fa-building"></i>
                Add Properties
              </Link>
            </li>
            <li>
              <Link to="/reservations">
                <i className="fas fa-chart-area"></i>
                Reservations
              </Link>
            </li>

            <li>
              <Link to="/reviews">
                <i className="fas fa-inbox"></i>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="/finance">
                <i className="fas fa-money-bill-wave-alt"></i>
                Finance
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
