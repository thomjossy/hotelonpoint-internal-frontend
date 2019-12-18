import React, { Component } from "react";
import { Field, FieldArray, connect } from "formik";

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

class HotelFormFive extends Component {
  render() {
    const { values } = this.props.formik;

    console.log("Hello there");
    console.log(this.props);
    return (
      <div className="container">
        <div>
          <br />

          <div className="container p-5 custom-shadow">
            <h3>Upload Picturs of your hotel</h3>
          </div>
          <div className="col-md-6 col-sm-12">
            <div class="form-group">
              <Field type="file" name="files" className="custom-field" />
              <Field type="file" name="files" className="custom-field" />
              <Field type="file" name="files" className="custom-field" />
              <Field type="file" name="files" className="custom-field" />
              <Field type="file" name="files" className="custom-field" />
            </div>
          </div>
        </div>

        <br />

        <br />

        <br />
      </div>
    );
  }
}

export default connect(HotelFormFive);
