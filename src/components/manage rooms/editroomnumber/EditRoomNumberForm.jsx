import { Formik, Form, Field } from "formik";
import React, { Component } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class EditRoomNumberForm extends Component {
  state = {
    hotelDetails: {},
    loading: true
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://calm-anchorage-14244.herokuapp.com/room/${this.props.match.params.id}`
    );
    this.setState({ hotelDetails: response.data.data[0], loading: false });
    console.log("editroomdetails", this.state.hotelDetails);
  }

  render() {
    const { noOfOccupiedRooms, roomsOfThisType } = this.state.hotelDetails;
    let initialValues;
    if (this.state.hotelDetails !== undefined) {
      initialValues = {
        noOfOccupiedRooms
      };
    }
    console.log(initialValues);
    return (
      <div className="container">
        <ToastContainer />
        <Formik
          enableReinitialize
          initialValues={initialValues}
          onSubmit={async values => {
            const real = [
              {
                propName: "noOfOccupiedRooms",
                value: values.noOfOccupiedRooms
              }
            ];

            if (values.noOfOccupiedRooms > roomsOfThisType) {
              toast.warn(
                "The number of occupied rooms is more than the available number of rooms of this type"
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

                if (result) {
                  this.setState({
                    message: result.data.statusText,
                    isSubmitting: false
                  });
                  toast.success("Successfully updated");
                  setTimeout(() => {
                    window.location.href = `/hotel/${this.state.hotelDetails.hotelId}/rooms`;
                  }, 1000);
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
                    <h4 className=" mb-5">
                      Adjust the number of Occupied rooms for this category of
                      rooms in your hotel
                    </h4>
                    <div className="p-3 mb-5 custom-shadow">
                      {/* Begining of Row   */}
                      <div className="row">
                        <div className="col-md-10 mx-auto">
                          <div className="form-group">
                            <label htmlFor="smokingPolicy">
                              Number of rooms already Occupied
                            </label>
                            <Field
                              type="text"
                              id="smokingPolicy"
                              name={`noOfOccupiedRooms`}
                              className="form-control"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of Row   */}
                  </div>

                  <div className="p-3 custom-shadow">
                    <div className="row">
                      <div className="col-md-2"></div>
                      <div className="col-md-8  ">
                        <button
                          className="btn btn-dark btn-block"
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

export default EditRoomNumberForm;
