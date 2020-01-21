import React, { Component } from "react";
import axios from "axios";
import Spinner from "../../images/Spinner.gif";

export default class HotelReview extends Component {
  state = {
    loading: false
  };
  async componentDidMount() {
    const response = await axios.get("url");
  }

  render() {
    const { loading } = this.state;
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
                  <th>Hotel Name</th>
                  <th>Number of Review</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wisdom Hotels</td>
                  <td>0</td>

                  <td>view</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
    );
  }
}
