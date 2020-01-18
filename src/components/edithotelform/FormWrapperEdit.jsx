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
        moreHotelAmenities: hotelInfo.hotelPolicy.moreHotelAmenities
      };
    }

    const hotels = [<HotelFormOne />, <HotelFormThree />, <HotelFormTwo />];

    const incrementStep = () => {
      this.setState({ page: this.state.page + 1 });
    };
    const decrementStep = () => {
      this.setState({ page: this.state.page - 1 });
    };

    // const handleFormSubmit = async values => {
    //   const real = [
    //     {
    //       propName: "hotelName",
    //       value: values.hotelName
    //     },
    //     {
    //       propName: "hotelWebsite",
    //       value: values.hotelWebsite
    //     },
    //     {
    //       propName: "contactName",
    //       value: values.contactName
    //     },
    //     {
    //       propName: "starRating",
    //       value: values.starRating
    //     },
    //     {
    //       propName: "country",
    //       value: values.country
    //     },
    //     {
    //       propName: "state",
    //       value: values.state
    //     },
    //     {
    //       propName: "city",
    //       value: values.city
    //     },
    //     {
    //       propName: "zipCode",
    //       value: values.zipCode
    //     },
    //     {
    //       propName: "ispropertyGroup",
    //       value: values.ispropertyGroup
    //     },
    //     {
    //       propName: "compName",
    //       value: values.compName
    //     },
    //     {
    //       propName: "repApproach",
    //       value: values.repApproach
    //     },
    //     {
    //       propName: "hotelDescription",
    //       value: values.hotelDescription
    //     },
    //     {
    //       propName: "propertyOwner",
    //       value: values.propertyOwner
    //     },
    //     {
    //       propName: "propertyOwnerPhoneOne",
    //       value: values.propertyOwnerPhoneOne
    //     },
    //     {
    //       propName: "propertyOwnerPhoneTwo",
    //       value: values.propertyOwnerPhoneTwo
    //     },
    //     {
    //       propName: "propOwnerEmail",
    //       value: values.propOwnerEmail
    //     },
    //     {
    //       propName: "frontDesk",
    //       value: values.frontDesk
    //     },
    //     {
    //       propName: "frontDeskPhoneOne",
    //       value: values.frontDeskPhoneOne
    //     },
    //     {
    //       propName: "frontDeskPhoneTwo",
    //       value: values.frontDeskPhoneTwo
    //     },
    //     {
    //       propName: "frontDeskEmail",
    //       value: values.frontDeskEmail
    //     },
    //     {
    //       propName: "headOfReservationOne",
    //       value: values.headOfReservationOne
    //     },
    //     {
    //       propName: "headOfReservationPhoneOne",
    //       value: values.headOfReservationPhoneOne
    //     },
    //     {
    //       propName: "headOfReservationPhoneTwo",
    //       value: values.headOfReservationPhoneTwo
    //     },
    //     {
    //       propName: "headOfReservationOneEmail",
    //       value: values.headOfReservationOneEmail
    //     },
    //     {
    //       propName: "headOfReservationTwo",
    //       value: values.headOfReservationTwo
    //     },
    //     {
    //       propName: "headOfReservationTwoPhoneOne",
    //       value: values.headOfReservationTwoPhoneOne
    //     },
    //     {
    //       propName: "headOfReservationTwoPhoneTwo",
    //       value: values.headOfReservationTwoPhoneTwo
    //     },
    //     {
    //       propName: "headOfReservationTwoEmail",
    //       value: values.headOfReservationTwoEmail
    //     },
    //     {
    //       propName: "headOfOperationOne",
    //       value: values.headOfOperationOne
    //     },
    //     {
    //       propName: "headOfOperationPhoneOne",
    //       value: values.headOfOperationPhoneOne
    //     },
    //     {
    //       propName: "headOfOperationPhoneTwo",
    //       value: values.headOfOperationPhoneTwo
    //     },
    //     {
    //       propName: "headOfOperationOneEmail",
    //       value: values.headOfOperationOneEmail
    //     },
    //     {
    //       propName: "headOfOperationTwo",
    //       value: values.headOfOperationTwo
    //     },
    //     {
    //       propName: "headOfOperationTwoPhoneOne",
    //       value: values.headOfOperationTwoPhoneOne
    //     },
    //     {
    //       propName: "headOfOperationTwoPhoneTwo",
    //       value: values.headOfOperationTwoPhoneTwo
    //     },
    //     {
    //       propName: "headOfOperationTwoEmail",
    //       value: values.headOfOperationTwoEmail
    //     },
    //     {
    //       propName: "smokingPolicy",
    //       value: values.smokingPolicy
    //     },
    //     {
    //       propName: "paymentMethod",
    //       value: values.paymentMethod
    //     },
    //     {
    //       propName: "hotelAmenities",
    //       value: values.hotelAmenities
    //     },
    //     {
    //       propName: "checkIn",
    //       value: values.checkIn
    //     },
    //     {
    //       propName: "checkOut",
    //       value: values.checkOut
    //     },
    //     {
    //       propName: "freeBooking",
    //       value: values.freeBooking
    //     },
    //     {
    //       propName: "paidBooking",
    //       value: values.paidBooking
    //     },
    //     {
    //       propName: "isBreakfastAvailable",
    //       value: values.isBreakfastAvailable
    //     },
    //     {
    //       propName: "breakfastPrice",
    //       value: values.breakfastPrice
    //     },
    //     {
    //       propName: "contractName",
    //       value: values.contractName
    //     },
    //     {
    //       propName: "confirmRecipientAddress",
    //       value: values.confirmRecipientAddress
    //     },
    //     {
    //       propName: "recipientCountry",
    //       value: values.recipientCountry
    //     },
    //     {
    //       propName: "recipientCity",
    //       value: values.recipientCity
    //     },
    //     {
    //       propName: "recipientState",
    //       value: values.recipientState
    //     },
    //     {
    //       propName: "recipientZipCode",
    //       value: values.recipientZipCode
    //     },
    //     {
    //       propName: "isShuttleAvailable",
    //       value: values.isShuttleAvailable
    //     },
    //     {
    //       propName: "shuttlePrice",
    //       value: values.shuttlePrice
    //     },
    //     {
    //       propName: "isShuttleAvailable",
    //       value: values.isShuttleAvailable
    //     },
    //     {
    //       propName: "shuttlePrice",
    //       value: values.shuttlePrice
    //     },
    //     {
    //       propName: "registerName",
    //       value: values.registerName
    //     },
    //     {
    //       propName: "registerAddress",
    //       value: values.registerAddress
    //     },
    //     {
    //       propName: "registerPhone",
    //       value: values.registerPhone
    //     },
    //     {
    //       propName: "moreHotelPolicies",
    //       value: values.moreHotelPolicies
    //     },
    //     {
    //       propName: "moreHotelAmenities",
    //       value: values.moreHotelAmenities
    //     }
    //   ];
    //   this.setState({ isSubmitting: true });
    //   try {
    //     const result = await axios.put(
    //       `https://calm-anchorage-14244.herokuapp.com/hotel/${this.props.match.params.id}`,
    //       real
    //     );
    //     this.setState({ message: result.data.status, isSubmitting: false });
    //     toast.success("Successfully Updated");
    //     console.log("realvalues", real);
    //     console.log("result", result);
    //     // setTimeout(() => {
    //     //   window.location.href = `/hotel/${this.props.match.params.id}`;
    //     // }, 1000);
    //   } catch (err) {
    //     this.setState({
    //       message: err.response.data.error,
    //       isSubmitting: false
    //     });
    //     toast.error("An Unexpected Error Just Ocuured");
    //   }
    // };
    return (
      <>
        <ToastContainer />
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={
            async values => {
              const real = [
                {
                  propName: "hotelName",
                  value: values.hotelName
                },
                {
                  propName: "hotelWebsite",
                  value: values.hotelWebsite
                },
                {
                  propName: "contactName",
                  value: values.contactName
                },
                {
                  propName: "starRating",
                  value: values.starRating
                },
                {
                  propName: "country",
                  value: values.country
                },
                {
                  propName: "state",
                  value: values.state
                },
                {
                  propName: "city",
                  value: values.city
                },
                {
                  propName: "zipCode",
                  value: values.zipCode
                },
                {
                  propName: "ispropertyGroup",
                  value: values.ispropertyGroup
                },
                {
                  propName: "compName",
                  value: values.compName
                },
                {
                  propName: "repApproach",
                  value: values.repApproach
                },
                {
                  propName: "hotelDescription",
                  value: values.hotelDescription
                },
                {
                  propName: "propertyOwner",
                  value: values.propertyOwner
                },
                {
                  propName: "propertyOwnerPhoneOne",
                  value: values.propertyOwnerPhoneOne
                },
                {
                  propName: "propertyOwnerPhoneTwo",
                  value: values.propertyOwnerPhoneTwo
                },
                {
                  propName: "propOwnerEmail",
                  value: values.propOwnerEmail
                },
                {
                  propName: "frontDesk",
                  value: values.frontDesk
                },
                {
                  propName: "frontDeskPhoneOne",
                  value: values.frontDeskPhoneOne
                },
                {
                  propName: "frontDeskPhoneTwo",
                  value: values.frontDeskPhoneTwo
                },
                {
                  propName: "frontDeskEmail",
                  value: values.frontDeskEmail
                },
                {
                  propName: "headOfReservationOne",
                  value: values.headOfReservationOne
                },
                {
                  propName: "headOfReservationPhoneOne",
                  value: values.headOfReservationPhoneOne
                },
                {
                  propName: "headOfReservationPhoneTwo",
                  value: values.headOfReservationPhoneTwo
                },
                {
                  propName: "headOfReservationOneEmail",
                  value: values.headOfReservationOneEmail
                },
                {
                  propName: "headOfReservationTwo",
                  value: values.headOfReservationTwo
                },
                {
                  propName: "headOfReservationTwoPhoneOne",
                  value: values.headOfReservationTwoPhoneOne
                },
                {
                  propName: "headOfReservationTwoPhoneTwo",
                  value: values.headOfReservationTwoPhoneTwo
                },
                {
                  propName: "headOfReservationTwoEmail",
                  value: values.headOfReservationTwoEmail
                },
                {
                  propName: "headOfOperationOne",
                  value: values.headOfOperationOne
                },
                {
                  propName: "headOfOperationPhoneOne",
                  value: values.headOfOperationPhoneOne
                },
                {
                  propName: "headOfOperationPhoneTwo",
                  value: values.headOfOperationPhoneTwo
                },
                {
                  propName: "headOfOperationOneEmail",
                  value: values.headOfOperationOneEmail
                },
                {
                  propName: "headOfOperationTwo",
                  value: values.headOfOperationTwo
                },
                {
                  propName: "headOfOperationTwoPhoneOne",
                  value: values.headOfOperationTwoPhoneOne
                },
                {
                  propName: "headOfOperationTwoPhoneTwo",
                  value: values.headOfOperationTwoPhoneTwo
                },
                {
                  propName: "headOfOperationTwoEmail",
                  value: values.headOfOperationTwoEmail
                },
                {
                  propName: "smokingPolicy",
                  value: values.smokingPolicy
                },
                {
                  propName: "paymentMethod",
                  value: values.paymentMethod
                },
                {
                  propName: "hotelAmenities",
                  value: values.hotelAmenities
                },
                {
                  propName: "checkIn",
                  value: values.checkIn
                },
                {
                  propName: "checkOut",
                  value: values.checkOut
                },
                {
                  propName: "freeBooking",
                  value: values.freeBooking
                },
                {
                  propName: "paidBooking",
                  value: values.paidBooking
                },
                {
                  propName: "isBreakfastAvailable",
                  value: values.isBreakfastAvailable
                },
                {
                  propName: "breakfastPrice",
                  value: values.breakfastPrice
                },
                {
                  propName: "contractName",
                  value: values.contractName
                },
                {
                  propName: "confirmRecipientAddress",
                  value: values.confirmRecipientAddress
                },
                {
                  propName: "recipientCountry",
                  value: values.recipientCountry
                },
                {
                  propName: "recipientCity",
                  value: values.recipientCity
                },
                {
                  propName: "recipientState",
                  value: values.recipientState
                },
                {
                  propName: "recipientZipCode",
                  value: values.recipientZipCode
                },
                {
                  propName: "isShuttleAvailable",
                  value: values.isShuttleAvailable
                },
                {
                  propName: "shuttlePrice",
                  value: values.shuttlePrice
                },
                {
                  propName: "isShuttleAvailable",
                  value: values.isShuttleAvailable
                },
                {
                  propName: "shuttlePrice",
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
                this.setState({
                  message: result.data.status,
                  isSubmitting: false
                });
                toast.success("Successfully Updated");
                console.log("realvalues", real);
                console.log("result", result);
                // setTimeout(() => {
                //   window.location.href = `/hotel/${this.props.match.params.id}`;
                // }, 1000);
              } catch (err) {
                this.setState({
                  message: err.response.data.error,
                  isSubmitting: false
                });
                toast.error("An Unexpected Error Just Ocuured");
              }
            }
            //
            // console.log("values", JSON.stringify(values, null, 2));
            // setSubmitting(true);
          }
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
                            // onClick={() => handleFormSubmit(values)}
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
