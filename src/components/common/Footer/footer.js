import {
  faCcMastercard,
  faCcVisa,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/HOP.svg";
import "./footer.css";

function Footer() {
  return (
    <div className=" footer-back">
      <div className="p-3">
        <div className="row ">
          <div className="col-md-4">
            <Link to="/">
              <h1 className="logo">
                <img src={logo} width="300" alt="" />
              </h1>
            </Link>
          </div>

          <div className="col-md-4">
            <label className="label text-center">
              Subscribe to get the latest of deals
            </label>
            <div className="input-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="youremail@example.com"
              />
              <div className="input-group-append">
                <input
                  type="submit"
                  className=" d-inline btn btn-sm btn-light"
                  value="subscribe"
                />
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="mt-4">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <FontAwesomeIcon className="icon" icon={faTwitter} />
              <FontAwesomeIcon className="icon" icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
      <div className="container secondsec">
        <div className="text-light">
          <div className="row">
            <div className="col-3">
              <div className="mb-3">
                <h5>Contact us:</h5>
                <p>
                  Website Feedback
                  <br />
                  Whatsapp
                  <br />
                  phone No
                </p>
              </div>
            </div>
            <div className="col-3">
              <h5>Get to know us:</h5>
              <p>
                About us
                <br />
                Privacy policy
                <br />
                Term of use
                <br />
                Pament policy
                <br />
                Career
                <br />
                FAQ
              </p>
            </div>
            <div className="col-3">
              <h5>Other services:</h5>
              <p>
                List your property
                <br />
                Become an agent
                <br />
                How it works
                <br />
                Visa Assistance
              </p>
            </div>

            <div className="col-3">
              <h5>Our payment methods:</h5>
              <FontAwesomeIcon className="icon" icon={faCcMastercard} />
              <FontAwesomeIcon className="icon" icon={faCcVisa} />
            </div>
          </div>
        </div>
      </div>
      <div className="border-5"></div>
    </div>
  );
}

export default Footer;
