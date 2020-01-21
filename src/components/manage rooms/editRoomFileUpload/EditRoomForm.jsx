import "react-toastify/dist/ReactToastify.css";
import { Field, FieldArray, Form, Formik, connect } from "formik";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

class EditRoomForm extends Component {
  state = {
    hotelDetails: {},
    loading: true
  };

  async componentDidMount() {
    console.log(this.props.location.state.id);
    const response = await axios.get(
      `https://calm-anchorage-14244.herokuapp.com/room/${this.props.location.state.id}/room`
    );
    this.setState({ hotelDetails: response.data.data, loading: false });
  }

  render() {
    const {
      roomType,
      smokingPolicy,
      roomSize,
      roomsOfThisType,
      bedType,
      bedNumber,
      weekendRate,
      standardRate,
      occupantNumber,
      roomPrice,
      roomAmenities,
      moreAmenities
    } = this.state.hotelDetails;
    let initialValues;
    if (this.state.hotelDetails !== undefined) {
      initialValues = {
        roomType,
        smokingPolicy,
        roomSize,
        roomsOfThisType,
        bedType,
        bedNumber,
        weekendRate,
        standardRate,
        occupantNumber,
        roomPrice,
        roomAmenities,
        moreAmenities
      };
    }
    return (
      <div className="container">
        <ToastContainer />
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={async values => {
            const real = [
              {
                propName: "roomType",
                value: values.roomType
              },
              {
                propName: "smokingPolicy",
                value: values.smokingPolicy
              },
              {
                propName: "roomSize",
                value: values.roomSize
              },
              {
                propName: "roomsOfThisType",
                value: values.roomsOfThisType
              },
              {
                propName: "bedNumber",
                value: values.bedNumber
              },
              {
                propName: "bedNumber",
                value: values.bedNumber
              },
              {
                propName: "weekendRate",
                value: values.weekendRate
              },
              {
                propName: "standardRate",
                value: values.standardRate
              },
              {
                propName: "occupantNumber",
                value: values.occupantNumber
              },
              {
                propName: "roomPrice",
                value: values.roomPrice
              },
              {
                propName: "roomAmenities",
                value: values.roomAmenities
              },
              {
                propName: "moreAmenities",
                value: values.moreAmenities
              }
            ];
            if (values.roomPrice > roomPrice) {
              toast.warn(
                "You cannot Increase the price of a Room without contacting HotelOnPoint"
              );
              this.setState({ loading: true });
              setTimeout(() => {
                this.setState({ loading: false });
              }, 5000);
            } else {
              this.setState({ isSubmitting: true });
              try {
                const result = await axios.put(
                  `https://calm-anchorage-14244.herokuapp.com/room/${this.props.location.state.id}`,
                  real
                );
                console.log("3243", result);
                if (result) {
                  this.setState({
                    message: result.data.statusText,
                    isSubmitting: false
                  });
                  toast.success("Hotel Successfully updated");
                  setTimeout(() => {
                    window.location.href = `/hotel/${this.state.hotelDetails.hotelId}/rooms`;
                  }, 800);
                }
              } catch (err) {
                this.setState({
                  message: err.response.data.error,
                  isSubmitting: false
                });
                toast.error(this.state.message);
              }
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
                            value="LCD Television"
                            className="mr-2 "
                            id="television"
                          />
                          <label htmlFor="television">LCD Television</label>
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
                            id="turndown"
                          />
                          <label htmlFor="turndown">Turndown Service</label>
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
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Bedding Balcony"
                            className="mr-2"
                            id="balcony"
                          />
                          <label htmlFor="balcony">Bedding Balcony</label>
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
                            value="Multi-type Outlets"
                            className="mr-2"
                            id="multi-outlet"
                          />
                          <label htmlFor="multi-outlet">
                            Multi-type Outlets
                          </label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Perk"
                            className="mr-2"
                            id="Perk"
                          />
                          <label htmlFor="Perk">Perk</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Duvet"
                            className="mr-2"
                            id="Duvet"
                          />
                          <label htmlFor="Duvet">Duvet</label>
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
                            value="Hair Dryer"
                            className="mr-2"
                            id="dryer"
                          />
                          <label htmlFor="dryer">Hair Dryer</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Toilet Power Outlet"
                            className="mr-2"
                            id="toilet"
                          />
                          <label htmlFor="toilet">Toilet Power Outlet</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Security Kit"
                            className="mr-2"
                            id="Security-Kit"
                          />
                          <label htmlFor="Security-Kit">Security Kit</label>
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
                            value="Intercom"
                            className="mr-2"
                            id="Intercom"
                          />
                          <label htmlFor="Intercom">Intercom</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="International Direct Dialing"
                            className="mr-2"
                            id="dialing"
                          />
                          <label htmlFor="dialing">
                            International Direct Dialing
                          </label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Cable Channels"
                            className="mr-2"
                            id="cable"
                          />
                          <label htmlFor="cable">Cable Channels</label>
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
                            value="Domestic/Local Call"
                            className="mr-2"
                            id="domestic"
                          />
                          <label htmlFor="domestic">Domestic/Local Call</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Satelite Channels"
                            className="mr-2"
                            id="satelite-channels"
                          />
                          <label htmlFor="satelite-channels">
                            Satelite Channels
                          </label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Coffee Machine"
                            className="mr-2"
                            id="Coffee-Machine"
                          />
                          <label htmlFor="Coffee-Machine">Coffee Machine</label>
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
                            value="Coffee/Teapot"
                            className="mr-2"
                            id="Coffee/Teapot"
                          />
                          <label htmlFor="Coffee/Teapot">Coffee/Teapot</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Complimentary Baffled Water"
                            className="mr-2"
                            id="Complimentary-Baffled-Water"
                          />
                          <label htmlFor="Complimentary-Baffled-Water">
                            Complimentary Baffled Water
                          </label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Mini-Bar"
                            className="mr-2"
                            id="Mini-Bar"
                          />
                          <label htmlFor="Mini-Bar">Mini-Bar</label>
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
                            value="Mini-Refrigerator"
                            className="mr-2"
                            id="Mini-Refrigerator"
                          />
                          <label htmlFor="Mini-Refrigerator">
                            Mini-Refrigerator
                          </label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Bath tub"
                            className="mr-2"
                            id="Bath-tub"
                          />
                          <label htmlFor="Bath-tub">Bath tub</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="High Speed Internet"
                            className="mr-2"
                            id="High-Speed-Internet"
                          />
                          <label htmlFor="High-Speed-Internet">
                            High Speed Internet
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
                            value="Landmark View"
                            className="mr-2"
                            id="Landmark-View"
                          />
                          <label htmlFor="Landmark-View">Landmark View</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Bathrobe"
                            className="mr-2"
                            id="Bathrobe"
                          />
                          <label htmlFor="Bathrobe">Bathrobe</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Slippers"
                            className="mr-2"
                            id="slippers"
                          />
                          <label htmlFor="slippers">Slippers</label>
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
                            value="Showers"
                            className="mr-2"
                            id="showers"
                          />
                          <label htmlFor="showers">Showers</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Automatic Curtain"
                            className="mr-2"
                            id="ac-curtain"
                          />
                          <label htmlFor="ac-curtain">Automatic Curtain</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Ipad"
                            className="mr-2"
                            id="Ipad"
                          />
                          <label htmlFor="Ipad">Ipad</label>
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
                            value="Tea Bag"
                            className="mr-2"
                            id="tea-bag"
                          />
                          <label htmlFor="tea-bag">Tea Bag</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="City View"
                            className="mr-2"
                            id="city-view"
                          />
                          <label htmlFor="city-view">City View</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Pool View"
                            className="mr-2"
                            id="pool-view"
                          />
                          <label htmlFor="pool-view">Pool View</label>
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
                            value="Magnifying Make-up Mirror"
                            className="mr-2"
                            id="makeup"
                          />
                          <label htmlFor="makeup">
                            Magnifying Make-up Mirror
                          </label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Kitchen Ware"
                            className="mr-2"
                            id="kitchen-ware"
                          />
                          <label htmlFor="kitchen-ware">Kitchen Ware</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Microwave"
                            className="mr-2"
                            id="Microwave"
                          />
                          <label htmlFor="Microwave">Microwave</label>
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
                            value="Stove"
                            className="mr-2"
                            id="stove"
                          />
                          <label htmlFor="stove">Stove</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Toaster"
                            className="mr-2"
                            id="toaster"
                          />
                          <label htmlFor="toaster">Toaster</label>
                          <hr />
                        </div>
                        <div className="form-group col-md-4">
                          <Field
                            type="checkbox"
                            name={`roomAmenities`}
                            value="Dining Area"
                            className="mr-2"
                            id="dining-area"
                          />
                          <label htmlFor="dining-area">Dining Area</label>
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
                            value="Radio"
                            className="mr-2"
                            id="radio"
                          />
                          <label htmlFor="radio">Radio</label>
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
                  </div>

                  <div className="p-3 custom-shadow">
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8  ">
                        <button
                          className="btn btn-dark btn-block"
                          type="submit"
                          disabled={this.state.loading}
                        >
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

export default connect(EditRoomForm);
