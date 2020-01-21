import { connect, Field, FieldArray } from "formik";
import React, { Component } from "react";
// import "./upload.css";

class HotelFormTwo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      moreHotelPolicies,
      moreHotelAmenities,
      isBreakfastAvailable,
      isShuttleAvailable
    } = this.props.formik.values;
    return (
      <section>
        <div className="container bigd">
          <br />
          <div className="mb-3 p-4 custom-shadow">
            <h3>Hotel Policies</h3>
            <p>
              To add a new policy click on the Submit Policy button, then add
              the title of a policy and its description in the field provided
            </p>
            {/*Beginging of Row */}
            <div className="row">
              {this.props.formik.isBreakfastAvailable === undefined ? null : (
                <div className="col-md-6">
                  {isBreakfastAvailable === "Yes, Paid" ? (
                    <div className="form-group">
                      <label htmlFor="breakfastPrice">
                        How much do you charge for breakfast?
                      </label>
                      <Field
                        type="text"
                        className="form-control"
                        id="breakfastPrice"
                        name="breakfastPrice"
                      />
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            <br />

            {/*End of Row */}
            {/*Beginging of Row */}
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="isShuttleAvailable">
                    Is Airport Shuttle available?
                  </label>
                  <Field
                    as="select"
                    className="form-control"
                    id="isShuttleAvailable"
                    name="isShuttleAvailable"
                  >
                    <option value="No">No</option>
                    <option value="Yes, free">Yes, free</option>
                    <option value="Yes, but paid">Yes, but paid</option>
                  </Field>
                </div>
              </div>
              <div className="col-md-6">
                {isShuttleAvailable === "Yes, but paid" ? (
                  <div className="form-group">
                    <label htmlFor="shuttlePrice">
                      How much do you charge for the shuttle?
                    </label>
                    <Field
                      type="text"
                      className="form-control"
                      id="shuttlePrice"
                      name="shuttlePrice"
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <br />

            {/*End of Row */}
            <br />
            {/*Beginging of Row */}
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <label htmlFor="checkIn">What time can a guest check in?</label>
                <Field
                  type="time"
                  id="checkIn"
                  name="checkIn"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label htmlFor="checkOut">
                  What time can a guest check out?
                </label>
                <Field
                  type="time"
                  id="checkOut"
                  name="checkOut"
                  className="form-control"
                />
              </div>
            </div>
            {/*End of Row */}
            <br />
            {/*Beginging of Row */}
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <label htmlFor="freeBooking">
                  How many hours can a guest cancel his booking for free?
                </label>
                <Field
                  type="text"
                  id="freeBooking"
                  name="freeBooking"
                  placeholder="24 Hours"
                  className="form-control"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <label htmlFor=" paidBooking">
                  If a guest can't cancel his booking during the free
                  cancellation hours, how much will he pay for cancellation?
                </label>
                <Field
                  type="text"
                  id="paidBooking"
                  name="paidBooking"
                  className="form-control"
                />
              </div>
            </div>
            {/*End of Row */}

            <FieldArray name="moreHotelPolicies">
              {({ push, remove }) => (
                <>
                  <div className="row">
                    {moreHotelPolicies &&
                      moreHotelPolicies.length > 0 &&
                      moreHotelPolicies.map((item, idx) => {
                        return (
                          <div key={`${item}-${idx}`} className="col-12">
                            <label>Add more title of Policy</label>
                            <Field
                              type="text"
                              name={`moreHotelPolicies.[${idx}].policyTitle`}
                              className="form-control"
                            />
                            <label>Description of Policy</label>
                            <Field
                              as="textarea"
                              name={`moreHotelPolicies.[${idx}].policyDescription`}
                              className="form-control"
                              max="100"
                            />{" "}
                            <button
                              style={{ marginTop: 10, marginBottom: 10 }}
                              className=" btn btn-sm btn-danger col-4"
                              onClick={() => remove({ idx })}
                            >
                              Delete
                            </button>
                          </div>
                        );
                      })}
                  </div>
                  <div className="row">
                    <button
                      style={{ marginTop: 10, marginBottom: 10 }}
                      className="btn btn-dark"
                      onClick={() =>
                        push({ policyTitle: "", policyDescription: "" })
                      }
                    >
                      Submit Policy
                    </button>
                  </div>
                </>
              )}
            </FieldArray>
          </div>

          <div className="mb-3 p-3 custom-shadow">
            <div className="row">
              <div className="col-md-6">
                <h5 htmlFor="paymentMethod">Accepted Method of Payments</h5>

                <br />
                <Field
                  type="checkbox"
                  id="internetBanking"
                  name="paymentMethod"
                  value="Internet Banking"
                />
                <label id="internetBanking" style={{ marginLeft: 10 }}>
                  Bank Transfer
                </label>
                <br />
                <Field
                  type="checkbox"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                />
                <label htmlFor="cash" style={{ marginLeft: 10 }}>
                  Cash
                </label>
                <br />
                <Field
                  type="checkbox"
                  id="card"
                  name="paymentMethod"
                  value="ATM Card/POS"
                />
                <label htmlFor="card" style={{ marginLeft: 10 }}>
                  ATM Card/POS
                </label>
                <br />
              </div>
            </div>
          </div>

          <div className="p-3 custom-shadow">
            <h3>Hotel Amenities</h3>
            <p>
              Tick on the amenities you have in your hotel to add more click on
              the more Amenity Button
            </p>

            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="swimmingpool"
                  name="hotelAmenities"
                  value="Swimming pool"
                  className="mr-1"
                />
                <label htmlFor="swimmingpool" style={{ marginRight: 10 }}>
                  Swimming Pool
                </label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="wifi"
                  name="hotelAmenities"
                  value="Wifi"
                  className="mr-1"
                />
                <label htmlFor="wifi">Wifi</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="garden"
                  name="hotelAmenities"
                  value="garden"
                  className="mr-1"
                />
                <label htmlFor="garden">Garden</label>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="fitneCenter"
                  name="hotelAmenities"
                  value="Fitness Center"
                  className="mr-1"
                />
                <label htmlFor="fitneCenter">Fitness Center</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="Restaurant"
                  name="hotelAmenities"
                  value="Restaurant"
                  className="mr-1"
                />
                <label htmlFor="Restaurant">Restaurant</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="bar"
                  name="hotelAmenities"
                  value="Bar"
                  className="mr-1"
                />
                <label htmlFor="bar">Bar</label>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="terrace"
                  name="hotelAmenities"
                  value="Terrace"
                  className="mr-1"
                />
                <label htmlFor="terrace">Terrace</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="spa"
                  name="hotelAmenities"
                  value="Spa"
                  className="mr-1"
                />
                <label htmlFor="spa">Spa</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="roomService"
                  name="hotelAmenities"
                  value="Room Service"
                  className="mr-1"
                />
                <label htmlFor="roomService">Room Service</label>
                <hr />
              </div>
            </div>
            {/* Begining of Row */}

            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="Sauna"
                  name="hotelAmenities"
                  value="Sauna"
                  className="mr-1"
                />
                <label htmlFor="Sauna">Sauna</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="airportShuttle"
                  name="hotelAmenities"
                  value="Airport Shuttle"
                  className="mr-1"
                />
                <label htmlFor="airportShuttle">Airpot Shuttle</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="familyRoom"
                  name="hotelAmenities"
                  value="Family Room"
                  className="mr-1"
                />
                <label htmlFor="familyRoom">Family Room</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}
            {/* Begining of Row */}

            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="hottub"
                  name="hotelAmenities"
                  value="Hot tub/Jacuzzi"
                  className="mr-1"
                />
                <label htmlFor="hottub">Hot tub/Jacuzzi</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="waterPark"
                  name="hotelAmenities"
                  value="Water Park"
                  className="mr-1"
                />
                <label htmlFor="waterPark">Water Park</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="AC"
                  name="hotelAmenities"
                  value="Air Conditioning"
                  className="mr-1"
                />
                <label htmlFor="AC">Air Conditioning</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}
            {/* Begining of Row */}

            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="Electric"
                  name="hotelAmenities"
                  value="Electric Vehicle Charging Station"
                  className="mr-1"
                />
                <label htmlFor="Electric">
                  Electric Vehicle Charging Station
                </label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="non-smoking-floor"
                  name="hotelAmenities"
                  value="Non-Smoking Floor"
                  className="mr-1"
                />
                <label htmlFor="non-smoking-floor">Non-Smoking Floor</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="smoking-floor"
                  name="hotelAmenities"
                  value="Smoking Floor"
                  className="mr-1"
                />
                <label htmlFor="smoking-floor">Smoking Floor</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}
            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="currency-exchange"
                  name="hotelAmenities"
                  value="Currency Exchange "
                  className="mr-1"
                />
                <label htmlFor="currency-exchange">Currency Exchange</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="front-desk"
                  name="hotelAmenities"
                  value="Front Desk (24Hours)"
                  className="mr-1"
                />
                <label htmlFor="front-desk">Front Desk (24Hours)</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="morning-call"
                  name="hotelAmenities"
                  value="Morning Call"
                  className="mr-1"
                />
                <label htmlFor="morning-call">Morning Call</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}

            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="gym"
                  name="hotelAmenities"
                  value="GYM"
                  className="mr-1"
                />
                <label htmlFor="gym">GYM</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="hot-spring"
                  name="hotelAmenities"
                  value="Hot Spring"
                  className="mr-1"
                />
                <label htmlFor="hot-spring">Hot Spring</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="elevator"
                  name="hotelAmenities"
                  value="Elevator"
                  className="mr-1"
                />
                <label htmlFor="elevator">Elevator</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}

            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="audio-system"
                  name="hotelAmenities"
                  value="Audio System"
                  className="mr-1"
                />
                <label htmlFor="audio-system">Audio System</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="newspaper"
                  name="hotelAmenities"
                  value="Newspaper in lobby"
                  className="mr-1"
                />
                <label htmlFor="newspaper">Newspaper in lobby</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="cctv"
                  name="hotelAmenities"
                  value="CCTV in Public Places"
                  className="mr-1"
                />
                <label htmlFor="cctv">CCTV in Public Places</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}

            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="concierge"
                  name="hotelAmenities"
                  value="Concierge Service"
                  className="mr-1"
                />
                <label htmlFor="concierge">Concierge Service</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="postal"
                  name="hotelAmenities"
                  value="Postal Services"
                  className="mr-1"
                />
                <label htmlFor="postal">Postal Services</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="ticket-counter"
                  name="hotelAmenities"
                  value="Attraction Ticket Counter"
                  className="mr-1"
                />
                <label htmlFor="ticket-counter">
                  Attraction Ticket Counter
                </label>
                <hr />
              </div>
            </div>
            {/*End of Row */}

            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="duty-manager"
                  name="hotelAmenities"
                  value="Duty Manager"
                  className="mr-1"
                />
                <label htmlFor="duty-manager">Duty Manager</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="free-parking"
                  name="hotelAmenities"
                  value="Free Parking"
                  className="mr-1"
                />
                <label htmlFor="free-parking">Free Parking</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="beauty-salon"
                  name="hotelAmenities"
                  value="Beauty Salon"
                  className="mr-1"
                />
                <label htmlFor="beauty-salon">Beauty Salon</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}

            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="executive-lounge"
                  name="hotelAmenities"
                  value="Executive Lounge"
                  className="mr-1"
                />
                <label htmlFor="executive-lounge">Executive Lounge</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="indoor"
                  name="hotelAmenities"
                  value="Indoor Swimming Pool"
                  className="mr-1"
                />
                <label htmlFor="indoor">Indoor Swimming Pool</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="roof-top"
                  name="hotelAmenities"
                  value="Rooftop Swimming Pool"
                  className="mr-1"
                />
                <label htmlFor="roof-top">Rooftop Swimming Pool</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}

            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="meeting-room"
                  name="hotelAmenities"
                  value="Meeting Room"
                  className="mr-1"
                />
                <label htmlFor="meeting-room">Meeting Room</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="tennis"
                  name="hotelAmenities"
                  value="Tennis"
                  className="mr-1"
                />
                <label htmlFor="tennis">Tennis</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="atm"
                  name="hotelAmenities"
                  value="ATM"
                  className="mr-1"
                />
                <label htmlFor="atm">ATM</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}

            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="photocopy"
                  name="hotelAmenities"
                  value="Fax/Photocopy Service"
                  className="mr-1"
                />
                <label htmlFor="photocopy">Fax/Photocopy Service</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="luggage"
                  name="hotelAmenities"
                  value="Porter Luggage Storage"
                  className="mr-1"
                />
                <label htmlFor="luggage">Porter Luggage Storage</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="car-rental"
                  name="hotelAmenities"
                  value="Car Rental"
                  className="mr-1"
                />
                <label htmlFor="car-rental">Car Rental</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}

            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="bicycle"
                  name="hotelAmenities"
                  value="Bicycle Rental"
                  className="mr-1"
                />
                <label htmlFor="bicycle">Bicycle Rental</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="front-desk-safe"
                  name="hotelAmenities"
                  value="Front Desk Safe"
                  className="mr-1"
                />
                <label htmlFor="front-desk-safe">Front Desk Safe</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="tourist-map"
                  name="hotelAmenities"
                  value="Tourist Map"
                  className="mr-1"
                />
                <label htmlFor="tourist-map">Tourist Map</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}
            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="event-centre"
                  name="hotelAmenities"
                  value="Event Centre"
                  className="mr-1"
                />
                <label htmlFor="event-centre">Event Centre</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="laundry"
                  name="hotelAmenities"
                  value="Laundry Service"
                  className="mr-1"
                />
                <label htmlFor="laundry">Laundry Service</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="ironing-service"
                  name="hotelAmenities"
                  value="Ironing Service"
                  className="mr-1"
                />
                <label htmlFor="ironing-service">Ironing Service</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}
            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="day-care"
                  name="hotelAmenities"
                  value="Day Care Centre"
                  className="mr-1"
                />
                <label htmlFor="day-care">Day Care Centre</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="playground"
                  name="hotelAmenities"
                  value="Children Playground"
                  className="mr-1"
                />
                <label htmlFor="playground">Children Playground</label>
                <hr />
              </div>
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="cinema"
                  name="hotelAmenities"
                  value="Cinema"
                  className="mr-1"
                />
                <label htmlFor="cinema">Cinema</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}
            {/* Begining of Row */}
            <div className="row">
              <div className="form-group col-4">
                <Field
                  type="checkbox"
                  id="night-club"
                  name="hotelAmenities"
                  value="Night Club"
                  className="mr-1"
                />
                <label htmlFor="night-club">Night Club</label>
                <hr />
              </div>
            </div>
            {/*End of Row */}

            <FieldArray name="moreHotelAmenities">
              {({ push, remove }) => (
                <React.Fragment>
                  {moreHotelAmenities &&
                    moreHotelAmenities.length > 0 &&
                    moreHotelAmenities.map((item, index) => (
                      <div key={`${item}-${index}`} className="col-12">
                        <label>More Room Amenity</label>
                        <Field
                          type="text"
                          name={`moreHotelAmenities[${index}].amenity`}
                          className="form-control"
                          style={{ width: "100%" }}
                        />
                        <button
                          style={{ marginTop: 10, marginBottom: 10 }}
                          className=" btn btn-sm btn-danger col-4"
                          onClick={() => remove({ index })}
                        >
                          {" "}
                          Delete
                        </button>
                      </div>
                    ))}

                  <button
                    style={{ marginTop: 10, marginBottom: 10 }}
                    className=" btn btn-sm btn-dark"
                    onClick={() => push({ amenity: "" })}
                  >
                    Add new Amenity
                  </button>
                </React.Fragment>
              )}
            </FieldArray>
          </div>
        </div>
      </section>
    );
  }
}

export default connect(HotelFormTwo);
