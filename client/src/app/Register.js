import React, { Component } from "react";
import NavigationBar from "./component/NavigationBar";
export default class Register extends Component {
  render() {
    return (
      <div className="body_container">
        <NavigationBar />
        <div style={{ height: "100%" }}>
          <div
            style={{
              width: "100%",
              minHeight: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            Register Coming Soon
          </div>
        </div>
      </div>
    );
  }
}
