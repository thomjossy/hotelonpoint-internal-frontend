import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import React, { Component } from "react";
import axios from "axios";
import CustomLoading from "./CustomLoading";
import moment from "moment";

export default class Reservation extends Component {
  state = {
    bookings: [],
    loading: true,
    guestName: "",
    selectedDate: new Date()
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `http://localhost:3400/Booking/hotelbooking/${this.props.match.params.id}`
      );
      console.log("1234", response);
      this.setState({ bookings: response.data.data.bookings, loading: false });
    } catch (error) {
      this.setState({ loading: false });
      console.error(error);
      if (error.message == "No Booking has been Made") {
        this.setState({ loading: false });
      }
    }
  }

  handleCheckInStatus = async id => {
    const real = [
      {
        propName: "checkInStatus",
        value: true
      }
    ];
    console.log("asssdds2", id);
    try {
      const response = await axios.put(
        `http://localhost:3400/Booking/user/${id}`,
        real
      );
      console.log("asssdds2", response);

      this.setState({ isSubmitting: true });
      toast.success("Successfully Checkin Customer");
      setTimeout(() => {
        window.location.href = `/hotel/${this.props.match.params.id}/reservation`;
        // history.push("/");
      }, 1000);
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
        `http://localhost:3400/Booking/user/${id}`,
        real
      );
      console.log("checkout response", response);
      this.setState({ isSubmitting: true });
      toast.success("Successfully Checkout customer");
      setTimeout(() => {
        window.location.href = `/hotel/${this.props.match.params.id}/reservation`;
        // history.push("/");
      }, 1000);
    } catch (error) {
      if (error.message == "Network Error") {
        return alert("There is a very Poor Network");
      }

      console.log(error);
      toast.error("An Unexpected Error just occured");
    }
  };

  handleNameChange = e => {
    this.setState({ guestName: e.target.value });
    console.log(this.state.guestName);
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { loading, bookings, guestName, selectedDate } = this.state;
    const newBookings = bookings.filter(
      item =>
        item.customer.firstName
          .toLowerCase()
          .includes(guestName.toLowerCase()) ||
        item.createdAt !== selectedDate.toISOString()
    );
    return loading ? (
      <CustomLoading />
    ) : bookings.length === 0 ? (
      <div className="center-div">
        <h4 className="gold">Oops, Sorry No booking made yet</h4>
      </div>
    ) : (
      <section className="reservation-section" style={{ fontSize: "16px" }}>
        <ToastContainer />
        <div className="reservation-div">
          <h2 className="reservation-title">Reservations</h2>
          <br />
          <p className="mb-4">Search for Guests by the date they booked in</p>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>

          <br />

          <br />

          <br />
          <div className="property-search-div">
            <input
              type="text"
              name="propertySearch"
              value={guestName}
              onChange={this.handleNameChange}
              className="property-search"
              placeholder={"Search for guest by name "}
            />
            <i className="fas fa-search search"></i>
          </div>
          <br />

          <br />
          <div className="scroll-div">
            <table className="reservation-table">
              <thead>
                <tr>
                  <th>Guest Name</th>
                  <th>Check In Date</th>
                  <th>Check Out</th>
                  <th>Booked</th>
                  <th>Type of Room</th>
                  <th>Price (Naira)</th>
                  <th>Booking Number</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>

              <tbody>
                {bookings &&
                  newBookings.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{`${item.customer.firstName} ${item.customer.lastName}`}</td>
                        <td>{item.checkIn}</td>
                        <td>{item.checkOut}</td>
                        <td>{moment(item.createdAt).format("YYYY MM DD")}</td>
                        <td>{item.roomType}</td>
                        <td>{item.amount / 100}</td>
                        <td>{item.referenceNumber}</td>
                        {item.checkIn ? (
                          <td>Already Checked-In</td>
                        ) : (
                          <td
                            className="text-primary cursor"
                            onClick={() => this.handleCheckInStatus(item._id)}
                          >
                            Check-In
                          </td>
                        )}
                        {item.checkOut ? (
                          <td>Already Checked Out</td>
                        ) : (
                          <td
                            className="text-danger cursor"
                            onClick={() => this.handleCheckOutStatus(item._id)}
                          >
                            Check-Out
                          </td>
                        )}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <br />
      </section>
    );
  }
}
