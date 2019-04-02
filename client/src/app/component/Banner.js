import React, { PureComponent } from "react";
import "./banner.css";

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import ReactSwipe from "react-swipe";

export default class Banner extends PureComponent {
  render() {
    return (
      <div className="banner">
        <ReactSwipe
          key="3"
          className="carousel"
          swipeOptions={{ continuous: true, auto: 2500, speed: 1000 }}
        >
          <img className="imgBanner" alt="Banner" src={img1} />
          <img className="imgBanner" alt="Banner" src={img2} />
          <img className="imgBanner" alt="Banner" src={img3} />
        </ReactSwipe>
      </div>
    );
  }
}
