import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function AddressFormField({ label, type, name, value }) {
  const context = useContext(RoomContext);
  const { handleChange, address, addNewRow, deleteRow } = context;

  return (
    <div className="container m-3 custom-shadow p-5 ">
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
            onChange={handleChange}
            value={item[index]}
          />
          <button
            className="btn btn-danger ml-2"
            disabled={address.length === 1}
            onClick={() => deleteRow(index)}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      ))}
      <br />
      <div className="row">
        <button className="btn btn-primary  mx-auto" onClick={addNewRow}>
          Add Address
        </button>
      </div>
    </div>
  );
}
