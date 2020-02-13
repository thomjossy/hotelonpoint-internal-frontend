import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

function SingleHotelLandingPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { match } = props;
  return (
    <section>
      <div className="breadcrumb">
        {" "}
        <h5>Welcome {match.params.name} </h5>
      </div>
      <div className="container p-2 mt-3">
        <div className="row my-5">
          <div className="col-sm-4">
            <div className="card single-icon">
              <div className="card-body">
                <h4>Reviews</h4>
                <i className="fas fa-comments single-fa"></i>
              </div>

              <Link
                to={`/hotel/${match.params.id}/reviews`}
                className="view-btn"
              >
                <div className="card-footer">view </div>
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card single-icon">
              <div className="card-body">
                <h4>Reservation</h4>
                <i className="fas fa-hotel single-fa"></i>
              </div>

              <Link
                to={`/hotel/${match.params.id}/reservation`}
                className="view-btn"
              >
                {" "}
                <div className="card-footer">view</div>
              </Link>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card single-icon">
              <div className="card-body">
                <h4>Rooms</h4>
                <i className="fas fa-bed single-fa"></i>
              </div>

              <Link to={`/hotel/${match.params.id}/rooms`} className="view-btn">
                <div className="card-footer">view</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withRouter(SingleHotelLandingPage);
