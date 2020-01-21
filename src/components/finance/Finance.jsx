import React, { Component } from "react";
import CustomLoading from "../assets/CustomLoading";

export default class Finance extends Component {
  state = {
    loading: false
  };
  render() {
    const { loading } = this.state;
    return (
      <section className="container mt-3">
        {loading ? (
          <CustomLoading />
        ) : (
          <div className="finance-div">
            <p className="text-center">
              {" "}
              <strong>Invoice of Bookings with Hotel On Points</strong>
            </p>
            <div className="scroll-div">
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Hotel Name</th>
                    <th>Room Type</th>
                    <th>Price (Naira)</th>
                    <th>Date Booked</th>
                    <th>Check-In Date</th>
                    <th>Check-Out Date</th>
                    <th>Commission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Wisdom Hotels</td>
                    <td>Double Deluxe</td>
                    <td>30000</td>
                    <td>12-12-12</td>
                    <td>01-01-01</td>
                    <td>02-02-02</td>
                    <td>10%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />

            <table className="total-table mt-3">
              <tr className="total-row">
                <th className="total-heading">Total Amount Due</th>
                <th className="total-heading">&#8358; 50000</th>
              </tr>
            </table>
          </div>
        )}

        <div className="row mt-5">
          <button
            className="btn btn-primary ml-3"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </button>
        </div>
      </section>
    );
  }
}
