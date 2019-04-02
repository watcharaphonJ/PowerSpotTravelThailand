import React, { Component } from "react";
import "./SpotTag.css";

export default class SpotTag extends Component {
  constructor(props) {
    super(props);
    const prop = this.props.type;
    this.state = {
      type: prop
    };
  }
  render() {
    const { type } = this.state;
    return <div className="borderPowerSpotTag">{type}</div>;
  }
}
