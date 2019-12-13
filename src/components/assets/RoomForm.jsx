import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function RegisterHotel2() {
  const context = useContext(RoomContext);
  const { handleChange, rooms, addNewRoom } = context;

  return (
    <>
      <div className="mb-3">
        {rooms.map((val, index) => {
          let roomName = `roomName-${index}`,
            roomType = `roomType-${index}`,
            roomSize = `roomSize-${index}`,
            roomsOfthisType = `roomsOfthisType-${index}`,
            bedType = `bedType-${index}`,
            bedNumber = `bedNumber-${index}`,
            smokePolicy = `smokePolicy-${index}`,
            occupantPolicy = `occupantPolicy-${index}`,
            pricePerNight = `pricePerNight-${index}`;

          return (
            <>
              <div className="row custom-shadow p-5">
                <div className="form-group w-75">
                  <label htmlFor={roomName}>Room's Name</label>
                  <input
                    type="text"
                    id={roomName}
                    data-id={index}
                    name="roomName"
                    required
                    className="form-control"
                    onChange={handleChange}
                    placeholder="Presidential"
                  />
                </div>
                <div className="form-group w-75">
                  <label htmlFor={roomType}>Room Type</label>
                  <input
                    type="text"
                    id={roomType}
                    data-id={index}
                    name="roomType"
                    placeholder="Deluxe"
                    required
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-75">
                  <label htmlFor={roomSize}>Size of the Room</label>
                  <input
                    type="text"
                    id={roomSize}
                    data-id={index}
                    name="roomSize"
                    placeholder="45ft"
                    required
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group w-75">
                  <label htmlFor={roomsOfthisType}>Room of this type </label>
                  <input
                    type="text"
                    id={roomsOfthisType}
                    data-id={index}
                    name="roomsOfthisType"
                    required
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group w-75">
                  <label htmlFor={bedType}>Type of Bed</label>
                  <input
                    type="text"
                    id={bedType}
                    data-id={index}
                    placeholder="Water Bed"
                    name="bedType"
                    required
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group w-75">
                  <label htmlFor={bedNumber}>Number of Beds</label>
                  <input
                    type="text"
                    id={bedNumber}
                    data-id={index}
                    name="bedNumber"
                    required
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group w-75">
                  <label htmlFor={smokePolicy}>Smoking Policy</label>
                  <input
                    type="text"
                    id={smokePolicy}
                    data-id={index}
                    name="smokePolicy"
                    required
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div className="form-group w-75">
                  <label htmlFor={occupantPolicy}>Occupant Policy</label>
                  <input
                    type="text"
                    id={occupantPolicy}
                    data-id={index}
                    name="occupantPolicy"
                    required
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <br />
                <div className="form-group w-75">
                  <label htmlFor={pricePerNight}>Price of Room Per Night</label>
                  <input
                    type="text"
                    id={pricePerNight}
                    data-id={index}
                    name="pricePerNight"
                    required
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
                <br />
              </div>
              <br />
            </>
          );
        })}

        <br />
        <br />
        <p
          className=" .add-room-btn"
          style={{
            textDecoration: "underline",
            cursor: " pointer",
            color: "#ff8c00"
          }}
          onClick={addNewRoom}
        >
          Click here, to add a new Room Details
        </p>
      </div>
      <br />
    </>
  );
}
