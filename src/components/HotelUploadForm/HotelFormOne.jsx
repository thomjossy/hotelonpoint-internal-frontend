import { connect, Field, ErrorMessage } from "formik";
import React, { Component } from "react";
import "./upload.css";

class HotelFormOne extends Component {
  validateHotelName = value => {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  };
  render() {
    const { errors, touched } = this.props.formik;
    const { isPropertyGroup } = this.props.formik.values;

    return (
      <div className="container bigd" style={{ fontSize: "14px" }}>
        <h2>Property Information</h2>
        <br />
        {/* Begining of Row   */}
        <div className="p-3 custom-shadow">
          <h4>Basic Property Information</h4>
          {/* Begining of Row   */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="hotelName">
                  What is the name of your property
                </label>
                <Field
                  type="text"
                  className="form-control"
                  id="hotelName"
                  name="hotelName"
                />
                {errors.hotelName && touched.hotelName ? (
                  <div className="text-danger">
                    {<p>This is a Required Field </p>}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="propWebsite">
                  What is the website of your property (optional)
                </label>
                <Field
                  type="url"
                  className="form-control"
                  id="propWebsite"
                  name="hotelWebsite"
                />
              </div>
            </div>
          </div>
          {/* End of Row   */}
          {/* Begining of Row   */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="contactName">Hotel Address </label>
                <Field
                  type="text"
                  className="form-control"
                  id="contactName"
                  name="contactName"
                />
                {errors.contactName && touched.contactName ? (
                  <div className="text-danger">
                    {"This is a Required Field"}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="starRating">Star Rating of you hotel</label>
                <Field
                  as="select"
                  className="form-control"
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
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <Field
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                />
                {errors.country && touched.country ? (
                  <div className="text-danger">
                    {<p>This is a Required Field </p>}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="state">State</label>
                <Field
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                />
                {errors.state && touched.state ? (
                  <div className="text-danger">
                    {<p>This is a Required Field </p>}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          {/* End of Row   */}

          {/* Begining of Row   */}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <Field
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                />
                {errors.city && touched.city ? (
                  <div className="text-danger">
                    {<p>This is a Required Field </p>}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="isPropertyGroup">
                  Is this property part of property management company or group
                </label>
                <Field
                  as="select"
                  className="form-control"
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
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="zipCode">Zip Code</label>
                <Field
                  type="text"
                  className="form-control"
                  id="zipCode"
                  name="zipCode"
                />
                {errors.zipCode && touched.zipCode ? (
                  <div className="text-danger">
                    {
                      <p>
                        This is a Required Field, and must be a numeric value{" "}
                      </p>
                    }
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-md-6">
              {isPropertyGroup === "no" ? null : (
                <div className="form-group">
                  <label htmlFor="compName">
                    What is the name of the property management company or group
                  </label>
                  <Field
                    type="text"
                    className="form-control"
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
            <div className="col-md-6">
              <label htmlFor="hotelDescription">
                A brief description of your company
              </label>
              <Field
                as="textarea"
                name="hotelDescription"
                className="form-control"
                id="hotelDescription"
              />
              <ErrorMessage name="hotelDescription">
                {msg => {
                  return <div className="text-danger">{msg}</div>;
                }}
              </ErrorMessage>
            </div>
            <div className="col-md-6">
              <label htmlFor="repApproach">
                Where you approached by a Hotel On Point staff, if so write
                his/her fullname below
              </label>
              <Field
                type="text"
                name="repApproach"
                className="form-control"
                id="repApproach"
              />
            </div>
          </div>
          {/* End of Row   */}
        </div>
      </div>
    );
  }
}
export default connect(HotelFormOne);
