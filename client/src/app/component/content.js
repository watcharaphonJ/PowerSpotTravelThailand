import React, { Component } from "react";
import Search from "./search";
import Promotion from "./promotion";
import Tour from "./tour";
import "./content.css";
import "react-input-range/lib/css/index.css";
// import "react-datepicker/dist/react-datepicker.css";
export default class content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetched: false
    };
  }
  componentWillMount() {
    fetch("http://localhost:8081/tour")
      .then(response => response.json())
      .then(data => {
        this.setState({
          fetched: true,
          tours: data.results
        });
      });
  }

  setTours = newTours => {
    this.setState({
      tours: newTours
    });
    console.log(newTours);
  };

  render() {
    if (this.state.fetched) {
      return (
        <div className="divContent">
          <div className="tour">
            <Search searchTours={this.setTours} />
            <Tour detail={this.state.tours} />
          </div>
          <div className="promotion">
            <Promotion detail={this.state.tours} />
          </div>
        </div>
      );
    } else {
      return "Loading...";
    }
  }
}
