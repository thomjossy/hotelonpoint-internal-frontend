import React, { Component } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import HotelFormTwo from "../HotelUploadForm/HotelFormTwo";
import HotelFormOne from "../HotelUploadForm/HotelFormOne";
import HotelFormThree from "../HotelUploadForm/HotelFormthree";
import HotelUploadForm from "./HotelUploadForm";
import FileUpload from "./FileUpload";
import axios from "axios";

const initialValues = {
  hotelName: "",
  hotelWebsite: "",
  contactName: "",
  starRating: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",
  isPropertyGroup: "",
  compName: "",
  repApproach: "",
  hotelDescription: "",
  rooms: [
    {
      roomName: "",
      roomType: "",
      roomSize: "",
      roomsOfThisType: "",
      bedType: "",
      bedNumber: "",
      weekendRate: "",
      standardRate: "",
      occupantNumber: "",
      roomPrice: "",
      roomAmenities: [],
      moreAmenities: []
    }
  ],
  propertyOwner: "",
  propertyOwnerPhoneOne: "",
  propertyOwnerPhoneTwo: "",
  propOwnerEmail: "",
  frontDesk: "",
  frontDeskPhoneOne: "",
  frontDeskPhoneTwo: "",
  frontDeskEmail: "",
  headOfReservationOne: "",
  headOfReservationPhoneOne: "",
  headOfReservationPhoneTwo: "",
  headOfReservationOneEmail: "",
  headOfReservationTwo: "",
  headOfReservationTwoPhoneTwo: "",
  headOfReservationTwoPhoneTwo: "",
  headOfReservationTwoEmail: "",
  headOfOperationOne: "",
  headOfOperationPhoneOne: "",
  headOfOperationPhoneTwo: "",
  headOfOperationOneEmail: "",
  headOfOperationTwo: "",
  headOfOperationTwoPhoneOne: "",
  headOfOperationTwoPhoneTwo: "",
  headOfOperationTwoEmail: "",
  smokingPolicy: "",
  paymentMethod: [],
  hotelAmenities: [],
  checkIn: "",
  checkOut: "",
  freeBooking: "",
  paidBooking: "",
  otherpaymentMethod: "",
  moreHotelPolicies: [
    {
      policy: ""
    }
  ],
  moreHotelAmenities: [
    {
      amenity: ""
    }
  ],
  files: []
};

const newRooms = {
  roomName: "",
  roomType: "",
  roomSize: "",
  roomsOfThisType: "",
  bedType: "",
  bedNumber: "",
  weekendRate: "",
  standardRate: "",
  occupantNumber: "",
  roomPrice: "",
  roomAmenities: [],
  moreAmenities: [{ amenity: "" }]
};

export default class FormWrapper extends Component {
  state = {
    page: 0
  };

