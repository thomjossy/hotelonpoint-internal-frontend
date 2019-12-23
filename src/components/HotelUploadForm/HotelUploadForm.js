import { connect, Field, FieldArray } from "formik";
import React, { Component } from "react";

const newRooms = {
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

class HotelUploadForm extends Component {
  render() {
    const { values } = this.props.formik;

    console.log("Hello there");
    console.log(this.props);
    return (
      <div className="container">
        <div>
          <h3 className="text-center">Room and Pricing</h3>
          {/* Begining of Row   */}
          <FieldArray name="rooms">
            {({ push, remove }) => (
              <React.Fragment>
                {values.rooms &&
                  values.rooms.length > 0 &&
                  values.rooms.map((room, index) => (
                    <div>
                      <h3>Room Details</h3>
                      <div className="p-3 mb-3 custom-shadow">
                        {/* Begining of Row   */}
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label htmlFor="smokingPolicy">
                                Smoking Policy
                              </label>
                              <Field
                                type="text"
                                id="smokingPolicy"
                                name={`rooms[${index}].smokingPolicy`}
                                placeholder="Eg We don't allow smoking in the room"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label htmlFor="roomType">Type of Room</label>
                              <Field
                                type="text"
                                id="roomType"
                                name={`rooms[${index}].roomType`}
                                placeholder="Eg, Double Deluxe"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>

                        {/* End of Row   */}

                        {/* Begining of Row   */}
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label htmlFor="roomSize">Size of the Room</label>
                              <Field
                                type="text"
                                id="roomSize"
                                name={`rooms[${index}].roomSize`}
                                placeholder="20squaremeter"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label htmlFor="bedType">
                                Type of Bed in this Room (Optional)
                              </label>
                              <Field
                                type="text"
                                id="bedType"
                                name={`rooms[${index}].bedType`}
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
                            <div class="form-group">
                              <label htmlFor="roomsOfThisType">
                                Number of Rooms of this type
                              </label>
                              <Field
                                type="text"
                                id="roomsOfThisType"
                                name={`rooms[${index}].roomsOfThisType`}
                                placeholder="20"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label htmlFor="bedNumber">
                                Number of Beds in this Room
                              </label>
                              <Field
                                type="text"
                                id="bedNumber"
                                name={`rooms[${index}].bedNumber`}
                                placeholder="2"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>

                        {/* End of Row   */}

                        {/* Begining of Row   */}
                        <div className="row">
                          <div className="col-md-6">
                            <div class="form-group">
                              <label htmlFor="occupantNumber">
                                Number of Guest that can ocuupy this room
                              </label>
                              <Field
                                type="text"
                                id="occupantNumber"
                                name={`rooms[${index}].occupantNumber`}
                                placeholder="3"
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label htmlFor="roomPrice">
                                Price of this Room
                              </label>
                              <Field
                                type="text"
                                id="roomPrice"
                                name={`rooms[${index}].roomPrice`}
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
                            <div class="form-group">
                              <label htmlFor="weekendRate">
                                Weekend Rate for this Room
                              </label>
                              <Field
                                type="text"
                                id="weekendRate"
                                name={`rooms[${index}].weekendRate`}
                                className="form-control"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div class="form-group">
                              <label htmlFor="standardRate">
                                Standard Rate of this Room
                              </label>
                              <Field
                                type="text"
                                id="standardRate"
                                name={`rooms[${index}].standardRate`}
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
                            Check the amenities you have in this room, to add
                            more amenities click on the more amenities button
                          </b>
                        </p>

                        <div class="form-group">
                          <Field
                            type="checkbox"
                            name={`rooms[${index}].roomAmenities[${index}]`}
                            value="spa tub"
                            className="mr-2 "
                            id="spatub"
                          />
                          <label htmlFor="spatub">Spa tub</label>
                          <hr />
                        </div>
                        <div class="form-group">
                          <Field
                            type="checkbox"
                            name={`rooms[${index}].roomAmenities[${index}]`}
                            value="Television"
                            className="mr-2 "
                            id="television"
                          />
                          <label htmlFor="television">Television</label>
                          <hr />
                        </div>
                        <div class="form-group">
                          <Field
                            type="checkbox"
                            name={`rooms[${index}].roomAmenities[${index}]`}
                            value="Kitchen"
                            className="mr-2 "
                            id="kitchen"
                          />
                          <label htmlFor="kitchen">Kitchen</label>
                          <hr />
                        </div>
                        <div class="form-group">
                          <Field
                            type="checkbox"
                            name={`rooms[${index}].roomAmenities[${index}]`}
                            value="Air Conditioner"
                            className="mr-2"
                            id="ac"
                          />
                          <label htmlFor="ac">Air Conditioner</label>
                          <hr />
                        </div>

                        <FieldArray name={`rooms[${index}].moreAmenities`}>
                          {({ push, remove }) => (
                            <React.Fragment>
                              {values.rooms[index].moreAmenities &&
                                values.rooms[index].moreAmenities.length > 0 &&
                                values.rooms[index].moreAmenities.map(
                                  (item, idx) => (
                                    <div>
                                      <label>More Room Amenity</label>
                                      <Field
                                        type="text"
                                        name={`rooms[${index}].moreAmenities[${idx}].amenity`}
                                        className="form-control"
                                      />
                                    </div>
                                  )
                                )}

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

                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => remove(index)}
                          disabled={values.rooms.length === 1}
                        >
                          Delete Rooms
                        </button>
                      </div>
                    </div>
                  ))}

                <div className="p-3 custom-shadow">
                  <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8  ">
                      <button
                        type="button"
                        className="btn btn-dark btn-block"
                        onClick={() => push(newRooms)}
                      >
                        Add Room
                      </button>
                    </div>
                    <div className="col-md-2"></div>
                  </div>
                </div>
              </React.Fragment>
            )}
          </FieldArray>
        </div>
      </div>
    );
  }
}

export default connect(HotelUploadForm);
