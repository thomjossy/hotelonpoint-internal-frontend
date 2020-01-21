import React from "react";
import Spinner from "../images/Spinner.gif";

export default function CustomLoading() {
  return (
    <div className="center-div">
      <img src={Spinner} alt="Loading..." />
    </div>
  );
}
