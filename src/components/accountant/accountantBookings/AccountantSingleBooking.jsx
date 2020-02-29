import React, { Component } from "react";
import CustomLoading from "../../assets/CustomLoading";
import moment from "moment";
import Axios from "axios";

export default class SingleHotelInvoice extends Component {
  state = {
    loading: false,
    customerInvoice: {}
  };

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `https://calm-anchorage-14244.herokuapp.com/Booking/invoice/${this.props.match.params.id}`
      );
      console.log("1234", response);
      this.setState({
        customerInvoice: response.data.data,
        loading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, customerInvoice } = this.state;
    return loading ? (
      <CustomLoading />
    ) : (
      <section className="container mt-3">
        {/* {customerInvoice.invoice === undefined ? ( */}
        <div className="center-div">
          <h3 className="gold">Sorry, No Invoice for this hotel</h3>
        </div>
        {/* ) : ( */}
        <div className="finance-div">
          <div>
            <p className="text-center">
              {" "}
              {/* <strong>
                  Invoice of Bookings for {customerInvoice.invoice.hotelName}{" "}
                  through Hotel On Points
                </strong> */}
            </p>
            <div className="scroll-div">
              <table className="booking-table">
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Customer Name</th>
                    <th>Amount (Naira)</th>

                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>123456RT</td>
                    <td>John Doe</td>
                    <td>2300</td>
                    <td>Confirm Payment</td>
                  </tr>
                </tbody>
              </table>

              <br />

              <div className="row mt-5 mb-4">
                <button
                  className="btn btn-primary ml-3"
                  onClick={() => {
                    window.print();
                  }}
                >
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* )} */}
      </section>
    );
  }
}
