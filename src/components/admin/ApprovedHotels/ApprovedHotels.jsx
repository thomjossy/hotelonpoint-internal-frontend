import "react-toastify/dist/ReactToastify.css";
import _ from "lodash";
import CustomLoading from "../../assets/CustomLoading";
import { paginate } from "../../../utils/paginate";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Link } from "react-router-dom";
import axios from "axios";

export default class ApprovedHotels extends Component {
  state = {
    hotels: [],
    searchfield: "",
    loading: true,
    pageSize: 10,
    showModal: true,
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
  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      hotels: newHotels,
      searchfield,
      loading,
      pageSize,
      currentPage,
      showModal
    } = this.state;

    const newApprovedHotels = newHotels.filter(item => item.approved === true);
    let pageCount = Math.ceil(newApprovedHotels.length / pageSize);
    console.log("pagecount", pageCount);
    if (pageCount === 1) {
      pageCount = null;
    }
    const hotels = paginate(newHotels, currentPage, pageSize);
    const pages = _.range(1, pageCount + 1);

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

    // const handleDeleteOne = async id => {
    //   console.log("Hello from id", id);
    // };

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

    return loading ? (
      <CustomLoading />
    ) : (
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

        {/* <div className={showModal ? "modal-container" : "close-modal"}>
          <div className="modal-inner">
            <div className="star-div">
              <p className="mb-1 mt-2">
                This Action completely delete the Hotel entirely from the
                database and it is not reversible, do you wish to continue
              </p>
            </div>

            <div className="btn-div">
              <button
                className="btn btn-dark"
                onClick={() => {
                  this.handleCloseModal(id);
                }}
              >
                Yes
              </button>
              <button className="btn btn-primary">No</button>
            </div>
            <div></div>
          </div>
        </div> */}
        <div className="scrool-div">
          <table className="approvedHotels-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name of Hotel</th>
                <th>Details</th>
                <th>Action</th>
                {/* <th>Action</th> */}
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
                      {/* {showModal ? (
                        <td
                          onClick={() => this.handleCloseModal(item._id)}
                          // onClick={() => handleDelete(item._id)}
                          className="text-danger"
                        >
                          Delete
                        </td>
                      ) : (
                        <td
                          onClick={() => this.handleShowModal()}
                          // onClick={() => handleDelete(item._id)}
                          className="my-modal "
                        >
                          This Action completely delete the Hotel entirely from
                          the database and it is not reversible, do you wish to
                          continue Delete
                        </td>
                      )} */}
                      {/* <td
                        onClick={() => this.handleCloseModal()}
                        // onClick={() => handleDelete(item._id)}
                        className="text-danger"
                      >
                        Delete
                      </td> */}
                      <td className="approve-btn">
                        <Link to={`/admin/approved-hotels/${item._id}`}>
                          Add
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
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
