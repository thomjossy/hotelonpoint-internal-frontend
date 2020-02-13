import React, { Component } from "react";
import CustomLoading from "../assets/CustomLoading";
import moment from "moment";
import Axios from "axios";
export default class Finance extends Component {
  state = {
    loading: true,
    customerInvoice: {}
  };

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `http://localhost:3400/Booking/userinvoice/${this.props.match.params.id}`
      );
      console.log("json response", response);
      this.setState({
        customerInvoice: response.data.data,
        loading: false
      });

      console.log("123 state", this.state.customerInvoice);
    } catch (error) {
      console.log("somer error", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { loading, customerInvoice } = this.state;

    return loading ? (
      <CustomLoading />
    ) : (
      <section className="container mt-3">
        {customerInvoice.invoice === undefined ? (
          <div className="center-div">
            <h3 className="gold">Sorry, No Invoice for this hotel</h3>
          </div>
        ) : (
          <div className="finance-div">
            <div>
              <p className="text-center">
                {" "}
                <strong>
                  Invoice of Bookings for {customerInvoice.invoice.hotelName}{" "}
                  through Hotel On Points
                </strong>
              </p>
              <div className="scroll-div">
                <table className="booking-table">
                  <thead>
                    <tr>
                      <th>Room Type</th>
                      <th>Price (Naira)</th>
                      <th>Date Paid</th>
                      <th>Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerInvoice.invoice.roomBooked.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.roomType}</td>
                          <td>{item.amount}</td>
                          <td>{moment(item.paidAt).format("DD MMM YYYY")}</td>
                          <td>{customerInvoice.percentageValue}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <table className="total-table mt-3">
                  <tbody>
                    <tr className="total-row">
                      <th className="total-heading">Total Amount Due</th>
                      <th className="total-heading">
                        &#8358; {customerInvoice.invoice.totalAmount}
                      </th>
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
        )}
      </section>
    );
  }
}
