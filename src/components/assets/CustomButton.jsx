import React from "react";

export default function CustomButton({ value }) {
  return (
    <div className="custom-btn-div">
      <button className="custom-btn">{value}</button>
    </div>
  );
}
