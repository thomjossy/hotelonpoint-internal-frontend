import React, { Component } from "react";
import Spinner from "../images/Spinner.gif";

export default class Booking extends Component {
  state = {
    loading: false,
    booking: {}
  };

  render() {
    const { loading } = this.state;
    console.log("state values", this.state);
    return (
      <section className="container booking-table-container">
        {loading ? (
          <div className="center-div">
            <img src={Spinner} alt="Loading..." />
          </div>
        ) : (
          <div className="booking-div">
            <table className="booking-table">
              <thead>
                <tr>
                  <th>Hotel name</th>
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
                  <td className="approve-btn text-primary">Check-Out</td>
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
