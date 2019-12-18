import React, { Component } from "react";
import { FieldArray, Field, connect } from "formik";

class HotelFormTwo extends Component {
  render() {
    console.log("Hi am props");
    console.log(this.props.formik.values);
    const { moreHotelPolicies, moreHotelAmenities } = this.props.formik.values;
    return (
      <section>
        <div className="container custom-shadow p-4">
          <br />
          <h3>
            Fill in the policies in your hotel, to more policies click on the
            more policy button
          </h3>
          {/*Beginging of Row */}
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="smokingPolicy">Smoking Policy</label>
              <Field
                type="text"
                id="smokingPolicy"
                name="smokingPolicy"
                placeholder="We allow"
                className="custom-field"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="paymentMethod">Accepted Method of Payments</label>
              <br />
              <Field
                type="checkbox"
                id="bankbranch"
                name="paymentMethod"
                value="Bank Branch"
              />
              <label htmlFor="bankbranch">Bank Branch</label>
              <br />
              <Field
                type="checkbox"
                id="internetBanking"
                name="paymentMethod"
                value="Internet Banking"
              />
              <label>Internet Banking</label>
              <br />
              <Field
                type="checkbox"
                id="cash"
                name="paymentMethod"
                value="cash"
              />
              <label htmlFor="cash">Cash</label>
              <br />
              <Field
                type="checkbox"
                id="card"
                name="paymentMethod"
                value="card"
              />
              <label htmlFor="card">Card</label>
              <br />
              <label>Speciy if you support other type of payments</label>
              <Field
                type="text"
                name="otherpaymentMethod"
                className="custom-field"
              />
            </div>
          </div>
          {/*End of Row */}
          <br />
          {/*Beginging of Row */}
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="checkIn">what time can a guest check in</label>
              <Field
                type="time"
                id="checkIn"
                name="checkIn"
                className="custom-field"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor="checkOut">What time can a guest check out</label>
              <Field
                type="time"
                id="checkOut"
                name="checkOut"
                className="custom-field"
              />
            </div>
          </div>
          {/*End of Row */}
          <br />
          {/*Beginging of Row */}
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <label htmlFor="freeBooking">
                How many days can a guest cancel his booking for free
              </label>
              <Field
                type="text"
                id="freeBooking"
                name="freeBooking"
                className="custom-field"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <label htmlFor=" paidBooking">
                If a guest can't cancel his booking during the free cancelation
                hours, how much will he pay for cancelation
              </label>
              <Field
                type="text"
                id="paidBooking"
                name="paidBooking"
                className="custom-field"
              />
            </div>
          </div>
          {/*End of Row */}
          <div className="container">
            <FieldArray name="moreHotelPolicies">
              {({ push, remove }) => (
                <div className="row p-4">
                  {moreHotelPolicies &&
                    moreHotelPolicies.length > 0 &&
                    moreHotelPolicies.map((item, idx) => {
                      return (
                        <div className="col-12">
                          <label>
                            More Hotel Policy
                            <Field
                              type="text"
                              name={`moreHotelPolicies.[${idx}].policy`}
                              className="custom-field"
                            />
                          </label>
                        </div>
                      );
                    })}

                  <br />
                  <br />
                  <div className="row">
                    <button
                      className="btn btn-dark btn-lg"
                      onClick={() => push({ policy: "" })}
                    >
                      More Policy
                    </button>
                  </div>
                  <br />
                </div>
              )}
            </FieldArray>
          </div>
          <div className="container">
            <div className="container">
              <h3>Hotel Amenities</h3>
              <div className="row p-4">
                <p>
                  Tick on the amenities you have in your hotel to add more click
                  on the more Amenity Button
                </p>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <Field
                    type="checkbox"
                    id="swimingpool"
                    name="hotelAmenities"
                    value="Swiming pool"
                    className="mr-1"
                  />
                  <label htmlFor="swimingpool">Swiming Pool</label>
                  <br />
                </div>

                <div className="col-md-4 col-sm-12">
                  <Field
                    type="checkbox"
                    id="wifi"
                    name="hotelAmenities"
                    value="Wifi"
                    className="mr-1"
                  />
                  <label htmlFor="wifi">Wifi</label>
                  <br />
                </div>
                <div className="col-md-4 col-sm-12">
                  <Field
                    type="checkbox"
                    id="garden"
                    name="hotelAmenities"
                    value="garden"
                    className="mr-1"
                  />
                  <label htmlFor="garden">Garden</label>
                  <br />
                </div>
                <div className="col-md-4 col-sm-12">
                  <Field
                    type="checkbox"
                    id="fitneCenter"
                    name="hotelAmenities"
                    value="Fitness Center"
                    className="mr-1"
                  />
                  <label htmlFor="fitneCenter">Fitness Center</label>
                  <br />
                </div>
                <div className="col-md-4 col-sm-12">
                  <Field
                    type="checkbox"
                    id="Restaurant"
                    name="hotelAmenities"
                    value="Restaurant"
                    className="mr-1"
                  />
                  <label htmlFor="Restaurant">Restaurant</label>
                  <br />
                </div>
                <div className="col-md-4 col-sm-12">
                  <Field
                    type="checkbox"
                    id="bar"
                    name="hotelAmenities"
                    value="Bar"
                    className="mr-1"
                  />
                  <label htmlFor="bar">Bar</label>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <FieldArray name="moreHotelAmenities">
            {({ push, remove }) => (
              <React.Fragment>
                {moreHotelAmenities &&
                  moreHotelAmenities.length > 0 &&
                  moreHotelAmenities.map((item, index) => (
                    <div className="col-md-6 col-md-12">
                      <label>More Room Amenity</label>
                      <Field
                        type="text"
                        name={`moreHotelAmenities[${index}].amenity`}
                        className="custom-field"
                        style={{ width: "100%" }}
                      />
                    </div>
                  ))}
                <div className="row mt-3 mx-auto">
                  <button
                    className=" btn btn-dark"
                    onClick={() => push({ amenity: "" })}
                  >
                    Add new Amenity
                  </button>
                </div>
              </React.Fragment>
            )}
          </FieldArray>
        </div>
      </section>
    );
  }
}

export default connect(HotelFormTwo);
