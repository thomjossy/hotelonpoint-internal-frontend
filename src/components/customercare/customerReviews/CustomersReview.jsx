import React, { Component } from "react";
import Axios from "axios";
import CustomLoading from "../../assets/CustomLoading";
import CustomersReviewPage from "./CustomerReviewPage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default class CustomersReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isSubmitting: false,
      customerReviews: []
    };
  }

  async componentDidMount() {
    const response = await Axios.get(
      `https://calm-anchorage-14244.herokuapp.com/Review/all`
    );
    this.setState({
      customerReviews: response.data.data.reviews,
      loading: false
    });
  }

  handleApproveReview = async review => {
    const value = {
      approved: true
    };
    try {
      const response = await Axios.put(
        `https://calm-anchorage-14244.herokuapp.com/Review/${review}`,
        value
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
        `https://calm-anchorage-14244.herokuapp.com/Review/${review}`
      );

      this.setState({ isSubmitting: true });
      toast.success("Successfully Deleted");
      if (response) {
        setTimeout(() => {
          window.location.href = `/care/reviews`;
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
    const { loading, customerReviews } = this.state;
    const newCustomerReviews = customerReviews
      .filter(item => item.approved !== true)
      .reverse();

    return loading ? (
      <CustomLoading />
    ) : (
      <section className="container">
        <ToastContainer />
        <div>
          {newCustomerReviews.length === 0 ? (
            <div className="center-div">
              <h4 className="gold">{`Sorry, No Review yet :)`}</h4>{" "}
            </div>
          ) : (
            <div>
              {newCustomerReviews.map((item, index) => (
                <CustomersReviewPage
                  key={item._id}
                  {...item}
                  isSubmitting={this.state.isSubmitting}
                  handleApproveReview={this.handleApproveReview}
                  handleDeleteReview={this.handleDeleteReview}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    );
  }
}
