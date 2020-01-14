import "react-toastify/dist/ReactToastify.css";

import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Link } from "react-router-dom";
import axios from "axios";

export default class ApprovedHotels extends Component {
  state = {
    hotels: [],
    searchfield: ""
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://calm-anchorage-14244.herokuapp.com/admin/getAllHotels`
    );

    this.setState({ hotels: data.data });
  }

  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { hotels, searchfield } = this.state;

    const approvedHotels = hotels.filter(
      item =>
        item.approved === true &&
        item.propertyInfo.hotelName
          .toLowerCase()
          .includes(searchfield.toLowerCase())
    );

    const handleDelete = async id => {
      try {
        const promise = await axios.delete(
          `https://calm-anchorage-14244.herokuapp.com/admin/deleteHotel/${id}/`
        );
        if (promise.data) {
          toast.success("Hotels Successfully Deleted");
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
          `https://calm-anchorage-14244.herokuapp.com/admin/suspend/${id}`,
          items
        );
        if (promise.data) {
          toast.success("Hotel Suspended Successfully");
          setTimeout(() => {
            window.location.href = `/admin/approved-hotels`;
          }, 800);
        }
      } catch (err) {
        console.log(err);
      }
    };

    return (
      <section className="container">
        <ToastContainer />
        <h3>Hotels Approved</h3>
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
              <th>Add VR</th>
            </tr>
          </thead>
          {approvedHotels.length === 0 ? (
            <tbody>
              <tr>
                <td>No hotel found...</td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {approvedHotels.map((item, index) => {
                return (
                  <tr key={`${item._id}-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item._id}</td>
                    <td>{item.propertyInfo.hotelName}</td>
                    <td>
                      <Link to={`/admin/hotel-details/${item._id}`}>
                        {" "}
                        Details
                      </Link>
                    </td>
                    <td
                      className="approve-btn"
                      onClick={() => handleSuspend(item._id)}
                    >
                      Suspend
                    </td>
                    <td
                      onClick={() => handleDelete(item._id)}
                      className="text-danger delete-btn"
                    >
                      Delete
                    </td>
                    <td className="approve-btn">
                      <Link to={`/admin/approved-hotels/${item._id}`}>Add</Link>
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
