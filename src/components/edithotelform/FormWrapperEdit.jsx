import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import CircularProgress from "@material-ui/core/CircularProgress";
import HotelFormOne from "./HotelFormOne";
import HotelFormThree from "./HotelFormthree";
import HotelFormTwo from "./HotelFormTwo";
import axios from "axios";
import Spinner from "../images/Spinner.gif";

export default class FormWrapperEdit extends Component {
  state = {
    hotelInfo: {},
    page: 0,
    message: "",
    isSubmitting: false,
    loading: true
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://calm-anchorage-14244.herokuapp.com/hotel/${this.props.match.params.id}`
    );
    this.setState({ hotelInfo: response.data.data.hotel, loading: false });
    console.log("response", response.data.data);
  }

  render() {
    const { hotelInfo } = this.state;
    // console.log(propertyInfo);
    let initialValues;
    if (hotelInfo.propertyInfo !== undefined) {
      initialValues = {
        hotelName: hotelInfo.propertyInfo.hotelName,
        hotelWebsite: hotelInfo.propertyInfo.hotelWebsite,
        contactName: hotelInfo.propertyInfo.contactName,
        starRating: hotelInfo.propertyInfo.starRating,
        country: hotelInfo.propertyInfo.country,
        state: hotelInfo.propertyInfo.state,
        city: hotelInfo.propertyInfo.city,
        zipCode: hotelInfo.propertyInfo.zipCode,
        ispropertyGroup: hotelInfo.propertyInfo.ispropertyGroup,
        compName: hotelInfo.propertyInfo.compName,
        hotelDescription: hotelInfo.propertyInfo.hotelDescription,
        propertyOwner: hotelInfo.managementDetails.propertyOwner,
        propertyOwnerPhoneOne:
          hotelInfo.managementDetails.propertyOwnerPhoneOne,
        propertyOwnerPhoneTwo:
          hotelInfo.managementDetails.propertyOwnerPhoneTwo,
        propOwnerEmail: hotelInfo.managementDetails.propOwnerEmail,
        frontDesk: hotelInfo.managementDetails.frontDesk,
        frontDeskPhoneOne: hotelInfo.managementDetails.frontDeskPhoneOne,
        frontDeskPhoneTwo: hotelInfo.managementDetails.frontDeskPhoneTwo,
        frontDeskEmail: hotelInfo.managementDetails.frontDeskEmail,
        headOfReservationOne: hotelInfo.managementDetails.headOfReservationOne,
        headOfReservationPhoneOne:
          hotelInfo.managementDetails.headOfReservationPhoneOne,
        headOfReservationPhoneTwo:
          hotelInfo.managementDetails.headOfReservationPhoneTwo,
        headOfReservationOneEmail:
          hotelInfo.managementDetails.headOfReservationOneEmail,
        headOfReservationTwo: hotelInfo.managementDetails.headOfReservationTwo,
        headOfReservationTwoPhoneOne:
          hotelInfo.managementDetails.headOfReservationTwoPhoneOne,
        headOfReservationTwoPhoneTwo:
          hotelInfo.managementDetails.headOfReservationTwoPhoneTwo,
        headOfReservationTwoEmail:
          hotelInfo.managementDetails.headOfReservationTwoEmail,
        headOfOperationOne: hotelInfo.managementDetails.headOfOperationOne,
        headOfOperationPhoneOne:
          hotelInfo.managementDetails.headOfOperationPhoneOne,
        headOfOperationPhoneTwo:
          hotelInfo.managementDetails.headOfOperationPhoneTwo,
        headOfOperationOneEmail:
          hotelInfo.managementDetails.headOfOperationOneEmail,
        headOfOperationTwo: hotelInfo.managementDetails.headOfOperationTwo,
        headOfOperationTwoPhoneOne:
          hotelInfo.managementDetails.headOfOperationTwoPhoneOne,
        headOfOperationTwoPhoneTwo:
          hotelInfo.managementDetails.headOfOperationTwoPhoneTwo,
        headOfOperationTwoEmail:
          hotelInfo.managementDetails.headOfOperationTwoEmail,
        smokingPolicy: hotelInfo.hotelPolicy.smokingPolicy,
        paymentMethod: hotelInfo.hotelPolicy.paymentMethod,
        hotelAmenities: hotelInfo.hotelPolicy.hotelAmenities,
        checkIn: hotelInfo.hotelPolicy.checkIn,
        checkOut: hotelInfo.hotelPolicy.checkOut,
        freeBooking: hotelInfo.hotelPolicy.freeBooking,
        paidBooking: hotelInfo.hotelPolicy.paidBooking,
        isBreakfastAvailable: hotelInfo.hotelPolicy.isBreakfastAvailable,
        breakfastPrice: hotelInfo.hotelPolicy.breakfastPrice,
        isShuttleAvailable: hotelInfo.hotelPolicy.isShuttleAvailable,
        shuttlePrice: hotelInfo.hotelPolicy.shuttlePrice,
        moreHotelPolicies: hotelInfo.hotelPolicy.moreHotelPolicies,
        moreHotelAmenities: hotelInfo.hotelPolicy.moreHotelAmenities,
        repApproach: hotelInfo.repApproach
      };
    }

    const hotels = [<HotelFormOne />, <HotelFormThree />, <HotelFormTwo />];

    const incrementStep = () => {
      this.setState({ page: this.state.page + 1 });
    };
    const decrementStep = () => {
      this.setState({ page: this.state.page - 1 });
    };

    const handleFormSubmit = async values => {
      const real = [
        {
          propName: "propertyInfo.hotelName",
          value: values.hotelName
        },
        {
          propName: "propertyInfo.hotelWebsite",
          value: values.hotelWebsite
        },
        {
          propName: "propertyInfo.contactName",
          value: values.contactName
        },
        {
          propName: "propertyInfo.hotelOpenDate",
          value: values.hotelOpenDate
        },
        {
          propName: "propertyInfo.hotelDistance",
          value: values.hotelDistance
        },
        {
          propName: "propertyInfo.starRating",
          value: values.starRating
        },
        {
          propName: "propertyInfo.country",
          value: values.country
        },
        {
          propName: "propertyInfo.state",
          value: values.state
        },
        {
          propName: "propertyInfo.city",
          value: values.city
        },
        {
          propName: "propertyInfo.zipCode",
          value: values.zipCode
        },
        {
          propName: "propertyInfo.ispropertyGroup",
          value: values.ispropertyGroup
        },
        {
          propName: "propertyInfo.compName",
          value: values.compName
        },
        {
          propName: "repApproach",
          value: values.repApproach
        },
        {
          propName: "propertyInfo.hotelDescription",
          value: values.hotelDescription
        },
        {
          propName: "managementDetails.propertyOwner",
          value: values.propertyOwner
        },
        {
          propName: "managementDetails.propertyOwnerPhoneOne",
          value: values.propertyOwnerPhoneOne
        },
        {
          propName: "managementDetails.propertyOwnerPhoneTwo",
          value: values.propertyOwnerPhoneTwo
        },
        {
          propName: "managementDetails.propOwnerEmail",
          value: values.propOwnerEmail
        },
        {
          propName: "managementDetails.frontDesk",
          value: values.frontDesk
        },
        {
          propName: "managementDetails.frontDeskPhoneOne",
          value: values.frontDeskPhoneOne
        },
        {
          propName: "managementDetails.frontDeskPhoneTwo",
          value: values.frontDeskPhoneTwo
        },
        {
          propName: "managementDetails.frontDeskEmail",
          value: values.frontDeskEmail
        },
        {
          propName: "managementDetails.headOfReservationOne",
          value: values.headOfReservationOne
        },
        {
          propName: "managementDetails.headOfReservationPhoneOne",
          value: values.headOfReservationPhoneOne
        },
        {
          propName: "managementDetails.headOfReservationPhoneTwo",
          value: values.headOfReservationPhoneTwo
        },
        {
          propName: "managementDetails.headOfReservationOneEmail",
          value: values.headOfReservationOneEmail
        },
        {
          propName: "managementDetails.headOfReservationTwo",
          value: values.headOfReservationTwo
        },
        {
          propName: "managementDetails.headOfReservationTwoPhoneOne",
          value: values.headOfReservationTwoPhoneOne
        },
        {
          propName: "managementDetails.headOfReservationTwoPhoneTwo",
          value: values.headOfReservationTwoPhoneTwo
        },
        {
          propName: "managementDetails.headOfReservationTwoEmail",
          value: values.headOfReservationTwoEmail
        },
        {
          propName: "managementDetails.headOfOperationOne",
          value: values.headOfOperationOne
        },
        {
          propName: "managementDetails.headOfOperationPhoneOne",
          value: values.headOfOperationPhoneOne
        },
        {
          propName: "managementDetails.headOfOperationPhoneTwo",
          value: values.headOfOperationPhoneTwo
        },
        {
          propName: "managementDetails.headOfOperationOneEmail",
          value: values.headOfOperationOneEmail
        },
        {
          propName: "managementDetails.headOfOperationTwo",
          value: values.headOfOperationTwo
        },
        {
          propName: "managementDetails.headOfOperationTwoPhoneOne",
          value: values.headOfOperationTwoPhoneOne
        },
        {
          propName: "managementDetails.headOfOperationTwoPhoneTwo",
          value: values.headOfOperationTwoPhoneTwo
        },
        {
          propName: "managementDetails.headOfOperationTwoEmail",
          value: values.headOfOperationTwoEmail
        },
        {
          propName: "hotelPolicy.smokingPolicy",
          value: values.smokingPolicy
        },
        {
          propName: "hotelPolicy.paymentMethod",
          value: values.paymentMethod
        },
        {
          propName: "hotelPolicy.hotelAmenities",
          value: values.hotelAmenities
        },
        {
          propName: "hotelPolicy.checkIn",
          value: values.checkIn
        },
        {
          propName: "hotelPolicy.checkOut",
          value: values.checkOut
        },
        {
          propName: "hotelPolicy.freeBooking",
          value: values.freeBooking
        },
        {
          propName: "hotelPolicy.paidBooking",
          value: values.paidBooking
        },
        {
          propName: "hotelPolicy.isBreakfastAvailable",
          value: values.isBreakfastAvailable
        },
        {
          propName: "hotelPolicy.breakfastPrice",
          value: values.breakfastPrice
        },
        {
          propName: "termsAndCondition.contractName",
          value: values.contractName
        },
        {
          propName: "termsAndCondition.confirmRecipientAddress",
          value: values.confirmRecipientAddress
        },
        {
          propName: "termsAndCondition.recipientCountry",
          value: values.recipientCountry
        },
        {
          propName: "termsAndCondition.recipientCity",
          value: values.recipientCity
        },
        {
          propName: "termsAndCondition.recipientState",
          value: values.recipientState
        },
        {
          propName: "termsAndCondition.recipientZipCode",
          value: values.recipientZipCode
        },
        {
          propName: "hotelPolicy.isShuttleAvailable",
          value: values.isShuttleAvailable
        },
        {
          propName: "hotelPolicy.shuttlePrice",
          value: values.shuttlePrice
        },
        {
          propName: "hotelPolicy.isShuttleAvailable",
          value: values.isShuttleAvailable
        },
        {
          propName: "hotelPolicy.shuttlePrice",
          value: values.shuttlePrice
        },
        {
          propName: "registerName",
          value: values.registerName
        },
        {
          propName: "registerAddress",
          value: values.registerAddress
        },
        {
          propName: "registerPhone",
          value: values.registerPhone
        },
        {
          propName: "moreHotelPolicies",
          value: values.moreHotelPolicies
        },
        {
          propName: "moreHotelAmenities",
          value: values.moreHotelAmenities
        }
      ];
      this.setState({ isSubmitting: true });
      try {
        const result = await axios.put(
          `https://calm-anchorage-14244.herokuapp.com/hotel/${this.props.match.params.id}`,
          real
        );
        this.setState({ message: result.data.status, isSubmitting: false });
        toast.success("Successfully Updated");
        console.log("realvalues", real);
        console.log("result", result);
        setTimeout(() => {
          window.location.href = `/hotel/${this.props.match.params.id}`;
        }, 1000);
      } catch (err) {
        this.setState({
          message: err.response.data.error,
          isSubmitting: false
        });
        toast.error("An Unexpected Error Just Ocuured");
      }
    };
    return (
      <>
        <ToastContainer />
        <Formik
          enableReinitialize
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
                    {this.state.loading ? (
                      <div className="center-div">
                        <img src={Spinner} alt="loading..." />
                      </div>
                    ) : (
                      <div>{hotels[this.state.page]}</div>
                    )}

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
