import React from "react";
import CustomCheckBox from "./CustomCheckBox";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function CheckBooxForm() {
  const context = useContext(RoomContext);
  const {
    decrementStep,
    swimingPoll,
    restaurant,
    garden,
    wifi,
    bar,
    roomService,
    accomodatePet,
    accomodateChild,
    fitnessCenter,
    frontDesk,
    swimingPollValue,
    restaurantValue,
    gardenValue,
    wifiValue,
    barValue,
    roomServiceValue,
    fitnessCenterValue,
    frontDeskValue
  } = context;

  return (
    <div className="register-2">
      <div className="row">
        <div className="col-sm-8 md-6 col-lg-4 ">
          <button
            className="btn btn-primary btn-lg w-50 mb-4 bg-dark"
            onClick={decrementStep}
          >
            Back
          </button>
        </div>
      </div>
      <h1 className="gold">Hotel Amenities</h1>
      <p>Please, tick the checkbox if your hotel has the following resources</p>

      <div className="row p-4 custom-shadow">
        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="Swimng Pool"
            className="mx-auto"
            name="swimingPoll"
            checked={swimingPoll}
            value={swimingPollValue}
          />
        </div>
        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="Wifi"
            className="mx-auto"
            name="wifi"
            checked={wifi}
            value={wifiValue}
          />
        </div>

        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="Allow Pets"
            className="mx-auto"
            name="accomodatePet"
            checked={accomodatePet}
            value={accomodatePet}
          />
        </div>
        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="Allow Child"
            className="mx-auto"
            name="accomodateChild"
            checked={accomodateChild}
            value={accomodateChild}
          />
        </div>
        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="Restaurant"
            className="mx-auto"
            name="restaurant"
            checked={restaurant}
            value={restaurantValue}
          />
        </div>
        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="Bar"
            className="mx-auto"
            name="bar"
            checked={bar}
            value={barValue}
          />
        </div>

        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="fitness center"
            className="mx-auto"
            name="fitnessCenter"
            checked={fitnessCenter}
            value={fitnessCenterValue}
          />
        </div>
        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="garden"
            className="mx-auto"
            name="garden"
            checked={garden}
            value={gardenValue}
          />
        </div>
        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="room service"
            className="mx-auto"
            name="roomService"
            checked={roomService}
            value={roomServiceValue}
          />
        </div>

        <div className="col-sm-10 col-md-4 col-lg-4">
          <CustomCheckBox
            label="24-hour front desk"
            className="mx-auto"
            name="frontDesk"
            checked={frontDesk}
            value={frontDeskValue}
          />
        </div>
      </div>
    </div>
  );
}
