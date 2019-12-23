import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class HotelDashboardNavbar extends Component {
  state = {
    navOpen: false
  };

  handleNavOpen = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };
  render() {
    const { match } = this.props;
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
              <Link to={`/hotel/${match.params.name}`}>
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li className="dashboard-li">
              <Link to={`/hotel/${match.params.name}/reservation`}>
                <i className="fas fa-chart-area"></i>
                Reservations
              </Link>
            </li>

            <li className="dashboard-li">
              <Link to={`/hotel/${match.params.name}/reviews`}>
                <i className="fas fa-inbox"></i>
                Reviews
              </Link>
            </li>
            <li className="dashboard-li">
              <Link to={`/hotel/${match.params.name}/rooms`}>
                <i className="fas fa-bed"></i>
                Manage Rooms
              </Link>
            </li>
            <li className="dashboard-li">
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
