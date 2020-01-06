import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    step: 1,
    reservationdate: "",
    email: "",
    password: "",
    propertySearch: "",
    authenticated: false,
    loading: false,
    errors: null,
    userData: {},
    currentDate: new Date(),
    hotels: [],
    awaitingHotels: [],
    reservationlist: [],
    filteredreservationlist: [],
    registerdHotels: [],
    hotelRooms: []
  };

  handleDateChange = date => {
    this.setState({ checkIn: date });
  };

  handleChekoutChange = date => {
    this.setState({ checkOut: date });
  };

  handlePropertyChange = e => {
    this.setState({ propertySearch: e.target.value });
  };

  getUser = () => {
    const url = "https://calm-anchorage-14244.herokuapp.com";
    // this.setState({ loading: true });
    axios
      .get(`${url}/user/me`)
      .then(result => {
        this.setState({
          authenticated: true,
          userData: result.data.userData
        });
        // history.push("/");
      })
      .catch(err => {
        if (err.response === undefined) {
          toast.error("Network Error Check your internet Provider", {
            position: toast.POSITION.BOTTOM_CENTER
          });
          // this.setState({ loading: false });
        } else {
          console.log(err.response);
          this.setState({ errors: err.response.data, loading: false });
          toast.error(err.response.data.message, {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          handleDateChange: this.handleDateChange,
          handlePropertyChange: this.handlePropertyChange,
          handlesubmit: this.handlesubmit,
          handleForm: this.handleForm,
          logoutUser: this.logoutUser,
          getUser: this.getUser
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

