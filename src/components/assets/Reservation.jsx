import "date-fns";

import React from "react";

export default function Reservation(props) {
  // const [selectedDate, setSelectedDate] = React.useState(
  //   new Date("2019-01-18T21:11:54")
  // );
  // const handleDateChange = date => {
  //   setSelectedDate(date);
  // };
  // const context = useContext(RoomContext);
  // const { reservationdate, reservationlist, currentDate } = context;

  // console.log("this is selecteddate", selectedDate.valueOf());
  // console.log("this is selecteddate", currentDate.valueOf());
  // const currentReservation = reservationlist.filter(
  //   item =>
  //     item.checkin > selectedDate.toString &&
  //     item.checkin < currentDate.toString
  // );

  return (
    <section className="reservation-section" style={{ fontSize: "16px" }}>
      <div className="reservation-div">
        <h2 className="text-center">
          Hello, we are currently working on this page :)
        </h2>
        {/* <h2 className="reservation-title">Reservations</h2>
        <br />
        <p>Search for Guests by the date they booked in</p>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              margin="normal"
              large
              id="min-date"
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
              id="max-date"
              label="Untill"
              format="MM/dd/yyyy"
              value={currentDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date"
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider> */}

        <br />

        <br />

        <br />
        {/* <div className="property-search-div">
          <input
            type="text"
            name="propertySearch"
            value={propertySearch}
            className="property-search"
            placeholder={"Search for your property by name "}
            onChange={handlePropertyChange}
          />
          <i className="fas fa-search search"></i>
        </div> */}

        {/* <table className="reservation-table">
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Booked</th>
              <th>Rooms</th>
              <th>Total Price</th>
              <th>Booking Number</th>
            </tr>
          </thead>

          <tbody>
            {currentReservation.map(item => {
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
        </table> */}
      </div>
      <br />
      <br />
    </section>
  );
}

