import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function ManageRooms(props) {
  const context = useContext(RoomContext);
  const { hotelRooms } = context;
  const { match } = props;
  return (
    <section className="manage-rooms-section container">
      <p>
        To edit a room click on the edit button, to delete a room click on the
        delete button note, the delete action is permanent
      </p>
      <div className="add-new-property-div">
        <Link
          to={`/hotel/${match.params.name}/rooms/addroom`}
          className="add-new-property"
        >
          Add New Room
        </Link>
      </div>

      <br />
      <table className="manage-rooms-table">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {hotelRooms.map((item, index) => (
            <tr key={item.id}>
              <td>{item.roomType}</td>
              <td>Adjust Price</td>
              <td className="text-primary">
                <Link
                  to={`/hotel/${match.params.name}/rooms/${item.roomType}/editroom`}
                >
                  Edit
                </Link>
              </td>

              <td className="text-danger">Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </section>
  );
}
