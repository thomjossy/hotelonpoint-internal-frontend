import React from "react";
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { RoomContext } from "./context";
import axios from "axios";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import DashboardHomePage from "./components/assets/DashboardHomePage";
import Navbar from "./components/common/general navbar/HOPNavbar";
import Footer from "./components/common/Footer/footer";
import FormWrapper from "./components/HotelUploadForm/FormWrapper";
import "./components/scss/main.scss";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Reviews from "./components/Reviews/Reviews";
import Dashboard from "./components/pages/Dashboard";
import AdminDashboard from "./components/admin/admindashboard/AdminDashboard";
import HotelDetailsPage from "./components/admin/HotelDetails/HotelDetailsPage";
import Login from "./components/login/index";
import { logoutUser, getUser } from "./redux/actions/userActions";
import store from "./redux/store";

function App() {
  const context = useContext(RoomContext);

  const token = localStorage.JWT_TOKEN;
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < new Date()) {
      store.dispatch(logoutUser);
      window.location.href = "/";
    } else {
      axios.defaults.headers.common["Authorization"] = token;
      store.dispatch(getUser());
    }
  }
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Switch>
          {/* <Route path="/hotel/:name" component={Dashboard} />
          <Route path="/hotel/:name/reviews" component={Reviews} /> */}
          <Route path="/login" component={Login} exact />
          <Route path="/admin" component={AdminDashboard} exact />
          <Route path="/add-property" component={FormWrapper} />
          <Route path="/admin/:id" component={HotelDetailsPage} />
          {/* 
          <Route path="/" component={DashboardHomePage} exact /> */}
        </Switch>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default App;
