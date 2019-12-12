import React from "react";
import { Switch, Route } from "react-router-dom";
import HotelDashboardNavbar from "../common/HotelDashboardNavbar";
import Reservation from "../assets/Reservation";
import DashboardHomePage from "../assets/DashboardHomePage";
import AddHotelsPage from "../assets/AddHotelsPage";

export default function Dashboard() {
  return (
    <section className="hotel-dashboard-section">
      <HotelDashboardNavbar />

      <Switch>
        <Route path="/" component={DashboardHomePage} exact />
        <Route path="/reservations" component={Reservation} exact />
        <Route path="/properties" component={AddHotelsPage} />
      </Switch>
    </section>
  );
}
