import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardHomePage from "./components/assets/DashboardHomePage";
import Navbar from "./components/common/general navbar/HOPNavbar";
import Footer from "./components/common/Footer/footer";
import FormWrapper from "./components/HotelUploadForm/FormWrapper";
import CustomerCareDashboard from "./components/customercare/customerCareDashboard/CustomerCareDashboard";
import "./components/scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/pages/Dashboard";
import AdminDashboard from "./components/admin/admindashboard/AdminDashboard";
import axios from "axios";
import Login from "./components/login/index";
import AdminLogin from "./components/admin/adminlogin/index";
import AdminSignUp from "./components/admin/signup/AdminSignUp";
import NotFound from "./components/NotFound/NotFound";
import Test from "./components/Test";
import jwtDecode from "jwt-decode";
import {
  logoutUser,
  getUser,
  getAdmin,
  getCC
} from "./redux/actions/userActions";
import store from "./redux/store";

import CustomerCareLogin from "./components/customercare/customerCareLogin/CustomerCareLogin";
import CustomerCareSignUp from "./components/customercare/customerCareSignUp/CustomerCareSignUp";
import AccountLogin from "./components/accountant/accountantLogin/AccountantLogin";
import AccountSignUp from "./components/accountant/accountantSignUp/AccountantSignUp";
import AccountantDashboard from "./components/accountant/accountantDashboard/AccountantDashboard";

// My routes for the hotel owner is in the Dashboard file in the pages folder
// My routes for the content manager is in the AdminDashboard
//file in the admindashboard folder in the admin folder
//My rooutes for the customer care is in the customercareDashboard file which is located in the
// CustomerCareDashboard folder in the customercare folder

function App() {
  const token = localStorage.JWT_TOKEN;
  if (token) {
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp * 1000 < new Date()) {
      store.dispatch(logoutUser());
      window.location.href = "/";
    } else {
      axios.defaults.headers.common["Authorization"] = token;
      if (decodedToken.isAdmin) {
        store.dispatch(getAdmin());
      } else if (decodedToken.isCC) {
        store.dispatch(getCC());
      } else {
        store.dispatch(getUser());
      }
    }
  }
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Switch>
          {/* <Route path="/test" component={Test} /> */}
          <Route path="/hotel/:id" component={Dashboard} />
          <Route path="/hotel/:id/reviews" component={Reviews} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/admin-login" component={AdminLogin} exact />
          <Route path="/admin-signup" component={AdminSignUp} exact />
          <Route path="/care-login" component={CustomerCareLogin} exact />
          <Route path="/care-signup" component={CustomerCareSignUp} exact />
          <Route path="/account-login" component={AccountLogin} exact />
          <Route path="/account-signup" component={AccountSignUp} exact />
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/account" component={AccountantDashboard} />
          <Route path="/care" component={CustomerCareDashboard} />
          <Route path="/add-property" component={FormWrapper} />
          <Route path="/" component={DashboardHomePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default App;
