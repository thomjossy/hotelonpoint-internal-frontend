import React, { Component } from "react";
import { RoomContext } from "../../context";

export default class AddHotelsPage extends Component {
  static contextType = RoomContext;

  render() {
    const { step } = this.context;
    return <section className="container"></section>;
  }
}
