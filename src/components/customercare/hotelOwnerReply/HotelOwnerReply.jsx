import React, { Component } from "react";
import Axios from "axios";
import CustomLoading from "../../assets/CustomLoading";
import moment from "moment";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default class HotelOwnerReply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isSubmitting: false,
      customerReviews: []
    };
  }

  async componentDidMount() {
    const response = await Axios.get(`http://localhost:3400/Comment/`);
    console.log("respnose", response);
    this.setState({
      customerReviews: response.data.data.comment,
      loading: false
    });
  }

  handleApproveReview = async review => {
    const real = [
      {
        propName: "approved",
        approved: true
      }
    ];
    try {
      const response = await Axios.put(
        `http://localhost:3400/Comment/${review}`,
        real
      );

      this.setState({ isSubmitting: true });
      toast.success("Successfully Updated");
    } catch (error) {
      if (error.message == "Network Error") {
        return alert("There is a very Poor Network");
      }

      console.log(error);
      toast.error("An Unexpected Error just occured");
    }
  };

  handleDeleteReview = async review => {
    try {
      const response = await Axios.delete(
        `http://localhost:3400/Comment/${review}`
      );

      this.setState({ isSubmitting: true });
      toast.success("Successfully Deleted");
      if (response) {
        setTimeout(() => {
          window.location.href = `/care/hotel-reply`;
        }, 1000);
      }
    } catch (error) {
      if (error.message == "Network Error") {
        return alert("There is a very Poor Network");
      }

      console.log(error);
      toast.error("An Unexpected Error just occured");
    }
  };

  render() {
    const { loading, customerReviews, isSubmitting } = this.state;
    // const newCustomerReviews = customerReviews.filter(
    //   item => item.approved !== true
    // );

    return loading ? (
      <CustomLoading />
    ) : (
      <section className="container">
        <ToastContainer />
        <div>
          {customerReviews.length === 0 ? (
            <div className="center-div">
              <h4 className="gold">{`Sorry, No Review yet :)`}</h4>{" "}
            </div>
          ) : (
            <div>
              {customerReviews.reverse().map(item => (
                <div
                  className="my-3 custom-shadow p-3 col-10 mx-auto"
                  key={item._id}
                >
                  <h5>{item.customerName} &nbsp; &nbsp; </h5>
                  <p>{item.comment}</p>
                  <h6>
                    <span className="text-muted">
                      Reply was published at{" "}
                      {moment(item.createdAt).format("DD MM YYYY")}
                    </span>
                  </h6>
                  <div className="row">
                    {/* <button
                      className="btn btn-primary  m-2 w-25"
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => this.handleApproveReview(item._id)}
                    >
                      Approve
                    </button> */}
                    <button
                      className="btn btn-danger m-2 w-25"
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => this.handleDeleteReview(item._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}
