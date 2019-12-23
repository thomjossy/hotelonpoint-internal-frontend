import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../../context";
import { Link, withRouter } from "react-router-dom";

export default function AwaitingHotels() {
  const context = useContext(RoomContext);
  const { hotels, authenticated } = context;
  console.log("auth", authenticated);
  return (
    <section className="container">
      <h3>Hotels Awaiting Approval</h3>

      <table className="awaitinghotels-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name of Hotel</th>
            <th>Details</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        {hotels.length === 0 ? (
          <p className="text-center">Loading...</p>
        ) : (
          <tbody>
            {hotels.map(item => {
              return (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>{item.propertyInfo.hotelName}</td>
                  <td>
                    <Link to={`/admin/${item._id}`}> Details</Link>
                  </td>
                  <td>Approve</td>
                  <td>Delete</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </section>
  );
}
