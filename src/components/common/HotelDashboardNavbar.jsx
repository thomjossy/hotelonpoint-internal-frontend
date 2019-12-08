import React, { Component } from "react";

export default class HotelDashboardNavbar extends Component {
  render() {
    return (
      <div>
        <nav className="dashboardnavbar">
          <ul>
            <li>
              <NavLink></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
