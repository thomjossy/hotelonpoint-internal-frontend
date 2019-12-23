import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminNavbar extends Component {
  state = {
    navOpen: false
  };

  handleNavOpen = () => {
    this.setState({ navOpen: !this.state.navOpen });
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
          <ul className="dashboard-ul">
            <li className="dashboard-li">
              <Link to={`/admin`}>
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li className="dashboard-li">
              <Link to={`/admin/blog`}>
                <i className="fas fa-chart-area"></i>
                Upload Blog
              </Link>
            </li>

            <li className="dashboard-li">
              <Link to={`/admin/hotel`}>
                <i className="fas fa-inbox"></i>
                Hotels
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
