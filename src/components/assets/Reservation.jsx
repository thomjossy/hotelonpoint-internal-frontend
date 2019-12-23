import React from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { useContext } from "react";
import { RoomContext } from "../../context";

export default function Reservation(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const context = useContext(RoomContext);
  const { reservationdate, reservationlist, currentDate } = context;

  console.log("somedate", currentDate);
  const textdate = new Date();
  console.log(textdate.toISOString());
  const newReservationList = [...reservationlist];
  return (
    <section className="reservation-section" style={{ fontSize: "16px" }}>
      <div className="reservation-div">
        <h2 className="reservation-title">Reservations</h2>
        <br />
        <p>Search for Guests by the date they booked in</p>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              large
              id="date-picker-dialog"
              label="From"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />

            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Untill"
              format="MM/dd/yyyy"
              value={currentDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>

        <br />

        <br />
        <table className="reservation-table">
          <tr>
            <th>Guest Name</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Booked</th>
            <th>Rooms</th>
            <th>Total Price</th>
            <th>Booking Number</th>
          </tr>
          <tbody>
            {reservationlist.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.checkin}</td>
                  <td>{item.checkout}</td>
                  <td>{item.booked}</td>
                  <td>{item.rooms}</td>
                  <td>{item.totalprice}</td>
                  <td>{item.bookingnumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
      <br />
    </section>
  );
}
