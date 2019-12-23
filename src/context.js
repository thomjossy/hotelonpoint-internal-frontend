import React, { Component } from "react";
import history from "./history";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
import { reservationlist } from "./components/services/fakereservation";
import { registerdHotels } from "./components/services/fakeregisteredhotels";
import { hotelRooms } from "./components/services/fakehotelrooms";
import axios from "axios";
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
    reservationlist: [],
    filteredreservationlist: [],
    registerdHotels: [],
    hotelRooms: []
  };

  getHotels = async () => {
    const promise = await axios.get(
      "https://calm-anchorage-14244.herokuapp.com/hotel"
    );

    console.log("hoteldata", promise);
    const result = promise.data.data;
    this.setState({ hotels: result });
    console.log("I am state", this.state.hotels);
  };

  componentDidMount() {
    this.setState({ reservationlist: reservationlist });
    this.setState({ registerdHotels: registerdHotels, hotelRooms: hotelRooms });
    this.getHotels();
  }

  handleDateChange = date => {
    this.setState({ checkIn: date });
  };

  handleChekoutChange = date => {
    this.setState({ checkOut: date });
  };

  handlePropertyChange = e => {
    const { propertySearch } = this.state;
    this.setState({ propertySearch: e.target.value });
    console.log(propertySearch);
  };

  handleForm = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state.email);
    console.log(this.state.password);
  };

  loginUser = (data, history) => {
    console.log("got here");
    const url = "https://calm-anchorage-14244.herokuapp.com";
    this.setState({ loading: true });
    axios
      .post(`${url}/user/login`, data)
      .then(result => {
        this.setAuthorizationHeader(result.data.message);
        this.getUser();
        this.setState({ errors: null });
        window.location.href = "/admin";
      })
      .catch(err => {
        if (err.response === undefined) {
          toast.error("Network Error Check your internet Provider", {
            position: toast.POSITION.BOTTOM_CENTER
          });
          this.setState({ loading: false });
        } else {
          console.log(err.response);
          this.setState({ errors: err.response.data, loading: false });
          toast.error(err.response.data.message, {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      });
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

  setAuthorizationHeader = token => {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem("JWT_TOKEN", FBIdToken);
    axios.defaults.headers.common["Authorization"] = FBIdToken;
  };

  logoutUser = () => {
    localStorage.removeItem("JWT_TOKEN");
    delete axios.defaults.headers.common["Authorization"];
    this.setState({ authenticated: false });
    window.location.href = "/";
  };

  handlesubmit = history => {
    console.log(this.state);
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.loginUser(data, history);
  };

  callgetUser = () => {
    this.getUser();
  };
  render() {
    const url = "https://calm-anchorage-14244.herokuapp.com";
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
