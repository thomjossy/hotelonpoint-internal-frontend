import React from "react";
import FileUpload from "../fileUpload/FileUpload";
import RoomAmenities from "./RoomAmenities";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function RegisterHotel3() {
  const context = useContext(RoomContext);
  const { decrementStep, handleSubmit } = context;
  return (
    <div mt-5>
      <div className="container custom-shadow">
        <br />
        <button className="btn btn-primary" onClick={decrementStep}>
          <i className="fas fa-arrow-left m-1"></i>Go Back
        </button>

        <RoomAmenities />
        <br />
        <FileUpload />
        <br />
      </div>
      <br />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit <i className="fas fa-check mr-2"></i>
      </button>
      <br />
    </div>
  );
}
