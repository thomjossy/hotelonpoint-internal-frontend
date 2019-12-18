import React from "react";
import { FieldArray, Field } from "formik";

export default function HotelFormFour() {
  return (
    <div>
      <div className="container p-5 custom-shadow">
        <h3>Room Details</h3>
        {/* Begining of Row   */}
        <FieldArray name="rooms">
          {({ push, remove }) => (
            <React.Fragment>
              {values.rooms &&
                values.rooms.length > 0 &&
                values.rooms.map((room, index) => (
                  <div className="container">
                    {/* Begining of Row   */}
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="roomName">Name of Room</label>
                          <Field
                            type="text"
                            id="roomName"
                            name={`rooms[${index}].roomName`}
                            placeholder="Presidential"
                            className="custom-field"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="roomType">Type of Room</label>
                          <Field
                            type="text"
                            id="roomType"
                            name={`rooms[${index}].roomType`}
                            placeholder="Executive"
                            className="custom-field"
                          />
                        </div>
                      </div>
                    </div>

                    {/* End of Row   */}

                    {/* Begining of Row   */}
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="roomSize">Size of the Room</label>
                          <Field
                            type="text"
                            id="roomSize"
                            name={`rooms[${index}].roomSize`}
                            placeholder="20ft"
                            className="custom-field"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="bedType">
                            Type of Bed in this Room
                          </label>
                          <Field
                            type="text"
                            id="bedType"
                            name={`rooms[${index}].bedType`}
                            placeholder="Water Bed"
                            className="custom-field"
                          />
                        </div>
                      </div>
                    </div>

                    {/* End of Row   */}

                    {/* Begining of Row   */}
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="roomsOfThisType">
                            Number of Rooms of this type
                          </label>
                          <Field
                            type="text"
                            id="roomsOfThisType"
                            name={`rooms[${index}].roomsOfThisType`}
                            placeholder="20"
                            className="custom-field"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="bedNumber">
                            Number of Beds in this Room
                          </label>
                          <Field
                            type="text"
                            id="bedNumber"
                            name={`rooms[${index}].bedNumber`}
                            placeholder="bedNumber"
                            className="custom-field"
                          />
                        </div>
                      </div>
                    </div>

                    {/* End of Row   */}

                    {/* Begining of Row   */}
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="occupantNumber">
                            Number of Guest that can ocuupy this room
                          </label>
                          <Field
                            type="text"
                            id="occupantNumber"
                            name={`rooms[${index}].occupantNumber`}
                            placeholder="3"
                            className="custom-field"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="roomPrice">Price of this Room</label>
                          <Field
                            type="text"
                            id="roomPrice"
                            name={`rooms[${index}].roomPrice`}
                            placeholder="$300"
                            className="custom-field"
                          />
                        </div>
                      </div>
                    </div>

                    {/* End of Row   */}

                    {/* Begining of Row   */}
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="weekendRate">
                            Weekend Rate for this Room
                          </label>
                          <Field
                            type="text"
                            id="weekendRate"
                            name={`rooms[${index}].weekendRate`}
                            className="custom-field"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
                        <div class="form-group">
                          <label htmlFor="standardRate">
                            Standard Rate of this Room
                          </label>
                          <Field
                            type="text"
                            id="standardRate"
                            name={`rooms[${index}].standardRate`}
                            className="custom-field"
                          />
                        </div>
                      </div>
                    </div>

                    {/* End of Row   */}
                    <br />

                    <div className="row">
                      <div className="col">
                        <h3>Room Amenities</h3>
                        <p>
                          Check the amenities you have in this room, to add more
                          amenities click on the more amenities button
                        </p>
                        <br />

                        <div className="col-md-6 col-sm-12">
                          <div class="form-group">
                            <Field
                              type="checkbox"
                              name={`rooms[${index}].roomAmenities[${index}]`}
                              value="spa tub"
                              className="mr-1 "
                              id="spatub"
                            />
                            <label htmlFor="spatub">Spa tub</label>
                          </div>
                          <div class="form-group">
                            <Field
                              type="checkbox"
                              name={`rooms[${index}].roomAmenities[${index}]`}
                              value="Television"
                              className="mr-1 "
                              id="television"
                            />
                            <label htmlFor="television">Television</label>
                          </div>
                          <div class="form-group">
                            <Field
                              type="checkbox"
                              name={`rooms[${index}].roomAmenities[${index}]`}
                              value="Kitchen"
                              className="mr-1 "
                              id="kitchen"
                            />
                            <label htmlFor="kitchen">Kitchen</label>
                          </div>
                          <div class="form-group">
                            <Field
                              type="checkbox"
                              name={`rooms[${index}].roomAmenities[${index}]`}
                              value="Air Conditioner"
                              className="mr-1"
                              id="ac"
                            />
                            <label htmlFor="ac">Air Conditioner</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-12">
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
                                        className="custom-field"
                                      />
                                    </div>
                                  )
                                )}
                              <div className="row mt-3 mx-auto">
                                <button
                                  type="button"
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
                      <br />
                    </div>

                    <div className="row">
                      <button
                        type="button"
                        className="btn btn-dark btn-lg  m-2"
                        onClick={() => remove(index)}
                      >
                        Delete Rooms
                      </button>
                    </div>
                    <br />
                  </div>
                ))}

              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12 ">
                    <button
                      type="button"
                      className="btn btn-dark btn-lg m-2"
                      onClick={() => push(newRooms)}
                    >
                      Add Rooms
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )}
        </FieldArray>
        <br />
      </div>
      <br />

      {/* <HotelFormOne /> */}
    </div>
  );
}
