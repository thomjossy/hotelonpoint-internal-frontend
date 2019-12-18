import React, { Component } from "react";
import RegisterHotel1 from "./RegisterHotel1";
import RegisterHotel2 from "./RegisterHotel2";
import { RoomContext } from "../../context";
import RegisterHotel3 from "./RegisterHotel3";

export default class AddHotelsPage extends Component {
  static contextType = RoomContext;

  render() {
    const { step } = this.context;

    if (step === 1) {
      return (
        <section className="container">
          <div className="row">
            <div className="col-10  mx-auto">
              <RegisterHotel1 />
            </div>
          </div>
        </section>
      );
    } else if (step === 2)
      return (
        <section className="container">
          <div className="row">
            <div className="col-10  mx-auto">
              <RegisterHotel2 />
            </div>
          </div>
        </section>
      );
    else
      return (
        <section className="container">
          <div className="row">
            <div className="col-10  mx-auto">
              <RegisterHotel3 />
            </div>
          </div>
        </section>
      );
  }
}
