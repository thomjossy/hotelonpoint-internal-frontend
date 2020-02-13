import React from "react";
import { Link, withRouter } from "react-router-dom";
function CustomerCareLandingPage(props) {
  return (
    <section>
      <div className="container p-2 mt-3">
        <div className="row my-5">
          <div className="col-sm-4">
            <div className="card single-icon">
              <div className="card-body">
                <h4>Reviews</h4>
                <i className="fas fa-comments single-fa"></i>
              </div>

              <Link to="/care/reviews" className="view-btn">
                <div className="card-footer">Reviews</div>
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card single-icon">
              <div className="card-body">
                <h4>Hotels Invoice</h4>
                <i className="fas fa-hotel single-fa"></i>
              </div>

              <Link to="/care/invoice" className="view-btn">
                {" "}
                <div className="card-footer">Hotel Invoice</div>
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card single-icon">
              <div className="card-body">
                <h4>Bookings</h4>
                <i className="fas fa-bed single-fa"></i>
              </div>

              <Link to="/care/booking" className="view-btn">
                <div className="card-footer">Bookings</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(CustomerCareLandingPage);
