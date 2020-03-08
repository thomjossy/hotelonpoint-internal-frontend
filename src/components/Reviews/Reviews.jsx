import React, { Component } from "react";
import Axios from "axios";
import moment from "moment";
import _ from "lodash";
import CustomLoading from "../assets/CustomLoading";
import { paginate } from "../../utils/paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      currentPage: 1,
      loading: true,
      customerReviews: [],
      reviewReply: ""
    };
  }

  async componentDidMount() {
    try {
      const response = await Axios.get(
        `https://calm-anchorage-14244.herokuapp.com/Review/${this.props.match.params.id}`
      );
      console.log("axiosresponse", response.data.data);
      console.log("response", response.data.data);
      this.setState({
        customerReviews: response.data.data.reviews,
        loading: false
      });
      if (response.data.data >= 400) {
        return alert("Internal Server Error");
      }
      console.log("statevalues", this.state.customerReviews);
    } catch (err) {
      console.error("err", err);
      this.setState({
        loading: false
      });
    }
  }

  handleChange = e => {
    this.setState({ reviewReply: e.target.value });
  };

  handlePageChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  handleReviewReply = async id => {
    const data = {
      comment: this.state.reviewReply
    };
    try {
      const response = await Axios.post(
        `https://calm-anchorage-14244.herokuapp.com/comment/${id}`,
        data
      );
      this.setState({ reviewReply: "" });
      toast.success("Reply was Successful");
      if (response) {
        setTimeout(() => {
          window.location.href = `/hotel/${this.props.match.params.id}/reviews`;
        }, 1000);
      }
    } catch (error) {
      if (error) {
        console.log(error);
        return alert("An Unexpected error just occured");
      }
    }
  };
  render() {
    const { loading, customerReviews, pageSize, currentPage } = this.state;
    let pageCount = Math.ceil(customerReviews.length / pageSize);

    if (pageCount === 1) {
      pageCount = null;
    }
    const newCustomerReviews = paginate(customerReviews, currentPage, pageSize);
    const pages = _.range(1, pageCount + 1);
    return loading ? (
      <CustomLoading />
    ) : (
      <section className="review-section container mt-4">
        <ToastContainer />
        {customerReviews.length == 0 ? (
          <div className="center-div">
            <h3 className="gold">{`Sorry, No Reviews yet :)`}</h3>
          </div>
        ) : (
          <div>
            {newCustomerReviews.map((item, index) => {
              return (
                <div className="row my-3 custom-shadow p-4" key={item._id}>
                  <div className="col-md-6">
                    <p>{item.review}</p>
                    <div className="reviewer-info">
                      <p>
                        <strong>{item.customerName}</strong>
                      </p>
                      <div className="star-ratings">
                        {item.totalRating} Stars
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="reply-div">
                      <textarea
                        name="reviewReply"
                        value={this.state.reviewReply}
                        className="reply-text"
                        placeholder="Leave a reply"
                        rows="5"
                        onChange={this.handleChange}
                      ></textarea>
                      <button
                        className="btn  btn-dark btn-md w-50"
                        onClick={() => {
                          this.handleReviewReply(item._id);
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              );
              {
                /* End of Return Component */
              }
            })}
          </div>
        )}
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {pages.map(page => {
              return (
                <li
                  key={page}
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                >
                  <a
                    className="page-link"
                    onClick={() => this.handlePageChange(page)}
                  >
                    {page}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    );
  }
}
