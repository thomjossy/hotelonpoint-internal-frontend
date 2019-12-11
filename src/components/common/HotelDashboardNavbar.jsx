import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HotelDashboardNavbar extends Component {
  state = {
    navOpen: true
  };

  handleNavOpen = () => {
    this.setState({ navOpen: !this.state.navOpen });
    console.log("clicked");
  };
  render() {
    return (
      <div className="dashboardnavbar-div">
        <div className="harmbuger-div" onClick={this.handleNavOpen}>
          <i className="fas fa-bars"></i>
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
                Properties
              </Link>
            </li>
            <li>
              <Link to="/reservations">
                <i className="fas fa-chart-area"></i>
                Reservations
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-pen"></i>
                Reviews
                <ul>
                  <li>
                    {" "}
                    <Link to="/">Add Hotel Room</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="">Manage Hotel Rooms</Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-inbox"></i>
                Messages
                <ul className="inner-nav">
                  <li>
                    {" "}
                    <Link to="/">Inbox</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/">Message HotelOnPoint</Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="">Customer Reviews</Link>
                  </li>
                </ul>
              </Link>
            </li>
            <li>
              <Link to="/">
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
