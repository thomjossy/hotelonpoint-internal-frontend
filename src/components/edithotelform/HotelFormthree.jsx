import { Field, ErrorMessage, connect } from "formik";
import React, { useEffect } from "react";
// import "./upload.css";

function HotelUploadFormThree({ props }) {
  // const { errors, touched } = props.formik;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container bigd" style={{ fontSize: "14px" }}>
      <section>
        <div className="p-3 custom-shadow">
          <h2>Mangement Details</h2>
          <br />
          <div className="row">
            {/* Begining of Row   */}
            <div className="col-md-6 col-sm-12">
              <h4>Property Owner</h4>
              <div className="form-group">
                <label htmlFor="propertyOwner">Name</label>
                <Field
                  type="text"
                  id="propertyOwner"
                  name="propertyOwner"
                  placeholder="John Doe"
                  className="form-control"
                />
                <ErrorMessage name="propertyOwner">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label htmlFor="propertyOwnerPhoneOne">Phone Number</label>
                <Field
                  type="tel"
                  id="propertyOwnerPhoneOne"
                  name="propertyOwnerPhoneOne"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
                <ErrorMessage name="propertyOwnerPhoneOne">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label htmlFor="propertyOwnerPhoneTwo">
                  Phone Number 2 (Optional)
                </label>
                <Field
                  type="tel"
                  id="propertyOwnerPhoneTwo"
                  name="propertyOwnerPhoneTwo"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="propOwnerEmail">Email</label>
                <Field
                  type="text"
                  id="propOwnerEmail"
                  name="propOwnerEmail"
                  placeholder="jane@email.com"
                  className="form-control"
                />
                <ErrorMessage name="propOwnerEmail">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>
            </div>
            {/* End of Owners info */}
            {/* Begining of Row   */}
            <div className="col-md-6 col-sm-12">
              <h4>Front Desk</h4>
              <div className="form-group">
                <label htmlFor="frontDesk">Name</label>
                <Field
                  type="text"
                  id="frontDesk"
                  name="frontDesk"
                  placeholder="John Doe"
                  className="form-control"
                />
                <ErrorMessage name="frontDesk">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label htmlFor="frontDeskPhoneOne">Phone Number</label>
                <Field
                  type="tel"
                  id="frontDeskPhoneOne"
                  name="frontDeskPhoneOne"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
                <ErrorMessage name="frontDeskPhoneOne">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label htmlFor="frontDeskPhoneTwo">
                  Phone Number 2 (Optional)
                </label>
                <Field
                  type="tel"
                  id="frontDeskPhoneTwo"
                  name="frontDeskPhoneTwo"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="frontDeskEmail">Email</label>
                <Field
                  type="email"
                  id="frontDeskEmail"
                  name="frontDeskEmail"
                  placeholder="jane@email.com"
                  className="form-control"
                />{" "}
                <ErrorMessage name="frontDeskEmail">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>
            </div>
            {/* End of Owners info */}
            {/* End of Row   */}
          </div>
        </div>
        <br />
        <div className="container p-5 custom-shadow">
          <div className="row">
            {/* Begining of Row   */}
            <div className="col-md-6 col-sm-12">
              <h4>Head of Reservation 1</h4>
              <div className="form-group">
                <label htmlFor="headOfReservationOne">Name</label>
                <Field
                  type="tel"
                  id="headOfReservationOne"
                  name="headOfReservationOne"
                  placeholder="John Doe"
                  className="form-control"
                />{" "}
                <ErrorMessage name="headOfReservationOne">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label htmlFor="headOfReservationPhoneOne">Phone Number</label>
                <Field
                  type="tel"
                  id="headOfReservationPhoneOne"
                  name="headOfReservationPhoneOne"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
                <ErrorMessage name="headOfReservationPhoneOne">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label htmlFor="headOfReservationPhoneTwo">
                  Phone Number 2 (Optional)
                </label>
                <Field
                  type="tel"
                  id="headOfReservationPhoneTwo"
                  name="headOfReservationPhoneTwo"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="headOfReservationOneEmail">Email</label>
                <Field
                  type="email"
                  id="headOfReservationOneEmail"
                  name="headOfReservationOneEmail"
                  placeholder="email@email.com"
                  className="form-control"
                />{" "}
                <ErrorMessage name="headOfReservationOneEmail">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>
            </div>

            {/* End of Owners info */}
            {/* Begining of Row   */}
            <div className="col-md-6 col-sm-12">
              <h4>Head of Reservation 2</h4>
              <div className="form-group">
                <label htmlFor="headOfReservationTwo">Name</label>
                <Field
                  type="text"
                  id="headOfReservationTwo"
                  name="headOfReservationTwo"
                  placeholder="John Doe"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="headOfReservationTwoPhoneOne">
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="headOfReservationTwoPhoneOne"
                  name="headOfReservationTwoPhoneOne"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="headOfReservationTwoPhoneTwo">
                  Phone Number 2 (Optional)
                </label>
                <Field
                  type="tel"
                  id="headOfReservationTwoPhoneTwo"
                  name="headOfReservationTwoPhoneTwo"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="headOfReservationTwoEmail">Email</label>
                <Field
                  type="email"
                  id="headOfReservationTwoEmail"
                  name="headOfReservationTwoEmail"
                  placeholder="jane@email.com"
                  className="form-control"
                />
              </div>
            </div>
            {/* End of Owners info */}
            {/* End of Row   */}
          </div>
        </div>
        <br />
        <div className="container p-5 custom-shadow">
          <div className="row">
            {/* Begining of Row   */}
            <div className="col-md-6 col-sm-12">
              <h4>Accountant 1</h4>
              <div className="form-group">
                <label htmlFor="headOfOperationOne">Name</label>
                <Field
                  type="text"
                  id="headOfOperationOne"
                  name="headOfOperationOne"
                  placeholder="John Doe"
                  className="form-control"
                />
                <ErrorMessage name="headOfOperationOne">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>

              <div className="form-group">
                <label htmlFor="headOfOperationPhoneOne">Phone Number 1</label>
                <Field
                  type="tel"
                  id="headOfOperationPhoneOne"
                  name="headOfOperationPhoneOne"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
                <ErrorMessage name="headOfOperationPhoneOne">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label htmlFor="headOfOperationPhoneTwo">
                  Phone Number 2 (Optional)
                </label>
                <Field
                  type="tel"
                  id="headOfOperationPhoneTwo"
                  name="headOfOperationPhoneTwo"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="headOfOperationOneEmail">Email</label>
                <Field
                  type="email"
                  id="headOfOperationOneEmail"
                  name="headOfOperationOneEmail"
                  placeholder="jane@email.com"
                  className="form-control"
                />
                <ErrorMessage name="headOfOperationOneEmail">
                  {msg => {
                    return <div className="text-danger">{msg}</div>;
                  }}
                </ErrorMessage>
              </div>
            </div>
            {/* End of Owners info */}
            {/* Begining of Row   */}
            <div className="col-md-6 col-sm-12">
              <h4>Accountant 2</h4>
              <div className="form-group">
                <label htmlFor="headOfOperationTwo">Name</label>
                <Field
                  type="text"
                  id="headOfOperationTwo"
                  name="headOfOperationTwo"
                  placeholder="John Doe"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="headOfOperationTwoPhoneOne">Phone Number</label>
                <Field
                  type="tel"
                  id="headOfOperationTwoPhoneOne"
                  name="headOfOperationTwoPhoneOne"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="headOfOperationTwoPhoneTwo">
                  Phone Number 2 (Optional)
                </label>
                <Field
                  type="tel"
                  id="headOfOperationTwoPhoneTwo"
                  name="headOfOperationTwoPhoneTwo"
                  placeholder="+234 801 345 6789"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="headOfOperationTwoEmail">Email</label>
                <Field
                  type="email"
                  id="headOfOperationTwoEmail"
                  name="headOfOperationTwoEmail"
                  placeholder="jane@email.com"
                  className="form-control"
                />
              </div>
            </div>
            {/* End of Owners info */}
            {/* End of Row   */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default connect(HotelUploadFormThree);
