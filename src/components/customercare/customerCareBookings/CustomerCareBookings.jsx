import React from "react";
import axios from "axios";
import Spinner from "../../images/Spinner.gif";
import { Link } from "react-router-dom";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default class CustomerCareBooking extends React.Component {
  state = {
    userBookings: {},
    loading: true,
    isSubmitting: false
  };

  async componentDidMount() {
    const response = await axios.get(`http://localhost:3400/Booking/all`);
    console.log("bookingsss", response);
    this.setState({
      userBookings: response.data.data.bookings,
      loading: false
    });
    console.log("bookingsss", this.state.userBookings);
  }

  handleCheckInStatus = async id => {
    console.log("assssdds", id);
    const real = [
      {
        propName: "checkInStatus",
        value: true
      }
    ];
    try {
      const response = await axios.put(
        `http://localhost:3400/Booking/${id}`,
        real
      );
      console.log("asssdds2", response);
      this.setState({ isSubmitting: true });
      toast.success("Successfully Checkin");
      if (response) {
        setTimeout(() => {
          window.location.href = `/care/booking`;
        }, 1000);
      }
    } catch (error) {
      if (error.message == "Network Error") {
        return alert("There is a very Poor Network");
      }

      console.log(error);
      toast.error("An Unexpected Error just occured");
    }
  };

  handleCheckOutStatus = async id => {
    const real = [
      {
        propName: "checkOutStatus",
        value: true
      }
    ];
    try {
      const response = await axios.put(
        `http://localhost:3400/Booking/${id}`,
        real
      );

      this.setState({ isSubmitting: true });
      toast.success("Successfully Checkout");
      if (response) {
        setTimeout(() => {
          window.location.href = `/care/booking`;
        }, 1000);
      }
    } catch (error) {
      if (error.message == "Network Error") {
        return alert("There is a very Poor Network");
      }

      console.log(error);
      toast.error("An Unexpected Error just occured");
    }
  };

  render() {
    const { loading, userBookings } = this.state;
    return loading ? (
      <div className="center-div">
        <img src={Spinner} alt="Loading..." />
      </div>
    ) : (
      <section className="container">
        <ToastContainer />
        {userBookings.length === 0 ? (
          <div className="center-div">
            <h3>Sorry, No bookings yet...</h3>
          </div>
        ) : (
          userBookings.map((item, index) => {
            return (
              <div className="custom-shadow p-5 mb-4" key={item._id}>
                <div className="row">
                  <div className="col-md-6">
                    <h3> Personal Information</h3>
                    <p>
                      Name:{" "}
                      <strong>
                        {item.customer.firstName} &nbsp;{" "}
                        {item.customer.lastName}
                      </strong>
                    </p>
                    <p>
                      Email: <strong>{item.customer.email}</strong>
                    </p>
                    <p>
                      Phone: <strong>{item.customer.phone}</strong>
                    </p>
                    <p>
                      Checkin Status:{" "}
                      <strong>
                        {item.checkInStatus
                          ? "Customer Already Checked In"
                          : "Customer has Not Checked In"}
                      </strong>
                    </p>
                    <p>
                      Checkout Status:
                      <strong>
                        {item.checkOutStatus
                          ? "Customer Already Checked Out"
                          : "Customer has Not Checked Out"}
                      </strong>
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h3>Booking Information</h3>
                    <p>
                      Reference Number: <strong>{item.referenceNumber}</strong>
                    </p>
                    <p>
                      Hotel Name: <strong>{item.hotelName}</strong>
                    </p>
                    <p>
                      Room Type: <strong>{item.roomType}</strong>
                    </p>
                    <p>
                      Amount: <strong> {item.amount / 100}</strong>
                    </p>
                    <p>
                      {" "}
                      {item.customer.wantAirportShuttle ? (
                        <strong>
                          {" "}
                          Customer Booked for an airport shuttle{" "}
                        </strong>
                      ) : null}
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6"></div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <button
                      disabled={item.checkInStatus}
                      className="btn w-50 btn-primary  mb-3"
                      onClick={() => this.handleCheckInStatus(item._id)}
                    >
                      Checkin Customer
                    </button>
                  </div>
                  <div className="col-md-6">
                    <button
                      disabled={item.checkOutStatus}
                      className="btn w-50 btn-danger mb-3"
                      onClick={() => this.handleCheckOutStatus(item._id)}
                    >
                      CheckOut Customer
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </section>
    );
  }
}
