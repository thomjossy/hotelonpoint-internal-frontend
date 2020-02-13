import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, logoutUser } from "../../../redux/actions/userActions";

class CustomerCareNavbar extends Component {
  state = {
    navOpen: false
  };

  signout = () => {
    this.props.logoutUser();
  };
  handleNavOpen = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };
  render() {
    const {
      user: { authenticated, userData }
    } = this.props;
    return (
      <div className="dashboardnavbar-div">
        {authenticated ? (
          <div>
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
                  <Link to={`/care`}>Home</Link>
                </li>
                <li className="dashboard-li">
                  <Link to="/care/booking">Bookings</Link>
                </li>
                <li className="dashboard-li">
                  <Link to="/care/invoice">Invoice</Link>
                </li>
                <li className="dashboard-li">
                  <Link to="/care/reviews">Customer Review</Link>
                </li>
                <li className="dashboard-li">
                  <Link to="/care/hotel-reply">Hotel Replies</Link>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <div>{null}</div>
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

export default connect(mapStateToProps, mapActionsToProps)(CustomerCareNavbar);
