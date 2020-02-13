import React from "react";
import { Route } from "react-router-dom";
import CustomerCareNavbar from "../customerCareNavbar/CustomerCareNavbar";
import Invoice from "../invoice/Invoice";
import CustomersReview from "../customerReviews/CustomersReview";
import CustomerReviewPage from "../customerReviews/CustomerReviewPage";
import CustomerCareLandingPage from "../customerCareLandingPage/CustomerCareLandingPage";
import CustomerCareBooking from "../customerCareBookings/CustomerCareBookings";
import CheckAuth from "../../../checkAuth";
import HotelOwnerReply from "../hotelOwnerReply/HotelOwnerReply";
import SingleHotelInvoice from "../invoice/SingleHotelInvoice";

export default function CustomerCareDashboard() {
  return (
    <div>
      <CustomerCareNavbar />
      <CheckAuth path="/care" component={CustomerCareLandingPage} exact />
      <Route path="/care/reviews/:id" component={CustomerReviewPage} />
      <Route path="/care/reviews" component={CustomersReview} exact />
      <Route path="/care/invoice" component={Invoice} exact />
      <Route path="/care/invoice/:id" component={SingleHotelInvoice} />
      <Route path="/care/booking" component={CustomerCareBooking} exact />
      <Route path="/care/hotel-reply" component={HotelOwnerReply} exact />
    </div>
  );
}
