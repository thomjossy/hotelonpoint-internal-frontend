import React, { Component } from "react";
import axios from "axios";
import { reservationlist } from "./components/services/fakereservation";
const RoomContext = React.createContext();
class RoomProvider extends Component {
  state = {
    step: 1,
    reservationdate: "",
    reservationlist: [],
    filteredreservationlist: [],
    hotelName: "",
    starRating: "1",
    roomNumber: "",
    hotelWebsite: "",
    conNumber: "",
    email: "",
    isChainComp: "",
    compName: "",
    country: "",
    hotelState: "",
    city: "",
    address: [{ index: Math.random(), addressName: "" }],
    rooms: [
      {
        index: Math.random(),
        roomName: "",
        roomType: "",
        roomSize: "",
        roomsOfthisType: "",
        bedType: "",
        bedNumber: "",
        smokePolicy: "",
        occupantPolicy: "",
        pricePerNight: ""
      }
    ],
    zipCode: "",
    repApproach: false,
    isBreakfastAvailable: false,
    isShuttleAvailable: false,
    swimingPoll: false,
    restaurant: false,
    garden: false,
    wifi: false,
    bar: false,
    roomService: false,
    accomodatePet: false,
    fitnessCenter: false,
    frontDesk: false,

    swimingPollValue: "swiming pool",
    restaurantValue: "restaurant",
    gardenValue: "garden",
    wifiValue: "wifi",
    barValue: "bar",
    roomServiceValue: "room service",
    accomodatePetValue: "accomodates pets",
    fitnessCenterValue: "fitness center",
    frontDeskValue: "front desk",

    freeCancellationPeriod: "",
    paidCancellation: "",
    checkIn: "",
    checkOut: "",
    accomodateChild: false
  };

  componentDidMount() {
    this.setState({ reservationlist: reservationlist });
  }

  decrementStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  incrementStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;
    if (["index", "addressName"].includes(event.target.name)) {
      let address = [...this.state.address];
      address[event.target.dataset.id][event.target.name] = event.target.value;
    }
    if (
      [
        "index",
        "roomName",
        "roomType",
        "roomSize",
        "roomsOfthisType",
        "bedType",
        " bedNumber",
        " smokePolicy",
        "occupantPolicy",
        "pricePerNight"
      ].includes(event.target.name)
    ) {
      let rooms = [...this.state.rooms];
      rooms[event.target.dataset.id][event.target.name] = event.target.value;
    } else
      type === "checkbox"
        ? this.setState({ [name]: checked })
        : this.setState({ [name]: value });

    console.log(this.state.rooms);
  };

  addNewRow = e => {
    this.setState(prevState => ({
      address: [...prevState.address, { index: Math.random(), addressName: "" }]
    }));
  };

  addNewRoom = e => {
    e.preventDefault();
    this.setState(prevState => ({
      rooms: [
        ...prevState.rooms,
        {
          index: Math.random(),
          index: "",
          roomName: "",
          roomType: "",
          roomSize: "",
          roomsOfthisType: "",
          bedType: "",
          bedNumber: "",
          smokePolicy: "",
          occupantPolicy: "",
          pricePerNight: ""
        }
      ]
    }));
  };

  deleteRow = index => {
    this.setState({
      address: this.state.address.filter((s, sindex) => index !== sindex)
    });
  };
  handleSubmit = async () => {
    const hotelData = {
      propName: this.state.hotelName,
      starRating: this.state.starRating,
      roomNumbers: this.state.roomNumber,
      propWebsite: this.state.hotelWebsite,
      contact: [
        {
          conNumber: this.state.conNumber,
          email: this.state.email,
          isChainComp: this.state.isChainComp,
          compName: this.state.compName,
          extra: null
        }
      ],
      country: this.state.country,
      state: this.state.hotelState,
      city: this.state.city,
      address: this.state.address,
      zipCode: this.state.zipCode,
      repApproach: this.state.repApproach,
      isBreakfastAvailable: this.state.isBreakfastAvailable,
      isShuttleAvailable: this.state.isShuttleAvailable,
      hotelAmenities: [
        this.state.swimingPollValue,
        this.state.restaurantValue,
        this.state.gardenValue,
        this.state.wifiValue,
        this.state.barValue,
        this.state.roomServiceValue,
        this.state.accomodatePetValue,
        this.state.fitnessCenterValue,
        this.state.frontDeskValue
      ],
      rooms: this.state.rooms,
      freeCancellationPeriod: this.state.freeCancellationPeriod,
      paidCancellation: this.state.paidCancellation,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut,
      accomodateChild: this.state.accomodateChild,
      accomodatePet: this.state.accomodatePet
    };

    // const result = await axios.post(
    //   "https://calm-anchorage-14244.herokuapp.com/hotel",
    //   hotelData
    // );
    console.log("after form submission");
    console.log(hotelData);
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,
          decrementStep: this.decrementStep,
          incrementStep: this.incrementStep,
          handleSubmit: this.handleSubmit,
          addNewRow: this.addNewRow,
          deleteRow: this.deleteRow,
          addNewRoom: this.addNewRoom
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
