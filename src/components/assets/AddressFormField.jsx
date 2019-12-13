import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function AddressFormField({}) {
  const context = useContext(RoomContext);
  const { handleChange, address, addNewRow, deleteRow } = context;

  return (
    <div className="container my-3 custom-shadow p-5 ">
      <label>Address</label>
      <p>Please, Enter you address</p>
      <br />
      {address.map((item, index) => (
        <div className="form-group row">
          <input
            type="text"
            className="form-control mt-2 col-10"
            name="addressName"
            data-id={index}
            id={index}
            onChange={handleChange}
          />
          <button
            className="btn btn-danger ml-1"
            disabled={address.length === 1}
            onClick={() => deleteRow(index)}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      ))}
      <br />
      <div className="row">
        <p
          style={{
            textDecoration: "underline",
            cursor: " pointer",
            color: "#ff8c00"
          }}
          onClick={addNewRow}
        >
          If you have multiple address click to add more field
        </p>
      </div>
    </div>
  );
}
