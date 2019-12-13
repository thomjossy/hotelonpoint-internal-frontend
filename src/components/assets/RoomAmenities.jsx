import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function RoomAmenities() {
  const context = useContext(RoomContext);

  const {
    handleChange,
    deleteRoomAmenities,
    roomAmenities,
    addRoomAmenities
  } = context;

  return (
    <div className="room-amenities-form mt-4">
      <br />
      <h3 className="gold"> Add Room Amenities</h3>

      <br />
      {roomAmenities.map((item, index) => (
        <div className=" form-item">
          <input
            type="text"
            className=" mt-2 "
            name="amenity"
            id={index}
            data-id={index}
            onChange={handleChange}
            // value={item[index]}
          />
          <button
            className="btn btn-danger mb-1"
            disabled={roomAmenities.length === 1}
            onClick={() => deleteRoomAmenities(index)}
          >
            <i className="fas fa-minus"></i>
          </button>
        </div>
      ))}

      <br />
      <button className="btn add-room-btn " onClick={addRoomAmenities}>
        Add More Amenities
      </button>
    </div>
  );
}
