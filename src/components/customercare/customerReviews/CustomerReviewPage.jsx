import React from "react";
import moment from "moment";

export default function CustomerReviewPage(props) {
  console.log("props from reviws", props);
  const {
    comment,
    hotelName,
    customerName,
    date,
    starRating,
    _id,
    isSubmitting,
    handleApproveReview,
    handleDeleteReview
  } = props;

  return (
    <>
      <div className="my-3 custom-shadow p-3 col-10 mx-auto">
        <h5>
          {customerName} &nbsp; &nbsp;{" "}
          <span className="text-muted">
            {moment(date).format("DD MM YYYY")}
          </span>
        </h5>
        <p>{comment}</p>
        <p>
          <strong>{hotelName}</strong>
        </p>

        <p>{`${starRating} stars`}</p>
        <div className="row">
          <button
            className="btn btn-primary  m-2 w-25"
            type="button"
            disabled={isSubmitting}
            onClick={() => handleApproveReview(_id)}
          >
            Approve
          </button>
          <button
            className="btn btn-danger m-2 w-25"
            type="button"
            disabled={isSubmitting}
            onClick={() => handleDeleteReview(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
