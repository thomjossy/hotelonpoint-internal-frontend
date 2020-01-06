import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import RoomFileUpload from "./fileUpload/RoomFileUpload";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  roomType: "",
  smokingPolicy: "",
  roomSize: "",
  roomsOfThisType: 0,
  bedType: "",
  bedNumber: "",
  weekendRate: 0,
  standardRate: 0,
  occupantNumber: 0,
  roomPrice: "",
  roomAmenities: [],
  moreAmenities: [],
  files: []
};

const validationSchema = Yup.object({
  roomType: Yup.string().required("This field is Required"),
  roomSize: Yup.string().required("This field is Required"),
  roomsOfThisType: Yup.number()
    .positive()
    .integer()
    .required("This field is Required"),
  bedNumber: Yup.number()
    .positive()
    .integer()
    .required("This field is Required"),
  weekendRate: Yup.number()
    .positive()
    .integer()
    .required("This field is Required"),
  standardRate: Yup.number()
    .positive()
    .integer()
    .required("This field is Required"),
  roomPrice: Yup.string().required("This field is Required")
});

class AddRoomForm extends Component {
  render() {
    const hotelID = this.props.match.params.id;
    return (
      <div className="container">
        <ToastContainer />
        <Formik
          validateOnChange={true}
          validateOnBlur={true}
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={async values => {
            const form = new FormData();

            for (let x = 0; x < values.files.length; x++) {
              form.append("image", values.files[x]);
            }
            for (let x = 0; x < values.moreAmenities.length; x++) {
              form.append(
                "moreAmenities",
                JSON.stringify(values.moreAmenities[x])
              );
            }
            for (let x = 0; x < values.roomAmenities.length; x++) {
              form.append(
                "roomAmenities",
                JSON.stringify(values.roomAmenities[x])
              );
            }
            form.append("roomType", values.roomType);
            form.append("roomSize", values.roomSize);
            form.append("roomPrice", values.roomPrice);
            form.append("smokingPolicy", values.smokingPolicy);
            form.append("roomsOfThisType", values.roomsOfThisType);
            form.append("bedNumber", values.bedNumber);
            form.append("weekendRate", values.weekendRate);
            form.append("standardRate", values.standardRate);
            form.append("occupantNumber", values.occupantNumber);
            form.append("bedType", values.bedType);
            const url = `http://localhost:3400/room/${hotelID}`;
            console.log(values);
            console.log(form.get("moreAmenities"));
            console.log(form.get("roomType"));
            console.log(form.getAll("image"));
            this.setState({ isSubmitting: true });
            try {
              const result = await axios.post(url, form);
              console.log("3243", result);
              if (result) {
                this.setState({
                  message: result.data.status,
                  isSubmitting: false
                });
                toast.success(this.state.message);
                setTimeout(() => {
                  window.location.href = `/hotel/${hotelID}/rooms/addroom`;
                }, 1000);
              }
            } catch (err) {
              this.setState({
                message: err.response.data.error,
                isSubmitting: false
              });
              if (err.status >= 400) {
                toast.error(
                  "Could not submit the form, fill the required field or check your internet connection"
                );
              }
              toast.error(this.state.message);
            }
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
                    <h4>Add information about the hotel room</h4>
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
                            <ErrorMessage name="roomType">
                              {msg => {
                                return <div className="text-danger">{msg}</div>;
                              }}
                            </ErrorMessage>
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
                            <ErrorMessage name="roomSize">
                              {msg => {
                                return (
                                  <div className="text-danger">
                                    <p>Enter a valid Number</p>
                                  </div>
                                );
                              }}
                            </ErrorMessage>
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
                            />{" "}
                            <ErrorMessage name="roomsOfThisType">
                              {msg => {
                                return (
                                  <div className="text-danger">
                                    <p>Enter a valid Number</p>
                                  </div>
                                );
                              }}
                            </ErrorMessage>
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
                            <ErrorMessage name="bedNumber">
                              {msg => {
                                return <div className="text-danger">{msg}</div>;
                              }}
                            </ErrorMessage>
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
                            <ErrorMessage name="roomPrice">
                              {msg => {
                                return (
                                  <div className="text-danger">
                                    {" "}
                                    <p>Enter a valid Number</p>{" "}
                                  </div>
                                );
                              }}
                            </ErrorMessage>
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
                            <ErrorMessage name="weekendRate">
                              {msg => {
                                return (
                                  <div className="text-danger">
                                    <p>Enter a valid Number</p>
                                  </div>
                                );
                              }}
                            </ErrorMessage>
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
                            <ErrorMessage name="standardRate">
                              {msg => {
                                return (
                                  <div className="text-danger">
                                    <p>Enter a valid Number</p>
                                  </div>
                                );
                              }}
                            </ErrorMessage>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of Row   */}

                        {/* Beginging of Room Amenities   */}
                    <h3>Room Amenities</h3>
                    <div className="p-3 mb-3 custom-shadow">
                      <p>
                        <b>
                          Check the amenities you have in this room, to add more
                          amenities click on the more amenities button
                        </b>
                      </p>

                      {/* Begining of Row */}
                      <div className="row">
                        <div className="form-group col-md-4">
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
                        <div className="form-group col-md-4">
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
                        <div className="form-group col-md-4">
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
                      </div>
                      {/* End of Row */}
                      {/* Begining of Row */}
                      <div className="row">
                        <div className="form-group col-md-4">
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
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="In-room Wi-Fi"
                            className="mr-2"
                            id="in-room-wifi"
                          />
                          <label htmlFor="in-room-wifi">In-room Wi-Fi</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Blackout Curtains"
                            className="mr-2"
                            id="curtains"
                          />
                          <label htmlFor="curtains">Blackout Curtains</label>
                          <hr />
                        </div>
                      </div>
                      {/* End of Row */}
                      {/* Begining of Row */}
                      <div className="row">
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Desk"
                            className="mr-2"
                            id="desk"
                          />
                          <label htmlFor="desk">Desk</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Turndown Service"
                            className="mr-2"
                            id=""
                          />
                          <label htmlFor="">Turndown Service</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Ironing board"
                            className="mr-2"
                            id="ironing-board"
                          />
                          <label htmlFor="ironing-board">Ironing board</label>
                          <hr />
                        </div>
                      </div>
                      {/* End of Row */}

                      {/* Begining of Row */}
                      <div className="row">
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="In-room safe"
                            className="mr-2"
                            id="In-room"
                          />
                          <label htmlFor="In-room">In-room safe</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="
                            Bedding: blankets or quilt"
                            className="mr-2"
                            id="blankets"
                          />
                          <label htmlFor="blankets">
                            Bedding: blankets or quilt
                          </label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Electronic Scale"
                            className="mr-2"
                            id="scale"
                          />
                          <label htmlFor="scale">Electronic Scale</label>
                          <hr />
                        </div>
                      </div>
                      {/* End of Row */}
                      {/* Begining of Row */}
                      <div className="row">
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Sewing Kit"
                            className="mr-2"
                            id="sewing"
                          />
                          <label htmlFor="sewing">Sewing Kit</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Wardrobe/closet"
                            className="mr-2"
                            id="closet"
                          />
                          <label htmlFor="closet">Wardrobe/closet</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="220V power outlets"
                            className="mr-2"
                            id="poweroutlets"
                          />
                          <label htmlFor="poweroutlets">
                            220V power outlets
                          </label>
                          <hr />
                        </div>
                      </div>
                      {/* End of Row */}
                      {/* Begining of Row */}
                      <div className="row">
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Curtain"
                            className="mr-2"
                            id="curtainnn"
                          />
                          <label htmlFor="curtainnn">Curtain</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Sofa"
                            className="mr-2"
                            id="sofa"
                          />
                          <label htmlFor="sofa">Sofa</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Spare bedding"
                            className="mr-2"
                            id="bedding"
                          />
                          <label htmlFor="bedding">Spare bedding</label>
                          <hr />
                        </div>
                      </div>
                      {/* End of Row */}
                      {/* Begining of Row */}
                      <div className="row">
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Alarm Clock"
                            className="mr-2"
                            id="alarm"
                          />
                          <label htmlFor="alarm">Alarm Clock</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Umbrella"
                            className="mr-2"
                            id="umbrella"
                          />
                          <label htmlFor="umbrella">Umbrella</label>
                          <hr />
                        </div>
                      </div>
                      {/* End of Row */}

                      <FieldArray name="moreAmenities">
                        {({ push, remove }) => (
                          <React.Fragment>
                            {values.moreAmenities &&
                              values.moreAmenities.length > 0 &&
                              values.moreAmenities.map((item, idx) => (
                                <div
                                  className=" mb-1 moreAmenity-div"
                                  key={`item-${idx}`}
                                >
                                  {" "}
                                  <div>
                                    <label>More Room Amenity</label>
                                    <br />
                                    <Field
                                      type="text"
                                      name={`moreAmenities[${idx}].amenity`}
                                      className="form-div"
                                    />
                                    <button
                                      type="button"
                                      className=" moreAmenity-btn"
                                      onClick={() => remove({ idx })}
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              ))}

                            <button
                              type="button"
                              className="mb-3 mt-3 btn btn-sm btn-dark"
                              onClick={() => push({ amenity: "" })}
                            >
                              Add new Amenity
                            </button>
                          </React.Fragment>
                        )}
                      </FieldArray>

                      <br />
                    </div>

                        {/* End of Room Amenities   */}
                  </div>
                  <RoomFileUpload />
                  <div className="p-3 custom-shadow">
                    <div className="row">
                      <div className="col-md-6  ">
                        <button
                          className="btn add-room-later-btn btn-block mb-2"
                          onClick={() =>
                            this.props.history.push(`/hotel/${hotelID}/rooms`)
                          }
                        >
                          Add Room Later
                        </button>
                      </div>
                      <div className="col-md-6  ">
                        <button
                          className="btn btn-dark btn-block mb-2"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
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

export default withRouter(AddRoomForm);
