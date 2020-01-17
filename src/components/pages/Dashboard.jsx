import React from "react";
import { Route } from "react-router-dom";
import HotelDashboardNavbar from "../common/HotelDashboardNavbar";
import Reservation from "../assets/Reservation";
import Reviews from "../Reviews/Reviews";
import SingleHotelLandingPage from "../singlehotelLandingPage/SingleHotelLandingPage";
import ManageRooms from "../manage rooms/ManageRooms";
import AddRoomForm from "../manage rooms/AddRoomForm";
import EditRoomForm from "../manage rooms/editRoomFileUpload/EditRoomForm";
import EditRoomNumberForm from "../manage rooms/editroomnumber/EditRoomNumberForm";
import Opportuinty from "../opportunity/Opportuinty";
import FormWraperEdit from "../edithotelform/FormWrapperEdit";

export default function Dashboard(props) {
  return (
    <section className="hotel-dashboard-section">
      <HotelDashboardNavbar {...props} />
      <Route
        path="/hotel/:id/rooms/:roomType/edit-number"
        component={EditRoomNumberForm}
      />
      <Route path="/hotel/:id/edit-hotel" component={FormWraperEdit} exact />
      <Route path="/hotel/:id" component={SingleHotelLandingPage} exact />

      <Route path="/hotel/:id/reviews" component={Reviews} />
      <Route path="/hotel/:id/reservation" component={Reservation} />
      <Route path="/hotel/:id/rooms/addroom" component={AddRoomForm} />
      <Route path="/hotel/:id/rooms/:roomType/editroom">
        <EditRoomForm location={props.location} />
      </Route>
      <Route path="/hotel/:id/rooms" component={ManageRooms} exact />
      <Route path="/hotel/:id/opportunity" component={Opportuinty} exact />
    </section>
  );
}