  render() {
    const hotels = [
      <HotelFormOne />,
      <HotelFormThree />,
      <HotelFormTwo />,
      <HotelUploadForm />,
      <FileUpload />
    ];

    const incrementStep = () => {
      this.setState({ page: this.state.page + 1 });
    };
    const decrementStep = () => {
      this.setState({ page: this.state.page - 1 });
    };

    const handleFormSubmit = async values => {
      console.log("23", values);
      const form = new FormData();

      for (let x = 0; x < values.files.length; x++) {
        form.append("image", values.files[x]);
      }

      for (let x = 0; x < values.rooms.length; x++) {
        form.append("rooms", JSON.stringify(values.rooms[x]));
      }

      for (let x = 0; x < values.paymentMethod.length; x++) {
        form.append("paymentMethod", JSON.stringify(values.paymentMethod[x]));
      }

      for (let x = 0; x < values.hotelAmenities.length; x++) {
        form.append("hotelAmenities", JSON.stringify(values.hotelAmenities[x]));
      }

      for (let x = 0; x < values.moreHotelPolicies.length; x++) {
        form.append(
          "moreHotelPolicies",
          JSON.stringify(values.moreHotelPolicies[x])
        );
      }

      for (let x = 0; x < values.moreHotelAmenities.length; x++) {
        form.append(
          "moreHotelAmenities",
          JSON.stringify(values.moreHotelAmenities[x])
        );
      }

      form.append("hotelName", values.hotelName);
      form.append("hotelWebsite", values.hotelWebsite);
      form.append("contactNumber", values.contactNumber);
      form.append("starRating", values.starRating);
      form.append("repApproach", values.repApproach);
      form.append("country", values.country);
      form.append("state", values.state);
      form.append("city", values.city);
      form.append("zipCode", values.zipCode);
      form.append("isPropertyGroup", values.isPropertyGroup);
      form.append("compName", values.compName);
      form.append("hotelDescription", values.hotelDescription);
      form.append("propertyOwner", values.propertyOwner);
      form.append("propertyOwnerPhoneOne", values.propertyOwnerPhoneOne);
      form.append("propertyOwnerPhoneTwo", values.propertyOwnerPhoneTwo);
      form.append("propOwnerEmail", values.propOwnerEmail);
      form.append("frontDesk", values.frontDesk);
      form.append("frontDeskPhoneOne", values.frontDeskPhoneOne);
      form.append("frontDeskPhoneTwo", values.frontDeskPhoneTwo);
      form.append("frontDeskEmail", values.frontDeskEmail);
      form.append("headOfReservationOne", values.headOfReservationOne);
      form.append(
        "headOfReservationPhoneOne",
        values.headOfReservationPhoneOne
      );
      form.append(
        "headOfReservationPhoneTwo",
        values.headOfReservationPhoneTwo
      );
      form.append(
        "headOfReservationOneEmail",
        values.headOfReservationOneEmail
      );
      form.append("headOfReservationTwo", values.headOfReservationTwo);
      form.append(
        "headOfReservationTwoPhoneOne",
        values.headOfReservationTwoPhoneOne
      );
      form.append(
        "headOfReservationTwoPhoneTwo",
        values.headOfReservationTwoPhoneTwo
      );
      form.append(
        "headOfReservationTwoEmail",
        values.headOfReservationTwoEmail
      );
      form.append("headOfOperationOne", values.headOfOperationOne);
      form.append("headOfOperationPhoneOne", values.headOfOperationPhoneOne);
      form.append("headOfOperationPhoneTwo", values.headOfOperationPhoneTwo);
      form.append("headOfOperationOneEmail", values.headOfOperationOneEmail);
      form.append("headOfOperationTwo", values.headOfOperationTwo);
      form.append(
        "headOfOperationTwoPhoneOne",
        values.headOfOperationTwoPhoneOne
      );
      form.append(
        "headOfOperationTwoPhoneTwo",
        values.headOfOperationTwoPhoneTwo
      );
      form.append("headOfOperationTwoEmail", values.headOfOperationTwoEmail);
      form.append("smokingPolicy", values.smokingPolicy);
      form.append("checkIn", values.checkIn);
      form.append("checkOut", values.checkOut);
      form.append("freeBooking", values.freeBooking);
      form.append("paidBooking", values.paidBooking);
      form.append("otherPaymentMethod", values.otherPaymentMethod);

      //apicall
      // Axios.post('http://localhost:3001/properties?file=#', form)

      const result = await axios.post("http://localhost:3400/hotel", form);
      console.log("here", result);
    };
    return (
      <div className="container" style={{ fontSize: "14px" }}>
        <div className="mt-3">
          <br />
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              console.log(JSON.stringify(values, null, 2));
              setSubmitting(true);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit
              // isSubmitting
            }) => (
              <Form>
                <div>{hotels[this.state.page]}</div>
                <br />
                <div className="button-div">
                  <button
                    type="button"
                    className="btn btn-dark btn-lg"
                    disabled={this.state.page === 0}
                    onClick={() => decrementStep()}
                  >
                    Back
                  </button>

                  {this.state.page === 4 ? (
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      // disabled={isSubmitting}
                      onClick={() => handleFormSubmit(values)}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-dark btn-lg"
                      // disabled={isSubmitting}
                      onClick={() => incrementStep()}
                    >
                      Next
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <br />
      </div>
    );
  }
}
