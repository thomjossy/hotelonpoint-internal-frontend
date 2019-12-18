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
    hotelAmenities: {
      pool: false,
      pets: false,
      restaurant: false,
      garden: false,
      wifi: false,
      bar: false,
      roomService: false,
      fitnessCenter: false,
      frontDesk: false
    },
    image: [],
    contact: [
      {
        conNumber: "",
        email: "",
        compName: ""
      }
    ],
    hotelName: "",
    starRating: "1",
    roomNumber: "",
    hotelWebsite: "",
    roomAmenities: [{ index: Math.random(), amenity: "" }],
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
    checkIn: new Date("2014-08-18T21:11:54"),
    checkOut: new Date("2014-08-18T21:11:54"),
    accomodateChild: false,
    accomodatePet: false,
    isChainComp: false
  };

  componentDidMount() {
    this.setState({ reservationlist: reservationlist });
  }

  handleDateChange = date => {
    this.setState({ checkIn: date });
  };

  handleChekoutChange = date => {
    this.setState({ checkOut: date });
  };

  handleChange = event => {
    const { name, value, type, checked } = event.target;

    if (["conNumber", "email", "compName"].includes(event.target.name)) {
      let contact = [...this.state.contact];
      contact[event.target.dataset.id][event.target.name] = event.target.value;
    }

    if (["index", "addressName"].includes(event.target.name)) {
      let address = [...this.state.address];
      address[event.target.dataset.id][event.target.name] = event.target.value;
    }

    if (["index", "amenity"].includes(event.target.name)) {
      let roomAmenities = [...this.state.roomAmenities];
      roomAmenities[event.target.dataset.id][event.target.name] =
        event.target.value;
    }
    if (
      [
        "index",
        "roomName",
        "roomType",
        "roomSize",
        "roomsOfthisType",
        "bedType",
        "bedNumber",
        "smokePolicy",
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

    console.log(this.state);
  };

  handleHotelAmenities = e => {
    const { name, checked } = e.target;
    this.setState(prevState => {
      return {
        hotelAmenities: {
          ...prevState.hotelAmenities,
          [name]: checked
        }
      };
    });
  };

  addNewRow = e => {
    this.setState(prevState => ({
      address: [...prevState.address, { index: Math.random(), addressName: "" }]
    }));
  };

  addNewContact = e => {
    this.setState(prevState => ({
      contact: [
        ...prevState.contact,
        { conNumber: "", email: "", compName: "" }
      ]
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

  addRoomAmenities = e => {
    e.preventDefault();
    this.setState(prevState => ({
      roomAmenities: [
        ...prevState.roomAmenities,
        { index: Math.random(), amenity: "" }
      ]
    }));
  };

  deleteRoomAmenities = index => {
    this.setState({
      roomAmenities: this.state.roomAmenities.filter(
        (s, sindex) => index !== sindex
      )
    });
  };

  deleteRow = index => {
    this.setState({
      address: this.state.address.filter((s, sindex) => index !== sindex)
    });
  };

  onFilesChange = image => {
    this.setState({ image });
  };

  onFilesError(error, file) {
    console.log("error code " + error.code + ": " + error.message);
  }

  handleSubmit = async () => {
    const hotelData = {
      propName: this.state.hotelName,
      starRating: this.state.starRating,
      roomNumber: this.state.roomNumber,
      propWebsite: this.state.hotelWebsite,
      contact: [...this.state.contact],
      country: this.state.country,
      state: this.state.hotelState,
      city: this.state.city,
      address: this.state.address,
      zipCode: this.state.zipCode,
      repApproach: this.state.repApproach,
      isBreakfastAvailable: this.state.isBreakfastAvailable,
      isShuttleAvailable: this.state.isShuttleAvailable,

      rooms: this.state.rooms,
      freeCancellationPeriod: this.state.freeCancellationPeriod,
      paidCancellation: this.state.paidCancellation,
      checkIn: this.state.checkIn.toDateString(),
      checkOut: this.state.checkOut.toDateString(),
      accomodateChild: this.state.accomodateChild,
      accomodatePet: this.state.accomodatePet,
      roomAmenities: this.state.roomAmenities,
      image: this.state.image
    };

    const form = new FormData();
    for (let x = 0; x < this.state.image.length; x++) {
      form.append("image", this.state.image[x]);
    }
    for (let x = 0; x < this.state.contact.length; x++) {
      form.append("contact", JSON.stringify(this.state.contact[x]));
    }
    console.log(this.state.image);
    for (let x = 0; x < this.state.rooms.length; x++) {
      form.append("rooms", JSON.stringify(this.state.rooms[x]));
    }
    for (let x = 0; x < this.state.address.length; x++) {
      form.append("address", JSON.stringify(this.state.address[x]));
    }
    // for (let x = 0; x < this.state.roomAmenities.length; x++) {
    //   form.append("roomAmenities", JSON.stringify(this.state.roomAmenities[x]));
    // }
    // for (let x = 0; x < this.state.hotelAmenities.length; x++) {
    //   form.append("hotelAmenities", this.state.hotelAmenities[x]);
    // }

    form.append("pool", this.state.hotelAmenities.pool);
    form.append("pets", this.state.hotelAmenities.pets);
    form.append("restaurant", this.state.hotelAmenities.restaurant);
    form.append("wifi", this.state.hotelAmenities.wifi);
    form.append("garden", this.state.hotelAmenities.garden);
    form.append("bar", this.state.hotelAmenities.bar);
    form.append("roomService", this.state.hotelAmenities.roomService);
    form.append("fitnessCenter", this.state.hotelAmenities.fitnessCenter);
    form.append("frontDesk", this.state.hotelAmenities.frontDesk);
    form.append("propName", this.state.hotelName);
    form.append("hotelName", this.state.hotelName);
    form.append("starRating", this.state.starRating);
    form.append("roomNumber", this.state.roomNumber);
    form.append("propWebsite", this.state.hotelWebsite);
    form.append("country", this.state.country);
    form.append("state", this.state.hotelState);
    form.append("city", this.state.city);
    form.append("address", this.state.address);
    form.append("roomAmenities", this.state.roomAmenities);
    form.append("zipCode", this.state.zipCode);
    form.append("repApproach", this.state.repApproach);
    form.append("isBreakfastAvailable", this.state.isBreakfastAvailable);
    form.append("isShuttleAvailable", this.state.isShuttleAvailable);
    form.append("freeCancellationPeriod", this.state.freeCancellationPeriod);
    form.append("paidCancellation", this.state.paidCancellation);
    form.append("checkOut", this.state.checkOut);
    form.append("checkIn", this.state.checkIn);
    form.append("accomodatePet", this.state.accomodatePet);
    form.append("accomodateChild", this.state.accomodateChild);
    console.log("form", form.get("propWebsite"));
    const result = await axios.post("http://localhost:3400/hotel", form);
    console.log(result);
    this.setState({ result: result });
    // console.log("after form submission");
    // console.log(hotelData);
    // console.log("This is form data");
    // console.log(this.state.hotelAmenities);
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange,

          handleSubmit: this.handleSubmit,
          addNewRow: this.addNewRow,
          deleteRow: this.deleteRow,
          addNewRoom: this.addNewRoom,
          addRoomAmenities: this.addRoomAmenities,
          deleteRoomAmenities: this.deleteRoomAmenities,
          handleDateChange: this.handleDateChange,
          handleChekoutChange: this.handleChekoutChange,
          onFilesChange: this.onFilesChange,
          onFilesError: this.onFilesError,
          addNewContact: this.addNewContact,
          onRoomAmenitesChange: this.onRoomAmenitesChange,
          handleHotelAmenities: this.handleHotelAmenities
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
