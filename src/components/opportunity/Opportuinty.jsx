import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Spinner from "../images/Spinner.gif";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default class Opportuinty extends Component {
  state = {
    hotel: {},
    percentage: 10,
    isSubmitting: false,
    loading: true
  };

  handleChange = e => {
    this.setState({ percentage: e.target.value });
  };

  handleSubmitt = async percentageValue => {
    console.log("submmit value", percentageValue);
    const data = {
      percentageValue
    };
    this.setState({ isSubmitting: true });
    try {
      const result = await axios.put(
        `https://calm-anchorage-14244.herokuapp.com/hotel/percentage/${this.props.match.params.id}`,
        data
      );

      if (result) {
        this.setState({
          isSubmitting: false
        });
        toast.success("Successfully updated");
        setTimeout(() => {
          window.location.href = `/hotel/${this.props.match.params.id}/opportunity`;
        }, 1000);
      }
    } catch (err) {
      this.setState({
        isSubmitting: false
      });
      toast.error(this.state.message);
    }
    console.log("submmit value", percentageValue);
    console.log(this.state.percentage);
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://calm-anchorage-14244.herokuapp.com/hotel/${this.props.match.params.id}`
    );

    console.log("state response", response);

    this.setState({ hotel: response.data.data.hotel, loading: false });
    console.log("state value", this.state.hotel);
  }

  render() {
    const { percentage, isSubmitting, loading } = this.state;
    console.log("id for params", this.props.match.params.id);
    return loading ? (
      <div className="center-div">
        <img src={Spinner} alt="Loading..." />
      </div>
    ) : (
      <div className="container custom-shadow mt-4">
        <ToastContainer />
        <h3>
          Your percentage determines your visibility with HotelOnPoints.com
        </h3>
        <br />
        <div className="row">
          <div className="col-md-6">
            <p>
              Percentage: &nbsp; <strong>{percentage}%</strong>
            </p>
            <div className="percentage-form-group">
              <label htmlFor="percentage">Increase Visibilty</label>
              <input
                type="range"
                name="percentage"
                className="percentage-input"
                min={10}
                max={50}
                id="percentage"
                value={percentage}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button
                disabled={isSubmitting}
                onClick={() => this.handleSubmitt(percentage)}
                className="btn btn-dark btn-small"
              >
                Submit
                {this.state.isSubmitting && <CircularProgress size={30} />}
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <p className="text-center">
              Your current commission with HotelOnPoints
            </p>
            <h1 className="text-center gold">
              {this.state.hotel.percentageValue}%
            </h1>
          </div>
        </div>
      </div>
    );
  }
}
