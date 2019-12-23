import React from "react";
import { Route } from "react-router-dom";
import HotelDashboardNavbar from "../common/HotelDashboardNavbar";
import Reservation from "../assets/Reservation";
import Reviews from "../Reviews/Reviews";
import SingleHotelLandingPage from "../singlehotelLandingPage/SingleHotelLandingPage";
import ManageRooms from "../manage rooms/ManageRooms";
import AddRoomForm from "../manage rooms/AddRoomForm";
import EditRoomForm from "../manage rooms/EditRoomForm";

export default function Dashboard(props) {
  return (
    <section className="hotel-dashboard-section">
      <HotelDashboardNavbar {...props} />
      <Route path="/hotel/:name" component={SingleHotelLandingPage} exact />
      <Route path="/hotel/:name/reviews" component={Reviews} />
      <Route path="/hotel/:name/reservation" component={Reservation} />
      <Route path="/hotel/:name/rooms/addroom" component={AddRoomForm} />
      <Route
        path="/hotel/:name/rooms/:roomType/editroom"
        component={EditRoomForm}
      />
      <Route path="/hotel/:name/rooms" component={ManageRooms} exact />
    </section>
  );
}
