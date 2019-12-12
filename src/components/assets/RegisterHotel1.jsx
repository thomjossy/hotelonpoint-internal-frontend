import React from "react";
import FormField from "./FormField";
import { useContext } from "react";
import { RoomContext } from "../../context";
import AddressFormField from "./AddressFormField";

export default function RegisterHotel1() {
  const context = useContext(RoomContext);
  const {
    incrementStep,
    hotelName,
    starRating,
    handleChange,
    roomNumber,
    hotelWebsite,
    country,
    hotelState,
    conNumber,
    email,
    checkIn,
    checkOut,
    address,
    zipCode,
    isChainComp,
    city
  } = context;

  return (
    <div className="container register-1">
      <h3>Welcome, to add your property, carefully fill in the form</h3>
      <form>
        <div className="row p-4 custom-shadow">
          <FormField
            value={hotelName}
            label="Name of your property:"
            type="text"
            required="required"
            id="propertyname"
            name="hotelName"
            smalltext="This is the name that will appear when guests search for hotels"
          />

          <div className="col-md-6 col-sm-12">
            <label className htmlFor="starRating">
              Hotel star rating:
            </label>
            <select
              className="custom-select mr-sm-2"
              id="starRating"
              name="starRating"
              value={starRating}
              onChange={handleChange}
            >
              <option value="5">5 star</option>
              <option value="4">4 star</option>
              <option value="3">3 star</option>
              <option value="2">2 star</option>
              <option value="1">1 star</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row p-4 custom-shadow">
          <FormField
            label="Number of Rooms"
            type="text"
            id="roomNumber"
            name="roomNumber"
            value={roomNumber}
            required="required"
          />
          <FormField
            label="Hotel's Website"
            type="url"
            id="hotelWebsite"
            name="hotelWebsite"
            required="required"
            value={hotelWebsite}
          />
        </div>
        <br />

        <div className="row p-4 custom-shadow">
          <FormField
            label="Phone Number"
            type="tel"
            id="phoneOne"
            name="conNumber"
            required="required"
            value={conNumber}
          />
          <FormField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={email}
          />
        </div>

        <br />

        <div className="row p-4 custom-shadow">
          <FormField
            label="Country"
            type="text"
            id="country"
            name="country"
            required="required"
            value={country}
          />
          <FormField
            label="State"
            type="text"
            id="stateID"
            name="hotelState"
            value={hotelState}
          />
        </div>
        <br />
        <AddressFormField />
        <br />

        <div className="row p-4 custom-shadow">
          <FormField
            label="Checkin Time"
            type="time"
            id="checkIn"
            name="checkIn"
            value={checkIn}
          />
          <FormField
            label="Checkout Time"
            type="time"
            id="checkOut"
            name="checkOut"
            value={checkOut}
          />
        </div>
        <br />

        <div className="row p-4 custom-shadow">{address[0].data}</div>
        <br />

        <div className="row p-4 custom-shadow">
          <FormField
            label="Zip/Postal Code"
            type="text"
            id="zipCode"
            name="zipCode"
            value={zipCode}
          />
          <FormField
            label="City"
            type="text"
            id="city"
            name="city"
            value={city}
          />
        </div>

        <br />
        <div className="row">
          Is your hotel a multiple one, part of a chain or group
        </div>
        <div className="row p4 ">
          <label htmlFor="isChained" className="mr-3">
            <input
              type="radio"
              name="isChainComp"
              id="isChained"
              value="yes"
              checked={isChainComp === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label htmlFor="isNotChained">
            <input
              type="radio"
              name="isChainComp"
              id="isNotChained"
              value="no"
              checked={isChainComp === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        <br />
      </form>
      <br />
      <div className="row">
        <div className="col-md-8">
          <button
            className="btn btn-primary btn-lg w-50 btn-block "
            onClick={incrementStep}
          >
            Continue
          </button>
        </div>
      </div>
      <br />
    </div>
  );
}
