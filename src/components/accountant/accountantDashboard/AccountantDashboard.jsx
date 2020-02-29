import React from "react";
import { Route } from "react-router-dom";
import CheckAuth from "../../../checkAuth";
import AccountantNavbar from "../accountantNavbar/AccountantNavbar";
import AccountantBooking from "../accountantBookings/AccountantBooking";
import AccountantSingleBooking from "../accountantBookings/AccountantSingleBooking";

export default function CustomerCareDashboard() {
  return (
    <div>
      <AccountantNavbar />
      <CheckAuth path="/account/booking" component={AccountantBooking} exact />
      <Route path="/account/booking/:id" component={AccountantSingleBooking} />
    </div>
  );
}
