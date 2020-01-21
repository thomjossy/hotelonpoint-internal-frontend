import "react-toastify/dist/ReactToastify.css";

import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import Spinner from "../../images/Spinner.gif";
import axios from "axios";
import { withRouter } from "react-router-dom";

class HotelDetailsPage extends Component {
  state = {
    hotel: {},
    rooms: [],
    loading: true
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://calm-anchorage-14244.herokuapp.com/admin/${this.props.match.params.id}`
    );

    this.setState({ hotel: response.data.Hotel });
    this.setState({ rooms: response.data.Room, loading: false });
  }

  handleApprove = async () => {
    const items = {
      approved: true
    };
    try {
      const promise = await axios.put(
        `https://calm-anchorage-14244.herokuapp.com/admin/approve/${this.props.match.params.id}/`,
        items
      );
      if (promise.data) {
        toast.success("Successfully Approved");
        setTimeout(() => {
          window.location.href = `/admin/approved-hotels`;
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      toast.error(`${err.message}`);
    }
  };

  handleDelete = async () => {
    try {
      const promise = await axios.delete(
        `https://calm-anchorage-14244.herokuapp.com/admin/deleteHotel/${this.props.match.params.id}`
      );
      if (promise.data) {
        toast.success("Successfully Deleted");
        setTimeout(() => {
          window.location.href = `/admin/approved-hotels`;
        }, 1000);
      }
    } catch (err) {
      console.log(err);
      toast.error(`${err.message}`);
    }
  };
  render() {
    const {
      propertyInfo,
      managementDetails,
      hotelPolicy,
      imagerUrl,
      approved
    } = this.state.hotel;

    const { rooms, hotel, loading } = this.state;

    return hotel !== undefined && loading ? (
      <div className="center-div">
        <img src={Spinner} alt="" />
      </div>
    ) : (
      <section className="container mx-auto">
        <ToastContainer />
        <div className="property-information-div">
          <h3>{propertyInfo && propertyInfo.hotelName}</h3>
          <br />
          <div className="hotel-images-div">
            {imagerUrl.map((item, index) => (
              <img
                src={item.url}
                alt="hotel-pics"
                className="single-img"
                key={`${item}-${index}`}
              />
            ))}
          </div>
          <br />
          <h4>Property Information</h4>
          <p>{propertyInfo && propertyInfo.hotelDescription}</p>
          <ul className="no-bullets">
            <li>Contact Name of the Hotel: </li>
            <li>
              Website of the Hotel: &nbsp;
              {propertyInfo && propertyInfo.hotelWebsite}{" "}
            </li>
            <li>
              Star Rating of the Hotel:&nbsp;{" "}
              {propertyInfo && propertyInfo.starRating}
            </li>
            <li>Country: &nbsp;{propertyInfo && propertyInfo.country}</li>
            <li>State: &nbsp;{propertyInfo && propertyInfo.state}</li>
            <li>City: &nbsp;{propertyInfo && propertyInfo.city}</li>
            <li>Zip Code: &nbsp;{propertyInfo && propertyInfo.zipCode}</li>
            <li>Company Name:&nbsp; {propertyInfo && propertyInfo.compName}</li>
          </ul>
        </div>
        <div className="management-details-div">
          <h4 className="">Mangement Details</h4>
          <div className="row">
            <div className="col-md-6">
              <p className="second-gold">Owner's Information</p>
              <ul className="no-bullets">
                <li>
                  Name: &nbsp;
                  {managementDetails && managementDetails.propertyOwner}
                </li>
                <li>
                  Phone Number One: &nbsp;{" "}
                  {managementDetails && managementDetails.propertyOwnerPhoneOne}
                </li>
                <li>
                  Phone Number Two: &nbsp;
                  {managementDetails && managementDetails.propertyOwnerPhoneTwo}
                </li>
                <li>
                  Email: &nbsp;
                  {managementDetails && managementDetails.propertyOwnerEmail}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p className="second-gold">FrontDesk Information</p>
              <ul className="no-bullets">
                <li>
                  Name: &nbsp;
                  {managementDetails && managementDetails.frontDesk}{" "}
                </li>
                <li>
                  Phone Number One: &nbsp;
                  {managementDetails && managementDetails.frontDeskPhoneOne}
                </li>
                <li>
                  Phone Number Two: &nbsp;
                  {managementDetails && managementDetails.frontDeskPhoneTwo}
                </li>
                <li>
                  Email: &nbsp;
                  {managementDetails && managementDetails.frontDeskEmail}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p className="second-gold">Accountant One Information</p>
              <ul className="no-bullets">
                <li>
                  Name: &nbsp;
                  {managementDetails && managementDetails.headOfOperationOne}
                </li>
                <li>
                  Phone Number One: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfOperationPhoneOne}
                </li>
                <li>
                  Phone Number Two: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfOperationPhoneTwo}
                </li>
                <li>
                  Email: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfOperationOneEmail}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p className="second-gold">Accountant Two Information</p>
              <ul className="no-bullets">
                <li>
                  Name: &nbsp;
                  {managementDetails && managementDetails.headOfOperationTwo}
                </li>
                <li>
                  Phone Number One: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfOperationTwoPhoneOne}
                </li>
                <li>
                  Phone Number Two: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfOperationTwoPhoneTwo}
                </li>
                <li>
                  Email: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfOperationTwoEmail}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p className="second-gold">Head of Resevation One Information</p>
              <ul className="no-bullets">
                <li>
                  Name: &nbsp;
                  {managementDetails && managementDetails.headOfReservationOne}
                </li>
                <li>
                  Phone Number One: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfReservationPhoneOne}
                </li>
                <li>
                  Phone Number Two: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfReservationPhoneTwo}
                </li>
                <li>
                  Email: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfReservationOneEmail}
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p className="second-gold">Head of Reservation Two Information</p>
              <ul className="no-bullets">
                <li>
                  Name: &nbsp;
                  {managementDetails && managementDetails.headOfReservationTwo}
                </li>
                <li>
                  Phone Number One: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfReservationTwoPhoneOne}
                </li>
                <li>
                  Phone Number Two: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfReservationTwoPhoneTwo}
                </li>
                <li>
                  Email: &nbsp;
                  {managementDetails &&
                    managementDetails.headOfReservationTwoEmail}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hotel-policy-div">
          <h4 className="">Hotel Policies</h4>
          <ul className="no-bullets">
            <li>
              Guest Checkin Time: &nbsp;
              {hotelPolicy && hotelPolicy.checkIn}
            </li>
            <li>
              Guest Checkout Time: &nbsp;
              {hotelPolicy && hotelPolicy.checkOut}
            </li>
            <li>
              Free Cancelation Period: &nbsp;
              {hotelPolicy && hotelPolicy.freeBooking}
            </li>
            <li>
              Amount for paid Cancelation: &nbsp;
              {hotelPolicy && hotelPolicy.paidBooking}
            </li>
          </ul>

          <h5 className="light-font">Methods of Payment</h5>
          <ul className="no-bullets">
            {hotelPolicy &&
              hotelPolicy.paymentMethod.map((item, index) => {
                return <li key={index}>{JSON.parse(item)}</li>;
              })}
          </ul>

          {hotelPolicy && hotelPolicy.moreHotelPolicies.length > 1 ? (
            <h5 className="light-font">More Hotel Policies</h5>
          ) : null}

          {hotelPolicy &&
            hotelPolicy.moreHotelPolicies.length > 0 &&
            hotelPolicy.moreHotelPolicies.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.policy}</p>
                </div>
              );
            })}
        </div>
        <div>
          {rooms &&
            rooms.length > 0 &&
            rooms.map((item, index) => {
              return (
                <div key={`${item}-${index}`} className="mb-3">
                  <h5>{`Room ${index + 1}  Informations`}</h5>
                  <p>Name of Room: &nbsp; {item.roomType}</p>
                  <p>Size of Room: &nbsp; {item.roomSize}</p>
                  <p>Type of beds in this Room: &nbsp; {item.bedType}</p>
                  <p>Number of beds in this room: &nbsp; {item.bedNumber}</p>
                  <p>
                    Number of rooms of this type: &nbsp; {item.roomsOfThisType}
                  </p>
                  <p>
                    Number of Persons that can occupy this room: &nbsp;{" "}
                    {item.occupantNumber}
                  </p>
                  <p>Price of this room: &nbsp; {item.roomPrice}</p>
                  <p>Weekend Rate of this room: &nbsp; {item.weekendRate}</p>
                  <p>Standard Rate of this room: &nbsp; {item.standardRate}</p>
                  <p>
                    Smoking policy of this room: &nbsp; {item.smokingPolicy}
                  </p>

                  <br />
                  {item.roomAmenities && item.roomAmenities.length > 1 ? (
                    <h5>Room Amenities</h5>
                  ) : null}
                  {item.roomAmenities &&
                    item.roomAmenities.length > 1 &&
                    item.roomAmenities.map((count, idx) => {
                      return (
                        <div key={`${count}-${idx}`}>
                          <p>Room Amenity: &nbsp; {JSON.parse(count)}</p>
                        </div>
                      );
                    })}
                  {item.moreAmenities &&
                    item.moreAmenities.length > 1 &&
                    item.moreAmenities.map((count, idx) => {
                      return (
                        <div key={`${count}-${idx}`}>
                          <p>Room Amenity: &nbsp; {count}</p>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <button
              type="button"
              className="btn btn-dark btn-block"
              onClick={() => this.handleDelete()}
            >
              Delete
            </button>
          </div>
          <div className="col-md-6 mb-3">
            {approved ? null : (
              <button
                type="submit"
                className="btn btn-primary btn-block"
                onClick={() => this.handleApprove()}
              >
                Approve
              </button>
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(HotelDetailsPage);
