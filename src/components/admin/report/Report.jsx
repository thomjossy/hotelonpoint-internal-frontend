import "react-toastify/dist/ReactToastify.css";
import React, { Component } from "react";
import _ from "lodash";
import CustomLoading from "../../assets/CustomLoading";
import { paginate } from "../../../utils/paginate";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Report extends Component {
  state = {
    hotels: [],
    loading: true,
    searchfield: "",
    pageSize: 10,
    currentPage: 1
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `https://calm-anchorage-14244.herokuapp.com/admin/getAllHotels`
    );

    this.setState({ hotels: data.data, loading: false });
  }

  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const {
      hotels: newHotels,
      searchfield,
      loading,
      currentPage,
      pageSize
    } = this.state;

    let pageCount = Math.ceil(newHotels.length / pageSize);
    console.log("pagecount", pageCount);
    if (pageCount === 1) {
      pageCount = null;
    }
    const hotels = paginate(newHotels, currentPage, pageSize);
    const pages = _.range(1, pageCount + 1);

    const allHotels = hotels.filter(item =>
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
          `https://calm-anchorage-14244.herokuapp.com/admin/suspend/${id}`,
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
          `https://calm-anchorage-14244.herokuapp.com/admin/approve/${id}`,
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

    let totalHotelCount = newHotels.length;

    const awaitinghotels = newHotels.filter(item => item.approved === false);
    const approvedHotels = newHotels.filter(item => item.approved === true);

    return loading ? (
      <CustomLoading />
    ) : (
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
        <nav aria-label="Page navigation example">
          <ul className="pagination mt-4">
            {pages.map(page => {
              return (
                <li
                  key={page}
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <a
                    className="page-link"
                    onClick={() => this.handlePageChange(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    );
  }
}
