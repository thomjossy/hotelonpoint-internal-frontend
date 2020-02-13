import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import { paginate } from "../../../utils/paginate";
import CustomLoading from "../../assets/CustomLoading";
import { Link } from "react-router-dom";

export default class Invoice extends Component {
  state = {
    hotels: [],
    searchfield: "",
    loading: true,
    pageSize: 10,
    currentPage: 1
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        `http://localhost:3400/admin/ccgetAllHotels`
      );
      console.log("bookingsss", response);
      this.setState({
        hotels: response.data.data,
        loading: false
      });
      console.log("bookingsss", this.state.hotels);
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = e => {
    this.setState({ searchfield: e.target.value });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const { loading, pageSize, currentPage, searchfield, hotels } = this.state;
    const filteredHotels = hotels.filter(item =>
      item.propertyInfo.hotelName
        .toLowerCase()
        .includes(searchfield.toLowerCase())
    );
    let pageCount = Math.ceil(filteredHotels.length / pageSize);

    if (pageCount === 1) {
      pageCount = null;
    }
    const newHotels = paginate(filteredHotels, currentPage, pageSize);
    const pages = _.range(1, pageCount + 1);
    return loading ? (
      <CustomLoading />
    ) : (
      <section className="container">
        <br />
        <div className="property-search-div">
          <input
            type="text"
            name="searchfield"
            value={searchfield}
            className="property-search"
            placeholder={"Search for property by name "}
            onChange={this.handleChange}
          />
          <i className="fas fa-search search"></i>
        </div>
        <br />
        <div className="scroll-div">
          <table className="approvedHotels-table">
            <thead>
              <tr>
                <th>Hotel Name</th>
                <th>View Invoice</th>
              </tr>
            </thead>
            <tbody>
              {newHotels.map((item, index) => {
                return (
                  <tr key={`${item._id}-${index}`}>
                    <td>{item.propertyInfo.hotelName}</td>
                    <td>
                      <Link to={`/care/invoice/${item._id}`}>
                        {" "}
                        View Invoice
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="pagination mt-4">
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
