import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";

import Home from "./app/Home";
import Manage from "./app/Manage";
import TourseDetail from "./app/component/tours_detail";
import Register from "./app/Register";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App ">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/manage" component={Manage} />
            <Route exact path="/tours_detail" component={TourseDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
