import React from "react";
import { Switch, Route } from "react-router-dom";
import HotelDashboardNavbar from "../common/HotelDashboardNavbar";
import Reservation from "../assets/Reservation";
import DashboardHomePage from "../assets/DashboardHomePage";
import FormWrapper from "../HotelUploadForm/FormWrapper";
import Navbar from "../common/general navbar/HOPNavbar";
import Footer from "../common/Footer/footer";
import HotelUploadForm from "../HotelUploadForm/HotelUploadForm.js";
import HotelFormThree from "../HotelUploadForm/HotelFormthree";
import HotelFormTwo from "../HotelUploadForm/HotelFormTwo";
import HotelFormOne from "../HotelUploadForm/HotelFormOne";

export default function Dashboard() {
  return (
    <section className="hotel-dashboard-section">
      <Navbar />
      <HotelDashboardNavbar />
      <div className="wrapper">
        <Switch>
          <Route path="/" component={DashboardHomePage} exact />
          <Route path="/reservations" component={Reservation} exact />
          <Route path="/properties" component={FormWrapper} />
        </Switch>
      </div>
      <Footer />
    </section>
  );
}
