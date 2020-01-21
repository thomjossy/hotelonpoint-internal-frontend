import React, { Component } from "react";
import CustomLoading from "../../assets/CustomLoading";
import axios from "axios";

export default class HotelReviewPage extends Component {
  state = {
    loading: false
  };

  async componentDidMount() {
    const response = await axios.get("someurl");
    console.log(response);
  }

  render() {
    const { loading } = this.state;
    return (
      <section className="container booking-table-container">
        {loading ? (
          <CustomLoading />
        ) : (
          <div className="review-div">
            <div className="review-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                fuga, voluptatum nobis fugiat debitis sed numquam repellendus
                iste quod id. Eos ad similique molestias aliquid nesciunt
                aperiam iste. Dolorum, qui!
              </p>
              <p>
                <strong>Reviewer Name</strong>
              </p>
              <button className="btn btn-primary">Approve</button>
            </div>
          </div>
        )}
      </section>
    );
  }
}
