import React, { Component } from "react";
import Map from "./Map";
export default class MapHome extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          center={{ lat: 18.5204, lng: 73.8567 }}
          height="300px"
          zoom={15}
        />
      </div>
    );
  }
}
