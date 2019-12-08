import React from "react";

export default function FormField({ label, type }) {
  return (
    <div className="single-form-div">
      <label htmlFor={label} className="single-form-label">
        {label}
      </label>
      <input type={type} className="form-field" id={label} required />
    </div>
  );
}
