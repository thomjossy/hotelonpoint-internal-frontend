import { connect, Formik, Form, Field, FieldArray } from "formik";
import React, { Component } from "react";

const initialValues = {
  roomType: "",
  smokingPolicy: "",
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

class AddRoomForm extends Component {
  render() {
    return (
      <div className="container">
        <Formik
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
            <div className="mt-4">
              <Form>
                {/* Begining of Row   */}

                <React.Fragment>
                  <div>
                    <h3>Room Details</h3>
                    <div className="p-3 mb-3 custom-shadow">
                      {/* Begining of Row   */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="roomType">Type of Room</label>
                            <Field
                              type="text"
                              id="roomType"
                              name={`roomType`}
                              placeholder="Eg, Double Deluxe"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="smokingPolicy">
                              Smoking Policy
                            </label>
                            <Field
                              type="text"
                              id="smokingPolicy"
                              name={`smokingPolicy`}
                              placeholder="Eg We don't allow smoking in the room"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      {/* End of Row   */}

                      {/* Begining of Row   */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="roomSize">Size of the Room</label>
                            <Field
                              type="text"
                              id="roomSize"
                              name={`roomSize`}
                              placeholder="20squaremeter"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="bedType">
                              Type of Bed in this Room (Optional)
                            </label>
                            <Field
                              type="text"
                              id="bedType"
                              name={`bedType`}
                              placeholder="Water Bed"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      {/* End of Row   */}

                      {/* Begining of Row   */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="roomsOfThisType">
                              Number of Rooms of this type
                            </label>
                            <Field
                              type="text"
                              id="roomsOfThisType"
                              name={`roomsOfThisType`}
                              placeholder="20"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="bedNumber">
                              Number of Beds in this Room
                            </label>
                            <Field
                              type="text"
                              id="bedNumber"
                              name={`bedNumber`}
                              placeholder="3"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      {/* End of Row   */}

                      {/* Begining of Row   */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="occupantNumber">
                              Number of Guest that can ocuupy this room
                            </label>
                            <Field
                              type="text"
                              id="occupantNumber"
                              name={`occupantNumber`}
                              placeholder="3"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="roomPrice">
                              Price of this Room
                            </label>
                            <Field
                              type="text"
                              id="roomPrice"
                              name={`roomPrice`}
                              placeholder="NGN30,000"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>

                      {/* End of Row   */}

                      {/* Begining of Row   */}
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="weekendRate">
                              Weekend Rate for this Room
                            </label>
                            <Field
                              type="text"
                              id="weekendRate"
                              name={`weekendRate`}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="standardRate">
                              Standard Rate of this Room
                            </label>
                            <Field
                              type="text"
                              id="standardRate"
                              name={`standardRate`}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of Row   */}
                    <h3>Room Amenities</h3>
                    <div className="p-3 mb-3 custom-shadow">
                      <p>
                        <b>
                          Check the amenities you have in this room, to add more
                          amenities click on the more amenities button
                        </b>
                      </p>

                      <div className="form-group">
                        <Field
                          type="checkbox"
                          name={`roomAmenities`}
                          value="spa tub"
                          className="mr-2 "
                          id="spatub"
                        />
                        <label htmlFor="spatub">Spa tub</label>
                        <hr />
                      </div>
                      <div className="form-group">
                        <Field
                          type="checkbox"
                          name={`roomAmenities`}
                          value="Television"
                          className="mr-2 "
                          id="television"
                        />
                        <label htmlFor="television">Television</label>
                        <hr />
                      </div>
                      <div className="form-group">
                        <Field
                          type="checkbox"
                          name={`roomAmenities`}
                          value="Kitchen"
                          className="mr-2 "
                          id="kitchen"
                        />
                        <label htmlFor="kitchen">Kitchen</label>
                        <hr />
                      </div>
                      <div className="form-group">
                        <Field
                          type="checkbox"
                          name={`roomAmenities`}
                          value="Air Conditioner"
                          className="mr-2"
                          id="ac"
                        />
                        <label htmlFor="ac">Air Conditioner</label>
                        <hr />
                      </div>

                      <FieldArray name="moreAmenities">
                        {({ push, remove }) => (
                          <React.Fragment>
                            {values.moreAmenities &&
                              values.moreAmenities.length > 0 &&
                              values.moreAmenities.map((item, idx) => (
                                <div key={`item-${idx}`}>
                                  <label>More Room Amenity</label>
                                  <Field
                                    type="text"
                                    name={`moreAmenities[${idx}].amenity`}
                                    className="form-control"
                                  />
                                </div>
                              ))}

                            <button
                              type="button"
                              className="mb-3 btn btn-sm btn-dark"
                              onClick={() => push({ amenity: "" })}
                            >
                              Add new Amenity
                            </button>
                          </React.Fragment>
                        )}
                      </FieldArray>

                      <br />
                    </div>
                  </div>

                  <div className="p-3 custom-shadow">
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8  ">
                        <button className="btn btn-dark btn-block">
                          Submit
                        </button>
                      </div>
                      <div className="col-md-2"></div>
                    </div>
                  </div>
                </React.Fragment>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    );
  }
}

export default connect(AddRoomForm);
