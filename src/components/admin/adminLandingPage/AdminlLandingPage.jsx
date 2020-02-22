import React from "react";
import { Link, withRouter } from "react-router-dom";

function SingleHotelLandingPage(props) {
  return (
    <section>
      <div className="container p-2 mt-3">
        <div className="row my-5">
          <div className="col-sm-4">
            <div className="card single-icon">
              <div className="card-body">
                <h4>Upload Blog</h4>
                <i className="fas fa-comments single-fa"></i>
              </div>

              <Link to="/admin/blog" className="view-btn">
                <div className="card-footer">Upload</div>
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card single-icon">
              <div className="card-body">
                <h4>Hotels Awaiting Approval</h4>
                <i className="fas fa-hotel single-fa"></i>
              </div>

              <Link to="/admin/awaiting-hotels" className="view-btn">
                {" "}
                <div className="card-footer">Suspended Hotel</div>
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card single-icon">
              <div className="card-body">
                <h4>Approved Hotels</h4>
                <i className="fas fa-bed single-fa"></i>
              </div>

              <Link to="/admin/approved-hotels" className="view-btn">
                <div className="card-footer">Approved Hotels</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(SingleHotelLandingPage);
