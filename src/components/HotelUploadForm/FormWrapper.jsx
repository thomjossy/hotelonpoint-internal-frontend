import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import { Form, Formik } from "formik";
import React, { Component } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HotelFormOne from "../HotelUploadForm/HotelFormOne";
import HotelFormThree from "../HotelUploadForm/HotelFormthree";
import HotelFormTwo from "../HotelUploadForm/HotelFormTwo";
import FileUpload from "./FileUpload";
import HotelFormSix from "./HotelFormSix";
import HotelUploadForm from "./HotelUploadForm";
import "./upload.css";

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
      roomType: "",
      smokingPolicy: "",
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
  headOfReservationTwoPhoneOne: "",
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
  isBreakfastAvailable: "",
  breakfastPrice: "",
  contractName: "",
  confirmRecipientAddress: "",
  recipientCountry: "",
  recipientState: "",
  recipientCity: "",
  recipientZipCode: "",
  confirmAgreement: false,
  isShuttleAvailable: "",
  shuttlePrice: "",
  moreHotelPolicies: [
    {
      policyTitle: "",
      policyDescription: ""
    }
  ],
  moreHotelAmenities: [],
  files: []
};

const newRooms = {
  roomType: "",
  smokingPolicy: "",
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
    page: 0,
    message: "",
    isSubmitting: false
  };

  render() {
    const hotels = [
      <HotelFormOne />,
      <HotelFormThree />,
      <HotelFormTwo />,
      <HotelUploadForm />,
      <FileUpload />,
      <HotelFormSix />
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
      form.append("confirmAgreement", values.confirmAgreement);

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
      form.append("isBreakfastAvailable", values.isBreakfastAvailable);
      form.append("breakfastPrice", values.breakfastPrice);
      form.append("contractName", values.contractName);
      form.append("confirmRecipientAddress", values.confirmRecipientAddress);
      form.append("recipientCountry", values.recipientCountry);
      form.append("recipientState", values.recipientState);
      form.append("recipientCity", values.recipientCity);
      form.append("recipientZipCode", values.recipientZipCode);
      form.append("isShuttleAvailable", values.isShuttleAvailable);
      form.append("shuttlePrice", values.shuttlePrice);

      const url = "https://calm-anchorage-14244.herokuapp.com/hotel";
      this.setState({ isSubmitting: true });
      // try {
      //   const result = await axios.post(url, form);
      //   this.setState({ message: result.data.status, isSubmitting: false });
      //   toast.success(this.state.message);
      //   setTimeout(() => {
      //     history.push("/");
      //   }, 800);
      // } catch (err) {
      //   this.setState({
      //     message: err.response.data.error,
      //     isSubmitting: false
      //   });
      //   toast.error(this.state.message);
      // }
    };
    return (
      <>
        <ToastContainer />
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
            <div className="container ">
              <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                  <Form>
                    <div>{hotels[this.state.page]}</div>
                    <br />
                    <div className="row">
                      <div className="col-md-6">
                        <button
                          type="button"
                          href="#top"
                          className="btn btn-dark btn-block"
                          disabled={this.state.page === 0}
                          onClick={() => decrementStep()}
                        >
                          Back
                        </button>
                      </div>
                      <div className="col-md-6">
                        {this.state.page === hotels.length - 1 ? (
                          values.confirmAgreement ? (
                            <button
                              type="submit"
                              className="btn btn-primary btn-block"
                              disabled={this.state.isSubmitting}
                              onClick={() => handleFormSubmit(values)}
                            >
                              Submit
                              {this.state.isSubmitting && (
                                <CircularProgress size={30} />
                              )}
                            </button>
                          ) : null
                        ) : (
                          <button
                            type="button"
                            href="#top"
                            className="btn btn-dark btn-block"
                            onClick={() => incrementStep()}
                          >
                            Next
                          </button>
                        )}
                      </div>
                    </div>
                  </Form>
                </div>
                <div className="col-md-1"></div>
              </div>
            </div>
          )}
        </Formik>
      </>
    );
  }
}
