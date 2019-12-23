import React from "react";
import { RoomContext } from "../../context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function DashboardHomePage() {
  const context = useContext(RoomContext);
  const { hotels, handlePropertyChange, propertySearch } = context;

  const filterdHotels = hotels.filter(item =>
    item.propertyInfo.hotelName
      .toLowerCase()
      .includes(propertySearch.toLowerCase())
  );

  return (
    <section className="dashboard-homepage">
      <div className="dashboard-top">
        <h3 className="greeting-text">
          Welcome <strong>Wisdom </strong>
        </h3>
      </div>
      <br />
      <div className=" container dashboard-info">
        <h5>Group Home</h5>
        <div className="add-new-property-div">
          <Link to="/add-property" className="add-new-property">
            Add New Property
          </Link>
        </div>

        <br />
        <div className="property-search-div">
          <input
            type="text"
            name="propertySearch"
            value={propertySearch}
            className="property-search"
            placeholder={"Search for your property by name "}
            onChange={handlePropertyChange}
          />
          <i className="fas fa-search search"></i>
        </div>

        <br />

        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filterdHotels.map((item, index) => {
              return (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <td>
                    {" "}
                    <img
                      src={item.imageUrl || null}
                      alt="hotel"
                      className="hotel-img"
                    />{" "}
                    <Link
                      to={`/hotel/${item.propertyInfo.hotelName}`}
                      className="hotel-link"
                    >
                      {" "}
                      {item.propertyInfo.hotelName}
                    </Link>
                  </td>
                  <td>{item.propertyInfo.city}</td>
                  <td>{item.approved ? "Approved" : "Awaiting Approval"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <br />
    </section>
  );
}
