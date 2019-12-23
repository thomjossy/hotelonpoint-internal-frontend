import React, { Component } from "react";
import axios from "axios";

export default class HotelDetailsPage extends Component {
  state = {
    hotel: {}
  };

  getHotel = async () => {
    const promise = await axios.get(
      `https://calm-anchorage-14244.herokuapp.com/hotel/${this.props.match.params.id}`
    );
    const { data } = await promise;
    this.setState({ hotel: data.data });
  };
  componentDidMount() {
    this.getHotel();
  }

  render(props) {
    console.log("From state Result", this.state.hotel);
    console.log("From state Result", this.props);
    const {
      propertyInfo,
      managementDetails,
      hotelPolicy,
      imageUrl,
      rooms
    } = this.state.hotel;
    return (
      <section className="container mx-auto">
        <div className="property-information-div">
          <h3>{propertyInfo && propertyInfo.hotelName}</h3>
          <div className="hotel-images-div"></div>

          <h5>Property Information</h5>
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
          <h5 className="light-font">Mangement Details</h5>
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
              <p className="second-gold">Head of Operations One Information</p>
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
              <p className="second-gold">Head of Operations Two Information</p>
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
          <h5 className="light-font">Hotel Policies</h5>
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

          <h5 className="light-font">More Hotel Policies</h5>
          <p className="no-bullets">
            {hotelPolicy &&
              hotelPolicy.moreHotelPolicies.map((item, index) => {
                return (
                  <div>
                    <p key={index}>{item.policy}</p>
                  </div>
                );
              })}
          </p>
        </div>
      </section>
    );
  }
}
