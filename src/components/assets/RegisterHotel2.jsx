import React from "react";
import RoomForm from "./RoomForm";
import { useContext } from "react";
import { RoomContext } from "../../context";
import CheckBooxForm from "./CheckBooxForm";

export default function RegisterHotel2() {
  const context = useContext(RoomContext);
  const { handleSubmit } = context;

  return (
    <div className="register-2">
      <CheckBooxForm />
      <br />
      <RoomForm />

      <div className="row">
        <div className="col mx-auto">
          <button
            className="btn btn-primary btn-lg  m-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
