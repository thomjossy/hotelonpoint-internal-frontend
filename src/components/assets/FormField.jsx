import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function FormField({
  label,
  type,
  smalltext,
  id,
  name,
  required,
  placeholder,
  value
}) {
  const context = useContext(RoomContext);
  const { handleChange } = context;

  return (
    <div className=" col-md-6 col-sm-12">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        className="form-control form-field"
        onChange={handleChange}
      />
      <small id="passwordHelpBlock" className="form-text text-muted">
        {smalltext}
      </small>
    </div>
  );
}
