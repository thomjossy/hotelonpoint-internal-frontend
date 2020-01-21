import React from "react";
import { Route } from "react-router-dom";
import AdminNavbar from "../adminNavbar/AdminNavbar";
import AwaitingHotels from "../AwaitingHotels/AwaitingHotels";
import ApprovedHotels from "../ApprovedHotels/ApprovedHotels";
import VRTourForm from "../vrTour/VRTourForm";
import HotelDetailsPage from "../HotelDetails/HotelDetailsPage";
import AdminlLandingPage from "../adminLandingPage/AdminlLandingPage";
import BlogForm from "../blogForm/blogform";
import Report from "../report/Report";
import HotelReview from "../HotelReviews/HotelReview";
import HotelReviewPage from "../hotelreviewpage/HotelReviewPage";

export default function AdminDashboard() {
  return (
    <div>
      <AdminNavbar />
      <Route path="/admin" component={AdminlLandingPage} exact />
      <br />
      <Route
        path="/admin/hotel-details/:id"
        render={props => <HotelDetailsPage {...props} />}
      />
      <Route
        path="/admin/reviews/:id"
        render={props => <HotelReviewPage {...props} />}
      />
      <Route path="/admin/blog" component={BlogForm} exact />
      <Route path="/admin/approved-hotels/:id" component={VRTourForm} exact />
      <Route path="/admin/approved-hotels" component={ApprovedHotels} exact />
      <Route path="/admin/reports" component={Report} exact />
      <Route path="/admin/reviews" component={HotelReview} exact />
      <Route path="/admin/awaiting-hotels" component={AwaitingHotels} exact />
    </div>
  );
}
