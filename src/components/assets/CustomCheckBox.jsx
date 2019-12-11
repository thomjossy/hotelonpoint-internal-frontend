import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function CustomCheckBox({ label, name, value, checked }) {
  const context = useContext(RoomContext);
  const { handleChange } = context;
  return (
    <div className="single-checkbox-div">
      <label htmlFor={label} className="single-form-label">
        {label}
      </label>
      <input
        type="checkbox"
        className="checkbox-field"
        id={label}
        name={name}
        onChange={handleChange}
        value={value}
        checked={checked}
      />
    </div>
  );
}
