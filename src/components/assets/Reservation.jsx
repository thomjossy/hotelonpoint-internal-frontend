import React from "react";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function Reservation() {
  const context = useContext(RoomContext);
  const { reservationdate, reservationlist } = context;

  const testDate = new Date("1994", "06", "19");
  console.log(testDate);
  console.log(testDate.getFullYear());
  console.log(testDate.getMonth());
  return (
    <section className="reservation-section">
      <div className="reservation-div">
        <h2>Reservations</h2>
        <br />
        <p>Search for Guests by the date they booked in</p>
        <form className="reservation-form">
          <input
            type="date"
            placeholder="Example 05-10-2020"
            className="guest-field"
            name="reservationdate"
            value={reservationdate}
          />
        </form>

        <br />
        <br />
        <table className="reservation-table">
          <tr>
            <th>Guest Name</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Rooms</th>
            <th>Total Price</th>
            <th>Booking Number</th>
          </tr>
          <tbody>
            {reservationlist.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.checkin}</td>
                  <td>{item.checkout}</td>
                  <td>{item.rooms}</td>
                  <td>{item.totalprice}</td>
                  <td>{item.bookingnumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
