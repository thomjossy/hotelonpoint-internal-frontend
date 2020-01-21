import React, { Component } from "react";
import Spinner from "../images/Spinner.gif";

export default class Booking extends Component {
  state = {
    loading: false,
    showModal: false,
    booking: {},
    remark: "",
    rating: 0
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleStarRating1 = e => {
    this.setState({ rating: 1 });
  };

  handleStarRating2 = e => {
    this.setState({ rating: 2 });
  };
  handleStarRating3 = e => {
    this.setState({ rating: 3 });
  };
  handleStarRating4 = e => {
    this.setState({ rating: 4 });
  };
  handleStarRating5 = e => {
    this.setState({ rating: 5 });
  };
  render() {
    const { loading, rating, showModal } = this.state;

    let star1, star2, star3, star4, star5;

    if (rating >= 1) {
      star1 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star1 = {
        color: "#7e7878",
        cursor: "pointer"
      };

    if (rating >= 2) {
      star2 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star2 = {
        color: "#7e7878",
        cursor: "pointer"
      };

    if (rating >= 3) {
      star3 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star3 = {
        color: "#7e7878",
        cursor: "pointer"
      };
    if (rating >= 4) {
      star4 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star4 = {
        color: "#7e7878",
        cursor: "pointer"
      };

    if (rating >= 5) {
      star5 = {
        color: "#f8ce0b",
        cursor: "pointer"
      };
    } else
      star5 = {
        color: "#7e7878",
        cursor: "pointer"
      };
    console.log("state values", this.state);

    return (
      <section className="container booking-table-container">
        {loading ? (
          <div className="center-div">
            <img src={Spinner} alt="Loading..." />
          </div>
        ) : (
          <div className="booking-div">
            <div className={showModal ? "modal-container" : "close-modal"}>
              <div className="modal-inner">
                <h5>Hi, Give a review of the Hotel</h5>

                <textarea
                  name="remark"
                  id="remark"
                  className="remark"
                  placeholder="Leave a remark"
                ></textarea>

                <div className="star-div">
                  <p className="mb-1 mt-2">Rate Us</p>
                  <i
                    className="fas fa-star star"
                    style={star1}
                    onClick={() => this.handleStarRating1()}
                  ></i>{" "}
                  <i
                    className="fas fa-star star"
                    style={star2}
                    onClick={() => this.handleStarRating2()}
                  ></i>{" "}
                  <i
                    className="fas fa-star star"
                    style={star3}
                    onClick={() => this.handleStarRating3()}
                  ></i>{" "}
                  <i
                    className="fas fa-star star"
                    style={star4}
                    onClick={() => this.handleStarRating4()}
                  ></i>{" "}
                  <i
                    className="fas fa-star star"
                    style={star5}
                    onClick={() => this.handleStarRating5()}
                  ></i>
                </div>

                <div className="btn-div">
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      this.handleCloseModal();
                    }}
                  >
                    Not Now
                  </button>
                  <button className="btn btn-primary">Rate</button>
                </div>
                <div></div>
              </div>
            </div>

            <table className="booking-table">
              <thead>
                <tr>
                  <th>Hotel Name</th>
                  <th>Room Type</th>
                  <th>Date Booked</th>
                  <th>Check-In Date</th>
                  <th>Check-Out Date</th>
                  <th colSpan="3">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wisdom Hotels</td>
                  <td>Double Deluxe</td>
                  <td>12-12-12</td>
                  <td>01-01-01</td>
                  <td>02-02-02</td>
                  <td className="approve-btn text-primary">Check-In</td>
                  <td
                    className="approve-btn text-primary"
                    onClick={() => {
                      this.handleShowModal();
                    }}
                  >
                    Check-Out
                  </td>
                  <td className="delete-btn text-danger">Cancel</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
    );
  }
}
