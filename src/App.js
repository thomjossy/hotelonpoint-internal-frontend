import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import DashboardHomePage from "./components/assets/DashboardHomePage";
import Navbar from "./components/common/general navbar/HOPNavbar";
import Footer from "./components/common/Footer/footer";
import FormWrapper from "./components/HotelUploadForm/FormWrapper";
import "./components/scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/pages/Dashboard";
import AdminDashboard from "./components/admin/admindashboard/AdminDashboard";
import CheckAuth from "./checkAuth";
import axios from "axios";
import Login from "./components/login/index";
import AdminLogin from "./components/admin/adminlogin/index";
import jwtDecode from "jwt-decode";
import { logoutUser, getUser, getAdmin } from "./redux/actions/userActions";
import store from "./redux/store";

// My routes for the hotel owner is in the Dashboard file in the pages folder
// My routes for the content manager is in the AdminDashboard
//file in the admindashboard folder in the admin folder

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
          <Route path="/hotel/:id" component={Dashboard} />
          <Route path="/hotel/:id/reviews" component={Reviews} />
          <Route path="/login" component={Login} exact />
          <Route path="/admin-login" component={AdminLogin} />
          <CheckAuth path="/admin" component={AdminDashboard} />
          <Route path="/add-property" component={FormWrapper} />
          <Route path="/" component={DashboardHomePage} exact />
        </Switch>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default App;
