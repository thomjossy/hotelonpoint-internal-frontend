import React from "react";

export default function CustomCheckBox({ label }) {
  return (
    <div className="single-checkbox-div">
      <label htmlFor={label} className="single-form-label">
        {label}
      </label>
      <input
        type="checkbox"
        className="checkbox-field"
        id={label}
        value={label}
      />
    </div>
  );
}
