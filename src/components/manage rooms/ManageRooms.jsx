import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Spinner from "../images/Spinner.gif";
import axios from "axios";

class ManageRooms extends Component {
  state = {
    hotelRooms: [],
    loading: true,
    response: {}
  };

  async componentDidMount() {
    try {
      const promise = await axios.get(
        `https://calm-anchorage-14244.herokuapp.com/room/${this.props.match.params.id}`
      );
      this.setState({
        hotelRooms: promise.data.data,
        loading: false,
        response: promise.data
      });
      window.scrollTo(0, 0);
    } catch (err) {
      if (err.message == "Network Error") {
        return alert("There is a very Poor Network");
      }

      this.setState({ loading: false, response: err.response.data });
    }
  }

  handleRoomDelete = async id => {
    const hotelRooms = [...this.state.hotelRooms];
    try {
      const promise = await axios.delete(
        `https://calm-anchorage-14244.herokuapp.com/room/${id}`
      );
      console.log("promise from delete", promise);

      const newHotelRooms = this.state.hotelRooms.filter(
        room => room._id !== id
      );
      this.setState({
        hotelRooms: newHotelRooms
      });
    } catch (err) {
      console.log(err);
      this.setState({
        hotelRooms
      });
    }
  };
  render() {
    if (this.state.response.status === "error") {
      return (
        <div className="no-result">
          <h5 className="text-center mt-5">
            No Hotel room uploaded yet, upload a room to view rooms
          </h5>
          <br />
          <div className="error-add-room">
            <Link
              to={`/hotel/${this.props.match.params.id}/rooms/addroom`}
              className="add-new-room"
            >
              Upload a Room
            </Link>
          </div>
        </div>
      );
    } else {
      return this.state.loading ? (
        <div className="center-div">
          <img src={Spinner} alt="loading..." />
        </div>
      ) : (
        <section className="manage-rooms-section container">
          <p>
            To edit a room click on the edit button, to delete a room click on
            the delete button note, the delete action is permanent
          </p>
          <div className="add-new-property-div">
            <Link
              to={`/hotel/${this.props.match.params.id}/rooms/addroom`}
              className="add-new-property"
            >
              Add New Room
            </Link>
          </div>

          <br />
          <table className="manage-rooms-table">
            <thead>
              <tr>
                <th>Room Name</th>
                <th>Number of Occupied Room</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.hotelRooms.reverse().map((item, index) => (
                <tr key={item._id}>
                  <td>{item.roomType}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/hotel/${this.props.match.params.id}/rooms/${item.roomType}/edit-number`,
                        state: { id: item._id }
                      }}
                    >
                      Mark Booked Room
                    </Link>
                  </td>
                  <td className="text-primary">
                    <Link
                      to={{
                        pathname: `/hotel/${this.props.match.params.id}/rooms/${item.roomType}/editroom`,
                        state: { id: item._id }
                      }}
                    >
                      Edit
                    </Link>
                  </td>

                  <td
                    className="text-danger delete-room-btn"
                    onClick={() => this.handleRoomDelete(item._id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
        </section>
      );
    }
  }
}
export default withRouter(ManageRooms);
