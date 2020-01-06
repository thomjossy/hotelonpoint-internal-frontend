import React, { Component } from "react";
import { RoomContext } from "../../context";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../images/Spinner.gif";

class DashboardHomePage extends Component {
  static contextType = RoomContext;

  state = {
    myHotel: [],
    loading: true
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://calm-anchorage-14244.herokuapp.com/hotel/myhotel`
    );

    this.setState({ myHotel: response.data.hotels, loading: false });
  }

  render() {
    const {
      user: { userData }
    } = this.props;
    const { handlePropertyChange, propertySearch } = this.context;
    const { myHotel, loading } = this.state;

    const filterdHotels = myHotel.filter(item =>
      item.propertyInfo.hotelName
        .toLowerCase()
        .includes(propertySearch.toLowerCase())
    );
    return loading ? (
      <div className="center-div">
        <img src={Spinner} alt="loading..." />
      </div>
    ) : (
      <section className="dashboard-homepage">
        <div className="dashboard-top">
          {userData ? (
            <h3 className="greeting-text">
              Welcome <strong>{userData.fullName} </strong>
            </h3>
          ) : null}
        </div>
        <br />
        <div className=" container dashboard-info">
          <h5>Group Home</h5>
          <div className="add-new-property-div">
            <Link to="/add-property" className="add-new-property">
              Add New Property
            </Link>
          </div>
          <br />
          <div className="property-search-div">
            <input
              type="text"
              name="propertySearch"
              value={propertySearch}
              className="property-search"
              placeholder={"Search for your property by name "}
              onChange={handlePropertyChange}
            />
            <i className="fas fa-search search"></i>
          </div>

          <br />

          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filterdHotels.map((item, index) => {
                return (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>
                      {" "}
                      <img
                        src={item.imagerUrl[0].url}
                        alt="hotel"
                        className="hotel-img"
                      />{" "}
                      <Link to={`/hotel/${item._id}`} className="hotel-link">
                        {" "}
                        {item.propertyInfo.hotelName}
                      </Link>
                    </td>
                    <td>{item.propertyInfo.city}</td>
                    <td>{item.approved ? "Approved" : "Awaiting Approval"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <br />
      </section>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(DashboardHomePage);
