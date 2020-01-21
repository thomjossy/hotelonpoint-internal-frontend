import "react-toastify/dist/ReactToastify.css";
import "./upload.css";

import * as Yup from "yup";

import { Form, Formik } from "formik";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import CircularProgress from "@material-ui/core/CircularProgress";
import FileUpload from "./FileUpload";
import HotelFormOne from "../HotelUploadForm/HotelFormOne";
import HotelFormSix from "./HotelFormSix";
import HotelFormThree from "../HotelUploadForm/HotelFormthree";
import HotelFormTwo from "../HotelUploadForm/HotelFormTwo";
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
  hotelOpenDate: new Date(),
  hotelDistance: "",
  isPropertyGroup: "",
  compName: "",
  repApproach: "",
  hotelDescription: "",
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
  registerName: "",
  registerPhone: "",
  registerAddress: "",
  moreHotelPolicies: [
    {
      policyTitle: "",
      policyDescription: ""
    }
  ],
  moreHotelAmenities: [],
  files: []
};

const validationSchema = Yup.object({
  hotelName: Yup.string().required("This field is Required"),
  contactName: Yup.string().required("This field is Required"),
  hotelWebsite: Yup.string().url(),
  country: Yup.string().required("This field is Required"),
  state: Yup.string().required("This field is Required"),
  city: Yup.string().required("This field is Required"),
  zipCode: Yup.number()
    .positive()
    .integer()
    .required("This field is Required"),
  compName: Yup.string(),
  hotelDescription: Yup.string()
    .required("This field is Required")
    .max(200, "Maximum amount of character exceeded")
    .min(50, "Hotel Description should be more than 50 Characters"),
  propertyOwner: Yup.string().required("This field is Required"),
  propertyOwnerPhoneOne: Yup.string().required(
    "This field is Required and enter a valid phone number"
  ),
  propertyOwnerPhoneTwo: Yup.number()
    .positive()
    .integer(),
  propOwnerEmail: Yup.string()
    .required("This field is Required and fill a valid email")
    .email(),
  frontDesk: Yup.string().required("This field is Required"),
  frontDeskPhoneOne: Yup.string().required(
    "This field is Required and enter a valid phone number"
  ),
  frontDeskPhoneTwo: Yup.number()
    .positive()
    .integer(),
  frontDeskEmail: Yup.string()
    .required("This field is Required and fill a valid email")
    .email(),
  headOfReservationOne: Yup.string().required("This field is Required"),
  headOfReservationPhoneOne: Yup.string().required(
    "This field is Required and enter a valid phone number"
  ),
  headOfReservationPhoneTwo: Yup.number()
    .positive()
    .integer(),
  headOfReservationOneEmail: Yup.string()
    .required("This field is Required and fill a valid email")
    .email(),
  headOfReservationTwo: Yup.string(),
  headOfReservationTwoPhoneOne: Yup.number()
    .positive()
    .integer(),
  headOfReservationTwoPhoneTwo: Yup.number()
    .positive()
    .integer(),
  headOfReservationTwoEmail: Yup.string().email(),
  headOfOperationOne: Yup.string().required("This is a required field"),
  headOfOperationPhoneOne: Yup.string().required(
    "This is a required field and enter a valid phone number"
  ),
  headOfOperationPhoneTwo: Yup.number()
    .positive()
    .integer(),
  headOfOperationOneEmail: Yup.string()
    .required("This field is Required and fill a valid email")
    .email(),
  headOfOperationTwo: Yup.string(),
  headOfOperationTwoPhoneOne: Yup.number()
    .positive()
    .integer(),
  headOfOperationTwoPhoneTwo: Yup.number()
    .positive()
    .integer(),
  headOfOperationTwoEmail: Yup.string().email(),
  checkIn: Yup.date(),
  checkOut: Yup.date(),
  freeBooking: Yup.number()
    .integer()
    .positive(),
  paidBooking: Yup.number("Enter Numeric Characters")
    .positive()
    .integer(),
  breakfastPrice: Yup.number()
    .positive()
    .integer(),
  contractName: Yup.string().required("This is a required field"),
  recipientCountry: Yup.string(),
  recipientState: Yup.string(),
  recipientCity: Yup.string(),
  // recipientZipCode: Yup.string()
  //   .integer()
  //   .positive(),
  shuttlePrice: Yup.number()
    .positive()
    .integer()
});
export default class FormWrapper extends Component {
  state = {
    page: 0,
    message: "",
    isSubmitting: false
  };

  render() {
    let progressBarStyles;
    if (this.state.page === 0) {
      progressBarStyles = {
        width: "20%",
        backgroundColor: "#c4bda3",
        height: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        padding: "3px"
      };
    } else if (this.state.page === 1) {
      progressBarStyles = {
        width: "40%",
        backgroundColor: "#c4bda3",
        height: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px"
      };
    } else if (this.state.page === 2) {
      progressBarStyles = {
        width: "60%",
        backgroundColor: "#c4bda3",
        height: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px"
      };
    } else if (this.state.page === 3) {
      progressBarStyles = {
        width: "80%",
        backgroundColor: "#c4bda3",
        height: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px"
      };
    } else {
      progressBarStyles = {
        width: "95%",
        backgroundColor: "#c4bda3",
        height: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px"
      };
    }

    let formMessage;
    if (this.state.page === 0) {
      formMessage = "20";
    } else if (this.state.page === 1) {
      formMessage = "40";
    } else if (this.state.page === 2) {
      formMessage = "60";
    } else if (this.state.page === 3) {
      formMessage = "80";
    } else {
      formMessage = "99";
    }

    const urlQuery = window.location.search;
    const urlParams = new URLSearchParams(urlQuery);
    const token = urlParams.get("id");
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("JWT_TOKEN", `Bearer ${token}`);
      window.location.href = "/add-property";
    }

    const hotels = [
      <HotelFormOne />,
      <HotelFormThree />,
      <HotelFormTwo />,
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
      const form = new FormData();

      for (let x = 0; x < values.files.length; x++) {
        form.append("image", values.files[x]);
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
      form.append("hotelOpenDate", values.hotelOpenDate);
      form.append("hotelDistance", values.hotelDistance);
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
      form.append("registerName", values.registerName);
      form.append("registerAddress", values.registerAddress);
      form.append("registerPhone", values.registerPhone);

      const url = "https://calm-anchorage-14244.herokuapp.com/hotel";
      this.setState({ isSubmitting: true });
      try {
        const result = await axios.post(url, form);
        this.setState({ message: result.data.status, isSubmitting: false });
        toast.success(this.state.message);

        setTimeout(() => {
          window.location.href = `/hotel/${result.data.data._id}/rooms/addroom`;
          // history.push("/");
        }, 1000);
      } catch (err) {
        this.setState({
          message: err.response.data.error,
          isSubmitting: false
        });
        toast.error(this.state.message);
      }
    };
    return (
      <>
        <ToastContainer />
        <Formik
          validateOnChange={true}
          validateOnBlur={true}
          initialValues={initialValues}
          validationSchema={validationSchema}
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
                    <div className=" p-1 progress-div">
                      <div style={progressBarStyles}></div>{" "}
                      <h5 className="text-center progress-text">
                        {formMessage}%
                      </h5>
                    </div>

                    <div>{hotels[this.state.page]}</div>

                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <button
                          type="button"
                          className="btn btn-dark btn-block"
                          disabled={this.state.page === 0}
                          onClick={() => decrementStep()}
                        >
                          Back
                        </button>
                      </div>
                      <div className="col-md-6 mb-2">
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
