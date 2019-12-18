import React, { Component } from "react";
import { Field, connect } from "formik";

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
  moreAmenities: []
};

class HotelFormOne extends Component {
  render() {
    const { isPropertyGroup } = this.props.formik.values;
    return (
      <div className="container" style={{ fontSize: "14px" }}>
        <br />
        <div>
          <div className="container ">
            {/* Begining of Row   */}
            <div className="container p-5 custom-shadow">
              <h1>Property Information</h1>
              <br />
              <h3>Basic Property Information</h3>
              {/* Begining of Row   */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label htmlFor="hotelName">
                      What is the name of your property
                    </label>
                    <Field
                      type="text"
                      className="custom-field"
                      id="hotelName"
                      name="hotelName"
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      This name wiil appear on the result when users search for
                      your property
                    </small>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label htmlFor="propWebsite">
                      What is the website of your property (optional)
                    </label>
                    <Field
                      type="url"
                      className="custom-field"
                      id="propWebsite"
                      name="hotelWebsite"
                    />
                  </div>
                </div>
              </div>
              {/* End of Row   */}
              {/* Begining of Row   */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label htmlFor="contactName">
                      Contact Name of the Hotel
                    </label>
                    <Field
                      type="text"
                      className="custom-field"
                      id="contactName"
                      name="contactName"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label htmlFor="starRating">Star Rating of you hotel</label>
                    <Field
                      as="select"
                      className="custom-field"
                      id="starRating"
                      name="starRating"
                    >
                      <option value="1 star">1 Star</option>
                      <option value="2 star">2 Star</option>
                      <option value="3 star">3 Star</option>
                      <option value="4 star">4 Star</option>
                      <option value="5 star">5 Star</option>
                    </Field>
                  </div>
                </div>
              </div>
              {/* End of Row   */}
              {/* Begining of Row   */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label htmlFor="country">Country</label>
                    <Field
                      type="text"
                      className="custom-field"
                      id="country"
                      name="country"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label htmlFor="state">State</label>
                    <Field
                      type="text"
                      className="custom-field"
                      id="state"
                      name="state"
                    />
                  </div>
                </div>
              </div>
              {/* End of Row   */}

              {/* Begining of Row   */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label htmlFor="city">City</label>
                    <Field
                      type="text"
                      className="custom-field"
                      id="city"
                      name="city"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label htmlFor="isPropertyGroup">
                      Is this property part of property management company or
                      group
                    </label>
                    <Field
                      as="select"
                      className="custom-field"
                      id="isPropertyGroup"
                      name="isPropertyGroup"
                    >
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </Field>
                  </div>
                </div>
              </div>
              {/* End of Row   */}

              {/* Begining of Row   */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div class="form-group">
                    <label htmlFor="zipCode">Zip Code</label>
                    <Field
                      type="text"
                      className="custom-field"
                      id="zipCode"
                      name="zipCode"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  {isPropertyGroup === "no" ? null : (
                    <div class="form-group">
                      <label htmlFor="compName">
                        What is the name of the property management company or
                        group
                      </label>
                      <Field
                        type="text"
                        className="custom-field"
                        id="compName"
                        name="compName"
                      />
                    </div>
                  )}
                </div>
              </div>
              {/* End of Row   */}

              {/* Begining of Row   */}
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <label htmlFor="hotelDescription">
                    A brief description of your company
                  </label>
                  <Field
                    as="textarea"
                    name="hotelDescription"
                    className="hotelDescription"
                    id="hotelDescription"
                  />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label htmlFor="repApproach">
                    Where you approached by a Hotel On Point staff, if so write
                    his/her fullname below
                  </label>
                  <Field
                    type="text"
                    name="repApproach"
                    className="custom-field"
                    id="repApproach"
                  />
                </div>
              </div>
              <br />
              <br />
              {/* End of Row   */}
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}
export default connect(HotelFormOne);
