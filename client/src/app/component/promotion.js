import React, { Component } from "react";
import "./promotion.css";
import promotion1 from "../img/promotion1.jpg";
import promotion2 from "../img/promotion2.jpg";
import promotion3 from "../img/promotion3.jpg";
import promotion4 from "../img/promotion4.jpg";
import promotion5 from "../img/promotion5.jpg";
import promotion6 from "../img/promotion6.jpg";

export default class Promotion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: props.detail
    };
  }
  render() {
    return (
      <div className="backgroundPromotion">
        <div className="">
          <div className="txtPromotion">Promotion</div>
          <div className="divAlignPromotion">
            <div className="alignPromotion">
              <img className="imgPromotion" src={promotion2} alt="Promotion2" />
              <img className="imgPromotion" src={promotion3} alt="Promotion3" />
              <img className="imgPromotion" src={promotion4} alt="Promotion4" />

              <img className="imgPromotion" src={promotion1} alt="Promotion1" />
              <img className="imgPromotion" src={promotion5} alt="Promotion5" />
              <img className="imgPromotion" src={promotion6} alt="Promotion6" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
