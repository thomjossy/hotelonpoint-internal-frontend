import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Report extends Component {
  state = {
    hotels: [],
    searchfield: ""
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `http://localhost:3400/admin/getAllHotels`
    );

    this.setState({ hotels: data.data });
  }

  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { hotels, searchfield } = this.state;

    const allHotels = hotels.filter(item =>
      item.propertyInfo.hotelName
        .toLowerCase()
        .includes(searchfield.toLowerCase())
    );

    const handleDelete = async id => {
      try {
        const promise = await axios.delete(
          `http://localhost:3400/admin/deleteHotel/${id}/`
        );
        if (promise.data) {
          toast.success("Hotel Successfully Deleted");
          setTimeout(() => {
            window.location.href = `/admin/approved-hotels`;
          }, 800);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const handleSuspend = async id => {
      const items = {
        approved: false
      };
      try {
        const promise = await axios.put(
          `http://localhost:3400/admin/suspend/${id}`,
          items
        );
        if (promise.data) {
          toast.success("Hotel Suspended Successfully");
          setTimeout(() => {
            window.location.href = `/admin/reports`;
          }, 800);
        }
      } catch (err) {
        console.log(err);
      }
    };

    const handleApprove = async id => {
      const items = {
        approved: true
      };
      try {
        const promise = await axios.put(
          `http://localhost:3400/admin/approve/${id}`,
          items
        );
        if (promise.data) {
          toast.success("Successfully Approved");
          setTimeout(() => {
            window.location.href = `/admin/reports`;
          }, 800);
        }
      } catch (err) {
        console.log(err);
      }
    };

    let totalHotelCount = hotels.length;

    const awaitinghotels = hotels.filter(item => item.approved === false);
    const approvedHotels = hotels.filter(item => item.approved === true);

    return (
      <section className="container">
        <ToastContainer />
        <h3>Table of all Hotels</h3>
        <br />

        <div className="row">
          <div className="col-md-4">
            <div className="custom-shadow p-1 b-1 m-2 text-center count-div-1">
              <h3>{totalHotelCount} </h3>
              <p>Total Number of Hotels</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="custom-shadow p-1 b-1 m-2 text-center count-div-2">
              <h3> {totalHotelCount - awaitinghotels.length} </h3>
              <p>Total Number of Approved Hotels</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="custom-shadow p-1 b-1 m-2 text-center count-div-3">
              <h3> {totalHotelCount - approvedHotels.length} </h3>
              <p>Total Number of Awaiting Hotels</p>
            </div>
          </div>
        </div>
        <br />
        <div className="property-search-div">
          <input
            type="text"
            name="searchfield"
            value={searchfield}
            className="property-search"
            placeholder={"Search for property by name "}
            onChange={this.handleChange}
          />
          <i className="fas fa-search search"></i>
        </div>
        <br />

        <table className="approvedHotels-table">
          <thead>
            <tr>
              <th>No</th>
              <th>ID</th>
              <th>Name of Hotel</th>
              <th>Details</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          {allHotels.length === 0 ? (
            <tbody>
              <tr>
                <td>No hotel found...</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {allHotels.map((item, index) => {
                return (
                  <tr key={`${item}-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item._id}</td>
                    <td>{item.propertyInfo.hotelName}</td>
                    <td>
                      <Link to={`/admin/hotel-details/${item._id}`}>
                        {" "}
                        Details
                      </Link>
                    </td>
                    {item.approved ? (
                      <td
                        className="approve-btn"
                        onClick={() => handleSuspend(item._id)}
                      >
                        Suspend
                      </td>
                    ) : (
                      <td
                        className="approve-btn"
                        onClick={() => handleApprove(item._id)}
                      >
                        Approve
                      </td>
                    )}
                    <td
                      onClick={() => handleDelete(item._id)}
                      className="text-danger delete-btn"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </section>
    );
  }
}
