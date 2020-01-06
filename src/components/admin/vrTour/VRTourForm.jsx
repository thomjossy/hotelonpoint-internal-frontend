import "react-toastify/dist/ReactToastify.css";

import { Field, Form, Formik } from "formik";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

class VRTourForm extends Component {
  render() {
    let initialValues;
    initialValues = {
      vrtour: ""
    };
    console.log("props from VRTourForm", this.props);
    return (
      <div className="container">
        <ToastContainer />
        <Formik
          initialValues={initialValues}
          onSubmit={async values => {
            const items = {
              vrtour: values.vrtour
            };
            try {
              const promise = await axios.put(
                `https://calm-anchorage-14244.herokuapp.com/admin/addVR/${this.props.match.params.id}`,
                items
              );
              console.log("promise", promise);
              if (promise.data) {
                toast.success("Hotel VR added Successfully");
                setTimeout(() => {
                  window.location.href = `/admin/approved-hotels`;
                }, 800);
              }
            } catch (err) {
              console.log(err);
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
                    <h4 className=" mb-5">VR Form</h4>
                    <div className="p-3 mb-5 custom-shadow">
                      {/* Begining of Row   */}
                      <div className="row">
                        <div className="col-md-10 mx-auto">
                          <div className="form-group">
                            <label htmlFor="smokingPolicy">
                              Fill in the link of the VR
                            </label>
                            <Field
                              type="text"
                              id="smokingPolicy"
                              name={`vrtour`}
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
                          type="submit"
                          className="btn btn-dark btn-block"
                          //   disabled={this.state.loading}
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

export default VRTourForm;
